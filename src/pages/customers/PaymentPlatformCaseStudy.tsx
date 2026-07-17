"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import { motion } from "framer-motion";
import PaymentPlatformhero from "./PaymentPlatformhero";

export default function PaymentPlatformCaseStudy() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <App_layout>
      <PaymentPlatformhero />
      <section className="bg-[#000000] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Overview Card */}
          <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-28">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/15 blur-[150px]" />

              <div className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/15 blur-[170px]" />

              <div className="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
              {/* Overview Card */}

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-2xl"
              >
                {/* Gradient Border */}

                <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

                <div className="grid lg:grid-cols-3">
                  {/* ================= Industry ================= */}

                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="group relative border-b border-[#2A2A30] p-8 transition-all duration-500 hover:bg-white/[0.03] lg:border-b-0 lg:border-r"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] shadow-[0_0_25px_rgba(41,182,240,.35)]">
                      <svg
                        className="h-7 w-7 text-white"
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

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
                      Industry
                    </p>

                    <h3 className="mt-5 text-3xl font-bold text-white transition duration-500 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)] group-hover:bg-clip-text group-hover:text-transparent">
                      Financial services
                    </h3>
                  </div>

                  {/* ================= Service ================= */}

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    className="group relative border-b border-[#2A2A30] p-8 transition-all duration-500 hover:bg-white/[0.03] lg:border-b-0 lg:border-r"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] shadow-[0_0_25px_rgba(62,123,214,.35)]">
                      <svg
                        className="h-7 w-7 text-white"
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

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
                      Service
                    </p>

                    <h3 className="mt-5 text-3xl font-bold leading-snug text-white transition duration-500 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent">
                      Build software,
                      <br />
                      modernize
                    </h3>
                  </div>

                  {/* ================= Status ================= */}

                  <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="relative overflow-hidden bg-[linear-gradient(135deg,#121212,#18181B)] p-8"
                  >
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#29B6F0]/10 blur-[90px]" />

                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#B93FC9]/10 blur-[90px]" />

                    <div className="relative z-10">
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] shadow-[0_0_25px_rgba(185,63,201,.35)]">
                        <svg
                          className="h-7 w-7 text-white"
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

                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
                        Status
                      </p>

                      <h3 className="mt-5 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-3xl font-bold text-transparent">
                        Running in production
                      </h3>

                      <p className="mt-6 leading-8 text-[#D4D4D8]">
                        Designed, engineered, maintained and continuously
                        supported by BeaverTek.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================================================= */}
          {/* <section> Challenge Section */}
          {/* ========================================================= */}

          <section className="relative mt-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

              <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/10 blur-[140px]" />
            </div>

            <div className="relative grid gap-14 lg:grid-cols-12">
              {/* ========================================================= */}
              {/* Left Content */}
              {/* ========================================================= */}

              <div
                className="lg:col-span-4"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="sticky top-28">
                  {/* Step */}

                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-xl font-bold text-white shadow-[0_0_35px_rgba(62,123,214,.35)]">
                      01
                    </div>

                    <div className="h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />
                  </div>

                  {/* Badge */}

                  <span className="mt-10 inline-flex rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur-xl">
                    Case Study
                  </span>

                  {/* Heading */}

                  <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
                    <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                      The Challenge
                    </span>
                  </h2>

                  <p className="mt-6 max-w-sm leading-8 text-[#A0A0A8]">
                    Understanding the business problem before designing the
                    right technology solution.
                  </p>
                </div>
              </div>

              {/* ========================================================= */}
              {/* Right Card */}
              {/* ========================================================= */}

              <div
                className="lg:col-span-8"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="group relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212]/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_45px_rgba(62,123,214,.30)] md:p-12">
                  {/* Top Gradient */}

                  <div className="absolute left-0 top-0 h-[4px] w-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

                  {/* Glow */}

                  <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[#B93FC9]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Quote Icon */}

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.08A3.001 3.001 0 017.17 8H9V6H7.17zm10 0A5.001 5.001 0 0012 11v7h7v-7h-3.92A3.001 3.001 0 0117.17 8H19V6h-1.83z" />
                    </svg>
                  </div>

                  {/* Paragraph 1 */}

                  <p
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="text-lg leading-9 text-[#D4D4D8]"
                  >
                    A growing financial services client needed a payment gateway
                    integration platform that could serve multiple downstream
                    merchants reliably and at scale.
                  </p>

                  {/* Divider */}

                  <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/60 to-transparent" />

                  {/* Paragraph 2 */}

                  <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-lg leading-9 text-[#D4D4D8]"
                  >
                    The existing process was manual, fragile, and could not keep
                    up with growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* </section> Challenge Section End */}
          {/* ========================================================= */}

          {/* =========================================================
    SECTION — WHAT WE BUILT
========================================================= */}

          <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 left-0 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/10 blur-[140px]" />

              <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/10 blur-[160px]" />

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[150px]" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <div className="grid gap-16 lg:grid-cols-12">
              {/* ================= LEFT ================= */}

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                data-aos="fade-right"
                data-aos-duration="900"
                className="lg:col-span-4"
              >
                <div className="sticky top-28">
                  {/* Number */}

                  <div className="relative inline-flex">
                    <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] blur-xl opacity-50" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-xl font-black text-white shadow-[0_0_35px_rgba(62,123,214,.45)]">
                      02
                    </div>
                  </div>

                  {/* Badge */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-8 inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl"
                  >
                    Solution
                  </div>

                  {/* Heading */}

                  <h2
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-6 text-4xl font-black leading-tight lg:text-5xl"
                  >
                    <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                      What We Built
                    </span>
                  </h2>

                  {/* Gradient Line */}

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="mt-8 h-[4px] w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_25px_rgba(62,123,214,.4)]"
                  />
                </div>
              </motion.div>

              {/* ================= RIGHT ================= */}

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                data-aos="fade-left"
                data-aos-duration="1000"
                className="lg:col-span-8"
              >
                <div className="group relative overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[#121212] p-10 shadow-[0_20px_60px_rgba(0,0,0,.45)] transition-all duration-700 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.30)] lg:p-14">
                  {/* Hover Glow */}

                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-700 group-hover:opacity-100" />

                  <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#B93FC9]/10 blur-[130px] opacity-0 transition duration-700 group-hover:opacity-100" />

                  {/* Top Label */}

                  <div
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="relative z-10 flex items-center gap-3"
                  >
                    <div className="h-3 w-3 rounded-full bg-[#29B6F0] shadow-[0_0_18px_#29B6F0]" />

                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0]">
                      BeaverTek Solution
                    </span>
                  </div>

                  {/* Content */}

                  <p
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="relative z-10 mt-8 text-xl leading-10 text-[#D4D4D8] lg:text-2xl"
                  >
                    A purpose-built payment gateway integration platform —
                    designed, engineered, and now supported by
                    <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text font-bold text-transparent">
                      {" "}
                      BeaverTek{" "}
                    </span>
                    end-to-end.
                  </p>

                  {/* Bottom Accent */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="relative z-10 mt-10 flex items-center gap-4"
                  >
                    <div className="h-[3px] flex-1 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#29B6F0]">
                      Production Ready
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* =========================================================
    SECTION — RESULTS
========================================================= */}

          <section className="relative py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/10 blur-[140px]" />

              <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/10 blur-[150px]" />

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B93FC9]/5 blur-[140px]" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_70px_rgba(0,0,0,.45)]"
            >
              {/* Hover Glow */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

              <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#B93FC9]/10 blur-[140px]" />

              {/* ================= Header ================= */}

              <div className="relative border-b border-[#2A2A30] p-8 md:p-12">
                <span
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#0F172A]/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl"
                >
                  Where It Stands Today
                </span>

                <h2
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="mt-8 text-4xl font-black leading-tight md:text-5xl"
                >
                  <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                    Built to Scale.
                    <br />
                    Running Every Day.
                  </span>
                </h2>

                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="mt-8 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]"
                />
              </div>

              {/* ================= Stats ================= */}

              <div className="grid md:grid-cols-3">
                {/* Card 1 */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="group relative overflow-hidden border-b border-[#2A2A30] p-10 text-center transition-all duration-500 md:border-b-0 md:border-r hover:bg-[#161616]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] scale-x-0 transition duration-500 group-hover:scale-x-100" />

                  <h3 className="text-6xl font-black bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] bg-clip-text text-transparent">
                    150
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A0A0A8]">
                    Clients on the Platform
                  </p>
                </div>

                {/* Card 2 */}

                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="250"
                  className="group relative overflow-hidden border-b border-[#2A2A30] p-10 text-center transition-all duration-500 md:border-b-0 md:border-r hover:bg-[#161616]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] scale-x-0 transition duration-500 group-hover:scale-x-100" />

                  <h3 className="text-6xl font-black bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] bg-clip-text text-transparent">
                    4.5M
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A0A0A8]">
                    Transactions Every Month
                  </p>
                </div>

                {/* Card 3 */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="400"
                  className="group relative overflow-hidden p-10 text-center transition-all duration-500 hover:bg-[#161616]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] scale-x-0 transition duration-500 group-hover:scale-x-100" />

                  <h3 className="text-5xl font-black bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                    Ongoing
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A0A0A8]">
                    Support & Maintenance
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
          {/* =========================================================
    SECTION — WHY IT MATTERS
========================================================= */}

          <section className="relative mt-24 overflow-hidden rounded-[40px] border border-[#2A2A30] bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            {/* ================= Background ================= */}

            <div className="absolute inset-0 overflow-hidden">
              {/* Gradient Glow */}
              <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/12 blur-[150px]" />

              <div className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/12 blur-[170px]" />

              <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[140px]" />

              {/* AI Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,18,18,.92),rgba(10,10,10,.88))]" />
            </div>

            {/* ================= Content ================= */}

            <div className="relative z-10 p-8 md:p-14 lg:p-16">
              {/* Badge */}

              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#0F172A]/70 px-6 py-2 backdrop-blur-xl"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

                <span className="text-xs font-bold uppercase tracking-[0.30em] text-[#29B6F0]">
                  WHY IT MATTERS
                </span>
              </div>

              {/* Heading */}

              <h2
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="900"
                className="mt-8 max-w-5xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
              >
                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                  When the platform you build
                  <br />
                  handles money,
                </span>

                <br />

                <span className="text-white">"mostly working"</span>

                <span className="text-[#29B6F0]"> is not a real option.</span>
              </h2>

              {/* Divider */}

              <div
                data-aos="zoom-in"
                data-aos-delay="250"
                className="mt-8 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_35px_rgba(62,123,214,.45)]"
              />

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="350"
                className="mt-10 max-w-4xl text-lg leading-9 text-[#D4D4D8]"
              >
                This client trusted us with the system their business runs on -
                and we have not let them down.
              </p>

              {/* Bottom Highlight */}

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-12 inline-flex items-center rounded-2xl border border-[#2A2A30] bg-[#161616]/80 px-6 py-5 backdrop-blur-xl shadow-[0_0_30px_rgba(41,182,240,.08)]"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_20px_rgba(62,123,214,.35)]">
                  <svg
                    className="h-6 w-6 text-white"
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
                  <p className="text-sm uppercase tracking-[0.24em] text-[#29B6F0]">
                    Production Ready
                  </p>

                  <p className="mt-1 text-white font-semibold">
                    Trusted for mission-critical business operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
    SECTION — CASE STUDY NAVIGATION
========================================================= */}

        {/* ========================================================= */}
{/* CASE STUDY NAVIGATION */}
{/* ========================================================= */}

<section className="relative mt-28 overflow-hidden py-10">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 left-0 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:54px_54px]" />

  </div>

  <div className="relative mx-auto max-w-7xl">

    <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">

      {/* ================================================= */}
      {/* Previous */}
      {/* ================================================= */}

      <Link
        href="/customers/casestudyhero"
        data-aos="fade-right"
        data-aos-duration="900"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[#111111]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0] hover:shadow-[0_25px_60px_rgba(41,182,240,.20)]">

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#29B6F0]">
            Previous
          </span>

          <h3 className="mt-5 text-3xl font-black leading-tight">

  <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_30%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

    All Case
    <br />
    Studies

  </span>

</h3>

          <p className="mt-5 text-[#A0A0A8] leading-8">
            Browse every BeaverTek customer success story and product
            transformation.
          </p>

          <div className="mt-8 flex items-center gap-3 text-[#29B6F0] font-semibold transition group-hover:-translate-x-2">

            <span className="text-2xl">←</span>

            Back to Library

          </div>

        </div>

      </Link>

      {/* Center */}

      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        className="hidden lg:flex h-20 w-20 items-center justify-center rounded-full border border-[#2A2A30] bg-[#121212] shadow-[0_0_35px_rgba(62,123,214,.15)]"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-white">

          →

        </div>

      </div>

      {/* ================================================= */}
      {/* Next */}
      {/* ================================================= */}

      <Link
        href="/customers/AIcasestudytwo"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="900"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[linear-gradient(135deg,#0D1117,#141822,#1B1630)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B93FC9] hover:shadow-[0_30px_70px_rgba(122,79,209,.25)]">

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] opacity-[0.06]" />

          <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-[#B93FC9]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">

            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#29B6F0]">
              Next Case Study
            </span>

            <h3 className="mt-5 text-3xl font-black text-white">
              AI In
              <br />
              Real Hospitals
            </h3>

            <p className="mt-5 text-[#D4D4D8] leading-8">
              Discover how BeaverTek built an AI healthcare platform used
              in modern hospitals.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[#29B6F0] font-semibold transition group-hover:translate-x-2">

              Continue

              <span className="text-2xl">→</span>

            </div>

          </div>

        </div>

      </Link>

    </div>

  </div>

</section>          
        </div>
      </section>
    </App_layout>
  );
}
