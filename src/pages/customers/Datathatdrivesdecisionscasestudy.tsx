import App_layout from '@/component/layout/app_layout'
import Link from 'next/link'
import React from 'react'
import Datathatdrivesdecisionshero from './Datathatdrivesdecisionshero'
import TestimonialsSection from '@/component/home/testimonialsection'

function Datathatdrivesdecisionscasestudy() {
  return (
    <App_layout>
      <Datathatdrivesdecisionshero/>
    <div>
        {/* ================================================= */}
{/* CHALLENGE SECTION START */}
{/* ================================================= */}

<section className="relative overflow-hidden bg-[#05070D] py-20 lg:py-28">

  {/* ================= Background ================= */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Cyan Glow */}
    <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#29B6F0]/10 blur-[140px]" />

    {/* Blue Glow */}
    <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#3E7BD6]/10 blur-[170px]" />

    {/* Purple Glow */}
    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7A4FD1]/10 blur-[150px]" />

    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  {/* ================= Container ================= */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

      {/* ================================================= */}
      {/* LEFT */}
      {/* ================================================= */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

          Challenge

        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">

          Reporting was

          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

            Slow & Inconsistent

          </span>

        </h2>

        <div className="mt-7 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      </div>

      {/* ================================================= */}
      {/* RIGHT */}
      {/* ================================================= */}

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="900"
        className="relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,.45)]"
      >

        {/* Gradient Glow */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

        <div className="relative">

          <p className="text-lg leading-9 text-[#D4D4D8]">

            A client with significant operational data could not get
            the clear, accurate reports leadership needed to make
            decisions.

          </p>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />

          <p className="text-lg leading-9 text-[#D4D4D8]">

            Reporting was slow, inconsistent, and trusted by no one,
            making strategic planning difficult across the organization.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================================================= */}
{/* WHAT WE BUILT START */}
{/* ================================================= */}

<section className="relative overflow-hidden bg-[#05070D] py-24 lg:py-32">

  {/* ================= Background ================= */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#29B6F0]/10 blur-[150px]" />

    <div className="absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[#7A4FD1]/10 blur-[180px]" />

    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[160px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  {/* ================= Container ================= */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">

      {/* ========================================== */}
      {/* LEFT */}
      {/* ========================================== */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="lg:sticky lg:top-28"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

          What We Built

        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">

          Tableau Reporting

          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

            Built for Decisions

          </span>

        </h2>

        <div className="mt-7 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      </div>

      {/* ========================================== */}
      {/* RIGHT */}
      {/* ========================================== */}

      <div
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="900"
        className="relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-white/5 backdrop-blur-xl p-8 md:p-12 lg:p-14"
      >

        {/* Glow */}

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[130px]" />

        <div className="relative">

          <p className="max-w-3xl text-lg leading-9 text-[#D4D4D8]">

            BeaverTek designed and implemented a Tableau-based
            reporting environment with reliable data pipelines,
            executive dashboards, and operational reports that
            provide trusted business insights every day.

          </p>

          <div className="mt-12 space-y-10">

            {/* Item */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-6"
            >

              <div className="mt-2 h-3 w-3 rounded-full bg-[#29B6F0]" />

              <div>

                <h3 className="text-2xl font-semibold text-white">

                  Cleaned Data Sources

                </h3>

                <p className="mt-3 text-[#A0A0A8] leading-8">

                  Reliable, validated datasets prepared for accurate
                  reporting and long-term scalability.

                </p>

              </div>

            </div>

            {/* Item */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex gap-6"
            >

              <div className="mt-2 h-3 w-3 rounded-full bg-[#3E7BD6]" />

              <div>

                <h3 className="text-2xl font-semibold text-white">

                  Executive Dashboards

                </h3>

                <p className="mt-3 text-[#A0A0A8] leading-8">

                  Real-time visual dashboards that help leadership
                  monitor KPIs and business performance instantly.

                </p>

              </div>

            </div>

            {/* Item */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex gap-6"
            >

              <div className="mt-2 h-3 w-3 rounded-full bg-[#B93FC9]" />

              <div>

                <h3 className="text-2xl font-semibold text-white">

                  Operational Reports

                </h3>

                <p className="mt-3 text-[#A0A0A8] leading-8">

                  Daily reporting designed for operations teams,
                  enabling faster, data-driven business decisions.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ===================================================== */}
{/* WHY IT MATTERS - PREMIUM TIMELINE DESIGN */}
{/* ===================================================== */}

<section className="relative overflow-hidden py-24 bg-[#05070D]">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#7A4FD1]/10 blur-[180px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:54px_54px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-16 lg:grid-cols-[320px_1fr]">

      {/* ================================= */}
      {/* LEFT */}
      {/* ================================= */}

      <div
        data-aos="fade-right"
        className="relative"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#111827]/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#29B6F0] backdrop-blur-xl">

          WHY IT MATTERS

        </span>

        <div className="mt-10 flex items-start gap-5">

          <div className="flex flex-col items-center">

            <div className="h-5 w-5 rounded-full bg-[#29B6F0] shadow-[0_0_30px_#29B6F0]" />

            <div className="mt-3 h-72 w-[2px] bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#A1A1AA]">
              BeaverTek Insight
            </p>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* RIGHT */}
      {/* ================================= */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        className="relative"
      >

        <h2 className="text-4xl font-black leading-tight text-white md:text-5xl xl:text-6xl">

          Decisions become

          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

            faster, smarter,

          </span>

          <br />

          and more confident.

        </h2>

        <div className="mt-10 h-[4px] w-40 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        <p className="mt-10 max-w-3xl text-lg leading-9 text-[#D4D4D8]">

          Reliable reporting transforms how organizations operate.
          When executives trust the numbers, teams spend less time
          validating spreadsheets and more time making informed,
          data-driven decisions that improve performance every day.

        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-14 flex flex-wrap gap-10"
        >

          <div>

            <p className="text-5xl font-black bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] bg-clip-text text-transparent">
              01
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">
              Trusted Reports
            </p>

          </div>

          <div>

            <p className="text-5xl font-black bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] bg-clip-text text-transparent">
              02
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">
              Faster Decisions
            </p>

          </div>

          <div>

            <p className="text-5xl font-black bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
              03
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">
              Better Outcomes
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<TestimonialsSection/>

{/* ==========================================================
    WHO WE WORK WITH
========================================================== */}

<section className="relative overflow-hidden bg-[#05070D] py-24 lg:py-32">

  {/* ================================================= */}
  {/* Background */}
  {/* ================================================= */}

  <div className="absolute inset-0">

    <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/10 blur-[180px]" />

    <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#7A4FD1]/10 blur-[180px]" />

    <div className="absolute bottom-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[170px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================================================= */}
    {/* Main Grid */}
    {/* ================================================= */}

    <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] items-start">

      {/* ================================================= */}
      {/* Left */}
      {/* ================================================= */}

      <div
        data-aos="fade-right"
        className="lg:sticky lg:top-32"
      >

        <span className="inline-flex rounded-full border border-[#29B6F0]/30 bg-[#101418]/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.32em] text-[#29B6F0] backdrop-blur-xl">

          WHO WE WORK WITH

        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

          Industries

          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

            We Transform

          </span>

        </h2>

        <p className="mt-8 max-w-lg text-lg leading-9 text-[#A0A0A8]">

          Every engagement begins with understanding the business.
          From healthcare and finance to retail and enterprise,
          BeaverTek delivers software that scales with growth.

        </p>

      </div>

      {/* ================================================= */}
      {/* Right Timeline */}
      {/* ================================================= */}

      <div className="space-y-12">

        {/* ========================= */}

        <div
          data-aos="fade-left"
          className="group flex gap-8"
        >

          <div className="flex flex-col items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-3xl shadow-[0_0_35px_rgba(41,182,240,.45)]">

              💳

            </div>

            <div className="mt-4 h-full w-[2px] bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-transparent" />

          </div>

          <div className="flex-1 border-b border-[#222] pb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-[#29B6F0]">

              01

            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">

              Financial Services

            </h3>

            <p className="mt-5 text-[#A0A0A8] leading-8">

              Payment platforms, merchant integrations,
              banking software and secure financial systems.

            </p>

          </div>

        </div>

        {/* ========================= */}

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="group flex gap-8"
        >

          <div className="flex flex-col items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] text-3xl shadow-[0_0_35px_rgba(122,79,209,.45)]">

              🏥

            </div>

            <div className="mt-4 h-full w-[2px] bg-gradient-to-b from-[#7A4FD1] via-[#B93FC9] to-transparent" />

          </div>

          <div className="flex-1 border-b border-[#222] pb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-[#29B6F0]">

              02

            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">

              Healthcare

            </h3>

            <p className="mt-5 text-[#A0A0A8] leading-8">

              AI healthcare platforms,
              patient engagement,
              workflow automation and clinical systems.

            </p>

          </div>

        </div>

        {/* ========================= */}

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="group flex gap-8"
        >

          <div className="flex flex-col items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#29B6F0] to-[#7A4FD1] text-3xl shadow-[0_0_35px_rgba(62,123,214,.45)]">

              🛒

            </div>

            <div className="mt-4 h-full w-[2px] bg-gradient-to-b from-[#29B6F0] via-[#7A4FD1] to-transparent" />

          </div>

          <div className="flex-1 border-b border-[#222] pb-10">

            <p className="text-sm uppercase tracking-[0.3em] text-[#29B6F0]">

              03

            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">

              Retail & Commerce

            </h3>

            <p className="mt-5 text-[#A0A0A8] leading-8">

              Digital commerce,
              customer platforms,
              analytics and business automation.

            </p>

          </div>

        </div>

        {/* ========================= */}

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="group flex gap-8"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7A4FD1] to-[#B93FC9] text-3xl shadow-[0_0_35px_rgba(185,63,201,.45)]">

            🏢

          </div>

          <div className="flex-1">

            <p className="text-sm uppercase tracking-[0.3em] text-[#29B6F0]">

              04

            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">

              Enterprise Operations

            </h3>

            <p className="mt-5 text-[#A0A0A8] leading-8">

              Business intelligence,
              reporting platforms,
              dashboards and enterprise workflow software.

            </p>

          </div>

        </div>

      </div>

    </div>

    {/* ================================================= */}
    {/* Bottom Quote */}
    {/* ================================================= */}

{/* ==========================================================
    ENTERPRISE MESSAGE
========================================================== */}

<div
  data-aos="fade-up"
  data-aos-duration="1000"
  className="relative mt-28 overflow-hidden rounded-[42px] border border-[#2A2A30] bg-[#0B0F16]"
>

  {/* Background Glow */}

  <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[130px]" />

  <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#7A4FD1]/10 blur-[140px]" />

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

  <div className="relative flex flex-col gap-10 lg:flex-row">

    {/* Left Accent */}

    <div className="relative w-full lg:w-[180px]">

      <div className="absolute left-0 top-0 h-full w-[6px] rounded-full bg-[linear-gradient(180deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      <div className="flex h-full flex-col justify-center px-8 py-10 lg:px-10">

        <span className="text-[13px] font-bold uppercase tracking-[0.38em] text-[#29B6F0]">

          BUILT FOR EVERY INDUSTRY

        </span>

      </div>

    </div>

    {/* Right Content */}

    <div className="flex-1 px-8 py-10 lg:px-14 lg:py-16">

      <h3 className="text-3xl font-black leading-tight text-white md:text-5xl">

        Great software

        <br />

        is never about the

        <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

          {" "}industry.

        </span>

      </h3>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-[#A0A0A8]">

        Every successful platform starts by understanding people,
        simplifying complex workflows, and building technology that
        delivers measurable business value over time.

      </p>

      {/* Bottom */}

      <div className="mt-12 flex flex-wrap items-center gap-5">

        <div className="h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        <p className="text-sm uppercase tracking-[0.32em] text-[#29B6F0]">

          Strategy • Design • Engineering • AI

        </p>

      </div>

    </div>

  </div>

</div>

  </div>

</section>



  
{/* ===========================================================
    CASE STUDY NAVIGATION
=========================================================== */}

<section className="relative overflow-hidden py-24">

  {/* ================= Background ================= */}

  <div className="absolute inset-0">

    <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:58px_58px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid gap-8 lg:grid-cols-2">

      {/* ================================================= */}
      {/* Previous Case */}
      {/* ================================================= */}

      <Link
        href="/customers/AIcasestudytwo"
        data-aos="fade-right"
        data-aos-duration="900"
        className="group relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-[#111317]/90 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#29B6F0] hover:shadow-[0_0_45px_rgba(41,182,240,.20)]"
      >

        {/* Glow */}

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

        <span className="inline-flex rounded-full border border-[#29B6F0]/30 bg-[#14181F] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0]">

          Previous Case Study

        </span>

        <h3 className="mt-8 text-3xl font-black leading-tight">

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

            AI in Real

            <br />

            Hospitals

          </span>

        </h3>

        <div className="mt-8 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        <div className="mt-10 flex items-center gap-3 font-semibold text-[#29B6F0] transition-all duration-300 group-hover:-translate-x-2">

          <span className="text-xl">←</span>

          <span>View Previous Case</span>

        </div>

      </Link>

      {/* ================================================= */}
      {/* End Card */}
      {/* ================================================= */}

      <div
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="900"
        className="relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-[linear-gradient(135deg,#111317,#161B23,#111317)] p-10 backdrop-blur-xl"
      >

        {/* Background Glow */}

        <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-[#B93FC9]/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

        <div className="relative">

          <span className="inline-flex rounded-full border border-[#7A4FD1]/30 bg-[#161A22] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#29B6F0]">

            End of Case Studies

          </span>

          <h3 className="mt-8 text-4xl font-black leading-tight text-white">

            Real Businesses.

            <br />

            <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

              Real Software.

            </span>

            <br />

            Running Today.

          </h3>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#A0A0A8]">

            Every case study represents software solving real-world
            business challenges with scalable engineering, AI,
            cloud technologies, and measurable outcomes.

          </p>

          <div className="mt-10 flex items-center gap-3">

            <div className="h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#29B6F0]">

              BeaverTek

            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


    </div>
    </App_layout>
  )
}

export default Datathatdrivesdecisionscasestudy