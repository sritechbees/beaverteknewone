
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Cloud,
  FileSpreadsheet,
  RefreshCw,
  Monitor,
  Link2,
  Sparkles,
  Search,
  Map,
  Rocket,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const modernizationItems = [
  {
    title: "Secure Cloud Migration",
    text: "Migrating from on-premise servers to a secure cloud platform.",
    icon: Cloud,
    accent: "#29B6F0",
  },
  {
    title: "Modern Business Applications",
    text: "Replacing spreadsheets with modern business applications.",
    icon: FileSpreadsheet,
    accent: "#3E7BD6",
  },
  {
    title: "ERP & CRM Upgrades",
    text: "Upgrading legacy ERP and CRM platforms.",
    icon: RefreshCw,
    accent: "#7A4FD1",
  },
  {
    title: "Website & Tool Rebuilds",
    text: "Rebuilding outdated websites and internal tools.",
    icon: Monitor,
    accent: "#B93FC9",
  },
  {
    title: "Seamless System Integration",
    text: "Connecting disconnected systems with seamless integrations.",
    icon: Link2,
    accent: "#29B6F0",
  },
];

const processSteps = [
  {
    title: "Assess",
    desc: "Review your current technology landscape.",
    icon: Search,
  },
  {
    title: "Plan",
    desc: "Build a practical modernization roadmap.",
    icon: Map,
  },
  {
    title: "Execute",
    desc: "Implement with minimal business disruption.",
    icon: Rocket,
  },
  {
    title: "Support",
    desc: "Continuous optimization and long-term guidance.",
    icon: Headphones,
  },
];

function RealModernization() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 45,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    const refreshAos = () => AOS.refresh();
    window.addEventListener("resize", refreshAos);

    return () => {
      window.removeEventListener("resize", refreshAos);
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-12 sm:py-14 lg:py-20">
     
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10">
        {/* Heading */}
        <header
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3E7BD6] sm:text-xs sm:tracking-[0.26em]">
            <Sparkles className="h-4 w-4" />
            What This Looks Like in Practice
          </span>

          
<h2 className="mt-4 text-2xl font-black tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
  Real{" "}
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Modernization
  </span>
</h2>

          <div
            className="mx-auto mt-5 h-[3px] w-16 rounded-full"
            style={{ background: GRADIENT }}
          />
        </header>

        


{/* Modernization: Responsive Alternating Timeline */}
<div className="relative mx-auto mt-7 max-w-5xl sm:mt-9 lg:mt-10">

  {/* Center Timeline Line */}
  <div
    className="pointer-events-none absolute bottom-3 left-5 top-3 w-px sm:left-1/2 sm:-translate-x-1/2"
    style={{
      background:
        "linear-gradient(to bottom,rgba(41,182,240,0.2),rgba(62,123,214,0.65),rgba(122,79,209,0.65),rgba(185,63,201,0.2))",
    }}
  />

  {modernizationItems.map((item, index) => {
    const Icon = item.icon;
    const isLeft = index % 2 === 0;

    return (
      <article
        key={item.title}
        data-aos={isLeft ? "fade-right" : "fade-left"}
        data-aos-delay={index * 60}
        className="group relative grid grid-cols-[40px_minmax(0,1fr)] gap-x-3 pb-6 last:pb-0 sm:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)] sm:gap-x-3 sm:pb-7 lg:gap-x-5 lg:pb-8"
      >
        {/* LEFT CONTENT CARD */}
        <div
          className={`min-w-0 ${
            isLeft
              ? "col-start-2 row-start-1 sm:col-start-1 sm:row-start-1"
              : "hidden sm:col-start-1 sm:row-start-1 sm:block"
          }`}
        >
          {isLeft && (
            
<div className="group/card relative isolate overflow-hidden rounded-xl border border-gray-200/90 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29B6F0]/50 hover:shadow-[0_14px_35px_rgba(41,182,240,0.16)] sm:p-4 md:p-5">

  {/* Left-to-right gradient overlay */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 rounded-xl transition-transform duration-700 ease-out group-hover/card:scale-x-100"
    style={{
      background:
        "linear-gradient(90deg,rgba(41,182,240,0.16) 0%,rgba(62,123,214,0.12) 45%,rgba(185,63,201,0.10) 100%)",
    }}
  />

  {/* Gradient Top Accent */}
 

  <div className="relative z-10 sm:text-right">
    <h3 className="text-base font-bold leading-6 text-[#111827] transition-colors duration-300 group-hover/card:text-[#246DB5] md:text-lg">
      {item.title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-[#6B7280] transition-colors duration-300 group-hover/card:text-[#374151] sm:text-[14px] md:text-[15px]">
      {item.text}
    </p>

    <div
      className="mt-3 ml-0 h-[2px] w-8 rounded-full transition-all duration-500 group-hover/card:w-14 sm:ml-auto"
      style={{ background: GRADIENT }}
    />
  </div>
</div>
          )}
        </div>

        {/* CENTER TIMELINE ICON */}
        <div className="relative z-10 col-start-1 row-start-1 flex justify-center sm:col-start-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white sm:h-11 sm:w-11">

            {/* Hover Glow */}
            <span
              className="pointer-events-none absolute inset-1 scale-50 rounded-full opacity-0 blur-md transition-all duration-300 group-hover:scale-125 group-hover:opacity-70"
              style={{ background: item.accent }}
            />

            {/* Gradient Ring */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full border border-transparent opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(white,white) padding-box, linear-gradient(135deg,#29B6F0,#7A4FD1,#B93FC9) border-box",
              }}
            />

            <Icon
              className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-[22px] sm:w-[22px]"
              style={{ color: item.accent }}
              strokeWidth={1.8}
            />

            <span
              className="absolute -bottom-0.5 z-10 h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150"
              style={{ background: item.accent }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT CARD */}
        <div
          className={`col-start-2 row-start-1 min-w-0 sm:col-start-3 sm:row-start-1 ${
            isLeft ? "sm:invisible" : ""
          }`}
        >
          {!isLeft && (
           
<div className="group/card relative isolate overflow-hidden rounded-xl border border-gray-200/90 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#7A4FD1]/50 hover:shadow-[0_14px_35px_rgba(122,79,209,0.16)] sm:p-4 md:p-5">

  {/* Right-to-left gradient overlay */}
  <div
    className="pointer-events-none absolute inset-0 -z-10 origin-right scale-x-0 rounded-xl transition-transform duration-700 ease-out group-hover/card:scale-x-100"
    style={{
      background:
        "linear-gradient(270deg,rgba(185,63,201,0.14) 0%,rgba(122,79,209,0.12) 45%,rgba(41,182,240,0.10) 100%)",
    }}
  />

 

  <div className="relative z-10">
    <h3 className="text-base font-bold leading-6 text-[#111827] transition-colors duration-300 group-hover/card:text-[#7A4FD1] md:text-lg">
      {item.title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-[#6B7280] transition-colors duration-300 group-hover/card:text-[#374151] sm:text-[14px] md:text-[15px]">
      {item.text}
    </p>

    <div
      className="mt-3 h-[2px] w-8 rounded-full transition-all duration-500 group-hover/card:w-14"
      style={{ background: GRADIENT }}
    />
  </div>
</div>
          )}
        </div>
      </article>
    );
  })}
</div>
        {/* Simple Process */}
        <section
          className="sm:mt-16 sm:pt-12 lg:mt-20 lg:pt-1 max-sm:mt-12"
          aria-label="Simple process"
        >
          <header className="text-center" data-aos="fade-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A4FD1] sm:text-xs">
              Simple Process
            </span>

            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
              From planning to progress
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6B7280] sm:text-base">
              A clear, practical approach to modernizing your technology.
            </p>
          </header>

          {/* Connected process flow */}
          <div className="mx-auto mt-9 max-w-6xl sm:mt-12">
            <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-6">
              {/* Desktop connecting line */}
              <div
                className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px lg:block"
                style={{
                  background:
                    "linear-gradient(90deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 68%,#B93FC9 100%)",
                }}
              />

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                    className="group relative flex gap-4 sm:gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                  >
                    {/* Mobile and tablet connector */}
                    {index !== processSteps.length - 1 && (
                      <span className="absolute bottom-[-29px] left-[27px] top-14 w-px bg-gradient-to-b from-[#3E7BD6]/35 to-[#B93FC9]/10 sm:left-[31px] sm:bottom-[-37px] sm:top-16 lg:hidden" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-all duration-300 group-hover:border-[#7A4FD1]/40 group-hover:shadow-[0_5px_20px_rgba(122,79,209,0.12)] sm:h-16 sm:w-16 lg:mb-5">
                      <div
                        className="absolute inset-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(135deg,rgba(41,182,240,.09),rgba(185,63,201,.09))",
                        }}
                      />

                      <Icon
                        className="relative z-10 h-5 w-5 text-[#3E7BD6] transition-colors duration-300 group-hover:text-[#7A4FD1] sm:h-6 sm:w-6"
                        strokeWidth={1.7}
                      />

                    
                    </div>

                    {/* Step content */}
                    <div className="min-w-0 flex-1 pt-1 lg:flex-none lg:pt-0">
                      <h4 className="text-lg font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-xl">
                        {step.title}
                      </h4>

                      <p className="mt-2 max-w-xs text-sm leading-6 text-[#6B7280] lg:mx-auto">
                        {step.desc}
                      </p>

                      <div
                        className="mt-3 h-[2px] w-7 rounded-full transition-all duration-300 group-hover:w-12 lg:mx-auto"
                        style={{ background: GRADIENT }}
                      />
                    </div>

                    {/* Desktop next-step indicator */}
                    {index !== processSteps.length - 1 && (
                      <ArrowRight className="absolute right-[-15px] top-[21px] hidden h-4 w-4 text-[#7A4FD1]/70 lg:block" />
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
 </div>
    </section>
  );
}

export default RealModernization;