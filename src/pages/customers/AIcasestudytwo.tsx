"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import AIHospitalHeroSection from "./AIHospitalHeroSection";

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
    <section className="bg-[#05070D] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

       {/* ========================================================= */}
{/* CASE STUDY HERO + OVERVIEW */}
{/* ========================================================= */}

<section className="relative overflow-hidden bg-[#05070D] py-20 lg:py-28">

  {/* ================= Background ================= */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/15 blur-[170px]" />

    <div className="absolute top-10 right-0 h-[32rem] w-[32rem] rounded-full bg-[#3E7BD6]/15 blur-[170px]" />

    <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute bottom-0 right-20 h-[22rem] w-[22rem] rounded-full bg-[#B93FC9]/10 blur-[160px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:58px_58px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================= Hero ================= */}

    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="mx-auto max-w-5xl text-center"
    >

      {/* Badge */}

      <span
        data-aos="zoom-in"
        data-aos-delay="100"
        className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-[#29B6F0] backdrop-blur-xl shadow-[0_0_30px_rgba(41,182,240,.15)]"
      >
        AI Healthcare Case Study
      </span>

      {/* Heading */}

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
      >
        AI in{" "}
        <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
          Real Hospitals
        </span>
      </h1>

      {/* Divider */}

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="mx-auto mt-8 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]"
      />

      {/* Intro */}

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#D4D4D8]"
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
      className="relative mt-20 overflow-hidden rounded-[36px] border border-[#2A2A30] bg-[#121212]/90 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl"
    >

      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      <div className="grid lg:grid-cols-3">

        {/* Industry */}

        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="border-b border-[#2A2A30] p-8 lg:border-b-0 lg:border-r"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#29B6F0]/10">

            <svg
              className="h-7 w-7 text-[#29B6F0]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M3 21h18M5 21V7l7-4 7 4v14" />
            </svg>

          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-[#29B6F0]">
            Industry
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white">
            Healthcare
          </h3>

          <p className="mt-4 leading-7 text-[#A0A0A8]">
            Secure AI platforms built for hospitals, clinics and
            healthcare providers.
          </p>

        </div>

        {/* Service */}

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-b border-[#2A2A30] p-8 lg:border-b-0 lg:border-r"
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A4FD1]/10">

            <svg
              className="h-7 w-7 text-[#7A4FD1]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>

          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-[#7A4FD1]">
            Services
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white">
            Build Software
          </h3>

          <p className="mt-2 text-xl text-[#29B6F0]">
            + See Your Data
          </p>

          <p className="mt-4 leading-7 text-[#A0A0A8]">
            Custom healthcare applications integrated with intelligent
            analytics and automation.
          </p>

        </div>

        {/* Product */}

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="relative overflow-hidden p-8"
        >

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-10" />

          <div className="relative">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]">

              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4M21 12A9 9 0 1112 3a9 9 0 019 9z" />
              </svg>

            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.30em] text-[#B93FC9]">
              Platform
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              BeaverHealthAI
            </h3>

            <p className="mt-4 leading-7 text-[#D4D4D8]">
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

<section className="relative overflow-hidden py-20 lg:py-28">

  {/* Background Effects */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#7A4FD1]/10 blur-[180px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

    {/* ========================================================= */}
    {/* CHALLENGE */}
    {/* ========================================================= */}

    <div className="grid items-start gap-10 lg:grid-cols-12">

      {/* Left */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="lg:col-span-4"
      >

        <div className="lg:sticky lg:top-28">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-xl font-bold text-white shadow-[0_0_35px_rgba(62,123,214,.35)]">
            01
          </div>

          <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.30em] text-[#29B6F0]">
            Challenge
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white">
            The Challenge
          </h2>

          <div className="mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        </div>

      </div>

      {/* Right */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="lg:col-span-8"
      >

        <div className="group relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_25px_70px_rgba(62,123,214,.18)] md:p-12">

          <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <p className="text-lg leading-9 text-[#D4D4D8]">

            Healthcare providers were drowning in front-desk workflows,
            paper intake, and reactive care.

          </p>

          <p className="mt-8 text-lg leading-9 text-[#D4D4D8]">

            They needed software that worked the way modern medicine
            does — intelligent, integrated, and built for actual
            clinical staff.

          </p>

        </div>

      </div>

    </div>

    {/* ========================================================= */}
    {/* WHAT WE BUILT */}
    {/* ========================================================= */}

    <div className="grid items-start gap-10 lg:grid-cols-12">

      {/* Left */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="lg:col-span-4"
      >

        <div className="lg:sticky lg:top-28">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-xl font-bold text-white shadow-[0_0_35px_rgba(62,123,214,.35)]">
            02
          </div>

          <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.30em] text-[#29B6F0]">
            Solution
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-white">
            What We Built
          </h2>

          <div className="mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        </div>

      </div>

      {/* Right */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="lg:col-span-8"
      >

        <div className="group relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[linear-gradient(135deg,#0F172A,#151B2E,#1A1634)] p-8 shadow-[0_20px_70px_rgba(0,0,0,.45)] transition-all duration-500 hover:border-[#7A4FD1] hover:shadow-[0_25px_80px_rgba(122,79,209,.25)] md:p-12">

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-[0.08]" />

          <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          <div className="relative">

            <div className="mb-8 inline-flex rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
              BeaverHealthAI Platform
            </div>

            <p className="text-xl leading-10 text-[#E5E7EB]">

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

<section className="relative overflow-hidden py-24 lg:py-32">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-32 left-0 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}

    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="mx-auto max-w-3xl text-center"
    >

      <span className="inline-flex rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#29B6F0]">
        WHERE IT STANDS TODAY
      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
        Growing Beyond
        <br />

        <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
          The Original Engagement
        </span>

      </h2>

      <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

    </div>

    {/* Timeline */}

    <div className="relative mx-auto mt-20 max-w-5xl">

      {/* Center Line */}

      <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] md:block" />

      {/* Item 1 */}

      <div
        data-aos="fade-right"
        className="relative mb-14 flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
      >

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] text-xl shadow-[0_0_30px_rgba(41,182,240,.35)]">
          🏥
        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            Multiple Hospitals
          </h3>

          <p className="mt-3 max-w-2xl leading-8 text-[#D4D4D8]">
            Successfully deployed across multiple healthcare organizations,
            improving digital patient experiences and operational efficiency.
          </p>

        </div>

      </div>

      {/* Item 2 */}

      <div
        data-aos="fade-left"
        data-aos-delay="150"
        className="relative mb-14 flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
      >

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] text-xl shadow-[0_0_30px_rgba(62,123,214,.35)]">
          ❤️
        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            Thousands of Patients
          </h3>

          <p className="mt-3 max-w-2xl leading-8 text-[#D4D4D8]">
            Supporting thousands of patients through AI-assisted workflows,
            digital intake, and connected preventive care systems.
          </p>

        </div>

      </div>

      {/* Item 3 */}

      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
      >

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] text-xl shadow-[0_0_30px_rgba(185,63,201,.35)]">
          🚀
        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            Expanding Platform
          </h3>

          <p className="mt-3 max-w-2xl leading-8 text-[#D4D4D8]">
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

<section className="relative overflow-hidden py-24 lg:py-32">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Glow */}

    <div className="absolute -top-44 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/15 blur-[180px]" />

    <div className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/15 blur-[180px]" />

    <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#7A4FD1]/10 blur-[180px]" />

    <div className="absolute bottom-0 right-20 h-[20rem] w-[20rem] rounded-full bg-[#B93FC9]/10 blur-[150px]" />

    {/* Grid */}

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:58px_58px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div
      data-aos="zoom-in-up"
      data-aos-duration="900"
      className="relative overflow-hidden rounded-[36px] border border-[#2A2A30] bg-[#121212]/90 backdrop-blur-xl shadow-[0_35px_80px_rgba(0,0,0,.45)]"
    >

      {/* Gradient Border */}

      <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

      {/* Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#B93FC9]/10 blur-[120px]" />

      <div className="relative grid gap-12 px-8 py-12 md:px-14 md:py-16 lg:grid-cols-[140px_1fr] lg:gap-16">

        {/* Left */}

        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex flex-col items-start"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_35px_rgba(62,123,214,.35)]">

            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>

          </div>

          <span className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#29B6F0]">
            WHY IT MATTERS
          </span>

        </div>

        {/* Right */}

        <div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black leading-tight text-white md:text-4xl xl:text-5xl"
          >
            Going From
            <br />

            <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
              Clinical Concept
            </span>

            <br />

            To Working Software
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-10 max-w-4xl text-lg leading-9 text-[#D4D4D8]"
          >
            Going from a clinical idea to production software inside a
            hospital requires secure architecture, reliable workflows,
            seamless integrations, and continuous collaboration with
            healthcare teams.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="450"
            className="mt-6 max-w-4xl text-lg leading-9 text-[#D4D4D8]"
          >
            We delivered that journey successfully—and the solution
            evolved into BeaverHealthAI, a growing AI-powered healthcare
            platform supporting real hospitals and real patients every
            day.
          </p>

          {/* Bottom Highlight */}

          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="mt-12 flex flex-wrap items-center gap-4"
          >

            <span className="rounded-full border border-[#29B6F0]/25 bg-[#29B6F0]/10 px-5 py-2 text-sm font-semibold text-[#29B6F0]">
              AI Healthcare
            </span>

            <span className="rounded-full border border-[#7A4FD1]/25 bg-[#7A4FD1]/10 px-5 py-2 text-sm font-semibold text-[#7A4FD1]">
              Enterprise Platform
            </span>

            <span className="rounded-full border border-[#B93FC9]/25 bg-[#B93FC9]/10 px-5 py-2 text-sm font-semibold text-[#B93FC9]">
              Real Hospital Deployment
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
       {/* ========================================================= */}
{/* CASE STUDY NAVIGATION */}
{/* ========================================================= */}

<section className="relative overflow-hidden py-24 lg:py-28">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 top-0 h-[24rem] w-[24rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

    <div className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid gap-8 lg:grid-cols-2">

      {/* ================================================= */}
      {/* Previous */}
      {/* ================================================= */}

      <Link
        href="/customers/PaymentPlatformCaseStudy"
        data-aos="fade-right"
        data-aos-duration="900"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[#121212]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0] hover:shadow-[0_30px_70px_rgba(41,182,240,.20)] md:p-10">

          {/* Glow */}

          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Top Border */}

          <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6)]" />

          <span className="text-xs font-semibold uppercase tracking-[0.30em] text-[#29B6F0]">
            Previous Case Study
          </span>

         <h3 className="mt-6 text-3xl font-black leading-tight">

  <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

    Payment Platform
    <br />
    at Scale

  </span>

</h3>
          <p className="mt-5 max-w-md leading-8 text-[#D4D4D8]">
            Discover how BeaverTek engineered a high-performance payment
            platform processing millions of secure transactions.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 font-semibold text-[#29B6F0] transition-all duration-300 group-hover:-translate-x-2">

            ← View Previous

          </div>

        </div>

      </Link>

      {/* ================================================= */}
      {/* Next */}
      {/* ================================================= */}

      <Link
        href="/customers/Datathatdrivesdecisionscasestudy"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="150"
        className="group"
      >

        <div className="relative overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[linear-gradient(135deg,#0D1117,#121826,#1A1732)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B93FC9] hover:shadow-[0_35px_80px_rgba(122,79,209,.25)] md:p-10">

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] opacity-[0.08]" />

          {/* Bottom Border */}

          <div className="absolute inset-x-0 bottom-0 h-[4px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

          {/* Glow */}

          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[#B93FC9]/10 blur-[130px] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">

            <span className="text-xs font-semibold uppercase tracking-[0.30em] text-[#29B6F0]">
              Next Case Study
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight text-white">
              Data That
              <br />
              Drives Decisions
            </h3>

            <p className="mt-5 max-w-md leading-8 text-[#D4D4D8]">
              Learn how intelligent dashboards, analytics, and AI insights
              transformed operational decision-making.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 font-semibold text-white transition-all duration-300 group-hover:translate-x-2">

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