
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SeeYourDataContent() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const beaverTekGradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <div
          className="absolute -left-28 top-0 h-64 w-64 rounded-full blur-[120px] sm:h-72 sm:w-72"
          style={{
            background: "#29B6F0",
            opacity: 0.12,
          }}
        />

        {/* Violet / Magenta Glow */}
        <div
          className="absolute -right-28 bottom-0 h-72 w-72 rounded-full blur-[130px] sm:h-80 sm:w-80"
          style={{
            background: "#B93FC9",
            opacity: 0.10,
          }}
        />

        {/* Subtle Blue Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
          style={{
            background: "#3E7BD6",
            opacity: 0.045,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Proof */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="900"
          data-aos-offset="60"
          className="group relative overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#0A0A0A] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-[#3E7BD6]/50 sm:rounded-3xl sm:p-7 md:p-8 lg:p-10"
        >
          {/* Top Gradient Line */}
          <div
            className="absolute left-0 right-0 top-0 h-[2px] opacity-80"
            style={{
              background: beaverTekGradient,
            }}
          />

          {/* Soft Inner Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full blur-[90px]"
            style={{
              background: "#3E7BD6",
              opacity: 0.06,
            }}
          />

          {/* Inner Content */}
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Badge */}
            <span
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="700"
              className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-[#121212] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] shadow-[0_0_25px_rgba(41,182,240,0.08)] sm:px-5 sm:py-2 sm:text-xs"
            >
              TRUSTED EXPERIENCE
            </span>

            {/* Heading */}
            <h3
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="800"
              className="mt-5 text-2xl font-black leading-tight tracking-tight sm:mt-6 sm:text-3xl md:text-4xl lg:text-[42px]"
            >
              <span className="text-white">Proven Data &</span>

              <br />

              <span
                className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent"
                style={{
                  backgroundImage: beaverTekGradient,
                }}
              >
                Analytics Expertise
              </span>
            </h3>

            {/* Divider */}
            <div
              data-aos="zoom-in"
              data-aos-delay="280"
              data-aos-duration="700"
              className="mx-auto mt-5 h-[2px] w-16 rounded-full sm:mt-6 sm:w-20"
              style={{
                background: beaverTekGradient,
                boxShadow:
                  "0 0 18px rgba(41,182,240,0.25), 0 0 30px rgba(185,63,201,0.15)",
              }}
            />

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="800"
              className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-[#A0A0A8] sm:mt-6 sm:text-base sm:leading-7 lg:text-[17px]"
            >
              Our consultants have delivered enterprise-grade data, analytics,
              and business intelligence solutions across multiple industries.
              We apply the same practical expertise to help growing businesses
              modernize, improve visibility, and make better decisions with
              confidence.
            </p>

            {/* Stats */}
            <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="750"
                className="group/card relative overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#121212] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#29B6F0]/60 hover:bg-[#151515] hover:shadow-[0_15px_40px_rgba(41,182,240,0.08)] sm:px-5 sm:py-6"
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-[45px] transition-opacity duration-300 group-hover/card:opacity-20"
                  style={{
                    background: "#29B6F0",
                  }}
                />

                <h4
                  className="relative bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-4xl font-black text-transparent sm:text-[42px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#29B6F0,#3E7BD6)",
                  }}
                >
                  500+
                </h4>

                <div
                  className="mx-auto mt-3 h-[2px] w-10 rounded-full transition-all duration-300 group-hover/card:w-16"
                  style={{
                    background:
                      "linear-gradient(90deg,#29B6F0,#3E7BD6)",
                  }}
                />

                <p className="relative mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#A0A0A8] sm:text-xs">
                  Enterprise Projects
                </p>
              </div>

              {/* Card 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-duration="750"
                className="group/card relative overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#121212] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7A4FD1]/60 hover:bg-[#151515] hover:shadow-[0_15px_40px_rgba(122,79,209,0.08)] sm:px-5 sm:py-6"
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-[45px] transition-opacity duration-300 group-hover/card:opacity-20"
                  style={{
                    background: "#7A4FD1",
                  }}
                />

                <h4
                  className="relative bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-4xl font-black text-transparent sm:text-[42px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#3E7BD6,#7A4FD1)",
                  }}
                >
                  20+
                </h4>

                <div
                  className="mx-auto mt-3 h-[2px] w-10 rounded-full transition-all duration-300 group-hover/card:w-16"
                  style={{
                    background:
                      "linear-gradient(90deg,#3E7BD6,#7A4FD1)",
                  }}
                />

                <p className="relative mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#A0A0A8] sm:text-xs">
                  Industry Domains
                </p>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="650"
                data-aos-duration="750"
                className="group/card relative overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#121212] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B93FC9]/60 hover:bg-[#151515] hover:shadow-[0_15px_40px_rgba(185,63,201,0.08)] sm:px-5 sm:py-6"
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-[45px] transition-opacity duration-300 group-hover/card:opacity-20"
                  style={{
                    background: "#B93FC9",
                  }}
                />

                <h4
                  className="relative bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-4xl font-black text-transparent sm:text-[42px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#7A4FD1,#B93FC9)",
                  }}
                >
                  100%
                </h4>

                <div
                  className="mx-auto mt-3 h-[2px] w-10 rounded-full transition-all duration-300 group-hover/card:w-16"
                  style={{
                    background:
                      "linear-gradient(90deg,#7A4FD1,#B93FC9)",
                  }}
                />

                <p className="relative mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#A0A0A8] sm:text-xs">
                  Business Focused
                </p>
              </div>
            </div>

            {/* Bottom Gradient Accent */}
            <div
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="700"
              className="mx-auto mt-8 h-px w-full max-w-md opacity-30"
              style={{
                background: beaverTekGradient,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

