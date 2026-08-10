"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Whatwedeliver() {
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      number: "01",
      title: "Cloud Cost Analysis",
      description:
        "Gain full visibility into your cloud usage and spending patterns. We identify inefficiencies, unused resources, and cost-heavy workloads to build a clear optimization roadmap.",
      gradient: "from-[#29B6F0] to-[#3E7BD6]",
      image: "/services/Cloud Cost Analysis.jpg",
    },
    {
      number: "02",
      title: "Resource Rightsizing",
      description:
        "Ensure your cloud resources match real-time demand. We adjust compute, storage, and network configurations to eliminate over-provisioning while maintaining peak performance.",
      gradient: "from-[#3E7BD6] to-[#7A4FD1]",
      image: "/services/Cloud Cost Optimization.jpg",
    },
    {
      number: "03",
      title: "Budget Monitoring",
      description:
        "Stay ahead of unexpected costs with proactive monitoring, alerts, and monthly spend governance. We help you track budgets, forecast usage, and prevent cost overruns.",
      gradient: "from-[#7A4FD1] to-[#B93FC9]",
      image: "/services/Cloud Cost Analysis.jpg",
    },
    {
      number: "04",
      title: "Instance Planning",
      description:
        "Optimize instance selection across compute families, storage tiers, and pricing models (on-demand, reserved, spot). We ensure you always run the most cost-efficient configuration for your workloads.",
      gradient: "from-[#B93FC9] to-[#29B6F0]",
      image: "/services/Cloud Cost Optimization.jpg",
    },
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
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

          <div className="mb-6 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-5 py-2 backdrop-blur-xl">

            <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.8)]" />

            <span className="ml-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D4D4D8] sm:text-sm">
              What We Deliver
            </span>

          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">

            What We{" "}

            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Deliver
            </span>

          </h2>

          <div className="mx-auto mt-7 h-[2px] w-20 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:w-24" />

        </div>

        {/* =================================================
            SERVICES
        ================================================== */}

        <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-2">

          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                {/* Gradient Border Glow */}

                <div
                  className={`absolute -inset-[1px] rounded-[28px] bg-gradient-to-br ${service.gradient} blur-sm transition duration-500 ${
                    isActive
                      ? "opacity-70"
                      : "opacity-0 group-hover:opacity-60"
                  }`}
                />

                {/* =================================================
                    MAIN BOX
                ================================================== */}

                <div
                  className={`relative min-h-[390px] overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#121212] p-7 transition-all duration-700 sm:min-h-[400px] sm:p-9 lg:p-10 ${
                    isActive
                      ? "border-transparent shadow-[0_25px_60px_rgba(0,0,0,.55)]"
                      : "group-hover:border-transparent"
                  }`}
                >

                  {/* =================================================
                      BACKGROUND IMAGE
                  ================================================== */}

                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-black/10" />

                    {/* Gradient Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-[#000000]/80" />

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative z-10">

                    {/* Number + Arrow */}

                    <div className="flex items-center justify-between">

                      <span
                        className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-4xl font-bold text-transparent`}
                      >
                        {service.number}
                      </span>

                      {/* CLICK ARROW */}

                      <button
                        type="button"
                        onClick={() =>
                          setActiveService(isActive ? null : index)
                        }
                        aria-label={
                          isActive
                            ? `Hide ${service.title} background`
                            : `Show ${service.title} background`
                        }
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? "border-[#29B6F0] bg-[#29B6F0]/15"
                            : "border-[#2A2A30] bg-[#0A0A0A] hover:border-[#3E7BD6] hover:bg-[#3E7BD6]/10"
                        }`}
                      >

                        <svg
                          className={`h-5 w-5 transition-all duration-500 ${
                            isActive
                              ? "rotate-180 text-[#29B6F0]"
                              : "text-[#A0A0A8] group-hover:translate-x-1 group-hover:text-[#29B6F0]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>

                      </button>

                    </div>

                    {/* Gradient Line */}

                    <div
                      className={`mt-8 h-[2px] w-14 bg-gradient-to-r ${service.gradient} transition-all duration-500 ${
                        isActive
                          ? "w-24"
                          : "group-hover:w-24"
                      }`}
                    />

                    {/* Title */}

                    <h3 className="mt-7 text-2xl font-semibold text-white sm:text-3xl">
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p
                      className={`mt-5 max-w-2xl text-base leading-8 transition-colors duration-500 sm:text-lg sm:leading-9 ${
                        isActive
                          ? "text-[#D4D4D8]"
                          : "text-[#A0A0A8]"
                      }`}
                    >
                      {service.description}
                    </p>

                  </div>

                  {/* =================================================
                      ACTIVE IMAGE GLOW
                  ================================================== */}

                  <div
                    className={`absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br ${service.gradient} blur-[90px] transition-opacity duration-700 ${
                      isActive
                        ? "opacity-30"
                        : "opacity-10"
                    }`}
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Whatwedeliver;