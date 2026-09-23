"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import DevOpsSections from "./devopssections";
import Keyservices from "./keyservices";

function Herosection() {
  const words = ["DevOps", "& DevSecOps"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* =====================================================
      AOS
  ====================================================== */

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
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
    };
  }, []);

  /* =====================================================
      TYPING ANIMATION
  ====================================================== */

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <App_layout>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-black">
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

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

            xl:py-8
          "
        >
          <div
            className="
              grid
              min-h-[380px]
              w-full
              grid-cols-1
              items-center
              gap-8

              sm:min-h-[400px]

              md:grid-cols-[0.9fr_1.1fr]
              md:gap-10

              lg:min-h-[420px]
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-12

              xl:min-h-[430px]
            "
          >
            {/* =================================================
                LEFT CONTENT
                45% DESKTOP
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                max-w-[520px]
                flex-col
                justify-center
              "
              data-aos="fade-right"
              data-aos-duration="850"
              data-aos-offset="40"
            >
              {/* =================================================
                  BREADCRUMB
              ================================================== */}

              <div
                className="
                  mb-4
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.06]
                  px-3
                  py-1
                  backdrop-blur-md

                  sm:mb-5
                  sm:px-3.5
                  sm:py-1.5
                "
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="750"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />

                <span className="ml-2 text-[10px] font-medium text-[#D4D4D8] sm:text-[11px]">
                  Services
                </span>

                <span className="mx-1.5 text-[#7A7A7A] sm:mx-2">
                  /
                </span>

                <span className="text-[10px] font-medium text-[#29B6F0] sm:text-[11px]">
                  DevOps & DevSecOps
                </span>
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <h1
                className="
                  max-w-[500px]
                  text-[32px]
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  text-white

                  sm:text-[36px]

                  md:text-[42px]

                  lg:text-[48px]

                  xl:text-[52px]
                "
                data-aos="fade-up"
                data-aos-delay="160"
                data-aos-duration="850"
              >
                Build Faster.

                <span className="mt-2 block min-h-[1.08em] sm:mt-2.5">
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#29B6F0]
                      via-[#3E7BD6]
                      via-[#7A4FD1]
                      to-[#B93FC9]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {text}
                  </span>

                  {/* Typing Cursor */}
                  <span
                    className="
                      ml-1
                      inline-block
                      h-[0.78em]
                      w-[2px]
                      translate-y-[2px]
                      animate-pulse
                      bg-gradient-to-b
                      from-[#29B6F0]
                      to-[#B93FC9]

                      sm:w-[3px]
                    "
                  />
                </span>
              </h1>

              {/* =================================================
                  ACCENT LINE
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2

                  sm:mt-5
                  sm:gap-2.5
                "
                data-aos="fade-up"
                data-aos-delay="280"
                data-aos-duration="800"
              >
                <div
                  className="
                    h-[2px]
                    w-8
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#B93FC9]

                    sm:w-12
                    md:w-16
                  "
                />

                <div className="h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />

                <div
                  className="
                    h-[2px]
                    w-8
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#7A4FD1]
                    to-[#B93FC9]

                    sm:w-12
                    md:w-16
                  "
                />
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
                55% DESKTOP
            ================================================== */}

            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-end
              "
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="150"
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
                  src="/services/Devops.jpg"
                  alt="DevOps & DevSecOps"
                  className="
                    h-[240px]
                    w-full
                    object-cover
                    object-center

                    sm:h-[280px]

                    md:h-[330px]

                    lg:h-[350px]

                    xl:h-[370px]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-28
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]
            to-transparent
            opacity-70

            sm:w-44

            md:w-56
          "
        />
      </section>

      {/* =====================================================
          DEVOPS CONTENT
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-offset="50"
      >
        <DevOpsSections />
      </div>

      {/* =====================================================
          KEY SERVICES
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="100"
        data-aos-offset="50"
      >
        <Keyservices />
      </div>
    </App_layout>
  );
}

export default Herosection;