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
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-[#0B0F14]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/home/ctaimage.jpg')",
        }}
      />

      {/* Dark Overlay (Ink System) */}
      <div className="absolute inset-0 bg-[#0B0F14]/80" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#45A6E5]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FD14F]/20 blur-[140px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div
          data-aos="zoom-in"
          className="
            max-w-4xl mx-auto text-center
            bg-[#131A23]/60
            backdrop-blur-2xl
            border border-[#1C2530]
            rounded-[18px]
            p-10 md:p-14
            shadow-[0_0_80px_rgba(69,166,229,0.15)]
          "
        >

          {/* Small Label */}
          <p className="
            uppercase tracking-[4px]
            text-sm font-semibold
            text-[#45A6E5]
            mb-4
          ">
            Ready to Talk?
          </p>

          {/* Heading */}
          <h2 className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold text-white leading-tight
          ">
            Need Senior Technology Help?
          </h2>

          {/* Description */}
          <p className="
            mt-6 text-[#5B6B7B]
            text-lg md:text-xl
            max-w-2xl mx-auto
          ">
            Let's start with a 30-minute conversation about your
            business, technology challenges, and goals.
          </p>

          {/* CTA BUTTON */}
          <Link
            href="/inquiry"
            className="
              inline-flex items-center gap-3
              mt-10 px-8 py-4
              rounded-[999px]
              font-semibold text-white
              bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]
              shadow-lg
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(69,166,229,0.35)]
            "
          >
            Book a 30-Minute Call
            <span className="text-white">→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}