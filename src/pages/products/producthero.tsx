
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
      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[#000000]
          py-6
          sm:py-8
          md:py-10
          lg:py-14
          xl:py-16
        "
      >
        {/* ================================================= */}
        {/* MAIN CONTAINER */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            md:px-8
            lg:px-10  
            xl:px-12
          "
        >
          {/* ================================================= */}
          {/* INTEGRATED HERO */}
          {/* ================================================= */}

          <div
            className="
              relative
              grid
              items-center
              gap-5
              sm:gap-7
              md:gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-6
              xl:grid-cols-[0.88fr_1.12fr]
              xl:gap-8
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
                z-20
                mx-auto
                w-full
                max-w-xl
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              {/* ================================================= */}
              {/* BADGE */}
              {/* ================================================= */}

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
                  px-3.5
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#29B6F0]
                  shadow-[0_0_22px_rgba(41,182,240,.07)]
                  backdrop-blur-xl
                  sm:px-4
                  sm:py-2
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                BEAVERHEALTHAI
              </div>

              {/* ================================================= */}
              {/* HEADING */}
              {/* ================================================= */}

              <h1
                data-aos="fade-up"
                data-aos-delay="120"
                className="
                  relative
                  mt-3
                  text-[2rem]
                  font-black
                  leading-[1.04]
                  tracking-[-0.035em]
                  text-[#FFFFFF]
                  sm:mt-4
                  sm:text-[2.35rem]
                  md:mt-4
                  md:text-[2.75rem]
                  lg:mt-4
                  lg:text-[3.35rem]
                  xl:text-[3.8rem]
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

              {/* ================================================= */}
              {/* ACCENT LINE */}
              {/* ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-delay="180"
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  sm:mt-4
                  lg:justify-start
                "
              >
                <span
                  className="
                    h-[3px]
                    w-10
                    rounded-full
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#7A4FD1]
                    sm:w-14
                  "
                />

                <span
                  className="
                    h-[3px]
                    w-5
                    rounded-full
                    bg-gradient-to-r
                    from-[#7A4FD1]
                    to-[#B93FC9]
                    sm:w-7
                  "
                />
              </div>

              {/* ================================================= */}
              {/* DESCRIPTION */}
              {/* ================================================= */}

              <p
                data-aos="fade-up"
                data-aos-delay="220"
                className="
                  relative
                  mx-auto
                  mt-3
                  max-w-lg
                  text-[12.5px]
                  leading-5.5
                  text-[#D4D4D8]
                  sm:mt-4
                  sm:text-sm
                  sm:leading-6
                  md:text-[15px]
                  md:leading-7
                  lg:mx-0
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
                  mt-5
                  flex
                  flex-col
                  items-center
                  gap-2.5
                  sm:mt-6
                  sm:flex-row
                  sm:justify-center
                  sm:gap-3
                  lg:items-start
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
                    w-[145px]
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    px-3
                    py-2.5
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_0_25px_rgba(62,123,214,.20)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_0_40px_rgba(185,63,201,.30)]
                    sm:w-auto
                    sm:px-5
                    sm:py-3
                    sm:text-xs
                    md:px-6
                    md:text-sm
                  "
                >
                  Visit Website

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                      sm:h-4
                      sm:w-4
                    "
                  />
                </Link>

                {/* Secondary */}

                <Link
                  href="/contact/contacthero"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  className="
                    group
                    inline-flex
                    w-[145px]
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-[#2A2A30]
                    bg-[rgba(255,255,255,.05)]
                    px-3
                    py-2.5
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:bg-[#121212]
                    hover:shadow-[0_0_25px_rgba(62,123,214,.14)]
                    sm:w-auto
                    sm:px-5
                    sm:py-3
                    sm:text-xs
                    md:px-6
                    md:text-sm
                  "
                >
                  Contact Us

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                      sm:h-4
                      sm:w-4
                    "
                  />
                </Link>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT IMAGE — INTEGRATED WITH HERO */}
            {/* ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="120"
              className="
                relative
                z-10
                flex
                w-full
                items-center
                justify-center
                lg:-ml-4
                lg:min-h-[380px]
                xl:-ml-8
                xl:min-h-[440px]
              "
            >
              {/* ================================================= */}
              {/* PRODUCT IMAGE */}
              {/* ================================================= */}

              <div
                data-aos="zoom-in"
                data-aos-delay="260"
                data-aos-duration="1000"
                className="
                  group
                  relative
                  w-full
                  max-w-[430px]
                  transition-transform
                  duration-700
                  hover:-translate-y-1
                  sm:max-w-[500px]
                  md:max-w-[570px]
                  lg:max-w-[650px]
                  xl:max-w-[680px]
                "
              >
                {/* Outer Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-[35px]
                    bg-gradient-to-br
                    from-[#29B6F0]/15
                    via-[#3E7BD6]/10
                    via-[#7A4FD1]/10
                    to-[#B93FC9]/15
                    opacity-70
                    blur-[38px]
                    transition-all
                    duration-700
                    group-hover:opacity-90
                    sm:-inset-4
                    sm:rounded-[42px]
                  "
                />

                {/* Image Frame */}

                <div
                  className="
                    relative
                    overflow-hidden
                    border
                    border-[#2A2A30]/80
                    bg-[#0A0A0A]/80
                    p-1
                    shadow-[0_20px_55px_rgba(0,0,0,.42)]
                    backdrop-blur-sm
                    transition-all
                    duration-700
                    group-hover:border-[#3E7BD6]/50
                    group-hover:shadow-[0_30px_75px_rgba(62,123,214,.16)]
                    sm:p-1.5
                  "
                  style={{
                    borderRadius: "55px 20px 55px 20px",
                  }}
                >
                  <Image
                    src="/home/Smart Healthcare Platform.jpg"
                    alt="BeaverHealthAI"
                    width={900}
                    height={700}
                    priority
                    className="
                      h-auto
                      max-h-[300px]
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.025]
                      sm:max-h-[370px]
                      md:max-h-[450px]
                      lg:max-h-[500px]
                      xl:max-h-[540px]
                    "
                  />

                  {/* Very Subtle Image Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-[#000000]/10
                      via-transparent
                      to-[#29B6F0]/[0.035]
                    "
                  />

                  {/* Inner Border */}

                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.035]" />
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
