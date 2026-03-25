"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const gridOverlay = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-bg-grid",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    )
      .fromTo(".hero-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1.5"
      );
  }, { scope: container });

  // Mouse tracking for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!container.current || !gridOverlay.current) return;
      
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(gridOverlay.current, {
        background: `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255,255,255,0.15), transparent)`,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const section = container.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={container} className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-dark)] py-32 md:py-40">
      {/* Animated Background Grid */}
      <div
        className="hero-bg-grid absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ opacity: 0 }}
      >
        {/* Spotlight overlay that follows cursor */}
        <div 
          ref={gridOverlay}
          className="absolute inset-0 z-10 opacity-100 pointer-events-none transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle 300px at 50% 50%, rgba(255,255,255,0.05), transparent)' }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-[var(--color-dark)] z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)] via-transparent to-[var(--color-dark)] z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <p className="hero-reveal text-sm md:text-base text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-6">Raised Access Floor Solutions</p>
          <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Engineered Flooring.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40">
              Built for Performance.
            </span>
          </h1>
        </div>

        <div className="mb-10">
          <p className="hero-reveal text-lg md:text-xl text-[var(--color-light)]/50 max-w-2xl mx-auto font-normal leading-relaxed">
            Complete raised access flooring solutions for data centers, commercial spaces, and technical environments.
          </p>
        </div>

        <div className="hero-reveal flex gap-4 sm:gap-6 flex-wrap justify-center">
          <a href="/products" className="px-8 py-4 bg-[var(--color-light)] text-[var(--color-dark)] font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-[0_0_30px_var(--color-accent-glow)]">
            Explore Systems
          </a>
          <a href="/contact" className="px-8 py-4 bg-white/5 text-white font-semibold tracking-wider uppercase text-sm rounded-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            Consult an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
