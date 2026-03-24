"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, Users, Award, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "2M+", label: "Sq Ft Installed" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every component is specified, manufactured, and installed to exacting tolerances. Zero compromises on quality.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We don't just deliver floors — we build long-term relationships with architects, contractors, and facility managers.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Continuous investment in training, tools, and materials ensures every project exceeds industry standards.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    desc: "Our systems are designed for longevity, reusability, and minimal environmental impact across their lifecycle.",
  },
];

const team = [
  { name: "Rajesh Kumar", role: "Managing Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Mitchell", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { name: "David Chen", role: "Installation Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Sharma", role: "Business Development", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
];

export default function AboutPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".abt-hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".stat-item", {
      scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(".value-card", {
      scrollTrigger: { trigger: ".values-grid", start: "top 75%" },
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
    });

    gsap.from(".team-card", {
      scrollTrigger: { trigger: ".team-grid", start: "top 75%" },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(".story-img", {
      scrollTrigger: { trigger: ".story-section", start: "top 70%" },
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="abt-hero-text text-sm text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-4">About U S Floors</p>
          <h1 className="abt-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Built on Trust.<br />Driven by Engineering.
          </h1>
          <p className="abt-hero-text text-xl text-[var(--color-light)]/50 max-w-2xl font-normal leading-relaxed">
            For over 15 years, U S Floors has been the trusted partner for architects, contractors, and facility managers who demand precision-engineered raised access flooring solutions.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[var(--color-darker)] border-b border-white/5">
        <div className="stats-grid container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">{s.value}</p>
              <p className="text-sm text-[var(--color-light)]/40 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section py-24 md:py-32 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              From Local Installer to Industry Leader
            </h2>
            <div className="space-y-5 text-[var(--color-light)]/60 leading-relaxed text-lg">
              <p>
                U S Floors was founded with a single mission: to bring world-class raised access flooring systems to commercial and technical environments across the country. As an authorized reseller and installer of FLEXI systems, we combine global manufacturing excellence with local expertise.
              </p>
              <p>
                What started as a small installation crew has grown into a full-service operation with in-house engineering, nationwide logistics, and a portfolio spanning Fortune 500 data centers, government facilities, and award-winning commercial offices.
              </p>
              <p>
                Today, we remain committed to the same principles that built our reputation: precision workmanship, transparent communication, and an unwavering focus on long-term system performance.
              </p>
            </div>
          </div>
          <div className="story-img relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Modern office with raised flooring"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[var(--color-darker)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Values</h2>
          </div>
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="value-card group bg-white/[0.03] border border-white/10 rounded-sm p-8 text-center hover:border-[var(--color-accent)]/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-[var(--color-light)]/50 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">The People Behind the Product</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Leadership Team</h2>
          </div>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="team-card group text-center">
                <div className="relative aspect-square rounded-sm overflow-hidden mb-5 border border-white/10 shadow-xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[var(--color-light)]/40 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-light)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[var(--color-darker)]/60 text-lg mb-10 max-w-xl mx-auto">
            Partner with a team that treats your project like their own. Reach out to discuss your next raised access flooring installation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-dark)] text-white font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)] transition-all duration-300"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
