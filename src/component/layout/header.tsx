"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Modernize",
      href: "/services/modernize/modernizehero",
      desc: "Upgrade legacy systems with modern architecture.",
    },
    {
      title: "See Your Data",
      href: "/services/seeyourdata/seeyourdatahero",
      desc: "Transform raw data into actionable insights.",
    },
    {
      title: "Build Software",
      href: "/services/buildsoftware/herosection",
      desc: "Custom software tailored for your business.",
    },
    {
      title: "Stay Secure",
      href: "/services/staysecure/staysecureherosection",
      desc: "Enterprise-grade security and compliance.",
    },
  ];

  const closeAllMenus = () => {
    setMobileOpen(false);
    setServiceOpen(false);
  };

  const navLinkClass = (href: string): string => {
  return `relative font-medium transition-all duration-300
    ${
      pathname === href
        ? "text-[#6B91AD]"
        : "text-white hover:text-[#6B91AD]"
    }
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-[#6B91AD]
    after:transition-all after:duration-300
    ${
      pathname === href
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`;
};
  return (
    <>
      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#161E2F]/90 backdrop-blur-xl border-b border-[#23314F] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeAllMenus}
              className="flex items-center"
            >
              <Image
                src="/home/logo1.png"
                alt="BeaverTek"
                width={220}
                height={70}
                priority
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? "h-10" : "h-14"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>

              <Link
                href="/about_us/abouthero"
                className={navLinkClass("/about_us/abouthero")}
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
                  className="flex items-center gap-2 text-white hover:text-[#6B91AD] transition-all duration-300 font-medium"
                >
                  Services

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute top-full left-0 mt-5 w-[380px]
                  bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                  border border-gray-100 overflow-hidden
                  transition-all duration-300
                  ${
                    serviceOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-4"
                  }`}
                >
                  <div className="p-3">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="text-lg font-bold text-[#161E2F]">
                        Our Services
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Digital transformation solutions for modern businesses.
                      </p>
                    </div>

                    <div className="py-2">
                      {services.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-4 rounded-2xl hover:bg-[#E8EFF4] transition-all duration-300"
                        >
                          <h4 className="font-semibold text-[#161E2F]">
                            {item.title}
                          </h4>

                          <p className="text-sm text-gray-500 mt-1">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="p-4 border-t border-gray-100">
                      <Link
                        href="/services/serviceshero"
                        className="inline-flex items-center text-[#6B91AD] font-semibold hover:translate-x-1 transition-all duration-300"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/customers/casestudyhero"
                className={navLinkClass("/customers/casestudyhero")}
              >
                Customers
              </Link>

              <Link
                href="/products/producthero"
                className={navLinkClass("/products/producthero")}
              >
                Products
              </Link>

              <Link
                href="/contact/contacthero"
                className={navLinkClass("/contact/contacthero")}
              >
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/inquiry"
                className="hidden lg:flex items-center justify-center
                px-6 py-3 rounded-full
                bg-gradient-to-r from-[#6B91AD] to-[#23314F]
                text-white font-semibold
                shadow-lg hover:scale-105
                transition-all duration-300"
              >
                Book a Call
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-white"
                aria-label="Open Menu"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
              {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-auto max-w-sm
        bg-[#161E2F]
        border-l border-[#23314F]
        shadow-2xl
        z-50
        transition-transform duration-500 ease-in-out
        ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#23314F]">
          <Image
            src="/home/logo1.png"
            alt="BeaverTek"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
          />

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 py-6 flex flex-col h-[calc(100vh-80px)] overflow-y-auto">

          <Link
            href="/"
            onClick={closeAllMenus}
            className={`py-4 border-b border-[#23314F] transition ${
              pathname === "/"
                ? "text-[#6B91AD] font-semibold"
                : "text-white hover:text-[#6B91AD]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about_us/abouthero"
            onClick={closeAllMenus}
            className={`py-4 border-b border-[#23314F] transition ${
              pathname === "/about_us/abouthero"
                ? "text-[#6B91AD] font-semibold"
                : "text-white hover:text-[#6B91AD]"
            }`}
          >
            About
          </Link>

          {/* Mobile Services */}
          <button
            onClick={() => setServiceOpen(!serviceOpen)}
            className="flex items-center justify-between py-4 border-b border-[#23314F]"
          >
            <span className="text-white font-medium">
              Services
            </span>

            <ChevronDown
              size={18}
              className={`text-[#6B91AD] transition-transform duration-300 ${
                serviceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              serviceOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 py-2">

              <Link
                href="/services/serviceshero"
                onClick={closeAllMenus}
                className="block py-3 text-[#6B91AD] font-medium"
              >
                All Services
              </Link>

              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeAllMenus}
                  className="block py-3 text-gray-300 hover:text-white transition"
                >
                  <div className="font-medium">
                    {item.title}
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/customers/casestudyhero"
            onClick={closeAllMenus}
            className={`py-4 border-b border-[#23314F] transition ${
              pathname === "/customers/casestudyhero"
                ? "text-[#6B91AD] font-semibold"
                : "text-white hover:text-[#6B91AD]"
            }`}
          >
            Customers
          </Link>

          <Link
            href="/products/producthero"
            onClick={closeAllMenus}
            className={`py-4 border-b border-[#23314F] transition ${
              pathname === "/products/producthero"
                ? "text-[#6B91AD] font-semibold"
                : "text-white hover:text-[#6B91AD]"
            }`}
          >
            Products
          </Link>

          <Link
            href="/contact/contacthero"
            onClick={closeAllMenus}
            className={`py-4 border-b border-[#23314F] transition ${
              pathname === "/contact/contacthero"
                ? "text-[#6B91AD] font-semibold"
                : "text-white hover:text-[#6B91AD]"
            }`}
          >
            Contact
          </Link>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <Link
              href="/inquiry"
              onClick={closeAllMenus}
              className="w-full flex items-center justify-center
              rounded-2xl
              py-4
              font-semibold
              text-white
              bg-gradient-to-r
              from-[#6B91AD]
              to-[#23314F]
              shadow-xl
              hover:scale-[1.02]
              transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>

        </div>
      </div>
    </header>
  </>
);
}