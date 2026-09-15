"use client";

import React, { useState } from "react";
import {
  Database,
  BarChart3,
  LineChart,
  ArrowRight,
  Activity,
} from "lucide-react";

/* ========================= */
/* Features */
/* ========================= */

const features = [
  {
    icon: BarChart3,
    title: "Executive dashboards",
    description:
      "Show the numbers that actually matter to your business with clear, interactive dashboards.",
  },
  {
    icon: Database,
    title: "Operational reports",
    description:
      "Reliable reports your team can trust instead of rebuilding spreadsheets every Monday.",
  },
  {
    icon: LineChart,
    title: "Custom analytics",
    description:
      "Analytics designed around your unique business questions, goals, and KPIs.",
  },
  {
    icon: Activity,
    title: "Real-time visibility",
    description:
      "Track sales, operations, customer behavior, and other critical metrics in real time.",
  },
];

/* ========================= */
/* What This Looks Like */
/* ========================= */

function Whatislooklike() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div>
      <div className="relative overflow-hidden py-16 bg-[#000000]">
        {/* ========================= */}
        {/* Background */}
        {/* ========================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#29B6F0]/[0.035] blur-[110px]" />

          <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[#B93FC9]/[0.035] blur-[110px]" />

          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:55px_55px]" />
        </div>

        {/* ========================= */}
        {/* Main Container */}
        {/* ========================= */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8">
          {/* ========================= */}
          {/* Heading */}
          {/* ========================= */}

          <div
            className="mb-9 text-center sm:mb-10 lg:mb-11"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="50"
          >
            {/* Badge */}

            <div
              data-aos="fade-down"
              data-aos-delay="80"
              data-aos-duration="750"
              data-aos-offset="40"
            >
              <span className="inline-flex rounded-full border border-[#3E7BD6]/30 bg-white/5 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-white/10 sm:px-5 sm:py-2 sm:text-[10px] md:text-xs">
                IN PRACTICE
              </span>
            </div>

            {/* Heading */}

            <h3
              className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em] sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.7rem]"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="850"
              data-aos-offset="40"
            >
              <span className="text-white">What This </span>

              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                Looks Like
              </span>
            </h3>

            {/* Description */}

            <p
              className="mx-auto mt-3 max-w-3xl text-xs leading-6 text-[#96969e] sm:mt-4 sm:text-sm sm:leading-7"
              data-aos="fade-up"
              data-aos-delay="220"
              data-aos-duration="800"
              data-aos-offset="40"
            >
              Everything is designed around helping you understand your business
              — not creating more reports.
            </p>

            {/* Gradient Line */}

            <div
              className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-5 sm:w-16"
              data-aos="zoom-in"
              data-aos-delay="280"
              data-aos-duration="650"
              data-aos-offset="30"
            />
          </div>

          {/* ========================= */}
          {/* Main Content */}
          {/* ========================= */}

          <div className="grid gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8 xl:gap-9">
            {/* ========================= */}
            {/* LEFT IMAGE */}
            {/* ========================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-offset="60"
              className="relative h-[280px] overflow-hidden rounded-[24px] border border-[#2A2A30] sm:h-[340px] sm:rounded-[28px] md:h-[390px] lg:h-[440px] lg:rounded-[30px] xl:h-[470px]"
            >
              <img
                src="/services/Data Analytics1.jpg"
                alt="Business Analytics"
                className="h-full w-full object-fill transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Gradient Accent */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(41,182,240,.08),transparent_45%,rgba(185,63,201,.10))]" />

              {/* Image Content */}

              <div
                className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="800"
              >
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px]">
                  LIVE INSIGHTS
                </span>

                <h4 className="mt-3 text-xl font-bold leading-tight text-white sm:mt-4 sm:text-2xl lg:text-3xl">
                  Connected Business Intelligence
                </h4>
              </div>
            </div>

            {/* ========================= */}
            {/* RIGHT ACCORDION */}
            {/* ========================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-offset="60"
              className="space-y-3 sm:space-y-4"
            >
              {" "}
              {features.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeCard === index;
                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActiveCard(index)}
                    onFocus={() => setActiveCard(index)}
                    className={` group relative overflow-hidden rounded-2xl border p-4 sm:p-5 cursor-pointer transition-all duration-300 ease-out ${isActive ? "border-[#3E7BD6] bg-[#0A0A0A] shadow-[0_0_30px_rgba(62,123,214,0.15)]" : "border-[#2A2A30] bg-[#0A0A0A] hover:border-[#3E7BD6]/70"} `}
                  >
                    {" "}
                    <div className="flex items-start gap-3 sm:gap-4">
                      {" "}
                      {/* Icon */}{" "}
                      <div
                        className={` relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isActive ? "border-[#3E7BD6] bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-white shadow-[0_0_20px_rgba(41,182,240,0.25)]" : "border-[#2A2A30] bg-[#121212] text-[#29B6F0] group-hover:border-[#3E7BD6]"} `}
                      >
                        {" "}
                        <Icon
                          size={20}
                          strokeWidth={2}
                          className="relative z-10"
                        />{" "}
                      </div>{" "}
                      {/* Text */}{" "}
                      <div className="min-w-0 flex-1 pt-0.5">
                        {" "}
                        <h4
                          className={` text-base sm:text-lg font-bold leading-tight transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent" : "text-white group-hover:text-[#29B6F0]"} `}
                        >
                          {" "}
                          {item.title}{" "}
                        </h4>{" "}
                        {/* Description */}{" "}
                        <div
                          className={` overflow-hidden transition-all duration-300 ease-out ${isActive ? "mt-2 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0"} `}
                        >
                          {" "}
                          <p className="max-w-xl text-sm leading-6 text-[#A0A0A8]">
                            {" "}
                            {item.description}{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* Arrow */}{" "}
                      <div
                        className={` mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive ? "rotate-90 border-[#3E7BD6] bg-[#3E7BD6] text-white" : "border-[#2A2A30] text-[#7A7A7A] group-hover:border-[#29B6F0] group-hover:text-[#29B6F0]"} `}
                      >
                        {" "}
                        <ArrowRight size={14} strokeWidth={2} />{" "}
                      </div>{" "}
                    </div>{" "}
                    {/* BeaverTek Gradient Active Line */}{" "}
                    <div
                      className={` absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"} `}
                      style={{
                        background:
                          "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                      }}
                    />{" "}
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatislooklike;
