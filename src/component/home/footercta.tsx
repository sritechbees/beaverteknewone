"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/ctaimage.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#161E2F]/80" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6B91AD]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div
          data-aos="zoom-in"
          className="max-w-4xl mx-auto text-center"
        >

          <p className="uppercase tracking-[3px] text-sm text-[#6B91AD] mb-4 font-medium">
            READY TO TALK?
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Need Senior Technology Help?
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Let's start with a 30-minute conversation about your
            business, technology challenges, and goals.
          </p>

          <Link
            href="/inquiry"
            className="inline-flex items-center gap-3 mt-10 bg-[#6B91AD] hover:bg-[#577B96] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book a 30-Minute Call
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}