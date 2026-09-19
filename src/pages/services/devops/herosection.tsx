"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import DevOpsSections from "./devopssections";
import Keyservices from "./keyservices";

function Herosection() {
  const words = ["DevOps", "& DevSecOps"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* =====================================================
      AOS
  ====================================================== */

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      disable: false,
    });

    AOS.refresh();

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
      TYPING ANIMATION
  ====================================================== */

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <App_layout>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[390px] overflow-hidden bg-black sm:min-h-[440px] md:min-h-[480px] lg:min-h-[540px]">
        {/* =====================================================
            BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">
          <img
            src="/services/Devops.jpg"
            alt="DevOps & DevSecOps"
            className="h-full w-full object-cover object-center"
          />

          {/* Base Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Center Dark Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Left / Center Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/40 to-transparent sm:h-32 md:h-36" />

          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent sm:h-20" />
        </div>

        {/* =====================================================
            BEAVERTEK COLOR GLOW
        ====================================================== */}

        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29B6F0]/10 blur-[90px] sm:h-[240px] sm:w-[240px] sm:blur-[110px] md:h-[280px] md:w-[280px]" />

        <div className="absolute -left-24 top-8 h-[170px] w-[170px] rounded-full bg-[#29B6F0]/10 blur-[90px] sm:-left-28 sm:h-[220px] sm:w-[220px] sm:blur-[110px]" />

        <div className="absolute -right-24 bottom-0 h-[180px] w-[180px] rounded-full bg-[#B93FC9]/10 blur-[95px] sm:-right-28 sm:h-[240px] sm:w-[240px] sm:blur-[115px]" />

        {/* =====================================================
            BACKGROUND GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* =====================================================
            HERO CONTENT - CENTER
        ====================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl items-center justify-center px-4 py-10 text-center sm:min-h-[440px] sm:px-5 sm:py-12 md:min-h-[480px] md:px-6 md:py-14 lg:min-h-[540px] lg:px-8 lg:py-16">
          <div
            className="flex w-full max-w-4xl flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-offset="40"
          >
            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 backdrop-blur-xl transition-all duration-300 hover:border-[#3E7BD6]/50 hover:bg-white/[0.1] sm:mb-4 sm:px-3.5 sm:py-1.5 md:mb-5"
              data-aos="fade-down"
              data-aos-delay="80"
              data-aos-duration="750"
            >
              {/* BeaverTek Gradient Dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_rgba(41,182,240,.8)]" />

              <span className="ml-2 text-[10px] font-medium text-[#D4D4D8] sm:text-[11px]">
                Services
              </span>

              <span className="mx-1.5 text-[#7A7A7A] sm:mx-2">/</span>

              <span className="text-[10px] font-medium text-[#29B6F0] sm:text-[11px]">
                DevOps & DevSecOps
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================== */}

            <h1
              className="w-full text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px]"
              data-aos="fade-up"
              data-aos-delay="160"
              data-aos-duration="850"
            >
              Build Faster.

              <span className="mt-1.5 block min-h-[1.08em] sm:mt-2">
                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  {text}
                </span>

                {/* Typing Cursor */}
                <span className="ml-1 inline-block h-[0.78em] w-[2px] translate-y-[2px] animate-pulse bg-gradient-to-b from-[#29B6F0] to-[#B93FC9] sm:w-[3px]" />
              </span>
            </h1>

            {/* =================================================
                ACCENT LINE
            ================================================== */}

            <div
              className="mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-2.5 md:mt-5"
              data-aos="fade-up"
              data-aos-delay="280"
              data-aos-duration="800"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:w-12 md:w-16" />

              <div className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_rgba(41,182,240,.9)]" />

              <div className="h-[2px] w-8 bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:w-12 md:w-16" />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CENTER GLOW LINE
        ====================================================== */}

        <div className="absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#3E7BD6] to-transparent opacity-70 sm:w-44 md:w-56" />
      </section>

      {/* =====================================================
          DEVOPS CONTENT
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-offset="50"
      >
        <DevOpsSections />
      </div>

      {/* =====================================================
          KEY SERVICES
      ====================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="100"
        data-aos-offset="50"
      >
        <Keyservices />
      </div>
    </App_layout>
  );
}

export default Herosection;