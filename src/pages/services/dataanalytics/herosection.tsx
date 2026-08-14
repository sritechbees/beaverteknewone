"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Overviewdataanalytics from "./overviewdataanalytics";
import Servicesdataanalytics from "./servicesdataanalytics";

function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <App_layout>
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-black sm:min-h-[580px] md:min-h-[650px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/services/Data Analytics2.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      {/* Cyan Glow */}
      <div className="absolute -left-32 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#29B6F0]/15 blur-[130px]" />

      {/* Violet Glow */}
      <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#7A4FD1]/15 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <div
          data-aos="fade-up"
          className="max-w-4xl"
        >

          {/* Small Gradient Line */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-16" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0] sm:text-sm">
              Data Analytics
            </span>
          </div>

          {/* Main Title */}
          <h1
            data-aos="fade-up"
            data-aos-delay="250"
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[80px]
            "
          >
            Data Analytics{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              and Reporting
            </span>
          </h1>

          {/* Bottom Gradient Line */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:w-32"
          />

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#29B6F0]/50 to-transparent" />
    </section>
    <Overviewdataanalytics/>
    <Servicesdataanalytics/>
    </App_layout>
  );
}

export default Herosection;