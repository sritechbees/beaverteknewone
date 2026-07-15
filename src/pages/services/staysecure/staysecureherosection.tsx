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
    });
  }, []);

  return (
    <App_layout>
<section className="relative overflow-hidden bg-[#000000] py-24 lg:py-16">

  {/* ================= Background ================= */}
  <div className="absolute inset-0">

    {/* Background Image */}
    {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
  style={{
    backgroundImage: "url('/home/homehero.jpg')",
  }}
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/25" />

{/* Cyan Glow */}
<div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#29B6F0]/10 blur-[140px]" />

{/* Blue Glow */}
<div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-[#3E7BD6]/10 blur-[150px]" />

{/* Magenta Glow */}
<div className="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/8 blur-[140px]" />

{/* Grid Pattern */}
<div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

</div>


  <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-3xl"
    >

      {/* Badge */}
      <span
        data-aos="zoom-in"
        data-aos-delay="150"
        className="inline-flex items-center gap-3 rounded-full border border-[#3E7BD6]/30 bg-white/5 px-6 py-2 backdrop-blur-xl"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#29B6F0]" />

        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
          Secure Operations
        </span>
      </span>

      {/* Heading */}
      <h1
        data-aos="fade-up"
        data-aos-delay="250"
        className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl"
      >
        <span className="text-white">
          Services —
        </span>

        <br />

        <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
          Stay Secure
        </span>
      </h1>

      {/* Subtitle */}
      <h2
        data-aos="fade-up"
        data-aos-delay="350"
        className="mt-8 text-2xl font-semibold leading-relaxed text-white md:text-3xl"
      >
        Keep your business running.

        <br />

        <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
          Quietly. Securely.
        </span>
      </h2>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="450"
        className="mt-8 max-w-2xl text-lg leading-9 text-[#A0A0A8]"
      >
        We build secure, scalable, always-on systems that protect your data,
        ensure uptime, and keep your operations invisible to disruption.
      </p>

      {/* Buttons */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-12 flex flex-wrap gap-5"
      >

        <button className="rounded-full bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.35)]">
          Explore Services
        </button>

        <button className="rounded-full border border-[#3E7BD6]/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:border-[#29B6F0] hover:bg-white/10">
          Talk to Us
        </button>

      </div>

    </motion.div>

  </div>

</section>
    <StaySecureSection/>
    <SecurityWhoThisIsFor/>
    </App_layout>
  );
}