
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import ModernizeContent from "./modernizecontent";

import { ArrowRight, PlayCircle } from "lucide-react";

export default function ModernizeHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      disable: false,
    });

    AOS.refresh();

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      AOS.refreshHard();
    };
  }, []);

  return (
    <App_layout>
      {/* ================= MODERNIZE HERO ================= */}

      <section
        className="
          relative
          min-h-[500px]
          overflow-hidden
          bg-[#000000]

          sm:min-h-[520px]

          md:min-h-[540px]

          lg:min-h-[570px]

          xl:min-h-[600px]
        "
      >
        {/* ================= BACKGROUND IMAGE ================= */}

        <div className="absolute inset-0">
          <Image
            src="/home/Modernize.png"
            alt="Modernize Hero"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />

          {/* Brighter Image Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Center Readability Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.58)_100%)]
            "
          />

          {/* BeaverTek Brand Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_42%,rgba(41,182,240,0.12),transparent_30%),radial-gradient(circle_at_65%_55%,rgba(122,79,209,0.12),transparent_34%),radial-gradient(circle_at_35%_60%,rgba(185,63,201,0.08),transparent_28%)]
            "
          />

          {/* Bottom Fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-[#000000]
              via-[#000000]/50
              to-transparent

              sm:h-24

              md:h-28

              lg:h-32
            "
          />
        </div>

        {/* ================= DECORATIVE GLOW ================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-48
            w-48
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#29B6F0]/10
            blur-[90px]

            sm:h-60
            sm:w-60

            md:h-72
            md:w-72

            lg:h-80
            lg:w-80

            xl:h-96
            xl:w-96
          "
          data-aos="zoom-in"
          data-aos-duration="1500"
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-1/3
            h-48
            w-48
            rounded-full
            bg-[#3E7BD6]/10
            blur-[90px]

            sm:h-56
            sm:w-56

            md:h-64
            md:w-64
          "
          data-aos="fade-right"
          data-aos-duration="1300"
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-1/4
            h-52
            w-52
            rounded-full
            bg-[#B93FC9]/10
            blur-[100px]

            sm:h-64
            sm:w-64

            md:h-72
            md:w-72
          "
          data-aos="fade-left"
          data-aos-duration="1400"
        />

        {/* ================= CENTER CONTENT ================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[500px]
            max-w-7xl
            items-center
            justify-center
            px-4
            py-8
            text-center

            sm:min-h-[520px]
            sm:px-6
            sm:py-10

            md:min-h-[540px]
            md:px-8
            md:py-12

            lg:min-h-[570px]
            lg:px-10
            lg:py-14

            xl:min-h-[600px]
            xl:px-12
          "
        >
          <div
            className="
              flex
              w-full
              max-w-3xl
              flex-col
              items-center
            "
          >
            {/* ================= BADGE ================= */}

            <div
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="80"
            >
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#29B6F0]/50
                  bg-[rgba(255,255,255,0.07)]
                  px-2.5
                  py-1
                  text-[9px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#29B6F0]
                  shadow-[0_0_20px_rgba(41,182,240,0.12)]
                  backdrop-blur-md

                  sm:px-3
                  sm:py-1.5
                  sm:text-[10px]

                  md:text-xs
                "
              >
                MODERNIZE
              </span>
            </div>

            {/* ================= HEADING ================= */}

            <div
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="150"
            >
              <h1
                className="
                  mt-3
                  text-[30px]
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                  text-[#FFFFFF]

                  sm:mt-4
                  sm:text-[36px]

                  md:text-[44px]

                  lg:mt-5
                  lg:text-[52px]

                  xl:text-[68px]
                "
              >
                Modernize
                <br />
                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Your Business
                </span>
              </h1>
            </div>

            {/* ================= DESCRIPTION ================= */}

            <div
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="250"
            >
              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[620px]
                  text-[11px]
                  leading-5
                  text-[#D4D4D8]

                  sm:mt-4
                  sm:text-sm
                  sm:leading-6

                  md:text-base
                  md:leading-7

                  lg:mt-5
                  lg:text-[17px]
                  lg:leading-7
                "
              >
                Modernize legacy platforms, migrate workloads, improve
                performance, strengthen security, and prepare your business
                for cloud, AI, and future innovation.
              </p>
            </div>

            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-2

                sm:mt-6
                sm:flex-row
                sm:gap-3

                md:mt-7

                lg:mt-8
              "
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="350"
            >
              {/* Primary Button */}

              <Link
                href="/contact/contacthero"
                className="
                  group
                  inline-flex
                  w-44
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-[#FFFFFF]
                  shadow-[0_7px_24px_rgba(62,123,214,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:scale-[1.02]
                  hover:shadow-[0_10px_30px_rgba(62,123,214,0.40)]

                  sm:w-auto
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                "
              >
                Start Your Project

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary Button */}

              <Link
                href="#modernizecontent"
                className="
                  group
                  inline-flex
                  w-44
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-[#3E7BD6]/60
                  bg-[rgba(255,255,255,0.07)]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-[#FFFFFF]
                  shadow-[0_5px_18px_rgba(0,0,0,0.18)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#29B6F0]
                  hover:bg-[rgba(41,182,240,0.12)]
                  hover:shadow-[0_8px_25px_rgba(41,182,240,0.18)]

                  sm:w-auto
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                "
              >
                <PlayCircle
                  size={16}
                  className="
                    text-[#29B6F0]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERNIZE CONTENT ================= */}

      <section id="modernizecontent">
        <ModernizeContent />
      </section>
    </App_layout>
  );
}

