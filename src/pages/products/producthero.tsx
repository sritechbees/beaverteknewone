
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

  }, []);



  return (

    <App_layout>


<section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EEF6FF_35%,#F5F1FF_70%,#FFF9FD_100%)] py-16 lg:py-24">

  {/* ================================================= */}
  {/* Premium Aurora Background */}
  {/* ================================================= */}

  {/* Cyan Glow */}
  <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-[#29B6F0]/18 blur-[170px]" />

  {/* Blue Glow */}
  <div className="absolute top-16 right-0 h-[460px] w-[460px] rounded-full bg-[#3E7BD6]/15 blur-[170px]" />

  {/* Violet Glow */}
  <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[#7A4FD1]/15 blur-[170px]" />

  {/* Magenta Glow */}
  <div className="absolute bottom-0 right-10 h-[360px] w-[360px] rounded-full bg-[#B93FC9]/15 blur-[150px]" />

  {/* Center Glow */}
  <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#29B6F0]/8 via-[#3E7BD6]/8 via-[#7A4FD1]/8 to-[#B93FC9]/8 blur-[150px]" />

  {/* Mesh Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,182,240,.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(185,63,201,.08),transparent_45%)]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(#3E7BD6 1px,transparent 1px),linear-gradient(90deg,#3E7BD6 1px,transparent 1px)",
      backgroundSize: "48px 48px",
    }}
  />

  {/* ================================================= */}
  {/* Main Container */}
  {/* ================================================= */}

  <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-16 lg:grid-cols-[40%_60%]">

      {/* ================================================= */}
      {/* LEFT CONTENT */}
      {/* ================================================= */}

      <div
        data-aos="fade-right"
        className="relative z-10"
      >

        {/* Local Glow */}
        <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full bg-[#29B6F0]/10 blur-[100px]" />

        {/* Badge */}

        <span className="inline-flex items-center rounded-full border border-[#29B6F0]/20 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#29B6F0] shadow-[0_10px_35px_rgba(62,123,214,.10)] backdrop-blur-xl">

          BEAVERHEALTHAI

        </span>

        {/* Heading */}

        <h1 className="mt-7 text-4xl font-black leading-tight text-[#111111] md:text-5xl xl:text-6xl">

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

        <div className="mt-7 flex items-center gap-3">

          <span className="h-[5px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />

          <span className="h-[5px] w-10 rounded-full bg-gradient-to-r from-[#7f52db] to-[#B93FC9]" />

        </div>

                {/* Description */}

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-7 max-w-xl text-lg leading-8 text-[#5E6673]"
        >
          BeaverHealthAI is an intelligent healthcare platform built by
          BeaverTek to help hospitals, clinics, and healthcare providers
          automate workflows, improve patient engagement, streamline
          operations, and unlock real-time healthcare insights through AI.
        </p>

        {/* Feature Chips */}

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 flex flex-wrap gap-3"
        >
          {[
            "AI Powered",
            "Healthcare",
            "Cloud Native",
            "Enterprise Security",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[#3E7BD6]/15 bg-white/80 px-4 py-2 text-sm font-medium text-[#111111] shadow-[0_8px_20px_rgba(62,123,214,.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#29B6F0]/30"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="https://beaverhealth.ai"
            target="_blank"
            className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(62,123,214,.30)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(185,63,201,.35)]"
            style={{
              background:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
            }}
          >
            Visit Website

            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact/contacthero"
            className="group inline-flex items-center justify-center rounded-full border border-[#3E7BD6]/20 bg-white/90 px-8 py-4 font-semibold text-[#111111] shadow-[0_12px_30px_rgba(62,123,214,.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#29B6F0]/40"
          >
            Contact Us

            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT IMAGE STARTS IN PART 2 */}
      {/* ================================================= */}
      {/* ================================================= */}
      {/* RIGHT SIDE - 60% PREMIUM ORGANIC IMAGE */}
      {/* ================================================= */}

      <div
        data-aos="fade-left"
        className="relative flex items-center justify-center lg:min-h-[620px]"
      >
        {/* Premium Aurora Glow */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-r from-[#29B6F0]/20 via-[#3E7BD6]/15 via-[#7A4FD1]/18 to-[#B93FC9]/20 blur-[140px]" />

        </div>

        {/* Decorative Blob */}

        <div className="absolute -top-10 right-10 h-28 w-28 rounded-full bg-[#29B6F0]/20 blur-3xl" />

        <div className="absolute bottom-6 left-6 h-32 w-32 rounded-full bg-[#B93FC9]/20 blur-3xl" />

        {/* Organic Image */}

        <div className="relative w-full max-w-[720px]">

          {/* Glass Glow */}

          <div
            className="absolute -inset-6 blur-[80px]"
            style={{
              borderRadius: "38% 62% 60% 40% / 42% 35% 65% 58%",
              background:
                "linear-gradient(135deg,rgba(41,182,240,.18),rgba(62,123,214,.18),rgba(122,79,209,.16),rgba(185,63,201,.16))",
            }}
          />

          {/* Image Card */}

          <div
            className="relative overflow-hidden border border-white/70 bg-white shadow-[0_35px_90px_rgba(0,0,0,.15)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(62,123,214,.25)]"
            style={{
              borderRadius: "90px 26px 90px 26px",
            }}
          >
            <Image
              src="/home/producthero.png"
              alt="BeaverHealthAI"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}

          <div className="absolute -left-10 top-10 hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,.12)] backdrop-blur-xl lg:block">

            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />

            <h4 className="mt-4 text-lg font-bold text-[#111111]">
              AI Powered
            </h4>

            <p className="mt-2 text-sm leading-6 text-[#5E6673]">
              Secure Healthcare
              <br />
              Platform
            </p>

          </div>

          {/* Floating Badge */}

          <div className="absolute -right-8 bottom-10 hidden rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(62,123,214,.35)] lg:block">

            Live In Production

          </div>

        </div>

      </div>

    </div>
  </div>

  {/* ================================================= */}
  {/* Mobile Image */}
  {/* ================================================= */}

  <div className="relative mt-12 px-6 lg:hidden">

    <div className="absolute inset-0 flex items-center justify-center">

      <div className="h-72 w-72 rounded-full bg-gradient-to-r from-[#29B6F0]/15 via-[#7A4FD1]/15 to-[#B93FC9]/15 blur-[90px]" />

    </div>

    <div
      className="relative overflow-hidden border border-white/70 bg-white shadow-[0_25px_70px_rgba(0,0,0,.12)]"
      style={{
        borderRadius: "70px 24px 70px 24px",
      }}
    >
      <Image
        src="/home/producthero.png"
        alt="BeaverHealthAI"
        width={700}
        height={500}
        priority
        className="w-full object-cover"
      />
    </div>

  </div>

  {/* Bottom Decorative Glow */}

  <div className="absolute -bottom-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#29B6F0]/10 blur-[140px]" />

  <div className="absolute top-0 right-0 h-[260px] w-[260px] rounded-full bg-[#B93FC9]/10 blur-[130px]" />

</section>
 <Productcontent />

    </App_layout>

  );

}