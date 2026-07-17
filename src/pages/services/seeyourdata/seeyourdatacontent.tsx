"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  LineChart,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Executive dashboards",
    description:
      "Show the numbers that actually matter to your business with clear, interactive dashboards.",
  },
  {
    icon: Database,
    title: "Operational reports",
    description:
      "Reliable reports your team can trust instead of rebuilding spreadsheets every Monday.",
  },
  {
    icon: LineChart,
    title: "Custom analytics",
    description:
      "Analytics designed around your unique business questions, goals, and KPIs.",
  },
  {
    icon: Activity,
    title: "Real-time visibility",
    description:
      "Track sales, operations, customer behavior, and other critical metrics in real time.",
  },
];

const audience = [
  "Leaders who are flying half-blind",
  "CFOs who want a real number, not a guess",
  "Operations heads who need to know what is happening right now",
  "Founders who want one dashboard instead of seven tabs",
];

export default function SeeYourDataContent() {
  const [activeCard, setActiveCard] = useState(0);


  return (
   <section className="relative overflow-hidden bg-[#0A0A0A] py-20 lg:py-28">
  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

    <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#7A4FD1]/10 blur-[150px]" />

    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      data-aos="fade-up"
      data-aos-duration="900"
      className="text-center"
    >

      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
        SEE YOUR DATA
      </span>

      {/* Heading */}
      <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Stop Guessing.
        <br />
        <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
          Make Smarter Decisions.
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]" />

      {/* Content Card */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-12 rounded-[28px] border border-[#2A2A30] bg-[#121212] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-sm transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_40px_rgba(62,123,214,.20)]"
      >

        <p className="text-lg leading-8 text-[#D4D4D8]">
          Most businesses already have valuable data spread across their
          CRM, accounting software, support systems, websites, and internal
          applications.
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]" />

        <p className="text-lg leading-8 text-[#D4D4D8]">
          The challenge isn't collecting more data—it's bringing everything
          together into one clear, connected view.
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]" />

        <p className="text-lg leading-8 text-[#D4D4D8]">
          BeaverTek connects, organizes, and visualizes your business data
          so you can stop guessing and start deciding.
        </p>

      </div>

    </motion.div>

  

  

        {/* ========================= */}
{/* What This Looks Like */}
{/* ========================= */}

<div className="mt-24">

  {/* Heading */}
  <div
    className="mb-14 text-center"
    data-aos="fade-up"
    data-aos-duration="900"
  >
    <span className="inline-flex rounded-full border border-[#3E7BD6]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
      IN PRACTICE
    </span>

    <h3 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
      What This Looks Like
    </h3>

    <p className="mx-auto mt-5 max-w-3xl text-[#96969e]">
      Everything is designed around helping you understand your business —
      not creating more reports.
    </p>
  </div>

  <div className="grid gap-10 lg:grid-cols-2">

    {/* LEFT IMAGE */}
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="relative overflow-hidden rounded-[32px]"
    >
      <img
        src="/home/dataanalytics.jpg"
        alt="Business Analytics"
        className="h-full min-h-[520px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-8 left-8 right-8">

        <span className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#29B6F0] backdrop-blur">
          LIVE INSIGHTS
        </span>

        <h4 className="mt-5 text-3xl font-bold text-white">
          Connected Business Intelligence
        </h4>

      </div>

    </div>

    {/* RIGHT ACCORDION */}
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="space-y-5"
    >

      {features.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            className={`rounded-3xl border transition-all duration-500 cursor-pointer
            ${
              activeCard === index
                ? "border-[#3E7BD6] bg-[#121212] shadow-[0_0_35px_rgba(62,123,214,.18)]"
                : "border-[#2A2A30] bg-[#0A0A0A]"
            }`}
          >

            <div className="flex items-center gap-5 p-6">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all
                ${
                  activeCard === index
                    ? "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] text-white"
                    : "bg-white/5 text-[#24bbf7]"
                }`}
              >
                <Icon size={26} />
              </div>

              <div className="flex-1">

                <h4
                  className={`text-xl font-semibold transition-all
                  ${
                    activeCard === index
                      ? "text-white"
                      : "text-[#D4D4D8]"
                  }`}
                >
                  {item.title}
                </h4>

                <div
                  className={`overflow-hidden transition-all duration-500
                  ${
                    activeCard === index
                      ? "mt-4 max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-8 text-[#A0A0A8]">
                    {item.description}
                  </p>
                </div>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  </div>

</div>

       {/* Data Pipeline Highlight */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="mt-24 rounded-[36px] border border-[#2A2A30] bg-[#121212] p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,.45)] lg:p-14"
>
  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

    <div>
     <span
  className="
    inline-flex
    items-center
    rounded-full
    border
    border-[#3E7BD6]/40
    bg-white/5
    px-4
    py-2
    text-sm
    font-semibold
    uppercase
    tracking-[0.2em]
    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
    bg-clip-text
    text-transparent
  "
>
  Connected Data
</span>

<h3 className="mt-6 text-4xl font-bold leading-tight">
  <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
    Data Pipelines
  </span>

  <br />

  <span className="text-white">
    That Keep Everything Connected
  </span>
</h3>

      <p className="mt-6 text-lg leading-8 text-[#A0A0A8]">
        We build data pipelines that move information cleanly between
        systems, keeping every dashboard and report accurate, reliable,
        and always up to date.
      </p>
    </div>

    <div className="rounded-3xl border border-[#2A2A30] bg-[#1A1A1E] p-8 backdrop-blur">
      <div className="space-y-5">

        {[
          "CRM",
          "Accounting System",
          "Support Tickets",
          "Website",
          "Devices",
        ].map((item, i) => (

          <motion.div
            key={i}
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition-all duration-300 hover:border-[#3E7BD6] hover:bg-[#1A1A1E]"
          >

            <CheckCircle2
              className="text-[#29B6F0]"
              size={22}
            />

            <span className="font-medium text-[#D4D4D8]">
              {item}
            </span>

          </motion.div>

        ))}

      </div>
    </div>

  </div>
</motion.div>

       {/* ============================= */}
{/* Who This Is For */}
{/* ============================= */}

<div className="mt-24 grid gap-16 lg:grid-cols-2 lg:items-center">

  {/* Left */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    data-aos="fade-right"
    data-aos-duration="1000"
  >

    <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
      Who This Is For
    </span>

    <h3 className="mt-6 text-3xl font-bold leading-tight">
      <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
        Built for
      </span>
      <br />
      <span className="text-white">
        Modern Business Leaders
      </span>
    </h3>

    <p className="mt-6 text-lg leading-8 text-[#A0A0A8]">
      Designed for business leaders who need confidence in their numbers
      and visibility into what is happening across the business.
    </p>

  </motion.div>

  {/* Right */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    data-aos="fade-left"
    data-aos-duration="1000"
    className="space-y-5"
  >

    {audience.map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ x: 8 }}
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="flex items-start gap-4 rounded-2xl border border-[#2A2A30] bg-[#121212] p-6 transition-all duration-300 hover:border-[#3E7BD6] hover:bg-[#1A1A1E] hover:shadow-[0_0_30px_rgba(62,123,214,.20)]"
      >

        <CheckCircle2
          className="mt-1 text-[#29B6F0]"
          size={22}
        />

        <p className="text-lg text-[#D4D4D8]">
          {item}
        </p>

      </motion.div>

    ))}

  </motion.div>

</div>

        {/* Proof */}
       <motion.div
  data-aos="zoom-in-up"
  data-aos-duration="1000"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative mt-24 overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212] p-8 shadow-[0_25px_60px_rgba(0,0,0,.45)] lg:p-12"
>
  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/10 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-5xl text-center">

    {/* Badge */}
    <span
      data-aos="fade-down"
      data-aos-delay="100"
      className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#29B6F0] backdrop-blur-md"
    >
      TRUSTED EXPERIENCE
    </span>

    {/* Heading */}
    <h3
      data-aos="fade-up"
      data-aos-delay="200"
      className="mt-7 text-3xl font-black leading-tight lg:text-5xl"
    >
      <span className="text-white">
        Proven Data &
      </span>

      <br />

      <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
        Analytics Expertise
      </span>

    </h3>

    {/* Divider */}
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      className="mx-auto mt-7 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]"
    />

    {/* Description */}
    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#A0A0A8] lg:text-lg"
    >
      Our consultants have delivered enterprise-grade data, analytics, and
      business intelligence solutions across multiple industries. We apply the
      same practical expertise to help growing businesses modernize, improve
      visibility, and make better decisions with confidence.
    </p>

    {/* Stats */}
    <div className="mt-14 grid gap-6 sm:grid-cols-3">

      {/* Card 1 */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="group rounded-3xl border border-[#2A2A30] bg-[#1A1A1E] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#29B6F0] hover:shadow-[0_0_40px_rgba(41,182,240,.25)]"
      >
        <h4 className="bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] bg-clip-text text-5xl font-black text-transparent">
          500+
        </h4>

        <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] transition-all duration-500 group-hover:w-20" />

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#D4D4D8]">
          Enterprise Projects
        </p>
      </div>

      {/* Card 2 */}
      <div
        data-aos="fade-up"
        data-aos-delay="650"
        className="group rounded-3xl border border-[#2A2A30] bg-[#1A1A1E] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#7A4FD1] hover:shadow-[0_0_40px_rgba(122,79,209,.25)]"
      >
        <h4 className="bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-5xl font-black text-transparent">
          20+
        </h4>

        <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] transition-all duration-500 group-hover:w-20" />

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#D4D4D8]">
          Industry Domains
        </p>
      </div>

      {/* Card 3 */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="group rounded-3xl border border-[#2A2A30] bg-[#1A1A1E] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B93FC9] hover:shadow-[0_0_40px_rgba(185,63,201,.25)]"
      >
        <h4 className="bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-5xl font-black text-transparent">
          100%
        </h4>

        <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] transition-all duration-500 group-hover:w-20" />

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#D4D4D8]">
          Business Focused
        </p>
      </div>

    </div>

  </div>
</motion.div>
        
      </div>
    </section>
  );
}