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
    <section className="relative overflow-hidden bg-black py-12 sm:py-14 md:py-16 lg:py-16 xl:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-16 h-[220px] w-[220px] rounded-full bg-[#29B6F0]/10 blur-[110px] sm:-left-40 sm:top-20 sm:h-[300px] sm:w-[300px] sm:blur-[140px] md:h-[400px] md:w-[400px]" />

        <div className="absolute -right-32 bottom-10 h-[250px] w-[250px] rounded-full bg-[#7A4FD1]/10 blur-[120px] sm:-right-40 sm:h-[350px] sm:w-[350px] sm:blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="flex min-w-0 flex-col justify-center"
          >
            {/* Decorative Label */}
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3 md:mb-6 lg:mb-7">
              <span className="h-[2px] w-6 shrink-0 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-7 md:w-8 lg:w-10" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#29B6F0] sm:text-[10px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em] lg:text-xs lg:tracking-[0.3em]">
                Custom Software
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-[26px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px]">
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
              className="mt-4 max-w-2xl text-[13px] leading-6 text-[#A0A0A8] sm:mt-5 sm:text-sm sm:leading-6 md:mt-6 md:text-[15px] md:leading-7 lg:mt-7 lg:text-base lg:leading-8 xl:text-[17px]"
            >
              We build secure, scalable, high-performance applications
              designed around your business needs. From concept to deployment
              and through ongoing maintenance we help streamline operations,
              boost productivity, and accelerate digital transformation.
            </p>

            {/* Gradient Line */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:mt-7 sm:w-20 md:mt-8 md:w-24 lg:mt-9 lg:w-32"
            />
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl md:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                alt="Custom software development"
                className="h-[230px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[280px] md:h-[340px] lg:h-[390px] xl:h-[440px] 2xl:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
 </section>
  );
}

export default Overviewsotware;