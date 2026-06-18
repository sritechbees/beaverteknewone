"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";

export default function CaseStudyoverall() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
    <section className="bg-white py-16 md:py-24 px-5 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO ================= */}

        <div
          data-aos="fade-up"
          className="bg-[#E8EFF4] rounded-[32px] overflow-hidden"
        >
          <div className="px-8 md:px-16 py-16">

            <p className="uppercase tracking-[0.25em] text-[#6B91AD] text-xs font-semibold mb-5">
              Our Work
            </p>

            <h2 className="text-3xl md:text-5xl font-light text-[#161E2F] leading-tight max-w-3xl">
              Real businesses.
              <br />
              Real software.
              <br />
              Running today.
            </h2>

            <p className="text-[#23314F] mt-8 text-base leading-8 max-w-2xl">
              We work quietly. Most clients prefer not to be named publicly.
              So instead of a logo wall, we let the work speak.
            </p>

          </div>
        </div>

        {/* ================= CASE STUDY 01 ================= */}

        <div
          data-aos="fade-up"
          className="mt-14 bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition duration-500"
        >

          {/* Tags */}

          <div className="flex flex-wrap gap-3">

            <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
              FINANCIAL SERVICES
            </span>

            <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
              BUILD SOFTWARE
            </span>

          </div>

          {/* Title */}

          <h3 className="text-3xl font-light text-[#161E2F] mt-6">
            Payment platform at scale
          </h3>

          {/* Three Columns */}

          <div className="grid md:grid-cols-3 gap-10 mt-10">

            {/* Challenge */}

            <div>

              <p className="uppercase text-[#6B91AD] tracking-widest text-xs font-semibold mb-3">
                Challenge
              </p>

              <p className="text-[#1A1A1A] leading-7">
                Manual, fragile process couldn't keep up with growth.
              </p>

            </div>

            {/* Built */}

            <div>

              <p className="uppercase text-[#6B91AD] tracking-widest text-xs font-semibold mb-3">
                Built
              </p>

              <p className="text-[#1A1A1A] leading-7">
                Purpose-built payment gateway integration platform,
                end-to-end.
              </p>

            </div>

            {/* Outcome */}

            <div>

              <p className="uppercase text-[#6B91AD] tracking-widest text-xs font-semibold mb-3">
                Outcome
              </p>

              <p className="text-[#1A1A1A] leading-7">
                Now supporting 150 clients in production.
              </p>

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="mt-12 rounded-2xl bg-[#F5F8FA]">

            <div className="grid grid-cols-1 md:grid-cols-3">

              <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">

                <h4 className="text-4xl font-light text-[#161E2F]">
                  150
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  Clients
                </p>

              </div>

              <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">

                <h4 className="text-4xl font-light text-[#161E2F]">
                  4.5M
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  Transactions / month
                </p>

              </div>

              <div className="py-8 text-center">

                <h4 className="text-4xl font-light text-[#161E2F]">
                  100%
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  Still supported by us
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= CASE STUDY 02 ================= */}

<div
  data-aos="fade-up"
  className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500"
>
  {/* Tags */}
  <div className="flex flex-wrap gap-3">
    <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
      HEALTHCARE
    </span>

    <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
      AI SOLUTIONS
    </span>
  </div>

  {/* Title */}
  <h3 className="text-3xl font-light text-[#161E2F] mt-6">
    AI in real hospitals
  </h3>

  {/* Content */}
  <div className="grid md:grid-cols-3 gap-10 mt-10">
    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Challenge
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Clinical teams needed AI that worked with existing systems instead
        of replacing them.
      </p>
    </div>

    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Built
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Secure AI assistants integrated with healthcare workflows and
        enterprise infrastructure.
      </p>
    </div>

    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Outcome
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Faster clinical operations while maintaining compliance and data
        security.
      </p>
    </div>
  </div>

  {/* Stats */}
  <div className="mt-12 rounded-2xl bg-[#F5F8FA]">
    <div className="grid grid-cols-1 md:grid-cols-3">

      <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
        <h4 className="text-4xl font-light text-[#161E2F]">30+</h4>
        <p className="text-gray-500 mt-2 text-sm">Hospitals</p>
      </div>

      <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
        <h4 className="text-4xl font-light text-[#161E2F]">99.9%</h4>
        <p className="text-gray-500 mt-2 text-sm">Availability</p>
      </div>

      <div className="py-8 text-center">
        <h4 className="text-4xl font-light text-[#161E2F]">24/7</h4>
        <p className="text-gray-500 mt-2 text-sm">Monitoring</p>
      </div>

    </div>
  </div>
</div>

{/* ================= CASE STUDY 03 ================= */}

<div
  data-aos="fade-up"
  className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500"
>
  {/* Tags */}
  <div className="flex flex-wrap gap-3">
    <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
      BUSINESS INTELLIGENCE
    </span>

    <span className="bg-[#E8EFF4] text-[#23314F] px-4 py-1 rounded-full text-xs font-medium">
      DATA PLATFORM
    </span>
  </div>

  {/* Title */}
  <h3 className="text-3xl font-light text-[#161E2F] mt-6">
    Data that drives decisions
  </h3>

  {/* Content */}
  <div className="grid md:grid-cols-3 gap-10 mt-10">
    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Challenge
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Reporting lived across disconnected systems with inconsistent
        numbers.
      </p>
    </div>

    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Built
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Unified dashboards with automated reporting and executive
        analytics.
      </p>
    </div>

    <div>
      <p className="uppercase tracking-widest text-xs text-[#6B91AD] font-semibold mb-3">
        Outcome
      </p>

      <p className="text-[#1A1A1A] leading-7">
        Teams make faster decisions using trusted, real-time business data.
      </p>
    </div>
  </div>

  {/* Stats */}
  <div className="mt-12 rounded-2xl bg-[#F5F8FA]">
    <div className="grid grid-cols-1 md:grid-cols-3">

      <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
        <h4 className="text-4xl font-light text-[#161E2F]">40+</h4>
        <p className="text-gray-500 mt-2 text-sm">Dashboards</p>
      </div>

      <div className="py-8 text-center border-b md:border-b-0 md:border-r border-gray-200">
        <h4 className="text-4xl font-light text-[#161E2F]">10x</h4>
        <p className="text-gray-500 mt-2 text-sm">Faster Reporting</p>
      </div>

      <div className="py-8 text-center">
        <h4 className="text-4xl font-light text-[#161E2F]">100%</h4>
        <p className="text-gray-500 mt-2 text-sm">Automated</p>
      </div>

    </div>
  </div>
</div>
    </section>
</App_layout>
  );
}