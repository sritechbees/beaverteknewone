
"use client";

import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import StaySecureSection from "./staysecuresection";
import SecurityWhoThisIsFor from "./securitywhothisisfor";

export default function SecureHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-14">
        {/* ================= Background ================= */}

        <div className="absolute inset-0">
          {/* Background Image */}

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55 sm:opacity-60"
            style={{
              backgroundImage: "url('/home/homehero.jpg')",
            }}
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/30" />

          {/* Cyan Glow */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-96 sm:w-96 lg:-left-40 lg:-top-40 lg:h-[32rem] lg:w-[32rem] lg:blur-[140px]" />

          {/* Blue Glow */}

          <div className="absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#3E7BD6]/10 blur-[110px] sm:h-80 sm:w-80 lg:right-0 lg:top-20 lg:h-[28rem] lg:w-[28rem] lg:blur-[150px]" />

          {/* Magenta Glow */}

          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#B93FC9]/8 blur-[110px] sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem] lg:blur-[140px]" />

          {/* Grid Pattern */}

          <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.025)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]" />
        </div>

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}

        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-center justify-center px-4 sm:min-h-[64vh] sm:px-5 md:px-6 lg:min-h-[66vh] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mx-auto w-full max-w-3xl text-center"
          >
            {/* =====================================================
                BADGE
            ====================================================== */}

            <span
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="700"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#3E7BD6]/30
                bg-white/5
                px-4
                py-1.5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#29B6F0]/60
                hover:bg-white/10
                sm:gap-2.5
                sm:px-5
                sm:py-2
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#29B6F0] shadow-[0_0_10px_#29B6F0] sm:h-2 sm:w-2" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.28em]">
                Secure Operations
              </span>
            </span>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
              className="
                mt-5
                text-4xl
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                sm:mt-6
                sm:text-5xl
                md:text-6xl
                lg:mt-7
                lg:text-[4.2rem]
                xl:text-[4.5rem]
              "
            >
              <span className="text-white">Services —</span>

              <br />

              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                Stay Secure
              </span>
            </h1>

            {/* =====================================================
                SUBTITLE
            ====================================================== */}

          

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="900"
              className="
                mx-auto
                mt-5
                max-w-2xl
                px-2
                text-sm
                leading-7
                text-[#A0A0A8]
                sm:mt-6
                sm:px-0
                sm:text-base
                sm:leading-8
                md:text-lg
                md:leading-8
              "
            >
              We build secure, scalable, always-on systems that protect your
              data, ensure uptime, and keep your operations invisible to
              disruption.
            </p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="900"
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:gap-4
              "
            >
              <button
                className="
                  w-full
                  max-w-[180px]
                  rounded-full
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(62,123,214,.30)]
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-[0_0_50px_rgba(185,63,201,.35)]
                  sm:w-auto
                  sm:px-7
                  sm:py-3.5
                "
              >
                Explore Services
              </button>

              <button
                className="
                  w-full
                  max-w-[180px]
                  rounded-full
                  border
                  border-[#3E7BD6]/40
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#29B6F0]
                  hover:bg-white/10
                  hover:shadow-[0_0_30px_rgba(41,182,240,.12)]
                  sm:w-auto
                  sm:px-7
                  sm:py-3.5
                "
              >
                Talk to Us
              </button>
            </div>
          </motion.div>
        </div>

        
      </section>

      {/* =========================================================
          OTHER SECTIONS
      ========================================================== */}

      <StaySecureSection />

      <SecurityWhoThisIsFor />
    </App_layout>
  );
}
