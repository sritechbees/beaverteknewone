"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecurityEditorialSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-24 lg:py-28">

      {/* ========================= Background ========================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Cyan Glow */}
        <div className="absolute -top-44 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#29B6F0]/12 blur-[160px]" />

        {/* Blue Glow */}
        <div className="absolute top-10 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/12 blur-[160px]" />

        {/* Violet Glow */}
        <div className="absolute bottom-20 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#7A4FD1]/10 blur-[150px]" />

        {/* Magenta Glow */}
        <div className="absolute bottom-0 right-20 h-[22rem] w-[22rem] rounded-full bg-[#B93FC9]/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:28px_28px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-28">

        {/* ========================================================= */}
        {/* WHO THIS IS FOR */}
        {/* ========================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-12">

          {/* LEFT */}

          <div
            className="lg:col-span-3"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="sticky top-28">

              {/* Badge */}

              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

                WHO THIS IS FOR

              </span>

              {/* Heading */}

              <h2 className="mt-8 text-3xl font-black leading-tight md:text-4xl">

                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">

                  Who We Help

                </span>

              </h2>

              {/* Divider */}

              <div className="mt-7 h-1 w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]" />

            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8 lg:col-span-9">

            {/* Main Card */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="group relative overflow-hidden rounded-[30px] border border-[#2A2A30] bg-[#121212]/95 p-8 md:p-10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_55px_rgba(62,123,214,.30)]"
            >

              {/* Glow */}

              <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-[#B93FC9]/10 blur-[110px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Content */}

              <p className="relative text-base leading-9 text-[#D4D4D8]">

                Businesses that handle customer data, payments, or healthcare
                information — and any company that knows a single breach or
                extended outage would be a serious problem. If you do not have
                a dedicated security person, you are who we are built for.

              </p>

            </div>

            {/* Insight Card */}

            <div
              data-aos="zoom-in-up"
              data-aos-delay="250"
              className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#7A4FD1] hover:shadow-[0_0_45px_rgba(122,79,209,.25)]"
            >

              {/* Top Glow */}

              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#3E7BD6]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Badge */}

              <span className="inline-flex items-center rounded-full border border-[#7A4FD1]/30 bg-[#161616] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">

                Insight

              </span>

              {/* Text */}

              <p className="mt-5 text-base leading-8 text-[#A0A0A8]">

                Most companies only think about security after an incident.
                We help you avoid that stage entirely.

              </p>

              {/* Bottom Gradient */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />

            </div>

          </div>

        </div>

        {/* =================== PART 2 STARTS FROM HERE =================== */}
                {/* ========================================================= */}
        {/* PROOF */}
        {/* ========================================================= */}

        <div className="grid items-start gap-14 lg:grid-cols-12">

          {/* LEFT */}

          <div
            className="lg:col-span-3"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="sticky top-28">

              {/* Badge */}

              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">
                PROOF
              </span>

              {/* Heading */}

              <h2 className="mt-8 text-3xl font-black leading-tight md:text-4xl">
                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                  Trusted Experience
                </span>
              </h2>

              {/* Divider */}

              <div className="mt-7 h-1 w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]" />

            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8 lg:col-span-9">

            {/* Main Card */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="group relative overflow-hidden rounded-[30px] border border-[#2A2A30] bg-[#121212]/95 p-8 md:p-10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_55px_rgba(62,123,214,.30)]"
            >

              {/* Glow */}

              <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#29B6F0]/10 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-[#B93FC9]/10 blur-[110px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <p className="relative text-base leading-9 text-[#D4D4D8]">
                We bring enterprise-grade security practice to mid-size
                operations every day — drawing on experience securing systems
                for Fortune 500 financial services, healthcare, and retail
                clients.
              </p>

            </div>

            {/* Bottom Cards */}

            <div className="grid gap-6 md:grid-cols-2">

              {/* Experience */}

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212]/85 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0] hover:shadow-[0_0_45px_rgba(41,182,240,.30)]"
              >

                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#29B6F0]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <span className="inline-flex rounded-full border border-[#29B6F0]/30 bg-[#161616] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
                  Experience
                </span>

                <p className="mt-5 text-base leading-8 text-[#A0A0A8]">
                  Enterprise-grade security applied to real mid-size systems.
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />

              </div>

              {/* Focus */}

              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212]/85 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#7A4FD1] hover:shadow-[0_0_45px_rgba(122,79,209,.30)]"
              >

                <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-[#B93FC9]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <span className="inline-flex rounded-full border border-[#7A4FD1]/30 bg-[#161616] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
                  Focus
                </span>

                <p className="mt-5 text-base leading-8 text-[#A0A0A8]">
                  Practical protection, not over-engineered enterprise theater.
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}