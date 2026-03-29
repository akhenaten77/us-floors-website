"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project Alpha: Tier-III Data Center",
    location: "Hyderabad, India",
    area: "160 sq ft",
    year: "2024",
    type: "Lecture Hall",
    img: "/projects/telekom-dc.jpg",
    desc: "A mission-critical installation featuring calcium sulphate panels and high-strength pedestals. The installation was completed with precision to support high-density server rack loads.",
  },
  {
    title: "Horizon Corporate Tower",
    location: "Mumbai, India",
    area: "120,000 sq ft",
    year: "2024",
    type: "Corporate Office",
    img: "/projects/lalala.jpg",
    desc: "Multi-floor raised access installation for a Fortune 500 headquarters. HPL panels with integrated cable management and custom-finished edge ramps for ADA compliance.",
  },
  {
    title: "AWS Cloud Hub",
    location: "Virginia, USA",
    area: "78,000 sq ft",
    year: "2023",
    type: "Server Room",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    desc: "High-load calcium sulphate panel system rated for server rack loads exceeding 1,500 kg per pedestal. Precision pedestal leveling across the entire facility footprint.",
  },
  {
    title: "Barclays Financial Center",
    location: "London, UK",
    area: "95,000 sq ft",
    year: "2023",
    type: "Trading Floor",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    desc: "Ultra-low profile raised floor for a trading floor environment with extensive under-floor cable routing for fiber optics and power distribution units.",
  },
  {
    title: "NACIN",
    location: "Hyderabad, India",
    area: "850 sq ft",
    year: "2024",
    type: "Hub Room",
    img: "/projects/infosys_installation.jpg",
    desc: "A sprawling office installation utilizing modular HPL panels. The layout was engineered to allow flexible floor reconfiguration and easy access to high-capacity under-floor wiring.",
  },
  {
    title: "Singapore Government NOC",
    location: "Singapore",
    area: "32,000 sq ft",
    year: "2022",
    type: "Command Center",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    desc: "Mission-critical network operations center with Class 6 heavy-duty panels, advanced airflow management, and fire-rated enclosures meeting government security standards.",
  },
];

const clients = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "IBM",
  "Infosys",
  "Wipro",
  "TCS",
  "Accenture",
  "Deutsche Telekom",
  "Barclays",
  "HSBC",
  "JP Morgan",
  "Oracle",
  "SAP",
  "Cisco",
  "Dell",
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".stat-block",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".proj-stats",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="proj-hero-text text-sm text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-4">Our Portfolio</p>
          <h1 className="proj-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Featured Projects
          </h1>
          <p className="proj-hero-text text-xl text-[var(--color-light)]/50 max-w-2xl font-normal leading-relaxed">
            Over 500+ installations across data centers, corporate offices, and mission-critical facilities worldwide. Here are some highlights.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-darker)] border-b border-white/5">
        <div className="proj-stats container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "2M+", label: "Sq Ft Installed" },
            { value: "12", label: "Countries" },
            { value: "100%", label: "On-Time Delivery" },
          ].map((s, i) => (
            <div key={i} className="stat-block">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">{s.value}</p>
              <p className="text-sm text-[var(--color-light)]/40 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card group bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darker)] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[var(--color-accent)]/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-4 text-[var(--color-light)]/40 text-xs mb-4 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                  </div>
                  <p className="text-[var(--color-light)]/50 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-light)]/30 text-xs font-semibold uppercase tracking-wider">{project.area}</span>
                    <span className="text-[var(--color-accent)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele — Horizontal Auto-scrolling Logos */}
      <section className="py-20 bg-[var(--color-darker)] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl mb-12">
          <div className="text-center">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Trusted By Industry Leaders</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Clientele</h2>
          </div>
        </div>

        {/* Scrolling Row 1 */}
        <div className="relative w-full mb-6">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="inline-flex items-center justify-center mx-4 px-10 py-5 bg-white/[0.04] border border-white/10 rounded-sm min-w-[200px] shrink-0 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <span className="text-white/60 font-bold text-lg tracking-wide">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Row 2 — reverse direction */}
        <div className="relative w-full">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className="inline-flex items-center justify-center mx-4 px-10 py-5 bg-white/[0.04] border border-white/10 rounded-sm min-w-[200px] shrink-0 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <span className="text-white/60 font-bold text-lg tracking-wide">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-light)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-6">
            Your Project Could Be Next
          </h2>
          <p className="text-[var(--color-darker)]/60 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ organizations that trust U S Floors for their raised access flooring needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-dark)] text-white font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)] transition-all duration-300"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
