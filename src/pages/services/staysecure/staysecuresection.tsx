"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StaySecureSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
   <section className="relative overflow-hidden bg-[#000000] py-24 lg:py-28">
  {/* ================= Background ================= */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-44 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/12 blur-[150px]" />

    <div className="absolute top-10 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/12 blur-[160px]" />

    <div className="absolute bottom-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-28">

    {/* ================= WHAT IT IS ================= */}

    <div
      className="grid items-center gap-16 lg:grid-cols-2"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* Left */}
      <div data-aos="fade-right" data-aos-delay="100">
        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">
          WHAT IT IS
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
          <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
            Security that works before problems happen
          </span>
        </h2>

        <div className="mt-7 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />
      </div>

      {/* Right */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="relative overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#121212]/90 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]"
      >
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#29B6F0]/10 blur-[100px]" />

        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#B93FC9]/10 blur-[90px]" />

        <p className="relative text-[#D4D4D8] text-base leading-8">
          Security and operations are the things most businesses ignore until
          something goes wrong. By then it is expensive. We help small and
          mid-size companies put the right protections in place before there is
          a problem, and respond fast when one shows up.
        </p>

        <div className="my-8 h-px bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

        <p className="relative text-[#D4D4D8] text-base leading-8">
          This is not enterprise theater. It is practical, sized-right
          security for the business you actually run.
        </p>
      </div>
    </div>

    {/* ================= PRACTICE ================= */}

    <div>
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <span className="inline-flex items-center rounded-full border border-[#7A4FD1]/30 bg-[#121212]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">
          WHAT THIS LOOKS LIKE IN PRACTICE
        </span>

        <h3 className="mt-7 text-3xl font-black md:text-5xl">
          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
            Real Protections for Real Operations
          </span>
        </h3>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {[
          {
            title: "Cloud & Infrastructure Security",
            desc: "Configuration and continuous monitoring to reduce risk across your systems.",
          },
          {
            title: "Identity & Access Management",
            desc: "Control who can access what, ensuring secure and role-based permissions.",
          },
          {
            title: "Backup & Recovery",
            desc: "Reliable data backup, disaster recovery, and business continuity planning.",
          },
          {
            title: "Endpoint Protection",
            desc: "Security hygiene across devices, teams, and remote environments.",
          },
          {
            title: "Security Review & Fix Plan",
            desc: "Audit existing systems and deliver a prioritized, actionable fix list.",
          },
        ].map((item, i) => (
          <div
            key={i}
            data-aos={
              i % 3 === 0
                ? "fade-up"
                : i % 3 === 1
                ? "zoom-in-up"
                : "fade-left"
            }
            data-aos-delay={i * 120}
            data-aos-duration="900"
            className="group relative overflow-hidden rounded-[26px] border border-[#2A2A30] bg-[#121212] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#3E7BD6] hover:shadow-[0_0_45px_rgba(62,123,214,.35)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#29B6F0]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-[#B93FC9]/10 blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

            <h4 className="relative text-xl font-bold leading-8 text-white transition-all duration-500 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent">
              {item.title}
            </h4>

            <p className="relative mt-5 leading-8 text-[#A0A0A8]">
              {item.desc}
            </p>

            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />
          </div>
        ))}

      </div>
    </div>

  </div>
</section>
  );
}