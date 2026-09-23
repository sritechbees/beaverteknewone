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
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* ================= HERO SECTION ================= */}
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
            lg:py-8

            xl:px-10
          "
        >
          <div
            className="
              grid
              min-h-[430px]
              grid-cols-1
              items-center
              gap-8

              sm:min-h-[460px]
              sm:gap-9

              md:min-h-[480px]
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-10

              lg:min-h-[500px]
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12

              xl:min-h-[520px]
              xl:grid-cols-[0.9fr_1.1fr]
              xl:gap-14
            "
          >
            {/* ================= LEFT CONTENT ================= */}
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
              {/* Small Label */}
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3

                  sm:mb-6
                  sm:gap-3.5
                "
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <span
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="
                    h-[3px]
                    w-10
                    rounded-full
                    bg-gradient-to-r
                    from-[#29B6F0]
                    to-[#7A4FD1]

                    sm:w-14
                    md:w-16
                  "
                />

                <span
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#29B6F0]

                    sm:text-xs
                    sm:tracking-[0.3em]

                    md:text-sm
                  "
                >
                  Data Analytics
                </span>
              </div>

              {/* Main Title */}
              <h1
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="1000"
                className="
                  max-w-[680px]
                  text-[32px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-white

                  sm:text-[38px]

                  md:text-[46px]

                  lg:text-[54px]

                  xl:text-[60px]
                "
              >
                <span className="text-white">
                  Data Analytics{" "}
                </span>

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

              {/* Bottom Accent */}
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="800"
                className="
                  mt-6
                  h-[3px]
                  w-20
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#7A4FD1]

                  sm:mt-7
                  sm:w-28

                  md:mt-8
                  md:w-32
                "
              />
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center
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
                  rounded-2xl

                  sm:rounded-3xl
                "
              >
                <img
                  src="/services/Data Analytics2.jpg"
                  alt="Data Analytics and Reporting"
                  className="
                    h-[250px]
                    w-full
                    object-cover
                    object-center

                    sm:h-[290px]

                    md:h-[330px]

                    lg:h-[370px]

                    xl:h-[400px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Overviewdataanalytics />
      <Servicesdataanalytics />
    </App_layout>
  );
}

export default Herosection;