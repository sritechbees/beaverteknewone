"use client";

import App_layout from "@/component/layout/app_layout";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Overviewsection from "./overviewsection";
import Whatwedeliver from "./whatwedeliver";

function herosection() {
  const words = ["Cloud Cost", "Optimization", "(FinOps)"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
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
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#000000]

          h-[400px]
          sm:h-[420px]
          md:h-[440px]
          lg:h-[460px]
          xl:h-[500px]
        "
      >
        {/* =====================================================
            BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">
          <img
            src="/services/cloud.jpg.jpeg"
            alt="Cloud Cost Optimization"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          

          {/* Left-side text protection */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-full

              md:w-[75%]

              lg:w-[70%]

              xl:w-[65%]

              bg-gradient-to-r
              from-black
              via-black/85
              to-transparent
            "
          />

          
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center

            px-5

            sm:px-6

            md:px-8

            lg:px-10

            xl:px-12
          "
        >
          <div
            className="
              w-full
              max-w-[620px]

              md:max-w-[650px]

              lg:max-w-[680px]
            "
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
                px-3.5
                py-1.5
                backdrop-blur-md

                sm:mb-5
                sm:px-4
                sm:py-2
              "
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#29B6F0]

                  sm:h-2
                  sm:w-2
                "
              />

              <span
                className="
                  ml-2
                  text-[10px]
                  font-medium
                  text-[#D4D4D8]

                  sm:ml-2.5
                  sm:text-xs
                "
              >
                Services
              </span>

              <span
                className="
                  mx-1.5
                  text-[#7A7A7A]

                  sm:mx-2
                "
              >
                /
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  text-[#29B6F0]

                  sm:text-xs
                "
              >
                Cloud Cost Optimization
              </span>
            </div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h1
              className="
                max-w-[650px]
                text-[32px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.02em]
                text-white

                sm:text-[38px]

                md:text-[44px]

                lg:text-[50px]

                xl:text-[56px]
              "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              Cloud Cost

              <span
                className="
                  mt-1.5
                  block
                  min-h-[1.08em]

                  sm:mt-2
                "
              >
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
                    h-[0.8em]
                    w-[2px]
                    translate-y-[3px]
                    animate-pulse
                    bg-[#29B6F0]

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
                mt-5
                flex
                items-center
                gap-2.5

                sm:mt-6
                sm:gap-3
              "
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="800"
            >
              <div
                className="
                  h-[2px]
                  w-9
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  to-[#7A4FD1]

                  sm:w-14
                "
              />

              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#29B6F0]

                  sm:h-2
                  sm:w-2
                "
              />

              <div
                className="
                  h-[2px]
                  w-9
                  rounded-full
                  bg-gradient-to-r
                  from-[#7A4FD1]
                  to-[#B93FC9]

                  sm:w-14
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <Overviewsection />

      {/* =====================================================
          WHAT WE DELIVER
      ====================================================== */}

      <Whatwedeliver />
    </App_layout>
  );
}

export default herosection;