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
      "Designed and shipped an AI patient triaging platform, plus patient intake and preventive care applications moving healthcare teams from paper workflows to working software.",
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
      duration: 850,
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
        bg-[#000000]
        py-7
        sm:py-9
        md:py-10
        lg:py-8
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
          top-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#29B6F0]/5
          blur-[110px]
          sm:h-[340px]
          sm:w-[340px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#B93FC9]/6
          blur-[120px]
          sm:h-[400px]
          sm:w-[400px]
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
          bg-[#7A4FD1]/4
          blur-[100px]
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
          sm:px-5
          md:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-5
            sm:gap-6
            md:gap-7
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-8
            xl:gap-10
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
              data-aos-delay="80"
              data-aos-duration="700"
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
                sm:px-3.5
                sm:py-1.5
                sm:text-[10px]
                md:text-[11px]
              "
            >
              Our Work
            </span>

            {/* HEADING */}

            <h2
              data-aos="fade-up"
              data-aos-delay="140"
              data-aos-duration="850"
              className="
                mt-3.5
                font-extrabold
                text-[1.9rem]
                leading-[1.06]
                tracking-[-0.035em]
                text-white
                transition-all
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
              data-aos-duration="850"
              data-aos-delay="220"
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6.5
                text-[#A0A0A8]
                transition-colors
                duration-500
                hover:text-[#D4D4D8]
                sm:mt-5
                sm:text-[15px]
                sm:leading-7
                md:text-base
                md:leading-7
                lg:text-[17px]
                lg:leading-7.5
              "
            >
              Real solutions, real results, and technology built to make a
              measurable difference.
            </p>

            {/* GRADIENT LINE */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="750"
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
              "
            />

            {/* STATEMENT */}

            <div
              data-aos="fade-up"
              data-aos-delay="380"
              data-aos-duration="750"
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
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
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#55555D]
                  xl:text-[10px]
                  xl:tracking-[0.18em]
                "
              >
                Built for real-world impact
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
              01 TOP
              02 + 03 BOTTOM
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            className="
              flex
              w-full
              flex-col
              items-center
              gap-4
              sm:gap-5
              lg:gap-5
            "
          >
            {/* =================================================
                TOP CARD — 01
            ================================================= */}

            <CaseStudyCard
              item={caseStudies[0]}
              top
              aosDelay={150}
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
                  aosDelay={280 + index * 120}
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
          data-aos-duration="700"
          className="
            mx-auto
            mt-7
            h-px
            w-full
            max-w-5xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent
            sm:mt-8
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
      data-aos-easing="ease-out-cubic"
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-[18px]
        border
        border-[#2A2A30]
        bg-[#0A0A0A]
        p-4
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-[#3E7BD6]
        hover:bg-[#101014]
        sm:rounded-[20px]
        sm:p-5
        md:p-5
        ${top ? "max-w-[390px]" : "min-w-0"}
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
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-[9px]
            border
            border-[#2A2A30]
            bg-[#121212]
            transition-all
            duration-500
            group-hover:rotate-3
            group-hover:border-[#3E7BD6]
            sm:h-9
            sm:w-9
          "
        >
          <Icon
            className="
              h-3.5
              w-3.5
              text-[#29B6F0]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:text-[#7A4FD1]
              sm:h-4
              sm:w-4
            "
          />
        </div>

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#74747f]
            transition-colors
            duration-500
            group-hover:text-[#29B6F0]
            sm:text-[10px]
            md:text-[11px]
          "
        >
          Case Study
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-3.5
          sm:mt-4
        "
      >
        {/* CARD TITLE */}

        <h3
          className="
            text-[18px]
            font-semibold
            leading-[1.3]
            tracking-[-0.015em]
            text-white
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
            group-hover:bg-clip-text
            group-hover:text-transparent

            sm:text-[19px]
            md:text-[20px]
            lg:text-[21px]
            xl:text-[22px]
          "
        >
          {item.title}
        </h3>

        {/* CARD DESCRIPTION */}

        <p
          className="
            mt-2
            text-[13px]
            leading-[1.65]
            text-[#A0A0A8]
            transition-colors
            duration-500
            group-hover:text-[#D4D4D8]

            sm:mt-3
            sm:text-[14px]
            sm:leading-6

            md:text-[15px]
            md:leading-6.5

            lg:text-[15px]
            lg:leading-7

            xl:text-[15px]
          "
        >
          {item.description}
        </p>
      </div>

      {/* =====================================================
          ACTION
      ===================================================== */}

      <Link
        href={item.href}
        className="
          relative
          z-10
          mt-3.5
          block
          w-full
          cursor-pointer
          sm:mt-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-[#2A2A30]
            pt-2.5
            transition-colors
            duration-500
            group-hover:border-[#3E7BD6]/30
            sm:pt-3
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#29B6F0]
              transition-all
              duration-300
              group-hover:tracking-[0.2em]

              sm:text-[9px]
              md:text-[10px]
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