
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Smartphone, ShieldCheck, Zap } from "lucide-react";

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
    <section className="relative overflow-hidden bg-black py-10 sm:py-12 md:py-16 lg:py-8">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-[#29B6F0]/10 blur-[130px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute -right-40 top-[30%] h-[350px] w-[350px] rounded-full bg-[#7A4FD1]/10 blur-[150px] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[160px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mb-7 sm:mb-9"
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

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-14">
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

            {/* Heading */}

        
<h1
  data-aos="fade-up"
  data-aos-delay="180"
  data-aos-duration="900"
  className="max-w-3xl text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[54px]"
>
  Transform ideas into
  <span className="mt-1 block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text font-extrabold text-transparent sm:mt-1.5">
    powerful mobile experiences.
  </span>
</h1>



            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="280"
              data-aos-duration="800"
              className="mt-5 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:mt-6 sm:text-base sm:leading-7"
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
              className="mt-3 max-w-2xl text-sm leading-6 text-[#888] sm:mt-4 sm:text-base sm:leading-7"
            >
              Delivering native and cross-platform apps that connect with
              users anytime, anywhere boosting satisfaction and driving
              business growth.
            </p>

            {/* =================================================
                FEATURE ITEMS
            ================================================= */}

            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
              <div
                data-aos="fade-up"
                data-aos-delay="420"
                data-aos-duration="700"
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 hover:border-[#29B6F0]/30 hover:bg-white/[0.05] sm:p-3.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#29B6F0]/10">
                  <ShieldCheck
                    size={18}
                    className="text-[#29B6F0]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Secure
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#777] sm:text-xs">
                    Enterprise-ready security
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="700"
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 hover:border-[#7A4FD1]/30 hover:bg-white/[0.05] sm:p-3.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7A4FD1]/10">
                  <Zap
                    size={18}
                    className="text-[#7A4FD1]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
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

            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10 blur-xl" />

            {/* Main image card */}

            <div className="relative overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#0A0A0A] p-1.5 shadow-2xl sm:rounded-[28px] sm:p-2">
              <div className="relative h-[260px] overflow-hidden rounded-[21px] sm:h-[340px] md:h-[400px] lg:h-[450px]">
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

