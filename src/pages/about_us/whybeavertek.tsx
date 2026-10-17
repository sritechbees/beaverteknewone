
"use client";

import React from "react";

const benefits = [
  {
    title: "Security & reliability by default",
    description:
      "Best-practice security, compliance and resilience baked into everything we ship.",
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
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    accent: "#29B6F0",
  },
  {
    title: "Fast, senior delivery",
    description:
      "Small, senior teams that move quickly and communicate clearly from day one.",
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
        <path d="M13 2 3 14h8l-1 8 11-12h-8l1-8Z" />
      </svg>
    ),
    accent: "#7A4FD1",
  },
  {
    title: "Long-term partnership",
    description:
      "We support what we build — and keep optimizing it as your business evolves.",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
    accent: "#B93FC9",
  },
];

const stats = [
  {
    value: "7",
    label: "Service practices under one roof",
  },
  {
    value: "24/7",
    label: "Managed support & monitoring",
  },
  {
    value: "100%",
    label: "Outcome-focused engagements",
  },
  {
    value: "∞",
    label: "Continuous optimization",
  },
];

function Whybeavertek() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#29B6F0]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0] sm:text-sm">
            Why BeaverTek
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            A partner that builds{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              for outcomes
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
            We combine senior engineering with a business-first mindset —
            measured by the results we deliver, not the hours we bill.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative flex h-full flex-col rounded-2xl border border-white/[0.09] bg-[#0A0A0A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014] sm:p-7 lg:p-8"
            >
              {/* Icon */}
              <div
                className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300"
                style={{ color: benefit.accent }}
              >
                {benefit.icon}
              </div>

              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#A0A0A8] sm:text-base">
                {benefit.description}
              </p>

              {/* Bottom gradient accent */}
              <div
                className="mt-7 h-[2px] w-12 rounded-full transition-all duration-300 group-hover:w-24"
                style={{
                  background: `linear-gradient(90deg, ${benefit.accent}, #B93FC9)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
          <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index < stats.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <p className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mx-auto mt-3 max-w-[190px] text-xs leading-6 text-[#A0A0A8] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whybeavertek;
