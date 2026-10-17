"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const processCards = [
  {
    title: "Discover",
    text: "Understand your business, systems, goals, and challenges before recommending technology.",
  },
  {
    title: "Design",
    text: "Create scalable architectures and implementation plans tailored to your organization.",
  },
  {
    title: "Deliver",
    text: "Build, deploy, migrate, and integrate with minimal disruption to business operations.",
  },
  {
    title: "Improve",
    text: "Monitor, optimize, and continuously improve performance, security, and reliability.",
  },
];

const benefits = [
  {
    title: "Senior expertise",
    text: "Experienced consultants stay engaged throughout the project—not just during sales.",
    accent: "#29B6F0",
  },
  {
    title: "Business-first thinking",
    text: "Every recommendation is aligned with measurable business outcomes.",
    accent: "#7A4FD1",
  },
  {
    title: "Long-term partnership",
    text: "We continue supporting clients long after projects launch through optimization and ongoing guidance.",
    accent: "#B93FC9",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Learn",
    text: "We immerse in your business, map the systems and align on the outcomes that matter most.",
    accent: "#29B6F0",
  },
  {
    number: "02",
    title: "Adapt",
    text: "We design and build the right solution — iterating quickly with you, not in a black box.",
    accent: "#7A4FD1",
  },
  {
    number: "03",
    title: "Optimize",
    text: "We measure, refine and manage what we deliver so it keeps compounding value over time.",
    accent: "#B93FC9",
  },
];

const gradient =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]";

const gradientLine =
  "bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]";

function Howwework() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      {/* Subtle page accents */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#29B6F0]/[0.045] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 top-[48%] h-80 w-80 rounded-full bg-[#B93FC9]/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================
            SECTION 1: LEARN. ADAPT. OPTIMIZE.
        ========================================= */}
        <div className="pb-14 sm:pb-20 lg:pb-24">

          {/* Heading */}
          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] text-[#3E7BD6] sm:text-xs">
              <span className={`h-[2px] w-6 rounded-full ${gradientLine}`} />
              HOW WE WORK
              <span className={`h-[2px] w-6 rounded-full ${gradientLine}`} />
            </span>

            <h2 className="mt-5 text-[32px] font-black leading-[1.12] tracking-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-[54px]">
              Learn. Adapt.{" "}
              <span className={`${gradient} bg-clip-text text-transparent`}>
                Optimize.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8">
              Our engagement model mirrors our promise — and it scales from a
              single sprint to a full transformation.
            </p>

            <div
              className={`mx-auto mt-6 h-[3px] w-14 rounded-full ${gradientLine}`}
            />
          </div>

          {/* Open workflow layout — no cards or boxes */}
          <div className="mt-12 grid grid-cols-1 gap-9 sm:mt-14 sm:grid-cols-3 sm:gap-7 lg:mt-16 lg:gap-12">
            {workSteps.map((step, index) => (
              <div
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative"
              >
                {/* Minimal gradient divider */}
                <div
                  className="mb-6 h-[2px] w-full origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${step.accent} 0%, ${step.accent}30 55%, transparent 100%)`,
                  }}
                />

                <div className="flex items-center gap-4">
                  <span
                    className="text-[38px] font-black leading-none tracking-tight transition-colors duration-300 sm:text-[42px] lg:text-5xl"
                    style={{ color: step.accent }}
                  >
                    {step.number}
                  </span>

                  <span
                    className="h-8 w-px"
                    style={{ backgroundColor: `${step.accent}45` }}
                  />

                  <h3 className="text-xl font-extrabold tracking-tight text-[#111827] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-2xl lg:text-[27px]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#6B7280] sm:text-[15px] sm:leading-8">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle section separator */}
        <div
          className={`h-px w-full ${gradientLine} opacity-25`}
          aria-hidden="true"
        />

        {/* =========================================
            SECTION 2: SENIOR PEOPLE. PRACTICAL DELIVERY.
        ========================================= */}
        <div className="pt-14 sm:pt-20 lg:pt-24">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-24">

            {/* LEFT: APPROACH + PROCESS */}
            <div>
              <div data-aos="fade-right">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] text-[#3E7BD6] sm:text-xs">
                  <span className={`h-[2px] w-6 rounded-full ${gradientLine}`} />
                  OUR APPROACH
                </span>

                <h2 className="mt-5 text-[32px] font-black leading-[1.08] tracking-tight sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px]">
                  <span className="text-[#111827]">
                    Senior people.
                  </span>
                  <br />
                  <span className={`${gradient} bg-clip-text text-transparent`}>
                    Practical delivery.
                  </span>
                </h2>

                <div
                  className={`mt-5 h-[3px] w-14 rounded-full ${gradientLine}`}
                />

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-[15px] sm:leading-8">
                  Technology projects succeed when experienced people stay
                  involved from planning through delivery. That's why every
                  BeaverTek engagement is led by senior consultants who focus
                  on outcomes not unnecessary complexity.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4B5563] sm:text-[15px] sm:leading-8">
                  Whether we're modernizing infrastructure, building software,
                  improving data visibility, or strengthening cybersecurity,
                  our process stays collaborative, transparent, and measurable.
                </p>
              </div>

              {/* Four process items — open editorial layout */}
              <div className="mt-9 grid grid-cols-1 gap-x-8 sm:grid-cols-2 sm:gap-x-10">
                {processCards.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className={`group py-5 ${
                      index < 2 ? "border-b border-[#E5E7EB]" : ""
                    } ${index >= 2 ? "sm:border-b-0" : ""} ${
                      index === 2 || index === 3
                        ? "sm:border-t sm:border-[#E5E7EB]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-[7px] w-[7px] shrink-0 rounded-full ${gradientLine}`}
                      />

                      <h3 className="text-base font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[17px]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 pl-4 text-[13px] leading-6 text-[#6B7280] sm:text-sm sm:leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: BENEFITS — NO BOXED CARDS */}
            <div className="relative lg:pl-8">
              {/* Vertical gradient accent on larger screens */}
              <div
                className={`absolute bottom-0 left-0 top-0 hidden w-px lg:block ${gradientLine} opacity-30`}
              />

              <div data-aos="fade-left">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#6B7280] sm:text-xs">
                  THE BEAVERTEK DIFFERENCE
                </span>

                <h3 className="mt-4 max-w-lg text-[27px] font-black leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl">
                  Why clients choose{" "}
                  <span className={`${gradient} bg-clip-text text-transparent`}>
                    BeaverTek
                  </span>
                </h3>

                <div
                  className={`mt-5 h-[3px] w-12 rounded-full ${gradientLine}`}
                />
              </div>

              {/* Benefits as a clean list */}
              <div className="mt-8 sm:mt-10">
                {benefits.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    className={`group py-6 ${
                      index !== benefits.length - 1
                        ? "border-b border-[#E5E7EB]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center">
                        <span
                          className="absolute inset-0 rounded-full opacity-[0.10] transition-opacity duration-300 group-hover:opacity-20"
                          style={{ backgroundColor: item.accent }}
                        />
                        <span
                          className="relative h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-bold leading-6 text-[#111827] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-lg">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-[#6B7280] sm:text-[15px] sm:leading-8">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal closing accent */}
              <div
                className={`mt-6 h-[2px] w-20 rounded-full ${gradientLine} opacity-60`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howwework;