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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinkClass = (href: string) => `
    relative font-medium transition-all duration-300
    ${
      pathname === href
        ? "text-[#29B6F0]"
        : "text-white hover:text-[#29B6F0]"
    }
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
    after:transition-all after:duration-300
    ${
      pathname === href
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }
  `;

  return (
    <>
      {/* Overlay */}
     {mobileOpen && (
  <div
    onClick={() => setMobileOpen(false)}
    className="lg:hidden fixed inset-0 z-40 bg-[rgba(0,0,0,0.72)] backdrop-blur-sm"
    style={{
      background:
        "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), linear-gradient(135deg, #29B6F0 0%, #3E7BD6 35%, #7A4FD1 65%, #B93FC9 100%)",
    }}
  />
)}  

      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-[linear-gradient(135deg,#000000_0%,#0A0A0A_20%,#121212_45%,#1A1A1E_100%)] backdrop-blur-xl"
      : "bg-[linear-gradient(135deg,#000000_0%,#0A0A0A_20%,#121212_45%,#1A1A1E_100%)]"
  }`}
>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-20" : "h-20"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              onClick={closeAllMenus}
              className="group flex items-center gap-3"
            >
              <Image
                src="/home/BeaverTek Logo v13.png"
                alt="BeaverTek"
                width={110}
                height={110}
                priority
                className={`transition-all duration-500 ${
                  isScrolled ? "h-16" : "h-16"
                }`}
              />

              <div className="hidden lg:block opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">

  <h3 className="text-xl font-bold leading-none">
    <span className="text-white">
      Beaver
    </span>

    <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)] bg-clip-text text-transparent">
      Tek
    </span>
  </h3>

  <p className="mt-1 text-[10px] tracking-[5px] uppercase font-medium
    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)]
    bg-clip-text text-transparent">
    Innovative Technologies
  </p>

</div>
            </Link>

            {/* PART 1A ENDS HERE */}
                        {/* NAV */}
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

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <Link
                  href="/services/serviceshero"
                  className="flex items-center gap-2 text-white hover:text-[#29B6F0] transition"
                >
                  Services

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* DROPDOWN */}
                <div
                  className={`absolute top-full left-0 mt-5 w-[380px]
                  bg-[#121212]
                  rounded-[18px]
                  border border-[#2A2A30]
                  shadow-2xl
                  overflow-hidden
                  transition-all duration-300
                  ${
                    serviceOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-4"
                  }`}
                >
                  <div className="p-4 border-b border-[#2A2A30]">
                    <h3 className="text-white font-bold">
                      Our Services
                    </h3>

                    <p className="text-[#A0A0A8] text-sm mt-1">
                      Digital transformation solutions
                    </p>
                  </div>

                  <div className="py-2">
                    {services.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block p-4 hover:bg-[#1A1A1E] transition"
                      >
                        <h4 className="text-white font-semibold">
                          {item.title}
                        </h4>

                        <p className="text-[#A0A0A8] text-sm">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="p-4 border-t border-[#2A2A30]">
                    <Link
                      href="/services/serviceshero"
                      className="inline-flex items-center gap-2 text-[#29B6F0] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      View All Services

                      <span className="text-[#7A4FD1]">→</span>
                    </Link>
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

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/inquiry"
                className="hidden lg:flex items-center px-6 py-3 text-white font-semibold rounded-[999px]
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                hover:scale-105 transition"
              >
                Book a Call
              </Link>
                            <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-white"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-full max-w-sm
          bg-[#000000] border-l border-[#2A2A30] z-50
          transition-transform duration-500
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-[#2A2A30]">
            <Image
              src="/home/logo1.png"
              alt="logo"
              width={140}
              height={40}
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col gap-4">
            {[
              "/",
              "/about_us/abouthero",
              "/customers/casestudyhero",
              "/products/producthero",
              "/contact/contacthero",
            ].map((path, i) => (
              <Link
                key={i}
                href={path}
                onClick={closeAllMenus}
                className="text-white py-3 border-b border-[#2A2A30] hover:text-[#29B6F0] transition"
              >
                {path === "/"
                  ? "Home"
                  : path.includes("about")
                  ? "About"
                  : path.includes("customers")
                  ? "Customers"
                  : path.includes("products")
                  ? "Products"
                  : "Contact"}
              </Link>
            ))}

            <Link
              href="/inquiry"
              onClick={closeAllMenus}
              className="mt-6 text-center py-4 rounded-[18px]
              bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
              text-white font-semibold
              hover:scale-105 transition-transform duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}