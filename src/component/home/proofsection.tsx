"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProofSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const studies = [
    {
      id: "01",
      title: "Payment Platform That Scales",
      tag: "FinTech",
      description:
        "Built and supported a payment gateway integration platform now serving 150 clients and processing over 4.5 million transactions every month.",
      stat: "4.5M+",
      label: "Transactions / Month",
    },
    {
      id: "02",
      title: "AI In Healthcare",
      tag: "Healthcare AI",
      description:
        "Designed and shipped an AI patient triaging platform, patient intake solutions, and preventive care applications that transformed manual healthcare workflows into intelligent digital experiences.",
      stat: "150K+",
      label: "Patient Records",
    },
    {
      id: "03",
      title: "Mobile, End To End",
      tag: "Mobile Engineering",
      description:
        "Took a mobile advertising platform from concept to launch including architecture, product engineering, deployment, and long-term support.",
      stat: "100%",
      label: "Built By BeaverTek",
    },
  ];

  return (
    <section className="relative bg-[#0F172A] py-24 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6B91AD]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-medium mb-6">
            PROVEN RESULTS
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Real Projects.
            <span className="text-[#6B91AD]">
              {" "}Real Outcomes.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Technology only matters when it delivers measurable results.
            Here are three examples of how BeaverTek has helped clients
            scale, modernize, and innovate.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">

          {studies.map((study, index) => (
            <div
              key={study.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-[#6B91AD]/40 hover:-translate-y-2"
            >

              <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12">

                {/* Number */}
                <div className="lg:col-span-2 flex items-center">
                  <span className="text-[90px] md:text-[120px] font-black text-white/5 group-hover:text-[#6B91AD]/10 transition-all duration-500">
                    {study.id}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">

                  <span className="inline-block px-4 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm mb-5">
                    {study.tag}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    {study.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="lg:col-span-3">

                  <div className="h-full rounded-3xl bg-gradient-to-br from-[#23314F] to-[#161E2F] border border-white/10 flex flex-col justify-center items-center p-8">

                    <h4 className="text-5xl md:text-6xl font-black text-[#6B91AD]">
                      {study.stat}
                    </h4>

                    <p className="mt-3 text-center text-slate-300">
                      {study.label}
                    </p>

                  </div>

                </div>

              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#6B91AD] via-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}