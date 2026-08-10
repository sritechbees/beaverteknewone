"use client";

import App_layout from "@/component/layout/app_layout";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Overviewsection from "./overviewsection";
import Whatwedeliver from "./whatwedeliver";

function herosection() {
  const words = ["Cloud Cost", "Optimization", "(FinOps)"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
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
      <section className="relative min-h-[560px] overflow-hidden bg-[#000000] sm:min-h-[620px] lg:min-h-[680px]">

        {/* =====================================================
            FULL BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0">

          <img
            src="/services/Cloud Cost Optimization.jpg"
            alt="Cloud Cost Optimization"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/50 to-transparent" />

        </div>

        {/* =====================================================
            GRADIENT GLOW
        ====================================================== */}

        <div className="absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/10 blur-[140px] sm:h-[380px] sm:w-[380px]" />

        <div className="absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#B93FC9]/10 blur-[140px] sm:h-[400px] sm:w-[400px]" />

        {/* =====================================================
            GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 sm:min-h-[620px] sm:px-8 sm:py-24 lg:min-h-[680px] lg:px-8 lg:py-28">

          <div
            className="w-full max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >

            {/* =================================================
                BREADCRUMB
            ================================================== */}

            <div
              className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl sm:mb-7 sm:px-5"
              data-aos="fade-down"
              data-aos-delay="150"
            >

              <span className="text-xs font-medium text-[#D4D4D8] sm:text-sm">
                Services
              </span>

              <span className="mx-2 text-[#7A7A7A]">
                /
              </span>

              <span className="text-xs font-medium text-[#29B6F0] sm:text-sm">
                Cloud Cost Optimization
              </span>

            </div>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h1
              className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              Cloud Cost

              <span className="mt-2 block">

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  {text}
                </span>

                {/* Typing Cursor */}
                <span className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[3px] animate-pulse bg-[#29B6F0] sm:w-[3px]" />

              </span>

            </h1>

            {/* =================================================
                ACCENT LINE
            ================================================== */}

            <div
              className="mt-6 flex items-center gap-3 sm:mt-8"
              data-aos="fade-right"
              data-aos-delay="500"
            >

              <div className="h-[2px] w-12 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-20" />

              <div className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_15px_rgba(41,182,240,.8)]" />

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM GLASS ELEMENT
        ====================================================== */}

        <div
          className="absolute bottom-5 right-5 hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl lg:block"
          data-aos="fade-left"
          data-aos-delay="600"
        >

          <div className="flex items-center gap-2.5">

            <div className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_12px_rgba(41,182,240,.8)]" />

            <span className="text-xs text-[#D4D4D8]">
              Cloud Cost Optimization
            </span>

          </div>

        </div>

      </section>
<Overviewsection/>
<Whatwedeliver/>
    </App_layout>
  );
}

export default herosection;