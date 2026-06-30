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
    <section className="relative bg-[#EAF1F7] py-24 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#45A6E5]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8FD14F]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="
            inline-flex px-5 py-2 rounded-[999px]
            bg-[#131A23]
            text-[#45A6E5]
            text-sm font-semibold
            border border-[#1C2530]
          ">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="
            mt-6 text-4xl md:text-5xl lg:text-6xl
            font-bold text-[#0B0F14]
          ">
            Trusted By
            <span className="block bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] text-transparent bg-clip-text">
              Industry Leaders
            </span>
          </h2>

          <p className="mt-6 text-[#5B6B7B] text-lg">
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                relative w-full max-w-[320px] h-[430px]
                overflow-hidden rounded-[18px]
                group
                bg-[#131A23]
                border border-[#1C2530]
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:border-[#45A6E5]/50
                hover:shadow-[0_25px_70px_rgba(69,166,229,0.25)]
              "
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0B0F14]/60" />

              {/* Quote Top */}
              <div className="absolute top-10 left-10 text-[#45A6E5] text-[70px] font-bold opacity-30">
                “
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">

                <div className="relative w-[280px] h-[220px]">

                  {/* Profile Image */}
                  <div className="
                    absolute left-0 top-0
                    w-[115px] h-[180px]
                    border-[3px] border-[#EAF1F7]
                    overflow-hidden
                    rounded-[12px]
                    shadow-xl
                    bg-white
                  ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="
                    absolute right-0 top-[5px]
                    w-[190px]
                    bg-[#EAF1F7]
                    p-4
                    rounded-[12px]
                    shadow-xl
                  ">

                    <h3 className="
                      text-[20px]
                      font-semibold
                      text-[#0B0F14]
                      mb-2
                    ">
                      {item.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex gap-1 text-[#45A6E5] text-sm mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[12px] text-[#5B6B7B] leading-5">
                      {item.quote}
                    </p>

                    <div className="mt-3 border-t border-[#1C2530]/20 pt-2">
                      <p className="text-[11px] font-semibold text-[#0B0F14]">
                        Verified Client
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom Quote */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#45A6E5] text-[70px] opacity-30">
                ”
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}