"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Play } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-28 pb-20">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/30 blur-[140px] rounded-full" />
      </div>

      {/* dotted pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#d0d7e2_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right">

            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 font-medium">
                PRODUCTION SOFTWARE
              </span>
            </div>

            {/* title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Building{" "}
              <span className="text-blue-500">Future Ready</span>
              <br />
              <span className="text-green-500">Digital Products</span>
            </h1>

            {/* description */}
            <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
              We don’t just develop software—we engineer scalable,
              enterprise-grade digital products that power healthcare, AI,
              automation, analytics, and business transformation.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/inquiry"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-center shadow-md hover:shadow-xl transition"
              >
                Explore Products →
              </Link>

              <Link
                href="/customers/casestudyhero"
                className="px-8 py-4 rounded-2xl border border-gray-300 bg-white text-gray-700 font-semibold text-center hover:bg-gray-50 transition"
              >
                Contact Sales →
              </Link>

            </div>

            {/* feature row */}
            <div className="flex gap-6 mt-10 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Enterprise Security
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Cloud Native
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                AI Powered
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Scalable Solutions
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div data-aos="fade-left" className="relative">

            {/* video/image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white">

              <img
  src="/product/producthero1.png"
  alt="Hero Image"
  className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
/>
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <Play className="text-blue-600" size={24} />
                </button> */}
              </div>

            </div>

            {/* floating stats */}
            <div className="absolute -bottom-10 left-0 right-0 px-4">

              <div className="grid grid-cols-4 gap-3 bg-white shadow-xl rounded-2xl p-4">

                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">50+</h3>
                  <p className="text-xs text-gray-500">Live Products</p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">120+</h3>
                  <p className="text-xs text-gray-500">Clients</p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">99.9%</h3>
                  <p className="text-xs text-gray-500">Uptime</p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">24/7</h3>
                  <p className="text-xs text-gray-500">Support</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}