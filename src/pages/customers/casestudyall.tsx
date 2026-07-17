"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Casestudyall() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#121212] py-14 lg:py-20">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-52 -left-52 h-[500px] w-[500px] rounded-full bg-[#29B6F0]/15 blur-[170px]" />

        <div className="absolute -bottom-52 -right-52 h-[500px] w-[500px] rounded-full bg-[#B93FC9]/15 blur-[170px]" />

        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[#3E7BD6]/10 blur-[120px]" />

        <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-[#7A4FD1]/10 blur-[120px]" />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(62,123,214,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(69,166,229,.4)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,182,240,.08),transparent_40%)]" />

      </div>

      {/* ================= Container ================= */}

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 lg:px-10">

        {/* ================= LEFT SIDE ================= */}

        <div
          className="relative z-30 w-full lg:w-[52%]"
          data-aos="fade-right"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] bg-white/90 px-5 py-2 shadow-lg backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-[#29B6F0]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#29B6F0]">
              CASE STUDIES
            </span>

          </div>

          {/* Small Title */}

          <p className="mt-8 text-lg font-semibold text-[#29B6F0] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
            Enterprise Software Development
          </p>

          {/* Main Heading */}

         <h1
  data-aos="fade-up"
  data-aos-delay="100"
  className="mt-5 text-4xl font-extrabold leading-[1.08] text-[#FFFFFF] md:text-5xl xl:text-6xl"
>
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Building
  </span>

  <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Intelligent Software
  </span>

  <span className="block text-[#FFFFFF]">
    For Real Businesses
  </span>
</h1>
          {/* Divider */}

         <div
  data-aos="zoom-in"
  data-aos-delay="200"
  className="mt-6 flex items-center gap-2"
>
  <span className="h-[5px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6]" />

  <span className="h-[5px] w-10 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9]" />
</div>

{/* CTA Buttons */}

<div
  data-aos="fade-up"
  data-aos-delay="500"
  className="mt-10 flex flex-col gap-4 sm:flex-row"
>
  <Link
    href="/contact/contacthero"
    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-4 font-semibold text-[#FFFFFF] shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]"
  >
    Start Your Project

    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  <Link
    href="/services/serviceshero"
    className="inline-flex items-center justify-center rounded-full border border-[#2A2A30] bg-[#121212] px-8 py-4 font-semibold text-[#FFFFFF] shadow-md transition-all duration-300 hover:border-[#3E7BD6] hover:bg-gradient-to-r hover:from-[#29B6F0] hover:via-[#3E7BD6] hover:via-[#7A4FD1] hover:to-[#B93FC9] hover:text-[#FFFFFF]"
  >
    Explore Services
  </Link>
</div>

         
          

        </div>

        {/* ================= RIGHT SIDE STARTS HERE ================= */}
                {/* =====================================================
            RIGHT SIDE - PREMIUM CURVED IMAGE (Desktop)
        ===================================================== */}

       <div className="absolute right-0 top-0 hidden h-full w-[42%] overflow-hidden lg:block">

  <div
    data-aos="fade-left"
    data-aos-duration="1000"
    className="relative h-full w-full overflow-hidden rounded-l-[180px]"
  >

    <Image
      src="/home/case study.jpg"
      alt="Enterprise Software Development"
      fill
      priority
      className="object-cover object-center transition-transform duration-[1800ms] hover:scale-105"
    />

    {/* BeaverTek Premium Overlay */}

    <div className="absolute inset-0 bg-gradient-to-l from-[#000000]/10 via-[#0A0A0A]/30 to-[#121212]/70" />

    {/* Premium Gradient Glow */}

    <div className="absolute inset-0 bg-gradient-to-tr from-[#29B6F0]/10 via-transparent to-[#B93FC9]/15" />

    {/* Soft Highlight */}

    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />

  </div>

  {/* Decorative Curve */}

  <svg
    className="pointer-events-none absolute -left-16 top-0 h-full w-[150px]"
    viewBox="0 0 150 1200"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient
        id="beavertekCurve"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#29B6F0" />
        <stop offset="35%" stopColor="#3E7BD6" />
        <stop offset="65%" stopColor="#7A4FD1" />
        <stop offset="100%" stopColor="#B93FC9" />
      </linearGradient>
    </defs>

    <path
      d="
        M150,-20
        C30,180
        35,360
        90,620
        C140,860
        80,1080
        15,1220
      "
      fill="none"
      stroke="url(#beavertekCurve)"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>

</div>

      </div>

      {/* =====================================================
            MOBILE HERO IMAGE
      ===================================================== */}

     <div className="relative block px-6 pb-12 lg:hidden">

  <div
    data-aos="zoom-in"
    className="relative h-[300px] overflow-hidden rounded-[28px] shadow-[0_0_40px_rgba(62,123,214,.35)] md:h-[340px]"
  >

    <Image
      src="/home/case study.jpg"
      alt="Enterprise Software"
      fill
      priority
      className="object-cover object-center"
    />

    {/* BeaverTek Premium Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-[#0A0A0A]/20 to-transparent" />

    {/* Gradient Glow */}

    <div className="absolute inset-0 bg-gradient-to-tr from-[#29B6F0]/10 via-transparent to-[#B93FC9]/15" />

    <div className="absolute left-5 top-5 rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-5 py-2 backdrop-blur-xl">

      <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
        Enterprise Solutions
      </span>

    </div>

  </div>

</div>

{/* =====================================================
      Decorative Background Effects
===================================================== */}

<div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#29B6F0]/12 blur-[140px]" />

<div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B93FC9]/12 blur-[150px]" />

<div className="pointer-events-none absolute left-8 top-32 hidden h-24 w-24 rounded-full border border-[#3E7BD6]/25 xl:block" />

<div className="pointer-events-none absolute bottom-20 right-16 hidden h-28 w-28 rounded-full border border-[#7A4FD1]/25 xl:block" />
    </section>
  );
}