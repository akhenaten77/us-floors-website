"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const categories = [
  {
    id: "hpl-panels",
    name: "HPL Panels",
    tagline: "High Pressure Laminate Surface Panels",
    description:
      "Precision-engineered woodcore and calcium sulphate panels with anti-static HPL finishes. Designed for superior load distribution, static dissipation, and long-term dimensional stability in mission-critical environments.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Panel Size", value: "600 × 600 mm" },
      { label: "Core Material", value: "Calcium Sulphate / Woodcore" },
      { label: "Surface Finish", value: "HPL / Vinyl / Bare" },
      { label: "Load Class", value: "Up to Class 6 (>12 kN)" },
    ],
    features: [
      "Anti-static surface treatment",
      "Interchangeable & reusable tiles",
      "Fire-rated Class 0",
      "Excellent dimensional stability",
    ],
  },
  {
    id: "pedestals-stringers",
    name: "Pedestals & Stringers",
    tagline: "Structural Support Framework",
    description:
      "Heavy-duty galvanized steel pedestals with infinite height adjustability and cross-braced stringers for lateral stability. The backbone of every FLEXI raised access floor system.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Pedestal Height", value: "50 mm – 1500 mm" },
      { label: "Material", value: "Galvanized Steel" },
      { label: "Head Size", value: "120 × 120 mm" },
      { label: "Load Capacity", value: "Up to 55 kN per pedestal" },
    ],
    features: [
      "Infinite height adjustability",
      "Anti-vibration rubber gaskets",
      "Snap-lock stringer connection",
      "Seismic compliance ready",
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    tagline: "Complementary System Components",
    description:
      "A comprehensive range of airflow grilles, cable grommets, ramp systems, and lifting tools designed to complete your raised access flooring installation with maximum flexibility.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Grille Types", value: "25% / 50% / Custom Open Area" },
      { label: "Grommet Sizes", value: "80 mm – 200 mm diameter" },
      { label: "Ramp Angles", value: "5° – 15° adjustable" },
      { label: "Lifter Type", value: "Suction cup & edge lift" },
    ],
    features: [
      "Precision airflow management",
      "Tool-free cable access",
      "ADA-compliant ramp profiles",
      "Hot-swappable grille panels",
    ],
  },
];

export default function ProductsPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".prod-hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".product-section").forEach((section) => {
      gsap.from(section.querySelectorAll(".prod-animate"), {
        scrollTrigger: { trigger: section, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="prod-hero-text text-sm text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-4">FLEXI System Components</p>
          <h1 className="prod-hero-text text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Our Products
          </h1>
          <p className="prod-hero-text text-xl text-[var(--color-light)]/50 max-w-2xl font-normal leading-relaxed">
            Modular, precision-engineered components designed to work together seamlessly — delivering unmatched structural performance for the most demanding environments.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`product-section py-24 md:py-32 border-b border-white/5 ${
            idx % 2 === 0 ? "bg-[var(--color-darker)]" : "bg-[var(--color-dark)]"
          }`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              {/* Image */}
              <div className={`prod-animate relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/10 group ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className={`flex flex-col ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <p className="prod-animate text-[var(--color-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">{cat.tagline}</p>
                <h2 className="prod-animate text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{cat.name}</h2>
                <p className="prod-animate text-[var(--color-light)]/60 leading-relaxed mb-8 text-lg">{cat.description}</p>

                {/* Features */}
                <ul className="prod-animate space-y-3 mb-10">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Specs Grid */}
                <div className="prod-animate grid grid-cols-2 gap-4 mb-10">
                  {cat.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-4">
                      <p className="text-xs text-[var(--color-light)]/40 uppercase tracking-wider font-semibold mb-1">{spec.label}</p>
                      <p className="text-white font-bold text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="prod-animate flex gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-[var(--color-accent)]/80 transition-all flex items-center gap-2"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="px-6 py-3 bg-white/5 text-white font-semibold text-sm tracking-wider uppercase rounded-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                    <Download className="w-4 h-4" /> Datasheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 bg-[var(--color-dark)] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-[var(--color-light)]/50 text-lg mb-10 max-w-xl mx-auto">
            Our engineering team can recommend the ideal panel, pedestal, and stringer combination for your facility's load and airflow requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-light)] text-[var(--color-dark)] font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-[0_0_30px_var(--color-accent-glow)]"
          >
            Consult an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
