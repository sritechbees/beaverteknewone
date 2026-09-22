
"use client";

import App_layout from "@/component/layout/app_layout";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Datathatdrivesdecisionshero from "./Datathatdrivesdecisionshero";
import Datathatwhyitmatters from "./datathatwhyitmatters";
import Datathatwhowewrok from "./datathatwhowewrok";
import Datathatcasestudynavigation from "./datathatcasestudynavigation";

export default function datathatdecisionchallenge() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#05070D] scroll-smooth">
      <App_layout>
        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <Datathatdrivesdecisionshero />

        {/* ========================================================= */}
        {/* CHALLENGE SECTION */}
        {/* IMPORTANT: ID MATCHES HERO BUTTON */}
        {/* ========================================================= */}

        <section
          id="datathatdecisionchallenge"
          className="relative scroll-mt-24 overflow-hidden bg-[#000000] py-10 sm:py-12 md:py-14 lg:py-16"
        >
          {/* ================= Background ================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

            <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#3E7BD6]/10 blur-[140px]" />

            <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#7A4FD1]/10 blur-[120px]" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>

          {/* ================= Container ================= */}

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">

              {/* ================================================= */}
              {/* LEFT */}
              {/* ================================================= */}

              <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="flex flex-col justify-center"
              >
                {/* Label */}

                <span className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#29B6F0] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />
                  Challenge
                </span>

                {/* Heading */}

                <h2 className="mt-4 max-w-xl text-[30px] font-black leading-[1.04] tracking-[-0.035em] sm:mt-5 sm:text-[36px] md:text-[42px] lg:mt-6 lg:text-[48px] xl:text-[52px]">
                  <span className="block text-white">
                    Reporting was
                  </span>

                  <span className="mt-1 block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                    Slow & Inconsistent
                  </span>
                </h2>

                {/* Small Gradient Accent */}

                <div
                  data-aos="fade-right"
                  data-aos-delay="180"
                  data-aos-duration="700"
                  className="mt-5 h-1 w-14 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-6 sm:w-16"
                />
              </div>

              {/* ================================================= */}
              {/* RIGHT */}
              {/* ================================================= */}

              <div
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="900"
                className="relative w-full"
              >
                <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6 md:px-7 md:py-7 lg:px-8 lg:py-8">

                  {/* Gradient Accent */}

                  <div className="absolute left-0 top-7 h-12 w-[2px] rounded-full bg-[linear-gradient(to_bottom,#29B6F0,#7A4FD1,#B93FC9)]" />

                  <div className="space-y-5 sm:space-y-6">

                    {/* First Paragraph */}

                    <p
                      data-aos="fade-up"
                      data-aos-delay="250"
                      data-aos-duration="800"
                      className="max-w-2xl text-sm leading-7 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-[17px]"
                    >
                      A client with significant operational data could not get
                      the clear, accurate reports leadership needed to make
                      decisions.
                    </p>

                    {/* Divider */}

                    <div
                      data-aos="fade-right"
                      data-aos-delay="320"
                      data-aos-duration="700"
                      className="h-px w-14 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,transparent)] sm:w-16"
                    />

                    {/* Second Paragraph */}

                    <p
                      data-aos="fade-up"
                      data-aos-delay="350"
                      data-aos-duration="800"
                      className="max-w-2xl text-sm leading-7 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-[17px]"
                    >
                      Reporting was slow, inconsistent, and trusted by no one,
                      making strategic planning difficult across the organization.
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHAT WE BUILT */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#05070D] py-10 sm:py-12 md:py-14 lg:py-16">

          {/* ================= Background ================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[130px]" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#7A4FD1]/10 blur-[140px]" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>

          {/* ================= Container ================= */}

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

              {/* ================================================= */}
              {/* LEFT */}
              {/* ================================================= */}

              <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="lg:sticky lg:top-28"
              >
                {/* Label */}

                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#29B6F0] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />
                  What We Built
                </span>

                {/* Heading */}

                <h2 className="mt-4 max-w-xl text-[30px] font-black leading-[1.05] tracking-[-0.035em] sm:mt-5 sm:text-[36px] md:text-[42px] lg:mt-5 lg:text-[48px] xl:text-[52px]">
                  <span className="block text-white">
                    Tableau Reporting
                  </span>

                  <span className="mt-1 block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                    Built for Decisions
                  </span>
                </h2>

                {/* Gradient Accent */}

                <div className="mt-5 h-1 w-14 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:w-16" />
              </div>

              {/* ================================================= */}
              {/* RIGHT */}
              {/* ================================================= */}

              <div
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="900"
                className="w-full"
              >

                {/* ================= Intro ================= */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  className="relative rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6 md:px-7 md:py-7"
                >
                  {/* Left Gradient Line */}

                  <div className="absolute left-0 top-6 h-10 w-[2px] rounded-full bg-[linear-gradient(to_bottom,#29B6F0,#7A4FD1,#B93FC9)]" />

                  <p className="max-w-3xl text-sm leading-7 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-[17px]">
                    BeaverTek designed and implemented a Tableau-based
                    reporting environment with reliable data pipelines,
                    executive dashboards, and operational reports that
                    provide trusted business insights every day.
                  </p>
                </div>

                {/* ================= Services ================= */}

                <div className="mt-6 space-y-3 sm:mt-7">

                  {/* Cleaned Data Sources */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="800"
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 transition-all duration-300 hover:border-[#29B6F0]/30 hover:bg-white/[0.035] sm:px-6 sm:py-5"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#29B6F0]/50 transition-all duration-300 group-hover:w-1 group-hover:bg-[#29B6F0]" />

                    <div className="pl-2">
                      <h3 className="text-lg font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] group-hover:bg-clip-text group-hover:text-transparent sm:text-xl md:text-2xl">
                        Cleaned Data Sources
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base">
                        Reliable, validated datasets prepared for accurate
                        reporting and long-term scalability.
                      </p>
                    </div>
                  </div>

                  {/* Executive Dashboards */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="350"
                    data-aos-duration="800"
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 transition-all duration-300 hover:border-[#3E7BD6]/30 hover:bg-white/[0.035] sm:px-6 sm:py-5"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#3E7BD6]/50 transition-all duration-300 group-hover:w-1 group-hover:bg-[#3E7BD6]" />

                    <div className="pl-2">
                      <h3 className="text-lg font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] group-hover:bg-clip-text group-hover:text-transparent sm:text-xl md:text-2xl">
                        Executive Dashboards
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base">
                        Real-time visual dashboards that help leadership
                        monitor KPIs and business performance instantly.
                      </p>
                    </div>
                  </div>

                  {/* Operational Reports */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="450"
                    data-aos-duration="800"
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.018] px-5 py-4 transition-all duration-300 hover:border-[#B93FC9]/30 hover:bg-white/[0.035] sm:px-6 sm:py-5"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#B93FC9]/50 transition-all duration-300 group-hover:w-1 group-hover:bg-[#B93FC9]" />

                    <div className="pl-2">
                      <h3 className="text-lg font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-xl md:text-2xl">
                        Operational Reports
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base">
                        Daily reporting designed for operations teams,
                        enabling faster, data-driven business decisions.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* EXISTING SECTIONS */}
        {/* ========================================================= */}

        <Datathatwhyitmatters />
        <Datathatwhowewrok />
        <Datathatcasestudynavigation />

      </App_layout>
    </div>
  );
}

