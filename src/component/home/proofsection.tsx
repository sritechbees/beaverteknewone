"use client";

import { useEffect } from "react";
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
  },
  {
    number: "02",
    title: "AI in healthcare",
    description:
      "Designed and shipped an AI patient triaging platform, plus patient intake and preventive care applications — moving healthcare teams from paper workflows to working software.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Mobile, end to end",
    description:
      "Took a mobile advertising app from concept to production, including architecture, build, and launch.",
    icon: Smartphone,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ProofSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
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
        overflow-hidden
        bg-[#000000]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#29B6F0]/5
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B93FC9]/8
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/5
          blur-[130px]
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
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-start
            gap-12

            lg:grid-cols-[0.8fr_1.2fr]

            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="
              max-w-md
              lg:sticky
              lg:top-24
            "
          >
            {/* =================================================
                BADGE
            ================================================= */}

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
                px-4
                py-2

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-[#29B6F0]

                shadow-[0_0_25px_rgba(41,182,240,.06)]
              "
            >
              Our Work
            </span>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                mt-6
                text-[42px]
                font-light
                leading-[0.98]
                tracking-[-0.04em]
                text-white

                sm:text-5xl

                lg:text-[52px]

                xl:text-[60px]
              "
            >
              Technology That
              <br />

              <span
                className="
                  font-bold
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Delivers
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-[#A0A0A8]

                sm:text-base
              "
            >
              Real solutions, real results, and technology built to
              make a measurable difference.
            </p>

            {/* =================================================
                GRADIENT LINE
            ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="
                mt-7
                h-[2px]
                w-16
                rounded-full
                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                shadow-[0_0_18px_rgba(41,182,240,.30)]
              "
            />

            {/* =================================================
                SMALL STATEMENT
            ================================================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#29B6F0]
                  shadow-[0_0_12px_#29B6F0]
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#55555D]
                "
              >
                Built for real-world impact
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-x-12
              gap-y-10

              sm:grid-cols-2

              lg:pt-2
            "
          >
            {caseStudies.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="900"
                  className={`
                    group
                    relative

                    ${
                      index === 2
                        ? "sm:col-span-2 sm:max-w-[48%]"
                        : ""
                    }
                  `}
                >
                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className="
                      relative
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#2A2A30]
                      bg-[#0A0A0A]

                      transition-all
                      duration-500

                      group-hover:border-[#3E7BD6]
                      group-hover:bg-[#121212]
                      group-hover:shadow-[0_0_30px_rgba(41,182,240,.12)]
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        text-[#29B6F0]

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:text-[#7A4FD1]
                      "
                    />

                    {/* Number */}

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-4
                        min-w-4
                        items-center
                        justify-center
                        rounded-full
                        bg-[linear-gradient(135deg,#29B6F0,#7A4FD1,#B93FC9)]
                        px-1
                        text-[7px]
                        font-bold
                        text-white
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3
                    className="
                      max-w-xs
                      text-lg
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-white

                      transition-all
                      duration-500

                      sm:text-xl

                      group-hover:translate-x-1

                      group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      group-hover:bg-clip-text
                      group-hover:text-transparent
                    "
                  >
                    {item.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      leading-6
                      text-[#777780]

                      sm:text-sm
                      sm:leading-6

                      transition-colors
                      duration-500

                      group-hover:text-[#A0A0A8]
                    "
                  >
                    {item.description}
                  </p>

                  {/* =================================================
                      LEARN MORE
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#29B6F0]

                        sm:text-[10px]
                      "
                    >
                      Case Study
                    </span>

                    <div
                      className="
                        h-px
                        w-8
                        bg-gradient-to-r
                        from-[#29B6F0]/50
                        to-transparent

                        transition-all
                        duration-500

                        group-hover:w-14
                      "
                    />

                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        text-[#55555D]

                        transition-all
                        duration-500

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#29B6F0]
                      "
                    />
                  </div>

                  {/* =================================================
                      BOTTOM GLOW LINE
                  ================================================= */}

                  <div
                    className="
                      mt-7
                      h-px
                      w-full
                      max-w-[320px]
                      bg-gradient-to-r
                      from-[#2A2A30]
                      to-transparent

                      transition-all
                      duration-500

                      group-hover:from-[#29B6F0]/40
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM GRADIENT
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="
            mx-auto
            mt-16
            h-px
            max-w-5xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent
          "
        />
      </div>
    </section>
  );
}