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
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Cyan Glow */}

        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/10 blur-[170px]" />

        {/* Violet Glow */}

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B93FC9]/10 blur-[180px]" />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BD6]/5 blur-[160px]" />

        {/* Top Right Radial */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(41,182,240,0.08),transparent_30%)]" />

      </div>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div className="relative z-10 mx-auto min-h-screen max-w-[1500px]">

        <div className="grid min-h-screen items-center lg:grid-cols-[0.95fr_1.05fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 px-6 py-20 sm:px-10 md:px-14 lg:px-12 xl:px-16">

            {/* Small Decorative Line */}

            <div
              data-aos="fade-right"
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-12 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#29B6F0]">
                CASE STUDIES
              </span>
            </div>

            {/* Badge */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-[#29B6F0]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4D4D8] sm:text-xs">
                CASE STUDIES
              </span>
            </div>

            {/* Small Title */}

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-4 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-base font-bold text-transparent sm:text-lg"
            >
              Enterprise Software Development
            </p>

            {/* Main Heading */}

            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="max-w-[700px] text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl xl:text-[68px]"
            >

              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Building
              </span>

              <span className="mt-1 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                Intelligent Software
              </span>

              <span className="mt-1 block text-white">
                For Real Businesses
              </span>

            </h1>

            {/* Divider */}

            <div
              data-aos="fade-right"
              data-aos-delay="350"
              className="mt-7 flex items-center gap-2"
            >
              <span className="h-[4px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] sm:w-20" />

              <span className="h-[4px] w-8 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-10" />

              <span className="h-[4px] w-2 rounded-full bg-[#B93FC9]" />
            </div>

            {/* CTA Buttons */}

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >

              {/* Primary Button */}

              <Link
                href="/contact/contacthero"
                className="group inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(62,123,214,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(185,63,201,0.35)] sm:w-auto sm:px-7"
              >
                Start Your Project

                <ArrowRight className="ml-2.5 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Button */}

              <Link
                href="/services/serviceshero"
                className="group inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6]/60 hover:bg-white/[0.07] sm:w-auto sm:px-7"
              >
                Explore Services

                <ArrowRight className="ml-2.5 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>

            </div>

            {/* Bottom Accent */}

            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="mt-10 flex items-center gap-4"
            >

              <div className="h-px w-16 bg-gradient-to-r from-[#29B6F0] to-transparent" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#66666F]">
                Enterprise Software Development
              </span>

            </div>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="relative h-[430px] w-full px-5 pb-10 sm:h-[520px] sm:px-8 md:h-[580px] lg:h-screen lg:px-0 lg:py-10">

            {/* Image Glow */}

            <div
              data-aos="zoom-in"
              data-aos-duration="1300"
              className="absolute inset-5 rounded-[70px] bg-gradient-to-br from-[#29B6F0]/20 via-[#3E7BD6]/5 to-[#B93FC9]/20 blur-3xl lg:inset-8"
            />

            {/* Main Image Shape */}

            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="
                group
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[45px]
                rounded-tl-[130px]
                rounded-br-[130px]
                border
                border-white/10
                bg-[#0A0A0A]
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                lg:rounded-[55px]
                lg:rounded-tl-[180px]
                lg:rounded-br-[180px]
              "
            >

              <Image
                src="/home/case study.jpg"
                alt="Enterprise Software Development"
                fill
                priority
                className="object-cover object-center transition-transform duration-[1800ms] group-hover:scale-105"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/10 to-black/70" />

              {/* BeaverTek Gradient */}

              <div className="absolute inset-0 bg-gradient-to-tr from-[#29B6F0]/15 via-transparent to-[#B93FC9]/20" />

              {/* Bottom Dark Gradient */}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Image Badge */}

              <div
                data-aos="fade-down"
                data-aos-delay="500"
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl sm:right-8 sm:top-8 sm:px-5"
              >

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-[10px] font-bold uppercase tracking-[0.25em] text-transparent sm:text-xs">
                  Enterprise Solutions
                </span>

              </div>

              {/* Bottom Image Content */}

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
              >

                <div className="mb-3 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

                  <span className="h-px w-12 bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />

                </div>

                <p className="max-w-xs text-sm font-medium leading-6 text-white/80 sm:text-base">
                  Enterprise Software Development
                </p>

              </div>

            </div>

            {/* =================================================
                DECORATIVE GRADIENT CURVE
            ================================================= */}

            <div className="pointer-events-none absolute -left-4 top-[18%] hidden h-[65%] w-16 lg:block">

              <svg
                className="h-full w-full"
                viewBox="0 0 80 500"
                fill="none"
                preserveAspectRatio="none"
              >

                <defs>

                  <linearGradient
                    id="caseStudyCurve"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >

                    <stop offset="0%" stopColor="#29B6F0" />
                    <stop offset="35%" stopColor="#3E7BD6" />
                    <stop offset="70%" stopColor="#7A4FD1" />
                    <stop offset="100%" stopColor="#B93FC9" />

                  </linearGradient>

                </defs>

                <path
                  d="M78 0 C10 100 10 170 48 250 C78 320 68 410 5 500"
                  stroke="url(#caseStudyCurve)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}

      <div
        data-aos="zoom-in"
        data-aos-delay="700"
        className="pointer-events-none absolute left-6 top-24 hidden h-20 w-20 rounded-full border border-[#3E7BD6]/20 xl:block"
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="800"
        className="pointer-events-none absolute bottom-16 right-10 hidden h-24 w-24 rounded-full border border-[#7A4FD1]/20 xl:block"
      />

      {/* Small Dots */}

      <div className="pointer-events-none absolute right-[8%] top-12 hidden grid-cols-4 gap-3 opacity-30 lg:grid">

        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#29B6F0]"
          />
        ))}

      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />

    </section>
  );
}