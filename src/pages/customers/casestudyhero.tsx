"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import CaseStudyoverall from "./casestudyoverall";
import Link from "next/link";

const studies = [
  {
    id: "01",
    title: "Payment platform at scale",
    category: "FINANCIAL SERVICES",
    description:
      "Manual, fragile payment workflows couldn't keep up with business growth. We designed and built a secure platform supporting enterprise-scale transactions.",
    link: "/customers/PaymentPlatformCaseStudy",
  },
  {
    id: "02",
    title: "AI in real hospitals",
    category: "HEALTHCARE",
    description:
      "Secure AI assistants integrated into hospital workflows, reducing repetitive work while maintaining compliance and patient data protection.",
    link: "/customers/AIcasestudytwo",
  },
  {
    id: "03",
    title: "Data that drives decisions",
    category: "ENTERPRISE REPORTING",
    description:
      "Unified dashboards and reporting systems replaced fragmented spreadsheets, enabling real-time executive insights.",
    link: "/customers/Datathatdrivesdecisionscasestudy",
  },
];

export default function CaseStudyHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <App_layout>
      <section className="bg-[#F8FAFC] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.35em] text-[#6B91AD] text-xs font-semibold">
              OUR WORK
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-light text-[#161E2F] leading-tight">
              Real businesses.
              <br />
              Real software.
              <br />
              Running today.
            </h1>

            <p className="mt-8 text-[#4B5563] leading-8">
              Every engagement is different, but every solution is built to
              solve a real business problem—not just deliver more software.
            </p>
          </div>

          {/* Buttons */}

          <div
            data-aos="fade-up"
            className="flex justify-center gap-4 mt-14 flex-wrap"
          >
            {studies.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`w-14 h-14 rounded-full font-semibold transition-all duration-300
              ${
                active === index
                  ? "bg-[#161E2F] text-white scale-110 shadow-xl"
                  : "bg-white text-[#161E2F] border border-gray-300 hover:bg-[#E8EFF4] hover:scale-105"
              }`}
              >
                {item.id}
              </button>
            ))}
          </div>

          {/* Content */}

          <div className="mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[32px] p-8 md:p-14 shadow-lg border border-gray-200"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#E8EFF4] text-[#23314F] text-xs font-semibold tracking-widest">
                  {studies[active].category}
                </span>

                <h2 className="mt-8 text-3xl md:text-5xl font-light text-[#161E2F]">
                  {studies[active].title}
                </h2>

                <p className="mt-8 max-w-3xl text-[#4B5563] text-lg leading-8">
                  {studies[active].description}
                </p>

                <div className="mt-12 flex flex-wrap gap-4">

  <Link href={studies[active].link}>
    <button className="group px-8 py-3 rounded-full bg-[#161E2F] text-white font-medium transition-all duration-300 hover:bg-[#22314D] hover:scale-105 shadow-lg">

      View Case Study

      <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
        →
      </span>

    </button>
  </Link>

  <Link href="/customers/casestudyoverall">
    <button className="group px-8 py-3 rounded-full border border-[#161E2F] text-[#161E2F] font-medium transition-all duration-300 hover:bg-[#161E2F] hover:text-white">

      Overview

      <span className="ml-2 inline-block group-hover:-translate-y-0.5 transition-transform">
        ↗
      </span>

    </button>
  </Link>

</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
  
    </App_layout>
  );
}
