"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CreditCard,
  HeartPulse,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   CASE STUDIES
========================================================= */

const caseStudies = [
  {
    number: "01",
    title: "Payment platform that scales",
    description:
      "Built and supported a payment gateway integration platform now serving 150 clients and processing 4.5 million transactions per month.",
    icon: CreditCard,
    href: "/customers/PaymentPlatformCaseStudy",
  },
  {
    number: "02",
    title: "AI in healthcare",
    description:
      "Designed and shipped an AI patient triaging platform, plus patient intake and preventive care applications — moving healthcare teams from paper workflows to working software.",
    icon: HeartPulse,
    href: "/customers/AIcasestudytwo",
  },
  {
    number: "03",
    title: "Mobile, end to end",
    description:
      "Took a mobile advertising app from concept to production, including architecture, build, and launch.",
    icon: Smartphone,
    href: "/customers/Datathatdrivesdecisionscasestudy",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ProofSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
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
        bg-[#000000]
        py-9
        sm:py-11
        md:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#29B6F0]/5
          blur-[120px]
          sm:h-[380px]
          sm:w-[380px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#B93FC9]/7
          blur-[130px]
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/5
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
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
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
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="
              mx-auto
              flex
              w-full
              max-w-[430px]
              flex-col
              items-center
              text-center
              lg:mx-0
              lg:items-start
              lg:text-left
            "
          >
            {/* BADGE */}

            <span
              data-aos="zoom-in"
              data-aos-delay="100"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#0A0A0A]
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#29B6F0]
                transition-all
                duration-500
                hover:border-[#3E7BD6]
                hover:bg-[#101014]
                sm:px-4
                sm:py-2
                sm:text-[10px]
              "
            >
              Our Work
            </span>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                mt-4
                font-extrabold
                text-[34px]
                leading-[1]
                tracking-[-0.045em]
                text-white
                transition-all
                duration-500
                hover:translate-x-1
                sm:mt-5
                sm:text-[42px]
                md:text-[46px]
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              Technology That{" "}
              <span
                className="
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  font-extrabold
                  text-transparent
                "
              >
                Delivers
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                mt-4
                max-w-[390px]
                text-[12px]
                leading-6
                text-[#A0A0A8]
                transition-colors
                duration-500
                hover:text-[#D4D4D8]
                sm:mt-5
                sm:text-[13px]
                sm:leading-6
                md:text-sm
              "
            >
              Real solutions, real results, and technology built to make a
              measurable difference.
            </p>

            {/* GRADIENT LINE */}

            <div
              data-aos="fade-up"
              data-aos-delay="350"
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
              "
            />

            {/* STATEMENT */}

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2.5
                transition-all
                duration-500
                hover:translate-x-1
                lg:justify-start
              "
            >
              <div
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#29B6F0]
                  shadow-[0_0_10px_#29B6F0]
                "
              />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#55555D]
                  sm:text-[9px]
                "
              >
                Built for real-world impact
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
              01 TOP CENTER
              02 + 03 BOTTOM
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="
              flex
              w-full
              flex-col
              items-center
              gap-4
              sm:gap-5
            "
          >
            {/* =================================================
                TOP CARD — 01
            ================================================= */}

            <CaseStudyCard
              item={caseStudies[0]}
              top
              aosDelay={100}
            />

            {/* =================================================
                BOTTOM TWO CARDS
            ================================================= */}

            <div
              className="
                grid
                w-full
                max-w-[760px]
                grid-cols-1
                gap-4
                sm:grid-cols-2
                sm:gap-5
              "
            >
              {caseStudies.slice(1).map((item, index) => (
                <CaseStudyCard
                  key={item.number}
                  item={item}
                  aosDelay={250 + index * 120}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="
            mx-auto
            mt-9
            h-px
            w-full
            max-w-5xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent
            sm:mt-11
          "
        />
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE CASE STUDY CARD
========================================================= */

function CaseStudyCard({
  item,
  top = false,
  aosDelay = 0,
}: {
  item: (typeof caseStudies)[number];
  top?: boolean;
  aosDelay?: number;
}) {
  const Icon = item.icon;

  return (
    <div
      data-aos={top ? "fade-down" : "fade-up"}
      data-aos-delay={aosDelay}
      data-aos-duration="800"
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-[#2A2A30]
        bg-[#0A0A0A]
        p-4
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:border-[#3E7BD6]
        hover:bg-[#101014]
        sm:p-5
        ${
          top
            ? "max-w-[390px]"
            : "min-w-0"
        }
      `}
    >
      {/* =====================================================
          CARD GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-[#29B6F0]/5
          blur-[50px]
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-[#29B6F0]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          h-32
          w-32
          rounded-full
          bg-[#B93FC9]/5
          blur-[50px]
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-[#B93FC9]/15
        "
      />

      {/* =====================================================
          CARD TOP
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
        "
      >
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
            border
            border-[#2A2A30]
            bg-[#121212]
            transition-all
            duration-500
            group-hover:rotate-3
            group-hover:border-[#3E7BD6]
          "
        >
          <Icon
            className="
              h-4
              w-4
              text-[#29B6F0]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:text-[#7A4FD1]
            "
          />

          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-[18px]
              min-w-[18px]
              items-center
              justify-center
              rounded-full
              bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              px-1
              text-[6px]
              font-bold
              text-white
            "
          >
            {item.number}
          </span>
        </div>

        <span
          className="
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#55555D]
            transition-colors
            duration-500
            group-hover:text-[#29B6F0]
            sm:text-[8px]
          "
        >
          Case Study
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mt-4">
        <h3
          className="
            text-[15px]
            font-semibold
            leading-tight
            tracking-tight
            text-white
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
            group-hover:bg-clip-text
            group-hover:text-transparent
            sm:text-base
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2
            text-[10px]
            leading-[1.65]
            text-[#777780]
            transition-colors
            duration-500
            group-hover:text-[#A0A0A8]
            sm:text-[11px]
            sm:leading-[1.7]
          "
        >
          {item.description}
        </p>
      </div>

      {/* =====================================================
          ACTION — INDIVIDUAL CASE STUDY LINK
      ===================================================== */}

      <Link
        href={item.href}
        className="
          relative
          z-10
          mt-4
          block
          w-full
          cursor-pointer
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-[#2A2A30]
            pt-3
            transition-colors
            duration-500
            group-hover:border-[#3E7BD6]/30
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#29B6F0]
              transition-all
              duration-300
              group-hover:tracking-[0.2em]
              sm:text-[8px]
            "
          >
            Explore Case
          </span>

          <div
            className="
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#2A2A30]
              bg-[#121212]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:border-[#3E7BD6]
              group-hover:bg-[#17171C]
              group-hover:shadow-[0_0_15px_rgba(41,182,240,0.15)]
            "
          >
            <ArrowUpRight
              className="
                h-3
                w-3
                text-[#55555D]
                transition-all
                duration-500
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#29B6F0]
              "
            />
          </div>
        </div>
      </Link>

      {/* =====================================================
          HOVER GRADIENT LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          rounded-full
          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </div>
  );
}