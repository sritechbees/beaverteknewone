"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  Cloud,
  ShieldCheck,
  Smartphone,
  Code2,
  BarChart3,
} from "lucide-react";

/* =========================================================
   GRADIENT
========================================================= */

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "End-to-End Digital Transformation",
    href: "/services/digitaltransformation/herosection",
    desc: "Transform business operations through digital innovation.",
    icon: Zap,
  },
  {
    title: "Cloud Cost Optimization (FinOps)",
    href: "/services/finops/herosection",
    desc: "Reduce cloud expenses while maximizing performance.",
    icon: Cloud,
  },
  {
    title: "DevOps & DevSecOps",
    href: "/services/devops/herosection",
    desc: "Accelerate delivery with secure automated workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile App Development",
    href: "/services/mobileappdevelopment/herosection",
    desc: "Build scalable iOS and Android applications.",
    icon: Smartphone,
  },
  {
    title: "Custom Software Development & Maintenance",
    href: "/services/customsoftware/herosection",
    desc: "Develop and maintain software tailored to your business.",
    icon: Code2,
  },
  {
    title: "Data Analytics and Reporting",
    href: "/services/dataanalytics/herosection",
    desc: "Turn data into actionable business intelligence.",
    icon: BarChart3,
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about_us/abouthero",
  },
  {
    name: "Customers",
    href: "/customers/casestudyhero",
  },
  {
    name: "Products",
    href: "/products/producthero",
  },
  {
    name: "Contact",
    href: "/contact/contacthero",
  },
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =======================================================
     ACTIVE ROUTE
  ======================================================= */

  const isActive = (href: string) => {
    /* -------------------------------------------------------
       HOME
       Only active on exact homepage.
    ------------------------------------------------------- */

    if (href === "/") {
      return pathname === "/";
    }

    /* -------------------------------------------------------
       ALL OTHER NAV ITEMS
       Active on exact page + nested pages.
       
       Example:
       /customers/casestudyhero
       /customers/casestudyhero/example
       
       Both will keep Customers active.
    ------------------------------------------------------- */

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /* =======================================================
     SERVICES ACTIVE
     
     Any page under /services will keep Services active.
     
     Example:
     /services/servicesherosection
     /services/finops/herosection
     /services/devops/herosection
     /services/dataanalytics/herosection
  ======================================================= */

  const servicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          FULL WIDTH HEADER
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          bg-black
        "
      >
        {/* ===================================================
            HEADER INNER CONTENT
        ==================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
          "
        >
          <div
            className="
              relative
              flex
              h-[72px]
              items-center
              justify-between
              px-4
              sm:h-[76px]
              sm:px-6
              md:h-[80px]
              md:px-7
              lg:h-[82px]
              lg:px-10
              xl:px-12
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="
                group
                relative
                flex
                shrink-0
                items-center
                outline-none
              "
            >
              <Image
                src="/home/logofooter.png"
                alt="BeaverTek"
                width={175}
                height={55}
                priority
                className="
                  h-auto
                  w-[125px]
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                  sm:w-[140px]
                  md:w-[145px]
                  lg:w-[165px]
                "
              />
            </Link>

            {/* =================================================
                DESKTOP + TABLET NAVIGATION
                
                md = tablet and above
            ================================================== */}

            <nav className="hidden items-center md:flex">
              <div
                className="
                  flex
                  items-center
                  gap-0
                  lg:gap-1
                "
              >
                {/* =================================================
                    HOME + ABOUT
                ================================================== */}

                {navItems.slice(0, 2).map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        relative
                        rounded-lg
                        px-3
                        py-2.5
                        text-[14px]
                        font-medium
                        transition-all
                        duration-300
                        lg:px-4
                        lg:text-[15px]
                        ${
                          active
                            ? "text-white"
                            : "text-white/65 hover:text-white"
                        }
                      `}
                    >
                      {item.name}

                      {/* ACTIVE INDICATOR */}

                      {active && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            h-[2px]
                            w-5
                            -translate-x-1/2
                            rounded-full
                          "
                          style={{
                            background: GRADIENT,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}

                {/* =================================================
                    SERVICES
                    CLICK = /services/servicesherosection
                    HOVER = DROPDOWN
                ================================================== */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    setServicesOpen(false)
                  }
                >
                  <Link
                    href="/services/servicesherosection"
                    onClick={() => {
                      setServicesOpen(false);
                    }}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-1
                      rounded-lg
                      px-3
                      py-2.5
                      text-[14px]
                      font-medium
                      transition-all
                      duration-300
                      lg:gap-1.5
                      lg:px-4
                      lg:text-[15px]
                      ${
                        servicesActive
                          ? "text-white"
                          : "text-white/65 hover:text-white"
                      }
                    `}
                    aria-label="Services"
                  >
                    <span>Services</span>

                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                      className={`
                        transition-transform
                        duration-300
                        ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                    {/* ACTIVE INDICATOR */}

                    {servicesActive && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-1/2
                          h-[2px]
                          w-5
                          -translate-x-1/2
                          rounded-full
                        "
                        style={{
                          background: GRADIENT,
                        }}
                      />
                    )}
                  </Link>

                  {/* =================================================
                      DESKTOP / TABLET SERVICES DROPDOWN
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-full
                      w-[560px]
                      -translate-x-1/2
                      pt-4
                      transition-all
                      duration-300
                      lg:w-[650px]
                      ${
                        servicesOpen
                          ? "pointer-events-auto visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible -translate-y-2 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-[#08090D]
                        p-3
                        shadow-[0_25px_80px_rgba(0,0,0,0.7)]
                      "
                    >
                      {/* DROPDOWN TITLE */}

                      <div
                        className="
                          mb-2
                          border-b
                          border-white/[0.06]
                          px-3
                          pb-3
                        "
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                          What we do
                        </p>

                        <p className="mt-1 text-sm font-medium text-white/80">
                          Technology solutions built for your
                          business
                        </p>
                      </div>

                      {/* SERVICES */}

                      <div className="grid grid-cols-2 gap-1.5">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const active = isActive(
                            service.href
                          );

                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => {
                                setServicesOpen(false);
                                setMenuOpen(false);
                              }}
                              className="
                                group
                                relative
                                flex
                                gap-3
                                rounded-xl
                                p-3
                                transition-all
                                duration-300
                                hover:bg-white/[0.045]
                              "
                            >
                              {/* ICON */}

                              <div
                                className="
                                  mt-0.5
                                  flex
                                  h-9
                                  w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-white/[0.07]
                                  bg-white/[0.035]
                                "
                              >
                                <Icon
                                  size={17}
                                  strokeWidth={1.7}
                                  className="
                                    text-white/60
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#29B6F0]
                                  "
                                />
                              </div>

                              {/* TEXT */}

                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-2">
                                  <h3
                                    className={`
                                      text-[13px]
                                      font-semibold
                                      leading-5
                                      transition-colors
                                      duration-300
                                      ${
                                        active
                                          ? "text-white"
                                          : "text-white/80 group-hover:text-white"
                                      }
                                    `}
                                  >
                                    {service.title}
                                  </h3>

                                  <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.7}
                                    className="
                                      mt-0.5
                                      shrink-0
                                      text-white/20
                                      opacity-0
                                      transition-all
                                      duration-300
                                      group-hover:translate-x-0.5
                                      group-hover:-translate-y-0.5
                                      group-hover:text-white/60
                                      group-hover:opacity-100
                                    "
                                  />
                                </div>

                                <p className="mt-1 text-[11px] leading-[1.5] text-white/38">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CUSTOMERS / PRODUCTS / CONTACT
                ================================================== */}

                {navItems.slice(2).map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        relative
                        rounded-lg
                        px-3
                        py-2.5
                        text-[14px]
                        font-medium
                        transition-all
                        duration-300
                        lg:px-4
                        lg:text-[15px]
                        ${
                          active
                            ? "text-white"
                            : "text-white/65 hover:text-white"
                        }
                      `}
                    >
                      {item.name}

                      {/* ACTIVE INDICATOR */}

                      {active && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            h-[2px]
                            w-5
                            -translate-x-1/2
                            rounded-full
                          "
                          style={{
                            background: GRADIENT,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* =================================================
                LET'S TALK
            ================================================== */}

            <Link
              href="/contact/herosection"
              className="
                group
                hidden
                items-center
                gap-1.5
                rounded-xl
                px-4
                py-2.5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(41,182,240,0.12)]
                transition-all
                duration-300
                hover:scale-[1.02]
                md:flex
                lg:gap-2
                lg:px-5
                lg:py-3
                lg:text-[14px]
              "
              style={{
                background: GRADIENT,
              }}
            >
              <span>Let's Talk</span>

              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  lg:h-4
                  lg:w-4
                "
              />
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
                Only below md
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                text-white
                transition-all
                duration-300
                hover:bg-white/[0.07]
                md:hidden
              "
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
              Only below md
          ==================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-out
              md:hidden
              ${
                menuOpen
                  ? "max-h-[calc(100vh-72px)] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                max-h-[calc(100vh-72px)]
                overflow-y-auto
                border-t
                border-white/[0.07]
                px-4
                pb-5
                pt-4
                sm:px-6
              "
            >
              <div className="space-y-1">
                {/* =================================================
                    HOME + ABOUT
                ================================================== */}

                {navItems.slice(0, 2).map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-[15px]
                        font-medium
                        transition-all
                        duration-300
                        ${
                          active
                            ? "bg-white/[0.06] text-white"
                            : "text-white/65 hover:bg-white/[0.035] hover:text-white"
                        }
                      `}
                    >
                      <span>{item.name}</span>

                      {active && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            background: GRADIENT,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}

                {/* =================================================
                    MOBILE SERVICES
                ================================================== */}

                <div>
                  <div className="flex items-center">
                    <Link
                      href="/services/servicesherosection"
                      onClick={() => {
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                      className={`
                        flex
                        flex-1
                        items-center
                        rounded-xl
                        px-4
                        py-3.5
                        text-[15px]
                        font-medium
                        transition-all
                        duration-300
                        ${
                          servicesActive
                            ? "bg-white/[0.06] text-white"
                            : "text-white/65 hover:bg-white/[0.035] hover:text-white"
                        }
                      `}
                    >
                      <span>Services</span>
                    </Link>

                    {/* DROPDOWN TOGGLE */}

                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen(
                          (prev) => !prev
                        )
                      }
                      aria-label="Toggle services"
                      aria-expanded={servicesOpen}
                      className="
                        -ml-12
                        mr-1
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        text-white/60
                        transition-all
                        duration-300
                        hover:text-white
                      "
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={1.8}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* MOBILE SERVICE LIST */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        servicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="ml-3 mt-1 space-y-1 border-l border-white/[0.07] pl-2">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const active = isActive(
                            service.href
                          );

                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className={`
                                group
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3
                                transition-all
                                duration-300
                                ${
                                  active
                                    ? "bg-white/[0.05]"
                                    : "hover:bg-white/[0.035]"
                                }
                              `}
                            >
                              <div
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-white/[0.07]
                                  bg-white/[0.03]
                                "
                              >
                                <Icon
                                  size={15}
                                  strokeWidth={1.7}
                                  className="
                                    text-white/50
                                    transition-colors
                                    group-hover:text-[#29B6F0]
                                  "
                                />
                              </div>

                              <div className="min-w-0">
                                <p
                                  className={`
                                    text-[13px]
                                    font-medium
                                    leading-5
                                    ${
                                      active
                                        ? "text-white"
                                        : "text-white/70 group-hover:text-white"
                                    }
                                  `}
                                >
                                  {service.title}
                                </p>

                                <p className="mt-0.5 text-[11px] leading-4 text-white/35">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CUSTOMERS / PRODUCTS / CONTACT
                ================================================== */}

                {navItems.slice(2).map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-[15px]
                        font-medium
                        transition-all
                        duration-300
                        ${
                          active
                            ? "bg-white/[0.06] text-white"
                            : "text-white/65 hover:bg-white/[0.035] hover:text-white"
                        }
                      `}
                    >
                      <span>{item.name}</span>

                      {active && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            background: GRADIENT,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE LET'S TALK
              ================================================== */}

              <Link
                href="/contact/herosection"
                onClick={closeMobileMenu}
                className="
                  mt-4
                  flex
                  w-fit
                
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-5
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_10px_35px_rgba(41,182,240,0.12)]
                  transition-all
                  duration-300
                  active:scale-[0.98]
                "
                style={{
                  background: GRADIENT,
                }}
              >
                <span>Let's Talk</span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =======================================================
          HEADER SPACER
      ======================================================= */}

      <div
        className="
          h-[72px]
          sm:h-[76px]
          md:h-[80px]
          lg:h-[82px]
        "
      />
    </>
  );
}

export default Header;