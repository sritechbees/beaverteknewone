"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const services = [
  {
    title: "End-to-End Digital Transformation",
    href: "/services/digitaltransformation/herosection",
    desc: "Transform business operations through digital innovation.",
  },
  {
    title: "Cloud Cost Optimization (FinOps)",
    href: "/services/finops/herosection",
    desc: "Reduce cloud expenses while maximizing performance.",
  },
  {
    title: "DevOps & DevSecOps",
    href: "/services/devops/herosection",
    desc: "Accelerate delivery with secure automated workflows.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobileappdevelopment/herosection",
    desc: "Build scalable iOS and Android applications.",
  },
  {
    title: "Custom Software Development & Maintenance",
    href: "/services/customsoftware/herosection",
    desc: "Develop and maintain software tailored to your business.",
  },
  {
    title: "Data Analytics and Reporting",
    href: "/services/dataanalytics/herosection",
    desc: "Turn data into actionable business intelligence.",
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about_us/abouthero" },
  { name: "Customers", href: "/customers/casestudyhero" },
  { name: "Products", href: "/products/producthero" },
  { name: "Contact", href: "/contact/contacthero" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesActive = pathname.startsWith("/services");
  const active = (href: string) => pathname === href;

  /* Scroll */
  useEffect(() => {
    const scroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  /* Mobile lock + Escape */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };

    window.addEventListener("keydown", key);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServiceOpen(false);
    setMobileServiceOpen(false);
  };

  /* Desktop link */
  const desktopLink = (href: string) => `
    group relative flex h-full items-center whitespace-nowrap
    cursor-pointer text-[14px] xl:text-[15px] font-medium
    transition-colors duration-300
    ${active(href) ? "text-[#29B6F0]" : "text-white hover:text-[#29B6F0]"}
    after:absolute after:left-0 after:-bottom-[8px] after:h-[2px]
    after:transition-all after:duration-300
    ${active(href) ? "after:w-full" : "after:w-0 group-hover:after:w-full"}
  `;

  /* Mobile link */
  const mobileLink = (item: (typeof navItems)[number]) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={closeAll}
      className={`
        group relative flex min-h-[56px] items-center
        cursor-pointer border-b border-[#202025]
        text-[15px] font-medium transition-all duration-300
        ${
          active(item.href)
            ? "text-[#29B6F0]"
            : "text-white hover:pl-2 hover:text-[#29B6F0]"
        }
      `}
    >
      <span
        className={`
          absolute left-0 h-5 w-[2px] rounded-full
          bg-[linear-gradient(180deg,#29B6F0,#B93FC9)]
          transition-opacity duration-300
          ${
            active(item.href)
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      />
      {item.name}
    </Link>
  );

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        onClick={closeAll}
        className={`
          fixed inset-0 z-[90] lg:hidden
          bg-black/70 backdrop-blur-[6px]
          transition-all duration-500
          ${
            mobileOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      />

      {/* HEADER */}
      <header
        className={`
          fixed left-0 top-0 z-[100] w-full border-b
          transition-all duration-300
          ${
            isScrolled
              ? "border-[#2A2A30] bg-[rgba(0,0,0,.94)] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.35)]"
              : "border-transparent bg-[rgba(0,0,0,.72)] backdrop-blur-md"
          }
        `}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${isScrolled ? "h-[66px] sm:h-[72px] lg:h-[74px]" : "h-[70px] sm:h-[76px] lg:h-[78px]"}
            `}
          >
            {/* LOGO */}
            <Link
              href="/"
              onClick={closeAll}
              className="relative z-[110] flex shrink-0 cursor-pointer"
            >
              <Image
                src="/home/Logo option-2.png"
                alt="BeaverTek"
                width={180}
                height={70}
                priority
                className="
                  h-auto w-[120px] object-contain
                  sm:w-[145px] md:w-[155px]
                  lg:w-[165px] xl:w-[175px]
                "
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {/* Home + About */}
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={desktopLink(item.href)}
                >
                  {item.name}
                </Link>
              ))}

              {/* SERVICES */}
              <div
                className="relative flex h-full items-center"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <Link
                  href="/services/servicesherosection"
                  className={`
                    group relative flex cursor-pointer items-center
                    gap-1.5 whitespace-nowrap text-[14px]
                    font-medium transition-colors duration-300 xl:text-[15px]
                    ${servicesActive ? "text-[#29B6F0]" : "text-white hover:text-[#29B6F0]"}
                  `}
                >
                  Services

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    className={`
                      absolute left-0 -bottom-[8px] h-[2px]
                      transition-all duration-300
                      ${servicesActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                    style={{ background: GRADIENT }}
                  />
                </Link>

                {/* DESKTOP DROPDOWN */}
                <div
                  className={`
                    absolute left-1/2 top-full mt-4 w-[380px]
                    -translate-x-1/2 overflow-hidden rounded-2xl
                    border border-[#2A2A30] bg-[#101010]
                    shadow-[0_25px_70px_rgba(0,0,0,.60)]
                    transition-all duration-300
                    ${
                      serviceOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-3 opacity-0"
                    }
                  `}
                >
                  

                  <div className="max-h-[430px] overflow-y-auto p-2">
                    {services.map((item) => (
                      <ServiceItem
                        key={item.title}
                        item={item}
                        onClick={closeAll}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Customers / Products / Contact */}
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={desktopLink(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="
                group relative z-[120] flex h-10 w-10
                cursor-pointer items-center justify-center
                rounded-xl border border-[#2A2A30] bg-[#101010]
                text-[#D4D4D8] shadow-[0_5px_20px_rgba(0,0,0,.30)]
                transition-all duration-300
                hover:border-[#3E7BD6] hover:text-[#29B6F0]
                active:scale-90 sm:h-11 sm:w-11 lg:hidden
              "
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={2.2} />
              ) : (
                <Menu size={22} strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed right-0 top-0 z-[110]
          flex h-dvh w-full max-w-[380px] flex-col
          border-l border-[#2A2A30] bg-[#050505]
          shadow-[-25px_0_80px_rgba(0,0,0,.65)]
          transition-transform duration-500
          ease-[cubic-bezier(.22,1,.36,1)] lg:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* DRAWER HEADER */}
        <div
          className="
            flex h-[76px] shrink-0 items-center justify-between
            border-b border-[#222228] bg-[#080808] px-4 sm:px-5
          "
        >
          <Link
            href="/"
            onClick={closeAll}
            className="flex cursor-pointer shrink-0"
          >
            <Image
              src="/home/Logo option-2.png"
              alt="BeaverTek"
              width={180}
              height={70}
              priority
              className="h-auto w-[125px] object-contain sm:w-[140px]"
            />
          </Link>

          <button
            type="button"
            onClick={closeAll}
            aria-label="Close mobile menu"
            className="
              flex h-10 w-10 cursor-pointer items-center justify-center
              rounded-xl border border-[#2A2A30] bg-[#111111]
              text-[#D4D4D8] transition-all duration-300
              hover:border-[#3E7BD6] hover:text-[#29B6F0]
              active:scale-90
            "
          >
            <X size={21} />
          </button>
        </div>

        {/* MOBILE NAV */}
        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-5 sm:py-4">
          <nav className="flex flex-col">
            {/* HOME + ABOUT */}
            {navItems.slice(0, 2).map(mobileLink)}

            {/* SERVICES */}
            <div className="border-b border-[#202025]">
              <div className="flex min-h-[56px] items-center">
                <Link
                  href="/services/servicesherosection"
                  onClick={closeAll}
                  className={`
                    flex min-w-0 flex-1 cursor-pointer items-center
                    text-[15px] font-medium transition-colors duration-300
                    ${
                      servicesActive
                        ? "text-[#29B6F0]"
                        : "text-white hover:text-[#29B6F0]"
                    }
                  `}
                >
                  Services
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileServiceOpen((v) => !v)}
                  aria-label="Toggle services"
                  aria-expanded={mobileServiceOpen}
                  className="
                    flex h-10 w-10 cursor-pointer shrink-0
                    items-center justify-center rounded-xl
                    text-[#A0A0A8] transition-all duration-300
                    hover:bg-[#111111] hover:text-[#29B6F0]
                    active:scale-90
                  "
                >
                  <ChevronDown
                    size={19}
                    className={`transition-transform duration-300 ${
                      mobileServiceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* MOBILE SERVICES */}
              <div
                className={`
                  grid transition-all duration-300
                  ${
                    mobileServiceOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="mb-3 rounded-xl border border-[#202025] bg-[#0A0A0A] p-2">
                    {services.map((item) => (
                      <ServiceItem
                        key={item.title}
                        item={item}
                        mobile
                        onClick={closeAll}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CUSTOMERS + PRODUCTS + CONTACT */}
            {navItems.slice(2).map(mobileLink)}
          </nav>
        </div>
      </aside>
    </>
  );
}

/* =========================================================
   SERVICE ITEM
========================================================= */

function ServiceItem({
  item,
  onClick,
  mobile = false,
}: {
  item: (typeof services)[number];
  onClick: () => void;
  mobile?: boolean;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="
        group block cursor-pointer rounded-xl px-3 py-3
        transition-all duration-200 hover:bg-[#121212]
      "
    >
      <div className="flex items-start gap-3">
        <span
          className="
            mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full
            bg-[#3E7BD6] transition-all duration-300
            group-hover:bg-[#29B6F0]
            group-hover:shadow-[0_0_10px_rgba(41,182,240,.7)]
          "
        />

        <div className="min-w-0">
          <h4
            className={`
              font-semibold leading-5 text-white
              transition-colors duration-300
              group-hover:text-[#29B6F0]
              ${mobile ? "text-[13px]" : "text-[13px]"}
            `}
          >
            {item.title}
          </h4>

          <p
            className={`
              mt-1 leading-[18px] text-[#A0A0A8]
              ${mobile ? "text-[11px]" : "text-[12px]"}
            `}
          >
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}