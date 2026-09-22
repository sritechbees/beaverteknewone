
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function  Datathatdrivesdecisionshero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

   const handleDiscussClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const target = document.getElementById("datathatdecisionchallenge");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <section
     
      className="relative overflow-hidden bg-[#000000] py-12 sm:py-14 md:py-16 lg:py-20">
        {/* ================================ */}
        {/* BACKGROUND */}
        {/* ================================ */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black" />

          <div className="absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full bg-[#29B6F0]/10 blur-[140px] sm:h-[28rem] sm:w-[28rem]" />

          <div className="absolute right-0 top-20 h-[24rem] w-[24rem] rounded-full bg-[#7A4FD1]/10 blur-[150px] sm:h-[28rem] sm:w-[28rem]" />

          <div className="absolute bottom-0 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[140px] sm:h-[24rem] sm:w-[24rem]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* ================================ */}
        {/* CONTAINER */}
        {/* ================================ */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 md:gap-11 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-16">

            {/* ================================ */}
            {/* LEFT CONTENT */}
            {/* ================================ */}
            <div
              data-aos="fade-right"
              className="order-2 lg:order-1"
            >
              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[11px] md:text-xs">
                Case Study Three
              </span>

              {/* Title */}
              <h1 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.06] tracking-[-0.025em] text-white sm:mt-6 sm:text-[40px] md:text-[46px] lg:mt-7 lg:text-[52px] xl:text-[58px]">
                <span className="text-white">
                  Data that
                </span>

                <br />

                <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                  Drives Decisions
                </span>
              </h1>

              {/* Divider */}
              <div className="mt-4 h-1 w-16 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-5 sm:w-20 md:w-24" />

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-[#D4D4D8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-[17px]">
                BeaverTek built an enterprise reporting platform that
                transforms fragmented operational data into secure,
                real-time dashboards. Leadership teams gain instant
                visibility into business performance through one
                intelligent reporting experience.
              </p>

              {/* ================================ */}
              {/* BUTTONS */}
              {/* ================================ */}
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-3">

                {/* Scroll to challenge section on SAME PAGE */}
                <a
                  href="#datathatdecisionchallenge"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] px-6 py-3 text-xs font-semibold text-white transition duration-300 hover:scale-[1.03] sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Discuss Your Project
                </a>

                {/* Case Studies */}
                <Link
                  href="/customers/casestudyoverall"
                  className="inline-flex items-center justify-center rounded-full border border-[#2A2A30] bg-[#121212]/70 px-6 py-3 text-xs font-semibold text-white transition duration-300 hover:border-[#29B6F0] sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* ================================ */}
            {/* RIGHT IMAGE */}
            {/* ================================ */}
            <div
              data-aos="fade-left"
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[580px] xl:max-w-[600px]">

                <div className="relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_65px_rgba(0,0,0,.45)] sm:rounded-[28px] lg:rounded-[32px]">

                  <img
                    src="/home/homehero.jpg"
                    alt="Enterprise Reporting Dashboard"
                    className="block h-auto w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Datathatdrivesdecisionshero;

