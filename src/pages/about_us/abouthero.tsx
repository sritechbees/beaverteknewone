
"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";

import AboutContent from "./aboutcontent";
import WhatWeBelieve from "./whatwebelieve";
import WhereWeAre from "./whereweare";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Innovativeservices from "./innovativeservices";

export default function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => AOS.refreshHard();
  }, []);

  return (
    <App_layout>
      {/* =========================================================
          HERO
          LEFT CONTENT + RIGHT IMAGE
          SEAMLESS SINGLE SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-black">
        {/* =======================================================
            BACKGROUND
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Cyan glow */}
          <div
            className="
              absolute
              -left-40
              top-10
              h-56
              w-56
              rounded-full
              bg-[#29B6F0]/10
              blur-[90px]

              sm:h-72
              sm:w-72

              lg:h-[380px]
              lg:w-[380px]
            "
          />

          {/* Violet glow */}
          <div
            className="
              absolute
              -right-40
              bottom-0
              h-64
              w-64
              rounded-full
              bg-[#7A4FD1]/10
              blur-[100px]

              sm:h-80
              sm:w-80

              lg:h-[420px]
              lg:w-[420px]
            "
          />

          {/* Subtle grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.02]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />
        </div>

        {/* =======================================================
            MAIN HERO WRAPPER
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[510px]
            w-full
            max-w-7xl
            items-stretch

            sm:min-h-[535px]

            md:min-h-[555px]

            lg:min-h-[580px]

            xl:min-h-[600px]
          "
        >
          {/* =====================================================
              LEFT CONTENT AREA
          ====================================================== */}

          <div
            className="
              relative
              z-20
              flex
              w-full
              items-center
              px-5
              py-12

              sm:px-6
              sm:py-14

              md:px-8
              md:py-16

              lg:w-[58%]
              lg:px-10
              lg:py-16

              xl:w-[57%]
              xl:px-12
              xl:py-18
            "
          >
            {/* =================================================
                CONTENT GRADIENT
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-[-280px]
                hidden
                w-[260px]
                bg-gradient-to-r
                from-black/10
                via-black/10
                to-transparent

                lg:block
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                w-full
                max-w-[570px]
                text-center

                lg:text-left
              "
            >
              {/* =================================================
                  BADGE
              ================================================= */}

              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-delay="80"
                className="
                  mb-4
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]/85
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  tracking-[0.1em]
                  text-[#29B6F0]
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-0.5
                  hover:border-[#29B6F0]/50
                  hover:bg-[#17171A]

                  sm:px-3.5
                  sm:text-[10px]

                  md:text-[11px]
                "
              >
                About BeaverTek
              </div>

              {/* =================================================
                  HEADING
                  RESPONSIVE TEXT SIZING
              ================================================== */}

              <h1
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
                className="
                  mx-auto
                  max-w-[430px]
                  text-[32px]
                  font-extrabold
                  leading-[1.06]
                  tracking-[-0.04em]
                  text-white
                  drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]

                  sm:max-w-[500px]
                  sm:text-[38px]
                  sm:leading-[1.05]

                  md:max-w-[560px]
                  md:text-[45px]

                  lg:mx-0
                  lg:max-w-[570px]
                  lg:text-[47px]

                  xl:text-[55px]

                  2xl:text-[60px]
                "
              >
                Building

                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="260"
                  className="
                    block
                    bg-clip-text
                    text-transparent
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                  }}
                >
                  Digital Future
                </span>
              </h1>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="260"
                className="
                  z-10
                  mx-auto
                  mt-4
                  w-full
                  max-w-[430px]
                  text-[13px]
                  leading-6
                  text-[#D4D4D8]
                  transition-colors
                  duration-500

                  sm:mt-5
                  sm:max-w-[500px]
                  sm:text-[15px]
                  sm:leading-7

                  md:max-w-[560px]
                  md:text-base
                  md:leading-7

                  lg:mx-0
                  lg:max-w-[480px]
                  lg:text-[17px]
                  lg:leading-7.5
                "
              >
                We create innovative software solutions, AI applications,
                cloud platforms, and enterprise products that help businesses
                grow with confidence.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="470"
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  items-center
                  gap-2.5

                  sm:mt-7
                  sm:flex-row
                  sm:justify-center

                  lg:justify-start
                "
              >
                {/* =================================================
                    OUR SERVICES
                ================================================== */}

                <Link
                  href="/services/servicesherosection"
                  className="
                    group
                    inline-flex
                    min-h-[42px]
                    w-[82%]
                    max-w-[190px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    px-5
                    py-2.5
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_0_28px_rgba(62,123,214,.22)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:shadow-[0_0_42px_rgba(62,123,214,.35)]

                    active:scale-[0.98]

                    sm:w-auto
                    sm:max-w-none
                    sm:min-h-[44px]
                    sm:px-6
                    sm:text-xs

                    md:text-sm
                  "
                >
                  Our Services

                  <span
                    className="
                      ml-1.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* =================================================
                    CONTACT US
                ================================================== */}

                <Link
                  href="/contact/contacthero"
                  className="
                    group
                    inline-flex
                    min-h-[42px]
                    w-[82%]
                    max-w-[190px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#2A2A30]
                    bg-[#121212]/85
                    px-5
                    py-2.5
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur-md
                    shadow-[0_6px_24px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:bg-[#1A1A1E]
                    hover:shadow-[0_8px_30px_rgba(62,123,214,.14)]

                    active:scale-[0.98]

                    sm:w-auto
                    sm:max-w-none
                    sm:min-h-[44px]
                    sm:px-6
                    sm:text-xs

                    md:text-sm
                  "
                >
                  Contact Us

                  <span
                    className="
                      ml-1.5
                      text-[#29B6F0]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
              CLEARER IMAGE + SEAMLESS BLEND
          ====================================================== */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="120"
            className="
              absolute
              inset-y-0
              right-0
              w-full

              lg:w-[64%]
              xl:w-[63%]
            "
          >
            <Image
              src="/about/About.jpg"
              alt="About BeaverTek"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 64vw"
              className="
                object-cover
                object-center

                lg:object-[center_center]
              "
            />

            {/* =================================================
                LEFT IMAGE BLEND
            ================================================== */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                w-full
                bg-gradient-to-r
                from-black
                via-black/55
                to-transparent

                lg:w-[48%]
                lg:via-black/45
                lg:to-transparent
              "
            />

            {/* Very light overall image darkening */}

            <div
              className="
                absolute
                inset-0
                bg-black/[0.03]
              "
            />

            {/* =================================================
                BOTTOM BLEND
            ================================================== */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black
                via-black/35
                to-transparent

                sm:h-28

                lg:h-32
              "
            />

            {/* =================================================
                RIGHT EDGE SOFT BLEND
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                w-16
                bg-gradient-to-l
                from-black/10
                to-transparent
              "
            />
          </div>

          {/* =====================================================
              MOBILE CONTENT OVERLAY
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[5]
              bg-gradient-to-b
              from-black/75
              via-black/50
              to-black/75

              lg:hidden
            "
          />
        </div>
      </section>
      <Innovativeservices/>

      {/* =========================================================
          ABOUT CONTENT
      ========================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="80"
      >
        <AboutContent />
      </div>

      {/* =========================================================
          WHAT WE BELIEVE
      ========================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="80"
      >
        <WhatWeBelieve />
      </div>

      {/* =========================================================
          WHERE WE ARE
      ========================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="80"
      >
        <WhereWeAre />
      </div>
    </App_layout>
  );
}
