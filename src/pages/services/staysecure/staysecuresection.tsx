
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PracticeSection from "./practiceItems";

export default function StaySecureSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden bg-[#000000] py-12 sm:py-14 lg:py-16">
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Cyan Glow */}
          <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-72 sm:w-72 lg:-left-36 lg:-top-36 lg:h-[28rem] lg:w-[28rem] lg:blur-[140px]" />

          {/* Blue Glow */}
          <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#3E7BD6]/10 blur-[110px] sm:h-64 sm:w-64 lg:right-0 lg:top-10 lg:h-[26rem] lg:w-[26rem] lg:blur-[150px]" />

          {/* Magenta Glow */}
          <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#B93FC9]/8 blur-[110px] sm:h-60 sm:w-60 lg:h-[22rem] lg:w-[22rem] lg:blur-[140px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.025)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]" />
        </div>

        {/* ================= MAIN CONTAINER ================= */}

        <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:px-5 md:px-6 lg:space-y-14 lg:px-7 xl:px-8">
          {/* ================= WHAT IT IS ================= */}

          <div
            className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="60"
          >
            {/* ================= LEFT ================= */}

            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="900"
              data-aos-offset="60"
              className="mx-auto w-full max-w-xl lg:mx-0"
            >
              {/* Badge */}

              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/60 hover:bg-white/10 sm:px-5 sm:py-2 sm:text-[10px] md:text-xs md:tracking-[0.25em]">
                WHAT IT IS
              </span>

              {/* Heading */}

              <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-0.025em] sm:mt-6 sm:text-3xl md:text-4xl xl:text-5xl">
                <span className="text-white">
                  Security that works
                </span>

                <br />

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  before problems happen
                </span>
              </h2>

              {/* Gradient Line */}

              <div
                className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] sm:mt-5 sm:w-20"
                data-aos="zoom-in"
                data-aos-delay="180"
                data-aos-duration="650"
                data-aos-offset="50"
              />
            </div>

            {/* ================= RIGHT ================= */}

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="900"
              data-aos-offset="60"
              className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[22px] border border-[#2A2A30] bg-[#121212]/90 p-5 shadow-[0_15px_45px_rgba(0,0,0,.38)] backdrop-blur-xl sm:rounded-[24px] sm:p-6 lg:mx-0 lg:max-w-none lg:p-7"
            >
              {/* Cyan Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#29B6F0]/10 blur-[80px] sm:h-40 sm:w-40" />

              {/* Magenta Glow */}

              <div className="pointer-events-none absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-[#B93FC9]/10 blur-[70px] sm:h-32 sm:w-32" />

              {/* Content */}

              <p className="relative text-xs leading-6 text-[#D4D4D8] sm:text-sm sm:leading-7 md:text-base">
                Security and operations are the things most businesses ignore
                until something goes wrong. By then it is expensive. We help
                small and mid-size companies put the right protections in
                place before there is a problem, and respond fast when one
                shows up.
              </p>

              {/* Divider */}

              <div className="my-5 h-px bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:my-6" />

              <p className="relative text-xs leading-6 text-[#D4D4D8] sm:text-sm sm:leading-7 md:text-base">
                This is not enterprise theater. It is practical, sized-right
                security for the business you actually run.
              </p>
            </div>
          </div>

          {/* ================= PRACTICE ================= */}

          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150"
            data-aos-offset="60"
          >
           
          </div>
        </div>
      </section>
       <PracticeSection />
    </div>
  );
}

