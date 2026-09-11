
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
    number: "01",
    title: "Modernize",
    href: "/services/modernize/modernizehero",
    description:
      "Transform outdated technology into agile, scalable, and future-ready digital infrastructure.",
    icon: Zap,
  },
  {
    number: "02",
    title: "See Your Data",
    href: "/services/seeyourdata/seeyourdatahero",
    description:
      "Analytics, dashboards, and reporting that drive better decisions.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Build Software",
    href: "/services/buildsoftware/herosection",
    description:
      "Build powerful, scalable, and user-focused applications that turn ideas into impactful digital experiences.",
    icon: Code2,
  },
  {
    number: "04",
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
      data-aos-duration="850"
      data-aos-offset="50"
      data-aos-easing="ease-out-cubic"
      className="w-full"
    >
      <Link href={pillar.href} className="group block">
        <article
          className="
            relative
            min-h-[165px]
            w-full
            overflow-hidden
            border-b
            border-[#E1E5EB]
            px-1
            py-4
            transition-all
            duration-500

            sm:min-h-[175px]
            sm:px-2
            sm:py-5

            md:min-h-[180px]

            lg:min-h-[185px]
            lg:py-5
          "
        >
          {/* =================================================
              HOVER GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-32
              w-32
              rounded-full
              bg-[#29B6F0]/12
              blur-[55px]
              opacity-0
              transition-all
              duration-700
              group-hover:scale-[1.7]
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-16
              -left-12
              h-28
              w-28
              rounded-full
              bg-[#B93FC9]/10
              blur-[50px]
              opacity-0
              transition-all
              duration-700
              group-hover:scale-[1.6]
              group-hover:opacity-100
            "
          />

          {/* =================================================
              TOP GRADIENT LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-[2px]
              w-10
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              opacity-45
              transition-all
              duration-700
              group-hover:w-24
              group-hover:opacity-100
            "
          />

          {/* =================================================
              NUMBER + ARROW
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.18em]
                text-[#A1A1AA]
                transition-all
                duration-500

                group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                group-hover:bg-clip-text
                group-hover:text-transparent
                group-hover:tracking-[0.25em]

                sm:text-[10px]
                md:text-[11px]
              "
            >
              {pillar.number}
            </span>

            <div
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#F6F8FB]
                transition-all
                duration-500

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:bg-[#EEF7FF]
                group-hover:shadow-[0_7px_20px_rgba(41,182,240,0.20)]

                sm:h-7
                sm:w-7
              "
            >
              <ArrowUpRight
                className="
                  h-3
                  w-3
                  text-[#A1A1AA]
                  transition-all
                  duration-500

                  group-hover:scale-125
                  group-hover:text-[#29B6F0]

                  sm:h-3.5
                  sm:w-3.5
                "
              />
            </div>
          </div>

          {/* =================================================
              ICON + TITLE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-3.5
              flex
              items-center
              gap-2.5

              sm:mt-4
              sm:gap-3
            "
          >
            {/* ICON */}

            <div
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-[10px]
                bg-[#F6F8FB]
                transition-all
                duration-500

                group-hover:-rotate-6
                group-hover:scale-110
                group-hover:bg-[#EEF7FF]
                group-hover:shadow-[0_8px_24px_rgba(41,182,240,0.18)]

                sm:h-10
                sm:w-10
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[10px]
                  bg-[linear-gradient(135deg,rgba(41,182,240,.16),rgba(122,79,209,.10),rgba(185,63,201,.16))]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <Icon
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  text-[#3E7BD6]
                  transition-all
                  duration-500

                  group-hover:scale-125
                  group-hover:text-[#29B6F0]

                  sm:h-[18px]
                  sm:w-[18px]
                "
              />
            </div>

            {/* TITLE */}

            <h3
              className="
                text-sm
                font-bold
                leading-[1.2]
                tracking-[-0.015em]
                text-[#17171A]
                transition-all
                duration-500

                group-hover:translate-x-1

                group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                group-hover:bg-clip-text
                group-hover:text-transparent

                sm:text-[15px]
                md:text-base
              "
            >
              {pillar.title}
            </h3>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              relative
              z-10
              mt-2.5
              max-w-[370px]
              text-[11px]
              leading-5
              text-[#71717A]
              transition-all
              duration-500

              group-hover:translate-x-1
              group-hover:text-[#52525B]

              sm:mt-3
              sm:text-xs
              sm:leading-6

              md:text-[13px]

              lg:text-[13px]
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
              mt-3
              flex
              items-center
              gap-1.5

              sm:mt-3.5
              sm:gap-2
            "
          >
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#3E7BD6]
                transition-all
                duration-500

                group-hover:text-[#7A4FD1]
                group-hover:tracking-[0.23em]

                sm:text-[9px]
                md:text-[10px]
              "
            >
              Explore
            </span>

            <span
              className="
                h-px
                w-6
                bg-gradient-to-r
                from-[#3E7BD6]/30
                to-transparent
                transition-all
                duration-700

                group-hover:w-12
                group-hover:from-[#29B6F0]
                group-hover:via-[#7A4FD1]
                group-hover:to-[#B93FC9]
              "
            />

            <span
              className="
                text-[9px]
                text-[#B93FC9]
                transition-all
                duration-500

                group-hover:translate-x-1.5
                group-hover:text-[#29B6F0]

                sm:text-[10px]
              "
            >
              →
            </span>
          </div>

          {/* =================================================
              SIDE ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-0
              w-[2px]
              rounded-full
              bg-[linear-gradient(180deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              transition-all
              duration-500
              group-hover:h-[72%]
            "
          />

          {/* =================================================
              BOTTOM GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              transition-all
              duration-700
              group-hover:w-full
            "
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
      duration: 850,
      once: true,
      offset: 50,
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
        py-7
        sm:py-9
        md:py-10
        lg:py-8
      "
    >
      {/* =====================================================
          MAIN CONTAINER — FULL WIDTH MAX 7XL
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-5
          md:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-6

            sm:gap-7

            md:gap-8

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-8

            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-10
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="900"
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
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#3E7BD6]
                shadow-sm
                transition-all
                duration-300

                hover:border-[#3E7BD6]
                hover:shadow-[0_6px_20px_rgba(62,123,214,.12)]

                sm:px-3.5
                sm:py-1.5
                sm:text-[10px]

                md:text-[11px]
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
                mt-3.5
                max-w-[520px]
                text-[1.9rem]
                font-black
                leading-[1.06]
                tracking-[-0.035em]
                text-[#15181D]
                transition-transform
                duration-500

                hover:translate-x-1

                sm:mt-4
                sm:text-[2.25rem]

                md:text-[2.6rem]

                lg:mt-4
                lg:text-[3rem]

                xl:text-[3.25rem]
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
                mt-3.5
                max-w-xl
                text-[13px]
                leading-6
                text-[#5F6670]
                transition-colors
                duration-500

                hover:text-[#414750]

                sm:mt-4
                sm:text-sm

                md:text-[15px]

                lg:text-base
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
                mt-4
                h-[2px]
                w-12
                rounded-full
                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                transition-all
                duration-500

                hover:w-20

                sm:mt-5
                sm:w-14
              "
            />

            {/* SMALL INFO */}

            <div
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="420"
              className="
                mt-5
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
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#A1A1AA]

                  xl:tracking-[0.18em]
                "
              >
                Technology • Data • Software • Security
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT — PILLARS
              01 TOP LEFT
              04 TOP RIGHT
              02 BOTTOM LEFT
              03 BOTTOM RIGHT
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="120"
            className="
              grid
              grid-cols-1
              gap-x-6

              md:grid-cols-2

              lg:gap-x-8

              xl:gap-x-10
            "
          >
            {/* 01 */}

            <PillarItem
              pillar={pillars[0]}
              index={0}
            />

            {/* 04 */}

            <PillarItem
              pillar={pillars[3]}
              index={3}
            />

            {/* 02 */}

            <PillarItem
              pillar={pillars[1]}
              index={1}
            />

            {/* 03 */}

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

