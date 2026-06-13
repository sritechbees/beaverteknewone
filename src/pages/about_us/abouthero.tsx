"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import AboutContent from "./aboutcontent";
import WhatWeBelieve from "./whatwebelieve";
import WhereWeAre from "./whereweare";

export default function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <App_layout>
    <section className="relative overflow-hidden bg-[#161E2F] py-24 lg:py-32">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#6B91AD]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#23314F]/30 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">

          <div
            data-aos="fade-up"
            className="inline-flex items-center rounded-full border border-[#6B91AD]/20 bg-[#23314F]/60 px-5 py-2"
          >
            <span className="text-sm font-medium tracking-wide text-[#6B91AD]">
              ABOUT BEAVERTEK
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Senior technology people.
            <span className="block text-[#6B91AD]">
              Built for businesses that don't have a CTO.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            BeaverTek is a technology partner for small and mid-size companies.
            We help businesses modernize their systems, make sense of their
            data, build the software they need, and keep their digital
            operations running securely. Based in Orange County, California,
            with a strong engineering team in India, we bring decades of
            Fortune 500 experience to the work in front of you — without the
            Fortune 500 price tag.
          </p>

        </div>

      </div>
    </section>
    <AboutContent/>
    <WhatWeBelieve/>
    <WhereWeAre/>
    </App_layout>
  );
}