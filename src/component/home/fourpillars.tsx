"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FourPillars() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const pillars = [
    {
      number: "01",
      title: "Modernize",
      href: "/services/modernize/modernizehero",
      image: "/home/payment.jpg",
      description:
        "Bring legacy systems and infrastructure into the modern stack.",
    },
    {
      number: "02",
      title: "See Your Data",
      href: "/services/seeyourdata/seeyourdatahero",
      image: "/home/healthai.jpg",
      description:
        "Analytics, dashboards, and reporting that drive decisions.",
    },
    {
      number: "03",
      title: "Build Software",
      href: "/services/buildsoftware/herosection",
      image: "/home/mobile-app.jpg",
      description:
        "Custom applications, web and mobile, from concept to launch.",
    },
    {
      number: "04",
      title: "Stay Secure",
      href: "/services/staysecure/staysecureherosection",
      image: "/home/healthai.jpg",
      description:
        "Keep digital operations running, protected, and monitored.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] pt-28 pb-20">

  {/* Glow */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#29B6F0]/15 blur-[120px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B93FC9]/15 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* Heading */}
    <div
      data-aos="fade-up"
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <span
        className="
          inline-flex px-4 py-2 rounded-[999px]
          bg-[#121212]
          text-[#29B6F0]
          text-sm font-medium
          border border-[#2A2A30]
        "
      >
        FOUR PILLARS
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        Four Things,
        <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] text-transparent bg-clip-text">
          {" "}Done Well.
        </span>
      </h2>

      <p className="mt-6 text-[#A0A0A8] text-lg leading-relaxed">
        BeaverTek helps small and mid-size companies modernize their
        systems, make sense of their data, and build software that
        actually works.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

      {pillars.map((pillar, index) => (
        <Link
          href={pillar.href}
          key={pillar.title}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="group"
        >
          <div
            className="
              h-full overflow-hidden
              rounded-[18px]
              bg-[#121212]
              border border-[#2A2A30]
              transition-all duration-500

              hover:-translate-y-3
              hover:border-[#29B6F0]/60
              hover:shadow-[0_20px_60px_rgba(41,182,240,0.25)]
            "
          >

            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2A2A30_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* NUMBER BADGE */}
              <div className="absolute top-4 left-4">
                <div
                  className="
                    px-3 py-1 rounded-[999px]
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    text-white text-sm font-semibold
                    shadow-lg
                  "
                >
                  {pillar.number}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 flex flex-col h-[260px]">

              {/* TITLE */}
              <h3
                className="
                  text-2xl font-bold mb-4 text-white
                  transition-all duration-500
                  group-hover:text-transparent
                  group-hover:bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  group-hover:bg-clip-text
                "
              >
                {pillar.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#A0A0A8] leading-relaxed flex-grow">
                {pillar.description}
              </p>

              {/* CTA */}
              <div
                className="
                  mt-6 flex items-center gap-2
                  text-[#29B6F0]
                  font-semibold
                  hover:text-[#7A4FD1]
                "
              >
                Learn More

                <span
                  className="
                    text-[#B93FC9]
                    transition-transform duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </div>

            </div>
          </div>
        </Link>
      ))}

    </div>
  </div>
</section>
  );
}