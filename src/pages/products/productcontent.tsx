"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Productcontent() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <>

      {/* =======================================================
                BEAVER HEALTH AI
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#EAF1F7] py-20 lg:py-28">

        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-44 -left-44 h-[420px] w-[420px] rounded-full bg-[#45A6E5]/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#8FD14F]/20 blur-[170px]" />

          <div className="absolute top-40 right-32 h-44 w-44 rounded-full bg-[#45A6E5]/15 blur-[90px]" />

          <div className="absolute bottom-20 left-24 h-40 w-40 rounded-full bg-[#8FD14F]/15 blur-[90px]" />

          {/* Dot Grid */}

          <div className="absolute left-0 bottom-0 opacity-20">

            <svg
              width="240"
              height="220"
              viewBox="0 0 240 220"
              fill="none"
            >
              {Array.from({ length: 12 }).map((_, row) =>
                Array.from({ length: 12 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 18}
                    cy={row * 18}
                    r="1.5"
                    fill="#45A6E5"
                  />
                ))
              )}
            </svg>

          </div>

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* ================================================= */}
            {/* Left */}
            {/* ================================================= */}

            <div data-aos="fade-right">

              {/* Badge */}

              <div className="inline-flex items-center rounded-full border border-[#45A6E5]/20 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl">

                <Activity className="mr-2 h-4 w-4 text-[#45A6E5]" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5]">
                  Beaver Product
                </span>

              </div>

              {/* Heading */}

              <h1 className="mt-8 text-5xl font-black leading-tight text-[#0B0F14] md:text-6xl">

                <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
                  BeaverHealthAI
                </span>

              </h1>

              <p className="mt-5 text-xl font-medium text-[#5B6B7B]">
                Intelligent Healthcare AI Platform
              </p>

              <p className="mt-8 max-w-xl text-lg leading-9 text-[#5B6B7B]">

                BeaverHealthAI combines AI-powered patient intake,
                intelligent triaging, remote patient monitoring,
                predictive analytics and hospital workflow automation
                into one secure enterprise platform.

              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="https://beaverhealth.ai"
                  target="_blank"
                  className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-7 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  Visit Platform

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-[#45A6E5] bg-white px-7 py-3 text-sm font-semibold text-[#0B0F14] transition hover:bg-[#45A6E5] hover:text-white"
                >
                  Contact Sales
                </Link>

              </div>

              {/* Mini Stats */}

              <div className="mt-12 grid grid-cols-3 gap-4">

                <div className="rounded-[18px] bg-white p-5 shadow-lg">

                  <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-3xl font-black text-transparent">
                    AI
                  </h3>

                  <p className="mt-2 text-sm text-[#5B6B7B]">
                    Powered
                  </p>

                </div>

                <div className="rounded-[18px] bg-white p-5 shadow-lg">

                  <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-3xl font-black text-transparent">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm text-[#5B6B7B]">
                    Monitoring
                  </p>

                </div>

                <div className="rounded-[18px] bg-white p-5 shadow-lg">

                  <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-3xl font-black text-transparent">
                    Secure
                  </h3>

                  <p className="mt-2 text-sm text-[#5B6B7B]">
                    Cloud
                  </p>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* Right Starts (Part 2) */}
            {/* ================================================= */}
            <div
  data-aos="fade-left"
  className="relative flex min-h-[620px] items-center justify-center"
>

  {/* Background Glow */}

  <div className="absolute top-10 right-10 h-56 w-56 rounded-full bg-[#45A6E5]/15 blur-[110px]" />

  <div className="absolute bottom-10 left-6 h-60 w-60 rounded-full bg-[#8FD14F]/15 blur-[130px]" />

  {/* ================================================= */}
  {/* Main Glass Card */}
  {/* ================================================= */}

  <div
    className="relative z-20 w-full overflow-hidden rounded-[28px]
    border border-white/60
    bg-white/70
    backdrop-blur-2xl
    shadow-[0_30px_80px_rgba(11,15,20,.12)]
    transition-all duration-500
    hover:-translate-y-2"
  >

    {/* Gradient Top Line */}

    <div className="h-1 w-full bg-gradient-to-r from-[#45A6E5] via-[#8FD14F] to-[#45A6E5]" />

    <div className="p-10 lg:p-12">

      {/* Title */}

      <div className="flex items-center gap-4">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-[18px]
          bg-gradient-to-br from-[#45A6E5] to-[#8FD14F]
          shadow-lg"
        >
          <Brain className="h-8 w-8 text-white" />
        </div>

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5]">
            What it is
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0B0F14]">
            Healthcare AI Platform
          </h2>

        </div>

      </div>

      {/* Description */}

      <p className="mt-8 text-[17px] leading-9 text-[#5B6B7B]">

        A healthcare technology platform combining patient intake,
        AI-powered triaging, remote patient monitoring,
        predictive analytics and intelligent workflow automation—
        built specifically for hospitals, clinics and public health
        organizations.

      </p>

      {/* Divider */}

      <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#45A6E5]/30 to-transparent" />

      {/* Feature List */}

      <div className="grid gap-5">

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="group flex items-start gap-5 rounded-[18px]
          border border-[#45A6E5]/10
          bg-white/70
          p-5
          transition-all duration-300
          hover:border-[#45A6E5]/40
          hover:shadow-lg"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#45A6E5] to-[#8FD14F]">

            <HeartPulse className="h-6 w-6 text-white" />

          </div>

          <div>

            <h4 className="font-semibold text-[#0B0F14]">
              Smart Patient Intake
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#5B6B7B]">
              Intelligent patient registration and automated triage
              to reduce front desk workload.
            </p>

          </div>

        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex items-start gap-5 rounded-[18px]
          border border-[#45A6E5]/10
          bg-white/70
          p-5
          transition-all duration-300
          hover:border-[#45A6E5]/40
          hover:shadow-lg"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#45A6E5] to-[#8FD14F]">

            <Activity className="h-6 w-6 text-white" />

          </div>

          <div>

            <h4 className="font-semibold text-[#0B0F14]">
              Remote Monitoring
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#5B6B7B]">
              Continuous patient monitoring beyond hospital walls
              with secure real-time insights.
            </p>

          </div>

        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="group flex items-start gap-5 rounded-[18px]
          border border-[#45A6E5]/10
          bg-white/70
          p-5
          transition-all duration-300
          hover:border-[#45A6E5]/40
          hover:shadow-lg"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#45A6E5] to-[#8FD14F]">

            <ShieldCheck className="h-6 w-6 text-white" />

          </div>

          <div>

            <h4 className="font-semibold text-[#0B0F14]">
              Enterprise Security
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#5B6B7B]">
              Built for seamless integration with existing EMR and
              EHR systems while maintaining enterprise-grade security.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Floating Card */}

  <div
    data-aos="zoom-in"
    data-aos-delay="500"
    className="absolute -right-4 top-12 hidden rounded-[20px]
    border border-white/60
    bg-white/80
    p-6
    shadow-2xl
    backdrop-blur-xl xl:block"
  >

    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]">

        <Brain className="h-6 w-6 text-white" />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.3em] text-[#45A6E5]">
          AI Engine
        </p>

        <h4 className="mt-1 font-semibold text-[#0B0F14]">
          Predictive Analytics
        </h4>

      </div>

    </div>

  </div>

</div>

</div>

</div>

</section>

{/* =======================================================
      Live Impact Starts (Part 3)
======================================================= */}
{/* =======================================================
      LIVE IMPACT
======================================================= */}

<section className="relative overflow-hidden bg-[#0B0F14] py-20 lg:py-28">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-[#45A6E5]/20 blur-[160px]" />

    <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-[#8FD14F]/20 blur-[180px]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(69,166,229,.08),transparent_60%)]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* Heading */}

    <div
      data-aos="fade-up"
      className="mx-auto max-w-3xl text-center"
    >

      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5] backdrop-blur-xl">

        LIVE IMPACT

      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">

        Healthcare AI
        <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
          {" "}Running In Production
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">

        Serving hospitals, empowering healthcare professionals,
        and processing healthcare data securely with AI-powered
        automation.

      </p>

    </div>

    {/* ================================================= */}
    {/* Bento Cards */}
    {/* ================================================= */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Card 1 */}

      <div
        data-aos="zoom-in"
        className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1C2530]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#45A6E5]/50"
      >

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#45A6E5]/20 blur-[80px]" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] shadow-xl">

            🏥

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">

            Multiple Hospitals

          </h3>

          <p className="mt-5 leading-8 text-gray-300">

            Trusted by hospitals and healthcare providers with
            enterprise-grade digital healthcare infrastructure.

          </p>

          <div className="mt-10 border-t border-white/10 pt-6">

            <h4 className="text-4xl font-black text-[#45A6E5]">

              10+

            </h4>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">

              Healthcare Partners

            </p>

          </div>

        </div>

      </div>

      {/* Card 2 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1C2530]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#8FD14F]/50"
      >

        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#8FD14F]/20 blur-[90px]" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] shadow-xl">

            👨‍⚕️

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">

            Patients Supported

          </h3>

          <p className="mt-5 leading-8 text-gray-300">

            AI-powered patient engagement helping thousands
            receive faster and more personalized care.

          </p>

          <div className="mt-10 border-t border-white/10 pt-6">

            <h4 className="text-4xl font-black text-[#8FD14F]">

              50K+

            </h4>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">

              Patients

            </p>

          </div>

        </div>

      </div>

      {/* Card 3 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1C2530]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#45A6E5]/50"
      >

        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-[#45A6E5]/20 blur-[90px]" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] shadow-xl">

            📊

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">

            Healthcare Analytics

          </h3>

          <p className="mt-5 leading-8 text-gray-300">

            Processing healthcare insights securely with
            AI-driven predictive analytics and automation.

          </p>

          <div className="mt-10 border-t border-white/10 pt-6">

            <h4 className="text-4xl font-black text-[#45A6E5]">

              AI

            </h4>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">

              Powered Intelligence

            </p>

          </div>

        </div>

      </div>

    </div>

    {/* ================================================= */}
    {/* Bottom Stats */}
    {/* ================================================= */}

    <div
      data-aos="fade-up"
      className="mt-20 grid grid-cols-2 gap-6 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-4"
    >

      <div className="text-center">

        <h3 className="text-4xl font-black text-[#45A6E5]">
          10+
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Hospitals
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-4xl font-black text-[#8FD14F]">
          50K+
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Patients
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-4xl font-black text-[#45A6E5]">
          24/7
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Monitoring
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-4xl font-black text-[#8FD14F]">
          AI
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Automation
        </p>

      </div>

    </div>

  </div>

</section>

{/* =======================================================
      Premium CTA Starts (Part 4)
======================================================= */}
{/* =======================================================
      PREMIUM CTA
======================================================= */}

<section className="relative overflow-hidden bg-[#EAF1F7] py-20 lg:py-28">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#45A6E5]/15 blur-[140px]" />
    <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8FD14F]/15 blur-[160px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,166,229,.08),transparent_60%)]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* Glass CTA */}
    <div
      data-aos="zoom-in"
      className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-10 shadow-[0_30px_90px_rgba(11,15,20,.12)] backdrop-blur-2xl lg:p-16"
    >

      {/* Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#45A6E5] via-[#8FD14F] to-[#45A6E5]" />

      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#45A6E5]/10 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#8FD14F]/10 blur-[120px]" />

     <div className="relative z-10 flex flex-col items-center text-center">

  {/* Badge */}

  <span className="inline-flex items-center rounded-full border border-[#45A6E5]/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5] shadow-md">
    Visit BeaverHealthAI
  </span>

  {/* Heading */}

  <h2 className="mt-8 text-4xl font-black leading-tight text-[#0B0F14] md:text-5xl lg:text-6xl">
    Healthcare AI
    <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
      {" "}Platform
    </span>
  </h2>

  {/* Description */}

  <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5B6B7B]">
    Discover BeaverHealthAI, an intelligent healthcare platform designed to
    streamline patient care, automate clinical workflows, enable predictive
    analytics, and support hospitals with secure AI-powered digital solutions.
  </p>

  {/* Button */}

  <div className="mt-10">

    <Link
      href="https://beaverhealth.ai"
      target="_blank"
      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(69,166,229,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(69,166,229,0.38)]"
    >
      Visit BeaverHealthAI

      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

    </Link>

  </div>

</div>

    </div>

  </div>

</section>


{/* =======================================================
      Relationship Section Starts (Part 5)
======================================================= */}
{/* =======================================================
      RELATIONSHIP SECTION
======================================================= */}

<section className="relative overflow-hidden bg-[#0B0F14] py-20 lg:py-24">

  {/* Background Effects */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-32 left-0 h-[380px] w-[380px] rounded-full bg-[#45A6E5]/15 blur-[150px]" />

    <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#8FD14F]/15 blur-[180px]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,166,229,.08),transparent_65%)]" />

    <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

  </div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

    <div
      data-aos="zoom-in"
      className="overflow-hidden rounded-[32px] border border-white/10 bg-[#1C2530]/70 p-10 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,.35)] lg:p-16"
    >

      {/* Top Gradient */}

      <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]" />

      {/* Logo Circle */}

      <div className="mt-10 flex justify-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#45A6E5] to-[#8FD14F] shadow-[0_20px_60px_rgba(69,166,229,.35)]">

          <span className="text-4xl">🚀</span>

        </div>

      </div>

      {/* Heading */}

      <h2 className="mt-10 text-center text-3xl font-black text-white md:text-4xl">

        Built by
        <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
          {" "}BeaverTek
        </span>

      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-gray-300">

        <span className="font-semibold text-white">
          BeaverHealthAI
        </span>{" "}
        is a flagship product of
        <span className="font-semibold text-white">
          {" "}BeaverTek
        </span>,
        designed, engineered and continuously operated by our in-house
        product team. Every feature reflects our expertise in AI,
        cloud-native architecture, healthcare workflows and enterprise
        software engineering.

      </p>

      {/* Feature Chips */}

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {[
          "AI Powered",
          "Healthcare",
          "Cloud Native",
          "Enterprise Security",
          "Scalable Platform",
          "Built by BeaverTek",
        ].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-[#45A6E5]/40 hover:bg-white/10"
          >
            {item}
          </div>
        ))}

      </div>

      {/* Divider */}

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Bottom Stats */}

      <div className="grid gap-6 text-center md:grid-cols-3">

        <div>

          <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-4xl font-black text-transparent">
            AI
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
            Driven Innovation
          </p>

        </div>

        <div>

          <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-4xl font-black text-transparent">
            24/7
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
            Reliable Platform
          </p>

        </div>

        <div>

          <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-4xl font-black text-transparent">
            100%
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
            BeaverTek Built
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    </>
  );
}