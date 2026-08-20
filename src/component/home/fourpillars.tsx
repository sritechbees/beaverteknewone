"use client";

import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================================
   GRADIENT
========================================================= */

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

/* =========================================================
   PILLARS
========================================================= */

const pillars = [
  {
    number: "01",
    title: "Modernize",
    href: "/services/modernize/modernizehero",
    description:
      "Bring legacy systems and infrastructure into the modern stack.",
    icon: "⚡",
  },

  {
    number: "02",
    title: "See Your Data",
    href: "/services/seeyourdata/seeyourdatahero",
    description:
      "Analytics, dashboards, and reporting that drive better decisions.",
    icon: "◈",
  },

  {
    number: "03",
    title: "Build Software",
    href: "/services/buildsoftware/herosection",
    description:
      "Custom applications, web and mobile, from concept to launch.",
    icon: "⌘",
  },

  {
    number: "04",
    title: "Stay Secure",
    href: "/services/staysecure/staysecureherosection",
    description:
      "Keep digital operations running, protected, and monitored.",
    icon: "◇",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FourPillars() {
  /* =======================================================
     AOS
  ======================================================= */

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-16 sm:py-20">

      {/* ===================================================
          BACKGROUND LIGHT
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B93FC9]/15
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#29B6F0]/10
          blur-[130px]
        "
      />

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >

          {/* BADGE */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#2A2A30]
              bg-[#121212]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#29B6F0]
              sm:text-sm
            "
          >
            FOUR PILLARS
          </span>

          {/* HEADING */}

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.15]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Four Things,

            <span
              className="
                ml-2
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Done Well.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              font-normal
              leading-7
              text-[#A0A0A8]
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            BeaverTek helps small and mid-size companies modernize their
            systems, make sense of their data, and build software that
            actually works.
          </p>

        </div>

        {/* =================================================
            SWIPER
        ================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative"
        >

          <Swiper
            modules={[Autoplay, Pagination]}

            /* -----------------------------------------------
               BASIC
            ----------------------------------------------- */

            loop={true}
            centeredSlides={true}

            slidesPerView={1}
            spaceBetween={20}

            speed={1100}

            /* -----------------------------------------------
               AUTO SLIDE
            ----------------------------------------------- */

            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}

            /* -----------------------------------------------
               PAGINATION
            ----------------------------------------------- */

            pagination={{
              clickable: true,
            }}

            /* -----------------------------------------------
               RESPONSIVE
            ----------------------------------------------- */

            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}

            className="!overflow-visible !pb-14"
          >

            {/* =================================================
                CARDS
            ================================================= */}

            {pillars.map((pillar) => (
              <SwiperSlide key={pillar.number}>

                <Link
                  href={pillar.href}
                  className="group block h-full"
                >

                  {/* =========================================
                      CARD
                  ========================================= */}

                  <div
                    className="
                      relative
                      min-h-[390px]
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-[#2A2A30]
                      bg-[#121212]
                      p-6
                      transform-gpu

                      transition-all
                      duration-[1000ms]
                      ease-[cubic-bezier(.22,1,.36,1)]

                      /* LEFT CARD */

                      [.swiper-slide-prev_&]:scale-[0.94]
                      [.swiper-slide-prev_&]:rotate-y-[10deg]
                      [.swiper-slide-prev_&]:rotate-x-[2deg]
                      [.swiper-slide-prev_&]:opacity-80
                      [.swiper-slide-prev_&]:brightness-75

                      [.swiper-slide-prev_&]:shadow-[-18px_25px_50px_rgba(0,0,0,.50)]

                      /* RIGHT CARD */

                      [.swiper-slide-next_&]:scale-[0.94]
                      [.swiper-slide-next_&]:rotate-y-[-10deg]
                      [.swiper-slide-next_&]:rotate-x-[2deg]
                      [.swiper-slide-next_&]:opacity-80
                      [.swiper-slide-next_&]:brightness-75

                      [.swiper-slide-next_&]:shadow-[18px_25px_50px_rgba(0,0,0,.50)]

                      /* CENTER CARD */

                      [.swiper-slide-active_&]:z-20
                      [.swiper-slide-active_&]:scale-[1.04]
                      [.swiper-slide-active_&]:rotate-y-0
                      [.swiper-slide-active_&]:rotate-x-0
                      [.swiper-slide-active_&]:translate-z-[40px]
                      [.swiper-slide-active_&]:border-[#3E7BD6]
                      [.swiper-slide-active_&]:opacity-100
                      [.swiper-slide-active_&]:brightness-110

                      [.swiper-slide-active_&]:shadow-[0_0_0_1px_rgba(41,182,240,.15),0_25px_60px_rgba(41,182,240,.18),0_40px_90px_rgba(122,79,209,.18),0_0_100px_rgba(185,63,201,.08)]

                      group-hover:border-[#3E7BD6]
                    "
                  >

                    {/* =======================================
                        TOP GRADIENT LIGHT
                    ======================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-[10%]
                        right-[10%]
                        top-0
                        h-[2px]
                        rounded-full

                        bg-[linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,#B93FC9,transparent)]

                        opacity-0
                        shadow-[0_0_20px_rgba(41,182,240,.7),0_0_35px_rgba(185,63,201,.4)]

                        transition-opacity
                        duration-700

                        [.swiper-slide-active_&]:opacity-100
                      "
                    />

                    {/* =======================================
                        CARD GLOW
                    ======================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-60
                        w-60
                        rounded-full
                        bg-[#29B6F9]/10
                        blur-[80px]

                        opacity-0
                        transition-opacity
                        duration-700

                        [.swiper-slide-active_&]:opacity-100
                      "
                    />

                    {/* =======================================
                        ICON
                    ======================================= */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#2A2A30]
                        bg-[#0A0A0A]

                        transform-gpu

                        transition-all
                        duration-700

                        [.swiper-slide-prev_&]:translate-z-[20px]

                        [.swiper-slide-next_&]:translate-z-[20px]

                        [.swiper-slide-active_&]:translate-z-[35px]
                        [.swiper-slide-active_&]:scale-110
                        [.swiper-slide-active_&]:border-[#3E7BD6]

                        [.swiper-slide-active_&]:bg-[linear-gradient(145deg,rgba(41,182,240,.14),rgba(122,79,209,.10),rgba(185,63,201,.12))]

                        [.swiper-slide-active_&]:shadow-[0_0_20px_rgba(41,182,240,.20),0_0_35px_rgba(185,63,201,.12)]
                      "
                    >

                      <span
                        className="
                          text-2xl
                          font-bold
                          bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                          bg-clip-text
                          text-transparent
                        "
                      >
                        {pillar.icon}
                      </span>

                    </div>

                    {/* =======================================
                        NUMBER
                    ======================================= */}

                    <div className="relative z-10 mt-7">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                          px-3
                          py-1
                          text-xs
                          font-bold
                          tracking-wide
                          text-white
                          shadow-[0_0_18px_rgba(41,182,240,.25)]
                        "
                      >
                        {pillar.number}
                      </span>

                    </div>

                    {/* =======================================
                        TITLE
                    ======================================= */}

                    <h3
                      className="
                        relative
                        z-10
                        mt-5
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white

                        transition-all
                        duration-500

                        [.swiper-slide-active_&]:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        [.swiper-slide-active_&]:bg-clip-text
                        [.swiper-slide-active_&]:text-transparent
                      "
                    >
                      {pillar.title}
                    </h3>

                    {/* =======================================
                        DESCRIPTION
                    ======================================= */}

                    <p
                      className="
                        relative
                        z-10
                        mt-3
                        flex-grow
                        text-sm
                        leading-6
                        text-[#A0A0A8]
                      "
                    >
                      {pillar.description}
                    </p>

                    {/* =======================================
                        CTA
                    ======================================= */}

                    <div
                      className="
                        relative
                        z-10
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#29B6F0]
                      "
                    >
                      <span>Learn More</span>

                      <span
                        className="
                          text-base
                          text-[#B93FC9]
                          transition-transform
                          duration-500
                          group-hover:translate-x-2
                        "
                      >
                        →
                      </span>
                    </div>

                  </div>

                </Link>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}