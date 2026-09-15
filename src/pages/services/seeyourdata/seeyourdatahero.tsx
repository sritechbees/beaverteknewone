
"use client";

import App_layout from "@/component/layout/app_layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SeeYourDataContent from "./seeyourdatacontent";
import SeeYourDataSection from "./seeyourdatasection";
import Whatislooklike from "./whatislooklike";
import Pipeline from "./pipeline";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* ================= HERO ================= */}

      <section className="relative min-h-[58vh] overflow-hidden sm:min-h-[62vh] lg:min-h-[72vh]">
        {/* ================= BACKGROUND IMAGE ================= */}

        <div className="absolute inset-0">
          <img
            src="/home/producthero.png"
            alt="Data & Analytics"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/10" />

          {/* BeaverTek Gradient Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />

          {/* Center Darkening */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,.12),rgba(0,0,0,.58))]" />

          {/* Gradient Accent */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(41,182,240,.14),rgba(62,123,214,.07),rgba(122,79,209,.08),rgba(185,63,201,.12))]" />

          {/* Grid */}

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:55px_55px] sm:bg-[size:65px_65px]" />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-6xl items-center justify-center px-4 py-10 text-center sm:min-h-[62vh] sm:px-5 sm:py-12 lg:min-h-[72vh] lg:px-6 lg:py-14">
          <div className="w-full max-w-3xl">
            {/* ================= BADGE ================= */}

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="40"
            >
              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/10 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/60 hover:bg-white/15 sm:px-4 sm:py-1.5 sm:text-[10px] md:text-[11px]">
                DATA & ANALYTICS
              </span>
            </div>

            {/* ================= HEADING ================= */}

            <h1
              className="mt-4 text-[2rem] font-black leading-[1.08] tracking-[-0.025em] text-white sm:mt-5 sm:text-4xl md:text-[2.8rem] lg:text-5xl xl:text-[3.4rem]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="900"
              data-aos-offset="50"
            >
              Turn Your
              <br />
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                Business Data
              </span>
              <br />
              Into Smart Decisions
            </h1>

            {/* ================= DIVIDER ================= */}

            <div
              className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-5 sm:w-16"
              data-aos="zoom-in"
              data-aos-delay="180"
              data-aos-duration="650"
              data-aos-offset="40"
            />

            {/* ================= DESCRIPTION ================= */}

            <p
              className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#D4D4D8] sm:mt-5 sm:text-sm sm:leading-7 md:text-[15px]"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="850"
              data-aos-offset="40"
            >
              Connect every system into one intelligent platform, uncover
              meaningful insights, and empower your team with real-time
              analytics for faster, smarter business decisions.
            </p>

            {/* ================= BUTTONS ================= */}

            <div
              className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="850"
              data-aos-offset="40"
            >
              {/* Explore Analytics */}

              <Link
                href="#content"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(62,123,214,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(62,123,214,.28)] sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Explore Analytics
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>

              {/* Contact Us */}

              <Link
                href="/contact/contacthero"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/60 hover:bg-white/15 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-offset="30"
        >
          <div className="flex h-9 w-5 justify-center rounded-full border border-white/25">
            <div className="mt-2 h-1.5 w-1.5 animate-bounce rounded-full bg-[#29B6F0]" />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
<SeeYourDataSection/>
<Whatislooklike/>
<Pipeline/>
<SeeYourDataContent/>
     
    </App_layout>
  );
}
