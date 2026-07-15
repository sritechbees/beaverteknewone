"use client";

import { motion } from "framer-motion";

export default function WhoThisIsForSection() {
  return (
<section className="relative overflow-hidden bg-[#000000] py-24 lg:py-28">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

    <div className="absolute top-20 right-0 h-[32rem] w-[32rem] rounded-full bg-[#3E7BD6]/10 blur-[170px]" />

    <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.04)_1px,transparent_1px)] bg-[size:52px_52px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-24">

    {/* ================= WHO THIS IS FOR ================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      data-aos="fade-up"
      data-aos-duration="900"
      className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
    >

      {/* Left */}

      <div>

        <span className="inline-flex rounded-full border border-[#3E7BD6]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

          WHO THIS IS FOR

        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">

          <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">

            Built for teams

          </span>

          <br />

          <span className="text-white">

            who need more than off-the-shelf software

          </span>

        </h2>

      </div>

      {/* Right */}

      <motion.div
        whileHover={{ y: -8 }}
        data-aos="fade-left"
        data-aos-delay="200"
        className="relative overflow-hidden rounded-[30px] border border-[#2A2A30] bg-[#121212]/90 p-8 shadow-[0_20px_50px_rgba(0,0,0,.40)] backdrop-blur-xl transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.30)]"
      >

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#29B6F0]/10 blur-[80px]" />

        <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-[#B93FC9]/10 blur-[80px]" />

        <p className="relative text-lg leading-9 text-[#D4D4D8]">

          Companies with a specific workflow, customer experience, or product idea
          that off-the-shelf software cannot deliver. Founders going from idea to MVP.
          Teams replacing a tangle of manual tools with one purpose-built application.

        </p>

      </motion.div>

    </motion.div>

    {/* ================= PROOF ================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      data-aos="fade-up"
      data-aos-duration="900"
      className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
    >

      {/* Left */}

      <div>

        <span className="inline-flex rounded-full border border-[#7A4FD1]/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">

          PROOF

        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">

            Real products,

          </span>

          <br />

          <span className="text-white">

            real scale, real impact

          </span>

        </h2>

      </div>

      {/* Right */}

      <motion.div
        whileHover={{ y: -8 }}
        data-aos="fade-right"
        data-aos-delay="200"
        className="relative overflow-hidden rounded-[30px] border border-[#2A2A30] bg-[#121212]/90 p-8 shadow-[0_20px_50px_rgba(0,0,0,.40)] backdrop-blur-xl transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.30)]"
      >

        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#29B6F0]/10 blur-[90px]" />

        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#B93FC9]/10 blur-[90px]" />

        <p className="mb-8 text-lg leading-8 text-[#D4D4D8]">

          We have taken products from concept to working software across multiple industries:

        </p>

        <div className="space-y-5">

          {[
            "A payment gateway platform now processing millions of transactions monthly",
            "AI-powered healthcare applications used in real hospitals",
            "A mobile advertising app",
            "Patient intake and preventive care systems integrated into BeaverHealthAI",
          ].map((item, index) => (

            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group flex items-start gap-4 rounded-2xl border border-[#2A2A30] bg-[#1A1A1E] p-5 transition-all duration-500 hover:border-[#3E7BD6] hover:bg-[#121212]"
            >

              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] text-sm font-bold text-white shadow-[0_0_20px_rgba(62,123,214,.35)]">

                ✓

              </div>

              <p className="text-[#D4D4D8] leading-7">

                {item}

              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </motion.div>

  </div>

</section>
  );
}