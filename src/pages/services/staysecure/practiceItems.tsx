
"use client";

import { useState } from "react";
import {
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  MonitorCheck,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const practiceItems = [
  {
    title: "Cloud & Infrastructure Security",
    desc: "Secure cloud environments and IT infrastructure through continuous monitoring, configuration management, and proactive risk reduction.",
    icon: Cloud,
  },
  {
    title: "Identity & Access Management",
    desc: "Protect sensitive resources with controlled access, role-based permissions, and secure identity verification for every user.",
    icon: ShieldCheck,
  },
  {
    title: "Backup & Recovery",
    desc: "Safeguard critical business data with reliable backups, disaster recovery strategies, and continuity planning.",
    icon: DatabaseBackup,
  },
  {
    title: "Endpoint Protection",
    desc: "Protect computers and connected devices against security threats with consistent monitoring and endpoint security practices.",
    icon: MonitorCheck,
  },
  {
    title: "Security Review & Fix Plan",
    desc: "Identify security gaps, assess potential risks, and create a prioritized action plan to strengthen your systems.",
    icon: ClipboardCheck,
  },
];

export default function PracticeSection() {
  const [activePractice, setActivePractice] = useState(0);

  const activeItem = practiceItems[activePractice];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-20 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(62,123,214,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,.045)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#29B6F0]/[0.07] blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#B93FC9]/[0.06] blur-[110px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-offset="60"
        >
          <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/20 bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#3E7BD6] shadow-sm sm:px-5 sm:text-[10px] md:text-xs">
            WHAT THIS LOOKS LIKE IN PRACTICE
          </span>

          <h3 className="mx-auto mt-5 text-2xl font-black leading-tight tracking-[-0.035em] sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.7rem]">
            <span className="text-[#17171A]">
              Real Protections for{" "}
            </span>

            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Real Operations
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#69717D] sm:text-base sm:leading-7">
            Practical security solutions designed to protect your
            infrastructure, safeguard your data, and keep your business
            running with confidence.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] sm:w-20" />
        </div>

        {/* Main Content */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-10 sm:mt-14 sm:gap-12 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">

          {/* Left: Interactive Service List */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8F98] sm:text-sm">
                Security Solutions
              </h4>

              <span className="h-px flex-1 bg-gradient-to-r from-[#3E7BD6]/25 to-transparent" />
            </div>

            <div className="space-y-1">
              {practiceItems.map((item, i) => {
                const isActive = activePractice === i;
                const ItemIcon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onMouseEnter={() => setActivePractice(i)}
                    onFocus={() => setActivePractice(i)}
                    onClick={() => setActivePractice(i)}
                    aria-pressed={isActive}
                    className={`group relative flex w-full items-center gap-3.5 border-b border-[#E9ECF1] py-4 text-left transition-all duration-300 sm:gap-4 sm:py-5 ${
                      isActive
                        ? "border-b-[#3E7BD6]/35"
                        : "hover:border-b-[#3E7BD6]/20"
                    }`}
                  >
                    {/* Icon */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                        isActive
                          ? "bg-gradient-to-br from-[#29B6F0]/15 to-[#7A4FD1]/10 text-[#3E7BD6]"
                          : "bg-[#F5F7FA] text-[#8A8F98] group-hover:bg-[#EEF5FC] group-hover:text-[#3E7BD6]"
                      }`}
                    >
                      <ItemIcon
                        size={22}
                        strokeWidth={1.7}
                        className="sm:h-6 sm:w-6"
                      />
                    </span>

                    {/* Title */}
                    <span
                      className={`min-w-0 flex-1 text-[13px] font-bold leading-5 transition-colors duration-300 sm:text-sm md:text-[15px] ${
                        isActive
                          ? "text-[#3E7BD6]"
                          : "text-[#242832] group-hover:text-[#3E7BD6]"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Indicator */}
                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#3E7BD6] opacity-100"
                          : "-translate-x-1 text-[#9AA2AE] opacity-50 group-hover:translate-x-0 group-hover:text-[#3E7BD6] group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Minimal Feature Showcase */}
          <div
            className="relative flex min-h-[280px] flex-col justify-center overflow-hidden py-5 sm:min-h-[320px] sm:py-8 lg:min-h-[390px] lg:pl-8"
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="150"
          >
            {/* Decorative Background */}
            <div className="pointer-events-none absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#29B6F0]/[0.07] blur-[85px] sm:h-64 sm:w-64" />

            <div className="pointer-events-none absolute bottom-0 right-10 h-36 w-36 rounded-full bg-[#B93FC9]/[0.06] blur-[75px]" />

            {/* Active Content */}
            <div
              key={activeItem.title}
              className="relative z-10"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-flex sm:mb-8">
                <div className="absolute inset-0 rounded-2xl bg-[#3E7BD6]/15 blur-xl" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3E7BD6]/15 bg-white shadow-[0_8px_28px_rgba(62,123,214,.10)] sm:h-[68px] sm:w-[68px]">
                  <ActiveIcon
                    size={29}
                    strokeWidth={1.6}
                    className="text-[#3E7BD6] sm:h-8 sm:w-8"
                  />
                </div>
              </div>

              {/* Active Title: unchanged */}
              <h4 className="max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-[#17171A] sm:text-3xl md:text-4xl lg:text-[2.35rem]">
                {activeItem.title}
              </h4>

              {/* Two-line style description */}
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#626B78] sm:mt-5 sm:text-base sm:leading-8">
                {activeItem.desc}
              </p>

              {/* Accent */}
              <div className="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-8 sm:w-20" />

              {/* Active service label */}
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A8F98] sm:mt-6 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_10px_rgba(41,182,240,.45)]" />
                Security you can trust
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

