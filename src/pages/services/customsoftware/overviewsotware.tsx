"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Overviewsotware() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#29B6F0]/10 blur-[150px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#7A4FD1]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            {/* Decorative Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0]">
                Custom Software
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl">
              Tailored Software.
              <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
                Smart Operations.
              </span>
              <span className="block text-white">
                Sustainable Growth.
              </span>
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-7 max-w-2xl text-base leading-8 text-[#A0A0A8] sm:text-lg"
            >
              We build secure, scalable, high-performance applications
              designed around your business needs. From concept to
              deployment—and through ongoing maintenance—we help streamline
              operations, boost productivity, and accelerate digital
              transformation.
            </p>

            {/* Gradient Line */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-9 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:w-32"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative mx-auto w-full max-w-[600px]"
          >
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-2xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl">
              <div className="relative h-[320px] overflow-hidden rounded-[26px] sm:h-[400px] md:h-[470px]">

                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                  alt="Custom software development"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/10 via-transparent to-[#7A4FD1]/20" />

                {/* Glass Decoration */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="absolute right-5 top-5 h-16 w-16 rounded-2xl border border-white/15 bg-black/40 p-3 backdrop-blur-xl sm:right-7 sm:top-7 sm:h-20 sm:w-20"
                >
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-[#29B6F0]/30 via-[#3E7BD6]/20 to-[#7A4FD1]/30" />
                </div>

                {/* Bottom Glass Layer */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7"
                >
                  <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />
                </div>
              </div>
            </div>

            {/* Floating Gradient Circle */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="absolute -bottom-5 -left-4 hidden h-20 w-20 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl sm:block md:-left-7"
            >
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-[#29B6F0] to-[#7A4FD1] blur-[2px]" />
            </div>

            {/* Floating Square */}
            <div
              data-aos="zoom-in"
              data-aos-delay="650"
              className="absolute -right-3 bottom-1/3 hidden h-14 w-14 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl md:block"
            >
              <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-[#7A4FD1]/30 to-[#B93FC9]/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent" />
    </section>
  );
}

export default Overviewsotware;