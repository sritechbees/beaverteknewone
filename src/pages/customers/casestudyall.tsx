"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function Casestudyall() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  // =====================================================
  // SMOOTH SCROLL TO CASE STUDY CONTENT
  // =====================================================
 const scrollToCaseStudy = () => {
  const section = document.getElementById("casestudyoverall");

  if (section) {
    const offset = 50; // extra space from top
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};


  

  return (
    <section
      className="
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black

        h-[56vh]
        min-h-[480px]

        sm:h-[58vh]
        sm:min-h-[500px]

        md:h-[60vh]
        md:min-h-[520px]

        lg:h-[62vh]
        lg:min-h-[540px]
      "
    >
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/home/case study.jpg"
          alt="Enterprise Software Development"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Main Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Center Readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),rgba(0,0,0,0.72)_78%)]" />

        {/* BeaverTek Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/10 via-transparent to-[#B93FC9]/15" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/40 to-transparent sm:h-44" />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/65 to-transparent sm:h-36" />
      </div>

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          COLOR GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-44
          top-1/4
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#29B6F0]/8
          blur-[150px]
          sm:h-[400px]
          sm:w-[400px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-44
          bottom-1/4
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#B93FC9]/8
          blur-[160px]
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-center
          px-5
          py-20
          sm:px-8
          sm:py-24
          md:px-10
          md:py-28
          lg:px-12
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[950px]
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="
              max-w-[900px]
              text-[34px]
              font-extrabold
              leading-[1.07]
              tracking-[-0.035em]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
              xl:text-[66px]
            "
          >
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Building
            </span>

            <span className="mt-1 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
              Intelligent Software
            </span>

            <span className="mt-1 block text-white">
              For Real Businesses
            </span>
          </h1>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              sm:mt-6
              md:mt-7
            "
          >
            <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] sm:w-16" />

            <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-9" />

            <span className="h-[3px] w-2 rounded-full bg-[#B93FC9]" />
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              mt-6
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-7
              sm:w-auto
              sm:flex-row
              md:mt-8
            "
          >
            {/* =================================================
                PRIMARY - SMOOTH SCROLL
            ================================================= */}

           <button
  type="button"
  onClick={scrollToCaseStudy}
  className="
    group
    inline-flex
    w-full
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-[#29B6F0]
    via-[#3E7BD6]
    to-[#B93FC9]
    px-6
    py-3
    text-sm
    font-semibold
    text-white
    shadow-[0_0_30px_rgba(62,123,214,0.25)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-[0_0_45px_rgba(185,63,201,0.35)]
    sm:w-auto
    sm:px-7
    sm:py-3.5
  "
>
  Start Your Project

  <ArrowRight
    className="
      ml-2.5
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</button>

            {/* =================================================
                SECONDARY
            ================================================= */}

            <Link
              href="/services/serviceshero"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#29B6F0]/60
                hover:bg-black/45
                sm:w-auto
                sm:px-7
                sm:py-3.5
              "
            >
              Explore Services

              <ArrowRight
                className="
                  ml-2.5
                  h-4
                  w-4
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              />
            </Link>
          </div>

          {/* =================================================
              BOTTOM ACCENT
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="420"
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3
              sm:mt-8
              sm:gap-4
            "
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#29B6F0] sm:w-14" />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/45
                sm:text-[9px]
                sm:tracking-[0.28em]
                md:text-[10px]
              "
            >
              Enterprise Software Development
            </span>

            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#B93FC9] sm:w-14" />
          </div>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE CORNER ELEMENTS
      ===================================================== */}

      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="
          pointer-events-none
          absolute
          left-5
          top-20
          hidden
          h-16
          w-16
          rounded-full
          border
          border-[#3E7BD6]/20
          lg:block
          xl:left-8
          xl:top-24
          xl:h-20
          xl:w-20
        "
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="700"
        className="
          pointer-events-none
          absolute
          bottom-10
          right-6
          hidden
          h-20
          w-20
          rounded-full
          border
          border-[#7A4FD1]/20
          lg:block
          xl:bottom-14
          xl:right-10
          xl:h-24
          xl:w-24
        "
      />

      {/* =====================================================
          TOP RIGHT DOTS
      ===================================================== */}

      <div className="pointer-events-none absolute right-[7%] top-10 hidden grid-cols-4 gap-2.5 opacity-25 lg:grid">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#29B6F0]"
          />
        ))}
      </div>

     </section>
  );
}