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
      offset: 100,
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
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#29B6F0]/15 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B93FC9]/15 blur-[180px] rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
  data-aos="fade-up"
  className="text-center max-w-5xl mx-auto mb-20"
>
  {/* Premium Badge */}
  <span
    className="
      inline-flex items-center
      px-7 py-3
      rounded-full
      text-sm md:text-base
      font-bold
      tracking-[0.35em]
      uppercase
      text-[#29B6F0]
      bg-[#121212]
      border border-[#2A2A30]
      shadow-[0_8px_30px_rgba(41,182,240,0.12)]
    "
  >
    PROOF
  </span>

  {/* Premium Title */}
  <h2
    className="
      mt-8
      text-5xl
      md:text-6xl
      lg:text-7xl
      font-extrabold
      leading-[1.08]
      tracking-tight
      text-white
    "
  >
    Real Systems.

    <span
      className="
        block mt-2
        bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_30%,#7A4FD1_65%,#B93FC9_100%)]
        bg-clip-text
        text-transparent
      "
    >
      Real Users.
    </span>

    <span className="block mt-2 text-white">
      Real Outcomes.
    </span>
  </h2>

  {/* Subtitle */}
  <p
    className="
      mt-8
      max-w-3xl
      mx-auto
      text-lg
      md:text-xl
      leading-8
      text-[#A0A0A8]
    "
  >
    Discover how BeaverTek transforms businesses through modern engineering,
    scalable platforms, and AI-powered digital solutions that deliver measurable
    business outcomes.
  </p>
</div>

        {/* Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((item, index) => (
            <div
              key={item.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                group relative overflow-hidden
                rounded-[18px]
                bg-[#121212]
border border-[#2A2A30]
                transition-all duration-500

               hover:border-[#29B6F0]/50
hover:shadow-[0_25px_70px_rgba(41,182,240,0.25)]
              "
            >
              {/* IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-r
from-[#000000]/90
via-[#000000]/75
to-[#000000]/50
              "
              />

              {/* CONTENT */}
              <div
                className="
                relative z-10
                p-8 sm:p-10 md:p-14 lg:p-20
                min-h-[350px] md:min-h-[450px]
                flex flex-col justify-center
              "
              >
                {/* NUMBER */}
                <div className="inline-flex items-center gap-4 mb-6">
                  <div
                    className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-[18px]
                   bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    flex items-center justify-center
                    text-white font-bold text-lg md:text-xl
                    shadow-lg
                  "
                  >
                    {item.number}
                  </div>

                  <div className="h-[2px] w-16 md:w-20 bg-[#29B6F0]" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-2xl md:text-4xl lg:text-6xl
                  font-bold text-white leading-tight
                  max-w-4xl
                  group-hover:text-[#29B6F0]
                  transition
                "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  mt-6 max-w-3xl
                  text-[#A0A0A8]
                  text-base md:text-lg lg:text-xl
                  leading-relaxed
                "
                >
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Enterprise Technology", "Architecture", "Delivery"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="
                        px-4 py-2
                        rounded-[999px]
                       bg-[#1A1A1E]
border border-[#2A2A30]
text-white
hover:border-[#29B6F0]/40
                         text-sm
                        transition
                      "
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* HOVER GLOW */}
              <div
                className="
                absolute -bottom-20 -right-20
                w-60 h-60
                bg-[#29B6F0]/20
                blur-[100px]
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-700
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
