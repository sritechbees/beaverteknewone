"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import AboutContent from "./aboutcontent";
import WhatWeBelieve from "./whatwebelieve";
import WhereWeAre from "./whereweare";

export default function AboutHero() {
  return (
    <App_layout>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-20">



        {/* ================= CONTAINER ================= */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">


            {/* ================= LEFT CONTENT ================= */}
            <div className="order-2 text-center lg:order-1 lg:text-left">

              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  tracking-[0.08em]
                  text-[#29B6F0]
                  shadow-[0_8px_30px_rgba(41,182,240,0.08)]
                  transition-all
                  duration-300
                  hover:border-[#29B6F0]/40
                "
              >
                About BeaverTek
              </span>


              {/* Main Title */}
              <h1
                className="
                  mt-6
                  text-4xl
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[62px]
                  xl:text-[68px]
                "
              >
                Building

                <span
                  className="
                    mt-1
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
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#A0A0A8]
                  sm:text-base
                  md:text-lg
                  md:leading-8
                  lg:mx-0
                "
              >
                We create innovative software solutions, AI applications,
                cloud platforms, and enterprise products that help businesses
                grow with confidence.
              </p>


              {/* Buttons */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:justify-center
                  lg:justify-start
                "
              >

                <Link
                  href="/services/serviceshero"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_40px_rgba(62,123,214,.30)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_50px_rgba(62,123,214,.40)]
                    sm:px-8
                  "
                >
                  Our Services
                  <span className="ml-2">→</span>
                </Link>


                <Link
                  href="/contact/contacthero"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:bg-[#1A1A1E]
                    sm:px-8
                  "
                >
                  Contact Us
                  <span className="ml-2 text-[#29B6F0]">→</span>
                </Link>

              </div>

            </div>


            {/* ================= RIGHT IMAGE ================= */}
            <div className="order-1 flex justify-center lg:order-2">

              <div className="relative mt-8 flex items-center justify-center lg:mt-0">

                {/* Image Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    h-[250px]
                    w-[250px]
                    rounded-full
                    bg-[#29B6F0]/20
                    blur-[90px]
                    sm:h-[320px]
                    sm:w-[320px]
                    lg:h-[420px]
                    lg:w-[420px]
                  "
                />


                {/* Image Container */}
                <div
                  className="
                    group
                    relative
                    w-full
                    max-w-[280px]
                    overflow-hidden
                    border-[5px]
                    border-[#121212]
                    bg-[#111111]
                    shadow-[0_30px_80px_rgba(0,0,0,.45)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    sm:max-w-[360px]
                    md:max-w-[420px]
                    lg:max-w-[500px]
                    lg:border-8
                    xl:max-w-[540px]
                  "
                  style={{
                    borderRadius: "22% 78% 35% 55% / 38% 4% 38% 4%",
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
                      duration-[1800ms]
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT CONTENT ================= */}
      <AboutContent />

      {/* ================= WHAT WE BELIEVE ================= */}
      <WhatWeBelieve />

      {/* ================= WHERE WE ARE ================= */}
      <WhereWeAre />

    </App_layout>
  );
}