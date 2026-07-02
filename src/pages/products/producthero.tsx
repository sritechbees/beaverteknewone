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
      <section className="relative overflow-hidden bg-[#EAF1F7]">

        {/* ================= Background ================= */}

        <div className="absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full bg-[#45A6E5]/20 blur-[120px]" />

        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#8FD14F]/20 blur-[130px]" />

        <div className="absolute top-24 right-32 h-52 w-52 rounded-full bg-[#45A6E5]/10 blur-[80px]" />

        <div className="absolute bottom-12 left-10 h-36 w-36 rounded-full bg-[#8FD14F]/10 blur-[70px]" />

        {/* Dots */}

        <div className="absolute left-0 bottom-0 opacity-20">
          <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
            {Array.from({ length: 13 }).map((_, row) =>
              Array.from({ length: 13 }).map((_, col) => (
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

        {/* ================= Hero Container ================= */}

        <div className="relative z-20 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-12 lg:px-10">

          {/* ================= Left Content ================= */}

          <div className="relative z-30 w-full lg:w-[48%]">

            {/* Badge */}
            <Link href="/services/serviceshero">
            <div
              data-aos="fade-right"
              className="mb-5 inline-flex items-center rounded-full border border-[#45A6E5]/20 bg-white/90 px-4 py-1.5 shadow-lg backdrop-blur-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5]">
                OUR PRODUCTS
              </span>
            </div>
            </Link>

            {/* Heading */}

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="max-w-xl text-[44px] font-black leading-[1.05] text-[#0B0F14] md:text-5xl xl:text-6xl"
            >
              Software We
              <br />

              <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
                Have Built,
              </span>

              <br />

              <span className="text-[#0B0F14]">
                In Production.
              </span>
            </h1>

            {/* Line */}

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 flex items-center gap-2"
            >
              <span className="h-[4px] w-16 rounded-full bg-[#45A6E5]" />
              <span className="h-[4px] w-8 rounded-full bg-[#8FD14F]" />
            </div>

            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 max-w-lg text-base leading-8 text-[#5B6B7B]"
            >
              Beyond client work,
              <strong className="text-[#0B0F14]">
                {" "}BeaverTek
              </strong>{" "}
              builds and operates its own software products—proving the same
              engineering excellence we bring to every business. Explore our
              innovative platforms that are already running successfully in
              production.
            </p>

            {/* Buttons */}

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                View Products

                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact/contacthero"
                className="group inline-flex items-center rounded-full border-2 border-[#45A6E5] bg-white px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-[#45A6E5] hover:to-[#8FD14F] hover:text-white"
              >
                Contact Us

                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* ================= Right Side starts in Part 2 ================= */}
          {/* ================= Desktop Right Image ================= */}

<div className="absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden lg:block">

  {/* Image Container */}
  <div className="relative h-full w-full">

    <Image
      src="/home/producthero.png"
      alt="Products Hero"
      fill
      priority
      className="object-cover object-center"
    />

    {/* Very Light Overlay */}
    <div className="absolute inset-0 bg-black/5" />

  </div>

  {/* ================= White Curved Panel ================= */}

  <div
    className="
      absolute
      left-[-180px]
      top-0
      h-full
      w-[420px]
      bg-[#EAF1F7]
      rounded-r-[260px]
      border-r-[4px]
      border-white
      shadow-[25px_0_80px_rgba(255,255,255,.55)]
    "
  />

  {/* Thin Highlight Curve */}

  <div
    className="
      absolute
      left-[-165px]
      top-0
      h-full
      w-[405px]
      rounded-r-[250px]
      border-r-2
      border-white/20
    "
  />

  {/* ================= Decorative Blur ================= */}

  <div className="absolute right-12 top-24 h-44 w-44 rounded-full bg-[#45A6E5]/15 blur-[100px]" />

  <div className="absolute bottom-12 right-24 h-52 w-52 rounded-full bg-[#8FD14F]/15 blur-[120px]" />

  {/* Floating Dot */}

  <div className="absolute right-16 top-1/3 h-4 w-4 rounded-full bg-[#45A6E5]/50" />

  <div className="absolute right-36 top-20 h-3 w-3 rounded-full bg-[#8FD14F]" />

  <div className="absolute bottom-28 left-10 h-4 w-4 rounded-full bg-[#45A6E5]/70" />

</div>

{/* ================= Close Hero Container ================= */}

</div>

{/* ================= Mobile starts in Part 3 ================= */}
{/* ================= Mobile Hero ================= */}

<div className="relative block px-6 pb-10 lg:hidden">
  <div
    data-aos="zoom-in"
    className="relative h-[300px] overflow-hidden rounded-[28px] shadow-2xl"
  >
    <Image
      src="/home/producthero.png"
      alt="Products Hero"
      fill
      priority
      className="object-cover object-center"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/30 via-transparent to-transparent" />

    {/* Floating Badge */}

    <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/30 px-4 py-2 backdrop-blur-xl">
      <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-xs font-semibold text-transparent">
        Live Production Products
      </span>
    </div>

    {/* Bottom Card */}

    <div className="absolute bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-[18px] border border-white/40 bg-white/30 p-5 backdrop-blur-xl shadow-xl">

      <div className="grid grid-cols-2 gap-4 text-center">

        <div>
          <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-2xl font-black text-transparent">
            10+
          </h3>

          <p className="mt-1 text-xs text-[#5B6B7B]">
            Products
          </p>
        </div>

        <div>
          <h3 className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-2xl font-black text-transparent">
            24/7
          </h3>

          <p className="mt-1 text-xs text-[#5B6B7B]">
            Running
          </p>
        </div>

      </div>

    </div>

  </div>
</div>

{/* ================= Background Decorations ================= */}

<div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-[#45A6E5]/10 blur-[120px]" />

<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#8FD14F]/10 blur-[130px]" />

<div className="absolute left-12 top-24 hidden h-16 w-16 rounded-full border border-[#45A6E5]/20 xl:block" />

<div className="absolute bottom-16 right-16 hidden h-24 w-24 rounded-full border border-[#8FD14F]/20 xl:block" />

{/* Decorative Dots */}

<div className="absolute right-12 top-40 h-3 w-3 rounded-full bg-[#45A6E5]/40" />

<div className="absolute bottom-24 left-12 h-4 w-4 rounded-full bg-[#8FD14F]/50" />

{/* Bottom Spacer */}

<div className="h-6 md:h-10 lg:h-0" />

</section>
<Productcontent/>

</App_layout>
  );
}