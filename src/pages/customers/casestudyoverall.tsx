"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import Casestudyall from "./casestudyall";

export default function CaseStudyoverall() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 70,
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      <Casestudyall />

      <section
        id="casestudyoverall"
        className="relative bg-black"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              CASE STUDY 01
          ===================================================== */}

          <div
            data-aos="fade-up"
            className="pt-6 sm:pt-8 lg:pt-10"
          >
            <div className="p-0">

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#29B6F0] sm:px-3.5 sm:py-2 sm:text-[10px]">
                  Financial Services
                </span>

                <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#B93FC9] sm:px-3.5 sm:py-2 sm:text-[10px]">
                  Build Software
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-[34px] lg:text-[40px]">
                Payment Platform at Scale
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-4xl text-[14px] leading-6 text-[#D4D4D8] sm:mt-4 sm:text-[15px] sm:leading-7 lg:text-base">
                We modernized a legacy payment workflow into a secure, enterprise-grade
                transaction platform capable of processing millions of payments with high
                availability, automation and compliance.
              </p>

              {/* Feature Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-4">

                {/* Challenge */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#3E7BD6] hover:shadow-[0_0_25px_rgba(62,123,214,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-xs">
                    Challenge
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Existing payment operations depended on manual processing, resulting
                    in slow settlements, operational risks and scaling limitations.
                  </p>
                </div>

                {/* Solution */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_25px_rgba(122,79,209,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-xs">
                    Solution
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Designed and developed an automated payment gateway platform with
                    secure APIs, monitoring, reporting and enterprise integrations.
                  </p>
                </div>

                {/* Result */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_25px_rgba(185,63,201,.15)] md:col-span-2 lg:col-span-1 sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-xs">
                    Result
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    The platform now serves enterprise customers with reliable
                    high-volume transaction processing and continuous operational
                    support.
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-5 rounded-2xl border border-[#2A2A30] bg-[#121212] p-5 sm:mt-6 sm:p-6">

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Statistics */}
                  <div className="grid w-full grid-cols-3 gap-2 sm:gap-6 lg:w-auto lg:gap-8">

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        150+
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Clients
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        4.5M
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Transactions
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        99.99%
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Uptime
                      </p>
                    </div>

                  </div>

                  <Link
                    href="/customers/PaymentPlatformCaseStudy"
                    className="w-full lg:w-auto"
                  >
                    <button
                      type="button"
                      className="group flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(62,123,214,.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(185,63,201,.25)] sm:px-8 sm:py-3.5 lg:w-auto"
                    >
                      View More
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>


          {/* =====================================================
              CASE STUDY 02
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border-t border-[#2A2A30]/70 pt-7 sm:pt-9 lg:pt-10"
          >
            <div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#29B6F0] sm:px-3.5 sm:py-2 sm:text-[10px]">
                  Healthcare
                </span>

                <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#B93FC9] sm:px-3.5 sm:py-2 sm:text-[10px]">
                  Artificial Intelligence
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-[34px] lg:text-[40px]">
                AI in Real Hospitals
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-4xl text-[14px] leading-6 text-[#D4D4D8] sm:mt-4 sm:text-[15px] sm:leading-7 lg:text-base">
                BeaverHealthAI developed secure AI assistants that integrate directly
                into hospital operations, helping clinicians reduce repetitive
                administrative work while maintaining security, compliance and patient
                privacy.
              </p>

              {/* Feature Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-4">

                {/* Challenge */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#29B6F0] hover:shadow-[0_0_25px_rgba(41,182,240,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-xs">
                    Challenge
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Hospital teams spent significant time on repetitive documentation
                    and administrative workflows, reducing clinical efficiency.
                  </p>
                </div>

                {/* Solution */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_25px_rgba(122,79,209,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-xs">
                    Solution
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Built secure AI copilots connected with hospital systems, electronic
                    medical records and internal healthcare workflows.
                  </p>
                </div>

                {/* Impact */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_25px_rgba(185,63,201,.15)] md:col-span-2 lg:col-span-1 sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-xs">
                    Impact
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Faster clinical operations, improved productivity, enhanced patient
                    experience and enterprise-grade healthcare compliance.
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-5 rounded-2xl border border-[#2A2A30] bg-[#121212] p-5 sm:mt-6 sm:p-6">

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Statistics */}
                  <div className="grid w-full grid-cols-3 gap-2 sm:gap-6 lg:w-auto lg:gap-8">

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        30+
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Hospitals
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        99.9%
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Availability
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        24/7
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Monitoring
                      </p>
                    </div>

                  </div>

                  <Link
                    href="/customers/AIcasestudytwo"
                    className="w-full lg:w-auto"
                  >
                    <button
                      type="button"
                      className="group flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(62,123,214,.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(185,63,201,.25)] sm:px-8 sm:py-3.5 lg:w-auto"
                    >
                      View More
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>


          {/* =====================================================
              CASE STUDY 03
          ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border-t border-[#2A2A30]/70 pt-7 pb-8 sm:pt-9 sm:pb-10 lg:pt-10 lg:pb-12"
          >
            <div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">

                <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#29B6F0] sm:px-4 sm:py-2 sm:text-xs">
                  Business Intelligence
                </span>

                <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B93FC9] sm:px-4 sm:py-2 sm:text-xs">
                  Data Platform
                </span>

              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-[42px]">
                Data that Drives Decisions
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-4xl text-[14px] leading-6 text-[#D4D4D8] sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
                Enterprise reporting systems were consolidated into one intelligent
                analytics platform delivering trusted dashboards, automated reports and
                executive insights in real time.
              </p>

              {/* Feature Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-4">

                {/* Challenge */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#29B6F0] hover:shadow-[0_0_25px_rgba(41,182,240,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-xs">
                    Challenge
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Critical business reports existed across disconnected systems,
                    creating inconsistent data and delayed decisions.
                  </p>
                </div>

                {/* Solution */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_25px_rgba(122,79,209,.15)] sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-xs">
                    Solution
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Built a centralized analytics platform with automated reporting,
                    live dashboards and executive KPI monitoring.
                  </p>
                </div>

                {/* Result */}
                <div className="h-full rounded-2xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_25px_rgba(185,63,201,.15)] md:col-span-2 lg:col-span-1 sm:p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-xs">
                    Result
                  </p>

                  <p className="text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    Decision makers gained instant visibility into performance with
                    trusted real-time business intelligence.
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-5 rounded-2xl border border-[#2A2A30] bg-[#121212] p-5 sm:mt-6 sm:p-6">

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Statistics */}
                  <div className="grid w-full grid-cols-3 gap-2 sm:gap-6 lg:w-auto lg:gap-8">

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        40+
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Dashboards
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        10x
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Faster Reports
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                        100%
                      </h3>
                      <p className="mt-1 text-[11px] text-[#A0A0A8] sm:text-sm">
                        Automated
                      </p>
                    </div>

                  </div>

                  <Link
                    href="/customers/Datathatdrivesdecisionscasestudy"
                    className="w-full lg:w-auto"
                  >
                    <button
                      type="button"
                      className="group flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(62,123,214,.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(185,63,201,.25)] sm:px-8 sm:text-base lg:w-auto"
                    >
                      View More
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </Link>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}