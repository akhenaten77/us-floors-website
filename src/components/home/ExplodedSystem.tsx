"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExplodedSystem() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        }
      });

      // ── PHASE 1 (0 → 0.45): Components assemble onto the panel ──
      // Stringers grid drops onto the panel
      tl.fromTo(".layer-stringer",
        { y: -300, opacity: 0, scale: 1.1 },
        { y: 60, opacity: 1, scale: 1, duration: 0.15 },
        0
      );
      // Pedestals appear below
      tl.fromTo(".layer-pedestal",
        { y: -150, opacity: 0 },
        { y: 120, opacity: 1, duration: 0.15 },
        0.05
      );
      // Base slides in
      tl.fromTo(".layer-base",
        { y: 80, opacity: 0 },
        { y: 180, opacity: 1, duration: 0.15 },
        0.1
      );

      // Description labels appear during phase 1
      tl.fromTo(".desc-panel",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.1 },
        0.05
      );
      tl.fromTo(".desc-stringer",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.1 },
        0.15
      );
      tl.fromTo(".desc-pedestal",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.1 },
        0.25
      );

      // ── PHASE 2 (0.5 → 1.0): Everything fades up and out ──
      tl.to(".system-heading", { opacity: 0, y: -80, duration: 0.2 }, 0.5);
      tl.to(".layer-panel", { y: -400, opacity: 0, duration: 0.25 }, 0.55);
      tl.to(".layer-stringer", { y: -340, opacity: 0, duration: 0.25 }, 0.57);
      tl.to(".layer-pedestal", { y: -280, opacity: 0, duration: 0.25 }, 0.59);
      tl.to(".layer-base", { y: -220, opacity: 0, duration: 0.25 }, 0.61);
      tl.to(".desc-panel", { opacity: 0, y: -40, duration: 0.15 }, 0.55);
      tl.to(".desc-stringer", { opacity: 0, y: -40, duration: 0.15 }, 0.57);
      tl.to(".desc-pedestal", { opacity: 0, y: -40, duration: 0.15 }, 0.59);

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="bg-[var(--color-darker)] text-white h-screen flex flex-col items-center overflow-hidden relative w-full border-t border-white/5">
      <div ref={containerRef} className="w-full h-full relative max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading at the top with some padding */}
        <div className="system-heading text-center z-50 px-6 pt-28 md:pt-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            PRECISION ENGINEERING.
          </h2>
          <p className="text-[var(--color-accent)] text-xl md:text-2xl font-medium tracking-wide">
            LAYER BY LAYER ASSEMBLY.
          </p>
        </div>

        {/* Isometric 3D Visualization — positioned BELOW the heading */}
        <div className="relative w-full max-w-2xl flex justify-center perspective-[1200px] mt-12 md:mt-16 flex-1">

          {/* Panel — visible from the start, positioned clearly below text */}
          <div className="layer-panel absolute z-40 w-72 h-72 bg-slate-200 border-2 border-white backdrop-blur-md transform rotate-x-[60deg] rotate-z-[-45deg] shadow-[0_30px_50px_rgba(0,0,0,0.5)] flex items-center justify-center top-8">
            <div className="absolute inset-4 border border-slate-300/50"></div>
          </div>

          {/* Stringers Grid */}
          <div className="layer-stringer absolute z-30 w-72 h-72 transform rotate-x-[60deg] rotate-z-[-45deg] border-[3px] border-slate-600 shadow-xl grid grid-cols-2 grid-rows-2 top-8" style={{ opacity: 0 }}>
            <div className="border-r-[3px] border-b-[3px] border-slate-600"></div>
            <div className="border-b-[3px] border-slate-600"></div>
            <div className="border-r-[3px] border-slate-600"></div>
            <div></div>
          </div>

          {/* Pedestals */}
          <div className="layer-pedestal absolute z-20 w-72 h-72 transform rotate-x-[60deg] rotate-z-[-45deg] top-8" style={{ opacity: 0 }}>
            <div className="absolute top-0 left-0 w-4 h-24 bg-gradient-to-b from-slate-400 to-slate-800 rounded-sm translate-y-16 -translate-x-2 shadow-lg"></div>
            <div className="absolute top-0 right-0 w-4 h-24 bg-gradient-to-b from-slate-400 to-slate-800 rounded-sm translate-y-16 translate-x-2 shadow-lg"></div>
            <div className="absolute bottom-0 left-0 w-4 h-24 bg-gradient-to-b from-slate-400 to-slate-800 rounded-sm translate-y-16 -translate-x-2 shadow-lg"></div>
            <div className="absolute bottom-0 right-0 w-4 h-24 bg-gradient-to-b from-slate-400 to-slate-800 rounded-sm translate-y-16 translate-x-2 shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-24 bg-gradient-to-b from-slate-400 to-slate-800 rounded-sm translate-y-16 -translate-x-2 shadow-lg"></div>
          </div>

          {/* Base / Floor Slab */}
          <div className="layer-base absolute z-10 w-80 h-80 bg-stone-900 border-2 border-stone-700 transform rotate-x-[60deg] rotate-z-[-45deg] shadow-2xl flex items-center justify-center backdrop-blur-sm -ml-4 top-4" style={{ opacity: 0 }}>
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
          </div>

        </div>

        {/* Descriptions */}
        <div className="desc-panel absolute right-[5%] md:right-[15%] top-[35%] text-right z-50 max-w-xs" style={{ opacity: 0 }}>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">HPL Surface Panel</h3>
          <p className="text-sm text-[var(--color-light)]/60 leading-relaxed">High-pressure laminate core providing ultimate load distribution and static dissipation.</p>
        </div>

        <div className="desc-stringer absolute left-[5%] md:left-[15%] top-[55%] text-left z-50 max-w-xs" style={{ opacity: 0 }}>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Steel Stringers</h3>
          <p className="text-sm text-[var(--color-light)]/60 leading-relaxed">Heavy-duty galvanized steel framing for enhanced lateral stability and edge support.</p>
        </div>

        <div className="desc-pedestal absolute right-[5%] md:right-[15%] top-[72%] text-right z-50 max-w-xs" style={{ opacity: 0 }}>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Adjustable Pedestals</h3>
          <p className="text-sm text-[var(--color-light)]/60 leading-relaxed">Precision height adjustment mechanism to accommodate under-floor services.</p>
        </div>

      </div>
    </section>
  );
}