"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ShieldCheck, Zap } from "lucide-react";

function Overviewmobile() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-10 sm:py-12 md:py-14 lg:py-16">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[280px] w-[280px] rounded-full bg-[#29B6F0]/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute -right-40 top-[30%] h-[320px] w-[320px] rounded-full bg-[#7A4FD1]/10 blur-[150px] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[160px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mb-6 sm:mb-8 lg:mb-9"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-10" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs sm:tracking-[0.3em]">
              Mobile App Development
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-14">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div data-aos="fade-right" data-aos-duration="900">
            {/* Small badge */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl sm:mb-5 sm:px-4 sm:py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_#29B6F0] sm:h-2 sm:w-2" />

              <span className="text-[11px] font-medium text-[#D4D4D8] sm:text-xs">
                Android & iOS Solutions
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="900"
              className="
                max-w-2xl
                text-[26px]
                font-extrabold
                leading-[1.12]
                tracking-tight
                text-white
                sm:text-[31px]
                md:text-[36px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              <span className="text-white">Transform ideas into </span>

              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                powerful mobile
              </span>{" "}

              <span className="text-white">experiences.</span>
            </h1>

            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="280"
              data-aos-duration="800"
              className="mt-5 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base"
            >
              We build secure, scalable, and user-friendly mobile apps for
              Android and iOS. Whether it&apos;s customer-facing, employee
              productivity, or enterprise-grade applications, our solutions
              enhance engagement, streamline operations, and accelerate
              digital transformation.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="360"
              data-aos-duration="800"
              className="mt-3 max-w-2xl text-sm leading-6 text-[#888] sm:mt-4 sm:text-[15px] sm:leading-7 md:text-base"
            >
              Delivering native and cross-platform apps that connect with
              users anytime, anywhere boosting satisfaction and driving
              business growth.
            </p>

            {/* =================================================
                FEATURE ITEMS
            ================================================= */}

            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
  {/* Secure */}
  <div
    data-aos="fade-up"
    data-aos-delay="420"
    data-aos-duration="700"
    className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 hover:border-[#29B6F0]/30 hover:bg-white/[0.05] sm:p-3.5"
  >
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#29B6F0]/10 transition duration-300 group-hover:bg-[#29B6F0]/15 sm:h-10 sm:w-10">
      <ShieldCheck
        size={18}
        className="text-[#29B6F0] transition duration-300 group-hover:scale-105 sm:h-[19px] sm:w-[19px]"
      />
    </div>

    <div className="min-w-0">
      <p className="text-sm font-semibold text-white transition duration-300 group-hover:text-[#29B6F0]">
        Secure
      </p>

      <p className="mt-0.5 text-[11px] text-[#777] sm:text-xs">
        Enterprise-ready security
      </p>
    </div>
  </div>

  {/* Scalable */}
  <div
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-duration="700"
    className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 hover:border-[#7A4FD1]/30 hover:bg-white/[0.05] sm:p-3.5"
  >
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7A4FD1]/10 transition duration-300 group-hover:bg-[#7A4FD1]/15 sm:h-10 sm:w-10">
      <Zap
        size={18}
        className="text-[#7A4FD1] transition duration-300 group-hover:scale-105 sm:h-[19px] sm:w-[19px]"
      />
    </div>

    <div className="min-w-0">
      <p className="text-sm font-semibold text-white transition duration-300 group-hover:text-[#7A4FD1]">
        Scalable
      </p>

      <p className="mt-0.5 text-[11px] text-[#777] sm:text-xs">
        Built for business growth
      </p>
    </div>
  </div>
</div>
          </div>

          {/* =================================================
              RIGHT IMAGE AREA
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
            className="relative mx-auto w-full max-w-[520px] lg:max-w-[540px]"
          >
            {/* Background gradient glow */}

            <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-xl sm:-inset-4 sm:rounded-[36px]" />

            {/* Main image card */}

            <div className="relative overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#0A0A0A] p-1.5 shadow-2xl sm:rounded-[28px] sm:p-2">
              <div className="relative h-[250px] overflow-hidden rounded-[18px] sm:h-[330px] md:h-[380px] lg:h-[430px] xl:h-[450px]">
                {/* Selected mobile app image */}

                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern mobile application development"
                  className="h-full w-full object-cover"
                />

                {/* Image overlays */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F0]/10 via-transparent to-[#7A4FD1]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overviewmobile;