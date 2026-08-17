"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productcontent from "./productcontent";

export default function ProductsHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <App_layout>
      <section className="relative isolate overflow-hidden bg-[#000000] py-14 sm:py-18 lg:py-16">

        

        {/* ================================================= */}
        {/* MAIN CONTAINER */}
        {/* ================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
            >

              {/* Local Glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[110px]" />

              {/* Badge */}
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                className="relative inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-[rgba(255,255,255,.05)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0] shadow-[0_0_30px_rgba(41,182,240,.08)] backdrop-blur-xl sm:text-xs"
              >
                BEAVERHEALTHAI
              </div>

              {/* Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="150"
                className="relative mt-7 text-[2.6rem] font-black leading-[1.02] tracking-[-0.04em] text-[#FFFFFF] sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[4.7rem]"
              >
                Smart
                <br />

                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                  }}
                >
                  Healthcare
                </span>

                <br />

                Platform
              </h1>

              {/* Accent Line */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="mt-7 flex items-center justify-center gap-2.5 lg:justify-start"
              >
                <span className="h-[4px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] sm:w-20" />

                <span className="h-[4px] w-8 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-10" />
              </div>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative mt-7 max-w-xl text-[15px] leading-7 text-[#D4D4D8] sm:text-base sm:leading-8 lg:text-lg"
              >
                BeaverHealthAI is an intelligent healthcare platform built by
                BeaverTek to help hospitals, clinics, and healthcare providers
                automate workflows, improve patient engagement, streamline
                operations, and unlock real-time healthcare insights through AI.
              </p>

              {/* Feature Chips */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start"
              >
                {[
                  "AI Powered",
                  "Healthcare",
                  "Cloud Native",
                  "Enterprise Security",
                ].map((item, index) => (
                  <div
                    key={item}
                    data-aos="zoom-in"
                    data-aos-delay={450 + index * 80}
                    className="rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-3.5 py-2 text-xs font-medium text-[#D4D4D8] shadow-[0_10px_25px_rgba(0,0,0,.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#3E7BD6] hover:bg-[#121212] hover:text-white sm:px-4 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start"
              >

                {/* Primary */}
                <Link
                  href="https://beaverhealth.ai"
                  target="_blank"
                  data-aos="zoom-in"
                  data-aos-delay="650"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(62,123,214,.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(185,63,201,.35)] sm:w-auto"
                >
                  Visit Website

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                {/* Secondary */}
                <Link
                  href="/contact/contacthero"
                  data-aos="zoom-in"
                  data-aos-delay="750"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6] hover:bg-[#121212] hover:shadow-[0_0_35px_rgba(62,123,214,.18)] sm:w-auto"
                >
                  Contact Us

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT IMAGE */}
            {/* ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="relative flex w-full items-center justify-center lg:min-h-[560px]"
            >

              {/* Main Aurora */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#29B6F0]/15 via-[#3E7BD6]/12 via-[#7A4FD1]/15 to-[#B93FC9]/15 blur-[120px] sm:h-[430px] sm:w-[430px]" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#29B6F0]/20 blur-3xl sm:h-32 sm:w-32" />

              <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#B93FC9]/20 blur-3xl sm:h-36 sm:w-36" />

              {/* Image Wrapper */}
              <div
                data-aos="zoom-in"
                data-aos-delay="250"
                className="relative w-full max-w-[700px]"
              >

                {/* Outer Glow */}
                <div
                  className="absolute -inset-5 opacity-80 blur-[65px] sm:-inset-7"
                  style={{
                    borderRadius: "38% 62% 60% 40% / 42% 35% 65% 58%",
                    background:
                      "linear-gradient(135deg,rgba(41,182,240,.18),rgba(62,123,214,.18),rgba(122,79,209,.16),rgba(185,63,201,.16))",
                  }}
                />

                {/* Glass Frame */}
                <div
                  className="relative overflow-hidden border border-[#2A2A30] bg-[#121212] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,.55)] transition-all duration-700 hover:-translate-y-2 hover:border-[#3E7BD6] hover:shadow-[0_40px_100px_rgba(62,123,214,.25)] sm:p-2"
                  style={{
                    borderRadius: "70px 24px 70px 24px",
                  }}
                >

                  {/* Image */}
                  <Image
                    src="/home/producthero.png"
                    alt="BeaverHealthAI"
                    width={900}
                    height={700}
                    priority
                    className="h-auto max-h-[620px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#000000]/35 via-transparent to-[#29B6F0]/10" />

                  {/* Gradient Border Accent */}
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/5" />
                </div>

                {/* ================================================= */}
                {/* FLOATING CARD */}
                {/* ================================================= */}

                <div
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="absolute -left-4 top-8 hidden w-48 rounded-2xl border border-[#2A2A30] bg-[rgba(18,18,18,.88)] p-5 shadow-[0_20px_50px_rgba(0,0,0,.45)] backdrop-blur-xl xl:block"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] shadow-[0_0_25px_rgba(62,123,214,.30)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_white]" />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-white">
                    AI Powered
                  </h4>

                  <p className="mt-1.5 text-xs leading-5 text-[#A0A0A8]">
                    Secure Healthcare
                    <br />
                    Platform
                  </p>
                </div>

                {/* ================================================= */}
                {/* LIVE BADGE */}
                {/* ================================================= */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="600"
                  className="absolute -bottom-4 right-2 hidden rounded-full border border-[#3E7BD6]/30 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(62,123,214,.35)] sm:px-6 sm:py-3 sm:text-sm lg:block"
                >
                  Live In Production
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* MOBILE IMAGE */}
          {/* ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative mt-12 lg:hidden"
          >

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-[100px]" />
            </div>

            <div
              className="relative overflow-hidden border border-[#2A2A30] bg-[#121212] p-1.5 shadow-[0_25px_70px_rgba(0,0,0,.5)]"
              style={{
                borderRadius: "55px 20px 55px 20px",
              }}
            >
              <Image
                src="/home/producthero.png"
                alt="BeaverHealthAI"
                width={700}
                height={500}
                priority
                className="h-auto w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#29B6F0]/10" />
            </div>
          </div>
        </div>

        
      </section>

      <Productcontent />
    </App_layout>
  );
}