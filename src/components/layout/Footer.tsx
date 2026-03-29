import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-darker)] text-[var(--color-light)]/80 py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="U S Floors Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain mix-blend-screen"
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              U S Floors
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Premium engineered raised access flooring solutions for commercial spaces, offices, and data centers. Built for performance.
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products" className="hover:text-[var(--color-accent)] transition-colors">HPL Panels</Link></li>
            <li><Link href="/products" className="hover:text-[var(--color-accent)] transition-colors">Pedestals & Stringers</Link></li>
            <li><Link href="/products" className="hover:text-[var(--color-accent)] transition-colors">Accessories</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Installation</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/projects" className="hover:text-[var(--color-accent)] transition-colors">Projects</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Ground Floor, #141</li>
            <li>Hyderabad, Telangana 500032</li>
            <li>saroj@usfloors.in</li>
            <li>+91 78427-41241</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--color-light)]/50">
        <p>&copy; {new Date().getFullYear()} U S Floors. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
