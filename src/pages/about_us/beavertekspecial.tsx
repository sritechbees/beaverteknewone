
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const features = [
  {
    image: "/about/Advanced Analytics.jpg",
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
    <section className="relative isolate w-full overflow-hidden bg-[#050507] py-10 text-white sm:py-12 lg:py-14">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full opacity-10 blur-[110px]"
        style={{ backgroundImage: beaverTekGradient }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-once="true"
          data-aos-offset="60"
          className="mx-auto mb-8 w-full max-w-4xl px-1 text-center sm:mb-10 md:mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 backdrop-blur-md sm:gap-2.5 sm:px-5">
            <Sparkles
              size={14}
              className="shrink-0 text-[#29B6F0] sm:h-4 sm:w-4"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D4D4D8] sm:text-[11px] sm:tracking-[0.22em] md:text-xs">
              Our Expertise
            </span>

            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundImage: beaverTekGradient }}
            />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-[27px] font-extrabold leading-[1.2] tracking-[-0.04em] sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl">
            <span className="text-white">Technology That </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: beaverTekGradient }}
            >
              Moves You Forward
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-[#A1A1AA] sm:mt-4 sm:text-sm sm:leading-7 md:max-w-2xl md:text-base md:leading-8">
            Discover our technology solutions built for business growth.
          </p>

          <div
            className="mx-auto mt-5 h-[3px] w-14 rounded-full sm:mt-6 sm:w-16 md:w-20"
            style={{ backgroundImage: beaverTekGradient }}
          />
        </div>

        {/* Service Explorer */}
        <div className="grid grid-cols-1 items-start gap-7 sm:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10 xl:gap-12">
          {/* Left: Service Titles */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] sm:text-xs">
                Explore Our Services
              </span>

              <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/30 to-transparent" />
            </div>

            <div className="space-y-2 sm:space-y-2.5">
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
                    className={`group flex w-full min-w-0 items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6F0]/70 sm:py-3 ${
                      isActive
                        ? "bg-white/[0.055]"
                        : "hover:bg-white/[0.025]"
                    }`}
                  >
                    {/* Active Gradient Indicator */}
                    <span
                      aria-hidden="true"
                      className={`h-5 w-[3px] shrink-0 rounded-full transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ backgroundImage: beaverTekGradient }}
                    />

                    {/* Service Title */}
                    <span
                      className={`min-w-0 flex-1 text-[13px] font-semibold leading-5 transition-colors duration-300 sm:text-sm md:text-[15px] ${
                        isActive
                          ? "text-white"
                          : "text-[#92929D] group-hover:text-white"
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundImage: beaverTekGradient,
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }
                          : undefined
                      }
                    >
                      {feature.title}
                    </span>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        x: isActive ? 3 : 0,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="flex shrink-0 items-center"
                    >
                      <ArrowRight
                        size={17}
                        strokeWidth={1.8}
                        className={
                          isActive
                            ? "text-[#29B6F0]"
                            : "text-[#71717A] group-hover:text-[#29B6F0]"
                        }
                      />
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Smaller Image + Content Below */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto w-full min-w-0 max-w-[590px] lg:max-w-none"
          >
            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0D] p-1.5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:p-2">
              <div className="relative h-[210px] overflow-hidden rounded-xl bg-[#101015] sm:h-[260px] sm:rounded-2xl md:h-[290px] lg:h-[310px] xl:h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    {/* 360-degree clockwise image rotation */}
                    <motion.img
                      key={`image-${activeFeature.title}`}
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      initial={{ rotate: 0, scale: 1.45 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        rotate: {
                          duration: 0.85,
                          ease: [0.22, 0.61, 0.36, 1],
                        },
                        scale: {
                          duration: 0.85,
                          ease: [0.22, 0.61, 0.36, 1],
                        },
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                  </motion.div>
                </AnimatePresence>

                {/* Image corner accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-3 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-[#29B6F0]/70 sm:left-4 sm:top-4"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-[#B93FC9]/70 sm:bottom-4 sm:right-4"
                />
              </div>
            </div>

            {/* Title and Description Below Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeFeature.title}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="px-1 pb-1 pt-4 sm:pt-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-7 w-1 shrink-0 rounded-full sm:h-8"
                    style={{ backgroundImage: beaverTekGradient }}
                  />

                  <h3 className="min-w-0 text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl md:text-2xl">
                    {activeFeature.title}
                  </h3>
                </div>

                <p className="mt-3 pl-4 text-[13px] leading-6 text-[#A1A1AA] sm:text-sm sm:leading-7">
                  {activeFeature.description}
                </p>

                {/* Bottom Gradient Accent */}
                <div
                  className="ml-4 mt-4 h-[2px] w-12 rounded-full sm:mt-5"
                  style={{ backgroundImage: beaverTekGradient }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
