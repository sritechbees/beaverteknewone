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
      <div className="">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EEF6FF_30%,#F4F1FF_70%,#FFF9FD_100%)]">

  {/* ================= Background ================= */}

  {/* Main Glow - Cyan */}
  <div className="absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full bg-[#29B6F0]/18 blur-[120px]" />

  {/* Main Glow - Magenta */}
  <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/18 blur-[130px]" />

  {/* Blue Glow */}
  <div className="absolute top-24 right-32 h-52 w-52 rounded-full bg-[#3E7BD6]/12 blur-[90px]" />

  {/* Violet Glow */}
  <div className="absolute bottom-12 left-10 h-36 w-36 rounded-full bg-[#7A4FD1]/12 blur-[80px]" />

  {/* Center Premium Glow */}
  <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#29B6F0]/8 via-[#3E7BD6]/8 via-[#7A4FD1]/8 to-[#B93FC9]/8 blur-[170px]" />

  {/* Top Cyan Glow */}
  <div className="absolute top-10 left-1/3 h-44 w-44 rounded-full bg-[#29B6F0]/10 blur-[90px]" />

  {/* Bottom Violet Glow */}
  <div className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-[#7A4FD1]/10 blur-[100px]" />

  {/* Right Magenta Glow */}
  <div className="absolute top-1/3 right-12 h-32 w-32 rounded-full bg-[#B93FC9]/10 blur-[80px]" />

  {/* Extra Blue Glow */}
  <div className="absolute top-20 left-1/2 h-40 w-40 rounded-full bg-[#3E7BD6]/8 blur-[90px]" />

  {/* Bottom Cyan Glow */}
  <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-[#29B6F0]/8 blur-[120px]" />

  {/* Premium Mesh Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,182,240,.08),transparent_40%),radial-gradient(circle_at_top_right,rgba(62,123,214,.07),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(122,79,209,.07),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(185,63,201,.08),transparent_45%)]" />

  {/* Decorative Dots */}

  <div className="absolute left-0 bottom-0 opacity-20">
    <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
      {Array.from({ length: 13 }).map((_, row) =>
        Array.from({ length: 13 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 18}
            cy={row * 18}
            r="1.5"
            fill={
              col % 4 === 0
                ? "#29B6F0"
                : col % 4 === 1
                ? "#3E7BD6"
                : col % 4 === 2
                ? "#7A4FD1"
                : "#B93FC9"
            }
          />
        ))
      )}
    </svg>
  </div>
  
  {/* ================= Hero Container ================= */}

<div className="relative z-20 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-12 lg:px-10">

  {/* ================= Left Content ================= */}

  <div className="relative z-30 w-full lg:w-[48%]">

    {/* Premium Glow */}
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-r from-[#29B6F0]/15 via-[#3E7BD6]/12 to-[#7A4FD1]/15 blur-[120px]" />

    {/* Badge */}

    <Link href="/services/serviceshero">
      <div
        data-aos="fade-right"
        className="mb-5 inline-flex items-center rounded-full border border-[#3E7BD6]/20 bg-gradient-to-r from-white/95 via-[#F7FBFF]/95 to-[#FDF8FF]/95 px-4 py-1.5 shadow-[0_10px_35px_rgba(62,123,214,.12)] backdrop-blur-xl"
      >
        <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-xs font-semibold uppercase tracking-[0.35em] text-transparent">
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

      <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
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
      <span className="h-[4px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]" />

      <span className="h-[4px] w-8 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9]" />
    </div>

    {/* Description */}

    <p
      data-aos="fade-up"
      data-aos-delay="300"
      className="mt-6 max-w-lg text-base leading-8 text-[#5B6B7B]"
    >
      Beyond client work,
      <strong className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
        {" "}BeaverTek
      </strong>{" "}
      builds and operates its own software products—proving the same
      engineering excellence we bring to every business. Explore our
      innovative platforms that are already running successfully in
      production.
    </p>

    {/* CTA Buttons */}

    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="mt-8 flex flex-wrap gap-4"
    >
      <Link
        href="/products"
        className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(62,123,214,.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(185,63,201,.35)]"
      >
        View Products

        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        href="/contact/contacthero"
        className="group inline-flex items-center rounded-full border-2 border-[#3E7BD6]/30 bg-gradient-to-r from-white via-[#F9FCFF] to-[#FCF8FF] px-6 py-3 text-sm font-semibold text-[#0B0F14] shadow-[0_10px_30px_rgba(62,123,214,.12)] transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-[#29B6F0] hover:via-[#3E7BD6] hover:via-[#7A4FD1] hover:to-[#B93FC9] hover:text-white"
      >
        Contact Us

        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </Link>
    </div>

  </div>

  {/* ================= Right Side starts ================= */}
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

    {/* Premium Overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-[#29B6F0]/12 via-transparent via-[#7A4FD1]/5 to-[#B93FC9]/12" />

  </div>

  {/* ================= Premium Gradient Curved Panel ================= */}

  <div
    className="
      absolute
      left-[-180px]
      top-0
      h-full
      w-[430px]
      rounded-r-[270px]
      bg-gradient-to-br
      from-[#FCFEFF]
      via-[#F2F8FF]
      via-[#EEF2FF]
      via-[#F7F1FF]
      to-[#FFF8FD]
      border-r-[4px]
      border-[#29B6F0]/15
      shadow-[25px_0_80px_rgba(62,123,214,.16)]
    "
  />

  {/* Secondary Gradient Layer */}

  <div
    className="
      absolute
      left-[-165px]
      top-0
      h-full
      w-[405px]
      rounded-r-[250px]
      bg-gradient-to-b
      from-[#29B6F0]/5
      via-transparent
      to-[#B93FC9]/5
    "
  />

  {/* Highlight Curve */}

  <div
    className="
      absolute
      left-[-165px]
      top-0
      h-full
      w-[405px]
      rounded-r-[250px]
      border-r-2
      border-[#29B6F0]/25
    "
  />

  {/* ================= Large Gradient Glows ================= */}

  <div className="absolute -top-24 -left-16 h-[340px] w-[340px] rounded-full bg-[#29B6F0]/18 blur-[120px]" />

  <div className="absolute top-24 right-10 h-[250px] w-[250px] rounded-full bg-[#3E7BD6]/14 blur-[110px]" />

  <div className="absolute bottom-10 right-16 h-[300px] w-[300px] rounded-full bg-[#7A4FD1]/16 blur-[130px]" />

  <div className="absolute top-1/2 right-1/4 h-[220px] w-[220px] rounded-full bg-[#B93FC9]/15 blur-[100px]" />

  <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-[140px]" />

  {/* ================= Soft Accent Glows ================= */}

  <div className="absolute top-12 left-20 h-32 w-32 rounded-full bg-[#29B6F0]/12 blur-[70px]" />

  <div className="absolute bottom-28 right-40 h-40 w-40 rounded-full bg-[#3E7BD6]/12 blur-[80px]" />

  <div className="absolute top-40 right-44 h-36 w-36 rounded-full bg-[#7A4FD1]/12 blur-[80px]" />

  <div className="absolute bottom-12 left-24 h-32 w-32 rounded-full bg-[#B93FC9]/10 blur-[70px]" />

  {/* ================= Floating Gradient Dots ================= */}

  <div className="absolute right-16 top-1/3 h-4 w-4 rounded-full bg-[#29B6F0] shadow-[0_0_18px_#29B6F0]" />

  <div className="absolute right-36 top-20 h-3 w-3 rounded-full bg-[#3E7BD6] shadow-[0_0_15px_#3E7BD6]" />

  <div className="absolute top-1/2 right-20 h-3 w-3 rounded-full bg-[#7A4FD1] shadow-[0_0_15px_#7A4FD1]" />

  <div className="absolute bottom-28 left-10 h-4 w-4 rounded-full bg-[#B93FC9] shadow-[0_0_18px_#B93FC9]" />

  <div className="absolute bottom-12 right-1/3 h-2.5 w-2.5 rounded-full bg-[#29B6F0] shadow-[0_0_14px_#29B6F0]" />

</div>

{/* ================= Close Hero Container ================= */}

</div>

{/* ================= Mobile Hero ================= */}

<div className="relative block px-6 pb-10 lg:hidden">
  <div
    data-aos="zoom-in"
    className="relative h-[300px] overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(62,123,214,.20)]"
  >
    <Image
      src="/home/producthero.png"
      alt="Products Hero"
      fill
      priority
      className="object-cover object-center"
    />

    {/* Premium Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/10 via-transparent to-[#B93FC9]/15" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/35 via-transparent to-transparent" />

    {/* Floating Badge */}

    <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-gradient-to-r from-white/35 via-white/25 to-white/20 px-4 py-2 shadow-[0_10px_30px_rgba(62,123,214,.18)] backdrop-blur-xl">
      <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-xs font-semibold text-transparent">
        Live Production Products
      </span>
    </div>

    {/* Bottom Glass Card */}

    <div className="absolute bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-[18px] border border-white/40 bg-gradient-to-br from-white/35 via-white/25 to-white/20 p-5 shadow-[0_20px_45px_rgba(62,123,214,.18)] backdrop-blur-xl">

      <div className="grid grid-cols-2 gap-4 text-center">

        <div>
          <h3 className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-2xl font-black text-transparent">
            10+
          </h3>

          <p className="mt-1 text-xs text-[#5B6B7B]">
            Products
          </p>
        </div>

        <div>
          <h3 className="bg-gradient-to-r from-[#7A4FD1] via-[#B93FC9] to-[#29B6F0] bg-clip-text text-2xl font-black text-transparent">
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

{/* ================= Bottom Background Decorations ================= */}

<div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#29B6F0]/12 blur-[140px]" />

<div className="absolute bottom-10 left-10 h-44 w-44 rounded-full bg-[#3E7BD6]/10 blur-[100px]" />

<div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#7A4FD1]/12 blur-[150px]" />

<div className="absolute top-1/3 right-12 h-40 w-40 rounded-full bg-[#B93FC9]/10 blur-[110px]" />

<div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-gradient-to-r from-[#29B6F0]/8 via-[#7A4FD1]/8 to-[#B93FC9]/8 blur-[150px]" />

{/* Decorative Gradient Rings */}

<div className="absolute left-12 top-24 hidden h-16 w-16 rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/5 xl:block" />

<div className="absolute bottom-16 right-16 hidden h-24 w-24 rounded-full border border-[#7A4FD1]/20 bg-[#7A4FD1]/5 xl:block" />

<div className="absolute top-40 right-32 hidden h-12 w-12 rounded-full border border-[#B93FC9]/20 bg-[#B93FC9]/5 xl:block" />

{/* Floating Glow Dots */}

<div className="absolute right-12 top-40 h-3 w-3 rounded-full bg-[#29B6F0] shadow-[0_0_15px_#29B6F0]" />

<div className="absolute bottom-24 left-12 h-4 w-4 rounded-full bg-[#7A4FD1] shadow-[0_0_16px_#7A4FD1]" />

<div className="absolute bottom-40 right-24 h-3 w-3 rounded-full bg-[#B93FC9] shadow-[0_0_15px_#B93FC9]" />

<div className="absolute top-20 left-1/3 h-2.5 w-2.5 rounded-full bg-[#3E7BD6] shadow-[0_0_14px_#3E7BD6]" />

{/* Bottom Spacer */}

<div className="h-6 md:h-10 lg:h-0" />

</section>
  
        </div>
      <Productcontent />
    </App_layout>
  );
}
