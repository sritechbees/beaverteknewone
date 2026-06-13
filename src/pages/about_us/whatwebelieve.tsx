"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeBelieve() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const beliefs = [
    "Technology should solve a business problem, not create new ones.",
    "Senior people doing senior work — no junior hand-offs.",
    "Working software beats slide decks every time.",
    "Long relationships beat one-time projects. Most of our clients have been with us for years.",
  ];

  return (
    <section className="bg-[#161E2F] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What We <span className="text-[#6B91AD]">Believe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {beliefs.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-[#6B91AD]/40 transition-all duration-500"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}