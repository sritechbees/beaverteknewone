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

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:py-14 md:py-16 lg:py-16 xl:py-16">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
        <div className="absolute -left-32 top-16 h-[220px] w-[220px] rounded-full bg-[#29B6F0]/10 blur-[110px] sm:-left-40 sm:top-20 sm:h-[300px] sm:w-[300px] sm:blur-[135px] md:h-[400px] md:w-[400px] md:blur-[150px]" />

        {/* Violet Glow */}
        <div className="absolute -right-32 bottom-0 h-[250px] w-[250px] rounded-full bg-[#7A4FD1]/10 blur-[120px] sm:-right-40 sm:h-[350px] sm:w-[350px] sm:blur-[145px] md:h-[450px] md:w-[450px] md:blur-[160px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[100px] sm:h-[220px] sm:w-[220px] sm:blur-[115px] md:h-[250px] md:w-[250px] md:blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-9 w-full max-w-3xl text-center sm:mb-11 md:mb-14 lg:mb-16"
        >
          <div className="mb-3 flex items-center justify-center gap-2.5 sm:mb-4 sm:gap-3">
            <span className="h-[2px] w-6 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8 md:w-10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.26em] md:text-xs md:tracking-[0.3em]">
              Data Analytics
            </span>

            <span className="h-[2px] w-6 shrink-0 bg-gradient-to-r from-[#7A4FD1] to-[#29B6F0] sm:w-8 md:w-10" />
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.12] text-white sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[52px]">
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Data Intelligence
            </span>
          </h2>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="group relative overflow-hidden rounded-[26px] rounded-tr-[65px] rounded-bl-[52px] sm:rounded-[30px] sm:rounded-tr-[80px] sm:rounded-bl-[65px] md:rounded-[34px] md:rounded-tr-[90px] md:rounded-bl-[72px] lg:rounded-[38px] lg:rounded-tr-[100px] lg:rounded-bl-[80px]">
              <img
                src="/services/Data Analytics1.jpg"
                alt="Data Analytics and Reporting"
                className="
                  h-[240px]
                  w-full
                  object-contain
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                  sm:h-[290px]
                  md:h-[350px]
                  lg:h-[410px]
                  xl:h-[450px]
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
                  right-3
                  top-3
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-black/65
                  px-2.5
                  py-2
                  backdrop-blur-md
                  sm:right-4
                  sm:top-4
                  sm:gap-2.5
                  sm:rounded-2xl
                  sm:px-3
                  sm:py-2.5
                  md:right-5
                  md:top-5
                  md:gap-3
                  md:px-4
                  md:py-3
                "
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#29B6F0]/15 text-[#29B6F0] sm:h-9 sm:w-9 sm:rounded-xl md:h-10 md:w-10">
                  <BarChart3 size={17} className="sm:h-[18px] sm:w-[18px] md:h-[19px] md:w-[19px]" />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-wider text-gray-400 sm:text-[9px] md:text-[10px]">
                    Analytics
                  </p>

                  <p className="text-[10px] font-bold text-white sm:text-xs md:text-sm">
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
                  bottom-3
                  left-3
                  right-3
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-black/60
                  px-2.5
                  py-2
                  backdrop-blur-md
                  sm:bottom-4
                  sm:left-4
                  sm:right-4
                  sm:gap-2.5
                  sm:rounded-2xl
                  sm:px-3
                  sm:py-2.5
                  md:bottom-5
                  md:left-5
                  md:right-5
                  md:gap-3
                  md:px-4
                  md:py-3
                "
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0] sm:h-2.5 sm:w-2.5" />

                <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-[#29B6F0]/60 to-[#7A4FD1]/20" />

                <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.08em] text-gray-300 sm:text-[9px] sm:tracking-wider md:text-xs">
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
            className="flex min-w-0 flex-col justify-center"
          >
            {/* Label */}

            <div
              data-aos="fade-up"
              className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3"
            >
              <span className="h-[2px] w-7 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8 md:w-10" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.26em] md:text-xs md:tracking-[0.3em]">
                Data Intelligence
              </span>
            </div>

            {/* Heading */}

            <h3
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                max-w-2xl
                text-[27px]
                font-extrabold
                leading-[1.12]
                text-white
                sm:text-[31px]
                md:text-[36px]
                lg:text-[42px]
                xl:text-[46px]
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
                mt-4
                max-w-2xl
                text-[13px]
                leading-6
                text-[#A0A0A8]
                sm:mt-5
                sm:text-[14px]
                sm:leading-7
                md:mt-6
                md:text-[15px]
                md:leading-7
                lg:text-base
                lg:leading-8
                xl:text-[17px]
                xl:leading-8
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
              className="mt-6 flex w-full max-w-2xl items-center gap-3 sm:mt-7 sm:gap-4 md:mt-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 text-[#29B6F0] sm:h-11 sm:w-11 sm:rounded-2xl md:h-12 md:w-12">
                <BarChart3 size={19} className="sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]" />
              </div>

              <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-[#29B6F0]/50 via-[#3E7BD6]/30 to-transparent" />

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#29B6F0] transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-[#29B6F0]/10 sm:h-10 sm:w-10">
                <ArrowUpRight size={17} className="sm:h-[18px] sm:w-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overviewdataanalytics;