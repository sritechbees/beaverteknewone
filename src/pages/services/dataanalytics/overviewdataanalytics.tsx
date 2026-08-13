"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BarChart3, ArrowUpRight } from "lucide-react";

function Overviewdataanalytics() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Cyan Glow */}
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

        {/* Violet Glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#7A4FD1]/10 blur-[160px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 md:mb-20"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0] sm:text-sm">
              Data Analytics
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-r from-[#7A4FD1] to-[#29B6F0]" />
          </div>

         <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
    Our Services
  </span>
</h2>
 </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-24">

          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="group relative overflow-hidden rounded-[38px] rounded-tr-[100px] rounded-bl-[80px]">

              <img
                src="/services/Data Analytics1.jpg"
                alt="Data Analytics and Reporting"
                className="
                  h-[300px]
                  w-full
                  object-contain
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                  sm:h-[360px]
                  md:h-[410px]
                  lg:h-[450px]
                "
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* =================================================
                  FLOATING ANALYTICS BADGE
              ================================================= */}

              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-black/65
                  px-3
                  py-2.5
                  backdrop-blur-md
                  sm:right-5
                  sm:top-5
                  sm:px-4
                  sm:py-3
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#29B6F0]/15 text-[#29B6F0] sm:h-10 sm:w-10">
                  <BarChart3 size={19} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 sm:text-[10px]">
                    Analytics
                  </p>

                  <p className="text-xs font-bold text-white sm:text-sm">
                    Data Insights
                  </p>
                </div>
              </div>

              {/* =================================================
                  BOTTOM FLOATING ELEMENT
              ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-black/60
                  px-3
                  py-2.5
                  backdrop-blur-md
                  sm:bottom-5
                  sm:left-5
                  sm:right-5
                  sm:px-4
                  sm:py-3
                "
              >
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

                <div className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/60 to-[#7A4FD1]/20" />

                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-300 sm:text-xs">
                  Data Driven Decisions
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >

            {/* Label */}

            <div
              data-aos="fade-up"
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0]">
                Our Service
              </span>
            </div>

            {/* Heading */}

            <h3
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                max-w-2xl
                text-3xl
                font-extrabold
                leading-[1.15]
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Turn Data Into{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Meaningful Insights
              </span>
            </h3>

            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[#A0A0A8]
                sm:text-lg
                sm:leading-9
              "
            >
              Our service Transform raw business data into meaningful insights
              that support informed decision-making, improving operational
              efficiency and identify new growth opportunities. By collecting,
              analyzing and visualizing data from multiple systems,
              organizations can monitor performance, identify trends and make
              proactive business decision.
            </p>

            {/* Bottom Highlight */}

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 flex max-w-2xl items-center gap-4"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-[#29B6F0]">
                <BarChart3 size={22} />
              </div>

              <div className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 via-[#3E7BD6]/30 to-transparent" />

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#29B6F0] transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-[#29B6F0]/10">
                <ArrowUpRight size={18} />
              </div>

            </div>
          </div>
        </div>

       
      </div>

       </section>
  );
}

export default Overviewdataanalytics;