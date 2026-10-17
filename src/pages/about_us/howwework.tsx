
"use client";

import React from "react";

const workSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "We immerse in your business, map the systems and align on the outcomes that matter most.",
    label: "Understand your business",
    accent: "#29B6F0",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Adapt",
    description:
      "We design and build the right solution — iterating quickly with you, not in a black box.",
    label: "Build the right solution",
    accent: "#7A4FD1",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We measure, refine and manage what we deliver so it keeps compounding value over time.",
    label: "Deliver lasting value",
    accent: "#B93FC9",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-4 4" />
        <path d="M15 9h4v4" />
      </svg>
    ),
  },
];

function Howwework() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#29B6F0]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#7A4FD1]/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-sm">
            How We Work
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Learn. Adapt.{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Optimize.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
            Our engagement model mirrors our promise — and it scales from a
            single sprint to a full transformation.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {/* Connecting line on desktop */}
          <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-10 hidden h-px bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/50 to-[#B93FC9]/50 md:block" />

          {workSteps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/[0.09] bg-[#0A0A0A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014] sm:p-8 lg:p-9"
            >
              {/* Number and icon */}
              <div className="relative z-10 mb-8 flex items-center justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#101014]"
                  style={{ color: step.accent }}
                >
                  {step.icon}
                </div>

                <span
                  className="text-sm font-semibold tracking-[0.2em]"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step label */}
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: step.accent }}
              >
                {step.label}
              </p>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-8 h-[2px] w-12 rounded-full transition-all duration-300 group-hover:w-24"
                style={{
                  background: `linear-gradient(90deg, ${step.accent}, #B93FC9)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-sm leading-7 text-[#A0A0A8] sm:text-base">
            One collaborative process.{" "}
            <span className="font-medium text-white">
              Continuous business value.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Howwework;
