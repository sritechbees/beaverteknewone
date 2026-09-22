"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import AIHospitalHeroSection from "./AIHospitalHeroSection";
import { TriangleAlert , Layers3 , Workflow , ArrowRight } from "lucide-react";
export default function AICaseStudyTwo() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <App_layout>
      <AIHospitalHeroSection/>
    <section className="bg-[#05070D] py-8 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

       {/* ========================================================= */}
{/* CASE STUDY HERO + OVERVIEW */}
{/* ========================================================= */}

<section className="relative overflow-hidden bg-[#05070D] py-10 sm:py-12 md:py-8 lg:py-4">
  {/* ================= Background ================= */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-40 -top-40 h-[24rem] w-[24rem] rounded-full bg-[#29B6F0]/[0.06] blur-[140px]" />

    <div className="absolute -right-40 top-10 h-[24rem] w-[24rem] rounded-full bg-[#3E7BD6]/[0.06] blur-[140px]" />

    <div className="absolute bottom-0 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[#7A4FD1]/[0.04] blur-[140px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* ================= Hero ================= */}

    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}

      <span
        data-aos="zoom-in"
        data-aos-delay="100"
        className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-white/[0.025] px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-sm sm:px-5 sm:py-2 sm:text-[10px] md:text-[11px] md:tracking-[0.28em]"
      >
        AI Healthcare Case Study
      </span>

      {/* Heading */}

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        AI{" "}
        <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
          Real Hospitals
        </span>
      </h1>

      {/* Divider */}

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-6 sm:w-24 sm:h-1"
      />

      {/* Intro */}

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#D4D4D8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-lg lg:leading-8"
      >
        Intelligent healthcare software designed to streamline patient
        journeys, automate clinical workflows, and help hospitals deliver
        better care with secure AI-powered technology.
      </p>
    </div>

    {/* ================= Overview Card ================= */}

    <div
      data-aos="fade-up"
      data-aos-delay="500"
      className="relative mt-10 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] shadow-[0_18px_55px_rgba(0,0,0,.28)] backdrop-blur-[3px] sm:mt-12 sm:rounded-[28px] lg:mt-14 lg:rounded-[32px]"
    >
      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      <div className="grid lg:grid-cols-3">
        {/* Industry */}

        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="border-b border-white/[0.07] p-5 sm:p-6 md:p-7 lg:border-b-0 lg:border-r lg:p-7 xl:p-8"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#29B6F0]/[0.08] sm:h-12 sm:w-12">
            <svg
              className="h-5 w-5 text-[#29B6F0] sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M3 21h18M5 21V7l7-4 7 4v14" />
            </svg>
          </div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:text-[10px] md:text-[11px]">
            Industry
          </p>

          <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-[26px] md:text-3xl">
            Healthcare
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
            Secure AI platforms built for hospitals, clinics and healthcare
            providers.
          </p>
        </div>

        {/* Service */}

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-b border-white/[0.07] p-5 sm:p-6 md:p-7 lg:border-b-0 lg:border-r lg:p-7 xl:p-8"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7A4FD1]/[0.08] sm:h-12 sm:w-12">
            <svg
              className="h-5 w-5 text-[#7A4FD1] sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>

          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7A4FD1] sm:text-[10px] md:text-[11px]">
            Services
          </p>

          <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-[26px] md:text-3xl">
            Build Software
          </h3>

          <p className="mt-1 text-base text-[#29B6F0] sm:text-lg">
            + See Your Data
          </p>

          <p className="mt-3 text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
            Custom healthcare applications integrated with intelligent
            analytics and automation.
          </p>
        </div>

        {/* Product */}

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="relative overflow-hidden p-5 sm:p-6 md:p-7 lg:p-7 xl:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-[0.045]" />

          <div className="relative">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:h-12 sm:w-12">
              <svg
                className="h-5 w-5 text-white sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4M21 12A9 9 0 1112 3a9 9 0 019 9z" />
              </svg>
            </div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#B93FC9] sm:text-[10px] md:text-[11px]">
              Platform
            </p>

            <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-[26px] md:text-3xl">
              BeaverHealthAI
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7">
              Enterprise AI healthcare ecosystem powering patient intake,
              hospital operations, remote monitoring and clinical insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ========================================================= */}
{/* CHALLENGE + WHAT WE BUILT */}
{/* ========================================================= */}

<section className="relative overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16">
  {/* ================= Background Effects ================= */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-40 -top-40 h-[24rem] w-[24rem] rounded-full bg-[#29B6F0]/[0.045] blur-[140px]" />

    <div className="absolute -bottom-40 -right-40 h-[24rem] w-[24rem] rounded-full bg-[#7A4FD1]/[0.045] blur-[140px]" />
  </div>

  <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:space-y-14 sm:px-6 md:space-y-16 lg:space-y-20 lg:px-8">
    {/* ========================================================= */}
    {/* CHALLENGE */}
    {/* ========================================================= */}

    <div className="grid items-start gap-7 sm:gap-9 lg:grid-cols-12 lg:gap-10">
      {/* Left */}

      <div
  data-aos="fade-right"
  data-aos-duration="900"
  className="lg:col-span-4"
>
  <div className="lg:sticky lg:top-28">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-white shadow-[0_0_25px_rgba(62,123,214,.22)] sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16">
      <TriangleAlert
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        strokeWidth={2}
      />
    </div>

    <span className="mt-5 inline-block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:mt-6 sm:text-xs md:mt-7 md:text-sm md:tracking-[0.28em]">
      Challenge
    </span>

    <h2 className="mt-2.5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:mt-3 sm:text-4xl">
      The Challenge
    </h2>

    <div className="mt-4 h-[3px] w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-5 sm:h-1 sm:w-24" />
  </div>
</div>

      {/* Right */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="lg:col-span-8"
      >
        <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.018] p-5 backdrop-blur-[3px] transition-all duration-500 hover:border-[#3E7BD6]/50 hover:shadow-[0_20px_55px_rgba(62,123,214,.12)] sm:rounded-[26px] sm:p-7 md:p-9 lg:rounded-[30px] lg:p-10">
          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          {/* Hover Glow */}

          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#29B6F0]/[0.06] blur-[100px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">
            <p className="text-[15px] leading-7 text-[#D4D4D8] sm:text-base sm:leading-8 md:text-lg md:leading-8 lg:leading-9">
              Healthcare providers were drowning in front-desk workflows,
              paper intake, and reactive care.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#D4D4D8] sm:mt-6 sm:text-base sm:leading-8 md:mt-7 md:text-lg md:leading-8 lg:mt-8 lg:leading-9">
              They needed software that worked the way modern medicine
              does — intelligent, integrated, and built for actual
              clinical staff.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ========================================================= */}
    {/* WHAT WE BUILT */}
    {/* ========================================================= */}

    <div className="grid items-start gap-7 sm:gap-9 lg:grid-cols-12 lg:gap-10">
      {/* Left */}

     <div
  data-aos="fade-right"
  data-aos-duration="900"
  className="lg:col-span-4"
>
  <div className="lg:sticky lg:top-28">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-white shadow-[0_0_25px_rgba(62,123,214,.22)] sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16">
      <Layers3
        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
        strokeWidth={2}
      />
    </div>

    <span className="mt-5 inline-block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:mt-6 sm:text-xs md:mt-7 md:text-sm md:tracking-[0.28em]">
      Solution
    </span>

    <h2 className="mt-2.5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:mt-3 sm:text-4xl">
      What We Built
    </h2>

    <div className="mt-4 h-[3px] w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-5 sm:h-1 sm:w-24" />
  </div>
</div>

      {/* Right */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="lg:col-span-8"
      >
        <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0D111B]/90 p-5 shadow-[0_18px_55px_rgba(0,0,0,.25)] backdrop-blur-[3px] transition-all duration-500 hover:border-[#7A4FD1]/50 hover:shadow-[0_22px_65px_rgba(122,79,209,.13)] sm:rounded-[26px] sm:p-7 md:p-9 lg:rounded-[30px] lg:p-10">
          {/* Subtle Gradient */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-[0.035]" />

          {/* Bottom Gradient */}

          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          <div className="relative">
            <div className="mb-5 inline-flex rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/[0.07] px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.20em] text-[#29B6F0] sm:mb-6 sm:px-5 sm:py-2 sm:text-[10px] sm:tracking-[0.23em] md:text-xs md:tracking-[0.25em]">
              BeaverHealthAI Platform
            </div>

            <p className="text-[16px] leading-8 text-[#E5E7EB] sm:text-lg sm:leading-8 md:text-xl md:leading-9 lg:leading-10">
              A connected suite of healthcare applications —
              patient intake, AI-driven triaging, and preventive care
              tools — that ultimately became the foundation of
              BeaverHealthAI, our own healthcare AI platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>

            {/* ========================================================= */}
{/* WHERE IT STANDS TODAY */}
{/* ========================================================= */}

<section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-32 left-0 h-[22rem] w-[22rem] rounded-full bg-[#29B6F0]/10 blur-[150px] sm:h-[26rem] sm:w-[26rem]" />

    <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-[#7A4FD1]/10 blur-[150px] sm:h-[26rem] sm:w-[26rem]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* Heading */}
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="mx-auto max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
        WHERE IT STANDS TODAY
      </span>

      <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:mt-6 sm:text-4xl md:text-5xl">
        Growing Beyond
        <br />

        <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
          The Original Engagement
        </span>
      </h2>

      <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-6 sm:w-24 sm:h-1" />
    </div>

    {/* Timeline */}
    <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14 lg:mt-16">

      {/* Center Line */}
      <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] md:block" />

      {/* Item 1 */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="relative mb-10 flex flex-col gap-4 sm:mb-12 sm:gap-5 md:flex-row md:items-center md:gap-8 lg:mb-14 lg:gap-10"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] text-lg shadow-[0_0_25px_rgba(41,182,240,.35)] sm:h-11 sm:w-11 sm:text-xl">
          🏥
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            Multiple{" "}
            <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
              Hospitals
            </span>
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D4D4D8] sm:mt-3 sm:text-base sm:leading-7">
            Successfully deployed across multiple healthcare organizations,
            improving digital patient experiences and operational efficiency.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="900"
        className="relative mb-10 flex flex-col gap-4 sm:mb-12 sm:gap-5 md:flex-row md:items-center md:gap-8 lg:mb-14 lg:gap-10"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] text-lg shadow-[0_0_25px_rgba(62,123,214,.35)] sm:h-11 sm:w-11 sm:text-xl">
          ❤️
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
              Thousands
            </span>{" "}
            of Patients
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D4D4D8] sm:mt-3 sm:text-base sm:leading-7">
            Supporting thousands of patients through AI-assisted workflows,
            digital intake, and connected preventive care systems.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="900"
        className="relative flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:gap-8 lg:gap-10"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] text-lg shadow-[0_0_25px_rgba(185,63,201,.35)] sm:h-11 sm:w-11 sm:text-xl">
          🚀
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            Expanding{" "}
            <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
              Platform
            </span>
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D4D4D8] sm:mt-3 sm:text-base sm:leading-7">
            Continues evolving as BeaverHealthAI with new AI capabilities,
            automation features, and enterprise healthcare integrations.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

       {/* ========================================================= */}
{/* WHY IT MATTERS */}
{/* ========================================================= */}



<section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-16 lg:py-16">
      {/* Subtle Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[#29B6F0]/[0.06] blur-[110px]" />
        <div className="absolute right-[8%] bottom-[10%] h-72 w-72 rounded-full bg-[#7A4FD1]/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Label */}
        <div
          data-aos="fade-up"
          className="mb-10 flex items-center gap-4 sm:mb-12 md:mb-14"
        >
          <div className="h-px w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-14" />

          <span className="text-[10px] font-bold tracking-[0.24em] text-[#A0A0A8] sm:text-xs">
            WHY IT MATTERS
          </span>

          <div className="h-px flex-1 bg-[#2A2A30]" />
        </div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
          {/* LEFT — Visual Journey */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative"
          >
            <div className="lg:sticky lg:top-28">
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_35px_rgba(41,182,240,0.08)] sm:h-16 sm:w-16">
                <Workflow
                  size={28}
                  strokeWidth={1.7}
                  className="text-[#29B6F0]"
                />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#A0A0A8] sm:text-base">
                Turning complex ideas into dependable technology requires
                clarity at every stage.
              </p>

              {/* Journey */}
              <div className="mt-8 hidden lg:block">
                <div className="relative pl-1">
                  {/* Vertical Line */}
                  <div className="absolute left-[9px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

                  <div className="relative mb-7 flex items-center gap-4">
                    <div className="relative z-10 h-[19px] w-[19px] rounded-full border border-[#29B6F0] bg-black shadow-[0_0_15px_rgba(41,182,240,0.35)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Concept
                    </span>
                  </div>

                  <div className="relative mb-7 flex items-center gap-4">
                    <div className="relative z-10 h-[19px] w-[19px] rounded-full border border-[#3E7BD6] bg-black shadow-[0_0_15px_rgba(62,123,214,0.35)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Architecture
                    </span>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 h-[19px] w-[19px] rounded-full border border-[#B93FC9] bg-black shadow-[0_0_15px_rgba(185,63,201,0.35)]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Production
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <div data-aos="fade-up" data-aos-delay="120">
              <h2 className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[54px]">
  Going From
  <br />
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
    Clinical Concept
  </span>
  <br />
  To Working Software
</h2>
            </div>

            {/* Mobile Journey */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-7 flex items-center gap-2 lg:hidden"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#29B6F0]/60 bg-[#29B6F0]/5 text-[10px] font-bold text-[#29B6F0]">
                01
              </div>

              <div className="h-px flex-1 bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6]" />

              <ArrowRight
                size={14}
                className="shrink-0 text-[#3E7BD6]"
              />

              <div className="h-px flex-1 bg-gradient-to-r from-[#3E7BD6] to-[#B93FC9]" />

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B93FC9]/60 bg-[#B93FC9]/5 text-[10px] font-bold text-[#B93FC9]">
                03
              </div>
            </div>

            {/* Divider */}
            <div
              data-aos="fade-up"
              data-aos-delay="220"
              className="my-7 h-px w-full bg-gradient-to-r from-[#29B6F0]/30 via-[#3E7BD6]/20 to-transparent sm:my-8"
            />

            {/* Paragraph 1 */}
            <p
              data-aos="fade-up"
              data-aos-delay="280"
              className="max-w-3xl text-sm leading-7 text-[#D4D4D8] sm:text-base sm:leading-8 lg:text-[17px]"
            >
              Going from a clinical idea to production software inside a
              hospital requires secure architecture, reliable workflows,
              seamless integrations, and continuous collaboration with
              healthcare teams.
            </p>

            {/* Paragraph 2 */}
            <p
              data-aos="fade-up"
              data-aos-delay="340"
              className="mt-5 max-w-3xl text-sm leading-7 text-[#A0A0A8] sm:mt-6 sm:text-base sm:leading-8 lg:text-[17px]"
            >
              We delivered that journey successfully and the solution evolved
              into BeaverHealthAI, a growing AI-powered healthcare platform
              supporting real hospitals and real patients every day.
            </p>

            {/* Bottom Tags */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3"
            >
              {[
                "AI Healthcare",
                "Enterprise Platform",
                "Real Hospital Deployment",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[10px] font-semibold tracking-wide text-[#D4D4D8] transition-all duration-300 hover:border-[#3E7BD6]/50 hover:bg-[#3E7BD6]/5 hover:text-white sm:px-4 sm:text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-8 flex items-center gap-3 sm:mt-10"
            >
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6]" />
              <div className="h-1 w-5 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9]" />
            </div>
          </div>
        </div>
      </div>
    </section>



       {/* ========================================================= */}
{/* CASE STUDY NAVIGATION */}
{/* ========================================================= */}

<section className="relative overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 top-0 h-[20rem] w-[20rem] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

    <div className="absolute -right-32 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#7A4FD1]/10 blur-[150px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid gap-5 sm:gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8">

      {/* ================================================= */}
      {/* Previous */}
      {/* ================================================= */}

      <Link
        href="/customers/PaymentPlatformCaseStudy"
        data-aos="fade-right"
        data-aos-duration="900"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[26px] border border-[#2A2A30] bg-[#121212]/90 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#29B6F0] hover:shadow-[0_25px_60px_rgba(41,182,240,.18)] sm:rounded-[28px] sm:p-6 md:p-7 lg:rounded-[30px] lg:p-8">

          {/* Glow */}

          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#29B6F0]/10 blur-[110px] opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Top Border */}

          <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:text-[11px] md:text-xs">
            Previous Case Study
          </span>

          <h3 className="mt-4 text-2xl font-black leading-[1.12] sm:mt-5 sm:text-[28px] md:text-3xl lg:text-[32px]">

            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

              Payment Platform
              <br />
              at Scale

            </span>

          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#D4D4D8] sm:mt-4 sm:text-[15px] sm:leading-7 md:text-base md:leading-7">

            Discover how BeaverTek engineered a high-performance payment
            platform processing millions of secure transactions.

          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-[#29B6F0] transition-all duration-300 group-hover:-translate-x-1.5 sm:mt-7 sm:text-[15px] md:text-base">

            ← View Previous

          </div>

        </div>

      </Link>


      {/* ================================================= */}
      {/* Next */}
      {/* ================================================= */}

      <Link
        href="/customers/datathatdecisionchallenge"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[26px] border border-[#2A2A30] bg-[linear-gradient(135deg,#0D1117,#121826,#1A1732)] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#B93FC9] hover:shadow-[0_25px_65px_rgba(122,79,209,.22)] sm:rounded-[28px] sm:p-6 md:p-7 lg:rounded-[30px] lg:p-8">

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-[0.08]" />

          {/* Bottom Border */}

          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          {/* Glow */}

          <div className="absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#B93FC9]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:text-[11px] md:text-xs">
              Next Case Study
            </span>

            <h3 className="mt-4 text-2xl font-black leading-[1.12] text-white sm:mt-5 sm:text-[28px] md:text-3xl lg:text-[32px]">
              Data That
              <br />
              Drives Decisions
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#D4D4D8] sm:mt-4 sm:text-[15px] sm:leading-7 md:text-base md:leading-7">

              Learn how intelligent dashboards, analytics, and AI insights
              transformed operational decision-making.

            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:translate-x-1.5 sm:mt-7 sm:text-[15px] md:text-base">

              View Next →

            </div>

          </div>

        </div>

      </Link>

    </div>

  </div>

</section>
    </section>
    </App_layout>
  );
}