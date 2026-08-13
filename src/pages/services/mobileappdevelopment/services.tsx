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
    image: "/services/uiux.jpg",
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
    image: "/services/support.jpg",
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
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#29B6F0]/10 blur-[180px]" />

        <div className="absolute right-[-200px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#B93FC9]/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#29B6F0]">
              Our Services
            </span>

            <span className="h-px w-8 bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9]" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Mobile Apps That
            <span className="block bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Move Your Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A0A0A8] md:text-lg">
            From powerful native applications to enterprise mobility,
            we create secure and scalable mobile experiences built for
            modern businesses.
          </p>
        </div>

        {/* =====================================================
            MAIN SERVICE SHOWCASE
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr]">

          {/* =================================================
              LEFT SERVICE NAVIGATION
          ================================================= */}

          <div data-aos="fade-right" className="space-y-3">

            {services.map((item) => {
              const isActive = active.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                    isActive
                      ? "border-[#3E7BD6]/70 bg-white/[0.07]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Active glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F0]/10 via-[#7A4FD1]/10 to-[#B93FC9]/10" />
                  )}

                  <div className="relative flex items-center gap-4">

                    {/* Number */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-white shadow-lg shadow-[#3E7BD6]/20"
                          : "bg-white/[0.05] text-[#666]"
                      }`}
                    >
                      {item.number}
                    </div>

                    {/* Title */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold transition ${
                          isActive
                            ? "text-white"
                            : "text-[#A0A0A8] group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "rotate-0 border-white/20 bg-white/10 text-white"
                          : "border-white/10 text-[#555] group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Active bottom line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}

            {/* Small bottom card */}
            <div className="mt-6 hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 lg:block">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

                <span className="text-xs uppercase tracking-widest text-[#666]">
                  Mobile Solutions
                </span>
              </div>

              <p className="text-sm leading-6 text-[#888]">
                Transform your ideas into reliable digital experiences
                across every mobile platform.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div data-aos="fade-left">

            <div className="group relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-[#0A0A0A]">

              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7A4FD1]/20 blur-[100px]" />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[330px]">

                <img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-xl">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white">
                    {active.shortTitle}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-6 right-6">
                  <span className="text-6xl font-bold text-white/10 md:text-7xl">
                    {active.number}
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">

                <div className="max-w-3xl">

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    {active.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#A0A0A8] md:text-lg md:leading-8">
                    {active.description}
                  </p>

                  {/* Feature points */}

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {active.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-[#D4D4D8]"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#29B6F0]"
                        />

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gradient divider */}

                  <div className="mt-9 h-px w-full bg-gradient-to-r from-[#29B6F0]/60 via-[#7A4FD1]/40 to-transparent" />

                  {/* Bottom information */}

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#666]">
                        Built For
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        Modern Digital Businesses
                      </p>
                    </div>

                    <button className="group/btn inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#3E7BD6]/50 hover:bg-white/[0.08]">
                      Explore Service

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] transition-transform duration-300 group-hover/btn:translate-x-1">
                        <ArrowUpRight size={15} />
                      </span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}