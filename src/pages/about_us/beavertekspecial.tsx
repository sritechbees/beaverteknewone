"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const features = [
  {
    image: "/home/homehero.jpg",
    title: "Advanced Analytics",
    description:
      "Unlock powerful insights with predictive models and data-driven decision-making tools.",
  },
  {
    image: "/about/AI & AI Agents.jpg",
    title: "AI & AI Agents",
    description:
      "Automate tasks and enhance productivity with next-gen artificial intelligence solutions.",
  },
  {
    image: "/about/Business Intelligence & Reporting1.jpg",
    title: "Business Intelligence & Reporting",
    description:
      "Transform raw data into clear, actionable dashboards and reports for smarter decisions.",
  },
  {
    image: "/about/Data Integration.jpg",
    title: "Data Integration",
    description:
      "Seamlessly connect multiple systems and sources into a unified, consistent data pipeline.",
  },
  {
    image: "/about/Application Development.jpg",
    title: "Application Development",
    description:
      "Build scalable, secure, and high-performing applications tailored to business needs.",
  },
  {
    image: "/about/Mobile Applications.jpg",
    title: "Mobile Applications",
    description:
      "Deliver intuitive, cross-platform mobile apps with modern design and smooth performance.",
  },
  {
    image: "/about/Database Design & Performance Tuning1.jpg",
    title: "Database Design & Performance Tuning",
    description:
      "Design optimized databases with high performance, scalability, and secure architecture.",
  },
  {
    image: "/about/Maintenance & Support Services.jpg",
    title: "Maintenance & Support Services",
    description:
      "Ensure system stability, security, and performance with round-the-clock support.",
  },
  {
    image: "/about/Quality Assurance.jpg",
    title: "Quality Assurance",
    description:
      "Deliver flawless software with automated testing, bug prevention, and QA best practices.",
  },
];

export default function Beavertekspecial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#050507] py-16 text-white sm:py-20 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[#29B6F0]/10 blur-[130px] sm:h-[28rem] sm:w-[28rem]" />

        <div className="absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-[#7A4FD1]/10 blur-[140px] sm:h-[32rem] sm:w-[32rem]" />

        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#B93FC9]/[0.07] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.035)_1px,transparent_1px)] bg-[size:42px_42px] sm:bg-[size:54px_54px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/10 to-[#050507]/70" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md sm:px-5">
            <Sparkles size={14} className="text-[#29B6F0]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4D4D8] sm:text-xs">
              Our Expertise
            </span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundImage: beaverTekGradient }}
            />
          </div>

          <h2 className="mt-6 text-3xl font-black leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            <span className="text-white">
              At BeaverTek, we specialize in
            </span>

            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{ backgroundImage: beaverTekGradient }}
            >
              Technology That Moves You Forward
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base sm:leading-8">
            Explore our capabilities by selecting a service to discover more.
          </p>

          <div
            className="mx-auto mt-7 h-[3px] w-16 rounded-full sm:w-20"
            style={{ backgroundImage: beaverTekGradient }}
          />
        </motion.div>

        {/* ================= SERVICE EXPLORER ================= */}

        <div className="grid grid-cols-1 items-start gap-7 sm:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-14">
          {/* ================= LEFT SERVICE MENU ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] sm:text-xs">
                Explore our services
              </span>

              <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/30 to-transparent" />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {features.map((feature, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={feature.title}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    whileTap={{ scale: 0.99 }}
                    className={`group relative flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-xl border px-3.5 py-3.5 text-left transition-all duration-300 sm:gap-4 sm:px-4 sm:py-4 ${
                      isActive
                        ? "border-white/[0.14] bg-white/[0.075] shadow-[0_8px_30px_rgba(0,0,0,.2)]"
                        : "border-transparent bg-white/[0.018] hover:border-white/[0.09] hover:bg-white/[0.045]"
                    }`}
                  >
                    {/* Active Gradient Strip */}

                    <span
                      className={`absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      }`}
                      style={{ backgroundImage: beaverTekGradient }}
                    />

                    {/* Service Indicator */}

                    <span
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 sm:h-10 sm:w-10 ${
                        isActive
                          ? "border-[#3E7BD6]/30 bg-[#3E7BD6]/15"
                          : "border-white/[0.07] bg-white/[0.035] group-hover:border-white/15"
                      }`}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundImage: isActive
                            ? beaverTekGradient
                            : "linear-gradient(135deg,#52525B,#71717A)",
                        }}
                      />
                    </span>

                    {/* Service Title */}

                    <span
                      className={`min-w-0 flex-1 text-[12px] font-semibold leading-5 transition-colors duration-300 sm:text-sm md:text-[15px] ${
                        isActive
                          ? "text-white"
                          : "text-[#A1A1AA] group-hover:text-[#E4E4E7]"
                      }`}
                    >
                      {feature.title}
                    </span>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#29B6F0] opacity-100"
                          : "-translate-x-1 text-[#71717A] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Bottom Accent */}

                    {isActive && (
                      <motion.span
                        layoutId="beavertek-active-service"
                        className="absolute bottom-0 left-4 right-4 h-px"
                        style={{ backgroundImage: beaverTekGradient }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Menu Footer */}

            <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundImage: beaverTekGradient }}
              />

              <p className="text-[10px] leading-5 text-[#71717A] sm:text-xs">
                Thoughtful technology. Built around your needs.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT FEATURE PANEL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="min-w-0"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0C0C10] shadow-[0_25px_80px_rgba(0,0,0,.35)] sm:rounded-3xl">
              {/* Top Gradient Border */}

              <div
                className="absolute left-0 right-0 top-0 z-20 h-[3px]"
                style={{ backgroundImage: beaverTekGradient }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Feature Image */}

                  <div className="group relative h-56 overflow-hidden bg-[#111116] sm:h-72 md:h-80 lg:h-[340px] xl:h-[380px]">
                    <motion.img
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />

                    {/* Dark Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-[#08080B]/25 to-[#08080B]/5" />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Image Caption */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md sm:text-[10px]">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundImage: beaverTekGradient }}
                        />
                        Featured Expertise
                      </span>

                      <h3 className="mt-3 max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl md:text-4xl">
                        {activeFeature.title}
                      </h3>

                      <div
                        className="mt-4 h-[3px] w-12 rounded-full sm:w-16"
                        style={{ backgroundImage: beaverTekGradient }}
                      />
                    </div>
                  </div>

                  {/* Feature Description */}

                  <div className="relative overflow-hidden p-5 sm:p-7 md:p-8 lg:p-9">
                    {/* Subtle Gradient Detail */}

                    <div
                      className="pointer-events-none absolute right-0 top-0 h-px w-2/3 opacity-40"
                      style={{ backgroundImage: beaverTekGradient }}
                    />

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs">
                        What we do
                      </span>

                      <span className="h-px flex-1 bg-white/[0.09]" />
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B4B4BE] sm:text-base sm:leading-8">
                      {activeFeature.description}
                    </p>

                    {/* Bottom Detail */}

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundImage: beaverTekGradient }}
                        />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#85858D] sm:text-[10px] sm:tracking-[0.19em]">
                          Technology. Refined.
                        </span>
                      </div>

                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.6}
                        className="shrink-0 text-[#29B6F0]"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM ACCENT ================= */}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-12 h-px w-full max-w-5xl origin-center opacity-50 sm:mt-16 lg:mt-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg,transparent,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9,transparent)",
          }}
        />
      </div>
    </section>
  );
}