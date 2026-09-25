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
    <section className="relative overflow-hidden bg-black py-12 sm:py-14 md:py-16 lg:py-16 xl:py-16">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
        <div className="absolute -left-32 top-16 h-[220px] w-[220px] rounded-full bg-[#29B6F0]/10 blur-[110px] sm:-left-40 sm:top-20 sm:h-[300px] sm:w-[300px] sm:blur-[140px] md:h-[400px] md:w-[400px] md:blur-[150px]" />

        {/* Violet Glow */}
        <div className="absolute -right-32 bottom-0 h-[250px] w-[250px] rounded-full bg-[#7A4FD1]/10 blur-[120px] sm:-right-40 sm:h-[350px] sm:w-[350px] sm:blur-[150px] md:h-[450px] md:w-[450px] md:blur-[160px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[100px] sm:h-[220px] sm:w-[220px] sm:blur-[120px] md:h-[250px] md:w-[250px] md:blur-[130px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1350px] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-8 w-full max-w-3xl text-center sm:mb-10 md:mb-12 lg:mb-8"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs sm:tracking-[0.3em] md:text-sm md:tracking-[0.35em]">
            Services
          </span>

          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.12] sm:mt-3 sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px]">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:mt-5 sm:w-20 sm:h-[3px]" />
        </div>

        {/* =====================================================
            DESKTOP CAROUSEL
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="relative hidden h-[430px] overflow-hidden md:block lg:h-[460px] xl:h-[490px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-10 bg-gradient-to-r from-black to-transparent sm:w-16 lg:w-28 xl:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-10 bg-gradient-to-l from-black to-transparent sm:w-16 lg:w-28 xl:w-32" />

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
                  width: "min(320px, 28vw)",

                  height: isImageOpen
                    ? "430px"
                    : isActive
                    ? "380px"
                    : "350px",

                  transform: `
                    translate(-50%, -50%)
                    translateX(
                      calc(
                        ${position} *
                        (min(320px, 28vw) + 20px)
                      )
                    )
                    scale(${isActive ? 1 : 0.88})
                  `,

                  zIndex: isActive ? 20 : 10 - Math.abs(position),

                  opacity:
                    Math.abs(position) === 2
                      ? 0.4
                      : isActive
                      ? 1
                      : 0.68,

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
                    rounded-[26px]
                    rounded-tr-[58px]
                    rounded-bl-[42px]

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
                      rounded-[20px] transition-all duration-700

                      ${
                        isImageOpen
                          ? "h-[145px] opacity-100 sm:h-[155px] lg:h-[165px]"
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

                    <div className="absolute inset-0 rounded-[20px] border border-white/10" />
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
                          ? "top-[180px] sm:top-[195px] lg:top-[205px]"
                          : "top-[82px] sm:top-[88px] lg:top-[95px]"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex h-[58px] w-[58px] items-center justify-center
                        rounded-full border transition-all duration-700
                        sm:h-[64px] sm:w-[64px]
                        lg:h-[68px] lg:w-[68px]

                        ${
                          isActive
                            ? "border-[#29B6F0]/30 bg-[#29B6F0]/10"
                            : "border-white/10 bg-white/[0.03]"
                        }
                      `}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.7}
                        className={
                          isActive ? "text-[#29B6F0]" : "text-white/30"
                        }
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`
                      absolute left-5 right-5 z-10
                      transition-all duration-700
                      sm:left-6 sm:right-6
                      lg:left-7 lg:right-7

                      ${
                        isImageOpen
                          ? "bottom-[74px]"
                          : "bottom-[72px]"
                      }
                    `}
                  >
                    <h3
                      className={`
                        text-[16px] font-bold leading-[1.25]
                        transition-all duration-500
                        sm:text-[18px]
                        md:text-[19px]
                        lg:text-[20px]

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
                      <p className="text-[11px] leading-5 text-[#A0A0A8] sm:text-[12px] md:text-[13px]">
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
                      absolute bottom-4 left-5 right-5 z-20
                      flex h-11 items-center
                      rounded-full border
                      transition-all duration-500
                      sm:bottom-5 sm:left-6 sm:right-6 sm:h-12

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
                        ml-1 flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full transition-all duration-500
                        sm:h-10 sm:w-10

                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] text-white"
                            : "bg-white/[0.05] text-[#666]"
                        }
                      `}
                    >
                      {isImageOpen ? (
                        <ArrowDownLeft size={17} />
                      ) : (
                        <ArrowUpRight size={17} />
                      )}
                    </span>

                    {/* Line */}
                    <span
                      className={`
                        mx-2.5 h-px flex-1
                        sm:mx-3

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

                      ${isActive ? "opacity-100" : "opacity-0"}
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
          className="mt-5 hidden items-center justify-center gap-2 md:flex lg:mt-6"
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
                    ? "w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] lg:w-9"
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
                    className="w-full shrink-0 px-0.5 sm:px-1"
                  >
                    <div
                      className={`
                        relative overflow-hidden
                        border border-[#29B6F0]/20
                        bg-gradient-to-br from-[#121212] via-[#080808] to-[#111]
                        transition-all duration-700

                        rounded-[24px]
                        rounded-tr-[52px]
                        rounded-bl-[36px]

                        ${
                          isImageOpen
                            ? "h-[480px] sm:h-[490px]"
                            : "h-[380px] sm:h-[400px]"
                        }
                      `}
                    >
                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <div
                        className={`
                          absolute left-3.5 right-3.5 top-3.5
                          overflow-hidden rounded-[18px]
                          transition-all duration-700
                          sm:left-4 sm:right-4 sm:top-4 sm:rounded-[20px]

                          ${
                            isImageOpen
                              ? "h-[145px] opacity-100 sm:h-[155px]"
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

                        <div className="absolute inset-0 rounded-[18px] border border-white/10 sm:rounded-[20px]" />
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
                              ? "top-[185px] sm:top-[200px]"
                              : "top-[75px] sm:top-[82px]"
                          }
                        `}
                      >
                        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 sm:h-[72px] sm:w-[72px]">
                          <Icon
                            size={30}
                            strokeWidth={1.7}
                            className="text-[#29B6F0] sm:h-[32px] sm:w-[32px]"
                          />
                        </div>
                      </div>

                      {/* =================================================
                          TITLE + DESCRIPTION
                      ================================================= */}

                      <div
                        className="
                          absolute left-5 right-5 bottom-[70px]
                          transition-all duration-700
                          sm:left-6 sm:right-6 sm:bottom-[74px]
                        "
                      >
                        <h3
                          className="
                            text-[17px] font-bold leading-[1.28]
                            text-white transition-all duration-700
                            sm:text-[19px]
                          "
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
                          <p className="text-[11px] leading-5 text-[#A0A0A8] sm:text-[12px] sm:leading-5">
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
                        className="
                          absolute bottom-4 left-4 right-4
                          flex h-11 items-center
                          rounded-full border border-white/15
                          bg-white/[0.04]
                          sm:bottom-5 sm:left-5 sm:right-5 sm:h-12
                        "
                      >
                        <span className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] text-white sm:h-10 sm:w-10">
                          {isImageOpen ? (
                            <ArrowDownLeft size={17} />
                          ) : (
                            <ArrowUpRight size={17} />
                          )}
                        </span>

                        <span className="mx-2.5 h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 to-transparent sm:mx-3" />
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
          <div className="mt-5 flex justify-center gap-2 sm:mt-6">
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
                      ? "w-7 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8"
                      : "w-1.5 bg-white/20"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>

       </section>
  );
}

export default Services;