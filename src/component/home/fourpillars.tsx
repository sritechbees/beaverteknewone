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
   CARD
========================================================= */

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const Icon = pillar.icon;

  const aosAnimations = [
    "zoom-in-up",
    "fade-right",
    "flip-up",
    "fade-left",
  ];

  return (
    <div
      data-aos={aosAnimations[index]}
      data-aos-delay={index * 120}
      data-aos-duration="850"
      data-aos-easing="ease-out-cubic"
      className="w-full"
    >
      <Link href={pillar.href} className="group block">
        <article
          className="
            relative
            min-h-[128px]
            w-full
            overflow-hidden
            rounded-[18px]

            border
            border-[#E5E7EB]

            bg-white

            px-4
            py-3.5

            shadow-[0_8px_25px_rgba(0,0,0,0.025)]

            transition-all
            duration-500
            ease-out

            hover:-translate-y-2
            hover:border-[#3E7BD6]/50
            hover:bg-[#FCFDFF]
            hover:shadow-[0_18px_45px_rgba(62,123,214,0.10)]

            sm:min-h-[140px]
            sm:px-5
            sm:py-4

            md:min-h-[145px]

            lg:min-h-[150px]
          "
        >
          {/* =================================================
              SOFT GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_100%_0%,rgba(41,182,240,.12),transparent_36%),radial-gradient(circle_at_0%_100%,rgba(185,63,201,.08),transparent_40%)]

              opacity-0

              transition-opacity
              duration-700

              group-hover:opacity-100
            "
          />

          {/* =================================================
              TOP GRADIENT LINE
          ================================================= */}

          <div
            className="
              absolute
              left-[18%]
              right-[18%]
              top-0

              h-[2px]

              rounded-full

              bg-[linear-gradient(90deg,transparent,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9,transparent)]

              opacity-40

              transition-all
              duration-500

              group-hover:left-[5%]
              group-hover:right-[5%]
              group-hover:opacity-100
            "
          />

          {/* =================================================
              TOP RIGHT GLOW
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

              bg-[#29B6F0]/10

              blur-[45px]

              opacity-0

              transition-all
              duration-700

              group-hover:scale-150
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
              -bottom-16
              -left-16

              h-32
              w-32

              rounded-full

              bg-[#B93FC9]/8

              blur-[45px]

              opacity-0

              transition-all
              duration-700

              group-hover:scale-150
              group-hover:opacity-100
            "
          />

          {/* =================================================
              SMALL FLOATING DOT
          ================================================= */}

          <span
            className="
              pointer-events-none
              absolute
              right-5
              top-5

              h-1.5
              w-1.5

              rounded-full

              bg-[#29B6F0]

              opacity-20

              shadow-[0_0_12px_#29B6F0]

              transition-all
              duration-500

              group-hover:scale-150
              group-hover:opacity-100
            "
          />

          {/* =================================================
              HEADER
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
            {/* NUMBER */}

            <span
              className="
                rounded-full

                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

                px-2
                py-[3px]

                text-[8px]
                font-bold
                tracking-[0.14em]
                text-white

                shadow-[0_4px_12px_rgba(62,123,214,0.15)]

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:shadow-[0_6px_18px_rgba(62,123,214,0.25)]

                sm:px-2.5
                sm:py-1
                sm:text-[9px]
              "
            >
              {pillar.number}
            </span>

            {/* ARROW */}

            <ArrowUpRight
              className="
                h-3.5
                w-3.5

                text-[#A1A1AA]

                transition-all
                duration-500

                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#3E7BD6]

                sm:h-4
                sm:w-4
              "
            />
          </div>

          {/* =================================================
              ICON + TITLE
          ================================================= */}

          <div
            className="
              relative
              z-10

              mt-3

              flex
              items-center
              gap-2.5

              sm:mt-3.5
              sm:gap-3
            "
          >
            {/* ICON */}

            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center

                rounded-[9px]

                border
                border-[#E5E7EB]

                bg-[#F7F9FC]

                transition-all
                duration-500

                group-hover:rotate-3
                group-hover:scale-105
                group-hover:border-[#3E7BD6]/40
                group-hover:bg-[#EEF7FF]
                group-hover:shadow-[0_6px_18px_rgba(41,182,240,0.12)]

                sm:h-9
                sm:w-9
              "
            >
              <Icon
                className="
                  h-3.5
                  w-3.5

                  text-[#3E7BD6]

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:text-[#29B6F0]

                  sm:h-4
                  sm:w-4
                "
              />
            </div>

            {/* TITLE */}

            <h3
              className="
                text-[14px]
                font-semibold
                leading-tight
                tracking-tight

                text-[#17171A]

                transition-all
                duration-500

                group-hover:translate-x-0.5

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

              mt-2

              max-w-[380px]

              text-[10px]
              leading-[1.55]

              text-[#71717A]

              transition-colors
              duration-500

              group-hover:text-[#52525B]

              sm:text-[11px]
              sm:leading-[1.6]

              md:text-xs
            "
          >
            {pillar.description}
          </p>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div
            className="
              relative
              z-10

              mt-2.5

              flex
              items-center
              gap-2

              sm:mt-3
            "
          >
            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.15em]

                text-[#3E7BD6]

                transition-colors
                duration-300

                group-hover:text-[#7A4FD1]

                sm:text-[8px]
              "
            >
              Explore
            </span>

            <span
              className="
                h-px
                flex-1

                bg-gradient-to-r
                from-[#3E7BD6]/25
                to-transparent

                transition-all
                duration-500

                group-hover:from-[#29B6F0]/60
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
              INNER HOVER BORDER
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-[18px]

              border
              border-transparent

              transition-all
              duration-500

              group-hover:border-[#3E7BD6]/15
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
      offset: 65,
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

        py-9

        sm:py-11
        md:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          BACKGROUND GLOW - LEFT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-10

          h-64
          w-64

          rounded-full

          bg-[#29B6F0]/7

          blur-[110px]

          sm:h-80
          sm:w-80
        "
      />

      {/* =====================================================
          BACKGROUND GLOW - RIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-0

          h-64
          w-64

          rounded-full

          bg-[#B93FC9]/6

          blur-[110px]

          sm:h-80
          sm:w-80
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

          h-60
          w-60

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#7A4FD1]/4

          blur-[110px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
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
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full

          max-w-[1180px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            CENTER TOP CONTENT
        =================================================== */}

        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="
            mx-auto

            flex
            max-w-[680px]

            flex-col
            items-center

            text-center
          "
        >
          {/* BADGE */}

          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="650"
            className="
              inline-flex
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
              hover:shadow-[0_6px_20px_rgba(62,123,214,0.10)]

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
            data-aos-duration="800"
            className="
              mt-4

              font-extrabold

              text-[30px]

              leading-[1.04]
              tracking-[-0.04em]

              text-[#111113]

              sm:text-[38px]
              md:text-[44px]
              lg:text-[50px]
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
            data-aos-duration="800"
            className="
              mt-3

              max-w-[600px]

              text-[11px]
              leading-5

              text-[#71717A]

              sm:mt-4
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
            className="
              mt-4

              h-[2px]
              w-14

              rounded-full

              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

              transition-all
              duration-500

              hover:w-20

              sm:mt-5
            "
          />
        </div>

        {/* ===================================================
            FOUR CARD LAYOUT
        =================================================== */}

        <div
          className="
            mx-auto

            mt-9

            grid
            w-full

            max-w-[1000px]

            grid-cols-1

            gap-4

            sm:mt-10
            sm:gap-5

            lg:grid-cols-2
            lg:gap-x-14
            lg:gap-y-5

            xl:gap-x-20
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-4

              sm:gap-5
            "
          >
            {/* 01 */}

            <div className="w-full">
              <PillarCard pillar={pillars[0]} index={0} />
            </div>

            {/* 02 */}

            <div
              className="
                w-full

                lg:w-[82%]
                lg:self-end
              "
            >
              <PillarCard pillar={pillars[1]} index={1} />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-4

              sm:gap-5

              lg:pt-8
          "
          >
            {/* 04 */}

            <div className="w-full">
              <PillarCard pillar={pillars[3]} index={3} />
            </div>

            {/* 03 */}

            <div
              className="
                w-full

                lg:w-[82%]
                lg:self-start
              "
            >
              <PillarCard pillar={pillars[2]} index={2} />
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATUS
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="850"
          className="
            mx-auto

            mt-9

            flex
            w-full
            max-w-[850px]

            flex-wrap
            items-center
            justify-center

            gap-x-5
            gap-y-2.5

            border-t
            border-[#E5E7EB]

            pt-5

            sm:mt-10
            sm:gap-x-6
            sm:pt-6
          "
        >
          {[
            "Enterprise AI Solutions",
            "Cloud & Data Platforms",
            "Healthcare Technology",
            "24/7 Expert Support",
          ].map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={550 + index * 90}
              data-aos-duration="650"
              className="
                group/status

                flex
                items-center
                gap-1.5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0

                  rounded-full

                  bg-[#29B6F0]

                  transition-all
                  duration-300

                  group-hover/status:scale-125
                  group-hover/status:bg-[#B93FC9]
                "
              />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.1em]

                  text-[#71717A]

                  transition-colors
                  duration-300

                  group-hover/status:text-[#3E7BD6]

                  sm:text-[9px]
                  sm:tracking-[0.12em]
                "
              >
                {item}
              </span>

              {index !== 3 && (
                <span className="hidden text-[#D4D4D8] sm:inline">
                  /
                </span>
              )}
            </div>
          ))}
        </div>

        {/* ===================================================
            BOTTOM LINE
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="
            mx-auto

            mt-6

            h-px
            w-full
            max-w-4xl

            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent

            sm:mt-7
          "
        />
      </div>
    </section>
  );
}