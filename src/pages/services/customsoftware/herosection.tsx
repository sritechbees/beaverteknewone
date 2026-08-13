"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Overviewsotware from "./overviewsotware";
import Services from "./services";


function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <App_layout>
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-black sm:min-h-[600px] lg:min-h-[680px]">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Left-to-right gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/25" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

        {/* BeaverTek color glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/10 via-transparent to-[#7A4FD1]/20" />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/15 blur-[150px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#7A4FD1]/15 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/10 blur-[140px]" />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-24 sm:px-6 md:py-28 lg:px-8">

        <div
          data-aos="fade-up"
          className="relative w-full max-w-5xl text-center"
        >

         

          {/* =================================================
              MAIN TITLE
          ================================================= */}

          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]"
          >
            Custom Software
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Development & Maintenance
            </span>
          </h1>

          {/* Decorative bottom line */}

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mx-auto mt-9 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] shadow-[0_0_15px_rgba(62,123,214,0.35)] sm:w-32"
          />

        </div>
      </div>

      {/* =====================================================
          FLOATING DECORATIVE ELEMENTS
      ===================================================== */}

      <div
        data-aos="fade-right"
        data-aos-delay="600"
        className="absolute left-[5%] top-[28%] hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:block"
      >
        <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-[#29B6F0]/20 to-[#3E7BD6]/5" />
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="700"
        className="absolute right-[6%] bottom-[25%] hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl md:block"
      >
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7A4FD1]/30 to-[#B93FC9]/10 blur-sm" />
      </div>

      {/* =====================================================
          BOTTOM BORDER
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/60 to-transparent" />

    </section>
    <Overviewsotware/>
   <Services/>
    </App_layout>
  );
}

export default Herosection;