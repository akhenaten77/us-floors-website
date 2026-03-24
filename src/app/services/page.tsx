"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ruler, Wrench, ClipboardCheck, Truck, ArrowRight, HardHat, Settings, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Ruler,
    title: "Site Assessment & Design",
    desc: "Our engineers conduct detailed site surveys, evaluate subfloor conditions, and design bespoke flooring layouts optimized for your facility's cable management, airflow, and load requirements.",
  },
  {
    icon: Settings,
    title: "System Engineering",
    desc: "We spec the ideal combination of panels, pedestals, and stringers based on your load class, finished floor height, and environmental requirements — ensuring code compliance at every stage.",
  },
  {
    icon: HardHat,
    title: "Professional Installation",
    desc: "Our certified installation crews handle everything from pedestal placement to final panel leveling. Every grid is laser-aligned and load-tested before handover.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Ongoing support including panel replacement, height re-adjustment, grille servicing, and periodic structural inspections to maintain peak system performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Certification",
    desc: "We ensure your raised floor system meets all relevant building codes, fire safety standards, seismic requirements, and environmental certifications.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    desc: "Nationwide warehousing and just-in-time delivery to minimize site disruption. We coordinate materials staging with your general contractor's schedule.",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We discuss your project scope — environment type, load demands, cable infrastructure, and timeline." },
  { step: "02", title: "Site Survey", desc: "Our engineers assess subfloor conditions, measure elevations, and identify structural constraints." },
  { step: "03", title: "System Design", desc: "We produce detailed layout drawings, specify components, and present a comprehensive quotation." },
  { step: "04", title: "Fabrication & Delivery", desc: "Components are manufactured to spec and delivered to site on your schedule." },
  { step: "05", title: "Installation", desc: "Our crew installs the complete system — pedestals, stringers, and panels — with laser-guided precision." },
  { step: "06", title: "Handover & Support", desc: "Final inspection, load testing, documentation, and ongoing maintenance support." },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text
      gsap.fromTo(
        ".svc-hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      // Service cards - simple fromTo to avoid stuck state
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );

      // Process steps
      gsap.fromTo(
        ".process-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 85%",
          },
        }
      );

      // Install image
      gsap.fromTo(
        ".install-img",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".install-section",
            start: "top 80%",
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
          <p className="svc-hero-text text-sm text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-4">End-to-End Solutions</p>
          <h1 className="svc-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Our Services
          </h1>
          <p className="svc-hero-text text-xl text-[var(--color-light)]/50 max-w-2xl font-normal leading-relaxed">
            From initial consultation to final handover and beyond — we manage every aspect of your raised access flooring project with engineering precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-[var(--color-darker)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="service-card group bg-white/[0.03] border border-white/10 rounded-sm p-8 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-6 transition-colors group-hover:bg-[var(--color-accent)]/20">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{svc.title}</h3>
                  <p className="text-[var(--color-light)]/50 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Showcase */}
      <section className="install-section py-24 md:py-32 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="install-img relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              alt="Professional installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">Installation Excellence</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Precision at Every Grid Point
            </h2>
            <p className="text-[var(--color-light)]/60 leading-relaxed mb-6 text-lg">
              Every pedestal is laser-leveled. Every stringer is torqued to spec. Every panel is seated, tested, and verified. Our installation teams bring decades of combined experience to deliver flooring systems that perform flawlessly from day one.
            </p>
            <ul className="space-y-3 mb-8">
              {["Laser-guided pedestal alignment", "Load testing on every grid module", "Clean-room certified installation crews", "24-hour turnaround capability"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-[var(--color-accent)]/80 transition-all">
              Schedule a Site Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[var(--color-darker)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Process</h2>
          </div>
          <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((s, idx) => (
              <div key={idx} className="process-step relative bg-white/[0.03] border border-white/10 rounded-sm p-8">
                <span className="text-6xl font-black text-white/[0.06] absolute top-4 right-6 select-none">{s.step}</span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight relative z-10">{s.title}</h3>
                <p className="text-[var(--color-light)]/50 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-light)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-[var(--color-darker)]/60 text-lg mb-10 max-w-xl mx-auto">
            Whether you need a full installation or just a site assessment, our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-dark)] text-white font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)] transition-all duration-300"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
