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
    <section className="relative py-16 md:py-16 bg-[#000000] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B93FC9]/15 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

       {/* ================= PREMIUM HEADING ================= */}
<div
  className="text-center max-w-4xl mx-auto mb-14 md:mb-16"
>
  {/* Badge */}
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay="100"
    className="flex justify-center"
  >
    <span
      className="
        inline-flex items-center
        px-5 py-2.5
        rounded-full
        text-xs sm:text-sm
        font-semibold
        tracking-[0.22em]
        uppercase
        text-[#29B6F0]
        bg-[#121212]
        border border-[#2A2A30]
        shadow-[0_8px_30px_rgba(41,182,240,0.10)]
        transition-all duration-300
        hover:border-[#29B6F0]/50
        hover:shadow-[0_8px_35px_rgba(41,182,240,0.20)]
      "
    >
      PROOF
    </span>
  </div>

  {/* ================= MAIN TITLE ================= */}
  <h2
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="250"
  className="
    mt-5
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-[60px]
    font-bold
    leading-[1.15]
    tracking-tight
    animate-[fadeInUp_1s_ease-out]
  "
>
   
             
             
  <span
    className="
      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
      bg-clip-text
      text-transparent
    " 
               
  >
    Proven Technology.
  </span>

  <span className="text-white">
    {" "}Measurable Impact.
  </span>
</h2>
  {/* Subtitle — unchanged */}
  <p
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="700"
    className="
      mt-6
      max-w-3xl
      mx-auto
      text-sm
      sm:text-base
      md:text-lg
      leading-7
      md:leading-8
      text-[#A0A0A8]
    "
  >
    Discover how BeaverTek transforms businesses through modern
    engineering, scalable platforms, and AI-powered digital solutions
    that deliver measurable business outcomes.
  </p>

  {/* Small Gradient Divider */}
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay="850"
    className="
      mx-auto
      mt-7
      h-[2px]
      w-20
      rounded-full
      bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
    "
  />
</div>
        {/* ================= CASE STUDIES ================= */}
        <div className="space-y-7 md:space-y-8">

          {caseStudies.map((item, index) => (
            <div
              key={item.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                group
                relative
                overflow-hidden
                rounded-[18px]
                bg-[#121212]
                border border-[#2A2A30]
                transition-all
                duration-500

                hover:border-[#29B6F0]/50
                hover:shadow-[0_25px_70px_rgba(41,182,240,0.22)]
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="absolute inset-0">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-110
                  "
                />

              </div>

              {/* ================= OVERLAY ================= */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#000000]/95
                  via-[#000000]/80
                  to-[#000000]/50
                "
              />

              {/* ================= CONTENT ================= */}
              <div
                className="
                  relative z-10
                  p-7
                  sm:p-9
                  md:p-12
                  lg:p-14
                  min-h-[330px]
                  md:min-h-[400px]
                  flex
                  flex-col
                  justify-center
                "
              >

                {/* NUMBER */}
                <div className="flex items-center gap-3 mb-5">

                  <div
                    className="
                      w-11 h-11
                      md:w-13 md:h-13
                      rounded-[14px]
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                      text-sm
                      md:text-base
                      shadow-lg
                    "
                  >
                    {item.number}
                  </div>

                  <div className="h-px w-12 md:w-16 bg-[#29B6F0]" />

                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[44px]
                    font-bold
                    text-white
                    leading-[1.15]
                    tracking-tight
                    max-w-4xl

                    group-hover:text-[#29B6F0]
                    transition-colors
                    duration-500
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4
                    md:mt-5
                    max-w-3xl
                    text-[#A0A0A8]
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-6
                    md:leading-7
                  "
                >
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2.5">

                  {[
                    "Enterprise Technology",
                    "Architecture",
                    "Delivery",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3.5
                        py-1.5
                        rounded-full
                        bg-[#1A1A1E]
                        border border-[#2A2A30]
                        text-[#D4D4D8]
                        text-xs
                        sm:text-sm
                        font-medium
                        transition-all
                        duration-300

                        hover:border-[#29B6F0]/40
                        hover:text-white
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              {/* ================= HOVER GLOW ================= */}
              <div
                className="
                  absolute
                  -bottom-20
                  -right-20
                  w-60
                  h-60
                  bg-[#29B6F0]/20
                  blur-[100px]
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}