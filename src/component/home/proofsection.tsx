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
    <section className="relative py-24 bg-[#161E2F] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6B91AD]/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-semibold tracking-wide">
            PROOF
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Real systems.
            <span className="block text-[#6B91AD]">
              Real users.
            </span>
            Real outcomes.
          </h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((item, index) => (
            <div
              key={item.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#161E2F]/85 via-[#161E2F]/75 to-[#161E2F]/55" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-20 min-h-[350px] md:min-h-[450px] flex flex-col justify-center">

                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#6B91AD]/90 backdrop-blur-xl flex items-center justify-center text-white text-xl font-bold shadow-xl">
                    {item.number}
                  </div>

                  <div className="h-[2px] w-20 bg-[#6B91AD]" />
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-3xl text-slate-300 text-lg md:text-xl leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm">
                    Enterprise Technology
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm">
                    Architecture
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm">
                    Delivery
                  </span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#6B91AD]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}