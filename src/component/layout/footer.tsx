"use client";

import Link from "next/link";
import FooterCTA from "../home/footercta";

export default function Footer() {
  return (
    <footer className="bg-[#161E2F] text-white">

     
        <FooterCTA/>
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
                <Link href="/about_us/abouthero" className="hover:text-[#6B91AD]">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services/serviceshero" className="hover:text-[#6B91AD]">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/customers/casestudyhero" className="hover:text-[#6B91AD]">
                  Customers
                </Link>
              </li>

              <li>
                <Link href="/products/producthero" className="hover:text-[#6B91AD]">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/contact/contacthero" className="hover:text-[#6B91AD]">
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
                  href="/services/modernize/modernizehero"
                  className="hover:text-[#6B91AD]"
                >
                  Modernize
                </Link>
              </li>

              <li>
                <Link
                  href="/services/seeyourdata/seeyourdatahero"
                  className="hover:text-[#6B91AD]"
                >
                  See Your Data
                </Link>
              </li>

              <li>
                <Link
                  href="/services/buildsoftware/herosection"
                  className="hover:text-[#6B91AD]"
                >
                  Build Software
                </Link>
              </li>

              <li>
                <Link
                  href="/services/staysecure/staysecureherosection"
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