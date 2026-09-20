"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

import PaymentPlatformhero from "./PaymentPlatformhero";

export default function PaymentPlatformCaseStudy() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      <PaymentPlatformhero />

      {/* =========================================================
          CASE STUDY CONTENT
      ========================================================= */}
      <section
        id="PaymentPlatformCaseStudy"
        className="scroll-mt-24 overflow-hidden bg-[#000000] py-10 sm:py-12 lg:py-16"
      >
        {/* =========================================================
            OVERVIEW
        ========================================================= */}
        <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-[2px]"
            >
              {/* Gradient Line */}
              <div className="h-[2px] bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]" />

              <div className="grid lg:grid-cols-3">
                {/* Industry */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="group border-b border-white/[0.07] p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6 lg:border-b-0 lg:border-r"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] to-[#3E7BD6] sm:h-11 sm:w-11">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 21h18M5 21V7l7-4 7 4v14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                    Industry
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:to-[#7A4FD1] group-hover:bg-clip-text group-hover:text-transparent sm:text-xl">
                    Financial services
                  </h3>
                </div>

                {/* Service */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="180"
                  className="group border-b border-white/[0.07] p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6 lg:border-b-0 lg:border-r"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3E7BD6] to-[#7A4FD1] sm:h-11 sm:w-11">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                    Service
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#29B6F0] group-hover:via-[#3E7BD6] group-hover:to-[#B93FC9] group-hover:bg-clip-text group-hover:text-transparent sm:text-xl">
                    Build software,
                    <br />
                    modernize
                  </h3>
                </div>

                {/* Status */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="260"
                  className="relative bg-white/[0.02] p-5 sm:p-6"
                >
                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A4FD1] to-[#B93FC9] sm:h-11 sm:w-11">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                      Status
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-snug bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent sm:text-xl">
                      Running in production
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7">
                      Designed, engineered, maintained and continuously
                      supported by BeaverTek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            THE CHALLENGE
        ========================================================= */}
        <section className="relative mt-8 overflow-hidden sm:mt-10 lg:mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
              {/* LEFT */}
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="lg:col-span-4"
              >
                <div className="lg:sticky lg:top-28">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]"
                  />

                  <span
                    data-aos="fade-down"
                    data-aos-delay="150"
                    className="inline-flex rounded-full border border-[#3E7BD6]/25 bg-white/[0.025] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#29B6F0] backdrop-blur-sm sm:text-[11px]"
                  >
                    Case Study
                  </span>

                  <h2
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]"
                  >
                    <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                      The Challenge
                    </span>
                  </h2>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-3 max-w-sm text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7"
                  >
                    Understanding the business problem before designing the
                    right technology solution.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lg:col-span-8 lg:translate-x-[8%]"
              >
                <div className="relative">
                  {/* Quote Icon */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:h-12 sm:w-12"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.08A3.001 3.001 0 017.17 8H9V6H7.17zm10 0A5.001 5.001 0 0012 11v7h7v-7h-3.92A3.001 3.001 0 0117.17 8H19V6h-1.83z" />
                    </svg>
                  </div>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="220"
                    className="max-w-2xl text-base leading-7 text-[#D4D4D8] sm:text-lg sm:leading-8 lg:text-[19px] lg:leading-9"
                  >
                    A growing financial services client needed a payment
                    gateway integration platform that could serve multiple
                    downstream merchants reliably and at scale.The existing
                    process was manual, fragile, and could not keep up with
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE BUILT
        ========================================================= */}
        <section className="relative mt-10 overflow-hidden sm:mt-12 lg:mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
              {/* LEFT CONTENT */}
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="lg:col-span-7"
              >
                <div className="relative">
                  <div
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#29B6F0]" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs">
                      BeaverTek Solution
                    </span>
                  </div>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="180"
                    className="mt-5 max-w-2xl text-base leading-7 text-[#D4D4D8] sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
                  >
                    A purpose-built payment gateway integration platform —
                    designed, engineered, and now supported by
                    <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text font-bold text-transparent">
                      {" "}
                      BeaverTek{" "}
                    </span>
                    end-to-end.
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="280"
                    className="mt-6 flex max-w-2xl items-center gap-3 sm:mt-7"
                  >
                    <div className="h-[2px] flex-1 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#29B6F0] sm:text-[11px]">
                      Production Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT HEADING */}
              <div
                data-aos="fade-left"
                data-aos-duration="900"
                className="lg:col-span-5"
              >
                <div className="lg:pt-1">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="inline-flex items-center rounded-full border border-[#3E7BD6]/25 bg-white/[0.025] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#29B6F0] backdrop-blur-sm sm:px-4 sm:text-[11px]"
                  >
                    Solution
                  </div>

                  <h2
                    data-aos="fade-up"
                    data-aos-delay="180"
                    className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[44px]"
                  >
                    <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                      What We Built
                    </span>
                  </h2>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="280"
                    className="mt-5 h-[3px] w-16 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:w-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RESULTS
        ========================================================= */}
        <section className="relative overflow-hidden py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="border-b border-white/[0.08] pb-6 sm:pb-7 lg:pb-8">
              <span
                data-aos="fade-right"
                data-aos-delay="100"
                className="inline-flex items-center rounded-full border border-[#3E7BD6]/25 bg-white/[0.025] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#29B6F0] backdrop-blur-sm sm:px-3.5 sm:text-[11px]"
              >
                Where It Stands Today
              </span>

              <h2
                data-aos="fade-up"
                data-aos-delay="180"
                className="mt-4 max-w-xl text-2xl font-black leading-[1.12] sm:text-3xl lg:text-[38px]"
              >
                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                  Built to Scale.
                  <br />
                  Running Every Day.
                </span>
              </h2>

              <div
                data-aos="zoom-in"
                data-aos-delay="260"
                className="mt-4 h-[3px] w-14 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:w-16"
              />
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3">
              {/* Stat 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r md:pr-7 lg:py-6"
              >
                <h3 className="text-4xl font-black tracking-tight bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] bg-clip-text text-transparent sm:text-[44px]">
                  150
                </h3>

                <p className="mt-1.5 max-w-xs text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#A0A0A8] sm:text-[11px]">
                  Clients on the Platform
                </p>
              </div>

              {/* Stat 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="180"
                className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r md:px-7 lg:py-6"
              >
                <h3 className="text-4xl font-black tracking-tight bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] bg-clip-text text-transparent sm:text-[44px]">
                  4.5M
                </h3>

                <p className="mt-1.5 max-w-xs text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#A0A0A8] sm:text-[11px]">
                  Transactions Every Month
                </p>
              </div>

              {/* Stat 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="260"
                className="py-5 md:pl-7 lg:py-6"
              >
                <h3 className="text-3xl font-black tracking-tight bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] bg-clip-text text-transparent sm:text-4xl">
                  Ongoing
                </h3>

                <p className="mt-1.5 max-w-xs text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#A0A0A8] sm:text-[11px]">
                  Support & Maintenance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY IT MATTERS
        ========================================================= */}
        <section className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-10">
              {/* LEFT */}
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="lg:col-span-7"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="80"
                  className="mb-4 flex items-center gap-3"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                    WHY IT MATTERS
                  </span>

                  <span className="h-px w-9 bg-[#29B6F0] sm:w-12" />
                </div>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="160"
                  className="max-w-4xl text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-[44px] lg:text-[50px]"
                >
                  <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                    When the platform you build
                    <br />
                    handles money,
                  </span>

                  <br />

                  <span className="text-white">"mostly working"</span>

                  <span className="text-[#29B6F0]">
                    {" "}
                    is not a real option.
                  </span>
                </h2>
              </div>

              {/* DIVIDER */}
              <div
                data-aos="fade"
                data-aos-delay="200"
                className="hidden h-28 w-px bg-gradient-to-b from-transparent via-[#3E7BD6]/60 to-transparent lg:col-span-1 lg:block"
              />

              {/* RIGHT */}
              <div
                data-aos="fade-left"
                data-aos-duration="900"
                className="lg:col-span-4"
              >
                <p
                  data-aos="fade-up"
                  data-aos-delay="220"
                  className="max-w-lg text-base leading-7 text-[#D4D4D8] sm:text-lg sm:leading-8"
                >
                  This client trusted us with the system their business runs
                  on - and we have not let them down.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="320"
                  className="mt-6 border-t border-white/[0.08] pt-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-[11px]">
                        Production Ready
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-5 text-white sm:text-sm">
                        Trusted for mission-critical business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CASE STUDY NAVIGATION
        ========================================================= */}
        <section className="relative mt-10 overflow-hidden py-8 sm:mt-12 sm:py-10 lg:mt-1 lg:py-12">
          {/* Mild Background Gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-l from-[#7A4FD1]/[0.035] via-transparent to-[#29B6F0]/[0.03]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-7">
              {/* Previous */}
              <Link
                href="/customers/casestudyhero"
                data-aos="fade-right"
                data-aos-duration="900"
                className="group"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-[2px] transition-all duration-500 hover:border-[#29B6F0]/50 hover:bg-white/[0.04] sm:p-6">
                  {/* BeaverTek Gradient Overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 origin-left transform transition-transform duration-500 ${
                      hoveredCard === 0
                        ? "scale-x-100 bg-[linear-gradient(135deg,rgba(41,182,240,0.08)_0%,rgba(62,123,214,0.08)_35%,rgba(122,79,209,0.08)_70%,rgba(185,63,201,0.08)_100%)]"
                        : "scale-x-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                      Previous
                    </span>

                    <h3 className="mt-3 text-2xl font-black leading-tight sm:text-[28px]">
                      <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_30%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                        All Case
                        <br />
                        Studies
                      </span>
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                      Browse every BeaverTek customer success story and product
                      transformation.
                    </p>

                    <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#29B6F0] transition-transform duration-300 group-hover:-translate-x-1">
                      <span className="text-xl">←</span>
                      Back to Library
                    </div>
                  </div>
                </div>
              </Link>

              {/* Center */}
              <div
                data-aos="zoom-in"
                data-aos-delay="150"
                className="hidden items-center justify-center lg:flex"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-sm font-semibold text-white">
                    →
                  </div>
                </div>
              </div>

              {/* Next */}
              <Link
                href="/customers/AIcasestudytwo"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="900"
                className="group"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-l from-[#171329]/80 via-[#101218]/90 to-[#0D0D0D]/90 p-5 backdrop-blur-[2px] transition-all duration-500 hover:border-[#B93FC9]/50 sm:p-6">
                  {/* BeaverTek Gradient Overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 origin-left transform transition-transform duration-500 ${
                      hoveredCard === 1
                        ? "scale-x-100 bg-[linear-gradient(135deg,rgba(41,182,240,0.08)_0%,rgba(62,123,214,0.08)_35%,rgba(122,79,209,0.08)_70%,rgba(185,63,201,0.08)_100%)]"
                        : "scale-x-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px]">
                      Next Case Study
                    </span>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-[28px]">
                      AI In
                      <br />
                      Real Hospitals
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7">
                      Discover how BeaverTek built an AI healthcare platform
                      used in modern hospitals.
                    </p>

                    <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#29B6F0] transition-transform duration-300 group-hover:translate-x-1">
                      Continue
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </App_layout>
  );
}