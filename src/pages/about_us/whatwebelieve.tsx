"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeBelieve() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const beliefs = [
    {
      title: "Business-Driven Technology",
      description:
        "Technology should solve a business problem, not create new ones.",
    },
    {
      title: "Senior Expertise",
      description:
        "Senior people doing senior work with no unnecessary hand-offs.",
    },
    {
      title: "Results Over Presentations",
      description:
        "Working software always delivers more value than slide decks.",
    },
    {
      title: "Long-Term Partnerships",
      description:
        "We build lasting relationships by delivering quality and measurable business value.",
    },
  ];

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
      {/* ================= GRID PATTERN ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div
            data-aos="fade-right"
            className="max-w-xl"
          >
            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#121212]
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#29B6F0]
                sm:px-5
                sm:py-2.5
                sm:text-xs
              "
            >
              Our Philosophy
            </span>

            {/* Heading */}

           <h2
  className="
    mt-6
    text-3xl
    font-bold
    leading-[1.08]
    tracking-tight
    text-white
    sm:text-4xl
    md:text-5xl
    lg:text-5xl
    whitespace-nowrap
  "
>
  What We {" "}
  <span
    className="
      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
      bg-clip-text
      text-transparent
    "
  >
    Believe
  </span>
</h2>

{/* Divider */}

<div
  className="
    mt-6
    h-[3px]
    w-16
    rounded-full
    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
    sm:mt-7
    sm:w-24
  "
/>
            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-[#A0A0A8]
                sm:mt-7
                sm:text-base
                sm:leading-7
                md:text-lg
                md:leading-8
              "
            >
              We believe technology should be practical, measurable and
              aligned with your business goals. Every solution we build
              focuses on creating long-term value, improving efficiency,
              and delivering real outcomes.
            </p>

            {/* ================= STATS ================= */}

            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-3
                sm:mt-10
                sm:gap-4
              "
            >
              {/* Stat 1 */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-4
                  py-5
                  sm:px-6
                  sm:py-6
                  transition-all
                  duration-300
                  hover:border-[#3E7BD6]/60
                "
              >
                <h4
                  className="
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  10+
                </h4>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#A0A0A8]
                    sm:text-sm
                  "
                >
                  Years Experience
                </p>
              </div>

              {/* Stat 2 */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-4
                  py-5
                  sm:px-6
                  sm:py-6
                  transition-all
                  duration-300
                  hover:border-[#B93FC9]/60
                "
              >
                <h4
                  className="
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  100%
                </h4>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#A0A0A8]
                    sm:text-sm
                  "
                >
                  Client Focus
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="space-y-4 sm:space-y-5">
            {beliefs.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  p-5
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-[#3E7BD6]
                  sm:p-6
                  md:p-7
                "
              >
                <div className="relative flex items-start gap-4 sm:gap-5">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:h-12
                      sm:w-12
                      md:h-14
                      md:w-14
                      md:rounded-2xl
                    "
                  >
                    <CheckCircle2
                      className="
                        h-5
                        w-5
                        text-white
                        sm:h-6
                        sm:w-6
                        md:h-7
                        md:w-7
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">

                    {/* Title + Number */}

                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="
                          text-base
                          font-semibold
                          leading-6
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#29B6F0]
                          sm:text-lg
                          md:text-xl
                        "
                      >
                        {item.title}
                      </h3>

                      <span
                        className="
                          flex-shrink-0
                          text-2xl
                          font-bold
                          leading-none
                          text-white/[0.08]
                          sm:text-3xl
                          md:text-4xl
                        "
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#A0A0A8]
                        sm:mt-3
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      className="
                        mt-5
                        h-[2px]
                        w-8
                        rounded-full
                        bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}