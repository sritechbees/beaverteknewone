"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import Services from "./services";
import Overviewmobile from "./overviewmobile";

function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[390px] overflow-hidden bg-[#000000] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[540px]">

        {/* =====================================================
            FULL BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">
          <img
            src="/services/Mobile App Development.jpg"
            alt="Mobile App Development"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Centered Content Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/70" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent sm:h-56" />

          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent sm:h-40" />
        </div>

        {/* =====================================================
            BRAND GLOWS
        ====================================================== */}

        <div className="absolute -left-32 top-10 h-[240px] w-[240px] animate-pulse rounded-full bg-[#29B6F0]/12 blur-[120px] sm:-left-40 sm:h-[330px] sm:w-[330px] sm:blur-[140px]" />

        <div
          className="absolute -right-32 bottom-10 h-[240px] w-[240px] rounded-full bg-[#B93FC9]/12 blur-[120px] sm:-right-40 sm:h-[330px] sm:w-[330px] sm:blur-[150px]"
          style={{
            animation: "floatingGlow 7s ease-in-out infinite",
          }}
        />

        {/* =====================================================
            SUBTLE GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="relative mt-12 z-10 mx-auto flex min-h-[390px] max-w-7xl items-center justify-center px-3 pb-14 pt-6 text-center sm:min-h-[440px] sm:px-5 sm:pb-16 sm:pt-8 md:min-h-[480px] md:pb-20 md:pt-10 lg:min-h-[540px] lg:px-6 lg:pb-24 lg:pt-12">
          <div className="flex max-w-5xl -translate-y-5 flex-col items-center sm:-translate-y-6 lg:-translate-y-8">

            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-xl sm:mb-5 sm:px-4 sm:py-2"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_rgba(41,182,240,.9)] sm:h-2 sm:w-2" />

              <span className="ml-2 text-[10px] font-medium text-[#D4D4D8] sm:ml-2.5 sm:text-xs">
                Services
              </span>

              <span className="mx-1.5 text-[#7A7A7A] sm:mx-2">
                /
              </span>

              <span className="text-[10px] font-medium text-[#29B6F0] sm:text-xs">
                Mobile App Development
              </span>
            </div>

            {/* =================================================
                SMALL LABEL
            ================================================== */}

            <div
              className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="h-[2px] w-6 bg-gradient-to-r from-transparent to-[#29B6F0] sm:w-9" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A0A0A8] sm:text-[11px] sm:tracking-[0.25em]">
                Mobile Solutions
              </span>

              <span className="h-[2px] w-6 bg-gradient-to-r from-[#7A4FD1] to-transparent sm:w-9" />
            </div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h1
              className="max-w-4xl text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-[42px] md:text-5xl lg:text-6xl xl:text-[72px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Mobile{" "}
              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                App Development
              </span>
            </h1>

            {/* =================================================
                ACCENT
            ================================================== */}

            <div
              className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-3"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="800"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#29B6F0] to-[#7A4FD1] sm:w-14" />

              <div className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_14px_rgba(41,182,240,.9)] sm:h-2 sm:w-2" />

              <div className="h-[2px] w-8 bg-gradient-to-r from-[#7A4FD1] via-[#B93FC9] to-transparent sm:w-14" />
            </div>
          </div>
        </div>

        {/* =====================================================
            ANIMATION
        ====================================================== */}

        <style jsx>{`
          @keyframes floatingGlow {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(-20px, -15px, 0) scale(1.06);
            }
          }
        `}</style>
      </section>

      {/* =====================================================
          FOLLOWING SECTIONS
      ====================================================== */}

      <Overviewmobile />
      <Services />
    </App_layout>
  );
}

export default Herosection;