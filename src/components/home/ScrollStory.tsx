"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollStory() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      // Parallax Images
      tl.to(".story-img-1", { yPercent: 20, ease: "none" }, 0)
        .to(".story-img-2", { yPercent: -30, ease: "none" }, 0);

      // Text reveals on scroll into view
      gsap.fromTo(".story-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-text-container",
            start: "top 80%",
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full py-24 md:py-32 bg-[var(--color-dark)] overflow-hidden z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="relative h-[500px] md:h-[700px] w-full">
            <div className="story-img-1 absolute top-0 left-0 w-[80%] h-[60%] bg-slate-800 rounded-sm shadow-2xl overflow-hidden z-10">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"></div>
            </div>
            <div className="story-img-2 absolute bottom-0 right-0 w-[65%] h-[55%] bg-slate-700 rounded-sm shadow-2xl overflow-hidden border-8 border-[var(--color-dark)] z-20">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"></div>
            </div>
          </div>

          <div className="story-text-container flex flex-col justify-center">
            <h2 className="story-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tighter leading-[1.1]">
              A Foundation You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#4dabff]">Trust</span>
            </h2>
            <p className="story-text text-lg md:text-xl text-[var(--color-light)]/70 leading-relaxed mb-10 font-medium">
              We design and install world-class raised access flooring systems engineered for heavy loads, superior static dissipation, and impeccable aesthetics. Our systems adapt to the evolving demands of modern workspaces and mission-critical data centers.
            </p>
            <div className="story-text">
              <ul className="space-y-6">
                {['Unmatched Load Capacity', 'Modular Reconfigurability', 'Optimal Airflow Distribution'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-semibold text-lg tracking-wide">
                    <CheckCircle2 className="text-[var(--color-accent)] w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}