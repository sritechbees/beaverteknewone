
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Code2,
  RefreshCw,
  CloudCog,
  Sparkles,
  Wrench,
  Activity,
} from "lucide-react";

type Service = {
  title: string;
  image: string;
  description: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "Custom enterprise application development",
    image: "/services/software maintance.png",
    description:
      "Build secure, scalable enterprise applications tailored to your business requirements and operational goals.",
    icon: Code2,
  },
  {
    title: "Legacy modernization",
    image: "/services/End-to-End Digital Transformation.jpg",
    description:
      "Modernize legacy applications and technologies to improve performance, scalability, security, and long-term value.",
    icon: RefreshCw,
  },
  {
    title: "Cloud-native application development",
    image: "/services/Cloud Cost Analysis.jpg",
    description:
      "Develop cloud-native applications designed for flexibility, scalability, reliability, and modern digital operations.",
    icon: CloudCog,
  },
  {
    title: "Feature enhancements & upgrades",
    image: "/services/End-to-End Digital Transformation.jpg",
    description:
      "Enhance existing applications with new features, upgrades, and improvements that support evolving business needs.",
    icon: Sparkles,
  },
  {
    title:
      "Preventive and corrective maintenance with near-zero downtime",
    image: "/services/software maintance.png",
    description:
      "Keep critical applications reliable with proactive maintenance, issue resolution, and continuous operational support.",
    icon: Wrench,
  },
  {
    title: "Performance monitoring & technical support",
    image: "/services/Cloud Cost Analysis.jpg",
    description:
      "Monitor application performance and provide technical support to maintain reliable, efficient, and responsive systems.",
    icon: Activity,
  },
];

function Services() {
  const [active, setActive] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [openImage, setOpenImage] = useState<number | null>(null);

  /* =====================================================
      AOS
  ===================================================== */

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  /* =====================================================
      AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
      setOpenImage(null);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* =====================================================
      POSITION
  ===================================================== */

  const getPosition = (index: number): number => {
    let difference = index - active;

    if (difference > services.length / 2) {
      difference -= services.length;
    }

    if (difference < -services.length / 2) {
      difference += services.length;
    }

    return difference;
  };

  /* =====================================================
      CARD CLICK
  ===================================================== */

  const handleCardClick = (index: number) => {
    if (index !== active) {
      setActive(index);
      setOpenImage(null);
    }
  };

  /* =====================================================
      IMAGE TOGGLE
  ===================================================== */

  const toggleImage = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.stopPropagation();

    if (active !== index) {
      setActive(index);
      setOpenImage(index);
      return;
    }

    setOpenImage((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-13">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />

        {/* Cyan Glow */}
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

        {/* Violet Glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#7A4FD1]/10 blur-[160px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[130px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
  data-aos="fade-up"
  className="mb-10 text-center sm:mb-12 md:mb-14"
>
  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0] sm:text-sm sm:tracking-[0.35em]">
    Services
  </span>

  <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
    <span className="text-white">Our </span>
    <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
      Services
    </span>
  </h2>

  <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />
</div>

        {/* =====================================================
            DESKTOP CAROUSEL
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="relative hidden h-[490px] overflow-hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-20 bg-gradient-to-r from-black to-transparent lg:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-20 bg-gradient-to-l from-black to-transparent lg:w-32" />

          {/* =================================================
              CARDS
          ================================================= */}

          {services.map((service, index) => {
            const position = getPosition(index);

            if (Math.abs(position) > 2) return null;

            const isActive = position === 0;
            const isImageOpen = openImage === index;
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                onClick={() => handleCardClick(index)}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{
                  width: "min(340px, 28vw)",

                  height: isImageOpen
                    ? "460px"
                    : isActive
                    ? "410px"
                    : "380px",

                  transform: `
                    translate(-50%, -50%)
                    translateX(
                      calc(
                        ${position} *
                        (min(340px, 28vw) + 24px)
                      )
                    )
                    scale(${isActive ? 1 : 0.88})
                  `,

                  zIndex: isActive ? 20 : 10 - Math.abs(position),

                  opacity:
                    Math.abs(position) === 2
                      ? 0.45
                      : isActive
                      ? 1
                      : 0.7,

                  transition:
                    "transform 750ms cubic-bezier(0.22,1,0.36,1), height 600ms ease, opacity 500ms ease",
                }}
              >
                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className={`
                    group relative h-full overflow-hidden
                    border transition-all duration-700
                    rounded-[30px]
                    rounded-tr-[65px]
                    rounded-bl-[45px]

                    ${
                      isActive
                        ? "border-[#29B6F0]/25 bg-gradient-to-br from-[#121212] via-[#090909] to-[#111111] shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
                        : "border-white/[0.08] bg-[#101010]"
                    }
                  `}
                >
                  {/* =================================================
                      GRADIENT BACKGROUND
                  ================================================= */}

                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#29B6F0]/[0.08] via-transparent to-[#7A4FD1]/[0.12]" />
                  )}

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className={`
                      absolute left-4 right-4 top-4 overflow-hidden
                      rounded-[22px] transition-all duration-700

                      ${
                        isImageOpen
                          ? "h-[165px] opacity-100"
                          : "pointer-events-none h-0 opacity-0"
                      }
                    `}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute inset-0 rounded-[22px] border border-white/10" />
                  </div>

                  {/* =================================================
                      RELATED ICON
                  ================================================= */}

                  <div
                    className={`
                      absolute left-1/2 z-10 flex -translate-x-1/2
                      items-center justify-center transition-all duration-700

                      ${
                        isImageOpen
                          ? "top-[205px]"
                          : "top-[95px]"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex h-[68px] w-[68px] items-center justify-center
                        rounded-full border transition-all duration-700

                        ${
                          isActive
                            ? "border-[#29B6F0]/30 bg-[#29B6F0]/10"
                            : "border-white/10 bg-white/[0.03]"
                        }
                      `}
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.7}
                        className={
                          isActive
                            ? "text-[#29B6F0]"
                            : "text-white/30"
                        }
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`
                      absolute left-7 right-7 z-10 transition-all duration-700

                      ${
                        isImageOpen
                          ? "bottom-[82px]"
                          : "bottom-[78px]"
                      }
                    `}
                  >
                   <h3
  className={`
    text-[17px] font-bold leading-[1.25]
    transition-all duration-500
    sm:text-[19px] md:text-[20px]
    ${isActive ? "text-white" : "text-[#777]"}
  `}
>
  {(() => {
    const words = service.title.split(" ");
    const middle = Math.ceil(words.length / 2);

    return (
      <>
        <span>
          {words.slice(0, middle).join(" ")}{" "}
        </span>

        <span
          className="
            bg-gradient-to-r
            from-[#29B6F0]
            via-[#3E7BD6]
            to-[#B93FC9]
            bg-clip-text
            text-transparent
          "
        >
          {words.slice(middle).join(" ")}
        </span>
      </>
    );
  })()}
</h3>

                    {/* Description - Only When Open */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-700
                        ${
                          isImageOpen
                            ? "mt-3 max-h-24 opacity-100"
                            : "mt-0 max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p className="text-[12px] leading-5 text-[#A0A0A8] sm:text-[13px]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      ARROW BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    aria-label={
                      isImageOpen
                        ? `Close ${service.title}`
                        : `View ${service.title}`
                    }
                    onClick={(e) => toggleImage(e, index)}
                    className={`
                      absolute bottom-5 left-6 right-6 z-20
                      flex h-12 items-center
                      rounded-full border
                      transition-all duration-500

                      ${
                        isActive
                          ? "border-white/15 bg-white/[0.04]"
                          : "border-white/10 bg-transparent"
                      }
                    `}
                  >
                    {/* Arrow Circle */}
                    <span
                      className={`
                        ml-1 flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full transition-all duration-500

                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] text-white"
                            : "bg-white/[0.05] text-[#666]"
                        }
                      `}
                    >
                      {isImageOpen ? (
                        <ArrowDownLeft size={18} />
                      ) : (
                        <ArrowUpRight size={18} />
                      )}
                    </span>

                    {/* Line */}
                    <span
                      className={`
                        mx-3 h-px flex-1

                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0]/50 to-[#7A4FD1]/20"
                            : "bg-white/10"
                        }
                      `}
                    />
                  </button>

                  {/* =================================================
                      BOTTOM GRADIENT
                  ================================================= */}

                  <div
                    className={`
                      absolute bottom-0 left-0 right-0 h-[3px]
                      bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]
                      transition-opacity duration-500

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            DESKTOP INDICATORS
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mt-6 hidden items-center justify-center gap-2 md:flex"
        >
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Go to service ${index + 1}`}
              onClick={() => {
                setActive(index);
                setOpenImage(null);
              }}
              className={`
                h-1.5 rounded-full transition-all duration-500

                ${
                  active === index
                    ? "w-9 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="md:hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {services.map((service, index) => {
                const isImageOpen = openImage === index;
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="w-full shrink-0 px-1"
                  >
                    <div
                      className={`
                        relative overflow-hidden
                        border border-[#29B6F0]/20
                        bg-gradient-to-br from-[#121212] via-[#080808] to-[#111]
                        transition-all duration-700

                        rounded-[28px]
                        rounded-tr-[60px]
                        rounded-bl-[40px]

                        ${
                          isImageOpen
                            ? "h-[500px]"
                            : "h-[410px]"
                        }
                      `}
                    >
                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <div
                        className={`
                          absolute left-4 right-4 top-4
                          overflow-hidden rounded-[20px]
                          transition-all duration-700

                          ${
                            isImageOpen
                              ? "h-[160px] opacity-100"
                              : "h-0 opacity-0"
                          }
                        `}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute inset-0 rounded-[20px] border border-white/10" />
                      </div>

                      {/* =================================================
                          RELATED ICON
                      ================================================= */}

                      <div
                        className={`
                          absolute left-1/2 flex -translate-x-1/2
                          items-center justify-center
                          transition-all duration-700

                          ${
                            isImageOpen
                              ? "top-[205px]"
                              : "top-[90px]"
                          }
                        `}
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10">
                          <Icon
                            size={34}
                            strokeWidth={1.7}
                            className="text-[#29B6F0]"
                          />
                        </div>
                      </div>

                      {/* =================================================
                          TITLE + DESCRIPTION
                      ================================================= */}

                      <div
                        className={`
                          absolute left-6 right-6
                          transition-all duration-700

                          ${
                            isImageOpen
                              ? "bottom-[78px]"
                              : "bottom-[78px]"
                          }
                        `}
                      >
                        <h3
                          className={`
                            text-[18px] font-bold leading-[1.25]
                            text-white
                            transition-all duration-700
                            sm:text-[20px]
                          `}
                        >
                          {service.title}
                        </h3>

                        {/* Description - Only When Open */}
                        <div
                          className={`
                            overflow-hidden transition-all duration-700

                            ${
                              isImageOpen
                                ? "mt-3 max-h-24 opacity-100"
                                : "mt-0 max-h-0 opacity-0"
                            }
                          `}
                        >
                          <p className="text-[12px] leading-5 text-[#A0A0A8] sm:text-[13px]">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* =================================================
                          ARROW
                      ================================================= */}

                      <button
                        type="button"
                        aria-label={
                          isImageOpen
                            ? `Close ${service.title}`
                            : `View ${service.title}`
                        }
                        onClick={(e) => toggleImage(e, index)}
                        className="absolute bottom-5 left-5 right-5 flex h-12 items-center rounded-full border border-white/15 bg-white/[0.04]"
                      >
                        <span className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] text-white">
                          {isImageOpen ? (
                            <ArrowDownLeft size={18} />
                          ) : (
                            <ArrowUpRight size={18} />
                          )}
                        </span>

                        <span className="mx-3 h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 to-transparent" />
                      </button>

                      {/* Bottom Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-label={`Go to service ${index + 1}`}
                onClick={() => {
                  setActive(index);
                  setOpenImage(null);
                }}
                className={`
                  h-1.5 rounded-full transition-all duration-500

                  ${
                    active === index
                      ? "w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]"
                      : "w-1.5 bg-white/20"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />
    </section>
  );
}

export default Services;

