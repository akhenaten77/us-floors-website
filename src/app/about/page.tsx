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
            Built on Trust.<br />Driven by Commitment.
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
              Growing Through Experience, Focused on Better Every Day
            </h2>
            <div className="space-y-5 text-[var(--color-light)]/60 leading-relaxed text-lg">
              <p>
                U S Floors was founded with a clear goal: to bring reliable, high-quality raised access flooring solutions to commercial and technical spaces. As an authorized reseller and installer of FLEXI systems, we combine proven global products with hands-on local expertise.
              </p>
              <p>
                What began as a small installation team has steadily evolved through continuous learning on-site, close collaboration with clients, and a commitment to improving with every project. Each installation has helped us refine our processes, strengthen our technical understanding, and raise our standards of execution.
              </p>
              <p>
                Today, we deliver dependable raised flooring solutions across Telangana and Andhra Pradesh, supported by a growing network, practical experience, and a focus on getting the details right.
              </p>
              <p>
                We continue to build our reputation on the principles that matter most to us: consistent quality, clear communication, and a commitment to doing better with every project we take on.
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
