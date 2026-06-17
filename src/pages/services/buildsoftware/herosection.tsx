"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BuildSoftwareContent from "./buildsoftwarecontent";
import BuildSoftwareContentPart3 from "./whothisisfor";
import WhoThisIsFor from "./whothisisfor";

export default function HeroSection() {
  return (
    <App_layout>
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E8EFF4] blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#6B91AD]/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8EFF420_1px,transparent_1px),linear-gradient(to_bottom,#E8EFF420_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B91AD]"
            >
              APPLICATION DEVELOPMENT
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 text-5xl font-bold leading-tight tracking-tight text-[#161E2F] md:text-6xl lg:text-7xl"
            >
              Custom software,
              <br />
              taken from
              <span className="block text-[#6B91AD]">
                concept to working.
              </span>
            </motion.h1>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-12"
            >
              <button className="group inline-flex items-center gap-3 rounded-full bg-[#161E2F] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#23314F]">
                Start Your Project

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-[#6B91AD]/20 blur-3xl" />

            {/* Glass Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="space-y-6">
                {/* Window */}
                <div className="rounded-2xl bg-[#161E2F] p-5 text-white">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 rounded bg-white/20" />
                    <div className="h-3 w-4/5 rounded bg-white/20" />
                    <div className="h-3 w-3/5 rounded bg-[#6B91AD]" />
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {["Design", "Develop", "Deploy", "Scale"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                      }}
                      className="rounded-2xl border border-[#E8EFF4] bg-[#F8FAFC] p-5 text-center shadow-sm"
                    >
                      <div className="mb-3 h-10 w-10 rounded-xl bg-[#6B91AD]/20 mx-auto" />

                      <p className="font-semibold text-[#161E2F]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-medium text-[#161E2F]">
                    <span>Project Progress</span>
                    <span>100%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-[#E8EFF4]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 2,
                      }}
                      className="h-full rounded-full bg-[#6B91AD]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -left-6 top-10 hidden rounded-2xl border border-[#E8EFF4] bg-white p-5 shadow-xl md:block"
            >
              <p className="text-sm text-[#6B91AD] font-semibold">
                From Idea
              </p>

              <h4 className="mt-1 text-xl font-bold text-[#161E2F]">
                → Working Product
              </h4>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-5 bottom-12 hidden rounded-2xl bg-[#161E2F] px-6 py-4 text-white shadow-xl lg:block"
            >
              <p className="text-sm text-white/70">
                Build Faster
              </p>

              <h3 className="text-2xl font-bold">
                Launch Confidently
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    <BuildSoftwareContent/>
    <WhoThisIsFor/>
    </App_layout>
  );
}