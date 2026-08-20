"use client";

import { useEffect } from "react";
import App_layout from "@/component/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactform from "./contactform";

export default function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <App_layout>
      <section className="relative min-h-screen overflow-hidden bg-[#000000]">

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="absolute inset-0">

          {/* Image */}
          <div
            className="
              absolute inset-0
              scale-105
              bg-cover bg-center bg-no-repeat
            "
            style={{
              backgroundImage: "url('/contact/Contact.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Left Readability */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/10
              via-black/35
              to-black/20
            "
          />

          {/* Bottom Fade */}
          <div
            className="
              absolute inset-x-0 bottom-0
              h-[45%]
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
          />

          {/* BeaverTek Gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[#29B6F0]/10
              via-transparent
              to-[#B93FC9]/15
            "
          />
        </div>

        
        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            relative z-10
            mx-auto flex min-h-screen max-w-7xl
            items-center
            px-5 py-24
            sm:px-8 sm:py-28
            md:px-10
            lg:px-12 lg:py-32
          "
        >

          <div
            className="
              grid w-full items-center
              gap-12
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-16
              xl:gap-20
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
              className="relative z-20 w-full max-w-2xl"
            >

              {/* Label */}
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="200"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#2A2A30]
                  bg-[#121212]/70
                  px-4 py-2
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,.25)]
                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px] sm:text-xs
                    font-bold uppercase
                    tracking-[0.3em]
                    text-[#29B6F0]
                  "
                >
                  Get in Touch
                </span>
              </div>

              {/* Heading */}
              <h1
                data-aos="fade-right"
                data-aos-duration="1100"
                data-aos-delay="300"
                className="
                  mt-6
                  max-w-2xl
                  text-4xl
                  font-light
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Let's start with a

                <span
                  className="
                    mt-2 block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#B93FC9]
                    bg-clip-text
                    font-semibold
                    text-transparent
                  "
                >
                  conversation.
                </span>
              </h1>

              {/* Divider */}
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="450"
                className="mt-7 flex items-center gap-2"
              >
                <span
                  className="
                    h-[4px] w-16
                    rounded-full
                    bg-gradient-to-r
                    from-[#29B6F0]
                    to-[#3E7BD6]
                    sm:w-20
                  "
                />

                <span
                  className="
                    h-[4px] w-8
                    rounded-full
                    bg-gradient-to-r
                    from-[#7A4FD1]
                    to-[#B93FC9]
                    sm:w-10
                  "
                />
              </div>

              {/* Description */}
              <p
                data-aos="fade-right"
                data-aos-duration="1100"
                data-aos-delay="550"
                className="
                  mt-7 max-w-xl
                  text-base
                  leading-8
                  text-[#D4D4D8]
                  sm:text-lg
                  sm:leading-9
                "
              >
                Tell us what you're trying to build.
                A senior BeaverTek engineer
                will respond personally —
                usually within one business day.
                No call center.
                No sales funnel.
                Just a real conversation.
              </p>

            </div>

            {/* =================================================
                RIGHT GLASS CARD
            ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="250"
              className="relative z-20 w-full"
            >

              <div
                className="
                  group relative
                  overflow-hidden
                  rounded-[28px]
                  border border-[#2A2A30]
                  bg-[rgba(18,18,18,.72)]
                  p-5
                  shadow-[0_25px_80px_rgba(0,0,0,.60)]
                  backdrop-blur-2xl
                  transition-all duration-700
                  hover:-translate-y-2
                  hover:border-[#3E7BD6]
                  hover:shadow-[0_30px_90px_rgba(41,182,240,.16)]
                  sm:rounded-[32px]
                  sm:p-7
                  md:p-8
                  lg:p-9
                  xl:p-10
                "
              >

                {/* Top Gradient Light */}
                <div
                  className="
                    absolute left-[10%] right-[10%] top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#29B6F0]
                    to-transparent
                    opacity-80
                    shadow-[0_0_18px_#29B6F0]
                  "
                />

                {/* Cyan Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-20 -top-20
                    h-52 w-52
                    rounded-full
                    bg-[#29B6F0]/10
                    blur-[90px]
                    transition-all duration-700
                    group-hover:bg-[#29B6F0]/20
                  "
                />

                {/* Magenta Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -bottom-20 -left-20
                    h-52 w-52
                    rounded-full
                    bg-[#B93FC9]/10
                    blur-[90px]
                    transition-all duration-700
                    group-hover:bg-[#B93FC9]/20
                  "
                />

                <div className="relative space-y-6 sm:space-y-7 md:space-y-8">

                  {/* Header */}
                  <div
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="500"
                    className="flex items-center gap-4"
                  >

                    <div
                      className="
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        text-lg text-white
                        shadow-[0_0_30px_rgba(62,123,214,.30)]
                        transition-transform duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                        sm:h-14 sm:w-14
                        sm:text-xl
                      "
                    >
                      💬
                    </div>

                    <div>
                      <p
                        className="
                          text-[10px] sm:text-xs
                          uppercase
                          tracking-[0.28em]
                          text-[#29B6F0]
                        "
                      >
                        Conversation
                      </p>

                      <h3
                        className="
                          mt-1
                          text-xl
                          font-semibold
                          text-white
                          sm:text-2xl
                        "
                      >
                        Personal Response
                      </h3>
                    </div>

                  </div>

                  {/* Info */}
                  <div className="space-y-4 sm:space-y-5">

                    <div
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="650"
                      className="
                        rounded-2xl
                        border border-[#2A2A30]
                        bg-[#121212]/80
                        p-4
                        text-sm
                        leading-7
                        text-[#D4D4D8]
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-[#3E7BD6]
                        hover:bg-[#1A1A1E]
                        hover:shadow-[0_0_30px_rgba(62,123,214,.15)]
                        sm:p-5
                        sm:text-base
                      "
                    >
                      Senior engineers handle every inquiry personally.
                      Usually respond within 24 hours.
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            DECORATIVE CIRCLES
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute left-5 top-24
            hidden h-20 w-20
            rounded-full
            border border-[#3E7BD6]/20
            xl:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-20 right-8
            hidden h-24 w-24
            rounded-full
            border border-[#7A4FD1]/20
            xl:block
          "
        />

        {/* Bottom Line */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/60
            to-transparent
          "
        />

      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        data-aos-delay="300"
        data-aos-easing="ease-out-cubic"
        className="
          relative z-10
          transition-transform duration-700
          hover:-translate-y-1
        "
      >
        <Contactform />
      </div>

    </App_layout>
  );
}