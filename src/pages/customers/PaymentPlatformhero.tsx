"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#05070D] py-20 lg:py-16">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Background Image */}

        <div
          className="absolute inset-0 bg-center bg-cover opacity-[0.08]"
          style={{
            backgroundImage: "url('/customers/grid-bg.webp')",
          }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/60" />

        {/* Left Glow */}

        <div className="absolute -left-44 top-0 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/15 blur-[170px]" />

        {/* Right Glow */}

        <div className="absolute right-0 top-20 h-[32rem] w-[32rem] rounded-full bg-[#7A4FD1]/15 blur-[180px]" />

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[180px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            data-aos="fade-right"
          >

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

              Case Study

            </span>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl xl:text-6xl">

              Payment Platform

              <br />

              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

                Built for Scale

              </span>

            </h1>

            {/* Divider */}

            <div className="mt-8 h-1 w-28 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

            {/* Description */}

            <p className="mt-10 max-w-2xl text-lg leading-9 text-[#D4D4D8]">

              BeaverTek engineered a secure enterprise-grade payment
              integration platform capable of handling millions of
              monthly transactions while delivering high availability,
              performance, and continuous scalability for financial
              service providers.

            </p>

            {/* Buttons */}

            <div
              className="mt-12 flex flex-wrap gap-5"
              data-aos="fade-up"
              data-aos-delay="250"
            >

              <Link
                href="/contact/contacthero"
                className="group inline-flex items-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(62,123,214,.35)] transition duration-300 hover:scale-105"
              >

                Discuss Your Project

                <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />

              </Link>

              <Link
                href="/customers/casestudyoverall"
                className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[#121212]/80 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#3E7BD6] hover:bg-[#181818]"
              >

                View All Case Studies

              </Link>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT IMAGE STARTS IN PART 2 */}
          {/* ================================================= */}

                    {/* ================================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
            className="relative"
          >

            {/* Image Border Glow */}

            <div className="absolute -inset-1 rounded-[32px] bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] opacity-40 blur-xl" />

            {/* Main Image */}

            <div className="relative overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              <Image
                src="/home/dataanalytics.jpg"
                alt="Payment Platform at Scale"
                width={900}
                height={700}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Bottom Gradient */}

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Label */}

              <div className="absolute bottom-8 left-8">

                <span className="inline-flex rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur-xl">

                  Financial Services

                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">

                  Enterprise Payment Platform

                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}