"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

function Buildtogether() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const gradient =
    "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]";

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-black px-4 py-10 sm:px-5 sm:py-12 lg:px-6 lg:py-14">
        {/* =========================================================
            BACKGROUND EFFECTS
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top Cyan Glow */}

          <div
            className="
              absolute
              left-1/2
              top-[-180px]
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-[#29B6F0]/[0.045]
              blur-[130px]
              sm:h-[430px]
              sm:w-[430px]
            "
          />

          {/* Bottom Violet Glow */}

          <div
            className="
              absolute
              bottom-[-220px]
              left-[12%]
              h-[380px]
              w-[380px]
              rounded-full
              bg-[#7A4FD1]/[0.04]
              blur-[140px]
            "
          />

          {/* Bottom Right Magenta Glow */}

          <div
            className="
              absolute
              bottom-[-180px]
              right-[8%]
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#B93FC9]/[0.035]
              blur-[130px]
            "
          />
        </div>

        {/* =========================================================
            SUBTLE GRID
        ========================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* =========================================================
            MAIN CTA
        ========================================================= */}

        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-2xl
            border
            border-[#2A2A30]
            bg-[#0A0A0A]
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            sm:rounded-3xl
          "
        >
          {/* =======================================================
              TOP GRADIENT BORDER
          ======================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[2px]
              w-2/3
              -translate-x-1/2
              bg-[linear-gradient(90deg,transparent,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9,transparent)]
              opacity-80
            "
          />

          {/* =======================================================
              SIDE ACCENTS
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -left-16
              top-1/2
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              border
              border-[#29B6F0]/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              top-1/2
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              border
              border-[#B93FC9]/10
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
              max-w-3xl
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
              md:px-10
              lg:px-12
              lg:py-14
            "
          >
            {/* Badge */}

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="80"
            >
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#3E7BD6]/30
                  bg-white/[0.035]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  tracking-[0.17em]
                  text-[#29B6F0]
                  shadow-[0_0_20px_rgba(41,182,240,0.04)]
                  sm:px-4
                  sm:text-xs
                "
              >
                LET'S BUILD TOGETHER
              </span>
            </div>

            {/* Heading */}

            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              className="
                mt-4
                text-3xl
                font-black
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Technology that works.
              <br />
              <span
                className={`${gradient} bg-clip-text text-transparent`}
              >
                Partners you can trust.
              </span>
            </h2>

            {/* Gradient Divider */}

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="
                mx-auto
                mt-4
                h-[3px]
                w-14
                rounded-full
                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              "
            />

            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="250"
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[14px]
                leading-6
                text-[#A0A0A8]

                sm:mt-5
                sm:text-[15px]
                sm:leading-7

                md:text-[15px]
                md:leading-7

                lg:text-[16px]
                lg:leading-7

                xl:text-[16px]
              "
            >
              Whether you're modernizing legacy systems, building custom
              software, unlocking insights from your data, or improving
              cybersecurity, BeaverTek helps you move forward with confidence.
            </p>

            {/* =======================================================
                BUTTONS
            ======================================================= */}

            <div
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="320"
              className="
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-2.5

                sm:mt-7
                sm:flex-row
                sm:gap-3
              "
            >
              {/* Start Your Project */}

              <Link
                href="/contact/contacthero"
                className="
                  group
                  relative
                  inline-flex
                  h-10.5
                  w-auto
                  min-w-[190px]
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  px-5
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(62,123,214,0.18)]
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_32px_rgba(62,123,214,0.28)]

                  sm:min-w-0
                  sm:px-6.5
                  sm:text-sm
                "
              >
                <span className="relative z-10">
                  Start Your Project
                </span>

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-all
                    duration-300
                    group-hover:bg-white/25
                  "
                >
                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </span>

                {/* Hover shine */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -left-[100%]
                    top-0
                    h-full
                    w-1/2
                    skew-x-[-20deg]
                    bg-white/15
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />
              </Link>

              {/* Explore Services */}

              <Link
                href="/services/serviceshero"
                className="
                  group
                  inline-flex
                  h-10.5
                  w-auto
                  min-w-[190px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-5
                  text-xs
                  font-semibold
                  text-[#D4D4D8]
                  transition-all
                  duration-400
                  hover:-translate-y-0.5
                  hover:border-[#3E7BD6]/60
                  hover:bg-[#17171B]
                  hover:text-white

                  sm:min-w-0
                  sm:px-6.5
                  sm:text-sm
                "
              >
                <span>Explore Services</span>

                <span
                  className="
                    ml-2
                    h-px
                    w-0
                    bg-[#29B6F0]
                    transition-all
                    duration-400
                    group-hover:w-4
                  "
                />
              </Link>
            </div>
          </div>

          {/* =======================================================
              BOTTOM GRADIENT LINE
          ======================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-2/3
              -translate-x-1/2
              bg-[linear-gradient(90deg,transparent,#B93FC9,#7A4FD1,#3E7BD6,#29B6F0,transparent)]
              opacity-60
            "
          />
        </div>
      </section>
    </div>
  );
}
export default Buildtogether;