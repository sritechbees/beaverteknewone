"use client";

import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeBelieve() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const beliefs = [
    {
      title: "Business-Driven Technology",
      description:
        "Technology should solve a business problem, not create new ones.",
    },
    {
      title: "Senior Expertise",
      description:
        "Senior people doing senior work with no unnecessary hand-offs.",
    },
    {
      title: "Results Over Presentations",
      description:
        "Working software always delivers more value than slide decks.",
    },
    {
      title: "Long-Term Partnerships",
      description:
        "We build lasting relationships by delivering quality and measurable business value.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50 py-16 md:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div
            data-aos="fade-right"
            className="max-w-xl"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Our Philosophy
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              What We
              <span className="block bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">
                Believe
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#22C55E]" />

            <p className="mt-8 text-base md:text-lg leading-8 text-slate-600">
              We believe technology should be practical, measurable and
              aligned with your business goals. Every solution we build
              focuses on creating long-term value, improving efficiency,
              and delivering real outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl bg-white shadow-lg border border-slate-200 px-6 py-5">
                <h4 className="text-3xl font-bold text-slate-900">10+</h4>
                <p className="mt-1 text-slate-500">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl bg-white shadow-lg border border-slate-200 px-6 py-5">
                <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                <p className="mt-1 text-slate-500">
                  Client Focus
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="space-y-6">
                        {beliefs.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 md:p-7 backdrop-blur-xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />
                </div>

                <div className="relative flex items-start gap-5">

                  {/* Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#22C55E] shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                        {item.title}
                      </h3>

                      <span className="text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-sky-100">
                        0{index + 1}
                      </span>

                    </div>

                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {item.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#22C55E] transition-all duration-500 group-hover:w-28" />

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}