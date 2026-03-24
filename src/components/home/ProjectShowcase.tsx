"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    title: "Deutsche Telekom DC",
    location: "Frankfurt, Germany",
    type: "Data Center",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    title: "Horizon Corporate Tower",
    location: "Mumbai, India",
    type: "Corporate Office",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    title: "Barclays Financial HQ",
    location: "London, UK",
    type: "Trading Floor",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    title: "AWS Cloud Hub",
    location: "Virginia, USA",
    type: "Server Room",
  },
  {
    img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
    title: "Infosys Tech Campus",
    location: "Bengaluru, India",
    type: "Technology Campus",
  },
  {
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    title: "Singapore NOC",
    location: "Singapore",
    type: "Command Center",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    title: "Oracle Cloud Campus",
    location: "Austin, USA",
    type: "Corporate Office",
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    title: "TCS Innovation Hub",
    location: "Pune, India",
    type: "Technology Center",
  },
];

export default function ProjectShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".showcase-header",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 85%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-24 bg-[var(--color-dark)] border-t border-white/5 overflow-hidden">
      {/* Header */}
      <div className="showcase-header container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            Featured <span className="text-[var(--color-accent)]">Environments</span>
          </h2>
        </div>
        <Link href="/projects" className="group flex items-center gap-2 text-[var(--color-light)]/70 hover:text-white font-semibold transition-colors mt-4 md:mt-0 text-sm">
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Horizontal Scroll Strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex-shrink-0 w-[320px] md:w-[380px] rounded-sm overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[var(--color-accent)]/40 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darker)] via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-[var(--color-accent)]/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">{project.title}</h3>
              <p className="flex items-center gap-1.5 text-[var(--color-light)]/40 text-xs font-medium">
                <MapPin className="w-3 h-3" /> {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
