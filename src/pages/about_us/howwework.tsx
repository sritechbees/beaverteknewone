
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const workSteps = [
  {
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
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
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
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
  },
  {
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
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-4 4" />
        <path d="M15 9h4v4" />
      </svg>
    ),
  },
];

function Howwework() {
  const beaverTekGradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  useEffect(() => {
    AOS.init({
      duration: 800,
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
    <section className="relative isolate overflow-hidden bg-[#050507] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-72 w-72 rounded-full bg-[#29B6F0]/[0.07] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[40%] -z-10 h-80 w-80 rounded-full bg-[#7A4FD1]/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[75%] -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.045] blur-[110px]"
      />

      {/* Technical Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom,black,transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,black,transparent 85%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Editorial Heading Layout */}
        <header
          data-aos="fade-up"
          className="mb-9 grid grid-cols-1 items-end gap-4 sm:mb-11 lg:mb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-[2px] w-7"
                style={{ backgroundImage: beaverTekGradient }}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B9B9C3] sm:text-xs">
                How We Work
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-[30px] font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-[2.8rem] lg:mt-5 lg:text-[3.2rem]">
              <span className="text-white">Learn. Adapt.</span>
              <br className="hidden sm:block" />{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: beaverTekGradient }}
              >
                Optimize.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-1">
            <p className="max-w-lg text-[13px] leading-6 text-[#A0A0A8] sm:text-sm sm:leading-7 lg:text-base">
              Our engagement model mirrors our promise and it scales from a
              single sprint to a full transformation.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full"
                style={{ backgroundImage: beaverTekGradient }}
              />
              <span className="h-px w-16 bg-white/10" />
            </div>
          </div>
        </header>

        {/* Process Journey */}
        <div className="relative">
          {/* Desktop Connecting Rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-[39px] z-0 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg,rgba(41,182,240,0.65),rgba(122,79,209,0.65),rgba(185,63,201,0.65))",
            }}
          />

          {/* Mobile Vertical Connecting Rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-24 left-[27px] top-7 z-0 w-px md:hidden"
            style={{
              background:
                "linear-gradient(180deg,rgba(41,182,240,0.6),rgba(122,79,209,0.6),rgba(185,63,201,0.6))",
            }}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-6">
            {workSteps.map((step, index) => (
              <article
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative min-w-0"
              >
                {/* Process Marker */}
                <div className="relative z-10 mb-4 flex items-center gap-4 md:mb-5 md:gap-0">
                  <div
                    className="relative flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#08080D] transition-all duration-500 group-hover:scale-105 group-hover:border-white/30 sm:h-[64px] sm:w-[64px] md:h-[78px] md:w-[78px]"
                    style={{
                      boxShadow: `0 0 0 6px #050507, 0 0 28px ${step.accent}12`,
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-[5px] rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-50"
                      style={{
                        background: `radial-gradient(circle,${step.accent}55 0%,transparent 72%)`,
                      }}
                    />

                    <span
                      className="relative transition-transform duration-500 group-hover:scale-110"
                      style={{ color: step.accent }}
                    >
                      {step.icon}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute -right-0.5 top-1 h-2.5 w-2.5 rounded-full border-2 border-[#050507]"
                      style={{ backgroundColor: step.accent }}
                    />
                  </div>

                  {/* Mobile Step Label */}
                  <div className="min-w-0 md:hidden">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: step.accent }}
                    >
                      {step.label}
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Process Content Panel */}
                <div className="relative ml-[19px] overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.018] transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.035] md:ml-0 md:rounded-[1.4rem]">
                  {/* Top Accent */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg,transparent,${step.accent},transparent)`,
                    }}
                  />

                  {/* Soft Hover Light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div className="relative p-4 pl-5 sm:p-5 sm:pl-6 md:min-h-[230px] md:p-5 lg:min-h-[245px] lg:p-6">
                    {/* Desktop Step Title */}
                    <div className="hidden md:block">
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.17em] lg:text-[11px]"
                        style={{ color: step.accent }}
                      >
                        {step.label}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white transition-colors duration-300 lg:text-[1.8rem]">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="relative mt-1 text-[13px] leading-6 text-[#A0A0A8] transition-colors duration-300 group-hover:text-[#D0D0D7] sm:text-sm sm:leading-7 md:mt-4 lg:mt-5">
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-4 flex items-center gap-2.5 md:mt-5">
                      <span
                        aria-hidden="true"
                        className="h-[2px] w-7 transition-all duration-500 group-hover:w-12"
                        style={{ backgroundColor: step.accent }}
                      />
                      <span className="h-px flex-1 bg-white/[0.07]" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-7 flex flex-col items-center justify-center gap-3 text-center sm:mt-9 sm:flex-row sm:gap-2"
        >
          <p className="text-[13px] leading-6 text-[#A0A0A8] sm:text-sm">
            One collaborative process.
          </p>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full sm:block"
            style={{ backgroundImage: beaverTekGradient }}
          />

          <p
            className="text-sm font-bold sm:text-base"
            style={{
              backgroundImage: beaverTekGradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Continuous business value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Howwework;
