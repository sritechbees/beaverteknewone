"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudyHero() {
  return (
   <section className="relative overflow-hidden bg-[#000000] py-16 lg:py-24">
  {/* ================================ */}
  {/* Background Decorations */}
  {/* ================================ */}

  <div className="absolute inset-0 -z-10">

    {/* Cyan Glow */}
    <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#29B6F0]/20 blur-3xl" />

    {/* Magenta Glow */}
    <div className="absolute -right-44 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B93FC9]/20 blur-3xl" />

    {/* Blue Glow */}
    <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BD6]/10 blur-[120px]" />

    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#05070A] to-[#0A0A0A]" />

  </div>

  {/* ================================ */}
  {/* Container */}
  {/* ================================ */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================================ */}
    {/* Hero Layout */}
    {/* ================================ */}

    <div className="relative overflow-hidden rounded-[8px] border border-[#3E7BD6]/20 bg-[#0A0A0A] shadow-[0_30px_80px_rgba(41,182,240,0.18)]">

      {/* ================================ */}
      {/* ================================ */}
{/* Top Image */}
{/* ================================ */}

<div className="group relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[390px]">

  <Image
    src="/home/whyexist.jpg"
    alt="Case Study"
    fill
    priority
    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

  {/* Flash Animation */}
  <div
    className="
      pointer-events-none
      absolute inset-0
      overflow-hidden
    "
  >
    <div
      className="
        absolute inset-y-0
        right-[-130%]
        w-[140%]
        bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_18%,rgba(41,182,240,0.35)_38%,rgba(255,255,255,0.95)_50%,rgba(185,63,201,0.35)_62%,rgba(255,255,255,0.08)_82%,transparent_100%)]
        skew-x-[-20deg]
        transition-all
        duration-[1300ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:right-[120%]
      "
    />
  </div>

  {/* Case Study Text */}
  <div
    className="
      absolute inset-0
      flex items-center justify-center
      opacity-0
      transition-all
      duration-700
      delay-300
      group-hover:opacity-100
    "
  >
    <div className="text-center">

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.45em] text-[#29B6F0]">
        Featured Project
      </p>

      <h2
        className="
          bg-gradient-to-r
          from-[#29B6F0]
          via-[#3E7BD6]
          via-[#7A4FD1]
          to-[#B93FC9]
          bg-clip-text
          text-4xl
          font-black
          text-transparent
          sm:text-6xl
          lg:text-7xl
          translate-y-8
          transition-all
          duration-700
          delay-500
          group-hover:translate-y-0
        "
      >
        CASE STUDY
      </h2>

    </div>
  </div>

</div>
{/* =============================================== */}
{/* Bottom Content */}
{/* =============================================== */}

<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">

  {/* Left Information */}

  <div className="bg-[#121212] px-7 py-10 border-r border-[#3E7BD6]/20">

    <div>

      <p className="text-[11px] font-bold uppercase tracking-widest text-[#29B6F0]">
        PROJECT NAME:
      </p>

      <p className="mt-2 text-sm text-[#D4D4D8]">
        Insert project title
      </p>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-transparent" />

    </div>

    <div className="mt-7">

      <p className="text-[11px] font-bold uppercase tracking-widest text-[#29B6F0]">
        CLIENT NAME:
      </p>

      <p className="mt-2 text-sm text-[#D4D4D8]">
        Insert client name
      </p>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-transparent" />

    </div>

  </div>

  {/* Right Information */}

  <div className="relative overflow-hidden bg-[#0A0A0A] px-8 py-10 sm:px-12 lg:px-14">

    {/* Background Glow */}

    <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-3xl" />
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#B93FC9]/10 blur-3xl" />

    {/* Grid */}

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

    <div className="relative">

      <h2 className="max-w-3xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-2xl font-bold leading-tight text-transparent sm:text-3xl lg:text-[42px]">
      Transforming

        <br />
        Business with AI
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#D4D4D8]">
        We build secure AI solutions for healthcare, finance, enterprise reporting and digital transformation with scalable modern technology.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
<Link href="/customers/casestudyoverall">
       <button className="group relative overflow-hidden rounded-xl border border-[#3E7BD6]/40 px-8 py-3 font-semibold text-white transition-all duration-300">

  {/* Background Animation */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>

  {/* Shine Effect */}
  <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"></span>

  {/* Text */}
  
  <span className="relative z-10 flex items-center gap-2">
    View Case Studies

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  </span>
 

</button>
 </Link>

 <Link href="/contact/contacthero">
        <button className="rounded-lg border border-[#3E7BD6]/40 bg-[#121212] px-8 py-3 font-semibold text-white transition duration-300 hover:border-[#29B6F0] hover:bg-[#1A1A1E]">
          Contact Us
        </button>
</Link>
      </div>

    </div>

  </div>

</div>

</div>

</div>

</section>
  );
}