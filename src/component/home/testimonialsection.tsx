"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      role: "Technology Executive",
      initials: "BR",
      quote:
        "BeaverTek delivered a robust analytics platform with Tableau integration that transformed how our teams consume business data. The execution was exceptional.",
    },
    {
      name: "Cooraez",
      role: "Healthcare Innovation Partner",
      initials: "CO",
      quote:
        "The AI healthcare platform exceeded expectations. From patient intake to intelligent triage workflows, the entire solution was delivered with remarkable precision.",
    },
    {
      name: "Ravi Rajagopal",
      role: "Product & Technology Leader",
      initials: "RR",
      quote:
        "From concept to production, BeaverTek provided architecture, development, and strategic guidance that accelerated our launch timeline significantly.",
    },
  ];

  return (
    <section className="relative bg-[#161E2F] py-24 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#6B91AD]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-medium mb-6">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Trusted By
            <span className="text-[#6B91AD]"> Industry Leaders</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`group relative overflow-hidden rounded-[30px]
                border border-white/10 bg-white/5 backdrop-blur-xl
                p-8 transition-all duration-500 hover:-translate-y-3
                hover:border-[#6B91AD]/40
                ${
                  index === 1
                    ? "lg:scale-105 bg-gradient-to-b from-[#23314F]/40 to-white/5"
                    : ""
                }`}
            >
              {/* Quote */}
              <div className="absolute top-4 right-6 text-[120px] font-black text-white/5 leading-none">
                "
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center
                  justify-center bg-gradient-to-br
                  from-[#6B91AD] to-[#23314F]
                  text-white font-bold text-xl"
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-slate-300 leading-relaxed text-lg">
                {item.quote}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mt-8">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#6B91AD] text-xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Hover Border */}
              <div
                className="absolute bottom-0 left-0 h-[3px]
                bg-gradient-to-r from-[#6B91AD]
                via-cyan-400 to-blue-500
                w-0 group-hover:w-full
                transition-all duration-700"
              />
            </div>
          ))}
        </div>

        {/* Bottom Trust Numbers */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#6B91AD]">
              150+
            </h3>
            <p className="text-slate-400 mt-2">
              Clients Served
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#6B91AD]">
              4.5M+
            </h3>
            <p className="text-slate-400 mt-2">
              Transactions / Month
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#6B91AD]">
              80+
            </h3>
            <p className="text-slate-400 mt-2">
              Years Combined Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#6B91AD]">
              100%
            </h3>
            <p className="text-slate-400 mt-2">
              Client Focused
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}