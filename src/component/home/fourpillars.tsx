
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
      data-aos-delay={index * 130}
      data-aos-duration="900"
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

            border-b
            border-[#E5E7EB]

            px-1
            py-5

            transition-all
            duration-500

            sm:min-h-[200px]
            sm:px-2
            sm:py-6

            lg:min-h-[205px]
            lg:py-7
          "
        >
          {/* =================================================
              LARGE HOVER GLOW
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

              bg-[#29B6F0]/15

              blur-[65px]

              opacity-0

              transition-all
              duration-700

              group-hover:scale-[1.8]
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              -bottom-20
              -left-16

              h-36
              w-36

              rounded-full

              bg-[#B93FC9]/12

              blur-[60px]

              opacity-0

              transition-all
              duration-700

              group-hover:scale-[1.7]
              group-hover:opacity-100
            "
          />

          {/* =================================================
              TOP MINI GRADIENT LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0

              h-[2px]
              w-12

              rounded-full

              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

              opacity-50

              transition-all
              duration-700

              group-hover:w-32
              group-hover:opacity-100
            "
          />

          {/* =================================================
              NUMBER
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
                text-[10px]
                font-bold
                tracking-[0.2em]

                text-[#A1A1AA]

                transition-all
                duration-500

                group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                group-hover:bg-clip-text
                group-hover:text-transparent
                group-hover:tracking-[0.28em]

                sm:text-[11px]
              "
            >
              {pillar.number}
            </span>

            {/* ARROW */}

            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                bg-[#F7F9FC]

                transition-all
                duration-500

                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:bg-[#EEF7FF]

                group-hover:shadow-[0_8px_25px_rgba(41,182,240,0.25)]

                sm:h-8
                sm:w-8
              "
            >
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5

                  text-[#A1A1AA]

                  transition-all
                  duration-500

                  group-hover:text-[#29B6F0]
                  group-hover:scale-125

                  sm:h-4
                  sm:w-4
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

              mt-5

              flex
              items-center
              gap-3

              sm:mt-6
              sm:gap-3.5
            "
          >
            {/* ICON */}

            <div
              className="
                relative

                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-[11px]

                bg-[#F7F9FC]

                transition-all
                duration-500

                group-hover:-rotate-6
                group-hover:scale-110

                group-hover:bg-[#EEF7FF]

                group-hover:shadow-[0_10px_30px_rgba(41,182,240,0.22)]

                sm:h-11
                sm:w-11
              "
            >
              {/* ICON GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  rounded-[11px]

                  bg-[linear-gradient(135deg,rgba(41,182,240,.18),rgba(122,79,209,.12),rgba(185,63,201,.18))]

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

                  h-[18px]
                  w-[18px]

                  text-[#3E7BD6]

                  transition-all
                  duration-500

                  group-hover:scale-125
                  group-hover:text-[#29B6F0]

                  sm:h-5
                  sm:w-5
                "
              />
            </div>

            {/* TITLE */}

            <h3
              className="
                text-[17px]
                font-bold
                leading-tight
                tracking-[-0.02em]

                text-[#17171A]

                transition-all
                duration-500

                group-hover:translate-x-1

                group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                group-hover:bg-clip-text
                group-hover:text-transparent

                sm:text-[18px]
                md:text-[19px]
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

              mt-3

              max-w-[390px]

              text-[10px]
              leading-[1.65]

              text-[#71717A]

              transition-all
              duration-500

              group-hover:translate-x-1
              group-hover:text-[#52525B]

              sm:mt-3.5
              sm:text-[11px]

              md:text-xs
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
            "
          >
            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.18em]

                text-[#3E7BD6]

                transition-all
                duration-500

                group-hover:text-[#7A4FD1]
                group-hover:tracking-[0.24em]

                sm:text-[8px]
              "
            >
              Explore
            </span>

            <span
              className="
                h-px
                w-8

                bg-gradient-to-r
                from-[#3E7BD6]/30
                to-transparent

                transition-all
                duration-700

                group-hover:w-16
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

                group-hover:translate-x-2
                group-hover:text-[#29B6F0]
              "
            >
              →
            </span>
          </div>

          {/* =================================================
              HOVER SIDE ACCENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0

              h-0
              w-[3px]

              rounded-full

              bg-[linear-gradient(180deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

              transition-all
              duration-500

              group-hover:h-[75%]
            "
          />

          {/* =================================================
              HOVER BOTTOM GRADIENT
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
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
      mirror: false,
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
          BACKGROUND GLOW LEFT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10

          h-80
          w-80

          rounded-full

          bg-[#29B6F0]/7

          blur-[120px]
        "
      />

      {/* =====================================================
          BACKGROUND GLOW RIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0

          h-80
          w-80

          rounded-full

          bg-[#B93FC9]/7

          blur-[120px]
        "
      />

      {/* =====================================================
          CENTER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-72
          w-72

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#7A4FD1]/4

          blur-[120px]
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.018]

          [background-image:linear-gradient(#3E7BD6_1px,transparent_1px),linear-gradient(90deg,#3E7BD6_1px,transparent_1px)]

          [background-size:55px_55px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1180px]

          px-5

          sm:px-7
          md:px-9
          lg:px-10
        "
      >
        {/* ===================================================
            LEFT + RIGHT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1

            items-start

            gap-10

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-14

            xl:gap-20
          "
        >
          {/* =================================================
              LEFT HEADER
          ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="
              flex
              flex-col

              lg:sticky
              lg:top-24
            "
          >
            {/* BADGE */}

            <span
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="650"
              className="
                inline-flex
                w-fit
                items-center

                rounded-full

                border
                border-[#E5E7EB]

                bg-white

                px-3.5
                py-1.5

                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]

                text-[#3E7BD6]

                shadow-[0_4px_15px_rgba(62,123,214,0.04)]

                transition-all
                duration-300

                hover:border-[#3E7BD6]

                hover:shadow-[0_6px_25px_rgba(62,123,214,0.15)]

                sm:px-4
                sm:text-[9px]
              "
            >
              FOUR PILLARS
            </span>

            {/* TITLE */}

            <h2
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="850"
              className="
                mt-5

                max-w-[520px]

                font-extrabold

                text-[32px]

                leading-[1.04]
                tracking-[-0.045em]

                text-[#111113]

                sm:text-[40px]
                md:text-[46px]

                lg:text-[48px]
                xl:text-[52px]
              "
            >
              Four Things,{" "}
              <span
                className="
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
              data-aos-delay="280"
              data-aos-duration="850"
              className="
                mt-4

                max-w-[480px]

                text-[11px]
                leading-5

                text-[#71717A]

                sm:text-xs
                sm:leading-6

                md:text-sm
              "
            >
              BeaverTek helps small and mid-size companies modernize their
              systems, make sense of their data, and build software that
              actually works.
            </p>

            {/* GRADIENT LINE */}

            <div
              data-aos="zoom-in"
              data-aos-delay="380"
              data-aos-duration="700"
              className="
                mt-5

                h-[2px]
                w-14

                rounded-full

                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

                transition-all
                duration-500

                hover:w-24
              "
            />

            {/* SMALL INFO */}

            <div
              data-aos="fade-up"
              data-aos-delay="480"
              className="
                mt-8

                hidden

                items-center
                gap-3

                lg:flex
              "
            >
              <span
                className="
                  h-px
                  w-10

                  bg-[#D4D4D8]
                "
              />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]

                  text-[#A1A1AA]
                "
              >
                Technology • Data • Software • Security
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT — 2 TOP + 2 BOTTOM
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1

              gap-x-8

              md:grid-cols-2

              lg:gap-x-10
            "
          >
            {/* TOP LEFT — 01 */}

            <PillarItem
              pillar={pillars[0]}
              index={0}
            />

            {/* TOP RIGHT — 04 */}

            <PillarItem
              pillar={pillars[3]}
              index={3}
            />

            {/* BOTTOM LEFT — 02 */}

            <PillarItem
              pillar={pillars[1]}
              index={1}
            />

            {/* BOTTOM RIGHT — 03 */}

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

