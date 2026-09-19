"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-16 sm:py-20 lg:py-16">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#29B6F0]/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#7A4FD1]/10 blur-[150px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[8px]
            border
            border-[#3E7BD6]/20
            bg-[#0A0A0A]
            shadow-[0_30px_80px_rgba(41,182,240,0.18)]
          "
        >

          {/* =================================================
              TOP IMAGE — SAME
          ================================================= */}

          <div className="group relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[390px]">

            <Image
              src="/home/whyexist.jpg"
              alt="Case Study"
              fill
              priority
              className="
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-105
              "
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/45" />

            {/* =================================================
                CASE STUDY TEXT
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                transition-all
                duration-700
                delay-300
                group-hover:opacity-100
              "
            >
              <div className="text-center">

                <h2
                  className="
                    translate-y-8
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    bg-clip-text
                    text-4xl
                    font-black
                    text-transparent
                    transition-all
                    duration-700
                    delay-500
                    group-hover:translate-y-0
                    sm:text-6xl
                    lg:text-7xl
                  "
                >
                  CASE STUDY
                </h2>

              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM CONTENT
          ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                border-b
                border-white/[0.08]
                bg-[#0D0D0F]
                px-5
                py-7
                sm:px-7
                sm:py-9
                lg:border-b-0
                lg:border-r
                lg:px-6
                lg:py-9
              "
            >

              {/* Left Glass Grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.025]
                  [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                  [background-size:35px_35px]
                "
              />

              {/* Left Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-24
                  top-1/2
                  h-64
                  w-64
                  -translate-y-1/2
                  rounded-full
                  bg-[#29B6F0]/10
                  blur-[100px]
                "
              />

              {/* Left Content */}

              <div className="relative space-y-4">

                {/* =================================================
                    ITEM 01
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:border-[#29B6F0]/35
                    hover:bg-white/[0.045]
                  "
                >

                  {/* Bottom Gradient */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-[#29B6F0]
                      to-[#3E7BD6]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex gap-3">

                    {/* Number */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#29B6F0]/25
                        bg-[#29B6F0]/5
                        text-[10px]
                        font-bold
                        text-[#29B6F0]
                      "
                    >
                      01
                    </div>

                    {/* Text */}

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#29B6F0]
                          sm:text-[11px]
                        "
                      >
                        Financial Services
                      </p>

                      <p className="mt-1.5 text-sm font-medium leading-6 text-[#D4D4D8]">
                        Payment Platform at Scale
                      </p>

                    </div>

                  </div>
                </div>

                {/* =================================================
                    ITEM 02
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:border-[#3E7BD6]/35
                    hover:bg-white/[0.045]
                  "
                >

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-[#3E7BD6]
                      to-[#7A4FD1]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#3E7BD6]/25
                        bg-[#3E7BD6]/5
                        text-[10px]
                        font-bold
                        text-[#3E7BD6]
                      "
                    >
                      02
                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#29B6F0]
                          sm:text-[11px]
                        "
                      >
                        Healthcare:
                      </p>

                      <p className="mt-1.5 text-sm font-medium leading-6 text-[#D4D4D8]">
                        AI in Real Hospitals
                      </p>

                    </div>

                  </div>
                </div>

                {/* =================================================
                    ITEM 03
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:border-[#7A4FD1]/35
                    hover:bg-white/[0.045]
                  "
                >

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-[#7A4FD1]
                      to-[#B93FC9]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#7A4FD1]/25
                        bg-[#7A4FD1]/5
                        text-[10px]
                        font-bold
                        text-[#7A4FD1]
                      "
                    >
                      03
                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#29B6F0]
                          sm:text-[11px]
                        "
                      >
                        Business Intelligence:
                      </p>

                      <p className="mt-1.5 text-sm font-medium leading-6 text-[#D4D4D8]">
                        Data that Drives Decisions
                      </p>

                    </div>

                  </div>
                </div>

              </div>

              {/* Left Bottom Line */}

              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#3E7BD6]/30 to-transparent" />

            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#0A0A0A]
                px-6
                py-9
                sm:px-9
                sm:py-10
                lg:px-14
                lg:py-12
              "
            >

              {/* Grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-60
                  bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
                  bg-[size:40px_40px]
                "
              />

              {/* Right Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  rounded-full
                  bg-[#7A4FD1]/10
                  blur-[120px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  left-1/3
                  h-72
                  w-72
                  rounded-full
                  bg-[#29B6F0]/8
                  blur-[120px]
                "
              />

              {/* Glass Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/[0.035]
                  via-transparent
                  to-[#7A4FD1]/[0.025]
                "
              />

              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}

              <div className="relative">

                {/* Label */}

                <div className="mb-5 flex items-center gap-3">

                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A0A0A8] sm:text-[11px]">
                    Digital Transformation
                  </span>

                </div>

                {/* =================================================
                    SPLIT TITLE
                ================================================= */}

                <h2
                  className="
                    max-w-3xl
                    text-3xl
                    font-extrabold
                    leading-[1.08]
                    tracking-tight
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[48px]
                  "
                >
                  {/* WHITE */}

                  <span className="text-white">
                    Transforming
                  </span>

                  <br />

                  {/* BEAVERTEK GRADIENT */}

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
                    Business with AI
                  </span>
                </h2>

                {/* Gradient Accent */}

                <div className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[#D4D4D8]
                    sm:text-base
                    sm:leading-8
                  "
                >
                  We build secure AI solutions for healthcare, finance,
                  enterprise reporting and digital transformation with
                  scalable modern technology.
                </p>

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

                  {/* View Case Studies */}

                  <Link href="/customers/casestudyoverall">
                    <button
                      className="
                        group
                        relative
                        w-full
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#3E7BD6]/40
                        bg-white/[0.025]
                        px-7
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:border-[#29B6F0]/60
                        hover:bg-white/[0.06]
                        sm:w-auto
                        sm:px-8
                      "
                    >

                      {/* Button Shine */}

                      <span
                        className="
                          absolute
                          inset-0
                          -translate-x-full
                          bg-gradient-to-r
                          from-transparent
                          via-white/[0.06]
                          to-transparent
                          transition-transform
                          duration-700
                          group-hover:translate-x-full
                        "
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">

                        View Case Studies

                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m-6-6 6 6-6 6"
                          />
                        </svg>

                      </span>

                    </button>
                  </Link>

                  {/* Contact */}

                  <Link href="/contact/contacthero">
                    <button
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/[0.10]
                        bg-white/[0.025]
                        px-7
                        py-3
                        font-semibold
                        text-[#D4D4D8]
                        transition-all
                        duration-300
                        hover:border-[#29B6F0]/40
                        hover:bg-white/[0.06]
                        hover:text-white
                        sm:w-auto
                        sm:px-8
                      "
                    >
                      Contact Us
                    </button>
                  </Link>

                </div>

                {/* =================================================
                    BOTTOM GLASS LINE
                ================================================= */}

                <div className="mt-9 flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6]" />

                  <span className="h-px flex-1 bg-white/[0.08]" />

                  <span className="h-[2px] w-10 bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9]" />

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}