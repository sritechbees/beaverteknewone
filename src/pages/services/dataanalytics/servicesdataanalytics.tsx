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
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "BI Dashboard Development",
    description:
      "Build powerful dashboards that turn complex business data into clear and actionable insights.",
    image: "/home/homehero.jpg",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Interactive Reports",
    description:
      "Create dynamic and interactive reports that help teams explore data and make informed decisions.",
    image: "/services/software maintance.png",
    icon: FileBarChart,
  },
  {
    number: "03",
    title: "Power BI Development",
    description:
      "Develop intelligent Power BI solutions with interactive visualizations, analytics, and reporting.",
    image: "/services/Cloud Cost Analysis.jpg",
    icon: MonitorCheck,
  },
  {
    number: "04",
    title: "Executive Reporting",
    description:
      "Deliver executive-level reports that provide a clear view of business performance and key metrics.",
    image: "/services/Cloud Cost Optimization.jpg",
    icon: Presentation,
  },
  {
    number: "05",
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

        <div className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/10 blur-[160px]" />

        {/* Violet Glow */}

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 md:mb-20"
        >

          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0] sm:text-sm">
              Services
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-r from-[#7A4FD1] to-[#29B6F0]" />

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          {/* Gradient Line */}

          <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />

        </div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:gap-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-[28px] bg-[#0D0D0D] transition-all duration-700 hover:-translate-y-1"
              >

                {/* Gradient Hover Border */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[28px]
                    border
                    border-white/[0.07]
                    transition-all
                    duration-500
                    group-hover:border-[#29B6F0]/30
                  "
                />

                <div className="grid min-h-[320px] grid-cols-1 sm:min-h-[340px] sm:grid-cols-[1fr_0.9fr]">

                  {/* =================================================
                      LEFT CONTENT
                  ================================================= */}

                  <div className="relative flex flex-col p-6 sm:p-7 md:p-8 lg:p-9">

                    {/* Number */}

                    <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.2em] text-white/10 transition-colors duration-500 group-hover:text-[#29B6F0]/30">
                      {service.number}
                    </span>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#29B6F0]/10
                        text-[#29B6F0]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-gradient-to-br
                        group-hover:from-[#29B6F0]
                        group-hover:to-[#7A4FD1]
                        group-hover:text-white
                        group-hover:shadow-[0_0_30px_rgba(41,182,240,0.2)]
                      "
                    >
                      <Icon size={21} />
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-7
                        max-w-sm
                        text-xl
                        font-bold
                        leading-tight
                        text-white
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        sm:text-2xl
                      "
                    >
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-sm
                        leading-7
                        text-[#A0A0A8]
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {service.description}
                    </p>

                    {/* Learn More */}

                    <div className="mt-auto pt-7">

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-[#29B6F0]/30
                          px-5
                          py-2.5
                          text-sm
                          font-semibold
                          text-[#D4D4D8]
                          transition-all
                          duration-500
                          group-hover:border-[#29B6F0]
                          group-hover:bg-[#29B6F0]/10
                          group-hover:text-white
                        "
                      >
                        <span>Learn More</span>

                        <span
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-white/[0.05]
                            transition-all
                            duration-500
                            group-hover:rotate-45
                            group-hover:bg-gradient-to-br
                            group-hover:from-[#29B6F0]
                            group-hover:to-[#7A4FD1]
                          "
                        >
                          <ArrowUpRight size={15} />
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      RIGHT IMAGE
                  ================================================= */}

                  <div className="relative min-h-[230px] overflow-hidden sm:min-h-full">

                    {/* Image */}

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        group-hover:scale-105
                      "
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/40 via-transparent to-transparent sm:bg-gradient-to-r" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Gradient Hover Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#29B6F0]/0
                        via-transparent
                        to-[#7A4FD1]/0
                        transition-all
                        duration-700
                        group-hover:from-[#29B6F0]/10
                        group-hover:to-[#7A4FD1]/20
                      "
                    />

                    {/* Image Arrow */}

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-black/60
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        group-hover:rotate-45
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight size={19} />
                    </div>

                  </div>

                </div>

                {/* Bottom Gradient */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#B93FC9]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-14 flex items-center gap-4 sm:mt-16 md:mt-20"
        >

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

          <div className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

        </div>

      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />

    </section>
  );
}

export default Servicesdataanalytics;