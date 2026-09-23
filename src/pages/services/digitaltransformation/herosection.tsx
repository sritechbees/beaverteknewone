"use client";

import App_layout from "@/component/layout/app_layout";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Overviewsection from "./overviewsection";
import Beavertekdeliver from "./beavertekdeliver";

function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <App_layout>
        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section
          className="
            relative
            h-[380px]
            min-h-[380px]
            overflow-hidden
            bg-[#02030D]

            sm:h-[395px]
            sm:min-h-[395px]

            md:h-[410px]
            md:min-h-[410px]

            lg:h-[440px]
            lg:min-h-[440px]

            xl:h-[455px]
            xl:min-h-[455px]
          "
        >
          {/* =======================================================
              RIGHT SIDE IMAGE
          ======================================================= */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-full

              md:w-[58%]

              lg:w-[56%]

              xl:w-[55%]
            "
          >
            <img
              src="/services/End-to-end-digital-transformation.jpg"
              alt="Digital Transformation"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-right
              "
            />

            {/* Soft edge transition only */}
            <div
              className="
                absolute
                inset-y-0
                left-0
                w-[35%]
                bg-gradient-to-r
                from-[#02030D]
                to-transparent
              "
            />
          </div>

          {/* =======================================================
              LEFT SIDE DARK BACKGROUND
          ======================================================= */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              z-[1]
              w-full

              md:w-[62%]

              lg:w-[60%]

              xl:w-[58%]

              bg-gradient-to-r
              from-[#02030D]
              via-[#02030D]
              to-transparent
            "
          />

          {/* =======================================================
              CONTENT
          ======================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-full
              max-w-7xl
              items-center
              px-5

              sm:px-6

              md:px-8

              lg:px-10

              xl:px-12
            "
          >
            <div
              className="
                w-full
                max-w-2xl

                md:max-w-[600px]

                lg:max-w-[640px]
              "
            >
              {/* ===================================================
                  BREADCRUMB
              =================================================== */}

              <span
                data-aos="fade-down"
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-white/[0.06]
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  text-cyan-300
                  backdrop-blur-md

                  sm:px-3.5
                  sm:text-[11px]

                  md:px-4
                  md:py-1.5
                  md:text-xs
                "
              >
                Services / Digital Transformation
              </span>

              {/* ===================================================
                  HEADING
              =================================================== */}

              <h1
                data-aos="fade-up"
                data-aos-delay="150"
                className="
                  mt-4
                  max-w-[620px]
                  text-[31px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-white

                  sm:mt-4
                  sm:text-[36px]

                  md:mt-5
                  md:text-[44px]

                  lg:mt-5
                  lg:text-[50px]

                  xl:text-[55px]
                "
              >
                End-to-End

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
                  Digital Transformation
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* =========================================================
            OVERVIEW
        ========================================================= */}

        <Overviewsection />

        {/* =========================================================
            BEAVERTEK DELIVER
        ========================================================= */}

        <Beavertekdeliver />
      </App_layout>
    </div>
  );
}

export default Herosection;