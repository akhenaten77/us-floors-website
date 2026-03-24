"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    title: "HPL Panels",
    desc: "High-density woodcore and calcium sulphate panels with premium High Pressure Laminate anti-static finish.",
    img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80"
  },
  {
    title: "Pedestals & Stringers",
    desc: "Galvanized steel substructures engineered to support extreme dynamic and static loads with precision adjustability.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
  },
  {
    title: "Accessories",
    desc: "Airflow grilles, grommets, lifting tools, and ramp systems for comprehensive facility integration.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
  }
];

export default function ProductHighlight() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".product-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(".product-header",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-20 bg-[var(--color-darker)] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="product-header flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
              Performance <span className="text-[var(--color-accent)]">Components</span>
            </h2>
            <p className="text-[var(--color-light)]/60 max-w-xl text-lg font-medium">
              Every element of a FLEXI system is manufactured to exceeding tolerances, ensuring absolute stability for critical infrastructure.
            </p>
          </div>
          <Link href="/products" className="group hidden md:flex items-center gap-2 text-[var(--color-light)] hover:text-white font-semibold transition-colors mt-6 md:mt-0">
            View All Components
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="product-card group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:border-[var(--color-accent)]/50 transition-all duration-500 cursor-pointer flex flex-col h-[500px]"
            >
              <div className="h-[250px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-dark)]/60 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 justify-between relative z-20 bg-gradient-to-t from-[var(--color-darker)] via-[var(--color-darker)] to-transparent">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{product.title}</h3>
                  <p className="text-[var(--color-light)]/70 text-sm leading-relaxed font-medium">
                    {product.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between text-[var(--color-accent)] font-bold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="uppercase tracking-widest">Explore Specs</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Link href="/products" className="group md:hidden flex items-center justify-center gap-2 text-[var(--color-light)] hover:text-white font-semibold transition-colors mt-12 w-full px-6 py-4 border border-white/10 rounded-sm bg-white/5 uppercase tracking-widest text-sm">
          View All Components
          <ArrowUpRight className="w-5 h-5" />
        </Link>
        
      </div>
    </section>
  );
}
