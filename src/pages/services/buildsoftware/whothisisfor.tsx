
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function WhoThisIsForSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ========================================================= */}
      {/* ================= WHO THIS IS FOR ====================== */}
      {/* ========================================================= */}

      
<div className="relative isolate overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">

  {/* ================= BACKGROUND ================= */}

  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#29B6F0]/[0.07] blur-[100px] sm:-left-32 sm:h-80 sm:w-80 sm:blur-[120px]" />

    <div className="absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#3E7BD6]/[0.06] blur-[100px] sm:-right-32 sm:h-96 sm:w-96 sm:blur-[130px]" />

    <div className="absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.05] blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(62,123,214,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,.025)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:48px_48px] lg:bg-[size:56px_56px]" />
  </div>

  {/* ================= CONTAINER ================= */}

  <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14"
    >

      {/* ================= LEFT CONTENT ================= */}

      <div
        className="relative min-w-0 text-center lg:col-span-7 lg:text-left"
        data-aos="fade-up"
        data-aos-duration="850"
      >

        {/* Eyebrow */}

        <div className="flex items-center justify-center gap-3 lg:justify-start">

          <span className="h-px w-7 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] sm:w-9" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E7BD6] sm:text-[11px] sm:tracking-[0.24em] md:text-xs">
            WHO THIS IS FOR
          </span>

          <span className="h-px w-7 shrink-0 bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-9 lg:hidden" />

        </div>

        {/* Heading */}

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="850"
          className="mx-auto mt-5 max-w-3xl text-[1.65rem] font-black leading-[1.16] tracking-[-0.04em] sm:mt-6 sm:text-3xl md:text-4xl lg:mx-0 lg:mt-7 lg:text-[2.6rem] xl:text-[3rem] xl:leading-[1.13]"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: beaverTekGradient }}
          >
            Built for teams
          </span>

          <br className="hidden sm:block" />

          <span className="text-[#18181B]">
            {" "}who need more than off-the-shelf software
          </span>
        </h2>

        {/* Gradient Rule */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 h-[3px] w-16 origin-center rounded-full sm:mt-7 sm:w-20 lg:mx-0 lg:origin-left"
          style={{ backgroundImage: beaverTekGradient }}
        />

      </div>

      {/* ================= RIGHT CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0, x: 22 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="850"
        className="relative min-w-0 lg:col-span-5"
      >

        {/* Editorial Description */}

        <div className="relative border-l-2 border-[#E5E7EB] py-1 pl-4 sm:pl-6 md:pl-7 lg:pl-6 xl:pl-8">

          {/* Animated Gradient Border */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute -left-[2px] top-0 h-full w-[2px] origin-top"
            style={{ backgroundImage: beaverTekGradient }}
          />

          <p className="relative text-[13px] leading-7 text-[#52525B] sm:text-sm sm:leading-7 md:text-base md:leading-8 lg:text-[15px] xl:text-base">
            Companies with a specific workflow, customer experience, or
            product idea that off-the-shelf software cannot deliver.
            Founders going from idea to MVP. Teams replacing a tangle of
            manual tools with one purpose-built application.
          </p>

          {/* Bottom Detail */}

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">

            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundImage: beaverTekGradient }}
            />

            <span className="h-px w-8 shrink-0 bg-[#D4D4D8] sm:w-10" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#85858D] sm:text-[10px] sm:tracking-[0.2em]">
              Built around your needs
            </span>

          </div>

        </div>

      </motion.div>

    </motion.div>

  </div>
</div>


      {/* ========================================================= */}
      {/* =========================== PROOF ======================= */}
      {/* ========================================================= */}

      <div className="relative w-full overflow-hidden bg-[#000000] py-12 sm:py-14 md:py-16">
        {/* Black Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Cyan glow */}
          <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#29B6F0]/[0.07] blur-[140px]" />

          {/* Blue glow */}
          <div className="absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/[0.07] blur-[150px]" />

          {/* Magenta glow */}
          <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.06] blur-[140px]" />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* PROOF CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-5 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            data-aos="fade-up"
            data-aos-duration="850"
            className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-9"
          >
            {/* LEFT */}
            <div className="text-center lg:text-left">
              <span
                data-aos="fade-down"
                data-aos-duration="700"
                className="inline-flex rounded-full border border-[#7A4FD1]/30 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:px-5 sm:text-[11px]"
              >
                PROOF
              </span>

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                className="mt-5 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl"
              >
                {/* FIRST HALF WHITE */}
                <span className="text-white">
                  Real products,
                </span>

                <br />

                {/* SECOND HALF GRADIENT */}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: beaverTekGradient }}
                >
                  real scale, real impact
                </span>
              </h2>
            </div>

            {/* RIGHT */}
     
{/* RIGHT */}
<motion.div
  data-aos="fade-left"
  data-aos-delay="180"
  data-aos-duration="850"
  className="relative"
>
  {/* Main Content Panel */}
  <div className="relative overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#0A0A0A] p-5 shadow-[0_20px_60px_rgba(0,0,0,.45)] sm:p-6 md:p-7">
    {/* Background Glow */}
    <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#29B6F0]/10 blur-[100px]" />

    <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[#B93FC9]/10 blur-[100px]" />

    {/* Top Accent */}
    <div
      className="absolute left-0 top-0 h-[2px] w-full opacity-80"
      style={{ backgroundImage: beaverTekGradient }}
    />

    {/* Description */}
    <p
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="700"
      className="relative mb-6 max-w-2xl text-sm leading-7 text-[#D4D4D8] sm:mb-7 sm:text-[15px] sm:leading-7"
    >
      We have taken products from concept to working software across
      multiple industries:
    </p>

    {/* Proof Timeline */}
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-[#29B6F0]/70 via-[#7A4FD1]/50 to-[#B93FC9]/30" />

      <div className="space-y-3 sm:space-y-4">
        {[
          "A payment gateway platform now processing millions of transactions monthly",
          "AI-powered healthcare applications used in real hospitals",
          "A mobile advertising app",
          "Patient intake and preventive care systems integrated into BeaverHealthAI",
        ].map((item, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={300 + index * 100}
            data-aos-duration="700"
            whileHover={{ x: 5 }}
            className="group relative flex items-center gap-4 rounded-2xl border border-[#2A2A30] bg-[#121212] px-4 py-3.5 transition-all duration-500 hover:border-[#3E7BD6]/50 hover:bg-[#151518] hover:shadow-[0_10px_30px_rgba(62,123,214,.10)] sm:px-5 sm:py-4"
          >
            {/* Number / Check */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A]">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black text-white shadow-[0_0_18px_rgba(62,123,214,.30)]"
                style={{ backgroundImage: beaverTekGradient }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Text */}
            <p className="text-sm leading-6 text-[#D4D4D8] transition-colors duration-300 group-hover:text-white sm:text-[15px] sm:leading-7">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.div>


          </motion.div>
        </div>

        {/* Bottom Gradient Accent */}
        <div
          className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 opacity-50"
          style={{ backgroundImage: beaverTekGradient }}
        />
      </div>

    </section>
  );
}

