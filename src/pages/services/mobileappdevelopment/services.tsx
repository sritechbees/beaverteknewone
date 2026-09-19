
"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Android Apps",
    shortTitle: "Android",
    image: "/services/Mobile App.png",
    description:
      "Develop fast, scalable Android applications with intuitive UI, modern architecture, and excellent performance.",
    points: [
      "Native Android Development",
      "Scalable Architecture",
      "High Performance",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "iOS Apps",
    shortTitle: "iOS",
    image: "/home/mobile-app.jpg",
    description:
      "Premium iPhone and iPad applications built with smooth performance and Apple's latest design guidelines.",
    points: [
      "iPhone & iPad Apps",
      "Apple Design Standards",
      "Smooth User Experience",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Enterprise Mobile Applications",
    shortTitle: "Enterprise",
    image: "/home/ctaimage.jpg",
    description:
      "Enterprise-grade mobile solutions that automate business workflows and improve productivity.",
    points: [
      "Business Workflow Automation",
      "Enterprise Security",
      "Scalable Solutions",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Mobile UI/UX Design",
    shortTitle: "UI/UX",
    image: "/home/mobile-app.jpg",
    description:
      "Beautiful, user-friendly interfaces designed to improve engagement and customer satisfaction.",
    points: [
      "Modern Interface Design",
      "User-Centered Experience",
      "Interactive Prototypes",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "App Store Deployment & Support",
    shortTitle: "Support",
    image: "/home/ctaimage.jpg",
    description:
      "Publishing, optimization, updates, monitoring, and ongoing support for your mobile applications.",
    points: [
      "App Store Publishing",
      "Continuous Monitoring",
      "Ongoing Maintenance",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[8%] h-[320px] w-[320px] rounded-full bg-[#29B6F0]/10 blur-[140px] sm:h-[420px] sm:w-[420px]" />

        <div className="absolute -right-40 bottom-[8%] h-[320px] w-[320px] rounded-full bg-[#B93FC9]/10 blur-[140px] sm:h-[420px] sm:w-[420px]" />

        <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/5 blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-8" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0] sm:text-xs sm:tracking-[0.35em]">
              Our Services
            </span>

            <span className="h-px w-6 bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] sm:w-8" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
            Mobile Apps That
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Move Your Business
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
            From powerful native applications to enterprise mobility,
            we create secure and scalable mobile experiences built for
            modern businesses.
          </p>
        </div>

        {/* =====================================================
            MAIN SERVICE SHOWCASE
        ===================================================== */}

        <div className="grid gap-5 lg:grid-cols-[300px_1fr] lg:gap-6 xl:grid-cols-[340px_1fr] xl:gap-8">
          {/* =================================================
              LEFT SERVICE NAVIGATION
          ================================================= */}

          <div data-aos="fade-right" className="space-y-2.5 sm:space-y-3">
            {services.map((item) => {
              const isActive = active.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`group relative w-full overflow-hidden rounded-xl border p-4 text-left backdrop-blur-xl transition-all duration-500 sm:rounded-2xl sm:p-5 ${
                    isActive
                      ? "border-[#3E7BD6]/60 bg-white/[0.075] shadow-[0_10px_40px_rgba(62,123,214,0.10)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:-translate-y-[2px] hover:border-[#3E7BD6]/35 hover:bg-white/[0.045] hover:shadow-[0_12px_35px_rgba(41,182,240,0.06)]"
                  }`}
                >
                  {/* Glass highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />

                  {/* Active glass glow */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#29B6F0]/[0.07] via-[#7A4FD1]/[0.05] to-[#B93FC9]/[0.05]" />
                  )}

                  <div className="relative flex items-center gap-3.5 sm:gap-4">
                    {/* Title */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold leading-6 transition-all duration-300 sm:text-[15px] ${
                          isActive
                            ? "bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent"
                            : "text-[#A0A0A8] group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[#3E7BD6]/30 bg-[#3E7BD6]/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-[#666] group-hover:border-[#29B6F0]/30 group-hover:bg-[#29B6F0]/10 group-hover:text-[#29B6F0]"
                      }`}
                    >
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      />
                    </div>
                  </div>

                  {/* Active bottom line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </button>
              );
            })}

            {/* Small bottom card */}
            <div className="mt-5 hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl lg:block xl:p-5">
              <div className="mb-2.5 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                  Mobile Solutions
                </span>
              </div>

              <p className="text-xs leading-5 text-[#888] xl:text-sm xl:leading-6">
                Transform your ideas into reliable digital experiences
                across every mobile platform.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div data-aos="fade-left">
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.025] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.14] sm:rounded-3xl lg:rounded-[28px] xl:rounded-[32px]">
              {/* Outer glass shine */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-transparent" />

              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7A4FD1]/15 blur-[90px] transition-opacity duration-500 group-hover:opacity-80 sm:-right-20 sm:-top-20 sm:h-60 sm:w-60" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#29B6F0]/10 blur-[80px]" />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-[190px] overflow-hidden sm:h-[240px] md:h-[290px] lg:h-[300px] xl:h-[330px]">
                <img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent" />

                {/* BeaverTek subtle image tint */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F0]/[0.03] via-transparent to-[#B93FC9]/[0.04]" />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative p-5 sm:p-6 md:p-8 lg:p-9 xl:p-10">
                <div className="max-w-3xl">
                  {/* Active service title */}
                  <h3 className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-[34px]">
                    <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] bg-clip-text text-transparent">
                      {active.title}
                    </span>
                  </h3>

                  <p className="mt-3.5 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:mt-4 sm:text-base sm:leading-7 md:mt-5 md:text-lg md:leading-8">
                    {active.description}
                  </p>

                  {/* Feature points */}
                  <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-3 md:mt-7">
                    {active.points.map((point) => (
                      <div
                        key={point}
                        className="group/point flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.025] px-2.5 py-2 text-xs text-[#D4D4D8] backdrop-blur-md transition-all duration-300 hover:border-[#29B6F0]/20 hover:bg-[#29B6F0]/[0.04] hover:text-white sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#29B6F0] transition-transform duration-300 group-hover/point:scale-110 sm:h-[17px] sm:w-[17px]"
                        />

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gradient divider */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/35 to-transparent sm:mt-7 md:mt-8" />

                  {/* Bottom information */}
                  <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between md:mt-7">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#666] sm:text-xs">
                        Built For
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white transition-colors duration-300 sm:text-sm">
                        Modern Digital Businesses
                      </p>
                    </div>

                    <button className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#3E7BD6]/50 hover:bg-gradient-to-r hover:from-[#29B6F0]/10 hover:to-[#B93FC9]/10 hover:shadow-[0_8px_30px_rgba(62,123,214,0.12)] sm:w-fit sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                      Explore Service

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_18px_rgba(41,182,240,0.3)] sm:h-7 sm:w-7">
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px] sm:h-[15px] sm:w-[15px]"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLIENT SATISFACTION / TRUST STRIP
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mx-auto mt-8 max-w-5xl sm:mt-10 md:mt-12"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 backdrop-blur-xl transition-all duration-500 hover:border-[#3E7BD6]/25 hover:bg-white/[0.035] sm:px-6 sm:py-6 md:px-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#29B6F0]/[0.04] via-transparent to-[#B93FC9]/[0.04]" />

            <div className="relative flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[#29B6F0]/10 transition-all duration-300 group-hover:border-[#29B6F0]/35 group-hover:bg-[#29B6F0]/15 sm:h-11 sm:w-11">
                  <CheckCircle2
                    size={20}
                    className="text-[#29B6F0]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Client Satisfaction
                  </p>

                  <p className="mt-0.5 text-xs text-[#777] sm:text-sm">
                    Reliable mobile experiences built around your business needs.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/[0.07] sm:h-10 sm:w-px" />

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_14px_#29B6F0]" />

                <span className="text-xs font-medium text-[#A0A0A8] sm:text-sm">
                  Secure • Scalable • Performance Driven
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

