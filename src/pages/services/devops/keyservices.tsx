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
    });
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
    <section className="relative overflow-hidden bg-[#000000] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

      <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#B93FC9]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* =================================================
              LEFT HEADING
          ================================================== */}

          <div
            className="lg:sticky lg:top-32"
            data-aos="fade-right"
          >

            {/* Label */}

            <div className="mb-6 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-5 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.8)]" />

              <span className="ml-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D4D4D8] sm:text-sm">
                Key Services
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">

              Key{" "}

              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                Services
              </span>

            </h2>

            {/* Gradient Line */}

            <div className="mt-7 h-[3px] w-16 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:w-24" />

          </div>

          {/* =================================================
              SERVICE LIST
          ================================================== */}

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute bottom-5 left-[25px] top-5 hidden w-px bg-gradient-to-b from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] opacity-40 sm:block" />

            <div className="space-y-4 sm:space-y-5">

              {services.map((service, index) => (

                <div
                  key={service}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  <div className="relative flex items-center gap-5 overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#121212] px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6] hover:bg-[#1A1A1E] hover:shadow-[0_12px_30px_rgba(0,0,0,.35)] sm:gap-7 sm:px-7 sm:py-7">

                    {/* Number */}

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2A30] bg-[#0A0A0A] transition-all duration-500 group-hover:border-[#3E7BD6] group-hover:shadow-[0_0_30px_rgba(62,123,214,.25)] sm:h-14 sm:w-14">

                      <span className="bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-sm font-bold text-transparent sm:text-base">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    {/* Service Text */}

                    <h3 className="relative z-10 text-base font-medium leading-7 text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-lg lg:text-xl">

                      {service}

                    </h3>

                    {/* Hover Gradient */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#29B6F0]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    {/* Arrow */}

                    <div className="ml-auto hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2A2A30] transition-all duration-500 group-hover:border-[#7A4FD1] group-hover:bg-[#7A4FD1]/10 sm:flex">

                      <svg
                        className="h-4 w-4 text-[#A0A0A8] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#29B6F0]"
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