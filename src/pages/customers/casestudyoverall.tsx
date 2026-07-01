"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

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
<section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-[#EAF1F7] to-white py-24 lg:py-36">

  {/* Background Effects */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-52 -left-52 h-[520px] w-[520px] rounded-full bg-[#45A6E5]/15 blur-[160px]" />

    <div className="absolute bottom-[-180px] right-[-120px] h-[460px] w-[460px] rounded-full bg-[#8FD14F]/15 blur-[160px]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,166,229,.08),transparent_45%)]" />

  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    {/* Badge */}

    <div
      data-aos="fade-down"
      className="inline-flex items-center rounded-full border border-[#45A6E5]/20 bg-white/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5] shadow-md backdrop-blur"
    >
      OUR WORK
    </div>

    {/* Heading */}

    <h1
      data-aos="fade-up"
      data-aos-delay="100"
      className="mt-10 text-5xl font-bold leading-[1.05] text-[#0B0F14] md:text-6xl lg:text-7xl"
    >
      Building

      <span className="block bg-gradient-to-r from-[#45A6E5] via-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
        Intelligent Software
      </span>

      For Real Businesses
    </h1>

    {/* Divider */}

    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="mx-auto mt-10 h-1 w-28 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]"
    />

   

    {/* Bottom Text */}

    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="mx-auto mt-8 max-w-2xl text-[20px] leading-8 text-[#7A8A99]"
    >
      We work quietly. Most of our clients prefer not to be named publicly, especially in regulated industries. So instead of a logo wall, we let the work speak. Below are three engagements that show what BeaverTek does at its best.
    </p>

  </div>

</section>
      {/* ================= CASE STUDIES START HERE ================= */}
      {/* ================= PREMIUM CASE STUDY 01 ================= */}

<div
  data-aos="fade-up"
  className="group mt-16 overflow-hidden rounded-[36px] border border-[#45A6E5]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(69,166,229,.18)]"
>

  {/* Top Gradient */}

  <div className="h-2 w-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]" />

  <div className="p-8 lg:p-12">

    {/* Tags */}

    <div className="flex flex-wrap gap-3">

      <span className="rounded-full bg-[#45A6E5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#45A6E5]">
        Financial Services
      </span>

      <span className="rounded-full bg-[#8FD14F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#6A9C34]">
        Build Software
      </span>

    </div>

    {/* Heading */}

    <h2 className="mt-7 text-3xl font-semibold text-[#0B0F14] lg:text-5xl">
      Payment Platform at Scale
    </h2>

    <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6B7B]">
      We modernized a legacy payment workflow into a secure,
      enterprise-grade transaction platform capable of processing
      millions of payments with high availability, automation and
      compliance.
    </p>

    {/* Three Columns */}

    <div className="mt-12 grid gap-8 lg:grid-cols-3">

      <div className="rounded-2xl bg-[#F8FBFE] p-6">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#45A6E5]">
          Challenge
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Existing payment operations depended on manual
          processing, resulting in slow settlements,
          operational risks and scaling limitations.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#45A6E5]">
          Solution
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Designed and developed an automated payment
          gateway platform with secure APIs, monitoring,
          reporting and enterprise integrations.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#45A6E5]">
          Result
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          The platform now serves enterprise customers
          with reliable high-volume transaction processing
          and continuous operational support.
        </p>

      </div>

    </div>

    {/* Bottom Section */}

    <div className="mt-12 flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-[#45A6E5]/5 to-[#8FD14F]/5 p-8 lg:flex-row lg:items-center lg:justify-between">

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-8">

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            150+
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Clients
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#8FD14F]">
            4.5M
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Transactions
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            99.99%
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Uptime
          </p>

        </div>

      </div>

      {/* View More Button */}
<Link href="/customers/PaymentPlatformCaseStudy">
      <button className="group rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">

        View More

        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </button>
      </Link>

    </div>

  </div>

</div>
{/* ================= PREMIUM CASE STUDY 02 ================= */}

<div
  data-aos="fade-up"
  data-aos-delay="150"
  className="group mt-14 overflow-hidden rounded-[36px] border border-[#45A6E5]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(69,166,229,.18)]"
>

  {/* Gradient Top Border */}

  <div className="h-2 w-full bg-gradient-to-r from-[#8FD14F] via-[#45A6E5] to-[#8FD14F]" />

  <div className="p-8 lg:p-12">

    {/* Tags */}

    <div className="flex flex-wrap gap-3">

      <span className="rounded-full bg-[#45A6E5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#45A6E5]">
        Healthcare
      </span>

      <span className="rounded-full bg-[#8FD14F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6EAE34]">
        Artificial Intelligence
      </span>

    </div>

    {/* Title */}

    <h2 className="mt-7 text-3xl font-semibold text-[#0B0F14] lg:text-5xl">
      AI in Real Hospitals
    </h2>

    {/* Description */}

    <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6B7B]">
      BeaverHealthAI developed secure AI assistants that integrate
      directly into hospital operations, helping clinicians reduce
      repetitive administrative work while maintaining security,
      compliance and patient privacy.
    </p>

    {/* Feature Cards */}

    <div className="mt-12 grid gap-8 lg:grid-cols-3">

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition-all duration-300 group-hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Challenge
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Hospital teams spent significant time on repetitive
          documentation and administrative workflows, reducing
          clinical efficiency.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition-all duration-300 group-hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Solution
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Built secure AI copilots connected with hospital
          systems, electronic medical records and internal
          healthcare workflows.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition-all duration-300 group-hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Impact
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Faster clinical operations, improved productivity,
          enhanced patient experience and enterprise-grade
          healthcare compliance.
        </p>

      </div>

    </div>

    {/* Bottom Area */}

    <div className="mt-12 flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-[#45A6E5]/5 to-[#8FD14F]/5 p-8 lg:flex-row lg:items-center lg:justify-between">

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-8">

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            30+
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Hospitals
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#8FD14F]">
            99.9%
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Availability
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            24/7
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Monitoring
          </p>

        </div>

      </div>

      {/* View More Button */}
<Link href="/customers/AIcasestudytwo">
      <button className="group rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(69,166,229,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(69,166,229,.45)]">

        View More

        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </button>
</Link>
    </div>

  </div>

</div>
{/* ================= PREMIUM CASE STUDY 03 ================= */}

<div
  data-aos="fade-up"
  data-aos-delay="200"
  className="group mt-14 overflow-hidden rounded-[36px] border border-[#45A6E5]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(69,166,229,.18)]"
>

  {/* Gradient Border */}

  <div className="h-2 w-full bg-gradient-to-r from-[#45A6E5] via-[#8FD14F] to-[#45A6E5]" />

  <div className="p-8 lg:p-12">

    {/* Tags */}

    <div className="flex flex-wrap gap-3">

      <span className="rounded-full bg-[#45A6E5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#45A6E5]">
        Business Intelligence
      </span>

      <span className="rounded-full bg-[#8FD14F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#6EAE34]">
        Data Platform
      </span>

    </div>

    {/* Heading */}

    <h2 className="mt-7 text-3xl font-semibold text-[#0B0F14] lg:text-5xl">
      Data that Drives Decisions
    </h2>

    <p className="mt-6 max-w-4xl text-lg leading-8 text-[#5B6B7B]">
      Enterprise reporting systems were consolidated into one intelligent
      analytics platform delivering trusted dashboards, automated reports
      and executive insights in real time.
    </p>

    {/* Feature Cards */}

    <div className="mt-12 grid gap-8 lg:grid-cols-3">

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Challenge
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Critical business reports existed across disconnected systems,
          creating inconsistent data and delayed decisions.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Solution
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Built a centralized analytics platform with automated reporting,
          live dashboards and executive KPI monitoring.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F8FBFE] p-6 transition hover:bg-[#45A6E5]/5">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#45A6E5]">
          Result
        </p>

        <p className="leading-7 text-[#5B6B7B]">
          Decision makers gained instant visibility into performance with
          trusted real-time business intelligence.
        </p>

      </div>

    </div>

    {/* Statistics */}

    <div className="mt-12 flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-[#45A6E5]/5 to-[#8FD14F]/5 p-8 lg:flex-row lg:items-center lg:justify-between">

      <div className="grid grid-cols-3 gap-8">

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            40+
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Dashboards
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#8FD14F]">
            10x
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Faster Reports
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold text-[#45A6E5]">
            100%
          </h3>

          <p className="mt-2 text-sm text-[#5B6B7B]">
            Automated
          </p>

        </div>

      </div>
<Link href="/customers/Datathatdrivesdecisionscasestudy">
      <button className="group rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">

        View More

        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </button>
</Link>
    </div>

  </div>

</div>



{/* Decorative Bottom Glow */}

<div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#45A6E5]/15 via-[#8FD14F]/15 to-[#45A6E5]/15 blur-[170px]" />

     
    </App_layout>
  );
}