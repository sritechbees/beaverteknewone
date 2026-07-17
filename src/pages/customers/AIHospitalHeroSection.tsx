"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AIHospitalHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
   <div className="relative mx-auto max-w-7xl bg-[#000000] px-6 lg:px-8 py-16">
     
    {/* ================================================= */}
{/* HERO CONTENT */}
{/* ================================================= */}

<div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-20">
  
  {/* ================================================= */}
  {/* LEFT CONTENT */}
  {/* ================================================= */}

  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    data-aos="fade-right"
    className="order-2 flex w-full flex-col justify-center lg:order-1"
  >
    {/* Badge */}

    <span className="inline-flex w-fit items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">
      AI Healthcare Case Study
    </span>

    {/* Heading */}

    <h1
      data-aos="fade-up"
      data-aos-delay="150"
      className="mt-6 max-w-[620px] text-[40px] font-black leading-[1.05] text-white sm:text-[50px] lg:text-[58px] xl:text-[66px]"
    >
      AI in

      <br />

      <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
        Real Hospitals
      </span>
    </h1>

    {/* Divider */}

    <div
      data-aos="zoom-in"
      data-aos-delay="250"
      className="mt-6 h-[4px] w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]"
    />

    {/* Description */}

    <p
      data-aos="fade-up"
      data-aos-delay="350"
      className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#D4D4D8] lg:text-lg lg:leading-9"
    >
      BeaverTek partnered with healthcare providers to build an
      enterprise AI platform that transforms patient intake,
      automates hospital workflows, enhances clinical
      decision-making, and enables secure digital healthcare
      experiences across modern hospitals.
    </p>

    {/* Buttons */}

    <div
      data-aos="fade-up"
      data-aos-delay="450"
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <Link
        href="/contact/contacthero"
        className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(41,182,240,.35)] transition duration-300 hover:scale-105"
      >
        Book a Discovery Call

        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>

      <Link
        href="/customers/casestudyoverall"
        className="inline-flex items-center justify-center rounded-full border border-[#2A2A30] bg-[#121212]/70 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#29B6F0]"
      >
        View Case Studies
      </Link>
    </div>
  </motion.div>

  {/* ================================================= */}
  {/* RIGHT IMAGE */}
  {/* ================================================= */}

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    data-aos="fade-left"
    className="order-1 flex justify-center lg:order-2 lg:justify-end"
  >
    <div className="w-full max-w-[650px]">

      <div className="overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[#121212] shadow-[0_35px_90px_rgba(0,0,0,.45)]">

        <img
          src="/home/abouthero1.png"
          alt="AI in Real Hospitals"
          className="block h-auto w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

    </div>
  </motion.div>

</div>
</div>
  );
}
