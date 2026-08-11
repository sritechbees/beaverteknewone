"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DevOpsSections() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      number: "01",
      title: "DevOps",
      description:
        "Accelerate innovation. Automate delivery. Scale with confidence. We streamline your software lifecycle with automated build, test, and deployment pipelines—enabling faster releases and stronger collaboration across teams.",
      image: "/services/DevOps & DevSecOps.png",
      gradient: "from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]",
      glow: "bg-[#29B6F0]/20",
    },
    {
      number: "02",
      title: "DevSecOps",
      description:
        "Secure every line of code. Deliver with confidence. Security is built into every stage of development. We integrate automated security checks, compliance controls, and vulnerability remediation to ensure rapid, safe, and reliable releases.",
      image: "/services/DevOps & DevSecOps.png",
      gradient: "from-[#7A4FD1] via-[#B93FC9] to-[#29B6F0]",
      glow: "bg-[#B93FC9]/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

      <div className="absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-[#B93FC9]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

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
          className="mb-16 max-w-3xl sm:mb-20 lg:mb-24"
          data-aos="fade-up"
        >

          <div className="mb-6 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-5 py-2 backdrop-blur-xl">

            <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.8)]" />

            <span className="ml-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D4D4D8] sm:text-sm">
              DevOps & DevSecOps
            </span>

          </div>

        </div>

        {/* =================================================
            SERVICE SECTIONS
        ================================================== */}

        <div className="space-y-24 sm:space-y-28 lg:space-y-36">

          {services.map((service, index) => {

            const reverse = index % 2 !== 0;

            return (
              <div
                key={service.number}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="relative"
                  data-aos={reverse ? "fade-left" : "fade-right"}
                  data-aos-duration="1100"
                >

                  {/* Glow */}

                  <div
                    className={`absolute -inset-5 rounded-[40px] ${service.glow} blur-3xl`}
                  />

                  {/* Image Container */}

                  <div className="group relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212] p-2 shadow-[0_25px_60px_rgba(0,0,0,.45)] sm:rounded-[40px]">

                    <div className="relative overflow-hidden rounded-[26px] sm:rounded-[34px]">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[340px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[440px] lg:h-[540px]"
                      />

                      {/* Image Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Gradient Shine */}

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 transition duration-500 group-hover:opacity-20`}
                      />

                    </div>

                    {/* Number */}

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/50 backdrop-blur-xl sm:left-8 sm:top-8">

                      <span
                        className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-xl font-bold text-transparent`}
                      >
                        {service.number}
                      </span>

                    </div>

                    {/* Bottom Gradient Line */}

                    <div
                      className={`absolute bottom-6 left-8 right-8 h-[2px] bg-gradient-to-r ${service.gradient} opacity-70 sm:bottom-8 sm:left-10 sm:right-10`}
                    />

                  </div>

                </div>

                {/* =================================================
                    TEXT
                ================================================== */}

                <div
                  data-aos={reverse ? "fade-right" : "fade-left"}
                  data-aos-delay="180"
                  data-aos-duration="1100"
                >

                  {/* Number */}

                  <div className="flex items-center gap-4">

                    <span
                      className={`text-sm font-semibold tracking-[0.25em] bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.number}
                    </span>

                    <div className="h-px w-12 bg-[#2A2A30]" />

                  </div>

                  {/* Title */}

                  <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">

                    {service.title}

                  </h2>

                  {/* Gradient Underline */}

                  <div
                    className={`mt-6 h-[3px] w-16 bg-gradient-to-r ${service.gradient} transition-all duration-500 hover:w-28`}
                  />

                  {/* Description */}

                  <p className="mt-8 text-base leading-8 text-[#A0A0A8] sm:text-lg sm:leading-9">

                    {service.description}

                  </p>

                  {/* Decorative Element */}

                  <div className="mt-10 flex items-center gap-3">

                    <div
                      className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient} shadow-[0_0_15px_rgba(41,182,240,.5)]`}
                    />

                    <div className="h-px w-16 bg-[#2A2A30]" />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default DevOpsSections;