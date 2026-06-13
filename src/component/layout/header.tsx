"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const services = [
    {
      title: "Modernize",
      href: "/services/modernize",
    },
    {
      title: "See Your Data",
      href: "/services/data-analytics",
    },
    {
      title: "Build Software",
      href: "/services/build-software",
    },
    {
      title: "Stay Secure",
      href: "/services/stay-secure",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#161E2F]/95 backdrop-blur-md border-b border-[#23314F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#6B91AD] to-[#23314F] flex items-center justify-center text-white font-bold">
              B
            </div>

            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">
                Beaver<span className="text-[#6B91AD]">Tek</span>
              </h2>

              <p className="text-[10px] text-gray-400 uppercase tracking-[2px]">
                Technology Partner
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Home
            </Link>

            <Link
              href="/about_us/abouthero"
              className="text-white hover:text-[#6B91AD] transition"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-[#6B91AD] transition">
                Services
                <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-slate-100 transition-all duration-300 ${
                  serviceOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-3"
                }`}
              >
                <div className="p-3">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block p-4 rounded-xl hover:bg-[#E8EFF4] transition"
                    >
                      <h4 className="font-semibold text-[#161E2F]">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/customers"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Customers
            </Link>

            <Link
              href="/products"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/inquiry"
              className="bg-[#6B91AD] hover:bg-[#577B96] text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#161E2F] border-t border-[#23314F]">
          <div className="px-6 py-6 flex flex-col gap-4">

            <Link href="/" className="text-white">
              Home
            </Link>

            <Link href="/about" className="text-white">
              About
            </Link>

            <p className="text-[#6B91AD] font-semibold pt-2">
              Services
            </p>

            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="pl-4 text-gray-300"
              >
                {item.title}
              </Link>
            ))}

            <Link href="/customers" className="text-white">
              Customers
            </Link>

            <Link href="/products" className="text-white">
              Products
            </Link>

            <Link href="/contact" className="text-white">
              Contact
            </Link>

            <Link
              href="/inquiry"
              className="mt-4 bg-[#6B91AD] text-center text-white py-3 rounded-xl"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}