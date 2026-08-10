"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Overviewsection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

      <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#B93FC9]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            data-aos="fade-right"
            data-aos-duration="1100"
          >

            {/* Section Label */}

            <div
              className="mb-6 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-4 py-2 backdrop-blur-xl sm:mb-8 sm:px-5"
              data-aos="fade-down"
              data-aos-delay="150"
            >

              <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.8)]" />

              <span className="ml-3 text-xs font-medium uppercase tracking-[0.18em] text-[#D4D4D8] sm:text-sm">
                Overview
              </span>

            </div>

            {/* Heading */}

            <h2
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="250"
            >

              Cloud Cost

              <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Optimization (FinOps)
              </span>

            </h2>

            {/* Gradient Line */}

            <div
              className="mt-7 h-[2px] w-20 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-8 sm:w-24"
              data-aos="fade-right"
              data-aos-delay="400"
            />

            {/* Paragraph 1 */}

            <p
              className="mt-7 text-base leading-8 text-[#D4D4D8] sm:mt-8 sm:text-lg sm:leading-9"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Take control of your cloud spending without sacrificing
              performance. Our FinOps-driven cloud cost optimization services
              help businesses eliminate waste, rightsize resources, and ensure
              every dollar spent delivers measurable value.
            </p>

            {/* Paragraph 2 */}

            <p
              className="mt-5 text-base leading-8 text-[#A0A0A8] sm:text-lg sm:leading-9"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              Many organizations unknowingly overspend on cloud infrastructure.
              We analyze your environment, align resources to actual business
              needs, and implement continuous cost-control strategies. The
              result: significant savings with consistent, reliable
              performance.
            </p>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >

            {/* Image Glow */}

            <div className="absolute -inset-5 rounded-[45px] bg-gradient-to-r from-[#29B6F0]/20 via-[#3E7BD6]/20 to-[#B93FC9]/20 blur-3xl" />

            {/* Image Frame */}

            <div className="relative overflow-hidden rounded-[30px] border border-[#2A2A30] bg-[#121212] p-2 shadow-[0_25px_60px_rgba(0,0,0,.45)] sm:rounded-[40px]">

              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px]">

                <img
                  src="/services/Cloud Cost Optimization.jpg"
                  alt="Cloud Cost Optimization"
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[560px]"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              </div>

            </div>

            {/* Floating Gradient Element */}

            <div
              className="absolute -bottom-5 -left-3 hidden h-20 w-20 rounded-2xl border border-[#2A2A30] bg-[#121212]/90 p-3 shadow-[0_0_40px_rgba(62,123,214,.35)] backdrop-blur-xl sm:-left-5 sm:block"
              data-aos="zoom-in"
              data-aos-delay="700"
            >

              <div className="h-full w-full rounded-xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

            </div>

            {/* Top Right Accent */}

            <div
              className="absolute -right-2 -top-4 hidden h-16 w-16 rounded-full border border-[#2A2A30] bg-[#121212]/80 backdrop-blur-xl sm:block"
              data-aos="zoom-in"
              data-aos-delay="850"
            >

              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#29B6F0] to-[#B93FC9] opacity-80" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Overviewsection;