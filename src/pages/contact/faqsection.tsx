"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "Usually within one business day. If it is urgent, please call us directly for immediate assistance.",
  },
  {
    question: "What does an engagement cost?",
    answer:
      "It depends on the work. Most engagements begin with a one- or two-week discovery phase at a fixed price, followed by a clear written plan and budget for the first delivery phase. No surprise invoices—ever.",
  },
  {
    question: "Are we too small?",
    answer:
      "Probably not. We work with companies ranging from early-stage startups to mid-market businesses. If we're not the right fit, we'll tell you during the first call and often recommend someone who is.",
  },
  {
    question: "Will I talk to a salesperson?",
    answer:
      "No. Your first conversation is with someone who can actually understand your requirements and help shape the solution.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#EAF1F7] py-24 px-5 md:px-10 lg:px-16">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#45A6E5]/10 blur-[120px]" />

      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#8FD14F]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center rounded-full border border-[#45A6E5]/20 bg-white px-5 py-2 text-sm font-semibold text-[#45A6E5] shadow-md">
            Frequently Asked Questions
          </span>

          <h2
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg,#45A6E5,#8FD14F)",
            }}
          >
            Have Questions?
          </h2>

          <p className="mt-6 text-[#5B6B7B] text-lg leading-8 max-w-2xl mx-auto">
            Everything you need to know before starting your project with
            BeaverTek.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            data-aos="fade-right"
            className="relative"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-[#45A6E5]/20 to-[#8FD14F]/20 blur-2xl scale-105" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[18px] border-4 border-white shadow-2xl">

              <Image
                src="/home/faq.jpg"
                alt="FAQ"
                width={700}
                height={800}
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
                priority
              />

            </div>

            {/* Floating Card */}
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: .4,
                duration: .6,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 hidden md:block"
            >
              <div className="bg-white rounded-[18px] shadow-2xl p-6 max-w-xs border border-[#45A6E5]/10">

                <div className="flex items-start gap-4">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] flex items-center justify-center shadow-lg">

                    <ShieldCheck
                      size={28}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h4 className="text-lg font-bold text-[#0B0F14]">
                      24/7 Expert Support
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#5B6B7B]">
                      Get answers from our specialists anytime during your
                      project journey.
                    </p>

                  </div>

                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* Right Side FAQ */}
          <div className="space-y-6">
                        {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                data-aos="fade-left"
                data-aos-delay={index * 150}
                data-aos-duration="900"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-[18px] border border-[#45A6E5]/10 bg-white shadow-lg transition-all duration-500 hover:border-[#45A6E5] hover:shadow-2xl"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="pr-5 text-lg md:text-xl font-semibold text-[#0B0F14] transition-colors duration-300 group-hover:text-[#45A6E5]">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: open === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] shadow-lg"
                  >
                    <ChevronDown
                      size={20}
                      className="text-white"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#45A6E5]/10 bg-gradient-to-r from-[#45A6E5]/5 to-[#8FD14F]/5 px-7 pb-7 pt-5">
                        <p className="leading-8 text-[#5B6B7B]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Bottom CTA Card */}

            <motion.div
              data-aos="fade-up"
              data-aos-delay="600"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="mt-10 rounded-[18px] bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold">
                Still have questions?
              </h3>

              <p className="mt-3 leading-7 text-white/90">
                Our team is here to help you with any questions about our
                services, pricing, or project process.
              </p>

              <button className="mt-6 rounded-full bg-white px-7 py-3 font-semibold text-[#0B0F14] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Our Team
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}