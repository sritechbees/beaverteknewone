
"use client";

import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Zap,
  BarChart3,
  Code2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   GRADIENT
========================================================= */

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

/* =========================================================
   PILLARS
========================================================= */

const pillars = [
  {
    title: "Modernize",
    href: "/services/modernize/modernizehero",
    description:
      "Transform outdated technology into agile, scalable, and future-ready digital infrastructure.",
    icon: Zap,
  },
  {
    title: "See Your Data",
    href: "/services/seeyourdata/seeyourdatahero",
    description:
      "Analytics, dashboards, and reporting that drive better decisions with actionable insights.",
    icon: BarChart3,
  },
  {
    title: "Build Software",
    href: "/services/buildsoftware/herosection",
    description:
      "Build powerful, scalable, and user-focused applications that turn ideas into impactful digital experiences.",
    icon: Code2,
  },
  {
    title: "Stay Secure",
    href: "/services/staysecure/staysecureherosection",
    description:
      "Protect critical systems with proactive security, continuous monitoring, and reliable support.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   PILLAR ITEM
========================================================= */

function PillarItem({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const Icon = pillar.icon;

  return (
    <div
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-delay={index * 120}
      data-aos-duration="900"
      data-aos-offset="60"
      data-aos-easing="ease-out-cubic"
      className="w-full"
    >
      <Link href={pillar.href} className="group block">
        <article
          className="
            relative
            min-h-[185px]
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#E5E7EB]
            bg-white
            px-5
            py-5
            transition-all
            duration-500
            ease-out

            hover:-translate-y-1.5
            hover:border-transparent
            hover:shadow-[0_18px_45px_rgba(62,123,214,0.12)]

            sm:min-h-[195px]
            sm:px-6
            sm:py-6

            md:min-h-[205px]

            lg:min-h-[210px]
            lg:px-6
            lg:py-6

            xl:min-h-[215px]
            xl:px-7
          "
        >
          {/* =================================================
              PREMIUM GRADIENT BORDER
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              p-[1px]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
            style={{
              backgroundImage: gradient,
            }}
          >
            <div className="h-full w-full rounded-2xl bg-white" />
          </div>

          {/* =================================================
              TOP RIGHT GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-44
              w-44
              rounded-full
              bg-[#29B6F0]/10
              blur-[65px]
              opacity-0
              transition-all
              duration-700
              group-hover:scale-125
              group-hover:opacity-100
            "
          />

          {/* =================================================
              BOTTOM LEFT GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-44
              w-44
              rounded-full
              bg-[#B93FC9]/10
              blur-[65px]
              opacity-0
              transition-all
              duration-700
              group-hover:scale-125
              group-hover:opacity-100
            "
          />

          {/* =================================================
              TOP ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-5
              right-5
              top-0
              h-[2px]
              origin-left
              scale-x-0
              rounded-full
              transition-transform
              duration-700
              ease-out
              group-hover:scale-x-100

              sm:left-6
              sm:right-6

              xl:left-7
              xl:right-7
            "
            style={{
              backgroundImage: gradient,
            }}
          />

          {/* =================================================
              ICON + ARROW
          ================================================= */}

          <div className="relative z-10 flex items-center justify-between">
            {/* ICON */}

            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-[#E5E7EB]
                bg-[#F8FAFC]
                transition-all
                duration-500
                ease-out

                group-hover:scale-110
                group-hover:border-transparent
                group-hover:shadow-[0_10px_28px_rgba(41,182,240,0.16)]

                sm:h-12
                sm:w-12
              "
            >
              {/* Icon gradient background */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,rgba(41,182,240,.14),rgba(62,123,214,.10),rgba(122,79,209,.10),rgba(185,63,201,.14))",
                }}
              />

              <Icon
                className="
                  relative
                  z-10
                  h-[19px]
                  w-[19px]
                  text-[#3E7BD6]
                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:text-[#29B6F0]

                  sm:h-5
                  sm:w-5
                "
              />
            </div>

            {/* ARROW */}

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#E5E7EB]
                bg-white
                text-[#71717A]
                transition-all
                duration-500

                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:border-[#C7DDF5]
                group-hover:bg-[#F4FAFF]
                group-hover:text-[#29B6F0]
                group-hover:shadow-[0_8px_24px_rgba(41,182,240,0.14)]

                sm:h-10
                sm:w-10
              "
            >
              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-500

                  group-hover:scale-110
                "
              />
            </div>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h3
            className="
              relative
              z-10
              mt-5
              text-lg
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-[#17171A]
              transition-all
              duration-500

              group-hover:translate-x-1

              sm:mt-5
              sm:text-xl

              md:text-[21px]

              lg:text-[22px]

              xl:text-[23px]
            "
          >
            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                bg-clip-text
                text-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            >
              {pillar.title}
            </span>

            <span className="absolute left-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
              {pillar.title}
            </span>
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              relative
              z-10
              mt-3
              max-w-[430px]
              text-[13px]
              leading-6
              text-[#666B73]
              transition-all
              duration-500

              group-hover:translate-x-1
              group-hover:text-[#4B5058]

              sm:mt-3.5
              sm:text-sm
              sm:leading-6

              md:text-[15px]
              md:leading-6.5

              lg:text-[15px]
              lg:leading-7
            "
          >
            {pillar.description}
          </p>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-4
              flex
              items-center
              gap-2
              transition-all
              duration-500

              group-hover:translate-x-1
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#3E7BD6]
                transition-all
                duration-500

                group-hover:tracking-[0.25em]
                group-hover:text-[#7A4FD1]

                sm:text-[11px]
              "
            >
              Explore
            </span>

            <span
              className="
                h-px
                w-7
                bg-gradient-to-r
                from-[#3E7BD6]/40
                to-transparent
                transition-all
                duration-700

                group-hover:w-14
                group-hover:from-[#29B6F0]
                group-hover:via-[#7A4FD1]
                group-hover:to-[#B93FC9]
              "
            />

            <span
              className="
                text-[11px]
                text-[#B93FC9]
                transition-all
                duration-500

                group-hover:translate-x-1
                group-hover:text-[#29B6F0]
              "
            >
              →
            </span>
          </div>

          {/* =================================================
              LEFT GRADIENT ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-5
              left-0
              h-0
              w-[2px]
              rounded-full
              transition-all
              duration-500
              group-hover:h-[55%]

              sm:bottom-6
            "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)",
            }}
          />

          {/* =================================================
              BOTTOM GRADIENT ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              rounded-full
              transition-all
              duration-700
              group-hover:w-full
            "
            style={{
              backgroundImage: gradient,
            }}
          />
        </article>
      </Link>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FourPillars() {
  useEffect(() => {
    AOS.init({
      duration: 900,
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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-10
        sm:py-12
        md:py-14
        lg:py-16
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8

            sm:gap-10

            md:gap-12

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10

            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="950"
            data-aos-delay="80"
            className="
              flex
              flex-col
              p-1

              sm:p-2

              md:p-3

              lg:sticky
              lg:top-24
              lg:p-4

              xl:p-5
            "
          >
            {/* BADGE */}

            <span
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="120"
              className="
                inline-flex
                w-fit
                items-center
                rounded-full
                border
                border-[#DDE2E9]
                bg-[#F6F8FB]
                px-3.5
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#3E7BD6]
                shadow-sm
                transition-all
                duration-300

                hover:border-[#3E7BD6]
                hover:shadow-[0_6px_20px_rgba(62,123,214,.12)]

                sm:px-4
                sm:py-2
                sm:text-[11px]

                md:text-xs
              "
            >
              FOUR PILLARS
            </span>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="180"
              className="
                mt-4
                max-w-[560px]
                text-[2.15rem]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-[#15181D]
                transition-transform
                duration-500

                hover:translate-x-1

                sm:mt-5
                sm:text-[2.55rem]

                md:text-[2.9rem]

                lg:mt-5
                lg:text-[3.25rem]

                xl:text-[3.5rem]
              "
            >
              Four Things,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: gradient,
                }}
              >
                Done Well.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="260"
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6.5
                text-[#5F6670]
                transition-colors
                duration-500

                hover:text-[#414750]

                sm:mt-5
                sm:text-[15px]
                sm:leading-7

                md:text-base
                md:leading-7

                lg:text-[17px]
                lg:leading-7.5
              "
            >
              BeaverTek helps small and mid-size companies modernize their
              systems, make sense of their data, and build software that
              actually works.
            </p>

            {/* GRADIENT LINE */}

            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="340"
              className="
                mt-5
                h-[2px]
                w-14
                rounded-full
                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                transition-all
                duration-500

                hover:w-24

                sm:mt-6
                sm:w-16
              "
            />

            {/* SMALL INFO */}

            <div
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="420"
              className="
                mt-6
                hidden
                items-center
                gap-3

                lg:flex
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#D4D4D8]

                  xl:w-10
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#A1A1AA]

                  xl:text-[10px]
                  xl:tracking-[0.18em]
                "
              >
                Technology • Data • Software • Security
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT — PILLARS
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="120"
            className="
              grid
              grid-cols-1
              gap-4

              sm:gap-5

              md:grid-cols-2
              md:gap-5

              lg:gap-6

              xl:gap-7
            "
          >
            {/* 01 — MODERNIZE */}

            <PillarItem
              pillar={pillars[0]}
              index={0}
            />

            {/* 04 — STAY SECURE */}

            <PillarItem
              pillar={pillars[3]}
              index={3}
            />

            {/* 02 — SEE YOUR DATA */}

            <PillarItem
              pillar={pillars[1]}
              index={1}
            />

            {/* 03 — BUILD SOFTWARE */}

            <PillarItem
              pillar={pillars[2]}
              index={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
