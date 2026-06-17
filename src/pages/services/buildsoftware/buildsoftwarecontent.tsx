"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Workflow,
  Boxes,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Customer-facing web applications and portals",
  },
  {
    icon: Smartphone,
    title: "Mobile apps for iOS and Android",
  },
  {
    icon: Workflow,
    title: "Internal tools and operational software for your team",
  },
  {
    icon: Boxes,
    title: "API integrations between systems that need to share data",
  },
  {
    icon: Code2,
    title: "Platform builds — from architecture to launch",
  },
];

export default function BuildSoftwareContent() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E8EFF4] blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#6B91AD]/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8EFF420_1px,transparent_1px),linear-gradient(to_bottom,#E8EFF420_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B91AD]">
            WHAT IT IS
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#161E2F] md:text-5xl">
            Build Software
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-[#1A1A1A]/80">
            <p>
              Sometimes off-the-shelf software does not fit the business. The
              workflow is too specific. The integration is too tight. The
              customer experience needs to be your own. That is when you need a
              partner who can build.
            </p>

            <p>
              We design and engineer custom web and mobile applications — and
              we stay with them through launch and beyond.
            </p>
          </div>
        </motion.div>

        {/* ================= WHAT THIS LOOKS LIKE ================= */}

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#6B91AD]">
              WHAT THIS LOOKS LIKE
            </span>

            <h3 className="mt-6 text-3xl font-bold text-[#161E2F]">
              Solutions We Build
            </h3>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-[#E8EFF4] bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#6B91AD] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#161E2F] text-white transition-all duration-300 group-hover:bg-[#6B91AD]">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-8 text-xl font-semibold leading-8 text-[#161E2F]">
                    {service.title}
                  </h4>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-8 flex items-center gap-2 text-[#6B91AD] font-semibold"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== Part 2 starts after this ===== */}
        
      </div>
    </section>
    
  );
}