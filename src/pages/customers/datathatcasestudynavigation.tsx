
"use client";

import React from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Datathatcasestudynavigation() {
  return (
    <section className="relative overflow-hidden bg-black py-8 sm:py-10 md:py-12 lg:py-8">
      {/* ================================ */}
      {/* BACKGROUND */}
      {/* ================================ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#29B6F0]/8 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#7A4FD1]/8 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.012)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* ================================ */}
      {/* CONTAINER */}
      {/* ================================ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">

          {/* ================================ */}
          {/* PREVIOUS CASE */}
          {/* ================================ */}
          <Link
            href="/customers/AIcasestudytwo"
            data-aos="fade-right"
            data-aos-duration="800"
            className="group relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#080A0F] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#29B6F0]/25 sm:min-h-[250px] sm:p-6 lg:min-h-[265px] lg:p-7"
          >
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Subtle Border Accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] transition-all duration-700 group-hover:w-full" />

            {/* Top */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-[10px]">
                  Previous Case Study
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-base text-[#A0A0A8] transition-all duration-500 group-hover:-translate-x-1 group-hover:border-[#29B6F0]/30 group-hover:text-[#29B6F0]">
                  ←
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-[27px] font-black leading-[1.02] tracking-[-0.035em] sm:mt-9 sm:text-[32px] lg:text-[35px]">
                <span className="inline-block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent transition-transform duration-500 group-hover:translate-x-1">
                  AI in Real
                </span>

                <br />

                <span className="inline-block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent transition-transform delay-75 duration-500 group-hover:translate-x-1">
                  Hospitals
                </span>
              </h3>
            </div>

            {/* Bottom */}
            <div className="relative mt-6">
              <div className="mb-3 h-px w-10 bg-gradient-to-r from-[#29B6F0] to-transparent transition-all duration-500 group-hover:w-20" />

              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4D4D8] transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-sm">
                <span>View Previous Case</span>

                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </div>
            </div>
          </Link>

          {/* ================================ */}
          {/* END OF CASE STUDIES */}
          {/* ================================ */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="800"
            className="group relative min-h-[230px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#080A0F] p-5 sm:min-h-[250px] sm:p-6 lg:min-h-[265px] lg:p-7"
          >
            {/* Gradient Edge */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#B93FC9]/10 blur-[110px] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[#29B6F0]/7 blur-[110px]" />

            {/* Content */}
            <div className="relative z-10">
              {/* Label */}
              <div
                data-aos="fade-up"
                data-aos-delay="180"
                data-aos-duration="650"
                className="flex items-center gap-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_#29B6F0]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-[10px]">
                  End of Case Studies
                </span>
              </div>

              {/* Heading */}
              <h3
                data-aos="fade-up"
                data-aos-delay="230"
                data-aos-duration="750"
                className="mt-7 text-[27px] font-black leading-[1.04] tracking-[-0.035em] sm:mt-8 sm:text-[32px] lg:text-[35px]"
              >
                <span className="text-white">
                  Real Businesses.{" "}
                </span>

                <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                  Real Software.
                </span>

                <br className="hidden sm:block" />

                <span className="text-white">
                  Running Today.
                </span>
              </h3>

              {/* Paragraph */}
              <p
                data-aos="fade-up"
                data-aos-delay="290"
                data-aos-duration="750"
                className="mt-4 max-w-2xl text-[13px] leading-6 text-[#A0A0A8] sm:mt-5 sm:text-sm sm:leading-6"
              >
                Every case study represents software solving real-world
                business challenges with scalable engineering, AI,
                cloud technologies, and measurable outcomes.
              </p>

              {/* BeaverTek Footer */}
              <div
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="700"
                className="mt-5 flex items-center gap-3 sm:mt-6"
              >
                <div className="h-[2px] w-10 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-16" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-[10px]">
                  BeaverTek
                </span>
              </div>
            </div>

            {/* Decorative BT */}
            <span className="pointer-events-none absolute -bottom-8 right-4 select-none text-[90px] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:right-6 sm:text-[110px]">
              BT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datathatcasestudynavigation;

