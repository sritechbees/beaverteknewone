"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import StaySecureSection from "./staysecuresection";
import SecurityWhoThisIsFor from "./securitywhothisisfor";

export default function SecureHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <App_layout>
    <section className="relative bg-[#161E2F] text-white overflow-hidden">

      {/* Background subtle layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#23314F] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#6B91AD] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 py-28">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6" data-aos="fade-right">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23314F] border border-[#6B91AD]/30">
              <span className="w-2 h-2 bg-[#6B91AD] rounded-full animate-pulse"></span>
              <span className="text-[#6B91AD] text-xs tracking-widest uppercase">
                Secure Operations
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Services — Stay Secure
            </h1>

            <h2 className="text-xl md:text-2xl text-[#E8EFF4] font-medium">
              Keep your business running.
              <span className="text-[#6B91AD]"> Quietly. Securely.</span>
            </h2>

            {/* Description */}
            <p className="text-[#E8EFF4] text-sm md:text-base leading-relaxed max-w-xl">
              We build secure, scalable, always-on systems that protect your data,
              ensure uptime, and keep your operations invisible to disruption.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#6B91AD] hover:bg-[#5c85a3] transition px-6 py-3 rounded-full font-medium">
                Explore Services
              </button>

              <button className="border border-[#6B91AD]/40 hover:border-[#6B91AD] transition px-6 py-3 rounded-full text-[#E8EFF4]">
                Talk to us
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div data-aos="fade-left" className="relative">

            <div className="bg-[#23314F] border border-[#6B91AD]/20 rounded-2xl p-8 md:p-10 shadow-xl">

              <p className="text-[#6B91AD] text-xs uppercase tracking-widest mb-4">
                Security Layer Overview
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Always protected architecture
              </h3>

              <div className="space-y-4 text-[#E8EFF4] text-sm">

                {[
                  "Encrypted data pipelines",
                  "24/7 system monitoring",
                  "Threat detection & response",
                  "Zero-downtime deployment systems",
                ].map((item, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-[#6B91AD] rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* bottom mini stat */}
              <div className="mt-8 pt-6 border-t border-[#6B91AD]/20 flex justify-between text-xs text-[#6B91AD]">
                <span>Uptime: 99.99%</span>
                <span>Threats Blocked: Real-time</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    <StaySecureSection/>
    <SecurityWhoThisIsFor/>
    </App_layout>
  );
}