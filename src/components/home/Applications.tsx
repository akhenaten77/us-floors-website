"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Server, Building2, MonitorCog, ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const apps = [
  {
    title: "Data Centers",
    subtitle: "Mission-Critical Infrastructure",
    desc: "Heavy-load calcium sulphate panels with integrated airflow management for hot/cold aisle containment. Rated for 1,500+ kg per pedestal.",
    icon: Server,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Load Capacity", value: "1,500 kg" },
      { label: "Airflow Efficiency", value: "95%" },
    ]
  },
  {
    title: "Corporate Offices",
    subtitle: "Modern Workspace Solutions",
    desc: "Modular HPL panels with premium finishes and under-floor cable routing. Designed for flexible, reconfigurable workspace layouts.",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Reconfigurability", value: "100%" },
      { label: "Cable Capacity", value: "200mm" },
    ]
  },
  {
    title: "Server Rooms",
    subtitle: "Precision Environments",
    desc: "Anti-static flooring with ESD protection and perforated airflow tiles. Engineered for sensitive electronic equipment environments.",
    icon: MonitorCog,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "ESD Rating", value: "< 1MΩ" },
      { label: "Fire Rating", value: "Class 0" },
    ]
  }
];

export default function Applications() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".app-card", 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-24 bg-[var(--color-darker)] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Where We Excel</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            Built For Every <span className="text-[var(--color-accent)]">Environment</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {apps.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={idx}
                className="app-card group relative bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${app.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darker)] via-[var(--color-darker)]/60 to-transparent"></div>
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[var(--color-accent)] text-xs font-bold tracking-[0.15em] uppercase mb-1">{app.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{app.title}</h3>
                  <p className="text-[var(--color-light)]/50 text-sm leading-relaxed mb-5">{app.desc}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {app.stats.map((stat, si) => (
                      <div key={si} className="bg-white/[0.04] border border-white/5 rounded-sm px-3 py-2.5 text-center">
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                        <p className="text-[var(--color-light)]/40 text-xs font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/products" className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
