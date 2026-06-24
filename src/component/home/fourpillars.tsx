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
    <section className="relative py-24 bg-[#161E2F] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B91AD]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-medium">
            FOUR PILLARS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Four Things,
            <span className="text-[#6B91AD]"> Done Well.</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
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
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:-translate-y-3
                hover:border-[#6B91AD]/50
                hover:shadow-[0_20px_60px_rgba(107,145,173,0.25)]
                "
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#161E2F] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <div className="bg-[#6B91AD] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pillar.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col h-[260px]">

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6B91AD] transition">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed flex-grow">
                    {pillar.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#6B91AD] font-semibold">
                    Learn More

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
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