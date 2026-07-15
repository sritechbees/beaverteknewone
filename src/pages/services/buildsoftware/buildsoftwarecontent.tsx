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
    <section className="relative overflow-hidden bg-[#000000] py-24 lg:py-28">
      {/* Background */}
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#29B6F0]/15 blur-[130px]" />

        <div className="absolute top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3E7BD6]/15 blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.05)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
          data-aos-duration="900"
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">
            WHAT IT IS
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              Build Software
            </span>
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-9 text-[#D4D4D8]">
            <p>
              Sometimes off-the-shelf software does not fit the business. The
              workflow is too specific. The integration is too tight. The
              customer experience needs to be your own. That is when you need a
              partner who can build.
            </p>

            <p>
              We design and engineer custom web and mobile applications — and we
              stay with them through launch and beyond.
            </p>
          </div>
        </motion.div>

        {/* ================= WHAT THIS LOOKS LIKE ================= */}
        <div className="relative mt-24">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/10 blur-[150px]" />
          </div>

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            data-aos="zoom-in-up"
            data-aos-duration="900"
            className="text-center"
          >
            {/* Badge */}

            <span
              data-aos="zoom-in"
              data-aos-delay="100"
              className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] shadow-[0_0_20px_rgba(41,182,240,.18)] backdrop-blur-xl"
            >
              WHAT THIS LOOKS LIKE
            </span>

            {/* Title */}

            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-3xl font-black md:text-4xl"
            >
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
                Solutions We Build
              </span>
            </h3>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="mx-auto mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] shadow-[0_0_30px_rgba(62,123,214,.35)]"
            />
          </motion.div>

          {/* Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  data-aos={
                    index % 3 === 0
                      ? "fade-up"
                      : index % 3 === 1
                        ? "zoom-in-up"
                        : "fade-left"
                  }
                  data-aos-delay={index * 120}
                  data-aos-duration="900"
                  className="group relative overflow-hidden rounded-[28px] border border-[#2A2A30] bg-[#121212] p-8 shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-3 hover:border-[#3E7BD6] hover:shadow-[0_0_45px_rgba(62,123,214,.35)]"
                >
                  {/* Top Glow */}

                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#29B6F0]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Bottom Glow */}

                  <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#B93FC9]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] text-white shadow-[0_0_30px_rgba(62,123,214,.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={30} />
                  </div>

                  {/* Title */}

                  <h4 className="relative z-10 mt-8 text-xl font-bold leading-8 text-white transition-all duration-500 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent">
                    {service.title}
                  </h4>

                  {/* CTA */}

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative z-10 mt-8 flex items-center gap-2 font-semibold text-[#29B6F0] transition-all duration-300 group-hover:gap-4"
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.div>

                  {/* Bottom Border */}

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
