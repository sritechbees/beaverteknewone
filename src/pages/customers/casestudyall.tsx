"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Casestudyall() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-[#EEF5FA] to-white py-14 lg:py-20">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-52 -left-52 h-[500px] w-[500px] rounded-full bg-[#45A6E5]/15 blur-[170px]" />

        <div className="absolute -bottom-52 -right-52 h-[500px] w-[500px] rounded-full bg-[#8FD14F]/15 blur-[170px]" />

        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[#45A6E5]/10 blur-[120px]" />

        <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-[#8FD14F]/10 blur-[120px]" />

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(69,166,229,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(69,166,229,.4)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,166,229,.08),transparent_40%)]" />

      </div>

      {/* ================= Container ================= */}

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 lg:px-10">

        {/* ================= LEFT SIDE ================= */}

        <div
          className="relative z-30 w-full lg:w-[52%]"
          data-aos="fade-right"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#45A6E5]/20 bg-white/90 px-5 py-2 shadow-lg backdrop-blur-xl">

            <Sparkles className="h-4 w-4 text-[#45A6E5]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#45A6E5]">
              CASE STUDIES
            </span>

          </div>

          {/* Small Title */}

          <p className="mt-8 text-lg font-semibold text-[#45A6E5]">
            Enterprise Software Development
          </p>

          {/* Main Heading */}

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-4xl font-extrabold leading-[1.08] text-[#0B0F14] md:text-5xl xl:text-6xl"
          >
            Building

            <span className="block bg-gradient-to-r from-[#45A6E5] via-[#45A6E5] to-[#8FD14F] bg-clip-text text-transparent">
              Intelligent Software
            </span>

            For Real Businesses
          </h1>

          {/* Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-6 flex items-center gap-2"
          >
            <span className="h-[5px] w-20 rounded-full bg-[#45A6E5]" />

            <span className="h-[5px] w-10 rounded-full bg-[#8FD14F]" />

          </div>
                    
          

          {/* CTA Buttons */}

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 font-semibold text-white shadow-[0_20px_40px_rgba(69,166,229,.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(69,166,229,.35)]"
            >
              Start Your Project

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#45A6E5]/20 bg-white px-8 py-4 font-semibold text-[#0B0F14] shadow-md transition-all duration-300 hover:border-[#45A6E5] hover:bg-[#45A6E5] hover:text-white"
            >
              Explore Services
            </Link>
          </div>

         
          

        </div>

        {/* ================= RIGHT SIDE STARTS HERE ================= */}
                {/* =====================================================
            RIGHT SIDE - PREMIUM CURVED IMAGE (Desktop)
        ===================================================== */}

        <div className="absolute right-0 top-0 hidden h-full w-[42%] overflow-hidden lg:block">

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="relative h-full w-full overflow-hidden rounded-l-[180px]"
          >

            <Image
              src="/home/case study.jpg"
              alt="Enterprise Software Development"
              fill
              priority
              className="object-cover object-center transition-transform duration-[1800ms] hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0B0F14]/10 to-[#0B0F14]/30" />

            {/* Soft Highlight */}

            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20" />

          </div>

          {/* Decorative Curve */}

          <svg
            className="pointer-events-none absolute -left-16 top-0 h-full w-[150px]"
            viewBox="0 0 150 1200"
            preserveAspectRatio="none"
          >
            <path
              d="
                M150,-20
                C30,180
                35,360
                90,620
                C140,860
                80,1080
                15,1220
              "
              fill="none"
              stroke="rgba(255,255,255,.92)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

        </div>

      </div>

      {/* =====================================================
            MOBILE HERO IMAGE
      ===================================================== */}

      <div className="relative block px-6 pb-12 lg:hidden">

        <div
          data-aos="zoom-in"
          className="relative h-[300px] overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(11,15,20,.15)] md:h-[340px]"
        >

          <Image
            src="/home/case study.jpg"
            alt="Enterprise Software"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/45 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/20 px-5 py-2 backdrop-blur-xl">

            <span className="bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent">
              Enterprise Solutions
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
            Decorative Background Effects
      ===================================================== */}

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#45A6E5]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8FD14F]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-8 top-32 hidden h-24 w-24 rounded-full border border-[#45A6E5]/20 xl:block" />

      <div className="pointer-events-none absolute bottom-20 right-16 hidden h-28 w-28 rounded-full border border-[#8FD14F]/20 xl:block" />

    </section>
  );
}