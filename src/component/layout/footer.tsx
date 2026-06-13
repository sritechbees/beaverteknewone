"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161E2F] text-white">

      {/* CTA Section */}
      <section className="border-b border-[#23314F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

          <div className="bg-gradient-to-r from-[#23314F] to-[#6B91AD] rounded-3xl p-8 md:p-12 text-center">

            <p className="uppercase tracking-[3px] text-sm text-slate-200 mb-4">
              Ready To Talk?
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Need Senior Technology Help?
            </h2>

            <p className="text-lg text-slate-100 max-w-2xl mx-auto mb-8">
              Let's start with a 30-minute conversation about your
              business, technology challenges, and goals.
            </p>

            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center bg-white text-[#161E2F] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Book a 30-Minute Call
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Beaver<span className="text-[#6B91AD]">Tek</span>
            </h2>

            <p className="text-slate-300 leading-relaxed">
              A technology partner for small and mid-size businesses.
              We modernize systems, build software, unlock data insights,
              and keep digital operations secure.
            </p>

            <div className="mt-6 flex gap-3">
              <div className="h-3 w-3 rounded-full bg-[#6B91AD]" />
              <div className="h-3 w-3 rounded-full bg-[#6B91AD]/70" />
              <div className="h-3 w-3 rounded-full bg-[#6B91AD]/40" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#6B91AD]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#6B91AD]">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#6B91AD]">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/customers" className="hover:text-[#6B91AD]">
                  Customers
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-[#6B91AD]">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#6B91AD]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <Link
                  href="/services/modernize"
                  className="hover:text-[#6B91AD]"
                >
                  Modernize
                </Link>
              </li>

              <li>
                <Link
                  href="/services/data-analytics"
                  className="hover:text-[#6B91AD]"
                >
                  See Your Data
                </Link>
              </li>

              <li>
                <Link
                  href="/services/build-software"
                  className="hover:text-[#6B91AD]"
                >
                  Build Software
                </Link>
              </li>

              <li>
                <Link
                  href="/services/stay-secure"
                  className="hover:text-[#6B91AD]"
                >
                  Stay Secure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div>
                <p className="text-[#6B91AD] font-medium mb-1">
                  Email
                </p>
                <p>info@beavertek.com</p>
              </div>

              <div>
                <p className="text-[#6B91AD] font-medium mb-1">
                  USA
                </p>
                <p>+1 (949) 885-6193</p>
              </div>

              <div>
                <p className="text-[#6B91AD] font-medium mb-1">
                  India
                </p>
                <p>+91 99620 92583</p>
              </div>

              <div>
                <p className="text-[#6B91AD] font-medium mb-1">
                  Headquarters
                </p>
                <p>Irvine, California</p>
              </div>

              <div>
                <p className="text-[#6B91AD] font-medium mb-1">
                  Engineering Hub
                </p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#23314F] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} BeaverTek.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-400">
            <Link href="#" className="hover:text-[#6B91AD]">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#6B91AD]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}