"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

type Service = {
  number: string;
  title: string;
  image: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Custom enterprise application development",
    image: "/services/software maintance.png",
  },
  {
    number: "02",
    title: "Legacy modernization",
    image: "/services/End-to-End Digital Transformation.jpg",
  },
  {
    number: "03",
    title: "Cloud-native application development",
    image: "/services/Cloud Cost Analysis.jpg",
  },
  {
    number: "04",
    title: "Feature enhancements & upgrades",
    image: "/services/End-to-End Digital Transformation.jpg",
  },
  {
    number: "05",
    title:
      "Preventive and corrective maintenance with near-zero downtime",
    image: "/services/software maintance.png",
  },
  {
    number: "06",
    title: "Performance monitoring & technical support",
    image: "/services/Cloud Cost Analysis.jpg",
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
    });
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
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-28">

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
  <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#29B6F0]">
    Services
  </span>

  <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
    Our Services
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

          {/* =====================================================
              CARDS
          ===================================================== */}

          {services.map((service, index) => {
            const position = getPosition(index);

            if (Math.abs(position) > 2) return null;

            const isActive = position === 0;
            const isImageOpen = openImage === index;

            return (
              <div
                key={service.number}
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

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Gradient border */}

                    <div className="absolute inset-0 rounded-[22px] border border-white/10" />
                  </div>

                  {/* =================================================
                      TOP
                  ================================================= */}

                  <div
                    className={`
                      absolute left-7 right-7 z-10 flex items-center
                      justify-between transition-all duration-700
                      ${
                        isImageOpen
                          ? "top-[190px]"
                          : "top-7"
                      }
                    `}
                  >

                    {/* Number */}

                    <span
                      className={`
                        text-xs font-bold tracking-[0.3em]
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] bg-clip-text text-transparent"
                            : "text-[#555]"
                        }
                      `}
                    >
                      {service.number}
                    </span>

                    {/* Status Dot */}

                    <span
                      className={`
                        h-2.5 w-2.5 rounded-full transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#29B6F0] shadow-[0_0_16px_#29B6F0]"
                            : "bg-[#333]"
                        }
                      `}
                    />

                  </div>

                  {/* =================================================
                      CENTER ICON
                  ================================================= */}

                  <div
                    className={`
                      absolute left-1/2 z-10 flex -translate-x-1/2
                      items-center justify-center transition-all duration-700
                      ${
                        isImageOpen
                          ? "top-[245px]"
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

                      <div
                        className={`
                          h-7 w-7 rotate-45 rounded-lg
                          transition-all duration-700
                          ${
                            isActive
                              ? "bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] shadow-[0_0_22px_rgba(41,182,240,0.3)]"
                              : "bg-white/10"
                          }
                        `}
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
                          ? "bottom-[78px]"
                          : "bottom-[78px]"
                      }
                    `}
                  >

                    <h3
                      className={`
                        text-xl font-bold leading-[1.2]
                        transition-all duration-500
                        sm:text-[22px]
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#777]"
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                  </div>

                  {/* =================================================
                      ARROW BUTTON
                  ================================================= */}

                  <button
                    type="button"
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
              key={service.number}
              type="button"
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

                return (
                  <div
                    key={service.number}
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

                      {/* Image */}

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
                      </div>

                      {/* Number */}

                      <div
                        className={`
                          absolute left-6 right-6 flex justify-between
                          transition-all duration-700
                          ${
                            isImageOpen
                              ? "top-[180px]"
                              : "top-6"
                          }
                        `}
                      >

                        <span className="text-xs font-bold tracking-[0.3em] text-[#29B6F0]">
                          {service.number}
                        </span>

                        <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

                      </div>

                      {/* Icon */}

                      <div
                        className={`
                          absolute left-1/2 flex -translate-x-1/2
                          items-center justify-center
                          transition-all duration-700
                          ${
                            isImageOpen
                              ? "top-[225px]"
                              : "top-[90px]"
                          }
                        `}
                      >

                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10">

                          <div className="h-8 w-8 rotate-45 rounded-lg bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />

                        </div>

                      </div>

                      {/* Title */}

                      <h3
                        className={`
                          absolute left-6 right-6
                          text-2xl font-bold leading-tight text-white
                          transition-all duration-700
                          ${
                            isImageOpen
                              ? "bottom-[78px]"
                              : "bottom-[78px]"
                          }
                        `}
                      >
                        {service.title}
                      </h3>

                      {/* Arrow */}

                      <button
                        type="button"
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
                key={service.number}
                type="button"
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