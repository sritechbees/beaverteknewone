
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Keyservices() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    AOS.refresh();
  }, []);

  const services = [
    "Secure CI/CD pipeline setup",
    "Automated deployments",
    "Release management automation",
    "Infrastructure as Code (IaC)",
    "Vulnerability assessment & remediation",
    "Compliance automation (HIPAA)",
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] py-8 sm:py-10 lg:py-12">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-0 h-[220px] w-[220px] rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-[280px] sm:w-[280px]" />

      <div className="absolute -right-40 bottom-0 h-[220px] w-[220px] rounded-full bg-[#B93FC9]/10 blur-[110px] sm:h-[280px] sm:w-[280px]" />

      {/* =====================================================
          BACKGROUND GRID
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
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
        <div className="grid items-start gap-6 md:gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* =================================================
              LEFT HEADING
          ================================================== */}

          <div
            className="lg:sticky lg:top-24"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Badge */}

            <div className="mb-3 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-3 py-1 backdrop-blur-xl sm:mb-4 sm:px-3.5 sm:py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_rgba(41,182,240,.8)]" />

              <span className="ml-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[#D4D4D8] sm:text-[10px]">
                Key Services
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-md text-3xl font-bold leading-[1.08] tracking-tight text-[#FFFFFF] sm:text-4xl md:text-5xl lg:text-6xl">
              Key{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            {/* Gradient Line */}

            <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:mt-5 sm:w-14" />
          </div>

          {/* =================================================
              RIGHT SERVICE LIST
          ================================================== */}

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  data-aos-duration="750"
                >
                  {/* =================================================
                      SERVICE ITEM
                  ================================================== */}

                  <div className="relative flex min-h-[54px] items-center gap-3 py-2.5 sm:min-h-[60px] sm:gap-4 sm:py-3">
                    {/* Hover Background */}

                    <div className="pointer-events-none absolute inset-y-1 left-0 right-0 -z-0 rounded-lg bg-white/[0.025] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                    {/* Hover Gradient Line Overlay */}

                    <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 ease-out group-hover:w-full" />

                    {/* Left Hover Accent */}

                    <div className="pointer-events-none absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#29B6F0] to-[#B93FC9] opacity-0 transition-all duration-300 group-hover:h-7 group-hover:opacity-100" />

                    {/* Service Text */}

                    <div className="relative z-10 flex min-w-0 flex-1 items-center pl-2 sm:pl-3">
                      <h3 className="text-sm font-medium leading-5 text-[#FFFFFF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#29B6F0] sm:text-base sm:leading-6 lg:text-lg">
                        {service}
                      </h3>
                    </div>

                    {/* Arrow */}

                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center opacity-35 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:h-7 sm:w-7">
                      <svg
                        className="h-3.5 w-3.5 text-[#A0A0A8] transition-colors duration-300 group-hover:text-[#29B6F0] sm:h-4 sm:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keyservices;

