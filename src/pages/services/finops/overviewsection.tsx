
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

function Overviewsection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#000000]
        py-10
        sm:py-12
        md:py-14
        lg:py-16
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-72 sm:w-72" />

      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#B93FC9]/10 blur-[120px] sm:h-72 sm:w-72" />

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="absolute inset-0 opacity-[0.035]"
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

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-5
          md:px-6
          lg:px-7
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            sm:gap-9
            md:gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.10]
              bg-white/[0.035]
              p-5
              shadow-[0_20px_60px_rgba(0,0,0,.28)]
              backdrop-blur-xl
              sm:rounded-[28px]
              sm:p-6
              md:p-7
              lg:p-8
            "
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Light Glass Shine */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-[#29B6F0]/10
                blur-[80px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-48
                w-48
                rounded-full
                bg-[#B93FC9]/10
                blur-[80px]
              "
            />

            {/* Inner Glass Border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[23px]
                border
                border-white/[0.035]
                sm:rounded-[27px]
              "
            />

            <div className="relative z-10">
              {/* Section Label */}

              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.045]
                  px-3
                  py-1.5
                  shadow-[inset_0_1px_0_rgba(255,255,255,.06)]
                  backdrop-blur-xl
                  sm:mb-5
                  sm:px-3.5
                  sm:py-2
                "
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#29B6F0]
                    shadow-[0_0_12px_rgba(41,182,240,.8)]
                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    ml-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#D4D4D8]
                    sm:ml-3
                    sm:text-xs
                  "
                >
                  Overview
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  text-[26px]
                  font-extrabold
                  leading-[1.1]
                  tracking-tight
                  text-white
                  sm:text-[30px]
                  md:text-[34px]
                  lg:text-[38px]
                  xl:text-[42px]
                "
                data-aos="fade-up"
                data-aos-delay="180"
              >
                Cloud Cost

                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#B93FC9]
                    bg-clip-text
                    text-transparent
                    sm:mt-1.5
                  "
                >
                  Optimization (FinOps)
                </span>
              </h2>

              {/* Gradient Line */}

              <div
                className="
                  mt-4
                  h-[2px]
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  shadow-[0_0_12px_rgba(41,182,240,.25)]
                  sm:mt-5
                  sm:w-16
                "
                data-aos="fade-right"
                data-aos-delay="300"
              />

              {/* Paragraph 1 */}

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[14px]
                  leading-6
                  text-[#D4D4D8]
                  sm:mt-5
                  sm:text-[15px]
                  sm:leading-6.5
                  lg:text-base
                  lg:leading-7
                "
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Take control of your cloud spending without sacrificing
                performance. Our FinOps-driven cloud cost optimization
                services help businesses eliminate waste, rightsize
                resources, and ensure every dollar spent delivers measurable
                value.
              </p>

              {/* Paragraph 2 */}

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-[14px]
                  leading-6
                  text-[#A0A0A8]
                  sm:mt-4
                  sm:text-[15px]
                  sm:leading-6.5
                  lg:text-base
                  lg:leading-7
                "
                data-aos="fade-up"
                data-aos-delay="450"
              >
                Many organizations unknowingly overspend on cloud
                infrastructure. We analyze your environment, align resources
                to actual business needs, and implement continuous cost-control
                strategies. The result: significant savings with consistent,
                reliable performance.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            {/* Image Glow */}

            <div
              className="
                absolute
                -inset-3
                rounded-[30px]
                bg-gradient-to-r
                from-[#29B6F0]/15
                via-[#3E7BD6]/15
                to-[#B93FC9]/15
                blur-2xl
                sm:-inset-4
                sm:rounded-[35px]
              "
            />

            {/* Image Glass Frame */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.10]
                bg-white/[0.035]
                p-1.5
                shadow-[0_20px_50px_rgba(0,0,0,.45)]
                backdrop-blur-xl
                sm:rounded-[28px]
                sm:p-2
              "
            >
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[17px]
                  sm:rounded-[22px]
                "
              >
                {/* Image */}

                <img
                  src="/services/Cloud Cost Optimization.jpg"
                  alt="Cloud Cost Optimization"
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                    sm:h-[280px]
                    md:h-[320px]
                    lg:h-[390px]
                    xl:h-[430px]
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-black/10
                    to-transparent
                  "
                />

                {/* BeaverTek Soft Color Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#29B6F0]/10
                    via-transparent
                    to-[#B93FC9]/10
                    opacity-70
                  "
                />

                {/* =================================================
                    HIGHLIGHTED ARROW
                ================================================== */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    sm:right-5
                    sm:top-5
                  "
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div
                    className="
                      absolute
                      -inset-2
                      rounded-full
                      bg-gradient-to-r
                      from-[#29B6F0]
                      via-[#3E7BD6]
                      to-[#B93FC9]
                      opacity-40
                      blur-md
                      transition-all
                      duration-500
                      group-hover:opacity-80
                      group-hover:blur-lg
                    "
                  />

                  <button
                    type="button"
                    aria-label="Cloud Cost Optimization"
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/45
                      shadow-[0_0_25px_rgba(41,182,240,.25)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:scale-110
                      hover:border-[#29B6F0]
                      hover:bg-black/65
                      hover:shadow-[0_0_30px_rgba(41,182,240,.5)]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        bg-gradient-to-r
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        to-[#B93FC9]
                        bg-clip-text
                        text-[#29B6F0]
                        transition-transform
                        duration-500
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                      strokeWidth={2.2}
                    />
                  </button>
                </div>

                {/* Bottom Glass Highlight */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-white/[0.045]
                    px-4
                    py-3
                    opacity-0
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    sm:bottom-5
                    sm:left-5
                    sm:right-5
                  "
                >
                  <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overviewsection;
