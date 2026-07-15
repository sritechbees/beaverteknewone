"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import AboutContent from "./aboutcontent";
import WhatWeBelieve from "./whatwebelieve";
import WhereWeAre from "./whereweare";


export default function AboutHero() {
  return (
    <App_layout>
<section className="relative overflow-hidden bg-[#000000] py-12 sm:py-16 lg:py-16">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-[#29B6F0]/10 blur-[120px] lg:blur-[160px]" />

    <div className="absolute -bottom-40 -right-40 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-[#B93FC9]/10 blur-[120px] lg:blur-[160px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

      {/* Left Content */}
      <div className="order-2 text-center lg:order-1 lg:text-left">

        <span
          className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#2A2A30]
          bg-[#121212]
          px-4
          py-2
          text-xs
          sm:text-sm
          font-semibold
          text-[#29B6F0]"
        >
          About BeaverTek
        </span>

        <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Building

          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
            }}
          >
            Digital Future
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#D4D4D8] sm:text-lg lg:mx-0">
          We create innovative software solutions, AI applications,
          cloud platforms and enterprise products that help businesses
          grow with confidence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

          <Link
            href="/services/serviceshero"
            className="
            inline-flex
            justify-center
            rounded-full
            bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
            px-8
            py-3.5
            font-semibold
            text-white
            shadow-[0_0_40px_rgba(62,123,214,.35)]
            transition-all
            duration-300
            hover:scale-105"
          >
            Our Services
          </Link>

          <Link
            href="/contact/contacthero"
            className="
            inline-flex
            justify-center
            rounded-full
            border
            border-[#2A2A30]
            bg-[#121212]
            px-8
            py-3.5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-[#4084ea]"
          >
            Contact Us
          </Link>

        </div>

      </div>

      {/* Right Image */}
      <div className="order-1 flex justify-center lg:order-2">

        {/* Right Image */}
<div className="relative flex items-center justify-center mt-10 lg:mt-0">

  {/* Background Glow */}
  <div className="absolute h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] rounded-full bg-[#29B6F0]/20 blur-[90px]" />

  <div
  className="
    relative
    w-full
    max-w-[280px]
    sm:max-w-[360px]
    md:max-w-[420px]
    lg:max-w-[500px]
    xl:max-w-[540px]
    overflow-hidden
    border-[6px]
    lg:border-8
    border-[#121212]
    bg-[#111]
    shadow-[0_30px_80px_rgba(0,0,0,.45)]
    transition-all
    duration-500
    hover:-translate-y-2
  "
  style={{
  borderRadius: "22% 78% 35% 55% / 38% 4% 38% 4%",
}}

>
  <Image
    src="/home/abouthero.png"
    alt="About BeaverTek"
    width={540}
    height={620}
    priority
    className="w-full h-auto object-fill transition duration-700 hover:scale-110"
  />
</div>

</div>

      </div>

    </div>

  </div>

</section>
    <AboutContent/>
    <WhatWeBelieve/>
    <WhereWeAre/>
    </App_layout>
  );
}