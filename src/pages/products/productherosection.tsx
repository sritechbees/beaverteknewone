
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Producthero from "./producthero";

import Sampleproduct from "./sampleproduct";

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function ProductHero() {
  const productsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <App_layout>
      <main className="overflow-hidden bg-[#05070D] text-white">
        {/* MAIN HERO */}
        <section className="relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[68vh] sm:px-6 sm:py-24 lg:min-h-[72vh] lg:px-8">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-top bg-center"
            style={{
              backgroundImage: "url('/home/abouthero.png')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-[#05070D]/60" />

         

          <div
            className="absolute inset-0 -z-10 opacity-15"
            style={{
              background:
                "linear-gradient(135deg,transparent 35%,#3E7BD6 72%,#B93FC9 100%)",
            }}
          />

          <div
            data-aos="fade-up"
            className="mx-auto w-full max-w-4xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md sm:mb-5 sm:text-sm">
              <Sparkles size={15} style={{ color: "#29B6F0" }} />
              BeaverHealth AI · Product Ecosystem
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Smarter Healthcare.
              <span
                className="mt-1 block bg-clip-text text-transparent"
                style={{ backgroundImage: gradient }}
              >
                Connected Solutions.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-5 sm:text-base sm:leading-7">
              Discover intelligent healthcare solutions designed to simplify
              clinical workflows, support patient care, and improve everyday
              healthcare operations.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row">
              <button
                type="button"
                onClick={scrollToProducts}
                className="inline-flex min-h-11 w-full max-w-[230px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
                style={{ background: gradient }}
              >
                Explore Our Products
                <ArrowDown size={17} />
              </button>

              <Link
                href="/contact/herosection"
                className="inline-flex min-h-11 w-full max-w-[230px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.15] sm:w-auto"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Sampleproduct/>

      <Producthero />
    </App_layout>
  );
}