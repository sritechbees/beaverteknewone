
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
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/10 blur-[140px] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-[#7A4FD1]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            {/* Decorative Label */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 md:mb-7">
              <span className="h-[2px] w-7 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8 md:w-10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-[11px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.3em]">
                Custom Software
              </span>
            </div>

            {/* Heading */}
           <h2 className="max-w-2xl text-[28px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[46px]">
  Tailored Software.
  <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
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
              className="mt-5 max-w-2xl text-[14px] leading-7 text-[#A0A0A8] sm:mt-6 sm:text-[15px] sm:leading-7 md:mt-7 md:text-base md:leading-8 lg:text-[17px]"
            >
              We build secure, scalable, high-performance applications
              designed around your business needs. From concept to
              deployment and through ongoing maintenance we help streamline
              operations, boost productivity, and accelerate digital
              transformation.
            </p>

            {/* Gradient Line */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-8 sm:w-24 md:mt-9 md:w-32"
            />
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative mx-auto w-full max-w-[600px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                alt="Custom software development"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[340px] md:h-[410px] lg:h-[450px] xl:h-[480px]"
              />
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

