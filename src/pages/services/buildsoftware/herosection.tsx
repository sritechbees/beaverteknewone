
"use client";

import App_layout from "@/component/layout/app_layout";

import { ArrowRight } from "lucide-react";
import BuildSoftwareContent from "./buildsoftwarecontent";

import WhoThisIsFor from "./whothisisfor";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatIsLookLike from "./whatislooklike";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <App_layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/theteam.jpg"
            alt="Application Development"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* BeaverTek Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#29B6F0]/15 via-[#3E7BD6]/10 to-[#B93FC9]/20" />

          {/* Gradient Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,182,240,.18),transparent_35%)]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[66vh] sm:px-5 sm:py-14 md:min-h-[68vh] md:px-6 md:py-16 lg:min-h-[72vh] lg:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-3xl">
            {/* Badge */}
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="40"
            >
              <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-white/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.25em] md:text-xs">
                APPLICATION DEVELOPMENT
              </span>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="120"
              data-aos-duration="900"
              data-aos-offset="50"
              className="mt-5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px]"
            >
              Build Software
              <br />

              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                That Drives Growth
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="240"
              data-aos-duration="850"
              data-aos-offset="50"
              className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#D4D4D8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base lg:text-[17px]"
            >
              We design, develop, and deliver scalable software solutions
              tailored to your business helping you innovate faster,
              streamline operations, and stay ahead of the competition.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="360"
              data-aos-duration="850"
              data-aos-offset="50"
              className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-3.5"
            >
              <Link
                href="/contact/contacthero"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(62,123,214,.28)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(185,63,201,.3)] sm:w-auto sm:px-6 sm:py-3"
              >
                Start Your Project

                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services/serviceshero"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#3E7BD6]/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0] hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3"
              >
                Explore Services
              </Link>
            </div>

            {/* Bottom Accent */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="700"
              className="mx-auto mt-7 h-[2px] w-14 rounded-full opacity-80 sm:mt-8 sm:w-16"
              style={{
                background:
                  "linear-gradient(90deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
              }}
            />
          </div>
        </div>
      </section>
      <BuildSoftwareContent/>
      <WhatIsLookLike/>

      

      {/* Who This Is For */}
      <WhoThisIsFor />
    </App_layout>
  );
}

