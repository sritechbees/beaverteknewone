"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Cloud,
  BrainCircuit,
} from "lucide-react";

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    title: "Enterprise AI Solutions",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & Data Platforms",
    icon: Cloud,
  },
  {
    title: "Healthcare Technology",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Expert Support",
    icon: Sparkles,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-12
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Left Cyan Glow */}
        <div
          className="
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-[#29B6F0]/10
            blur-[110px]
          "
        />

        {/* Center Blue Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-[#3E7BD6]/8
            blur-[120px]
          "
        />

        {/* Right Magenta Glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#B93FC9]/10
            blur-[110px]
          "
        />

        {/* Soft Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_30%,rgba(41,182,240,.06),transparent_42%)]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-4
          sm:px-6
          lg:px-10
          xl:px-14
        "
      >
        {/* ===================================================
            MAIN HERO BOX
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[570px]
            max-w-[1350px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-[26px]
            border
            border-[#E7E7EA]
            bg-white
            px-5
            py-12
            shadow-[0_25px_80px_rgba(20,20,40,.07)]

            sm:min-h-[600px]
            sm:px-8
            sm:py-14

            lg:min-h-[640px]
            lg:px-10
          "
        >
          {/* =================================================
              HERO GLOWS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              top-0
              h-72
              w-72
              rounded-full
              bg-[#29B6F0]/8
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              top-10
              h-72
              w-72
              rounded-full
              bg-[#7A4FD1]/8
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-1/2
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#B93FC9]/8
              blur-[110px]
            "
          />

          {/* =================================================
              DECORATIVE ORB
          ================================================= */}

          <div
            data-aos="zoom-in"
            className="
              pointer-events-none
              absolute
              left-[7%]
              top-[17%]
              hidden
              h-12
              w-12
              rounded-full
              border
              border-[#29B6F0]/20
              bg-[#29B6F0]/5
              shadow-[0_0_30px_rgba(41,182,240,.12)]
              lg:block
            "
          >
            <div
              className="
                absolute
                inset-3
                rounded-full
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)]
              "
            />
          </div>

          {/* =================================================
              CENTER CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              mx-auto
              flex
              w-full
              max-w-[820px]
              flex-col
              items-center
              text-center
              lg:-translate-x-12
            "
          >
            {/* =================================================
                BADGE
            ================================================= */}

            <div
              data-aos="fade-down"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#DCDCE2]
                bg-white/80
                px-3.5
                py-1.5
                shadow-[0_5px_20px_rgba(0,0,0,.035)]
                backdrop-blur
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                  shadow-[0_0_10px_rgba(41,182,240,.45)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#606068]

                  sm:text-[10px]
                "
              >
                Let&apos;s Build Together
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                mt-6
                text-[36px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#09090B]

                sm:text-[44px]

                md:text-[52px]

                lg:text-[62px]

                xl:text-[70px]
              "
            >
              Need Senior
              <br />

              <span
                className="
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Technology Help?
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                mt-5
                max-w-[570px]
                text-[13px]
                leading-6
                text-[#707078]

                sm:text-sm
                sm:leading-6

                md:text-base
                md:leading-7
              "
            >
              Partner with experienced engineers to design, build and
              scale secure AI-powered enterprise solutions tailored to
              your business.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                mt-7
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3

                sm:w-auto
                sm:flex-row
              "
            >
              {/* Primary */}

              <Link
                href="/contact/contacthero"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_10px_28px_rgba(62,123,214,.20)]
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(185,63,201,.22)]

                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                View All Demo

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* Secondary */}

              <Link
                href="/customers/casestudyoverall"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#D8D8DE]
                  bg-white
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  text-[#18181B]
                  shadow-[0_7px_20px_rgba(0,0,0,.04)]
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[#3E7BD6]
                  hover:bg-[#FAFAFC]
                  hover:shadow-[0_12px_28px_rgba(62,123,214,.10)]

                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                View Case Studies

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    text-[#7A4FD1]
                    transition-transform
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>


          {/* =================================================
              BOTTOM FEATURE STRIP
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="
              relative
              z-20
              mt-10
              grid
              w-full
              max-w-[760px]
              grid-cols-2
              gap-2.5

              lg:absolute
              lg:bottom-7
              lg:left-1/2
              lg:mt-0
              lg:-translate-x-1/2

              sm:gap-3

              md:grid-cols-4
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={500 + index * 80}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E4E4E8]
                    bg-white/80
                    px-2.5
                    py-2.5
                    shadow-[0_7px_22px_rgba(0,0,0,.035)]
                    backdrop-blur
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#3E7BD6]/40
                    hover:shadow-[0_10px_28px_rgba(62,123,214,.08)]

                    sm:px-3
                    sm:py-3
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      shadow-[0_5px_15px_rgba(62,123,214,.15)]

                      sm:h-8
                      sm:w-8
                    "
                  >
                    <Icon
                      className="
                        h-3.5
                        w-3.5
                        text-white

                        sm:h-4
                        sm:w-4
                      "
                    />
                  </div>

                  {/* Title */}

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      leading-4
                      text-[#27272A]

                      sm:text-[10px]
                    "
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}