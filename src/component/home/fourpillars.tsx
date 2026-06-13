"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FourPillars() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pillars = [
    {
      title: "Modernize",
      href: "/services/modernize",
      number: "01",
      description:
        "Bring legacy systems, infrastructure, and outdated workflows into the modern technology stack.",
    },
    {
      title: "See Your Data",
      href: "/services/data-analytics",
      number: "02",
      description:
        "Analytics, dashboards, and reporting solutions that transform raw data into business decisions.",
    },
    {
      title: "Build Software",
      href: "/services/build-software",
      number: "03",
      description:
        "Custom web and mobile applications designed, engineered, and launched by senior experts.",
    },
    {
      title: "Stay Secure",
      href: "/services/stay-secure",
      number: "04",
      description:
        "Keep operations protected, monitored, and running smoothly with enterprise-grade security.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#161E2F] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B91AD]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-medium mb-5">
            WHAT WE DO
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Four Things,
            <span className="text-[#6B91AD]"> Done Well.</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Every engagement starts in one of these four practice areas.
            We keep the list short on purpose and focus on delivering
            exceptional results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {pillars.map((pillar, index) => (
            <Link
              href={pillar.href}
              key={pillar.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#6B91AD]/40 hover:shadow-[0_20px_60px_rgba(107,145,173,0.25)]">

                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#6B91AD] via-blue-400 to-cyan-400" />

                {/* Number */}
                <div className="text-5xl font-bold text-white/10 mb-6">
                  {pillar.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6B91AD] transition">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-[#6B91AD] font-medium">

                  Learn More

                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}