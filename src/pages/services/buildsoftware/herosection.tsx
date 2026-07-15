"use client";

import App_layout from "@/component/layout/app_layout";

import { ArrowRight } from "lucide-react";
import BuildSoftwareContent from "./buildsoftwarecontent";

import WhoThisIsFor from "./whothisisfor";
import Link from "next/link";

export default function HeroSection() {
  return (
    <App_layout>
    <section className="relative overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    <img
      src="/home/theteam.jpg" // Replace with your image
      alt="Application Development"
      className="h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/75" />

    {/* BeaverTek Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/15 via-[#3E7BD6]/10 to-[#B93FC9]/20" />

    {/* Gradient Light */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,182,240,.18),transparent_35%)]" />

    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20 lg:min-h-[82vh] lg:px-8">

    <div className="max-w-3xl">

      {/* Badge */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0] backdrop-blur-md">
          APPLICATION DEVELOPMENT
        </span>
      </div>

      {/* Heading */}
      <h1
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
        className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Build Software
        <br />

        <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          That Drives Growth
        </span>

      </h1>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-8 max-w-2xl text-base leading-8 text-[#D4D4D8] lg:text-lg"
      >
        We design, develop, and deliver scalable software solutions
        tailored to your business—helping you innovate faster,
        streamline operations, and stay ahead of the competition.
      </p>

      {/* Buttons */}
      <div
        data-aos="fade-up"
        data-aos-delay="450"
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >

        <Link
          href="/contact/contacthero"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-7 py-3.5 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]"
        >
          Start Your Project

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/services/serviceshero"
          className="inline-flex items-center justify-center rounded-xl border border-[#3E7BD6]/40 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0] hover:bg-white/10"
        >
          Explore Services
        </Link>

      </div>


    </div>

  </div>

</section>
    <BuildSoftwareContent/>
    <WhoThisIsFor/>
    </App_layout>
  );
}