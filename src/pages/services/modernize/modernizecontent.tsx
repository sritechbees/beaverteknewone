"use client";

import App_layout from "@/component/layout/app_layout";
import { Cpu } from "lucide-react";

export default function ModernizeContent() {
  return (
    
 
    <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-28">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#29B6F0]/10 blur-[130px]" />

    <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/10 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left */}

      <div
        data-aos="fade-right"
        data-aos-duration="1000"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
          WHAT IT IS
        </span>

        <h2 className="mt-6 text-3xl font-black leading-tight text-white md:text-4xl xl:text-5xl">
          Modernization
          <br />

          <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
            Made Practical
          </span>

        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

        <p className="mt-8 max-w-xl text-base leading-8 text-[#D4D4D8]">
          Most businesses rely on a combination of legacy applications,
          spreadsheets, and modern platforms. Modernization connects them
          into a secure, scalable environment without disrupting daily work.
        </p>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#A0A0A8]">
          BeaverTek upgrades your technology step by step—protecting existing
          investments while preparing your business for future growth.
        </p>

      </div>

      {/* Right */}

      <div
        className="relative"
        data-aos="fade-left"
        data-aos-duration="1000"
      >

        <div className="rounded-3xl border border-[#2A2A30] bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-[#3E7BD6] hover:bg-white/10">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]">

            <Cpu className="h-8 w-8 text-white" />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">
            Legacy + Modern
          </h3>

          <p className="mt-5 leading-8 text-[#D4D4D8]">
            We modernize your existing infrastructure instead of replacing
            everything. This reduces cost, minimizes downtime, and improves
            long-term scalability.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#29B6F0]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#29B6F0]" />

              <span className="text-sm text-[#D4D4D8]">
                Existing systems stay operational
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#7A4FD1]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#7A4FD1]" />

              <span className="text-sm text-[#D4D4D8]">
                Secure cloud-ready architecture
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#B93FC9]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#B93FC9]" />

              <span className="text-sm text-[#D4D4D8]">
                Planned migration with minimal risk
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

        
               
              {/* ============================= */}
{/* What This Looks Like In Practice */}
{/* ============================= */}

<div className="relative mt-24 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/10 blur-[120px]" />
  <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#B93FC9]/10 blur-[130px]" />

  {/* Heading */}
  <div
    className="relative text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
  >

    <span className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
      WHAT THIS LOOKS LIKE IN PRACTICE
    </span>

    <h2 className="mt-6 text-3xl font-black text-white lg:text-5xl">
      Real Modernization
    </h2>

    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

  </div>

  {/* Cards */}

  <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    {[
      "Migrating from on-premise servers to a secure cloud platform.",

      "Replacing spreadsheets with modern business applications.",

      "Upgrading legacy ERP and CRM platforms.",

      "Rebuilding outdated websites and internal tools.",

      "Connecting disconnected systems with seamless integrations.",
    ].map((item, index) => (

      <div
        key={item}
        data-aos="fade-up"
        data-aos-delay={index * 100}
        data-aos-duration="900"
        className={`group relative overflow-hidden rounded-3xl border border-[#2A2A30] bg-[#121212] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:bg-[#171717] ${
          index === 4 ? "md:col-span-2 xl:col-span-1" : ""
        }`}
      >

        {/* Number */}

        <span className="absolute right-6 top-5 text-5xl font-black text-white/5 transition group-hover:text-[#3E7BD6]/20">
          0{index + 1}
        </span>

        {/* Accent */}

        <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-24" />

        {/* Text */}

        <p className="relative text-base leading-8 text-[#D4D4D8]">
          {item}
        </p>

        {/* Bottom Border */}

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-full" />

      </div>

    ))}

  </div>

  {/* ============================= */}
  {/* Simple Process */}
  {/* ============================= */}

  <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

    {[
      {
        title: "Assess",
        desc: "Review your current technology landscape.",
      },
      {
        title: "Plan",
        desc: "Build a practical modernization roadmap.",
      },
      {
        title: "Execute",
        desc: "Implement with minimal business disruption.",
      },
      {
        title: "Support",
        desc: "Continuous optimization and long-term guidance.",
      },
    ].map((step, index) => (

      <div
        key={step.title}
        data-aos="zoom-in"
        data-aos-delay={index * 120}
        className="rounded-3xl border border-[#2A2A30] bg-[#121212] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#7A4FD1]"
      >

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-lg font-bold text-white">
          {index + 1}
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          {step.title}
        </h3>

        <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />

        <p className="mt-5 text-sm leading-7 text-[#A0A0A8]">
          {step.desc}
        </p>

      </div>

    ))}

  </div>

</div>

        {/* ============================= */}
{/* ============================= */}
{/* PART - 3 | Why Modernization Matters */}
{/* ============================= */}

<div className="relative mt-24 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-[#29B6F0]/10 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-[#B93FC9]/10 blur-[130px]" />

  </div>

  {/* Heading */}

  <div
    className="mx-auto max-w-3xl text-center"
    data-aos="fade-down"
    data-aos-duration="1000"
  >

    <span className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
      WHY MODERNIZATION MATTERS
    </span>

    <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
      Better Technology.
      <br />
      <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
        Better Business.
      </span>
    </h2>

    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A0A0A8]">
      Modernization helps organizations improve efficiency,
      strengthen security, reduce costs, and create a solid
      foundation for future growth.
    </p>

  </div>

  {/* Cards */}

  <div className="mt-16 grid gap-6 sm:grid-cols-2">

    {[
      {
        title: "Increase Productivity",
        desc: "Automate repetitive work and give employees modern tools that reduce manual effort.",
      },
      {
        title: "Reduce Operational Risk",
        desc: "Replace unsupported legacy platforms before they become security or reliability problems.",
      },
      {
        title: "Improve Customer Experience",
        desc: "Deliver faster services, better digital experiences and smoother customer journeys.",
      },
      {
        title: "Scale With Confidence",
        desc: "Cloud-ready systems make it easier to grow without rebuilding everything later.",
      },
    ].map((item, index) => (

      <div
        key={item.title}
        data-aos={
          index === 0
            ? "fade-right"
            : index === 1
            ? "fade-left"
            : index === 2
            ? "fade-up"
            : "zoom-in"
        }
        data-aos-delay={index * 120}
        data-aos-duration="900"
        className="group rounded-3xl border border-[#2A2A30] bg-[#121212] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:bg-[#171717]"
      >

        {/* Number */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-lg font-bold text-white transition duration-500 group-hover:scale-110">
          0{index + 1}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          {item.title}
        </h3>

        <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-24" />

        <p className="mt-6 text-base leading-8 text-[#A0A0A8]">
          {item.desc}
        </p>

        <div className="mt-8 flex items-center gap-3">

          <span className="h-2.5 w-2.5 rounded-full bg-[#29B6F0]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4D4D8]">
            Business Value
          </span>

        </div>

        <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] transition-all duration-500 group-hover:w-full" />

      </div>

    ))}

  </div>


  {/* ============================= */}
{/* Premium Future Ready Banner */}
{/* ============================= */}

<div
  className="relative mt-24 overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#0A0A0A] px-6 py-12 shadow-[0_25px_60px_rgba(0,0,0,.45)] sm:px-10 sm:py-16 lg:px-14"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#29B6F0]/15 blur-[120px]" />

    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/15 blur-[130px]" />

    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/10 blur-[130px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:55px_55px]" />

  </div>

  <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">

    {/* Left */}
    <div
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0] backdrop-blur-md">
        Future Ready
      </span>

      <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        Technology that
        <br />

        <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          accelerates
        </span>

        <br />

        your business.
      </h3>

      <p className="mt-7 max-w-xl text-base leading-8 text-[#D4D4D8] sm:text-lg">
        Modern infrastructure, secure platforms, and scalable solutions
        designed to help your organization move faster with confidence.
      </p>
    </div>

    {/* Right */}
    <div
      className="grid gap-4"
      data-aos="fade-left"
      data-aos-delay="250"
    >
      {[
        "Modern Cloud Infrastructure",
        "Better Security & Compliance",
        "Reliable System Integrations",
        "Lower Maintenance Costs",
      ].map((item, index) => (
        <div
          key={item}
          data-aos="zoom-in"
          data-aos-delay={300 + index * 120}
          className="group flex items-center gap-4 rounded-2xl border border-[#2A2A30] bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#3E7BD6]/60 hover:bg-white/10 hover:translate-x-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] text-sm font-bold text-white shadow-[0_0_25px_rgba(62,123,214,.35)]">
            0{index + 1}
          </div>

          <span className="font-medium text-[#FFFFFF]">
            {item}
          </span>
        </div>
      ))}
    </div>

  </div>
</div>

</div>

</section>
 );
}