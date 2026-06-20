"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-[#F7FAFC] py-20 px-5 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}

        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#161E2F]">
            Have Questions?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-8">
            Everything you need to know before starting your project with
            BeaverTek.
          </p>
        </div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 md:px-8 py-6"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#161E2F] pr-5">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className="text-[#4A7AFF]"
                    size={24}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}