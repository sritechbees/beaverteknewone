"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowUpRight,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";
import Link from "next/link";

function Overviewmobile() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-32">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

        <div className="absolute -right-40 top-[30%] h-[450px] w-[450px] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

        <div className="absolute bottom-[-200px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[180px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0]">
              Mobile App Development
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div data-aos="fade-right">

            {/* Small badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

              <span className="text-xs font-medium text-[#D4D4D8]">
                Android & iOS Solutions
              </span>
            </div>

            {/* Heading */}

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              Transform ideas into
              <span className="mt-2 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                powerful mobile experiences.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#A0A0A8] sm:text-lg sm:leading-8">
              We build secure, scalable, and user-friendly mobile apps for
              Android and iOS. Whether it&apos;s customer-facing, employee
              productivity, or enterprise-grade applications, our solutions
              enhance engagement, streamline operations, and accelerate
              digital transformation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#888] sm:text-lg sm:leading-8">
              Delivering native and cross-platform apps that connect with
              users anytime, anywhere—boosting satisfaction and driving
              business growth.
            </p>

            {/* =================================================
                FEATURE ITEMS
            ================================================= */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition duration-300 hover:border-[#29B6F0]/30 hover:bg-white/[0.05]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#29B6F0]/10">
                  <ShieldCheck
                    size={20}
                    className="text-[#29B6F0]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Secure
                  </p>

                  <p className="mt-1 text-xs text-[#777]">
                    Enterprise-ready security
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition duration-300 hover:border-[#7A4FD1]/30 hover:bg-white/[0.05]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7A4FD1]/10">
                  <Zap
                    size={20}
                    className="text-[#7A4FD1]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Scalable
                  </p>

                  <p className="mt-1 text-xs text-[#777]">
                    Built for business growth
                  </p>
                </div>
              </div>

            </div>

           
          </div>

          {/* =================================================
              RIGHT IMAGE AREA
          ================================================= */}

          <div
            data-aos="fade-left"
            className="relative mx-auto w-full max-w-[600px]"
          >

            {/* Background gradient glow */}

            <div className="absolute -inset-5 rounded-[45px] bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-2xl" />

            {/* Main image card */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.12] bg-[#0A0A0A] p-2 shadow-2xl">

              <div className="relative h-[400px] overflow-hidden rounded-[26px] sm:h-[480px] md:h-[550px]">

                {/* Selected mobile app image */}

                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern mobile application development"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image overlays */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F0]/10 via-transparent to-[#7A4FD1]/20" />

                {/* Top floating badge */}

                <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-xl sm:left-6 sm:top-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] to-[#7A4FD1]">
                      <Smartphone
                        size={18}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Mobile First
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#999]">
                        Android + iOS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom floating content */}

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">

                  <div className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl sm:p-6">

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
                          Experience
                        </p>

                        <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                          Designed to Connect
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]">
                        <ArrowUpRight
                          size={20}
                          className="text-white"
                        />
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                FLOATING STATS
            ================================================= */}

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-white/10 bg-[#111]/90 p-4 shadow-2xl backdrop-blur-xl sm:block md:-left-8"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] to-[#3E7BD6]">
                  <Globe2
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    24/7
                  </p>

                  <p className="text-xs text-[#777]">
                    Connected
                  </p>
                </div>

              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="absolute -right-3 top-1/3 hidden rounded-2xl border border-white/10 bg-[#111]/90 p-4 shadow-2xl backdrop-blur-xl md:-right-8 md:block"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A4FD1] to-[#B93FC9]">
                  <Zap
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    Fast
                  </p>

                  <p className="text-xs text-[#777]">
                    High Performance
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Overviewmobile;