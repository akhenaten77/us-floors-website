"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Flame } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const specs = [
  {
    icon: Zap,
    label: "Dynamic Load Capacity",
    value: 1500,
    unit: "kN/m²",
    desc: "Engineered for heavy data center equipment racks."
  },
  {
    icon: Shield,
    label: "Lifespan Durability",
    value: 50,
    unit: "Years+",
    desc: "Guaranteed structural integrity under extreme usage."
  },
  {
    icon: Flame,
    label: "Fire Resistance",
    value: 60,
    unit: "Mins",
    desc: "Class 0 fire rating for maximum facility safety."
  }
];

export default function TechSpecs() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".spec-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        }
      );

      const numbers = gsap.utils.toArray<HTMLElement>(".spec-number");
      numbers.forEach((num) => {
        const endValue = parseFloat(num.getAttribute("data-value") || "0");
        
        gsap.fromTo(num, 
          { innerHTML: 0 }, 
          {
            innerHTML: endValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%",
            },
            snap: { innerHTML: 1 },
            onUpdate: function() {
              num.innerHTML = Math.round(this.targets()[0].innerHTML).toString();
            }
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-20 bg-[var(--color-dark)] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            Verified <span className="text-[var(--color-accent)]">Metrics</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div key={idx} className="spec-item px-8 py-8 md:py-0 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-[var(--color-light)]">
                  <Icon size={28} />
                </div>
                
                <div className="mb-4 flex items-baseline gap-2 justify-center">
                  <span className="spec-number text-6xl md:text-7xl font-black text-white tracking-tighter" data-value={spec.value}>
                    0
                  </span>
                  <span className="text-xl font-bold text-[var(--color-accent)]">{spec.unit}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{spec.label}</h3>
                <p className="text-[var(--color-light)]/60 font-medium leading-relaxed max-w-xs mx-auto">
                  {spec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
