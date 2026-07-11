"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";

const images = [
  "/home/studyhero.jpg",
  "/home/healthai.jpg",
  "/home/producthero.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <App_layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#121212] py-16 lg:py-24">

  {/* Background Glow */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-32 h-[450px] w-[450px] rounded-full bg-[#29B6F0]/15 blur-[140px]" />

    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/15 blur-[140px]" />

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Hero Layout */}

    <div className="grid items-center gap-16 lg:grid-cols-[45%_55%]">

      {/* ================================= */}
      {/* LEFT CONTENT */}
      {/* ================================= */}

      <div
        data-aos="fade-right"
        className="max-w-xl"
      >

        <span className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,0.05)] px-5 py-2 text-sm font-semibold text-[#29B6F0]">
          OUR WORK
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">

          Transforming

          <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">

            Business with AI

          </span>

        </h1>

        <p className="mt-6 text-lg leading-8 text-[#D4D4D8]">

          We build secure AI solutions for healthcare,
          finance, enterprise reporting and digital
          transformation with scalable modern technology.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Link href="/customers/casestudyoverall">

            <button className="rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-3 font-semibold text-white shadow-[0_0_35px_rgba(62,123,214,.35)] transition duration-300 hover:scale-105">

              View Case Studies →

            </button>

          </Link>

          <Link href="/contact/contacthero">

            <button className="rounded-full border border-[#3E7BD6] bg-transparent px-8 py-3 font-semibold text-[#29B6F0] transition duration-300 hover:bg-gradient-to-r hover:from-[#29B6F0] hover:via-[#3E7BD6] hover:to-[#B93FC9] hover:text-white">

              Contact Us

            </button>

          </Link>

        </div>

        {/* Part 2 starts here with the right image slider */}

      </div>

      {/* ================================= */}
      {/* RIGHT CURVED IMAGE SLIDER */}
      {/* ================================= */}

      <div
        data-aos="fade-left"
        className="relative flex items-center justify-center lg:justify-end"
      >
        <div
          className="relative h-[400px] w-full max-w-[700px] overflow-hidden border-4 border-[#2A2A30] shadow-[0_0_60px_rgba(62,123,214,.30)] md:h-[550px] lg:h-[620px]"
          style={{
            borderRadius: "140px 30px 140px 30px",
          }}
        >
          {/* Images */}

          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              className={`absolute object-cover object-center transition-opacity duration-1000 ${
                current === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        </div>

        {/* Slider Dots */}

        <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-3">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "h-3 w-8 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]"
                  : "h-3 w-3 rounded-full bg-[#2A2A30]"
              }`}
            />
          ))}

        </div>

      </div>

    </div>

  </div>

</section>
    </App_layout>
  );
}