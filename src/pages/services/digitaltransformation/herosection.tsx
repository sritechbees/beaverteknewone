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
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
      <App_layout>
        {/* =========================================================
            HERO SECTION
        ========================================================= */}

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
              lg:py-10

              xl:px-10
              xl:py-12
            "
          >
            <div
              className="
                grid
                min-h-[360px]
                grid-cols-1
                items-center
                gap-8

                sm:min-h-[400px]
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
                data-aos-delay="100"
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
                    backdrop-blur-md

                    sm:mb-5
                    sm:px-3.5
                    sm:py-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="150"
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
                    Digital Transformation
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
                  data-aos-delay="250"
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
                      tracking-[0.16em]
                      text-[#A0A0A8]

                      sm:text-[11px]
                      sm:tracking-[0.2em]

                      md:text-xs
                    "
                  >
                    Digital Strategy & Innovation
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
                    text-white

                    sm:text-[36px]

                    md:text-[42px]

                    lg:text-[48px]

                    xl:text-[52px]
                  "
                  data-aos="fade-up"
                  data-aos-delay="350"
                  data-aos-duration="1000"
                  data-aos-offset="40"
                >
                  End-to-End{" "}
                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-[#29B6F0]
                      via-[#3E7BD6]
                      via-[#7A4FD1]
                      to-[#B93FC9]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Digital Transformation
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
                  data-aos-delay="500"
                  data-aos-duration="800"
                  data-aos-offset="40"
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

                  md:h-full
                "
                data-aos="fade-left"
                data-aos-delay="250"
                data-aos-duration="900"
                data-aos-offset="40"
              >
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl

                    sm:rounded-3xl
                  "
                >
                  <img
                    src="/services/End-to-end-digital-transformation.jpg"
                    alt="End-to-End Digital Transformation"
                    className="
                      h-[230px]
                      w-full
                      object-cover
                      object-center

                      sm:h-[280px]

                      md:h-[330px]

                      lg:h-[360px]

                      xl:h-[390px]
                    "
                  />

                  {/* Soft image overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#000000]/20
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>
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