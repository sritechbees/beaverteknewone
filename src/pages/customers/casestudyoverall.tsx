"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import Casestudyall from "./casestudyall";

export default function CaseStudyoverall() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <App_layout>
      <Casestudyall />
      {/* ================= CASE STUDIES START HERE ================= */}
      {/* ================= PREMIUM CASE STUDY 01 ================= */}

<div
  data-aos="fade-up"
  className="group mt-10 sm:mt-14 lg:mt-16 overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.35)]"
>
  {/* Top Gradient */}
  <div className="h-2 w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

  <div className="p-5 sm:p-8 lg:p-12">

    {/* Tags */}
    <div className="flex flex-wrap gap-2 sm:gap-3">

      <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#29B6F0]">
        Financial Services
      </span>

      <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B93FC9]">
        Build Software
      </span>

    </div>

    {/* Heading */}
    <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#FFFFFF]">
      Payment Platform at Scale
    </h2>

    {/* Description */}
    <p className="mt-5 max-w-4xl text-[15px] sm:text-base lg:text-lg leading-7 lg:leading-8 text-[#D4D4D8]">
      We modernized a legacy payment workflow into a secure,
      enterprise-grade transaction platform capable of processing millions
      of payments with high availability, automation and compliance.
    </p>

    {/* Three Columns */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#3E7BD6] hover:shadow-[0_0_35px_rgba(62,123,214,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
          Challenge
        </p>

        <p className="leading-7 text-sm sm:text-base text-[#A0A0A8]">
          Existing payment operations depended on manual processing,
          resulting in slow settlements, operational risks and scaling
          limitations.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_35px_rgba(122,79,209,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
          Solution
        </p>

        <p className="leading-7 text-sm sm:text-base text-[#A0A0A8]">
          Designed and developed an automated payment gateway platform
          with secure APIs, monitoring, reporting and enterprise
          integrations.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full md:col-span-2 lg:col-span-1 transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_35px_rgba(185,63,201,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          Result
        </p>

        <p className="leading-7 text-sm sm:text-base text-[#A0A0A8]">
          The platform now serves enterprise customers with reliable
          high-volume transaction processing and continuous operational
          support.
        </p>

      </div>

    </div>

    {/* Bottom Section */}

    <div className="mt-10 lg:mt-12 rounded-3xl border border-[#2A2A30] bg-gradient-to-r from-[#29B6F0]/10 via-[#3E7BD6]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 p-6 sm:p-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Statistics */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto">

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
              150+
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Clients
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              4.5M
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Transactions
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              99.99%
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Uptime
            </p>
          </div>

        </div>

        {/* Button */}

        <Link
          href="/customers/PaymentPlatformCaseStudy"
          className="w-full lg:w-auto"
        >
          <button className="group w-full lg:w-auto rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]">
            View More
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </Link>

      </div>

    </div>

  </div>

</div>

      {/* ================= PREMIUM CASE STUDY 02 ================= */}

<div
  data-aos="fade-up"
  data-aos-delay="150"
  className="group mt-10 sm:mt-12 lg:mt-14 overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.35)]"
>
  {/* Gradient Top Border */}
  <div className="h-2 w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

  <div className="p-5 sm:p-8 lg:p-12">

    {/* Tags */}
    <div className="flex flex-wrap gap-2 sm:gap-3">

      <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#29B6F0]">
        Healthcare
      </span>

      <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#B93FC9]">
        Artificial Intelligence
      </span>

    </div>

    {/* Title */}
    <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#FFFFFF]">
      AI in Real Hospitals
    </h2>

    {/* Description */}
    <p className="mt-5 max-w-4xl text-[15px] sm:text-base lg:text-lg leading-7 lg:leading-8 text-[#D4D4D8]">
      BeaverHealthAI developed secure AI assistants that integrate
      directly into hospital operations, helping clinicians reduce
      repetitive administrative work while maintaining security,
      compliance and patient privacy.
    </p>

    {/* Feature Cards */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#29B6F0] hover:shadow-[0_0_35px_rgba(41,182,240,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
          Challenge
        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
          Hospital teams spent significant time on repetitive
          documentation and administrative workflows, reducing clinical
          efficiency.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_35px_rgba(122,79,209,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
          Solution
        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
          Built secure AI copilots connected with hospital systems,
          electronic medical records and internal healthcare workflows.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_35px_rgba(185,63,201,.20)] md:col-span-2 lg:col-span-1">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          Impact
        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
          Faster clinical operations, improved productivity, enhanced
          patient experience and enterprise-grade healthcare compliance.
        </p>

      </div>

    </div>

    {/* Bottom Area */}

    <div className="mt-10 lg:mt-12 rounded-3xl border border-[#2A2A30] bg-gradient-to-r from-[#29B6F0]/10 via-[#3E7BD6]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 p-6 sm:p-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Statistics */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto">

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
              30+
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Hospitals
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              99.9%
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Availability
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              24/7
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Monitoring
            </p>
          </div>

        </div>

        {/* Button */}

        <Link
          href="/customers/AIcasestudytwo"
          className="w-full lg:w-auto"
        >
          <button className="group w-full lg:w-auto rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]">
            View More
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </Link>

      </div>

    </div>

  </div>
</div>
      {/* ================= PREMIUM CASE STUDY 03 ================= */}

      {/* ================= PREMIUM CASE STUDY 02 ================= */}

<div
  data-aos="fade-up"
  data-aos-delay="150"
  className="group mt-10 sm:mt-12 lg:mt-14 overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.35)]"
>
  {/* Gradient Top Border */}
  <div className="h-2 w-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

  <div className="p-5 sm:p-8 lg:p-12">

    {/* Tags */}
    <div className="flex flex-wrap gap-2 sm:gap-3">

      <span className="rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#29B6F0]">
       Business Intelligence
      </span>

      <span className="rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/10 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#B93FC9]">
        Data Platform
      </span>

    </div>

    {/* Title */}
    <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#FFFFFF]">
     Data that Drives Decisions
    </h2>

    {/* Description */}
    <p className="mt-5 max-w-4xl text-[15px] sm:text-base lg:text-lg leading-7 lg:leading-8 text-[#D4D4D8]">
      Enterprise reporting systems were consolidated into one intelligent analytics platform delivering trusted dashboards, automated reports and executive insights in real time.
    </p>

    {/* Feature Cards */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#29B6F0] hover:shadow-[0_0_35px_rgba(41,182,240,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
          Challenge
        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
          Critical business reports existed across disconnected systems, creating inconsistent data and delayed decisions.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#7A4FD1] hover:shadow-[0_0_35px_rgba(122,79,209,.20)]">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
        Solution
        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
         Built a centralized analytics platform with automated reporting, live dashboards and executive KPI monitoring.
        </p>

      </div>

      <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 sm:p-6 h-full transition-all duration-300 hover:border-[#B93FC9] hover:shadow-[0_0_35px_rgba(185,63,201,.20)] md:col-span-2 lg:col-span-1">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
         Result


        </p>

        <p className="text-sm sm:text-base leading-7 text-[#A0A0A8]">
          Decision makers gained instant visibility into performance with trusted real-time business intelligence.
        </p>

      </div>

    </div>

    {/* Bottom Area */}

    <div className="mt-10 lg:mt-12 rounded-3xl border border-[#2A2A30] bg-gradient-to-r from-[#29B6F0]/10 via-[#3E7BD6]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 p-6 sm:p-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Statistics */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto">

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-transparent">
              40+
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Dashboards
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              10x
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Faster Reports
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              100%
            </h3>

            <p className="mt-2 text-sm text-[#A0A0A8]">
              Automated
            </p>
          </div>

        </div>

        {/* Button */}

        <Link
          href="/customers/Datathatdrivesdecisionscasestudy"
          className="w-full lg:w-auto"
        >
          <button className="group w-full lg:w-auto rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]">
            View More
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </Link>

      </div>

    </div>

  </div>
</div>


      {/* Decorative Bottom Glow */}

      <div className="pointer-events-none absolute bottom-[-120px] sm:bottom-[-170px] lg:bottom-[-250px] left-1/2 h-[220px] sm:h-[320px] lg:h-[500px] w-[90%] sm:w-[800px] lg:w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#45A6E5]/15 via-[#8FD14F]/15 to-[#45A6E5]/15 blur-[90px] sm:blur-[120px] lg:blur-[170px]" />
    </App_layout>
  );
}
