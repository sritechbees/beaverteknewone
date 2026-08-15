"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Brent",
      image: "/home/one.jpeg",
      bgImage: "/home/one.jpeg",
      quote:
        "BeaverTek built a powerful analytics platform with Tableau integration, transforming our business insights.",
    },
    {
      name: "Cooraez",
      image: "/home/one.jpeg",
      bgImage: "/home/one.jpeg",
      quote:
        "An outstanding AI healthcare platform with seamless patient intake and smart triage workflows.",
    },
    {
      name: "Ravi",
      image: "/home/one.jpeg",
      bgImage: "/home/one.jpeg",
      quote:
        "BeaverTek provided expert development and strategy, helping us launch faster and more efficiently.",
    },
  ];

  return (
    <section className="relative bg-[#000000] py-16 md:py-16 overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#29B6F0]/15 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#B93FC9]/15 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADING ================= */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center mb-14 md:mb-16"
        >

          {/* Badge */}
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="
              inline-flex items-center
              px-5 py-2.5
              rounded-full
              bg-[#121212]
              text-[#29B6F0]
              text-xs sm:text-sm
              font-semibold
              tracking-[0.22em]
              uppercase
              border border-[#2A2A30]
              shadow-[0_0_30px_rgba(41,182,240,.12)]
            "
          >
            CLIENT TESTIMONIALS
          </span>

          {/* Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
              font-semibold
              leading-[1.08]
              tracking-tight
              text-white
            "
          >
            Trusted By

            <span
              data-aos="fade-right"
              data-aos-delay="350"
              className="
                block
                mt-1.5
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Industry Leaders
            </span>
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="
              mt-5
              text-[#A0A0A8]
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-7
              md:leading-8
            "
          >
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>

          {/* Gradient Divider */}
          <div
            data-aos="zoom-in"
            data-aos-delay="650"
            className="
              mx-auto
              mt-6
              h-[2px]
              w-16
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
            "
          />
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-7
            lg:gap-8
            justify-items-center
          "
        >

          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                relative
                w-full
                max-w-[320px]
                h-[410px]
                overflow-hidden
                rounded-[18px]
                group
                bg-[#121212]
                border border-[#2A2A30]
                shadow-[0_25px_60px_rgba(0,0,0,.45)]
                transition-all
                duration-500

                hover:border-[#3E7BD6]
                hover:shadow-[0_0_40px_rgba(62,123,214,.35)]
              "
            >

              {/* ================= BACKGROUND IMAGE ================= */}
              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/75" />

              {/* ================= TOP QUOTE ================= */}
              <div
                className="
                  absolute
                  top-7
                  left-8
                  text-[#29B6F0]
                  text-[64px]
                  font-bold
                  leading-none
                  opacity-30
                "
              >
                “
              </div>

              {/* ================= CONTENT ================= */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">

                <div className="relative w-[276px] h-[210px]">

                  {/* Profile Image */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      w-[105px]
                      h-[165px]
                      border-2
                      border-white
                      overflow-hidden
                      rounded-[12px]
                      shadow-xl
                      bg-white
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* ================= CONTENT CARD ================= */}
                  <div
                    className="
                      absolute
                      right-0
                      top-[5px]
                      w-[185px]
                      min-h-[190px]
                      bg-[#121212]/95
                      border border-[#2A2A30]
                      p-4
                      rounded-[12px]
                      shadow-xl
                      backdrop-blur-sm
                    "
                  >

                    {/* Name */}
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-white
                        leading-tight
                        mb-2
                      "
                    >
                      {item.name}
                    </h3>

                    {/* Stars */}
                    <div
                      className="
                        flex
                        gap-1
                        text-[#29B6F0]
                        text-xs
                        mb-3
                      "
                    >
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="
                        text-[12px]
                        text-[#D4D4D8]
                        leading-[1.55]
                      "
                    >
                      {item.quote}
                    </p>

                    {/* Verified */}
                    <div className="mt-3 border-t border-[#2A2A30] pt-2">

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          tracking-wide
                          uppercase
                          text-[#FFFFFF]
                        "
                      >
                        Verified Client
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================= BOTTOM QUOTE ================= */}
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  text-[#29B6F0]
                  text-[64px]
                  leading-none
                  opacity-30
                "
              >
                ”
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}