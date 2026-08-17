"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Productcontent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  const gradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  return (
    <>
      {/* =======================================================
          BEAVER HEALTH AI
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-20">

        {/* Subtle Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3E7BD6 1px,transparent 1px),linear-gradient(90deg,#3E7BD6 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div data-aos="fade-right">

              {/* Badge */}

              <div className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[#121212] px-4 py-2">

                <Activity className="mr-2 h-4 w-4 text-[#29B6F0]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
                  Beaver Product
                </span>

              </div>

              {/* Heading */}

              <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: gradient,
                  }}
                >
                  BeaverHealthAI
                </span>

              </h1>

              {/* Sub Heading */}

              <p className="mt-3 text-lg font-medium text-[#D4D4D8] sm:text-xl">
                Intelligent Healthcare AI Platform
              </p>

              {/* Description */}

              <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#A0A0A8] sm:text-[17px]">
                BeaverHealthAI combines AI-powered patient intake,
                intelligent triaging, remote patient monitoring,
                predictive analytics and hospital workflow automation
                into one secure enterprise platform.
              </p>

              {/* Buttons */}

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-7 flex flex-wrap gap-3"
              >

                {/* Primary */}

                <Link
                  href="https://beaverhealth.ai"
                  target="_blank"
                  className="group inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(41,182,240,.20)] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: gradient,
                  }}
                >
                  Visit Platform

                  <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary */}

                <Link
                  href="/customers/casestudyhero"
                  className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[#121212] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#3E7BD6] hover:bg-[#1A1A1E]"
                >
                  Contact Sales
                </Link>

              </div>

              {/* Trust Tags */}

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-7 flex flex-wrap gap-2.5"
              >

                {[
                  "AI Powered",
                  "Healthcare",
                  "Cloud Native",
                  "Enterprise Security",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#2A2A30] bg-[#121212] px-4 py-2 text-xs font-medium text-[#D4D4D8] transition-all duration-300 hover:border-[#3E7BD6] hover:text-white sm:text-sm"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              data-aos="fade-left"
              className="relative flex items-center justify-center"
            >

              {/* Gradient Border Wrapper */}

              <div
                className="w-full rounded-[28px] p-[1px]"
                style={{
                  background: gradient,
                }}
              >

                {/* Glass Card */}

                <div className="overflow-hidden rounded-[27px] border border-[#2A2A30] bg-[#121212]">

                  {/* Top Gradient Line */}

                  <div
                    className="h-1 w-full"
                    style={{
                      background: gradient,
                    }}
                  />

                  <div className="p-6 sm:p-7 lg:p-9">

                    {/* Header */}

                    <div className="flex items-center gap-4">

                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)",
                        }}
                      >
                        <Brain className="h-7 w-7 text-white" />
                      </div>

                      <div>

                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#29B6F0]">
                          AI Platform
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                          Healthcare AI Platform
                        </h2>

                      </div>

                    </div>

                    {/* Description */}

                    <p className="mt-6 text-[15px] leading-7 text-[#D4D4D8] sm:text-[16px]">
                      A healthcare intelligence platform combining AI-powered
                      patient intake, intelligent triaging, remote monitoring,
                      predictive analytics and automated clinical workflows.
                    </p>

                    {/* Divider */}

                    <div className="my-7 h-px w-full bg-[#2A2A30]" />


                    {/* Feature 1 */}

                    <div
                      data-aos="fade-up"
                      className="group flex items-start gap-4 rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-4 transition-all duration-300 hover:border-[#29B6F0]"
                    >

                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg,#29B6F0,#3E7BD6)",
                        }}
                      >
                        <HeartPulse className="h-5 w-5 text-white" />
                      </div>

                      <div>

                        <h4 className="font-semibold text-white">
                          Smart Patient Intake
                        </h4>

                        <p className="mt-1.5 text-sm leading-6 text-[#A0A0A8]">
                          Intelligent registration and automated triage
                          to reduce healthcare workload.
                        </p>

                      </div>

                    </div>


                    {/* Feature 2 */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="mt-3.5 group flex items-start gap-4 rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-4 transition-all duration-300 hover:border-[#7A4FD1]"
                    >

                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg,#3E7BD6,#7A4FD1)",
                        }}
                      >
                        <Activity className="h-5 w-5 text-white" />
                      </div>

                      <div>

                        <h4 className="font-semibold text-white">
                          Remote Monitoring
                        </h4>

                        <p className="mt-1.5 text-sm leading-6 text-[#A0A0A8]">
                          Real-time patient insights beyond hospital walls
                          with secure AI monitoring.
                        </p>

                      </div>

                    </div>


                    {/* Feature 3 */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="mt-3.5 group flex items-start gap-4 rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-4 transition-all duration-300 hover:border-[#B93FC9]"
                    >

                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background:
                            "linear-gradient(135deg,#7A4FD1,#B93FC9)",
                        }}
                      >
                        <ShieldCheck className="h-5 w-5 text-white" />
                      </div>

                      <div>

                        <h4 className="font-semibold text-white">
                          Enterprise Security
                        </h4>

                        <p className="mt-1.5 text-sm leading-6 text-[#A0A0A8]">
                          Secure cloud architecture with enterprise-grade
                          healthcare data protection.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =======================================================
          LIVE IMPACT
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-20">

        {/* Subtle Grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3E7BD6 1px,transparent 1px),linear-gradient(90deg,#3E7BD6 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          {/* Heading */}

          <div
            data-aos="fade-up"
            className="mx-auto max-w-3xl text-center"
          >

            <span className="inline-flex rounded-full border border-[#2A2A30] bg-[#121212] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
              LIVE IMPACT
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">

              Healthcare AI{" "}

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: gradient,
                }}
              >
                Running In Production
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#D4D4D8] sm:text-lg">
              Serving hospitals, empowering healthcare professionals, and
              processing healthcare data securely with AI-powered automation.
            </p>

          </div>


          {/* Bento Cards */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}

            <div
              data-aos="zoom-in"
              className="group relative overflow-hidden rounded-[22px] border border-[#2A2A30] bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3E7BD6]"
            >

              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  background: gradient,
                }}
              >
                🏥
              </div>

              <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                Multiple Hospitals
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">
                Trusted by hospitals and healthcare providers with
                enterprise-grade digital healthcare infrastructure.
              </p>

              <div className="mt-6 border-t border-[#2A2A30] pt-5">

                <h4 className="text-3xl font-black text-[#29B6F0]">
                  10+
                </h4>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  Healthcare Partners
                </p>

              </div>

            </div>


            {/* Card 2 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="group relative overflow-hidden rounded-[22px] border border-[#2A2A30] bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7A4FD1]"
            >

              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  background: gradient,
                }}
              >
                👨‍⚕️
              </div>

              <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                Patients Supported
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">
                AI-powered patient engagement helping thousands receive
                faster and more personalized care.
              </p>

              <div className="mt-6 border-t border-[#2A2A30] pt-5">

                <h4 className="text-3xl font-black text-[#7A4FD1]">
                  50K+
                </h4>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  Patients
                </p>

              </div>

            </div>


            {/* Card 3 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="group relative overflow-hidden rounded-[22px] border border-[#2A2A30] bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B93FC9]"
            >

              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  background: gradient,
                }}
              >
                📊
              </div>

              <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                Healthcare Analytics
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">
                Processing healthcare insights securely with AI-driven
                predictive analytics and automation.
              </p>

              <div className="mt-6 border-t border-[#2A2A30] pt-5">

                <h4 className="text-3xl font-black text-[#B93FC9]">
                  AI
                </h4>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  Powered Intelligence
                </p>

              </div>

            </div>

          </div>


          {/* Bottom Stats */}

          <div
            data-aos="fade-up"
            className="mt-10 grid grid-cols-2 gap-5 rounded-[24px] border border-[#2A2A30] bg-[#121212] p-6 sm:p-7 lg:grid-cols-4"
          >

            <div className="text-center">
              <h3 className="text-3xl font-black text-[#29B6F0]">
                10+
              </h3>
              <p className="mt-1 text-sm text-[#A0A0A8]">
                Hospitals
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-[#3E7BD6]">
                50K+
              </h3>
              <p className="mt-1 text-sm text-[#A0A0A8]">
                Patients
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-[#7A4FD1]">
                24/7
              </h3>
              <p className="mt-1 text-sm text-[#A0A0A8]">
                Monitoring
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-[#B93FC9]">
                AI
              </h3>
              <p className="mt-1 text-sm text-[#A0A0A8]">
                Automation
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =======================================================
          PREMIUM CTA
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-12 sm:py-14 lg:py-8">

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#121212]"
          >

            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">

              {/* LEFT */}

              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[#1A1A1E] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
                  BEAVERHEALTHAI
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">

                  Smart Healthcare{" "}

                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: gradient,
                    }}
                  >
                    Platform
                  </span>

                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#A0A0A8] sm:text-[16px]">
                  BeaverHealthAI is an intelligent healthcare platform engineered by
                  BeaverTek to automate clinical workflows, enhance patient care,
                  deliver predictive analytics, and provide secure AI-powered digital
                  healthcare solutions for hospitals and healthcare organizations.
                </p>

                <div className="mt-7">

                  <Link
                    href="https://beaverhealth.ai"
                    target="_blank"
                    className="group inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: gradient,
                    }}
                  >
                    Visit BeaverHealthAI

                    <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                </div>

              </div>


              {/* RIGHT IMAGE */}

              <div className="relative flex items-center justify-center px-7 pb-8 sm:px-9 lg:px-10 lg:py-10">

                <div className="relative">

                  {/* Image */}

                  <div
                    className="relative overflow-hidden border border-[#2A2A30] bg-[#1A1A1E] shadow-[0_25px_60px_rgba(0,0,0,.40)]"
                    style={{
                      borderRadius:
                        "38% 62% 58% 42% / 42% 35% 65% 58%",
                    }}
                  >

                    <Image
                      src="/home/abouthero1.png"
                      alt="BeaverHealthAI"
                      width={520}
                      height={430}
                      priority
                      className="w-full max-w-[400px] object-cover transition-transform duration-700 hover:scale-105"
                    />

                  </div>


                  {/* Floating Card */}

                  <div className="absolute -left-4 top-5 rounded-xl border border-[#2A2A30] bg-[#121212] px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,.35)] sm:-left-8">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#29B6F0]">
                      AI Powered
                    </p>

                    <h4 className="mt-1 text-base font-bold text-white">
                      Healthcare
                    </h4>

                  </div>


                  {/* Floating Badge */}

                  <div
                    className="absolute -right-4 bottom-5 rounded-full px-5 py-3 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,.35)] sm:-right-7"
                    style={{
                      background: gradient,
                    }}
                  >
                    Secure Platform
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =======================================================
          RELATIONSHIP SECTION
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-16">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#3E7BD6 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">

          <div
            data-aos="zoom-in"
            className="overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#121212] p-7 sm:p-9 lg:p-12"
          >

            {/* Top Gradient */}

            <div
              className="mx-auto h-1 w-24 rounded-full"
              style={{
                background: gradient,
              }}
            />

            {/* Logo Circle */}

            <div className="mt-7 flex justify-center">

              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: gradient,
                }}
              >
                <span className="text-3xl">
                  🚀
                </span>
              </div>

            </div>


            {/* Heading */}

            <h2 className="mt-7 text-center text-3xl font-black text-white sm:text-4xl">

              Built by{" "}

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: gradient,
                }}
              >
                BeaverTek
              </span>

            </h2>


            {/* Description */}

            <p className="mx-auto mt-5 max-w-3xl text-center text-[15px] leading-7 text-[#D4D4D8] sm:text-lg sm:leading-8">

              <span className="font-semibold text-white">
                BeaverHealthAI
              </span>{" "}
              is a flagship product of
              <span className="font-semibold text-white">
                {" "}BeaverTek
              </span>,
              designed, engineered and continuously operated by our in-house
              product team. Every feature reflects our expertise in AI,
              cloud-native architecture, healthcare workflows and enterprise
              software engineering.

            </p>


            {/* Feature Chips */}

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">

              {[
                "AI Powered",
                "Healthcare",
                "Cloud Native",
                "Enterprise Security",
                "Scalable Platform",
                "Built by BeaverTek",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-full border border-[#2A2A30] bg-[#1A1A1E] px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#3E7BD6] sm:text-sm"
                >
                  {item}
                </div>

              ))}

            </div>


            {/* Divider */}

            <div className="my-9 h-px w-full bg-[#2A2A30]" />


            {/* Stats */}

            <div className="grid gap-6 text-center md:grid-cols-3">

              <div>

                <h3
                  className="bg-clip-text text-3xl font-black text-transparent sm:text-4xl"
                  style={{
                    backgroundImage: gradient,
                  }}
                >
                  AI
                </h3>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  Driven Innovation
                </p>

              </div>


              <div>

                <h3
                  className="bg-clip-text text-3xl font-black text-transparent sm:text-4xl"
                  style={{
                    backgroundImage: gradient,
                  }}
                >
                  24/7
                </h3>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  Reliable Platform
                </p>

              </div>


              <div>

                <h3
                  className="bg-clip-text text-3xl font-black text-transparent sm:text-4xl"
                  style={{
                    backgroundImage: gradient,
                  }}
                >
                  100%
                </h3>

                <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#A0A0A8]">
                  BeaverTek Built
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}