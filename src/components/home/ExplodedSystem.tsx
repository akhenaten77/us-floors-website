"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExplodedSystem() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // pin: true -> REMOVED. Relying on CSS sticky wrapper logic to prevent calculation errors.
      }
    });

    // ── INITIAL SCENE VISIBILITY ──
    // Hide the master scene container initially so high-Z elements don't show before it starts
    gsap.set(".scene-container", { opacity: 0 });
    tl.to(".scene-container", { opacity: 1, duration: 0.5 }, 0); 

    // ── INITIAL STATE ──
    // Place elements high up on the Z axis (translating exactly towards the screen/above in Isometric)
    // CRITICAL: We DO NOT animate or set opacity on these preserve-3d groups. Setting opacity < 1 mathematically breaks native WebKit 3D intersection sorting!
    gsap.set(".pedestal-group", { z: 1200 }); 
    gsap.set([".stringer-top", ".stringer-bottom", ".stringer-left", ".stringer-right"], { z: 1500 });
    gsap.set(".tile-group", { z: 1800 });
    
    gsap.set([".text-pedestal", ".text-stringer", ".text-tile"], { opacity: 0, y: 20 });

    // ── TIME 0.5 - 2.0: PEDESTALS ──
    tl.to(".pedestal-group", {
      z: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.15 // User explicitly wanted pedestals with "slight stagger between them"
    }, 0.5);
    tl.to(".text-pedestal", { opacity: 1, y: 0, duration: 0.5 }, 0.8);

    // ── TIME 2.5 - 3.5: STRINGERS ──
    tl.to(".text-pedestal", { opacity: 0, y: -10, duration: 0.4 }, 2.3);
    
    tl.to([".stringer-top", ".stringer-bottom", ".stringer-left", ".stringer-right"], {
      z: 0, // Drop straight down from Z instead of sliding from sides
      duration: 1,
      ease: "back.out(1.2)", 
      // User explicitly requested stringers drop "simultaneously" without stagger
    }, 2.5);
    tl.to(".text-stringer", { opacity: 1, y: 0, duration: 0.5 }, 2.8);

    // ── TIME 4.0 - 5.5: TILE ──
    tl.to(".text-stringer", { opacity: 0, y: -10, duration: 0.4 }, 3.8);

    tl.to(".tile-group", {
      z: 0,
      duration: 1.5,
      ease: "power3.out"
    }, 4.0);
    tl.to(".text-tile", { opacity: 1, y: 0, duration: 0.5 }, 4.3);

    // ── TIME 5.5 - 6.5: HOLD ──
    tl.to({}, { duration: 1.2 });

    // ── TIME 6.7 - 7.2: CLEAR THE SCREEN ──
    // Fading the global container guarantees a perfect screen clear without breaking individual 3D elements natively
    tl.to([".scene-container", ".text-tile", ".section-header"], {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.inOut"
    }, 6.7);

  }, { scope: wrapperRef }); // Wrap scope to outer wrapper

  return (
    // OUTER NATIVE SCROLL WRAPPER (Forces 4000px height mathematically into the DOM to guarantee no overlaps)
    <div ref={wrapperRef} className="w-full relative h-[4000px] border-t border-white/5 bg-[#0f1115]">
      
      {/* INNER STICKY CONTAINER (Replaces GSAP JS pinning with rock-solid CSS) */}
      <section className="sticky top-0 text-white w-full h-screen overflow-hidden flex flex-col items-center justify-center font-sans">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative h-full px-6">
          
          {/* Header */}
          <div className="section-header absolute top-20 left-1/2 -translate-x-1/2 text-center w-full z-50">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-2 text-[#e2e8f0]">
              Precision Assembly
            </h2>
            <p className="text-[var(--color-accent)] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase opacity-70">
              Engineered. Mechanical. Exact.
            </p>
          </div>

          {/* Dynamic Text Labels */}
          <div className="absolute top-40 md:top-48 left-1/2 -translate-x-1/2 text-center z-50 w-full pointer-events-none h-16">
            <h3 className="text-pedestal absolute inset-0 text-xl md:text-2xl font-medium text-[#cbd5e1] tracking-wide">
              Strong Pedestal Foundation
            </h3>
            <h3 className="text-stringer absolute inset-0 text-xl md:text-2xl font-medium text-[#cbd5e1] tracking-wide">
              Rigid Stringer Framework
            </h3>
            <h3 className="text-tile absolute inset-0 text-xl md:text-2xl font-medium text-[#cbd5e1] tracking-wide">
              Precision Engineered Panels
            </h3>
          </div>

          {/* 3D Scene */}
          <div className="scene-container relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] perspective-[2500px] mt-16 md:mt-24 pointer-events-none">
            
            <div 
              className="absolute inset-0 preserve-3d"
              style={{ 
                transformStyle: "preserve-3d", 
                transform: "rotateX(60deg) rotateZ(-45deg)" 
              }}
            >
              {/* Ground Shadow Grid */}
              <div className="absolute inset-[-40%] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] transform-style-3d translate-z-[-1px] opacity-50" style={{ transform: "translateZ(-1px)" }}></div>

              {/* Pedestals Setup */}
              {[
                { id: 'tl', t: '0%', l: '0%' },
                { id: 'tr', t: '0%', l: '100%' },
                { id: 'bl', t: '100%', l: '0%' },
                { id: 'br', t: '100%', l: '100%' },
              ].map((pos) => (
                <div 
                  key={pos.id} 
                  className="pedestal-group absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2" 
                  style={{ top: pos.t, left: pos.l, transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-[#94a3b8] border border-[#64748b] rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ transform: "translateZ(0px)" }}></div>
                  
                  {Array.from({ length: 15 }).map((_, j) => (
                    <div 
                      key={j} 
                      className="absolute top-1/2 left-1/2 w-[10px] h-[10px] rounded-full bg-[#cbd5e1] border-[0.5px] border-[#94a3b8] -translate-x-1/2 -translate-y-1/2" 
                      style={{ transform: `translateZ(${j * 4}px)` }} 
                    />
                  ))}
                  
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-[#e2e8f0] border border-[#94a3b8] rounded-sm shadow-xl" style={{ transform: "translateZ(60px)" }}></div>
                </div>
              ))}

              {/* Top Stringer */}
              <div className="stringer-group stringer-top absolute top-0 left-0 w-full h-3 -translate-y-1/2" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-[#e2e8f0] border border-[#94a3b8]" style={{ transform: 'translateZ(62px)' }} />
                <div className="absolute bottom-0 left-0 w-full h-[18px] bg-[#94a3b8] border-x border-b border-[#64748b]" style={{ transformOrigin: 'bottom', transform: 'translateZ(62px) rotateX(-90deg)' }} />
              </div>
              
              {/* Bottom Stringer */}
              <div className="stringer-group stringer-bottom absolute bottom-0 left-0 w-full h-3 translate-y-1/2" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-[#e2e8f0] border border-[#94a3b8]" style={{ transform: 'translateZ(62px)' }} />
                <div className="absolute top-0 left-0 w-full h-[18px] bg-[#cbd5e1] border-x border-t border-[#64748b]" style={{ transformOrigin: 'top', transform: 'translateZ(62px) rotateX(90deg)' }} />
              </div>

              {/* Left Stringer */}
              <div className="stringer-group stringer-left absolute top-0 left-0 h-full w-3 -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-[#e2e8f0] border border-[#94a3b8]" style={{ transform: 'translateZ(62px)' }} />
                <div className="absolute top-0 right-0 h-full w-[18px] bg-[#94a3b8] border-y border-r border-[#64748b]" style={{ transformOrigin: 'right', transform: 'translateZ(62px) rotateY(90deg)' }} />
              </div>

              {/* Right Stringer */}
              <div className="stringer-group stringer-right absolute top-0 right-0 h-full w-3 translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-[#e2e8f0] border border-[#94a3b8]" style={{ transform: 'translateZ(62px)' }} />
                <div className="absolute top-0 left-0 h-full w-[18px] bg-[#cbd5e1] border-y border-l border-[#64748b]" style={{ transformOrigin: 'left', transform: 'translateZ(62px) rotateY(-90deg)' }} />
              </div>

              {/* Tile Setup */}
              <div className="tile-group absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 bg-[#f8f9fa] border border-[#cbd5e1] shadow-[inset_0_0_40px_rgba(0,0,0,0.03)]" style={{ transform: 'translateZ(74px)' }}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#e2e8f0] border-x border-b border-[#cbd5e1] flex items-center justify-around px-2" style={{ transformOrigin: 'bottom', transform: 'translateZ(74px) rotateX(-90deg)' }}>
                  <div className="w-4 h-1 rounded-full bg-[#cbd5e1]/50"></div>
                  <div className="w-4 h-1 rounded-full bg-[#cbd5e1]/50"></div>
                  <div className="w-4 h-1 rounded-full bg-[#cbd5e1]/50"></div>
                </div>
                
                <div className="absolute top-0 right-0 w-[10px] h-full bg-[#f1f5f9] border-y border-r border-[#cbd5e1] flex flex-col items-center justify-around py-2" style={{ transformOrigin: 'right', transform: 'translateZ(74px) rotateY(90deg)' }}>
                  <div className="w-1 h-4 rounded-full bg-[#cbd5e1]/50"></div>
                  <div className="w-1 h-4 rounded-full bg-[#cbd5e1]/50"></div>
                  <div className="w-1 h-4 rounded-full bg-[#cbd5e1]/50"></div>
                </div>

                <div className="absolute inset-[-10%] bg-black/40 blur-2xl rounded-lg" style={{ transform: 'translateZ(10px)' }}></div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}