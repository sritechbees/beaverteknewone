
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        className="h-7 w-7 sm:h-8 sm:w-8"
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
        className="h-7 w-7 sm:h-8 sm:w-8"
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
        className="h-7 w-7 sm:h-8 sm:w-8"
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
  const beaverTekGradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 35,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#050507] px-4 py-9 text-white sm:px-6 sm:py-11 lg:px-8 lg:py-14">
      {/* Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-12 -z-10 h-64 w-64 rounded-full bg-[#29B6F0]/[0.07] blur-[100px] sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-[35%] -z-10 h-72 w-72 rounded-full bg-[#7A4FD1]/[0.07] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-56 w-[75%] -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.035] blur-[100px]"
      />

      {/* Subtle Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.35) 1px,transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "linear-gradient(to bottom,black 0%,transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,black 0%,transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <header
          data-aos="fade-up"
          className="mx-auto mb-7 max-w-3xl text-center sm:mb-9 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-white/[0.09] bg-white/[0.035] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#29B6F0] opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#29B6F0]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4D4D8] sm:text-[11px]">
              Why BeaverTek
            </span>
          </div>

          <h2 className="mt-4 text-[26px] font-extrabold leading-[1.18] tracking-[-0.035em] sm:mt-4 sm:text-3xl md:text-[2.15rem] lg:text-[2.6rem]">
            A partner that builds{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: beaverTekGradient }}
            >
              for outcomes
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-[#A0A0A8] sm:mt-3 sm:text-sm sm:leading-7">
            We combine senior engineering with a business-first mindset —
            measured by the results we deliver, not the hours we bill.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-px w-20 sm:mt-5 sm:w-24"
            style={{
              background:
                "linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,transparent)",
            }}
          />
        </header>

       
{/* Benefits */}
<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
  {benefits.map((benefit, index) => {
    const reverseOverlay = index % 2 === 1;

    return (
      <article
        key={benefit.title}
        data-aos="fade-up"
        data-aos-delay={index * 80}
        className="group relative isolate flex min-w-0 flex-col overflow-hidden border border-white/[0.08] bg-[#09090D] p-4 transition-all duration-300 hover:border-white/30 sm:p-5 lg:p-5"
      >
        {/* Animated White Overlay */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 bg-white transition-transform duration-500 ease-in-out ${
            reverseOverlay
              ? "translate-x-full group-hover:translate-x-0"
              : "-translate-x-full group-hover:translate-x-0"
          }`}
        />

        {/* Card Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 z-0 h-36 w-36 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-10"
          style={{ backgroundColor: benefit.accent }}
        />

        {/* Corner Detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 h-8 w-8 opacity-50 transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background: `linear-gradient(135deg,transparent 48%,${benefit.accent}30 49%,${benefit.accent}30 51%,transparent 52%)`,
          }}
        />

       

        {/* Icon */}
        <div
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.09] transition-all duration-500 group-hover:border-black/15 sm:h-13 sm:w-13"
          style={{
            background: `linear-gradient(145deg,${benefit.accent}18,rgba(255,255,255,0.015))`,
            color: benefit.accent,
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-2.5 top-0 h-px opacity-70 transition-opacity duration-300 group-hover:opacity-0"
            style={{ backgroundColor: benefit.accent }}
          />

          <span className="transition-transform duration-300 group-hover:scale-110">
            {benefit.icon}
          </span>
        </div>

        {/* Card Content */}
        <div className="relative z-10 mt-4 flex flex-1 flex-col sm:mt-5">
          <h3 className="text-base font-bold leading-snug tracking-tight text-white transition-colors duration-500 group-hover:text-[#101018] sm:text-lg">
            {benefit.title}
          </h3>

          <p className="mt-2 flex-1 text-[13px] leading-6 text-[#A0A0A8] transition-colors duration-500 group-hover:text-[#454550] sm:text-sm sm:leading-6">
            {benefit.description}
          </p>
        </div>

        {/* Bottom Gradient Accent */}
        <div className="relative z-10 mt-4 h-px w-full overflow-hidden bg-black/10">
          <div
            className="h-full w-9 transition-all duration-500 ease-out group-hover:w-full"
            style={{
              background: `linear-gradient(90deg,${benefit.accent},#B93FC9)`,
            }}
          />
        </div>
      </article>
    );
  })}
</div>


        {/* Statistics */}
        <div className="mx-auto mt-7 max-w-6xl sm:mt-9 lg:mt-11">
          {/* Statistics Heading */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(255,255,255,0.12))",
              }}
            />

            <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#777781] sm:text-[10px] sm:tracking-[0.22em]">
              Built Around Your Outcomes
            </span>

            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg,rgba(255,255,255,0.12),transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className={`group relative flex min-w-0 flex-col items-center justify-center px-2 py-3 text-center transition-colors duration-300 hover:bg-white/[0.025] sm:px-4 sm:py-4 lg:px-5 ${
                  index < stats.length - 1
                    ? "lg:border-r lg:border-white/[0.09]"
                    : ""
                }`}
              >
                {/* Statistic Value */}
                <p
                  className="text-[27px] font-extrabold leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-3xl lg:text-4xl"
                  style={{
                    backgroundImage: beaverTekGradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-2.5 h-0.5 w-6 transition-all duration-300 group-hover:w-10"
                  style={{ backgroundImage: beaverTekGradient }}
                />

                <p className="mx-auto mt-2 max-w-[175px] text-[11px] leading-[1.4rem] text-[#A0A0A8] transition-colors duration-300 group-hover:text-[#D4D4D8] sm:text-xs sm:leading-5">
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
