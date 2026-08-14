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
      <section className="relative min-h-screen overflow-hidden bg-black">

        {/* =====================================================
            FULL HERO BACKGROUND IMAGE
        ===================================================== */}

        <div className="absolute inset-0">

          {/* Background Image */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              scale-105
              transition-transform
              duration-[2000ms]
            "
            style={{
              backgroundImage: "url('/contact/Contact.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Left Dark Gradient - Text Readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/20
              via-black/40
              to-black/10
            "
          />

          {/* Bottom Dark Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-black
              via-black/60
              to-transparent
            "
          />

          {/* BeaverTek Gradient Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#29B6F0]/10
              via-transparent
              to-[#B93FC9]/15
            "
          />

        </div>

        {/* =====================================================
            BACKGROUND GLOW EFFECTS
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Cyan Glow */}
          <div
            data-aos="zoom-in"
            className="
              absolute
              -left-40
              -top-40
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#29B6F0]/15
              blur-[140px]
              sm:h-[450px]
              sm:w-[450px]
            "
          />

          {/* Magenta Glow */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="
              absolute
              -bottom-40
              -right-40
              h-[380px]
              w-[380px]
              rounded-full
              bg-[#B93FC9]/15
              blur-[150px]
              sm:h-[450px]
              sm:w-[450px]
            "
          />

          {/* Center Violet Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[250px]
              w-[250px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#7A4FD1]/10
              blur-[130px]
              sm:h-[320px]
              sm:w-[320px]
            "
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

        </div>

        {/* =====================================================
            MAIN HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-5
            py-20
            sm:px-8
            sm:py-24
            md:px-10
            lg:px-12
            lg:py-28
          "
        >

          <div
            className="
              grid
              w-full
              items-center
              gap-10
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-16
              xl:gap-20
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              data-aos="fade-right"
              className="
                relative
                z-20
                w-full
                max-w-2xl
              "
            >

              {/* Top Label */}

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-2
                  backdrop-blur-xl
                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#29B6F0]
                    sm:text-xs
                  "
                >
                  Get in Touch
                </span>
              </div>

              {/* Heading */}

              <h1
                data-aos="fade-up"
                data-aos-delay="180"
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
                    mt-2
                    block
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

              {/* Decorative Divider */}

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="mt-7 flex items-center gap-2"
              >
                <span
                  className="
                    h-[4px]
                    w-16
                    rounded-full
                    bg-gradient-to-r
                    from-[#29B6F0]
                    to-[#3E7BD6]
                    sm:w-20
                  "
                />

                <span
                  className="
                    h-[4px]
                    w-8
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
                data-aos="fade-up"
                data-aos-delay="400"
                className="
                  mt-7
                  max-w-xl
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
                RIGHT SIDE
            ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="
                relative
                z-20
                w-full
              "
            >

              {/* Glass Container */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-black/45
                  p-5
                  shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                  backdrop-blur-2xl
                  sm:rounded-[32px]
                  sm:p-7
                  md:p-8
                  lg:p-9
                  xl:p-10
                "
              >

                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#29B6F0]/10
                    blur-[90px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#B93FC9]/10
                    blur-[90px]
                  "
                />

                <div className="relative space-y-6 sm:space-y-7 md:space-y-8">

                  {/* =================================================
                      ICON HEADER
                  ================================================= */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-4"
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        text-lg
                        text-white
                        shadow-[0_0_30px_rgba(62,123,214,.30)]
                        sm:h-14
                        sm:w-14
                        sm:text-xl
                      "
                    >
                      💬
                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.28em]
                          text-[#29B6F0]
                          sm:text-xs
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

                  {/* =================================================
                      INFO BOXES
                  ================================================= */}

                  <div className="space-y-4 sm:space-y-5">

                    {/* Box 1 */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#121212]/80
                        p-4
                        text-sm
                        leading-7
                        text-[#D4D4D8]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#3E7BD6]/60
                        hover:shadow-[0_0_30px_rgba(62,123,214,.15)]
                        sm:p-5
                        sm:text-base
                      "
                    >
                      Senior engineers handle every inquiry personally.
                    </div>

                    {/* Box 2 */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#121212]/80
                        p-4
                        text-sm
                        leading-7
                        text-[#D4D4D8]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#3E7BD6]/60
                        hover:shadow-[0_0_30px_rgba(62,123,214,.15)]
                        sm:p-5
                        sm:text-base
                      "
                    >
                      Usually respond within 24 hours.
                    </div>

                    {/* Gradient Box */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        p-5
                        text-sm
                        font-semibold
                        leading-7
                        text-white
                        shadow-[0_0_40px_rgba(62,123,214,.25)]
                        sm:p-6
                        sm:text-base
                      "
                    >
                      No call center.
                      <br />
                      No sales pipeline.
                      <br />
                      Just engineering conversation.
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            DECORATIVE ELEMENTS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-5
            top-24
            hidden
            h-20
            w-20
            rounded-full
            border
            border-[#3E7BD6]/20
            xl:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-20
            right-8
            hidden
            h-24
            w-24
            rounded-full
            border
            border-[#7A4FD1]/20
            xl:block
          "
        />

        {/* Bottom Gradient Line */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/50
            to-transparent
          "
        />

      </section>
     <div
  data-aos="fade-up"
  data-aos-delay="300"
  data-aos-duration="1000"
  data-aos-easing="ease-out-cubic"
  className="relative z-10  transition-transform duration-700 hover:-translate-y-1"
>
  <Contactform />
</div>
    </App_layout>
  );
}