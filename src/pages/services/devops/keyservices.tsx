"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GitBranch,
  Rocket,
  RefreshCw,
  Boxes,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

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
    {
      title: "Secure CI/CD pipeline setup",
      icon: GitBranch,
    },
    {
      title: "Automated deployments",
      icon: Rocket,
    },
    {
      title: "Release management automation",
      icon: RefreshCw,
    },
    {
      title: "Infrastructure as Code (IaC)",
      icon: Boxes,
    },
    {
      title: "Vulnerability assessment & remediation",
      icon: ShieldCheck,
    },
    {
      title: "Compliance automation (HIPAA)",
      icon: ClipboardCheck,
    },
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
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
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
              RIGHT SERVICE CARDS
          ================================================== */}

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    data-aos-duration="750"
                  >
                    {/* =================================================
                        CARD
                    ================================================== */}

                    <div
                      className="
                        relative
                        min-h-[92px]
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#2A2A30]
                        bg-[#0A0A0A]
                        px-4
                        py-4
                        transition-all
                        duration-300
                        sm:min-h-[100px]
                        sm:px-5
                        sm:py-5
                        hover:-translate-y-1
                        hover:border-[#29B6F0]/35
                      "
                    >
                      {/* Subtle Hover Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-10
                          -top-10
                          h-24
                          w-24
                          rounded-full
                          bg-[#29B6F0]/10
                          blur-2xl
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* Bottom Gradient */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          w-0
                          bg-gradient-to-r
                          from-[#29B6F0]
                          via-[#7A4FD1]
                          to-[#B93FC9]
                          transition-all
                          duration-500
                          ease-out
                          group-hover:w-full
                        "
                      />

                      {/* =================================================
                          CARD CONTENT
                      ================================================== */}

                      <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                        {/* Service Icon */}

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-[#2A2A30]
                            bg-white/[0.03]
                            transition-all
                            duration-300
                            group-hover:border-[#29B6F0]/40
                            group-hover:bg-[#29B6F0]/10
                            sm:h-11
                            sm:w-11
                          "
                        >
                          <Icon
                            className="
                              h-[18px]
                              w-[18px]
                              text-[#29B6F0]
                              transition-all
                              duration-300
                              group-hover:scale-110
                              group-hover:text-[#7A4FD1]
                              sm:h-5
                              sm:w-5
                            "
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* Service Text */}

                        <div className="min-w-0 flex-1">
                          <h3
                            className="
                              text-[13px]
                              font-medium
                              leading-5
                              text-[#FFFFFF]
                              transition-all
                              duration-300
                              group-hover:text-[#29B6F0]
                              sm:text-[15px]
                              sm:leading-6
                              lg:text-base
                            "
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keyservices;