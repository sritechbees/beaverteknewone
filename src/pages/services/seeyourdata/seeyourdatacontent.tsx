"use client";

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
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 left-0 h-96 w-96 rounded-full bg-[#E8EFF4] blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#6B91AD]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B91AD]">
            See Your Data
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#161E2F] md:text-5xl">
            Stop Guessing.
            <br />
            Start Making Better Decisions.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#1A1A1A]/80">
            Most businesses have more data than they realize — sitting in their
            CRM, accounting system, support tickets, website, and devices.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#1A1A1A]/80">
            The problem is rarely the data. It is the lack of one place to see
            it and one way to act on it.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#1A1A1A]/80">
            We build the layer that connects, cleans, and presents that data —
            so you can stop guessing and start deciding.
          </p>
        </motion.div>

        {/* What This Looks Like */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h3 className="text-3xl font-bold text-[#161E2F]">
              What This Looks Like In Practice
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#1A1A1A]/70">
              Everything is designed around helping you understand your
              business—not creating more reports.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group rounded-3xl border border-[#E8EFF4] bg-white p-8 shadow-lg transition-all hover:border-[#6B91AD] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#161E2F] text-white transition-all group-hover:bg-[#6B91AD]">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-8 text-2xl font-semibold text-[#161E2F]">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-8 text-[#1A1A1A]/75">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Data Pipeline Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-[#161E2F] to-[#23314F] p-10 text-white shadow-2xl lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B91AD]">
                Connected Data
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                Data Pipelines That Keep Everything Connected
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/80">
                We build data pipelines that move information cleanly between
                systems, keeping every dashboard and report accurate, reliable,
                and always up to date.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">
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
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="text-[#6B91AD]" size={22} />

                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who This Is For */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#161E2F]">
              Who This Is For
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#1A1A1A]/75">
              Designed for business leaders who need confidence in their numbers
              and visibility into what is happening across the business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {audience.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 rounded-2xl border border-[#E8EFF4] bg-[#F8FBFD] p-6"
              >
                <CheckCircle2
                  className="mt-1 text-[#6B91AD]"
                  size={22}
                />

                <p className="text-lg text-[#1A1A1A]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Proof */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 rounded-[32px] border border-[#E8EFF4] bg-[#F8FBFD] p-12 text-center shadow-xl"
        >
          <span className="rounded-full bg-[#E8EFF4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B91AD]">
            Proof
          </span>

          <h3 className="mt-6 text-3xl font-bold text-[#161E2F]">
            Trusted Experience Across Industries
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#1A1A1A]/75">
            Our team has built data, analytics, and business intelligence
            solutions for Fortune 500 companies across multiple industries—and
            we apply the same discipline to mid-size businesses every day.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-[#161E2F] px-10 py-16 text-center text-white"
        >
          <h3 className="text-4xl font-bold">
            Show Me What's Possible With My Data
          </h3>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#6B91AD] px-8 py-4 text-lg font-semibold transition-all hover:scale-105 hover:bg-white hover:text-[#161E2F]">
            Get Started
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}