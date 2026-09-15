
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const modernizationPoints = [
  {
    number: "01",
    title: "Increase Productivity",
    description:
      "Automate repetitive work and give employees modern tools that reduce manual effort.",
    accent: "#29B6F0",
    delay: 100,
  },
  {
    number: "02",
    title: "Reduce Operational Risk",
    description:
      "Replace unsupported legacy platforms before they become security or reliability problems.",
    accent: "#3E7BD6",
    delay: 200,
  },
  {
    number: "03",
    title: "Improve Customer Experience",
    description:
      "Deliver faster services, better digital experiences and smoother customer journeys.",
    accent: "#7A4FD1",
    delay: 300,
  },
  {
    number: "04",
    title: "Scale With Confidence",
    description:
      "Cloud-ready systems make it easier to grow without rebuilding everything later.",
    accent: "#B93FC9",
    delay: 400,
  },
];

export default function WhyModernizationMatters() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#29B6F0]/5 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#7A4FD1]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[300px] w-[300px] rounded-full bg-[#B93FC9]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <span className="inline-flex items-center rounded-full border border-[#29B6F0]/40 bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[9px] font-semibold tracking-[0.22em] text-[#29B6F0] backdrop-blur-md sm:text-[10px]">
            WHY MODERNIZATION MATTERS
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#FFFFFF] sm:mt-5 sm:text-4xl lg:text-5xl">
            Better Technology.
            <br />
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              Better Business.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6    text-[#D4D4D8] sm:text-base sm:leading-7">
            Modernization helps organizations improve efficiency, strengthen
            security, reduce costs, and create a solid foundation for future
            growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 lg:gap-5">
          {modernizationPoints.map((item, index) => (
            <div
              key={item.number}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={item.delay}
              data-aos-duration="900"
              className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#0A0A0A] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6]/70 hover:bg-[#0D0D0F] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:min-h-[205px] sm:p-6"
            >
              {/* Hover Glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: item.accent }}
              />

              {/* Top Number */}
              <div className="relative z-10 flex items-center gap-3">
                <span
                  className="text-xs font-bold tracking-[0.18em] transition-all duration-500 group-hover:tracking-[0.25em]"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </span>

                <div className="h-px w-8 bg-[#2A2A30] transition-all duration-500 group-hover:w-14 group-hover:bg-[#3E7BD6]/60" />
              </div>

              {/* Title */}
              <div className="relative z-10 mt-4">
                <h3 className="text-xl font-bold tracking-tight text-[#FFFFFF] transition-all duration-500 group-hover:text-[22px] sm:text-2xl">
                  {item.title}
                </h3>
              </div>

              {/* Description + Business Value */}
              <div className="relative z-10 mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                <p className="max-w-xl text-[16px] leading-6    text-[#D4D4D8]">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4D4D8]">
                    Business Value
                  </span>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                style={{
                  background:
                    "linear-gradient(90deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                }}
              />

              {/* Corner Accent */}
              <div
                className="absolute bottom-4 right-5 h-1.5 w-1.5 rounded-full opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                style={{ backgroundColor: item.accent }}
              />
            </div>
          ))}
        </div>
      </div>


       {/* ============================= */}
{/* Premium Future Ready Banner */}
{/* ============================= */}

<div
  className="relative mt-24 overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#0A0A0A] px-6 py-12 shadow-[0_25px_60px_rgba(0,0,0,.45)] sm:px-10 sm:py-16 lg:px-14"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#29B6F0]/15 blur-[120px]" />

    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/15 blur-[130px]" />

    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/10 blur-[130px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:55px_55px]" />

  </div>

  <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">

    {/* Left */}
    <div
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0] backdrop-blur-md">
        Future Ready
      </span>

      <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        Technology that
        <br />

        <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          accelerates
        </span>

        <br />

        your business.
      </h3>

      <p className="mt-7 max-w-xl text-base leading-8 text-[#D4D4D8] sm:text-lg">
        Modern infrastructure, secure platforms, and scalable solutions
        designed to help your organization move faster with confidence.
      </p>
    </div>

    {/* Right */}
    <div
      className="grid gap-4"
      data-aos="fade-left"
      data-aos-delay="250"
    >
      {[
        "Modern Cloud Infrastructure",
        "Better Security & Compliance",
        "Reliable System Integrations",
        "Lower Maintenance Costs",
      ].map((item, index) => (
        <div
          key={item}
          data-aos="zoom-in"
          data-aos-delay={300 + index * 120}
          className="group flex items-center gap-4 rounded-2xl border border-[#2A2A30] bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-500 hover:border-[#3E7BD6]/60 hover:bg-white/10 hover:translate-x-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] text-sm font-bold text-white shadow-[0_0_25px_rgba(62,123,214,.35)]">
            0{index + 1}
          </div>

          <span className="font-medium text-[#FFFFFF]">
            {item}
          </span>
        </div>
      ))}
    </div>

  </div>
</div>

    </section>
  );
}

