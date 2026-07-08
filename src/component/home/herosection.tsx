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
    <section className="relative overflow-hidden bg-[#000000] pt-16 pb-20">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0">
       <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#29B6F0]/15 blur-[120px] rounded-full" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B93FC9]/15 blur-[140px] rounded-full" /> </div>

      {/* dotted pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2A2A30_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right">

            {/* badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-[#2A2A30] mb-6">
             <span className="w-2 h-2 rounded-full bg-[#29B6F0]" />
             <span className="text-sm text-[#A0A0A8] font-medium">
                PRODUCTION SOFTWARE
              </span>
            </div>

            {/* title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Building{" "}
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
  Future Ready
</span>

<br />

<span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
  Digital Products
</span>
            </h1>

            {/* description */}
            <p className="mt-6 text-[#A0A0A8] text-lg max-w-xl leading-relaxed">
              We don’t just develop software—we engineer scalable,
              enterprise-grade digital products that power healthcare, AI,
              automation, analytics, and business transformation.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/products/producthero"
              className="px-8 py-4 rounded-2xl bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] text-white font-semibold text-center shadow-md hover:shadow-xl transition"
              >
                Explore Products →
              </Link>

              <Link
                href="/customers/casestudyhero"
                className="px-8 py-4 rounded-2xl border border-[#2A2A30] bg-[#121212] text-white font-semibold text-center hover:bg-[#1A1A1E] transition"
              >
                Contact Sales →
              </Link>

            </div>

            {/* feature row */}
            <div className="flex gap-6 mt-10 text-sm text-[#A0A0A8]">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#29B6F0] rounded-full" />
                Enterprise Security
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3E7BD6] rounded-full" />
                Cloud Native
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7A4FD1] rounded-full" />
                AI Powered
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B93FC9] rounded-full" />
                Scalable Solutions
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div data-aos="fade-left" className="relative">

            {/* video/image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2A2A30] bg-[#121212]">
              <img
  src="/home/homehero.jpg"
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

              <div className="grid grid-cols-4 gap-3 bg-[#121212] shadow-xl rounded-2xl p-4 border border-[#2A2A30]">

                <div className="text-center">
                <h3 className="font-bold text-lg text-white">50+</h3>
                  <p className="text-xs text-[#A0A0A8]">Live Products</p>
                </div>

                <div className="text-center">
                 <h3 className="font-bold text-lg text-white">120+</h3>
                  <p className="text-xs text-[#A0A0A8]">Clients</p>
                </div>

                <div className="text-center">
                 <h3 className="font-bold text-lg text-white">99.9%</h3>
                  <p className="text-xs text-[#A0A0A8]">Uptime</p>
                </div>

                <div className="text-center">
                 <h3 className="font-bold text-lg text-white">24/7</h3>
                 <p className="text-xs text-[#A0A0A8]">Support</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}