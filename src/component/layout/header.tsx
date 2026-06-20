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
      href: "/services/modernize/modernizehero",
    },
    {
      title: "See Your Data",
      href: "/services/seeyourdata/seeyourdatahero",
    },
    {
      title: "Build Software",
      href: "/services/buildsoftware/herosection",
    },
    {
      title: "Stay Secure",
      href: "/services/staysecure/staysecureherosection",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#161E2F]/95 backdrop-blur-md border-b border-[#23314F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#6B91AD] to-[#23314F] flex items-center justify-center text-white font-bold">
              B
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Beaver
                <span className="text-[#6B91AD]">Tek</span>
              </h2>

              <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
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
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <Link
                href="/services/serviceshero"
                className="flex items-center gap-1 text-white hover:text-[#6B91AD] transition"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute left-0 top-full mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
                  serviceOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                }`}
              >
                <div className="p-3">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block rounded-xl p-4 hover:bg-[#E8EFF4] transition"
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
              href="/customers/casestudyhero"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Customers
            </Link>

            <Link
              href="/products/producthero"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Products
            </Link>

            <Link
              href="/contact/contacthero"
              className="text-white hover:text-[#6B91AD] transition"
            >
              Contact
            </Link>

          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/inquiry"
              className="bg-[#6B91AD] hover:bg-[#577B96] px-6 py-3 rounded-xl text-white font-semibold transition"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>
            {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen border-t border-[#23314F]" : "max-h-0"
        }`}
      >
        <div className="bg-[#161E2F] px-6 py-6 flex flex-col gap-2">

          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="text-white hover:text-[#6B91AD] py-3 transition"
          >
            Home
          </Link>

          <Link
            href="/about_us/abouthero"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="text-white hover:text-[#6B91AD] py-3 transition"
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <button
            onClick={() => setServiceOpen(!serviceOpen)}
            className="flex items-center justify-between py-3 text-[#6B91AD] font-semibold"
          >
            <span>Services</span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                serviceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              serviceOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="ml-4 flex flex-col gap-1">

              <Link
                href="/services/serviceshero"
                onClick={() => {
                  setMobileOpen(false);
                  setServiceOpen(false);
                }}
                className="text-white py-2 hover:text-[#6B91AD] transition"
              >
                All Services
              </Link>

              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setServiceOpen(false);
                  }}
                  className="text-gray-300 hover:text-white py-2 transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/customers/casestudyhero"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="text-white hover:text-[#6B91AD] py-3 transition"
          >
            Customers
          </Link>

          <Link
            href="/products/producthero"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="text-white hover:text-[#6B91AD] py-3 transition"
          >
            Products
          </Link>

          <Link
            href="/contact/contacthero"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="text-white hover:text-[#6B91AD] py-3 transition"
          >
            Contact
          </Link>

          <Link
            href="/inquiry"
            onClick={() => {
              setMobileOpen(false);
              setServiceOpen(false);
            }}
            className="mt-6 bg-[#6B91AD] hover:bg-[#577B96] text-white text-center py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Book a Call
          </Link>

        </div>
      </div>
    </header>
  );
}