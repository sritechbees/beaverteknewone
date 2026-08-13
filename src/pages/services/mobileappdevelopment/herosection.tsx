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
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <App_layout>
      <section className="relative min-h-[560px] overflow-hidden bg-[#000000] sm:min-h-[620px] lg:min-h-[680px]">

        {/* =====================================================
            FULL BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">

          <img
            src="/services/Mobile App.png"
            alt="Mobile App Development"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/10" />

          {/* Left Content Gradient */}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

          {/* Bottom Gradient */}

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

        </div>

        {/* =====================================================
            ANIMATED BRAND GLOWS
        ====================================================== */}

        <div className="absolute -left-40 top-10 h-[350px] w-[350px] animate-pulse rounded-full bg-[#29B6F0]/15 blur-[150px] sm:h-[450px] sm:w-[450px]" />

        <div
          className="absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-[#B93FC9]/15 blur-[160px]"
          style={{
            animation: "floatingGlow 7s ease-in-out infinite",
          }}
        />

        {/* =====================================================
            SUBTLE GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 sm:min-h-[620px] sm:px-8 sm:py-28 lg:min-h-[680px] lg:px-8">

          <div className="max-w-4xl">

            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className="mb-7 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl sm:mb-9 sm:px-5"
              data-aos="fade-down"
              data-aos-delay="100"
            >

              <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.9)]" />

              <span className="ml-3 text-xs font-medium text-[#D4D4D8] sm:text-sm">
                Services
              </span>

              <span className="mx-2 text-[#7A7A7A]">
                /
              </span>

              <span className="text-xs font-medium text-[#29B6F0] sm:text-sm">
                Mobile App Development
              </span>

            </div>

            {/* =================================================
                SMALL LABEL
            ================================================== */}

            <div
              className="mb-5 flex items-center gap-3"
              data-aos="fade-right"
              data-aos-delay="200"
            >

              <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-14" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A0A0A8] sm:text-sm">
                Mobile Solutions
              </span>

            </div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h1
              className="text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              Mobile

              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                App Development
              </span>

            </h1>

            {/* =================================================
                ACCENT
            ================================================== */}

            <div
              className="mt-8 flex items-center gap-3 sm:mt-10"
              data-aos="fade-right"
              data-aos-delay="500"
            >

              <div className="h-[2px] w-16 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:w-24" />

              <div className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_20px_rgba(41,182,240,.9)]" />

              <div className="h-px w-10 bg-[#2A2A30] sm:w-16" />

            </div>

          </div>

        </div>

        {/* =====================================================
            SIDE VERTICAL TEXT
        ====================================================== */}

        <div
          className="absolute bottom-12 right-6 hidden lg:block"
          data-aos="fade-left"
          data-aos-delay="600"
        >

          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-[#2A2A30]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#A0A0A8]">
              Mobile App Development
            </span>

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
              transform: translate3d(-25px, -20px, 0) scale(1.08);
            }
          }
        `}</style>

      </section>
  <Overviewmobile/>
  <Services/>
    </App_layout>
  );
}

export default Herosection;