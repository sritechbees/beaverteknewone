"use client";

import App_layout from "@/component/layout/app_layout";
import { Cpu } from "lucide-react";

export default function ModernizeContent() {
  return (
    
 
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#E8EFF4] py-24">
  
  
  {/*part-1*/}
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#6B91AD]/10 blur-3xl animate-pulse" />

        <div className="absolute right-0 top-40 h-[32rem] w-[32rem] rounded-full bg-[#161E2F]/5 blur-3xl" />

        <div className="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#23314F]/10 blur-3xl" />

        <div className="absolute left-32 top-52 h-3 w-3 rounded-full bg-[#6B91AD]/40 animate-ping" />

        <div className="absolute right-32 bottom-52 h-4 w-4 rounded-full bg-[#23314F]/30 animate-pulse" />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Number */}
        <div
          className="absolute left-10 top-20 hidden select-none text-[10rem] font-black text-[#E8EFF4] lg:block"
          data-aos="fade-right"
        >
          01
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="relative z-10"
          >

            <span className="inline-flex items-center rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold tracking-widest text-[#23314F]">
              WHAT IT IS
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-[#161E2F] lg:text-5xl">
              Modernization isn't
              <br />
              replacing everything.
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD]" />

            <p className="mt-10 text-lg leading-9 text-[#1A1A1A]/80">
              Most small and mid-size businesses are running on a mix of old
              and new — a 15-year-old ERP, a custom Access database from 2009,
              spreadsheets running critical processes, a website that hasn't
              been touched in years.
            </p>

            <p className="mt-8 text-lg leading-9 text-[#1A1A1A]/80">
              Modernization is the work of pulling that landscape into a
              coherent, current system that your team can actually use.
            </p>

          </div>

          {/* Right Premium Card */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="relative"
          >

            {/* Glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-[#161E2F]/10 via-[#6B91AD]/10 to-[#23314F]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-10 shadow-2xl backdrop-blur-xl">

              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#161E2F] to-[#6B91AD] shadow-xl">

                <Cpu className="h-10 w-10 text-white" />

              </div>

              <h3 className="mt-10 text-3xl font-black text-[#161E2F]">
                Legacy + Modern
              </h3>

              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD]" />

              <p className="mt-8 text-lg leading-9 text-[#1A1A1A]/75">
                Most organizations don't start from zero. Modernization means
                improving what already exists while protecting the systems your
                business depends on every day.
              </p>

              {/* Bottom Features */}

              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-5 transition hover:translate-x-2">

                  <div className="h-3 w-3 rounded-full bg-[#6B91AD]" />

                  <span className="font-medium text-[#23314F]">
                    Existing systems remain operational
                  </span>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-5 transition hover:translate-x-2">

                  <div className="h-3 w-3 rounded-full bg-[#6B91AD]" />

                  <span className="font-medium text-[#23314F]">
                    Modern platforms improve productivity
                  </span>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-5 transition hover:translate-x-2">

                  <div className="h-3 w-3 rounded-full bg-[#6B91AD]" />

                  <span className="font-medium text-[#23314F]">
                    Planned migrations reduce business risk
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
               
               
                {/*part-2*/}
              {/* ============================= */}
        {/* What this looks like in practice */}
        {/* ============================= */}

        <div className="relative mt-32">

          {/* Background Number */}
          <div
            className="absolute right-0 -top-16 hidden select-none text-[10rem] font-black text-[#E8EFF4] lg:block"
            data-aos="fade-left"
          >
            02
          </div>

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="inline-flex rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold tracking-widest text-[#23314F]">
              WHAT THIS LOOKS LIKE IN PRACTICE
            </span>

            <h2 className="mt-8 text-4xl font-black text-[#161E2F] lg:text-5xl">
              Real modernization work
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD]" />
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              "Migrating from on-premise servers to a modern cloud platform",

              "Replacing fragile spreadsheets with a real application",

              "Moving from a legacy ERP or CRM to a current platform",

              "Rebuilding a website or internal tool that has outlived its usefulness",

              "Connecting disconnected systems so they finally talk to each other",
            ].map((item, index) => (

              <div
                key={item}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className={`group relative overflow-hidden rounded-[28px] border border-[#E8EFF4] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#6B91AD]/40 hover:shadow-2xl ${
                  index === 4 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >

                {/* Card Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#6B91AD]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-6xl font-black text-[#E8EFF4] transition group-hover:text-[#6B91AD]/20">
                  0{index + 1}
                </div>

                {/* Accent Line */}
                <div className="mb-8 h-1 w-14 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD] transition-all duration-500 group-hover:w-28" />

                <p className="relative z-10 text-lg leading-9 text-[#1A1A1A]/80">
                  {item}
                </p>

                {/* Hover Bar */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#161E2F] to-[#6B91AD] transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>
        {/* ============================= */}
        {/* Connecting Timeline */}
        {/* ============================= */}

        <div className="relative mt-36">

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#6B91AD]/40 via-[#23314F]/30 to-transparent lg:block" />

          {[
            {
              title: "Assess",
              desc: "Understand the current technology landscape.",
            },
            {
              title: "Plan",
              desc: "Create a practical modernization roadmap.",
            },
            {
              title: "Execute",
              desc: "Deliver improvements with minimal disruption.",
            },
            {
              title: "Support",
              desc: "Stay through transition until everything works.",
            },
          ].map((step, index) => (

            <div
              key={step.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div className="w-full lg:w-[46%]">

                <div className="rounded-[28px] border border-[#E8EFF4] bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#161E2F] to-[#6B91AD] text-xl font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-black text-[#161E2F]">
                    {step.title}
                  </h3>

                  <div className="mt-4 h-1 w-16 rounded-full bg-[#6B91AD]" />

                  <p className="mt-6 text-lg leading-8 text-[#1A1A1A]/75">
                    {step.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ============================= */}
{/* PART - 3 */}
{/* Why Modernization Matters */}
{/* ============================= */}

<div className="relative mt-40">

  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#6B91AD]/10 blur-[140px]" />

    <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#161E2F]/10 blur-[160px]" />

  </div>

  {/* Section Number */}

  <div
    className="absolute left-0 -top-16 hidden select-none text-[10rem] font-black text-[#E8EFF4] lg:block"
    data-aos="fade-right"
  >
    03
  </div>

  {/* Heading */}

  <div
    className="mx-auto max-w-3xl text-center"
    data-aos="fade-up"
  >

    <span className="inline-flex rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold tracking-[0.25em] text-[#23314F]">
      WHY IT MATTERS
    </span>

    <h2 className="mt-8 text-4xl font-black text-[#161E2F] lg:text-5xl">
      Modern technology creates
      <br />
      better business outcomes
    </h2>

    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD]" />

    <p className="mt-8 text-lg leading-9 text-[#1A1A1A]/80">
      Modernization isn't about technology alone.
      It's about making your organization faster,
      more reliable and ready for future growth.
    </p>

  </div>

  {/* Cards */}

  <div className="mt-24 grid gap-8 lg:grid-cols-2">

    {[
      {
        title: "Increase Productivity",
        desc:
          "Automate repetitive work and give employees modern tools that reduce manual effort."
      },
      {
        title: "Reduce Operational Risk",
        desc:
          "Replace unsupported legacy platforms before they become security or reliability problems."
      },
      {
        title: "Improve Customer Experience",
        desc:
          "Deliver faster services, better digital experiences and smoother customer journeys."
      },
      {
        title: "Scale With Confidence",
        desc:
          "Cloud-ready systems make it easier to grow without rebuilding everything later."
      }
    ].map((item, index) => (

      <div

        key={item.title}

        data-aos="fade-up"

        data-aos-delay={index * 150}

        className="group relative overflow-hidden rounded-[32px] border border-[#E8EFF4] bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"

      >

        {/* Glow */}

        <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#6B91AD]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Top Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#161E2F] via-[#23314F] to-[#6B91AD] text-3xl font-black text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">

          {index + 1}

        </div>

        <h3 className="mt-8 text-3xl font-black text-[#161E2F]">
          {item.title}
        </h3>

        <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#161E2F] to-[#6B91AD] transition-all duration-500 group-hover:w-28" />

        <p className="mt-8 text-lg leading-9 text-[#1A1A1A]/75">
          {item.desc}
        </p>

        <div className="mt-10 flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-[#6B91AD]" />

          <span className="text-sm font-semibold uppercase tracking-wider text-[#23314F]">
            Business Value
          </span>

        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#161E2F] to-[#6B91AD] transition-all duration-500 group-hover:w-full" />

      </div>

    ))}

  </div>

  {/* Bottom Premium Banner */}

  <div

    className="relative mt-28 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#161E2F] via-[#23314F] to-[#161E2F] px-10 py-16 shadow-2xl"

    data-aos="zoom-in"

  >

    <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#6B91AD]/20 blur-[120px]" />

    <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

    <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

      <div>

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8EFF4]">
          Future Ready
        </span>

        <h3 className="mt-8 text-4xl font-black leading-tight text-white">
          Technology should
          <br />
          accelerate your business,
          <br />
          not slow it down.
        </h3>

      </div>

      <div className="space-y-6">

        {[
          "Modern cloud infrastructure",

          "Better security & compliance",

          "Reliable integrations",

          "Lower maintenance costs"

        ].map((item) => (

          <div

            key={item}

            className="flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-md transition hover:translate-x-3"

          >

            <div className="h-4 w-4 rounded-full bg-[#6B91AD]" />

            <span className="text-lg text-white">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>

</div>

</section>
 );
}