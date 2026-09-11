
"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeBelieve() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
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
        py-10
        sm:py-11
        md:py-12
        lg:py-14
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

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            sm:gap-9
            md:gap-10
            lg:grid-cols-2
            lg:gap-11
            xl:gap-14
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="50"
            className="max-w-xl"
          >
            {/* Badge */}

            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#121212]
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#29B6F0]
                sm:px-4
                sm:py-2
                sm:text-[10px]
                md:text-[11px]
              "
            >
              Our Philosophy
            </span>

            {/* Heading */}

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                mt-4
                whitespace-nowrap
                text-[25px]
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:mt-5
                sm:text-[28px]
                md:text-[32px]
                lg:text-[34px]
                xl:text-[36px]
              "
            >
              What We{" "}
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
              data-aos="zoom-in"
              data-aos-delay="220"
              className="
                mt-4
                h-[2px]
                w-12
                rounded-full
                bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                sm:mt-5
                sm:w-16
                md:w-20
              "
            />

            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="280"
              className="
                mt-4
                max-w-xl
                text-[11px]
                leading-6
                text-[#A0A0A8]
                sm:mt-5
                sm:text-xs
                sm:leading-6
                md:text-[13px]
                md:leading-6
              "
            >
              We believe technology should be practical, measurable and
              aligned with your business goals. Every solution we build
              focuses on creating long-term value, improving efficiency,
              and delivering real outcomes.
            </p>

            {/* ================= STATS ================= */}

            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="
                mt-6
                grid
                grid-cols-2
                gap-2.5
                sm:mt-7
                sm:gap-3
                md:gap-3.5
              "
            >
              {/* Stat 1 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-3
                  py-3.5
                  transition-all
                  duration-300
                  hover:border-[#3E7BD6]/60
                  sm:rounded-2xl
                  sm:px-4
                  sm:py-4
                  md:px-5
                  md:py-5
                "
              >
                <h4
                  className="
                    text-xl
                    font-bold
                    leading-none
                    text-white
                    sm:text-2xl
                    md:text-[26px]
                  "
                >
                  10+
                </h4>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-5
                    text-[#A0A0A8]
                    sm:text-xs
                    md:text-[13px]
                  "
                >
                  Years Experience
                </p>
              </div>

              {/* Stat 2 */}

              <div
                className="
                  rounded-xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-3
                  py-3.5
                  transition-all
                  duration-300
                  hover:border-[#B93FC9]/60
                  sm:rounded-2xl
                  sm:px-4
                  sm:py-4
                  md:px-5
                  md:py-5
                "
              >
                <h4
                  className="
                    text-xl
                    font-bold
                    leading-none
                    text-white
                    sm:text-2xl
                    md:text-[26px]
                  "
                >
                  100%
                </h4>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-5
                    text-[#A0A0A8]
                    sm:text-xs
                    md:text-[13px]
                  "
                >
                  Client Focus
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
            {beliefs.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={180 + index * 100}
                data-aos-duration="700"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#3E7BD6]
                  sm:rounded-2xl
                  sm:p-4.5
                  md:p-5
                "
              >
                <div className="relative flex items-start gap-3 sm:gap-4">
                  {/* Icon */}

                  <div
                    data-aos="zoom-in"
                    data-aos-delay={250 + index * 100}
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:h-10
                      sm:w-10
                      sm:rounded-xl
                      md:h-11
                      md:w-11
                    "
                  >
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-white
                        sm:h-5
                        sm:w-5
                        md:h-[21px]
                        md:w-[21px]
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    {/* Title + Number */}

                    <div className="flex items-start justify-between gap-2">
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={300 + index * 100}
                        className="
                          text-[13px]
                          font-semibold
                          leading-5
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#29B6F0]
                          sm:text-sm
                          sm:leading-6
                          md:text-[15px]
                        "
                      >
                        {item.title}
                      </h3>

                      <span
                        className="
                          flex-shrink-0
                          text-xl
                          font-bold
                          leading-none
                          text-white/[0.08]
                          sm:text-2xl
                          md:text-3xl
                        "
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Description */}

                    <p
                      data-aos="fade-up"
                      data-aos-delay={350 + index * 100}
                      className="
                        mt-1.5
                        text-[11px]
                        leading-5
                        text-[#A0A0A8]
                        sm:mt-2
                        sm:text-xs
                        sm:leading-5
                        md:text-[13px]
                        md:leading-6
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      data-aos="fade-right"
                      data-aos-delay={400 + index * 100}
                      className="
                        mt-3
                        h-[2px]
                        w-7
                        rounded-full
                        bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        transition-all
                        duration-500
                        group-hover:w-16
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
