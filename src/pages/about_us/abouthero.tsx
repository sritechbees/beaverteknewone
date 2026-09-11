
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

export default function AboutHero() {
  /* ================================================================
     AOS INITIALIZATION
  ================================================================ */

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

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <App_layout>
      {/* ================= HERO SECTION ================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#000000]
          py-9
          sm:py-11
          md:py-12
          lg:py-14
          xl:py-12
        "
      >
        {/* ================= BACKGROUND GLOW ================= */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-5
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#29B6F0]/10
            blur-[90px]
            sm:h-[280px]
            sm:w-[280px]
            lg:h-[380px]
            lg:w-[380px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-[230px]
            w-[230px]
            rounded-full
            bg-[#7A4FD1]/10
            blur-[95px]
            sm:h-[300px]
            sm:w-[300px]
            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* ================= SUBTLE GRID ================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        {/* ================= CONTAINER ================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-5
            md:px-6
            lg:px-8
            xl:px-10
          "
        >
          <div
            className="
              grid
              items-center
              gap-7
              sm:gap-8
              md:gap-9
              lg:grid-cols-2
              lg:gap-11
              xl:gap-14
            "
          >
            {/* ================= LEFT CONTENT ================= */}

            <div
              className="
                order-2
                mx-auto
                w-full
                max-w-[600px]
                text-center
                lg:order-1
                lg:mx-0
                lg:text-left
              "
            >
              {/* Badge */}

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
                  bg-[#121212]/90
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  tracking-[0.1em]
                  text-[#29B6F0]
                  shadow-[0_6px_24px_rgba(41,182,240,0.07)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:border-[#29B6F0]/50
                  hover:bg-[#17171A]
                  hover:shadow-[0_8px_30px_rgba(41,182,240,0.12)]
                  sm:px-3.5
                  sm:py-1.5
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                About BeaverTek
              </div>

              {/* Main Title */}

              <h1
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
                className="
                  text-[32px]
                  font-extrabold
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-white
                  drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]
                  sm:text-[38px]
                  sm:leading-[1.05]
                  md:text-[45px]
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
                    mt-0.5
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

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="360"
                className="
                  mx-auto
                  mt-4
                  max-w-lg
                  text-[12px]
                  leading-5.5
                  text-[#D4D4D8]
                  sm:mt-5
                  sm:text-[13px]
                  sm:leading-6
                  md:text-sm
                  md:leading-7
                  lg:mx-0
                  lg:text-[15px]
                  lg:leading-7
                  xl:text-base
                "
              >
                We create innovative software solutions, AI applications,
                cloud platforms, and enterprise products that help businesses
                grow with confidence.
              </p>

              {/* Buttons */}

              <div
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="470"
                className="
                  mt-6
                  flex
                  flex-col
                  gap-2.5
                  sm:mt-7
                  sm:flex-row
                  sm:justify-center
                  lg:mt-7
                  lg:justify-start
                "
              >
                {/* Our Services */}

                <Link
                  href="/services/serviceshero"
                  className="
                    group
                    inline-flex
                    min-h-[42px]
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

                {/* Contact Us */}

                <Link
                  href="/contact/contacthero"
                  className="
                    group
                    inline-flex
                    min-h-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    px-5
                    py-2.5
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_6px_24px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:bg-[#1A1A1E]
                    hover:shadow-[0_8px_30px_rgba(62,123,214,.14)]
                    active:scale-[0.98]
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

            {/* ================= RIGHT IMAGE ================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="120"
              className="
                order-1
                flex
                justify-center
                lg:order-2
              "
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="220"
                className="
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                "
              >
                {/* Image Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    h-[190px]
                    w-[190px]
                    animate-pulse
                    rounded-full
                    bg-[#29B6F0]/15
                    blur-[70px]
                    sm:h-[250px]
                    sm:w-[250px]
                    sm:blur-[80px]
                    md:h-[300px]
                    md:w-[300px]
                    lg:h-[370px]
                    lg:w-[370px]
                    xl:h-[420px]
                    xl:w-[420px]
                  "
                />

                {/* Secondary Violet Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    top-1/2
                    h-[90px]
                    w-[90px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#7A4FD1]/10
                    blur-[50px]
                    sm:h-[130px]
                    sm:w-[130px]
                    lg:h-[190px]
                    lg:w-[190px]
                  "
                />

                {/* Image Container */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="
                    group
                    relative
                    w-full
                    max-w-[220px]
                    overflow-hidden
                    border-[3px]
                    border-[#121212]
                    bg-[#111111]
                    shadow-[0_20px_55px_rgba(0,0,0,.42)]
                    transition-all
                    duration-700
                    hover:-translate-y-1.5
                    hover:scale-[1.015]
                    hover:border-[#1A1A1E]
                    hover:shadow-[0_28px_70px_rgba(41,182,240,.12)]
                    sm:max-w-[270px]
                    sm:border-[4px]
                    md:max-w-[320px]
                    lg:max-w-[400px]
                    lg:border-[6px]
                    xl:max-w-[450px]
                  "
                  style={{
                    borderRadius:
                      "22% 78% 35% 55% / 38% 4% 38% 4%",
                  }}
                >
                  <Image
                    src="/about/About.jpg"
                    alt="About BeaverTek"
                    width={540}
                    height={620}
                    priority
                    className="
                      h-auto
                      w-full
                      object-cover
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                      opacity-80
                      transition-opacity
                      duration-700
                      group-hover:opacity-50
                    "
                  />

                  {/* Image Highlight */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      shadow-[0_0_16px_rgba(41,182,240,.75)]
                      transition-all
                      duration-1000
                      group-hover:w-full
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="80"
      >
        <AboutContent />
      </div>

      {/* ================= WHAT WE BELIEVE ================= */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="80"
      >
        <WhatWeBelieve />
      </div>

      {/* ================= WHERE WE ARE ================= */}

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

