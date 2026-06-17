"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StaySecureSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#161E2F] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* WHAT IT IS */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div data-aos="fade-right" className="space-y-4">
            <p className="text-[#6B91AD] uppercase tracking-widest text-sm">
              What it is
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Security that works before problems happen
            </h2>
          </div>

          <div
            data-aos="fade-left"
            className="bg-[#23314F] border border-[#23314F]/50 rounded-2xl p-6 md:p-8"
          >
            <p className="text-[#E8EFF4] text-sm md:text-base leading-relaxed">
              Security and operations are the things most businesses ignore until
              something goes wrong. By then it is expensive. We help small and
              mid-size companies put the right protections in place before there is
              a problem, and respond fast when one shows up.
            </p>

            <p className="mt-4 text-[#E8EFF4] text-sm md:text-base leading-relaxed">
              This is not enterprise theater. It is practical, sized-right security
              for the business you actually run.
            </p>
          </div>
        </div>

        {/* PRACTICE SECTION */}
        <div className="space-y-10">

          <div className="text-center space-y-3" data-aos="fade-up">
            <p className="text-[#6B91AD] uppercase tracking-widest text-sm">
              What this looks like in practice
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold">
              Real protections for real operations
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                title: "Cloud & Infrastructure Security",
                desc: "Configuration and continuous monitoring to reduce risk across your systems.",
              },
              {
                title: "Identity & Access Management",
                desc: "Control who can access what, ensuring secure and role-based permissions.",
              },
              {
                title: "Backup & Recovery",
                desc: "Reliable data backup, disaster recovery, and business continuity planning.",
              },
              {
                title: "Endpoint Protection",
                desc: "Security hygiene across devices, teams, and remote environments.",
              },
              {
                title: "Security Review & Fix Plan",
                desc: "Audit existing systems and deliver a prioritized, actionable fix list.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-[#23314F] border border-[#23314F]/40 rounded-xl p-6 hover:border-[#6B91AD]/40 transition"
              >
                <h4 className="text-[#FFFFFF] font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-[#E8EFF4] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}