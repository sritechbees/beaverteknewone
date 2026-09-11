
"use client";

import { useEffect } from "react";
import App_layout from "@/component/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactform from "./contactform";

export default function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 750,
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
            px-3 py-16
            sm:px-4 sm:py-20
            md:px-5 md:py-22
            lg:px-6 lg:py-24
            xl:px-8
          "
        >
          <div
            className="
              grid w-full items-center
              gap-8
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-10
              xl:gap-12
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="50"
              className="relative z-20 w-full max-w-2xl"
            >
              {/* Label */}

              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="100"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#2A2A30]
                  bg-[#121212]/70
                  px-3 py-1.5
                  backdrop-blur-xl
                  shadow-[0_8px_25px_rgba(0,0,0,.22)]
                  sm:px-4 sm:py-2
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#29B6F0]
                    sm:text-[10px]
                    md:text-[11px]
                  "
                >
                  Get in Touch
                </span>
              </div>

              {/* Heading */}

              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="180"
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
                Let's start with a

                <span
                  className="
                    mt-1.5 block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    to-[#B93FC9]
                    bg-clip-text
                    font-extrabold
                    text-transparent
                  "
                >
                  conversation.
                </span>
              </h1>

              {/* Divider */}

              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="280"
                className="mt-5 flex items-center gap-1.5"
              >
                <span
                  className="
                    h-[3px] w-12
                    rounded-full
                    bg-gradient-to-r
                    from-[#29B6F0]
                    to-[#3E7BD6]
                    sm:w-16
                  "
                />

                <span
                  className="
                    h-[3px] w-6
                    rounded-full
                    bg-gradient-to-r
                    from-[#7A4FD1]
                    to-[#B93FC9]
                    sm:w-8
                  "
                />
              </div>

              {/* Description */}

              <p
                data-aos="fade-right"
                data-aos-duration="800"
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
              data-aos-duration="850"
              data-aos-delay="180"
              className="relative z-20 w-full"
            >
              <div
                className="
                  group relative
                  overflow-hidden
                  rounded-[20px]
                  border border-[#2A2A30]
                  bg-[rgba(18,18,18,.72)]
                  p-4
                  shadow-[0_20px_60px_rgba(0,0,0,.55)]
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#3E7BD6]
                  hover:shadow-[0_25px_70px_rgba(41,182,240,.14)]
                  sm:rounded-[24px]
                  sm:p-5
                  md:p-6
                  lg:p-7
                  xl:p-8
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
                    shadow-[0_0_15px_#29B6F0]
                  "
                />

                {/* Cyan Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute -right-16 -top-16
                    h-40 w-40
                    rounded-full
                    bg-[#29B6F0]/10
                    blur-[75px]
                    transition-all duration-700
                    group-hover:bg-[#29B6F0]/20
                  "
                />

                {/* Magenta Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute -bottom-16 -left-16
                    h-40 w-40
                    rounded-full
                    bg-[#B93FC9]/10
                    blur-[75px]
                    transition-all duration-700
                    group-hover:bg-[#B93FC9]/20
                  "
                />

                <div className="relative space-y-5 sm:space-y-6">
                  {/* Header */}

                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="350"
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        text-base
                        text-white
                        shadow-[0_0_25px_rgba(62,123,214,.28)]
                        transition-transform duration-500
                        group-hover:scale-105
                        group-hover:rotate-3
                        sm:h-11 sm:w-11
                        md:h-12 md:w-12
                      "
                    >
                      💬
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#29B6F0]
                          sm:text-[10px]
                          md:text-[11px]
                        "
                      >
                        Conversation
                      </p>

                      <h3
                        className="
                          mt-0.5
                          text-[17px]
                          font-semibold
                          text-white
                          sm:text-lg
                          md:text-xl
                        "
                      >
                        Personal Response
                      </h3>
                    </div>
                  </div>

                  {/* Info */}

                  <div className="space-y-3 sm:space-y-4">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="700"
                      data-aos-delay="450"
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

                        rounded-xl
                        border border-[#2A2A30]
                        bg-[#121212]/80
                        p-3
                       
                        transition-all duration-400
                        hover:-translate-y-1
                        hover:border-[#3E7BD6]
                        hover:bg-[#1A1A1E]
                        hover:shadow-[0_0_25px_rgba(62,123,214,.13)]
                        sm:rounded-2xl
                        sm:p-4
                        
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
            hidden h-16 w-16
            rounded-full
            border border-[#3E7BD6]/20
            xl:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-16 right-8
            hidden h-20 w-20
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
        data-aos-duration="800"
        data-aos-delay="250"
        data-aos-easing="ease-out-cubic"
        className="
          relative z-10
          transition-transform duration-500
          hover:-translate-y-1
        "
      >
        <Contactform />
      </div>
    </App_layout>
  );
}
