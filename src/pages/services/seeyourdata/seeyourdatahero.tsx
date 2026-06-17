"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import { Database, BarChart3, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import SeeYourDataContent from "./seeyourdatacontent";

export default function HeroSection() {
  return (
    <App_layout>
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#E8EFF4] pt-36 pb-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#6B91AD]/10 blur-[120px]"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute right-0 top-32 h-[32rem] w-[32rem] rounded-full bg-[#161E2F]/10 blur-[150px]"
        />

        <div className="absolute left-1/2 bottom-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#23314F]/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ================= Left ================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold tracking-[0.25em] text-[#23314F]">
              DATA AND ANALYTICS
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#161E2F] lg:text-7xl">
              Your data is
              <br />
              already there.
              <br />
              <span className="bg-gradient-to-r from-[#161E2F] via-[#23314F] to-[#6B91AD] bg-clip-text text-transparent">
                Let's make it useful.
              </span>
            </h1>

            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD]" />

            <p className="mt-10 max-w-xl text-lg leading-9 text-[#1A1A1A]/75">
              Connect your business data into one intelligent view,
              giving your team the clarity to make faster and better
              decisions every day.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#content"
                className="group inline-flex items-center rounded-full bg-[#161E2F] px-8 py-4 text-white transition-all duration-300 hover:bg-[#23314F]"
              >
                Show me what's possible

                <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

            </div>

        </motion.div>

          {/* ================= Right ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            {/* Glow */}

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-[#161E2F]/10 via-[#6B91AD]/20 to-[#23314F]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

              {/* Top */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-[#6B91AD]">
                    Live Dashboard
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#161E2F]">
                    Business Insights
                  </h3>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#161E2F] to-[#6B91AD]">

                  <Database className="h-8 w-8 text-white" />

                </div>

              </div>

              {/* Chart */}

              <div className="mt-10 rounded-3xl bg-[#F8FAFC] p-6">

                <div className="flex items-end justify-between gap-3 h-44">

                  {[40, 70, 55, 95, 80, 120, 150].map((item) => (

                    <motion.div
                      key={item}
                      initial={{ height: 0 }}
                      animate={{ height: item }}
                      transition={{
                        duration: 1,
                      }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-[#161E2F] to-[#6B91AD]"
                    />

                  ))}

                </div>

              </div>

              {/* Cards */}

              <div className="mt-8 grid gap-5">

                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] p-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFF4]">

                      <BarChart3 className="text-[#23314F]" />

                    </div>

                    <div>

                      <h4 className="font-bold text-[#161E2F]">
                        Executive Dashboard
                      </h4>

                      <p className="text-sm text-[#1A1A1A]/60">
                        Live KPIs
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Live
                  </span>

                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] p-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFF4]">

                      <LineChart className="text-[#23314F]" />

                    </div>

                    <div>

                      <h4 className="font-bold text-[#161E2F]">
                        Data Pipeline
                      </h4>

                      <p className="text-sm text-[#1A1A1A]/60">
                        Automated Integration
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#23314F]">
                    Active
                  </span>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
      >

        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-[#6B91AD]">

          <div className="mt-2 h-3 w-3 rounded-full bg-[#6B91AD]" />

        </div>

      </motion.div>

    </section>
    <SeeYourDataContent/>
    </App_layout>
  );
}