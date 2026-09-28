
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

function Whoweare() {
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
    <section className="relative w-full overflow-hidden bg-[#05070D] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-20">
      {/* =================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-64
          w-64
          rounded-full
          bg-[#29B6F0]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#B93FC9]/10
          blur-3xl
        "
      />

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative mx-auto w-full max-w-7xl">
        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* INTRODUCTION LABEL */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
              sm:mb-5
            "
          >
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#29B6F0]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                sm:text-xs
              "
              style={{
                backgroundImage: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Introduction
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-[#B93FC9]
                to-transparent
                sm:w-10
              "
            />
          </div>

          {/* TITLE */}

          <h2
            data-aos="fade-up"
            data-aos-delay="180"
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-[42px]
              lg:text-[48px]
            "
          >
            Who we are?
            <span
              className="ml-2"
              style={{
                backgroundImage: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              - BeaverTek IT Services
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="280"
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-[#A0A0A8]
              sm:mt-7
              sm:text-base
              sm:leading-8
              md:text-[17px]
              lg:text-lg
            "
          >
            We are an innovative Managed IT Services provider with a contagious
            passion to succeed and make a difference. BeaverTek, based in Orange
            County, California, leverages decades of experience working with
            Fortune 500 companies across multiple disciplines.
          </p>

          {/* BOTTOM ACCENT */}

          <div
            data-aos="fade-up"
            data-aos-delay="380"
            className="
              relative
              mx-auto
              mt-8
              flex
              h-5
              w-full
              max-w-sm
              items-center
              justify-center
              sm:mt-10
            "
          >
            {/* SOFT GLOW */}

            <span
              className="
                absolute
                h-5
                w-28
                rounded-full
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                opacity-20
                blur-lg
              "
            />

            {/* MAIN LINE */}

            <span
              className="
                relative
                h-[2px]
                w-20
                rounded-full
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                sm:w-24
              "
            />

            {/* CENTER DOT */}

            <span
              className="
                absolute
                h-1.5
                w-1.5
                rounded-full
                bg-white
                shadow-[0_0_10px_rgba(41,182,240,0.8)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whoweare;

