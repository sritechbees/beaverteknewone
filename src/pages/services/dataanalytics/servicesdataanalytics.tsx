"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BarChart3,
  FileBarChart,
  MonitorCheck,
  Presentation,
  Database,
} from "lucide-react";

const services = [
  {
    title: "BI Dashboard Development",
    description:
      "Build powerful dashboards that turn complex business data into clear and actionable insights.",
    image: "/home/homehero.jpg",
    icon: BarChart3,
  },
  {
    title: "Interactive Reports",
    description:
      "Create dynamic and interactive reports that help teams explore data and make informed decisions.",
    image: "/services/software maintance.png",
    icon: FileBarChart,
  },
  {
    title: "Power BI Development",
    description:
      "Develop intelligent Power BI solutions with interactive visualizations, analytics, and reporting.",
    image: "/services/Cloud Cost Analysis.jpg",
    icon: MonitorCheck,
  },
  {
    title: "Executive Reporting",
    description:
      "Deliver executive-level reports that provide a clear view of business performance and key metrics.",
    image: "/services/Cloud Cost Optimization.jpg",
    icon: Presentation,
  },
  {
    title: "Data Warehousing",
    description:
      "Organize and consolidate data from multiple sources into reliable and scalable data warehouse solutions.",
    image: "/services/Custom Software.jpg",
    icon: Database,
  },
];

function Servicesdataanalytics() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
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
        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[100px] sm:h-[220px] sm:w-[220px] sm:blur-[120px] md:h-[280px] md:w-[280px] md:blur-[140px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="mx-auto mb-8 w-full max-w-3xl text-center sm:mb-10 md:mb-12 lg:mb-14"
        >
          {/* Label */}

          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
            <span className="h-[2px] w-6 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.3em]">
              Services
            </span>

            <span className="h-[2px] w-6 shrink-0 bg-gradient-to-r from-[#7A4FD1] to-[#29B6F0] sm:w-8" />
          </div>

          {/* Heading */}

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[28px] font-extrabold leading-[1.12] text-white sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[54px]"
          >
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          {/* Gradient Line */}

          <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:mt-4 sm:h-[3px] sm:w-16" />
        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-6 lg:gap-6 xl:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            const desktopPosition =
              index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : index === 4
                ? "lg:col-span-2 lg:col-start-4"
                : "lg:col-span-2";

            return (
              <div
                key={service.title}
                data-aos={
                  index === 0
                    ? "fade-right"
                    : index === 1
                    ? "fade-up"
                    : index === 2
                    ? "fade-left"
                    : index === 3
                    ? "fade-right"
                    : "fade-left"
                }
                data-aos-delay={index * 120}
                data-aos-duration="1000"
                className={`
                  ${desktopPosition}
                  group relative w-full overflow-hidden
                  rounded-[20px]
                  border border-white/[0.08]
                  bg-[#0A0A0A]
                  shadow-[0_14px_45px_rgba(0,0,0,0.35)]
                  transition-all duration-700
                  hover:-translate-y-1.5
                  hover:border-[#29B6F0]/30
                  hover:shadow-[0_20px_55px_rgba(41,182,240,0.10)]
                  sm:rounded-[22px]
                `}
              >
                {/* =================================================
                    GLASS BORDER
                ================================================= */}

                <div className="pointer-events-none absolute inset-0 z-30 rounded-[20px] border border-white/[0.06] transition-all duration-700 group-hover:border-white/[0.14] sm:rounded-[22px]" />

                {/* =================================================
                    TOP GLASS SHINE
                ================================================= */}

                <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    relative
                    h-[285px]
                    w-full
                    overflow-hidden
                    sm:h-[300px]
                    md:h-[315px]
                    lg:h-[335px]
                    xl:h-[345px]
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-105
                      group-hover:opacity-20
                    "
                  />

                  {/* =================================================
                      IMAGE DARK OVERLAY
                  ================================================= */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 transition-all duration-700 group-hover:from-black group-hover:via-black/90 group-hover:to-black/90" />

                  {/* =================================================
                      NORMAL STATE
                  ================================================= */}

                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center transition-all duration-700 group-hover:scale-95 group-hover:opacity-0 sm:px-5 md:px-6">
                    {/* Gradient Line */}

                    <div className="mb-3 h-[2px] w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:mb-4 sm:w-9 md:w-10" />

                    {/* Title */}

                    <h3 className="max-w-[260px] text-[18px] font-extrabold leading-[1.2] text-white sm:max-w-[280px] sm:text-[20px] md:text-[22px] lg:text-[23px]">
                      {service.title}
                    </h3>
                  </div>

                  {/* =================================================
                      HOVER CONTENT
                      ICON → TITLE → DESCRIPTION
                  ================================================= */}

                  <div className="absolute inset-0 z-20 flex scale-[0.96] flex-col items-center justify-center px-4 py-6 text-center opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 sm:px-6 sm:py-7 md:px-7 lg:px-8">
                    {/* ==============================
                        ICON
                    ============================== */}

                    <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/30 bg-gradient-to-br from-[#29B6F0]/15 via-[#3E7BD6]/10 to-[#B93FC9]/15 shadow-[0_0_28px_rgba(41,182,240,0.14)] transition-all duration-500 group-hover:scale-110 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl md:mb-6 md:h-16 md:w-16">
                      <Icon
                        size={22}
                        strokeWidth={2.2}
                        className="text-[#29B6F0] transition-all duration-500 sm:h-6 sm:w-6 md:h-7 md:w-7"
                      />
                    </div>

                    {/* ==============================
                        TITLE
                    ============================== */}

                    <h3 className="mb-3 max-w-[260px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-[17px] font-extrabold leading-[1.15] text-transparent sm:mb-4 sm:max-w-[290px] sm:text-[19px] md:mb-5 md:text-[21px] lg:text-[22px]">
                      {service.title}
                    </h3>

                    {/* ==============================
                        DESCRIPTION
                    ============================== */}

                    <p className="mx-auto max-w-[280px] text-[11px] font-medium leading-[1.6] text-[#D4D4D8] sm:max-w-[320px] sm:text-[12px] sm:leading-5 md:max-w-[340px] md:text-[13px] md:leading-6 lg:text-[14px]">
                      {service.description}
                    </p>

                    {/* ==============================
                        BOTTOM GLASS LINE
                    ============================== */}

                    <div className="mt-5 flex w-full max-w-[130px] items-center justify-center gap-1.5 sm:mt-6 sm:max-w-[155px] sm:gap-2 md:mt-7 md:max-w-[175px]">
                      <span className="h-[2px] w-6 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8 sm:h-[2px]" />

                      <span className="h-px min-w-0 flex-1 bg-white/10" />

                      <span className="h-[2px] w-6 bg-gradient-to-r from-[#7A4FD1] to-[#29B6F0] sm:w-8" />
                    </div>
                  </div>

                  {/* =================================================
                      LIGHT GLASS EFFECT
                  ================================================= */}

                  <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-br from-[#29B6F0]/0 via-transparent to-[#B93FC9]/0 transition-all duration-700 group-hover:from-[#29B6F0]/5 group-hover:to-[#B93FC9]/10" />

                  {/* =================================================
                      SUBTLE GLASS REFLECTION
                  ================================================= */}

                  <div className="pointer-events-none absolute -left-[80%] top-0 z-[6] h-full w-[50%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-all duration-[1200ms] group-hover:left-[130%]" />
                </div>

                {/* =================================================
                    BOTTOM GRADIENT LINE
                ================================================= */}

                <div className="absolute bottom-0 left-0 z-40 h-[3px] w-0 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-700 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />
    </section>
  );
}

export default Servicesdataanalytics;