"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".cta-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-40 bg-[var(--color-light)] relative z-20 rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6 max-w-5xl text-center cta-content flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black text-[var(--color-dark)] uppercase tracking-tighter mb-8 leading-[1]">
          Ready to Elevate <br className="hidden md:block" /> Your Facility?
        </h2>
        <p className="text-xl text-[var(--color-darker)]/70 max-w-2xl mx-auto font-medium mb-12">
          Consult with our engineering team to design a bespoke raised access flooring system tailored perfectly to your load and architectural requirements.
        </p>
        
        <Link href="/contact" className="group relative px-12 py-6 bg-[var(--color-dark)] text-white font-black tracking-widest uppercase text-lg rounded-sm overflow-hidden flex items-center justify-center gap-4 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">Get A Quote</span>
          <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          <div className="absolute inset-0 bg-[var(--color-accent)] transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
        </Link>
      </div>
    </section>
  );
}
