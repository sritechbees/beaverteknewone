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

export default function ServicesHub() {
  return (
  
<section className="relative overflow-hidden bg-[#0A0A0A]">

  {/* part-1 */}

  {/* Background Decoration */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#29B6F0]/15 blur-3xl" />
    <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#3E7BD6]/12 blur-3xl" />
    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B93FC9]/12 blur-3xl" />
  </div>

  <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 sm:pt-24 lg:px-8 lg:pt-32">

    {/* Hero */}
    <div
      className="mx-auto max-w-4xl text-center"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wider text-[#29B6F0] backdrop-blur-md">
  WHAT WE DO
</span>

<h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Four things,
  </span>
  <br />
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    done well.
  </span>
</h1>

      <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-[#D4D4D8] sm:text-xl">
        BeaverTek is built around four core practices.
        Every engagement starts in one of these —
        and most clients eventually use more than one.
      </p>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#A0A0A8]">
        We keep the list short on purpose.
        You will not find us pretending to do everything.
      </p>
    </div>

        {/* part-2 */}

{/* Services Grid */}
<div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        data-aos="fade-up"
        data-aos-delay={index * 120}
        data-aos-duration="900"
        className="group relative"
      >
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#29B6F0]/20 via-[#3E7BD6]/20 via-[#7A4FD1]/20 to-[#B93FC9]/20 opacity-0 blur-xl transition duration-700 group-hover:opacity-100" />

        {/* Card */}
        <div className="relative flex h-full flex-col rounded-3xl border border-[#2A2A30] bg-[#121212]/95 p-8 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-3 hover:border-[#3E7BD6] hover:shadow-[0_0_40px_rgba(62,123,214,.35)]">

          {/* Number */}
          <span className="absolute right-6 top-6 text-5xl font-black text-[#2A2A30] group-hover:text-[#7A4FD1]/40">
            0{index + 1}
          </span>

          {/* Icon */}
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] text-white shadow-[0_0_30px_rgba(62,123,214,.35)] transition duration-500 group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-[#FFFFFF]">
            {service.title}
          </h3>

          {/* Divider */}
          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] group-hover:w-24 transition-all duration-500" />

          {/* Description */}
          <p className="mt-6 flex-1 text-base leading-8 text-[#A0A0A8]">
            {service.description}
          </p>

          {/* CTA */}
          <Link
            href={service.href}
            className="mt-10 inline-flex items-center gap-2 font-semibold text-[#29B6F0] transition-all duration-300 group-hover:gap-4 group-hover:text-[#B93FC9]"
          >
            Learn More

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    );
  })}
</div>

{/* part-3 */}

{/* How We Work */}
<div className="mt-32" data-aos="fade-up" data-aos-duration="1000">
  <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#2A2A30] bg-[#121212] shadow-[0_25px_60px_rgba(0,0,0,.45)]">

    <div className="grid gap-0 lg:grid-cols-2">

      {/* Left Content */}
      <div className="p-10 sm:p-14 lg:p-16">

        <span className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-[#29B6F0] backdrop-blur-md">
          HOW WE WORK
        </span>

        <h2 className="mt-8 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
          Senior people.
          <br />
          Practical delivery.
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

        <p className="mt-8 text-lg leading-8 text-[#D4D4D8]">
          Technology projects succeed when experienced people stay
          involved from planning through delivery. That's why every
          BeaverTek engagement is led by senior consultants who focus
          on outcomes—not unnecessary complexity.
        </p>

        <p className="mt-8 text-lg leading-8 text-[#A0A0A8]">
          Whether we're modernizing infrastructure, building software,
          improving data visibility, or strengthening cybersecurity,
          our process stays collaborative, transparent, and measurable.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 transition-all duration-500 hover:border-[#3E7BD6] hover:bg-[#121212] hover:shadow-[0_0_40px_rgba(62,123,214,.35)]">
            <h4 className="font-bold text-white">
              Discover
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#A0A0A8]">
              Understand your business, systems, goals, and challenges
              before recommending technology.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 transition-all duration-500 hover:border-[#3E7BD6] hover:bg-[#121212] hover:shadow-[0_0_40px_rgba(62,123,214,.35)]">
            <h4 className="font-bold text-white">
              Design
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#A0A0A8]">
              Create scalable architectures and implementation plans
              tailored to your organization.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 transition-all duration-500 hover:border-[#3E7BD6] hover:bg-[#121212] hover:shadow-[0_0_40px_rgba(62,123,214,.35)]">
            <h4 className="font-bold text-white">
              Deliver
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#A0A0A8]">
              Build, deploy, migrate, and integrate with minimal
              disruption to business operations.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 transition-all duration-500 hover:border-[#B93FC9] hover:bg-[#121212] hover:shadow-[0_0_60px_rgba(185,63,201,.30)]">
            <h4 className="font-bold text-white">
              Improve
            </h4>

            <p className="mt-2 text-sm leading-7 text-[#A0A0A8]">
              Monitor, optimize, and continuously improve performance,
              security, and reliability.
            </p>
          </div>

        </div>
      </div>

            {/* Right Side */}
<div className="relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#121212] via-[#3E7BD6] to-[#7A4FD1] p-12 text-white">

  {/* Background Glow */}
  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#29B6F0]/20 blur-3xl" />
  <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#B93FC9]/20 blur-3xl" />

  <div className="relative z-10">

    <h3 className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-3xl font-black text-transparent">
      Why clients choose BeaverTek
    </h3>

    <div className="mt-10 space-y-8">

      <div className="flex gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3E7BD6]/40 bg-white/10 text-xl font-bold text-[#29B6F0] backdrop-blur-md shadow-[0_0_25px_rgba(62,123,214,.30)]">
          01
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Senior expertise
          </h4>

          <p className="mt-2 leading-7 text-[#D4D4D8]">
            Experienced consultants stay engaged throughout the
            project—not just during sales.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7A4FD1]/40 bg-white/10 text-xl font-bold text-[#7A4FD1] backdrop-blur-md shadow-[0_0_25px_rgba(122,79,209,.30)]">
          02
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Business-first thinking
          </h4>

          <p className="mt-2 leading-7 text-[#D4D4D8]">
            Every recommendation is aligned with measurable
            business outcomes.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#B93FC9]/40 bg-white/10 text-xl font-bold text-[#B93FC9] backdrop-blur-md shadow-[0_0_30px_rgba(185,63,201,.35)]">
          03
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Long-term partnership
          </h4>

          <p className="mt-2 leading-7 text-[#D4D4D8]">
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

               {/* part-4 */}

{/* Premium CTA */}
<div
  className="relative mt-32 overflow-hidden rounded-[2.5rem] border border-[#2A2A30] bg-gradient-to-br from-[#0A0A0A] via-[#121212] via-[#3E7BD6] to-[#7A4FD1] px-8 py-20 text-center shadow-[0_25px_60px_rgba(0,0,0,.45)]"
  data-aos="zoom-in"
  data-aos-duration="1000"
>
  {/* Animated Background Glow */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-[#29B6F0]/20 blur-[120px]" />

    <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/20 blur-[120px]" />

    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/10 blur-[140px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-3xl">

    {/* Badge */}
    <span className="inline-flex rounded-full border border-[#3E7BD6]/40 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-[#29B6F0] backdrop-blur-md">
      LET'S BUILD TOGETHER
    </span>

    {/* Heading */}
    <h2 className="mt-8 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-4xl font-black text-transparent sm:text-5xl lg:text-6xl">
      Technology that works.
      <br />
      Partners you can trust.
    </h2>

    {/* Description */}
    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#D4D4D8]">
      Whether you're modernizing legacy systems, building custom
      software, unlocking insights from your data, or improving
      cybersecurity, BeaverTek helps you move forward with confidence.
    </p>

    {/* Buttons */}
    <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

      <Link
        href="/contact/contacthero"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(62,123,214,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(185,63,201,.40)]"
      >
        Start Your Project
        <ArrowRight className="h-5 w-5" />
      </Link>

      <Link
        href="/services/serviceshero"
        className="inline-flex items-center justify-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#B93FC9] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(185,63,201,.25)]"
      >
        Explore Services
      </Link>

    </div>

  </div>
</div>

{/* Floating Decorations */}

<div className="pointer-events-none absolute left-10 top-40 h-5 w-5 rounded-full bg-[#29B6F0]/40 blur-md animate-pulse" />

<div className="pointer-events-none absolute right-24 top-80 h-6 w-6 rounded-full bg-[#7A4FD1]/40 blur-md animate-pulse delay-300" />

<div className="pointer-events-none absolute bottom-24 left-1/3 h-5 w-5 rounded-full bg-[#B93FC9]/40 blur-md animate-pulse delay-700" />

</div>
</section>
  );
}
