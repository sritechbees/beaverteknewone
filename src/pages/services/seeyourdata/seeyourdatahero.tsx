"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import { Database, BarChart3, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import SeeYourDataContent from "./seeyourdatacontent";

export default function HeroSection() {
  return (
    <App_layout>
    <section className="relative overflow-hidden min-h-[65vh] lg:min-h-[78vh]">

  {/* ================= Background Image ================= */}
  <div className="absolute inset-0">

    <img
      src="/home/producthero.png"
      alt="Data & Analytics"
      className="h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/0" />

    {/* BeaverTek Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />

    {/* Gradient Accent */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(41,182,240,.18),rgba(62,123,214,.08),rgba(122,79,209,.10),rgba(185,63,201,.15))]" />

    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  {/* ================= Content ================= */}
  <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-16 lg:min-h-[78vh] lg:px-8 lg:py-20">

    <div
      className="max-w-2xl"
      data-aos="fade-right"
      data-aos-duration="1000"
    >

      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#29B6F0] backdrop-blur-md">
        DATA & ANALYTICS
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">

        Turn Your

        <br />

        <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          Business Data
        </span>

        <br />

        Into Smart Decisions

      </h1>

      {/* Divider */}
      <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

      {/* Description */}
      <p
        className="mt-6 max-w-xl text-base leading-8 text-[#D4D4D8]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Connect every system into one intelligent platform, uncover
        meaningful insights, and empower your team with real-time
        analytics for faster, smarter business decisions.
      </p>

      {/* Buttons */}
      <div
        className="mt-8 flex flex-col gap-3 sm:flex-row"
        data-aos="fade-up"
        data-aos-delay="350"
      >

        <Link
          href="#content"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
        >
          Explore Analytics
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/contact/contacthero"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0] hover:bg-white/15"
        >
          Contact Us
        </Link>

      </div>

    </div>

  </div>

  {/* Scroll Indicator */}
  <div
    className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    <div className="flex h-10 w-6 justify-center rounded-full border border-white/30">
      <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-[#29B6F0]" />
    </div>
  </div>

</section>
   <SeeYourDataContent/>
    </App_layout>
  );
}