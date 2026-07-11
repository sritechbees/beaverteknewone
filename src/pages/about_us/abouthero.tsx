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
<section className="bg-[#000000] overflow-hidden py-10 lg:py-14">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#29B6F0]/10 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#B93FC9]/10 blur-[160px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[520px]">

      {/* Left Content */}
      <div>

        <span
          className="
            inline-block
            px-4 py-2
            rounded-full
            bg-[#121212]
            border border-[#2A2A30]
            text-[#29B6F0]
            font-semibold
          "
        >
          About BeaverTek
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-[#FFFFFF]">
          Building

          <span
            className="
              block
              bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
              bg-clip-text
              text-transparent
            "
          >
            Digital Future
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#D4D4D8] leading-7 max-w-lg">
          We create innovative software solutions, AI applications,
          cloud platforms and enterprise products that help
          businesses grow with confidence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/services/serviceshero"
            className="
              rounded-full
              bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
              px-7
              py-3.5
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(62,123,214,.35)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Our Services
          </Link>

          <Link
            href="/contact/contacthero"
            className="
              rounded-full
              border
              border-[#2A2A30]
              bg-[#121212]
              px-7
              py-3.5
              font-semibold
              text-[#FFFFFF]
              transition-all
              duration-300
              hover:border-[#3E7BD6]
              hover:bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

      {/* Right Image */}
      <div className="relative flex justify-center">

        {/* Background Blur */}
        <div className="absolute w-80 h-80 bg-[#29B6F0]/20 rounded-full blur-3xl opacity-60" />

        <div
          className="
            relative
            w-full
            max-w-[520px]
            h-[340px]
            sm:h-[420px]
            lg:h-[520px]
            overflow-hidden
            shadow-[0_25px_60px_rgba(0,0,0,.45)]
            border-8
            border-[#121212]
          "
          style={{
            borderRadius:
              "20% 30% 20% 35% / 20% 30% 50% 65%",
          }}
        >
          <Image
            src="/home/abouthero.png"
            alt="About"
            fill
            className="object-fill"
            priority
          />
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