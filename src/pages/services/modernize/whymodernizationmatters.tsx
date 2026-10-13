
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Zap,
  ShieldAlert,
  HeartHandshake,
  TrendingUp,
  Cloud,
  ShieldCheck,
  Workflow,
  CircleDollarSign,
} from "lucide-react";

const modernizationPoints = [
  {
    number: "01",
    title: "Increase Productivity",
    description:
      "Automate repetitive work and give employees modern tools that reduce manual effort.",
    accent: "#29B6F0",
    icon: Zap,
    delay: 100,
  },
  {
    number: "02",
    title: "Reduce Operational Risk",
    description:
      "Replace unsupported legacy platforms before they become security or reliability problems.",
    accent: "#3E7BD6",
    icon: ShieldAlert,
    delay: 200,
  },
  {
    number: "03",
    title: "Improve Customer Experience",
    description:
      "Deliver faster services, better digital experiences and smoother customer journeys.",
    accent: "#7A4FD1",
    icon: HeartHandshake,
    delay: 300,
  },
  {
    number: "04",
    title: "Scale With Confidence",
    description:
      "Cloud-ready systems make it easier to grow without rebuilding everything later.",
    accent: "#B93FC9",
    icon: TrendingUp,
    delay: 400,
  },
];

const futureReadyItems = [
  {
    title: "Modern Cloud Infrastructure",
    icon: Cloud,
    accent: "#29B6F0",
  },
  {
    title: "Better Security & Compliance",
    icon: ShieldCheck,
    accent: "#3E7BD6",
  },
  {
    title: "Reliable System Integrations",
    icon: Workflow,
    accent: "#7A4FD1",
  },
  {
    title: "Lower Maintenance Costs",
    icon: CircleDollarSign,
    accent: "#B93FC9",
  },
];

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function WhyModernizationMatters() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      AOS.refreshHard();
    };
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
          data-aos-offset="60"
        >
          <span
            className="inline-flex items-center rounded-full border border-[#29B6F0]/40 bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[9px] font-semibold tracking-[0.22em] text-[#29B6F0] backdrop-blur-md sm:text-[10px]"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            WHY MODERNIZATION MATTERS
          </span>

          <h2
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#FFFFFF] sm:mt-5 sm:text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="900"
          >
            Better Technology.
            <br />
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              Better Business.
            </span>
          </h2>

          {/* Section Description */}
          <p
            className="mx-auto mt-4 w-full max-w-[340px] px-1 text-[13px] leading-6 text-[#D4D4D8] sm:max-w-2xl sm:px-0 sm:text-base sm:leading-7 md:text-base lg:mt-4"
            data-aos="fade-up"
            data-aos-delay="280"
            data-aos-duration="900"
            data-aos-offset="50"
          >
            Modernization helps organizations improve efficiency, strengthen
            security, reduce costs, and create a solid foundation for future
            growth.
          </p>
        </div>

        {/* Modernization Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 lg:gap-5">
          {modernizationPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={item.delay}
                data-aos-duration="900"
                data-aos-offset="50"
                className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-[#2A2A30] bg-[#0A0A0A] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6]/70 hover:bg-[#0D0D0F] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:min-h-[225px] sm:p-6 md:min-h-[190px]"
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Icon + Title */}
                <div
                  className="relative z-10 mt-1 flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={item.delay + 100}
                  data-aos-duration="800"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:bg-white/[0.08]"
                    style={{
                      boxShadow: `inset 0 0 20px ${item.accent}12`,
                    }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: item.accent }}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="min-w-0 text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-xl lg:text-[22px]">
                    {item.title}
                  </h3>
                </div>

                {/* Description + Business Value */}
                <div
                  className="relative z-10 mt-4 max-h-none overflow-visible opacity-100 transition-all duration-500 ease-out md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:mt-4 md:group-hover:max-h-40 md:group-hover:opacity-100"
                  data-aos="fade-up"
                  data-aos-delay={item.delay + 180}
                  data-aos-duration="850"
                  data-aos-offset="30"
                >
                  <p className="w-full max-w-xl text-[13px] leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-6 lg:text-base">
                    {item.description}
                  </p>

                  <div
                    className="mt-4 flex items-center gap-2"
                    data-aos="fade-right"
                    data-aos-delay={item.delay + 280}
                    data-aos-duration="700"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
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
                  style={{ background: GRADIENT }}
                />

                {/* Corner Accent */}
                <div
                  className="absolute bottom-4 right-5 h-1.5 w-1.5 rounded-full opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Future Ready Banner */}
      <div
        className="relative mx-auto mt-16 max-w-7xl overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#0A0A0A] px-5 py-10 shadow-[0_25px_60px_rgba(0,0,0,.45)] sm:mt-20 sm:rounded-[32px] sm:px-10 sm:py-14 lg:mt-24 lg:px-14 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="60"
      >
        {/* Subtle Banner Glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-10 blur-[100px]"
          style={{ background: GRADIENT }}
        />

        <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-12">
          {/* Left */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="900"
          >
            <span
              className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur-md sm:px-5 sm:text-xs sm:tracking-[0.3em]"
              data-aos="fade-down"
              data-aos-delay="180"
              data-aos-duration="700"
            >
              Future Ready
            </span>

            <h3
              className="mt-5 text-3xl font-black leading-tight text-white sm:mt-7 sm:text-4xl lg:text-5xl"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="900"
            >
              Technology that
              <br />
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                accelerates
              </span>
              <br />
              your business.
            </h3>

            {/* Future Ready Description */}
            <p
              className="mt-5 w-full max-w-[340px] text-[13px] leading-6 text-[#D4D4D8] sm:mt-7 sm:max-w-xl sm:text-base sm:leading-8 md:text-[17px] lg:text-lg"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="900"
              data-aos-offset="40"
            >
              Modern infrastructure, secure platforms, and scalable solutions
              designed to help your organization move faster with confidence.
            </p>
          </div>

          {/* Right: Icon Feature List */}
          <div
            className="grid min-w-0 gap-3 sm:gap-4"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="900"
          >
            {futureReadyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 120}
                  data-aos-duration="800"
                  className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-[#2A2A30] bg-white/[0.03] px-3 py-3.5 backdrop-blur-md transition-all duration-500 hover:translate-x-1 hover:border-[#3E7BD6]/60 hover:bg-white/[0.07] sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4 md:hover:translate-x-2"
                >
                  {/* Icon Background */}
                  <div
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
                    style={{
                      boxShadow: `inset 0 0 20px ${item.accent}18`,
                    }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 sm:h-[22px] sm:w-[22px]"
                      style={{ color: item.accent }}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Existing Text */}
                  <span className="min-w-0 flex-1 break-words text-sm font-medium leading-6 text-white transition-colors duration-300 group-hover:text-[#D4D4D8] sm:text-base">
                    {item.title}
                  </span>

                  {/* Subtle Hover Accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: GRADIENT }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}