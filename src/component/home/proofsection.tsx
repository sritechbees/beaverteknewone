"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProofSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const caseStudies = [
    {
      number: "01",
      title: "Payment platform that scales",
      image: "/home/payment.jpg",
      description:
        "Built and supported a payment gateway integration platform now serving 150 clients and processing 4.5 million transactions per month.",
    },
    {
      number: "02",
      title: "AI in healthcare",
      image: "/home/healthai.jpg",
      description:
        "Designed and shipped an AI patient triaging platform, plus patient intake and preventive care applications — moving healthcare teams from paper workflows to working software. This work became the foundation of BeaverHealthAI, our healthcare AI platform.",
    },
    {
      number: "03",
      title: "Mobile, end to end",
      image: "/home/mobile-app.jpg",
      description:
        "Took a mobile advertising app from concept to production, including architecture, build, and launch.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] py-16 md:py-16">
      {/* =====================================================
          BACKGROUND LIGHTING
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-0
          h-[500px] w-[500px]
          rounded-full
          bg-[#B93FC9]/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-[400px] w-[400px]
          rounded-full
          bg-[#29B6F0]/5
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SIMPLE HEADING
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          {/* Small Label */}

          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="
              inline-flex items-center
              rounded-full
              border border-[#2A2A30]
              bg-[#121212]
              px-4 py-2
              text-xs font-semibold
              uppercase
              tracking-[0.18em]
              text-[#29B6F0]
              shadow-[0_8px_30px_rgba(41,182,240,0.08)]
            "
          >
            Our Work
          </span>

          {/* Short Title */}

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Technology That{" "}
            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Delivers
            </span>
          </h2>

          {/* Short Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#A0A0A8]
              sm:text-base
              md:text-lg
            "
          >
            Real solutions, real results, and technology built to make a
            measurable difference.
          </p>

          {/* Gradient Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="
              mx-auto
              mt-6
              h-[2px]
              w-20
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              shadow-[0_0_15px_rgba(41,182,240,0.35)]
            "
          />
        </div>

        {/* =====================================================
            CASE STUDIES
        ===================================================== */}

        <div className="space-y-7 md:space-y-9">
          {caseStudies.map((item, index) => (
            <div
              key={item.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border border-[#2A2A30]
                bg-[#121212]
                shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                transition-all
                duration-700
                hover:-translate-y-2
                hover:border-[#3E7BD6]
                hover:shadow-[0_25px_70px_rgba(41,182,240,0.18)]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-[1500ms]
                    ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* =================================================
                  DARK OVERLAY
              ================================================= */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/[0.96]
                  via-black/[0.84]
                  to-black/[0.50]
                  transition-all
                  duration-700
                  group-hover:via-black/[0.78]
                "
              />

              {/* =================================================
                  GRADIENT LIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#29B6F0]/10
                  blur-[100px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-20
                  h-72
                  w-72
                  rounded-full
                  bg-[#B93FC9]/15
                  blur-[110px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  relative z-10
                  flex
                  min-h-[340px]
                  flex-col
                  justify-center
                  p-7
                  sm:p-9
                  md:min-h-[390px]
                  md:p-12
                  lg:min-h-[410px]
                  lg:p-14
                "
              >
                {/* NUMBER */}

                <div
                  data-aos="fade-right"
                  data-aos-delay={index * 150 + 150}
                  className="mb-5 flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[14px]
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_8px_25px_rgba(41,182,240,0.25)]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {item.number}
                  </div>

                  <div
                    className="
                      h-px
                      w-12
                      bg-[linear-gradient(90deg,#29B6F0,#7A4FD1,#B93FC9)]
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />
                </div>

                {/* TITLE */}

                <h3
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 250}
                  className="
                    max-w-4xl
                    text-2xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-white
                    transition-all
                    duration-500
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[44px]
                    group-hover:translate-x-1
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 350}
                  className="
                    mt-4
                    max-w-3xl
                    text-sm
                    leading-6
                    text-[#A0A0A8]
                    transition-colors
                    duration-500
                    sm:text-base
                    md:mt-5
                    md:text-lg
                    md:leading-7
                    group-hover:text-[#D4D4D8]
                  "
                >
                  {item.description}
                </p>

                {/* TAGS */}

                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 450}
                  className="mt-6 flex flex-wrap gap-2.5"
                >
                  {[
                    "Enterprise Technology",
                    "Architecture",
                    "Delivery",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-[#2A2A30]
                        bg-[#1A1A1E]/90
                        px-3.5
                        py-1.5
                        text-xs
                        font-medium
                        text-[#D4D4D8]
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:border-[#3E7BD6]
                        hover:bg-[#121212]
                        hover:text-white
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  TOP GRADIENT LIGHT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-0
                  h-[2px]
                  rounded-full
                  bg-[linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,#B93FC9,transparent)]
                  opacity-0
                  shadow-[0_0_20px_rgba(41,182,240,0.65)]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  3D BORDER GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  border
                  border-transparent
                  bg-[linear-gradient(135deg,rgba(41,182,240,0.08),transparent,rgba(185,63,201,0.10))]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}