"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-[var(--color-dark)] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="contact-reveal text-sm text-[var(--color-accent)] tracking-[0.3em] uppercase font-semibold mb-4">Get In Touch</p>
          <h1 className="contact-reveal text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Request a Quote
          </h1>
          <p className="contact-reveal text-xl text-[var(--color-light)]/50 max-w-2xl font-normal leading-relaxed">
            Tell us about your project and our team will provide a detailed proposal within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-[var(--color-darker)]">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-2 contact-reveal">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <p className="text-[var(--color-light)]/50 text-sm">+1 (555) 842-7100</p>
                  <p className="text-[var(--color-light)]/50 text-sm">+1 (555) 842-7101 (Sales)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <p className="text-[var(--color-light)]/50 text-sm">info@usfloors.com</p>
                  <p className="text-[var(--color-light)]/50 text-sm">sales@usfloors.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Head Office</p>
                  <p className="text-[var(--color-light)]/50 text-sm">
                    1247 Industrial Blvd, Suite 400<br />
                    Santa Clara, CA 95054<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Business Hours</p>
                  <p className="text-[var(--color-light)]/50 text-sm">Mon – Fri: 8:00 AM – 6:00 PM PST</p>
                  <p className="text-[var(--color-light)]/50 text-sm">Sat: 9:00 AM – 1:00 PM PST</p>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">Regional Offices</h3>
            <div className="space-y-4">
              {[
                { city: "New York", addr: "450 Park Avenue, 15th Floor, NY 10022" },
                { city: "Chicago", addr: "233 S Wacker Dr, Suite 2100, IL 60606" },
                { city: "Houston", addr: "1600 Smith Street, Suite 300, TX 77002" },
              ].map((office, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-sm p-4">
                  <p className="text-white font-semibold text-sm">{office.city}</p>
                  <p className="text-[var(--color-light)]/40 text-xs">{office.addr}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 contact-reveal">
            <div className="bg-white/[0.03] border border-white/10 rounded-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Get a Detailed Quote</h2>
              <p className="text-[var(--color-light)]/40 text-sm mb-8">Fill in your project details and our team will get back to you within 48 hours.</p>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[var(--color-light)]/50 text-sm">We&#39;ll get back to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Company *</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@acmecorp.com"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all appearance-none">
                        <option value="" className="bg-[var(--color-dark)]">Select type...</option>
                        <option value="datacenter" className="bg-[var(--color-dark)]">Data Center</option>
                        <option value="office" className="bg-[var(--color-dark)]">Corporate Office</option>
                        <option value="server" className="bg-[var(--color-dark)]">Server Room</option>
                        <option value="command" className="bg-[var(--color-dark)]">Command Center</option>
                        <option value="other" className="bg-[var(--color-dark)]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Estimated Area (sq ft)</label>
                      <input
                        type="text"
                        placeholder="e.g., 10,000"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--color-light)]/60 text-xs font-semibold uppercase tracking-wider mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project requirements, timeline, load specifications, or any other details..."
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-sm text-white text-sm placeholder:text-white/20 focus:border-[var(--color-accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--color-accent)] text-white font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-[var(--color-accent)]/80 transition-all flex items-center justify-center gap-3 group"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
