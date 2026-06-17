"use client";

import { motion } from "framer-motion";

export default function WhoThisIsForSection() {
  return (
    <section className="bg-[#161E2F] text-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* WHO THIS IS FOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-[#6B91AD] uppercase tracking-widest text-sm mb-3">
              Who this is for
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
              Built for teams who need more than off-the-shelf software
            </h2>
          </div>

          <div className="bg-[#23314F] p-6 md:p-8 rounded-2xl shadow-lg border border-[#23314F]/40">
            <p className="text-[#E8EFF4] leading-relaxed text-sm md:text-base">
              Companies with a specific workflow, customer experience, or product idea
              that off-the-shelf software cannot deliver. Founders going from idea to MVP.
              Teams replacing a tangle of manual tools with one purpose-built application.
            </p>
          </div>
        </motion.div>

        {/* PROOF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-[#6B91AD] uppercase tracking-widest text-sm mb-3">
              Proof
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Real products, real scale, real impact
            </h2>
          </div>

          <div className="bg-[#23314F] p-6 md:p-8 rounded-2xl shadow-lg border border-[#23314F]/40 space-y-4">
            <p className="text-[#E8EFF4] text-sm md:text-base leading-relaxed">
              We have taken products from concept to working software across multiple industries:
            </p>

            <ul className="space-y-3 text-[#E8EFF4] text-sm md:text-base">
              <li className="flex gap-2">
                <span className="text-[#6B91AD]">•</span>
                A payment gateway platform now processing millions of transactions monthly
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B91AD]">•</span>
                AI-powered healthcare applications used in real hospitals
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B91AD]">•</span>
                A mobile advertising app
              </li>
              <li className="flex gap-2">
                <span className="text-[#6B91AD]">•</span>
                Patient intake and preventive care systems integrated into BeaverHealthAI
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#23314F] to-[#161E2F] border border-[#23314F] rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to build your product?
          </h3>

          <p className="text-[#E8EFF4] mb-6 text-sm md:text-base">
            Tell us about your project and we’ll help you turn it into a scalable application.
          </p>

          <button className="bg-[#6B91AD] hover:bg-[#5d86a4] transition px-6 py-3 rounded-full text-white font-medium">
            Tell me about your project
          </button>
        </motion.div>

      </div>
    </section>
  );
}