"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "py-4 bg-[var(--color-dark)]/80 backdrop-blur-md border-[var(--color-light)]/10 shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="U S Floors Logo"
            width={36}
            height={36}
            className="w-9 h-9 object-contain mix-blend-screen"
          />
          <span className="text-2xl font-bold tracking-tight text-[var(--color-light)]">
            U S Floors
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-light)]/80 hover:text-[var(--color-accent)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm font-semibold bg-[var(--color-light)] text-[var(--color-dark)] hover:bg-[var(--color-accent)] hover:text-white transition-all rounded-sm shadow-[0_0_15px_var(--color-accent-glow)]"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-light)] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-dark)] border-b border-[var(--color-light)]/10 shadow-xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--color-light)] hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-base font-medium text-[var(--color-light)] hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
