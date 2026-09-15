
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

      <div className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16">
        {/* White Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[24rem] w-[24rem] rounded-full bg-[#29B6F0]/[0.06] blur-[120px]" />

          <div className="absolute right-0 top-20 h-[26rem] w-[26rem] rounded-full bg-[#3E7BD6]/[0.06] blur-[130px]" />

          <div className="absolute bottom-0 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.05] blur-[120px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(62,123,214,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(62,123,214,.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

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
                className="inline-flex rounded-full border border-[#3E7BD6]/30 bg-[#3E7BD6]/[0.05] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3E7BD6] sm:px-5 sm:text-[11px]"
              >
                WHO THIS IS FOR
              </span>

           
<h2
  data-aos="fade-up"
  data-aos-delay="100"
  data-aos-duration="800"
  className="mt-5 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl"
>
  {/* First half - BeaverTek Gradient */}
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: beaverTekGradient }}
  >
    Built for teams
  </span>

  <br />

  {/* Second half - Dark for white background */}
  <span className="text-[#18181B]">
    who need more than off-the-shelf software
  </span>
  
</h2>


            </div>

            {/* RIGHT */}
            <motion.div
              whileHover={{ y: -5 }}
              data-aos="fade-left"
              data-aos-delay="180"
              data-aos-duration="850"
              className="relative overflow-hidden rounded-[24px] border border-[#E4E4E7] bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,.07)] transition-all duration-500 hover:border-[#3E7BD6]/40 hover:shadow-[0_18px_45px_rgba(62,123,214,.12)] sm:p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#29B6F0]/10 blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#B93FC9]/10 blur-[70px]" />

              <p className="relative text-sm leading-7 text-[#52525B] sm:text-base sm:leading-8">
                Companies with a specific workflow, customer experience, or
                product idea that off-the-shelf software cannot deliver.
                Founders going from idea to MVP. Teams replacing a tangle of
                manual tools with one purpose-built application.
              </p>
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

