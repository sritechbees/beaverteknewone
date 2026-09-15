
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  LineChart,
  Activity,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const services = [
  {
    icon: BarChart3,
    title: "Executive dashboards",
    description:
      "Show the numbers that actually matter to your business with clear, interactive dashboards.",
    image: "/services/Data Analytics and Reporting1.jpg",
  },
  {
    icon: Database,
    title: "Operational reports",
    description:
      "Reliable reports your team can trust instead of rebuilding spreadsheets every Monday.",
    image: "/services/Custom Software.jpg",
  },
  {
    icon: LineChart,
    title: "Custom analytics",
    description:
      "Analytics designed around your unique business questions, goals, and KPIs.",
    image: "/services/software maintance.png",
  },
  {
    icon: Activity,
    title: "Real-time visibility",
    description:
      "Track sales, operations, customer behavior, and other critical metrics in real time.",
    image: "/services/Cloud Cost Analysis.jpg",
  },
  {
    icon: BarChart3,
    title: "Business intelligence",
    description:
      "Turn business data into smarter, faster decisions.",
    image: "/services/Data Analytics and Reporting.jpg",
  },
];

function WhatIsLookLike() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-9 sm:mt-12 sm:py-10 md:mt-14 md:py-12 lg:mt-0 lg:py-16">
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}

        <div className="absolute -left-32 top-10 h-60 w-60 rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-64 sm:w-64" />

        {/* Magenta Glow */}

        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#B93FC9]/10 blur-[125px] sm:h-72 sm:w-72" />

        {/* Blue Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BD6]/5 blur-[130px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-5 lg:px-6">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          data-aos="zoom-in-up"
          data-aos-duration="850"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span
            data-aos="fade-down"
            data-aos-delay="80"
            data-aos-duration="650"
            className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-[#0A0A0A] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#29B6F0] shadow-[0_0_20px_rgba(41,182,240,.08)] backdrop-blur-xl sm:px-4 sm:text-[10px] md:text-xs"
          >
            WHAT THIS LOOKS LIKE
          </span>

          {/* Title */}
<h3
  data-aos="fade-up"
  data-aos-delay="150"
  data-aos-duration="750"
  className="mt-4 text-2xl font-black tracking-tight sm:mt-5 sm:text-3xl md:text-4xl lg:text-[42px]"
>
  {/* First half - BeaverTek Gradient */}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: beaverTekGradient,
    }}
  >
    Solutions
  </span>{" "}

  {/* Remaining half - White */}
  <span className="text-white">
    We Build
  </span>
</h3>

          {/* Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="230"
            data-aos-duration="650"
            className="mx-auto mt-4 h-[2px] w-14 rounded-full sm:mt-5 sm:w-16"
            style={{
              background: beaverTekGradient,
              boxShadow: "0 0 20px rgba(62,123,214,.3)",
            }}
          />
        </motion.div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="mx-auto mt-8 max-w-6xl sm:mt-9 md:mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.09,
                    ease: "easeOut",
                  }}
                  data-aos={
                    index === 0
                      ? "fade-right"
                      : index === 1
                        ? "fade-up"
                        : index === 2
                          ? "fade-left"
                          : index === 3
                            ? "zoom-in-right"
                            : "zoom-in-left"
                  }
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                  className={[
                    "group relative",
                    "lg:col-span-2",
                    index === 3
                      ? "lg:col-start-2"
                      : index === 4
                        ? "lg:col-start-4"
                        : "",
                  ].join(" ")}
                >
                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div className="relative h-[300px] overflow-hidden rounded-[22px] border border-[#2A2A30] bg-[#0A0A0A] shadow-[0_12px_35px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#3E7BD6]/70 hover:shadow-[0_18px_45px_rgba(62,123,214,.18)] sm:h-[315px] md:h-[325px]">
                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Dark Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

                      {/* BeaverTek Color Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/10 via-transparent to-[#B93FC9]/15 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Hover Image Shine */}

                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100" />
                    </div>

                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div
                      className="absolute left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white shadow-[0_0_22px_rgba(62,123,214,.2)] backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 sm:left-5 sm:top-5 sm:h-11 sm:w-11"
                      style={{
                        background:
                          "linear-gradient(135deg,rgba(41,182,240,.9),rgba(62,123,214,.9),rgba(122,79,209,.9),rgba(185,63,201,.9))",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    {/* =================================================
                        CENTER TITLE
                    ================================================== */}

                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pb-5 text-center transition-all duration-500 group-hover:-translate-y-1 sm:pb-6">
                      {/* Small Gradient Line */}

                      <div
                        className="mb-2 h-[2px] w-9 rounded-full transition-all duration-500 group-hover:w-14"
                        style={{
                          background: beaverTekGradient,
                        }}
                      />

                      {/* Title */}

                      <h4 className="text-lg font-bold leading-6 text-white transition-all duration-500 group-hover:text-[#29B6F0] sm:text-xl">
                        {service.title}
                      </h4>
                    </div>

               
{/* =================================================
    30% CURVED DESCRIPTION
================================================== */}

<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[31%] translate-y-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0">
  <div className="relative h-full overflow-hidden bg-[#070707]/97 backdrop-blur-xl">

    {/* Large Curved Top */}

    <div
      className="
        absolute
        -left-[15%]
        -top-14
        h-24
        w-[130%]
        rounded-[50%]
        border-t
        border-[#3E7BD6]/60
        bg-[#070707]
      "
    />

    {/* Gradient Curve Glow */}

    <div
      className="
        absolute
        -left-[15%]
        -top-16
        h-28
        w-[130%]
        rounded-[50%]
        opacity-50
        blur-[22px]
      "
      style={{
        background: beaverTekGradient,
      }}
    />

    {/* Image Color Shadow */}

    <div
      className="
        absolute
        -left-[15%]
        -top-12
        h-24
        w-[130%]
        rounded-[50%]
        bg-[#29B6F0]/10
        opacity-60
        blur-[25px]
      "
    />

    {/* Description Content */}

    <div
      className="
        absolute
        inset-x-0
        bottom-0
        flex
        flex-col
        items-center
        justify-center
        px-5
        py-4
        text-center
        sm:px-6
        sm:py-4
      "
    >

      {/* Title */}

      <h4
        className="
          mb-1.5
          text-center
          text-lg
          font-bold
          leading-6
          text-white
          transition-all
          duration-500
          group-hover:text-[#29B6F0]
          sm:text-xl
        "
      >
        {service.title}
      </h4>

      {/* Description */}

      <p
        className="
          line-clamp-3
          max-w-[95%]
          text-center
          px-1
          text-[12px]
          font-medium
          leading-5
          text-[#D4D4D8]
          sm:text-[14px]
          sm:leading-5
        "
      >
        {service.description}
      </p>

    </div>
  </div>
</div>



                    {/* =================================================
                        BOTTOM GRADIENT
                    ================================================== */}

                    <div
                      className="absolute bottom-0 left-0 z-40 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                      style={{
                        background: beaverTekGradient,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsLookLike;

