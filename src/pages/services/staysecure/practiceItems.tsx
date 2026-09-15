"use client";

import { useState } from "react";
import {
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  MonitorCheck,
  ClipboardCheck,
} from "lucide-react";

const practiceItems = [
  {
    number: "01",
    title: "Cloud & Infrastructure Security",
    desc: "Configuration and continuous monitoring to reduce risk across your systems.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Identity & Access Management",
    desc: "Control who can access what, ensuring secure and role-based permissions.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Backup & Recovery",
    desc: "Reliable data backup, disaster recovery, and business continuity planning.",
    icon: DatabaseBackup,
  },
  {
    number: "04",
    title: "Endpoint Protection",
    desc: "Security hygiene across devices, teams, and remote environments.",
    icon: MonitorCheck,
  },
  {
    number: "05",
    title: "Security Review & Fix Plan",
    desc: "Audit existing systems and deliver a prioritized, actionable fix list.",
    icon: ClipboardCheck,
  },
];

/* ================= PRACTICE ================= */

export default function PracticeSection() {
  const [activePractice, setActivePractice] = useState(0);

  const activeItem = practiceItems[activePractice];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="relative py-16 overflow-hidden bg-white py-2 sm:mt-24 lg:mt-0">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(62,123,214,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,.035)_1px,transparent_1px)] [background-size:55px_55px]" />

      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#29B6F0]/[0.035] blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[#B93FC9]/[0.035] blur-[110px]" />

      {/* ================= MAIN WRAPPER ================= */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8">
        {/* ================= SECTION HEADING ================= */}

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-offset="60"
        >
          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/25 bg-white px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#3E7BD6] shadow-[0_4px_18px_rgba(62,123,214,.06)] transition-all duration-300 hover:border-[#3E7BD6]/50 hover:shadow-[0_6px_24px_rgba(62,123,214,.10)] sm:px-5 sm:py-2 sm:text-[10px] md:text-xs">
            WHAT THIS LOOKS LIKE IN PRACTICE
          </span>

          {/* Heading */}

          <h3 className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-tight tracking-[-0.025em] sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.7rem]">
            <span className="text-[#17171A]">Real Protections for </span>

            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Real Operations
            </span>
          </h3>

          {/* Gradient Line */}

          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] sm:mt-5 sm:w-20"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="650"
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="mx-auto mt-9 grid gap-7 sm:mt-10 sm:gap-8 lg:mt-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 xl:gap-10"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="60"
        >
          {/* ================= LEFT SIDE ================= */}

          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="850"
            data-aos-delay="100"
          >
            {/* Vertical Line */}

            <div className="absolute left-[19px] top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-[#29B6F0]/15 via-[#3E7BD6]/25 to-[#B93FC9]/15 sm:block" />

            <div className="space-y-2.5 sm:space-y-3">
              {practiceItems.map((item, i) => {
                const isActive = activePractice === i;

                return (
                  <div
                    key={item.number}
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={i * 80}
                    data-aos-duration="700"
                    data-aos-offset="50"
                    className={`relative ${
                      i === 1
                        ? "sm:ml-6"
                        : i === 2
                        ? "sm:ml-1"
                        : i === 3
                        ? "sm:ml-8"
                        : i === 4
                        ? "sm:ml-4"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActivePractice(i)}
                      onFocus={() => setActivePractice(i)}
                      className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border bg-white px-3.5 py-3 text-left transition-all duration-300 sm:gap-3.5 sm:px-4 sm:py-3.5 ${
                        isActive
                          ? "border-[#3E7BD6]/45 shadow-[0_10px_32px_rgba(62,123,214,.09)]"
                          : "border-[#E6E8EC] shadow-[0_4px_18px_rgba(17,24,39,.025)] hover:border-[#3E7BD6]/35 hover:shadow-[0_8px_26px_rgba(62,123,214,.07)]"
                      }`}
                    >
                      {/* Active Background */}

                      <div
                        className={`pointer-events-none absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-70"
                        }`}
                      />

                      {/* Number */}

                      <div
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300 sm:h-10 sm:w-10 sm:text-xs ${
                          isActive
                            ? "border-[#29B6F0]/70 bg-gradient-to-br from-[#29B6F0]/10 to-[#7A4FD1]/10 text-[#3E7BD6]"
                            : "border-[#D9DDE4] bg-white text-[#7A7A7A] group-hover:border-[#29B6F0]/50 group-hover:text-[#3E7BD6]"
                        }`}
                      >
                        {item.number}
                      </div>

                      {/* Title */}

                      <h4
                        className={`flex-1 text-xs font-bold leading-5 transition-all duration-300 sm:text-sm sm:leading-6 md:text-[15px] ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent"
                            : "text-[#17171A] group-hover:text-[#3E7BD6]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      {/* Right Indicator */}

                      <div
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                          isActive
                            ? "scale-125 bg-[#29B6F0] shadow-[0_0_8px_rgba(41,182,240,.35)]"
                            : "bg-[#C8CDD5] group-hover:bg-[#29B6F0]"
                        }`}
                      />

                      {/* Bottom Gradient */}

                      <div
                        className={`absolute bottom-0 left-4 h-[2px] rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] transition-all duration-300 ${
                          isActive
                            ? "w-[calc(100%-32px)]"
                            : "w-0 group-hover:w-[calc(100%-32px)]"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div
            className="relative min-h-[270px] overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white shadow-[0_12px_40px_rgba(17,24,39,.055)] sm:min-h-[300px] sm:rounded-[24px] lg:min-h-[350px]"
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="180"
            data-aos-offset="60"
          >
            {/* Subtle Grid */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:linear-gradient(rgba(62,123,214,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,.055)_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Cyan Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#29B6F0]/[0.06] blur-[85px]" />

            {/* Magenta Glow */}

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#B93FC9]/[0.045] blur-[85px]" />

            {/* Center Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BD6]/[0.045] blur-[80px]" />

            {/* Content */}

            <div
              key={activeItem.number}
              className="relative z-10 flex min-h-[270px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[300px] sm:px-8 sm:py-9 lg:min-h-[350px] lg:px-12"
              data-aos="zoom-in"
              data-aos-duration="550"
            >
              {/* Icon */}

              <div className="relative">
                <div className="absolute inset-0 rounded-[18px] bg-[#29B6F0]/10 blur-xl" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-[17px] border border-[#3E7BD6]/20 bg-white shadow-[0_8px_28px_rgba(62,123,214,.10)] transition-all duration-300 sm:h-16 sm:w-16">
                  <ActiveIcon
                    size={28}
                    strokeWidth={1.6}
                    className="text-[#3E7BD6] sm:h-8 sm:w-8"
                  />
                </div>
              </div>

              {/* Number */}

              <span className="mt-4 text-[9px] font-bold uppercase tracking-[0.28em] text-[#8A8F98] sm:mt-5 sm:text-[10px]">
                {activeItem.number}
              </span>

              {/* Title */}

              <h4 className="mt-2 max-w-xl text-xl font-black leading-tight sm:text-2xl lg:text-[1.8rem]">
                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  {activeItem.title}
                </span>
              </h4>

              {/* Description */}

              <p className="mt-3 max-w-lg text-xs leading-6 text-[#555B65] sm:mt-4 sm:text-sm sm:leading-7">
                {activeItem.desc}
              </p>

              {/* Bottom Gradient */}

              <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] sm:mt-6 sm:w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}