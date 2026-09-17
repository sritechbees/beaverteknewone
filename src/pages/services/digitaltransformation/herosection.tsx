
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
        <section
          className="
            relative
            h-[56vh]
            min-h-[480px]
            overflow-hidden
            sm:h-[58vh]
            sm:min-h-[500px]
            md:h-[60vh]
            md:min-h-[520px]
            lg:h-[62vh]
            lg:min-h-[540px]
          "
        >
          {/* Background Image */}
          <img
            src="/services/End-to-end-digital-transformation.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Center Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Top Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-cyan-500/20
              blur-[120px]
              sm:h-72
              sm:w-72
              sm:blur-[130px]
            "
          />

          {/* Content */}
          <div
            className="
              relative
              mx-auto
              flex
              h-full
              max-w-7xl
              items-center
              justify-center
              px-4
              sm:px-5
              md:px-6
              lg:px-8
            "
          >
            <div
              className="
                flex
                max-w-4xl
                flex-col
                items-center
                text-center
              "
            >
              {/* Breadcrumb */}
              <span
                data-aos="fade-down"
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-white/10
                  px-3.5
                  py-1.5
                  text-[11px]
                  text-cyan-300
                  backdrop-blur-xl
                  sm:px-4
                  sm:text-xs
                  md:px-5
                  md:py-2
                  md:text-sm
                "
              >
                Services / Digital Transformation
              </span>

              {/* Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="150"
                className="
                  mt-4
                  text-[28px]
                  font-extrabold
                  leading-[1.1]
                  text-white
                  sm:mt-5
                  sm:text-[36px]
                  md:text-5xl
                  lg:mt-6
                  lg:text-6xl
                  xl:text-[64px]
                "
              >
                End-to-End

                <span
                  className="
                    mt-1.5
                    block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    bg-clip-text
                    text-transparent
                    sm:mt-2
                  "
                >
                  Digital Transformation
                </span>
              </h1>
            </div>
          </div>
        </section>

        <Overviewsection />

        <Beavertekdeliver />
      </App_layout>
    </div>
  );
}

export default Herosection;

