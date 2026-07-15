"use client";

import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import ModernizeContent from "./modernizecontent";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function ModernizeHero() {
  return (
    <App_layout>
      <section className="relative min-h-[78vh] overflow-hidden lg:min-h-[82vh]">

  {/* ================= Background Image ================= */}

  <div className="absolute inset-0">

    <img
      src="/home/whyexist.jpg"
      alt="Modernize Hero"
      className="h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/0" />

    {/* Premium Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />

  </div>

  {/* ================= Content ================= */}

  <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-16 lg:min-h-[82vh] lg:px-8">

    <div
      className="max-w-2xl"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      {/* Badge */}

      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
        MODERNIZE
      </span>

      <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
  Modernize
  <br />
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Your Business
  </span>
</h1>

      {/* Description */}

      <p className="mt-6 max-w-xl text-base leading-8 text-[#D4D4D8] lg:text-lg">
        Modernize legacy platforms, migrate workloads,
        improve performance, strengthen security,
        and prepare your business for cloud,
        AI, and future innovation.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/contact/contacthero"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
        >
          Start Your Project
          <ArrowRight size={16} />
        </Link>

        <Link
          href="/about_us/abouthero"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0] hover:bg-white/15"
        >
          <PlayCircle size={18} />
          Learn More
        </Link>

      </div>

    </div>

  </div>

</section>
      <ModernizeContent />

    </App_layout>
  );
}