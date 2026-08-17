"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Modernize",
    description:
      "Bring legacy systems, old infrastructure, and outdated workflows into the modern stack — without breaking what already works.",
    icon: Cpu,
    href: "/services/modernize/modernizehero",
  },
  {
    title: "See Your Data",
    description:
      "Turn the data your business already collects into dashboards, reports, and insights you can actually use to make decisions.",
    icon: TrendingUp,
    href: "/services/seeyourdata/seeyourdatahero",
  },
  {
    title: "Build Software",
    description:
      "Custom web and mobile applications, designed and engineered from concept to production by senior people.",
    icon: Code2,
    href: "/services/buildsoftware/herosection",
  },
  {
    title: "Stay Secure",
    description:
      "Keep your digital operations protected, monitored, and running — so a security event doesn't become a business event.",
    icon: ShieldCheck,
    href: "/services/staysecure/staysecureherosection",
  },
];

const gradient =
  "bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]";

export default function ServicesHub() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* =====================================================
            PART 2 — SERVICES
        ====================================================== */}

        <div
          className="mb-14 text-center sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#29B6F0] sm:text-sm">
            OUR SERVICES
          </span>

          <h2
            className={`mx-auto mt-5 max-w-3xl ${gradient} bg-clip-text text-3xl font-black leading-tight text-transparent sm:mt-6 sm:text-4xl lg:text-5xl`}
          >
            Four things, done well.
          </h2>

          <div
            className={`mx-auto mt-5 h-1 w-16 rounded-full ${gradient} sm:mt-6 sm:w-20`}
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:mt-6 sm:text-base sm:leading-7">
            BeaverTek is built around four core practices. Every engagement
            starts in one of these — and most clients eventually use more than
            one.
          </p>
        </div>

        {/* Services Cards */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="group h-full"
              >
                <div
                  className="
                    relative flex h-full min-h-[310px] flex-col
                    overflow-hidden rounded-2xl
                    border border-[#2A2A30]
                    bg-[#121212]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]/70
                    hover:bg-[#151515]
                    sm:p-7
                  "
                >

                  {/* Number */}

                  <span className="absolute right-5 top-4 text-4xl font-black text-[#1E1E22] transition-colors duration-300 group-hover:text-[#25252B]">
                    0{index + 1}
                  </span>

                  {/* Icon */}

                  <div
                    className={`relative z-10 mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${gradient} text-white transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}

                  <h3 className="relative z-10 text-xl font-bold tracking-tight text-white sm:text-[22px]">
                    {service.title}
                  </h3>

                  {/* Divider */}

                  <div
                    className={`mt-3 h-[3px] w-10 rounded-full ${gradient} transition-all duration-300 group-hover:w-16`}
                  />

                  {/* Description */}

                  <p className="mt-5 flex-1 text-sm leading-6 text-[#A0A0A8] sm:text-[15px] sm:leading-7">
                    {service.description}
                  </p>

                  {/* CTA */}

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#29B6F0] transition-all duration-300 group-hover:gap-3 group-hover:text-[#B93FC9]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* Bottom Line */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 ${gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </div>
            );
          })}

        </div>

        {/* =====================================================
            PART 3 — HOW WE WORK
        ====================================================== */}

        <div
          className="mt-20 sm:mt-24 lg:mt-28"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="overflow-hidden rounded-3xl border border-[#2A2A30] bg-[#121212]">

            <div className="grid lg:grid-cols-2">

              {/* LEFT */}

              <div className="p-6 sm:p-8 md:p-10 lg:p-12">

                <span
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-[#29B6F0] sm:text-sm"
                >
                  HOW WE WORK
                </span>

                <h2
                  data-aos="fade-right"
                  data-aos-delay="150"
                  className={`mt-5 ${gradient} bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl lg:text-[42px]`}
                >
                  Senior people.
                  <br />
                  Practical delivery.
                </h2>

                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className={`mt-5 h-[3px] w-16 rounded-full ${gradient}`}
                />

                <p
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="mt-6 text-sm leading-7 text-[#D4D4D8] sm:text-base sm:leading-7"
                >
                  Technology projects succeed when experienced people stay
                  involved from planning through delivery. That's why every
                  BeaverTek engagement is led by senior consultants who focus
                  on outcomes—not unnecessary complexity.
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="mt-5 text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-7"
                >
                  Whether we're modernizing infrastructure, building software,
                  improving data visibility, or strengthening cybersecurity,
                  our process stays collaborative, transparent, and measurable.
                </p>

                {/* Process Cards */}

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

                  {[
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
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      data-aos="fade-up"
                      data-aos-delay={350 + index * 80}
                      className="rounded-xl border border-[#2A2A30] bg-[#1A1A1E] p-4 transition-all duration-300 hover:border-[#3E7BD6]/70 hover:bg-[#151515] sm:p-5"
                    >
                      <h4 className="text-sm font-bold text-white sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-[#A0A0A8] sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* RIGHT */}

              <div className="relative overflow-hidden bg-gradient-to-br from-[#101014] via-[#171727] to-[#3E7BD6] p-6 sm:p-8 md:p-10 lg:p-12">

                {/* Subtle Decorative Shapes */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.05]" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/[0.05]" />

                <div className="relative z-10">

                  <h3
                    data-aos="fade-left"
                    className={`${gradient} bg-clip-text text-2xl font-black text-transparent sm:text-3xl`}
                  >
                    Why clients choose BeaverTek
                  </h3>

                  <div className="mt-8 space-y-6">

                    {/* 01 */}

                    <div
                      data-aos="fade-left"
                      data-aos-delay="100"
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3E7BD6]/50 bg-black/20 text-sm font-bold text-[#29B6F0]">
                        01
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">
                          Senior expertise
                        </h4>

                        <p className="mt-1.5 text-xs leading-6 text-[#D4D4D8] sm:text-sm">
                          Experienced consultants stay engaged throughout the
                          project—not just during sales.
                        </p>
                      </div>
                    </div>

                    {/* 02 */}

                    <div
                      data-aos="fade-left"
                      data-aos-delay="200"
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#7A4FD1]/50 bg-black/20 text-sm font-bold text-[#7A4FD1]">
                        02
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">
                          Business-first thinking
                        </h4>

                        <p className="mt-1.5 text-xs leading-6 text-[#D4D4D8] sm:text-sm">
                          Every recommendation is aligned with measurable
                          business outcomes.
                        </p>
                      </div>
                    </div>

                    {/* 03 */}

                    <div
                      data-aos="fade-left"
                      data-aos-delay="300"
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#B93FC9]/50 bg-black/20 text-sm font-bold text-[#B93FC9]">
                        03
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">
                          Long-term partnership
                        </h4>

                        <p className="mt-1.5 text-xs leading-6 text-[#D4D4D8] sm:text-sm">
                          We continue supporting clients long after projects
                          launch through optimization and ongoing guidance.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            PREMIUM CTA
        ====================================================== */}

        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="relative mt-20 overflow-hidden rounded-3xl border border-[#2A2A30] bg-gradient-to-br from-[#101014] via-[#181827] to-[#3E7BD6] px-6 py-14 text-center sm:mt-24 sm:px-10 sm:py-16 lg:mt-28 lg:px-16 lg:py-20"
        >

          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#29B6F0] to-transparent" />
            <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B93FC9] to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">

            <span
              data-aos="fade-up"
              className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#29B6F0] sm:text-sm"
            >
              LET'S BUILD TOGETHER
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className={`mt-5 ${gradient} bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl lg:text-5xl`}
            >
              Technology that works.
              <br />
              Partners you can trust.
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D4D4D8] sm:text-base sm:leading-7"
            >
              Whether you're modernizing legacy systems, building custom
              software, unlocking insights from your data, or improving
              cybersecurity, BeaverTek helps you move forward with confidence.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >

              <Link
                href="/contact/contacthero"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full ${gradient} px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto`}
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services/serviceshero"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#3E7BD6] hover:bg-white/[0.08] sm:w-auto"
              >
                Explore Services
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}