"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecurityEditorialSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#161E2F] text-white py-28 px-6 md:px-16">

      <div className="max-w-6xl mx-auto space-y-28">

        {/* WHO THIS IS FOR */}
        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT LABEL (sticky feel) */}
          <div className="md:col-span-3" data-aos="fade-right">
            <div className="sticky top-24">
              <p className="text-[#6B91AD] uppercase tracking-[0.25em] text-xs mb-4">
                Who this is for
              </p>

              <div className="w-12 h-[2px] bg-[#6B91AD]"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-9 space-y-6">

            <div
              data-aos="fade-left"
              className="bg-[#23314F] border border-[#23314F]/50 rounded-2xl p-8 md:p-10"
            >
              <p className="text-[#E8EFF4] text-sm md:text-base leading-relaxed">
                Businesses that handle customer data, payments, or healthcare
                information — and any company that knows a single breach or extended
                outage would be a serious problem. If you do not have a dedicated
                security person, you are who we are built for.
              </p>
            </div>

            {/* highlight strip */}
            <div
              data-aos="fade-up"
              className="bg-[#23314F]/60 border border-[#23314F] rounded-xl p-6"
            >
              <p className="text-[#6B91AD] text-xs uppercase tracking-widest mb-2">
                Insight
              </p>
              <p className="text-[#E8EFF4] text-sm">
                Most companies only think about security after an incident. We help
                you avoid that stage entirely.
              </p>
            </div>

          </div>
        </div>

        {/* PROOF */}
        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT LABEL */}
          <div className="md:col-span-3" data-aos="fade-right">
            <div className="sticky top-24">
              <p className="text-[#6B91AD] uppercase tracking-[0.25em] text-xs mb-4">
                Proof
              </p>

              <div className="w-12 h-[2px] bg-[#6B91AD]"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-9 space-y-6">

            <div
              data-aos="fade-left"
              className="bg-[#23314F] border border-[#23314F]/50 rounded-2xl p-8 md:p-10"
            >
              <p className="text-[#E8EFF4] text-sm md:text-base leading-relaxed">
                We bring enterprise-grade security practice to mid-size operations
                every day — drawing on experience securing systems for Fortune 500
                financial services, healthcare, and retail clients.
              </p>
            </div>

            {/* badge row */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div
                data-aos="fade-up"
                className="bg-[#23314F]/60 border border-[#23314F] rounded-xl p-5"
              >
                <p className="text-[#6B91AD] text-xs uppercase tracking-widest mb-2">
                  Experience
                </p>
                <p className="text-[#E8EFF4] text-sm">
                  Enterprise-grade security applied to real mid-size systems.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-[#23314F]/60 border border-[#23314F] rounded-xl p-5"
              >
                <p className="text-[#6B91AD] text-xs uppercase tracking-widest mb-2">
                  Focus
                </p>
                <p className="text-[#E8EFF4] text-sm">
                  Practical protection, not over-engineered enterprise theater.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* CTA */}
        <div
          data-aos="zoom-in"
          className="text-center bg-gradient-to-r from-[#23314F] to-[#161E2F] border border-[#23314F] rounded-3xl p-12"
        >
          <p className="text-[#6B91AD] text-xs uppercase tracking-widest mb-3">
            CTA
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Get a security review
          </h3>

          <button className="bg-[#6B91AD] hover:bg-[#5c85a3] transition px-8 py-3 rounded-full font-medium">
            Get a security review
          </button>
        </div>

      </div>
    </section>
  );
}