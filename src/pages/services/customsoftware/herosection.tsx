"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import Overviewsotware from "./overviewsotware";
import Services from "./services";

function Herosection() {
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
    <App_layout>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#000000]">
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-10

            sm:px-5
            sm:py-12

            md:px-6
            md:py-14

            lg:px-8
            lg:py-6

            xl:px-10
          "
        >
          <div
            className="
              grid
              min-h-[390px]
              grid-cols-1
              items-center
              gap-8

              sm:min-h-[420px]
              sm:gap-9

              md:min-h-[440px]
              md:grid-cols-[0.95fr_1.05fr]
              md:gap-10

              lg:min-h-[460px]
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12

              xl:min-h-[480px]
              xl:grid-cols-[0.92fr_1.08fr]
              xl:gap-14
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                justify-center
                text-left
              "
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-offset="40"
            >
              {/* ================= BREADCRUMB ================= */}

              <div
                className="
                  mb-4
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.06]
                  px-3
                  py-1.5

                  sm:mb-5
                  sm:px-3.5
                  sm:py-2
                "
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#29B6F0]

                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    ml-2
                    text-[10px]
                    font-medium
                    text-[#D4D4D8]

                    sm:ml-2.5
                    sm:text-xs
                  "
                >
                  Services
                </span>

                <span
                  className="
                    mx-1.5
                    text-[#7A7A7A]

                    sm:mx-2
                  "
                >
                  /
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-[#29B6F0]

                    sm:text-xs
                  "
                >
                  Custom Software Development
                </span>
              </div>

              {/* ================= SMALL LABEL ================= */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2

                  sm:mb-4
                  sm:gap-3
                "
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <span
                  className="
                    h-[2px]
                    w-7
                    bg-gradient-to-r
                    from-transparent
                    to-[#29B6F0]

                    sm:w-10
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A0A0A8]

                    sm:text-[11px]
                    sm:tracking-[0.22em]
                  "
                >
                  Software Solutions
                </span>

                <span
                  className="
                    h-[2px]
                    w-7
                    bg-gradient-to-r
                    from-[#7A4FD1]
                    to-transparent

                    sm:w-10
                  "
                />
              </div>

              {/* ================= MAIN TITLE ================= */}

              <h1
                className="
                  max-w-[560px]
                  text-[30px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.02em]

                  sm:text-[36px]

                  md:text-[42px]

                  lg:text-[48px]

                  xl:text-[52px]
                "
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                {/* WHITE */}
                <span className="block text-white">
                  Custom Software
                </span>

                {/* BEAVERTEK GRADIENT */}
                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    bg-clip-text
                    text-transparent

                    sm:mt-1.5
                  "
                >
                  Development &
                </span>

                {/* WHITE */}
                <span
                  className="
                    mt-1
                    block
                    text-white

                    sm:mt-1.5
                  "
                >
                  Maintenance
                </span>
              </h1>

              {/* ================= ACCENT ================= */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2

                  sm:mt-6
                  sm:gap-3
                "
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="800"
              >
                <div
                  className="
                    h-[2px]
                    w-9
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#7A4FD1]

                    sm:w-14
                  "
                />

                <div
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#29B6F0]

                    sm:h-2
                    sm:w-2
                  "
                />

                <div
                  className="
                    h-[2px]
                    w-9
                    bg-gradient-to-r
                    from-[#7A4FD1]
                    via-[#B93FC9]
                    to-transparent

                    sm:w-14
                  "
                />
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div
              className="
                relative
                flex
                w-full
                items-center
              "
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-duration="900"
              data-aos-offset="40"
            >
              <div
                className="
                  relative
                  w-full
                  overflow-hidden

                  sm:rounded-3xl
                "
              >
                <img
                  src="/services/Custom Software Development and Maintance.jpg"
                  alt="Custom Software Development and Maintenance"
                  className="
                    h-[240px]
                    w-full
                    object-cover
                    object-center

                    sm:h-[280px]

                    md:h-[330px]

                    lg:h-[360px]

                    xl:h-[390px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE SECTIONS
      ====================================================== */}

      <Overviewsotware />
      <Services />
    </App_layout>
  );
}

export default Herosection;