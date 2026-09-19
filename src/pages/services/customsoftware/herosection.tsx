
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
      <section
        className="
          relative
          h-[56vh]
          min-h-[480px]
          overflow-hidden
          bg-[#000000]
          sm:h-[58vh]
          sm:min-h-[500px]
          md:h-[60vh]
          md:min-h-[520px]
          lg:h-[62vh]
          lg:min-h-[540px]
        "
      >
        {/* =====================================================
            FULL BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">
          <img
            src="/services/Custom Software Development and Maintance.jpg"
            alt="Cloud Cost Optimization"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/40" />

          {/* Center Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent sm:h-40" />
        </div>

        {/* =====================================================
            GRADIENT GLOW
        ====================================================== */}

        <div
          className="
            absolute
            -left-32
            top-0
            h-64
            w-64
            rounded-full
            bg-[#29B6F0]/10
            blur-[120px]
            sm:h-72
            sm:w-72
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-72
            w-72
            rounded-full
            bg-[#B93FC9]/10
            blur-[130px]
            sm:h-80
            sm:w-80
          "
        />

        {/* Center Ambient Light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#3E7BD6]/5
            blur-[140px]
            sm:h-80
            sm:w-80
          "
        />

        {/* =====================================================
            GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.15) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.15) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            justify-center
            px-4
            py-10
            text-center
            sm:px-5
            sm:py-12
            md:px-6
            md:py-14
            lg:px-7
            lg:py-16
          "
        >
          <div
            className="
              flex
              w-full
              max-w-4xl
              flex-col
              items-center
              text-center
            "
          >
            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className="
                mb-4
                inline-flex
                items-center
                rounded-full
                border
                border-white/15
                bg-white/10
                px-3.5
                py-1.5
                backdrop-blur-xl
                sm:mb-5
                sm:px-4
                sm:py-2
              "
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <span className="text-[11px] font-medium text-[#D4D4D8] sm:text-xs">
                Services
              </span>

              <span className="mx-2 text-[#7A7A7A]">/</span>

              <span className="text-[11px] font-medium text-[#29B6F0] sm:text-xs">
                Cloud Cost Optimization
              </span>
            </div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                mx-auto
                w-full
                max-w-3xl
                text-center
                text-[28px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.02em]

                sm:text-[35px]
                sm:leading-[1.1]

                md:text-[43px]

                lg:text-[52px]

                xl:text-[58px]
              "
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
              <span className="mt-1 block text-white sm:mt-1.5">
                Maintenance
              </span>
            </h1>

            {/* =================================================
                ACCENT LINE
            ================================================== */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2.5
                sm:mt-5
                sm:gap-3
              "
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div
                className="
                  h-[2px]
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  to-[#7A4FD1]
                  sm:w-16
                "
              />

              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#29B6F0]
                  shadow-[0_0_15px_rgba(41,182,240,0.8)]
                "
              />

              <div
                className="
                  h-[2px]
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  from-[#7A4FD1]
                  to-[#B93FC9]
                  sm:w-16
                "
              />
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

