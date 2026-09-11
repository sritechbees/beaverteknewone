
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productcontent from "./productcontent";

export default function ProductsHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic",
      offset: 70,
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <App_layout>
      <section className="relative isolate overflow-hidden bg-[#000000] py-10 sm:py-12 md:py-14 lg:py-12">
        {/* ================================================= */}
        {/* BACKGROUND GLOW */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              left-[8%]
              top-[8%]
              h-[220px]
              w-[220px]
              rounded-full
              bg-[#29B6F0]/[0.06]
              blur-[100px]
              sm:h-[300px]
              sm:w-[300px]
              sm:blur-[115px]
              lg:h-[360px]
              lg:w-[360px]
            "
          />

          <div
            className="
              absolute
              bottom-[-80px]
              right-[5%]
              h-[240px]
              w-[240px]
              rounded-full
              bg-[#7A4FD1]/[0.06]
              blur-[100px]
              sm:h-[340px]
              sm:w-[340px]
              sm:blur-[115px]
            "
          />
        </div>

        {/* ================================================= */}
        {/* SUBTLE GRID */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        {/* ================================================= */}
        {/* MAIN CONTAINER */}
        {/* ================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            className="
              grid
              items-center
              gap-8
              md:gap-10
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12
              xl:gap-14
            "
          >
            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="
                relative
                z-10
                mx-auto
                w-full
                max-w-xl
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              {/* Local Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  -top-16
                  h-52
                  w-52
                  rounded-full
                  bg-[#29B6F0]/10
                  blur-[90px]
                  sm:h-60
                  sm:w-60
                "
              />

              {/* Badge */}

              <div
                data-aos="fade-down"
                data-aos-delay="80"
                className="
                  relative
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#3E7BD6]/40
                  bg-[rgba(255,255,255,.05)]
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#29B6F0]
                  shadow-[0_0_25px_rgba(41,182,240,.08)]
                  backdrop-blur-xl
                  sm:px-4.5
                  sm:py-2.5
                  sm:text-[11px]
                "
              >
                BEAVERHEALTHAI
              </div>

              {/* Heading */}

              <h1
                data-aos="fade-up"
                data-aos-delay="120"
                className="
                  relative
                  mt-5
                  text-[2.15rem]
                  font-black
                  leading-[1.04]
                  tracking-[-0.035em]
                  text-[#FFFFFF]
                  sm:mt-6
                  sm:text-4xl
                  md:text-[2.8rem]
                  lg:text-[3.5rem]
                  xl:text-[3.9rem]
                "
              >
                Smart
                <br />

                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                  }}
                >
                  Healthcare
                </span>

                <br />

                Platform
              </h1>

              {/* Accent Line */}

              <div
                data-aos="fade-up"
                data-aos-delay="180"
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:w-16" />

                <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-8" />
              </div>

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="220"
                className="
                  relative
                  mt-5
                  max-w-lg
                  text-[13px]
                  leading-6
                  text-[#D4D4D8]
                  sm:text-sm
                  sm:leading-7
                  md:text-[15px]
                  lg:text-base
                  lg:leading-7
                "
              >
                BeaverHealthAI is an intelligent healthcare platform built by
                BeaverTek to help hospitals, clinics, and healthcare providers
                automate workflows, improve patient engagement, streamline
                operations, and unlock real-time healthcare insights through AI.
              </p>

              {/* ================================================= */}
              {/* CTA BUTTONS */}
              {/* ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-delay="320"
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:justify-center
                  lg:justify-start
                "
              >
                {/* Primary */}

                <Link
                  href="https://beaverhealth.ai"
                  target="_blank"
                  data-aos="zoom-in"
                  data-aos-delay="380"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-lg
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_0_30px_rgba(62,123,214,.22)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_0_45px_rgba(185,63,201,.32)]
                    sm:w-auto
                    sm:px-6
                    sm:text-sm
                  "
                >
                  Visit Website

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-[18px] sm:w-[18px]" />
                </Link>

                {/* Secondary */}

                <Link
                  href="/contact/contacthero"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-lg
                    border
                    border-[#2A2A30]
                    bg-[rgba(255,255,255,.05)]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:bg-[#121212]
                    hover:shadow-[0_0_30px_rgba(62,123,214,.16)]
                    sm:w-auto
                    sm:px-6
                    sm:text-sm
                  "
                >
                  Contact Us

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-[18px] sm:w-[18px]" />
                </Link>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT SIDE — ONLY PRODUCT IMAGE */}
            {/* ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="120"
              className="
                relative
                flex
                w-full
                items-center
                justify-center
                lg:min-h-[450px]
              "
            >
              {/* Image Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[230px]
                  w-[230px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#29B6F0]/10
                  blur-[85px]
                  sm:h-[320px]
                  sm:w-[320px]
                  sm:blur-[105px]
                  lg:h-[420px]
                  lg:w-[420px]
                "
              />

              {/* Secondary Gradient Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[10%]
                  h-20
                  w-20
                  rounded-full
                  bg-[#7A4FD1]/15
                  blur-3xl
                  sm:h-28
                  sm:w-28
                "
              />

              {/* Product Image */}

              <div
                data-aos="zoom-in"
                data-aos-delay="260"
                data-aos-duration="1000"
                className="
                  group
                  relative
                  w-full
                  max-w-[600px]
                  transition-transform
                  duration-700
                  hover:-translate-y-1.5
                  sm:max-w-[640px]
                  lg:max-w-[680px]
                "
              >
                {/* Outer Image Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-4
                    rounded-[42px]
                    bg-gradient-to-br
                    from-[#29B6F0]/20
                    via-[#3E7BD6]/15
                    via-[#7A4FD1]/15
                    to-[#B93FC9]/15
                    opacity-70
                    blur-[45px]
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    sm:-inset-5
                    sm:rounded-[50px]
                  "
                />

                {/* Image Frame */}

                <div
                  className="
                    relative
                    overflow-hidden
                    border
                    border-[#2A2A30]
                    bg-[#0A0A0A]
                    p-1
                    shadow-[0_25px_70px_rgba(0,0,0,.5)]
                    transition-all
                    duration-700
                    group-hover:border-[#3E7BD6]/60
                    group-hover:shadow-[0_35px_90px_rgba(62,123,214,.2)]
                    sm:p-1.5
                  "
                  style={{
                    borderRadius: "55px 20px 55px 20px",
                  }}
                >
                  <Image
                    src="/home/producthero.png"
                    alt="BeaverHealthAI"
                    width={900}
                    height={700}
                    priority
                    className="
                      h-auto
                      max-h-[500px]
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.025]
                      sm:max-h-[540px]
                      lg:max-h-[570px]
                    "
                  />

                  {/* Very Subtle Image Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-[#000000]/20
                      via-transparent
                      to-[#29B6F0]/[0.05]
                    "
                  />

                  {/* Inner Border */}

                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.04]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PRODUCT CONTENT */}
      {/* ================================================= */}

      <Productcontent />
    </App_layout>
  );
}

