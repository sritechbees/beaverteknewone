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
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* ================= HERO SECTION ================= */}
      <section className=" relative
          h-[56vh]
          min-h-[480px]
          overflow-hidden
          bg-[#000000]
          sm:h-[58vh]
          sm:min-h-[500px]
          md:h-[60vh]
          md:min-h-[520px]
          lg:h-[62vh]
          lg:min-h-[540px]">
         
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/services/Data Analytics2.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/20" />

        {/* Center Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Cyan Glow */}
        <div
          data-aos="fade-in"
          data-aos-duration="1600"
          className="absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#29B6F0]/15 blur-[120px] sm:h-[380px] sm:w-[380px]"
        />

        {/* Violet Glow */}
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1600"
          className="absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#7A4FD1]/15 blur-[130px] sm:h-[380px] sm:w-[380px]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10">

          <div className="w-full max-w-5xl">

            {/* Small Gradient Line + Label */}
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="900"
              className="mb-5 flex items-center justify-center gap-3 sm:mb-6"
            >
              <span
                data-aos="fade-right"
                data-aos-delay="250"
                className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-14 md:w-16"
              />

              <span
                data-aos="zoom-in"
                data-aos-delay="200"
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs sm:tracking-[0.3em] md:text-sm"
              >
                Data Analytics
              </span>

              <span
                data-aos="fade-left"
                data-aos-delay="250"
                className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-14 md:w-16"
              />
            </div>

            {/* Main Title */}
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
              className="
                mx-auto
                max-w-5xl
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-[72px]
              "
            >
              <span className="text-white">Data Analytics </span>

              <span
                data-aos="fade-up"
                data-aos-delay="450"
                className="
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  bg-clip-text
                  text-transparent
                "
              >
                and Reporting
              </span>
            </h1>

            {/* Bottom Gradient Line */}
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="800"
              className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:mt-7 sm:w-28 md:mt-8 md:w-32"
            />

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/50 to-transparent sm:h-32" />

        </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Overviewdataanalytics />
      <Servicesdataanalytics />
    </App_layout>
  );
}

export default Herosection;