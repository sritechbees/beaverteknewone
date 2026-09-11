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
duration: 750,
once: true,
easing: "ease-out-cubic",
offset: 60,
mirror: false,
anchorPlacement: "top-bottom",
});


AOS.refresh();

return () => {
  AOS.refreshHard();
};


}, []);

return ( <section className="relative overflow-hidden bg-[linear-gradient(135deg,#000000_0%,#0A0A0A_30%,#121212_70%,#1A1A1E_100%)] py-10 sm:py-11 md:py-12 lg:py-14 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
{/* Background Blur */}


  <div
    data-aos="fade-down"
    data-aos-duration="900"
    className="absolute -top-24 -left-24 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#29B6F0]/15 blur-[100px] sm:blur-[110px]"
  />

  <div
    data-aos="fade-up"
    data-aos-duration="900"
    className="absolute -bottom-24 -right-24 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#B93FC9]/15 blur-[100px] sm:blur-[110px]"
  />

  <div
    data-aos="zoom-in"
    data-aos-duration="1100"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[430px] sm:h-[430px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#7A4FD1]/10 blur-[140px] sm:blur-[160px] lg:blur-[180px]"
  />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}

    <div
      className="text-center mb-10 sm:mb-11 md:mb-12 lg:mb-14"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <span
        data-aos="zoom-in"
        data-aos-delay="100"
        className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[#121212] px-3.5 py-1.5 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[#29B6F0] shadow-[0_10px_25px_rgba(0,0,0,.30)]"
      >
        Frequently Asked Questions
      </span>

      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        className="mt-4 sm:mt-5 text-[28px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-extrabold bg-clip-text text-transparent leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
        }}
      >
        Have Questions?
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-3 sm:mt-4 text-[#A0A0A8] text-xs sm:text-[13px] md:text-sm leading-5 sm:leading-6 max-w-xl mx-auto"
      >
        Everything you need to know before starting your project with
        BeaverTek.
      </p>
    </div>

    {/* Grid */}

    <div className="grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 items-center">
      {/* Left Side */}

      <motion.div
        data-aos="fade-right"
        data-aos-duration="850"
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Glow */}

        <div className="absolute inset-0 rounded-[16px] sm:rounded-[18px] bg-gradient-to-br from-[#29B6F0]/20 via-[#3E7BD6]/15 via-[#7A4FD1]/15 to-[#B93FC9]/20 blur-2xl scale-105" />

        {/* Image */}

        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="relative overflow-hidden rounded-[16px] sm:rounded-[18px] border border-[#2A2A30] shadow-[0_20px_50px_rgba(0,0,0,.45)]"
        >
          <Image
            src="/home/faq.jpg"
            alt="FAQ"
            width={700}
            height={800}
            className="w-full h-[260px] sm:h-[300px] md:h-[350px] lg:h-[460px] xl:h-[500px] object-cover transition duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Floating Card */}

        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute -bottom-5 -right-4 lg:-bottom-6 lg:-right-5 hidden md:block"
        >
          <div className="bg-[#121212] rounded-[16px] sm:rounded-[18px] border border-[#2A2A30] shadow-[0_20px_50px_rgba(0,0,0,.45)] p-4 sm:p-5 max-w-[280px] lg:max-w-xs">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] flex items-center justify-center shadow-[0_0_35px_rgba(62,123,214,.35)] shrink-0">
                <ShieldCheck
                  size={23}
                  className="text-white"
                />
              </div>

              <div>
                <h4 className="text-base sm:text-[17px] font-bold text-[#FFFFFF] leading-5">
                  24/7 Expert Support
                </h4>

                <p className="mt-1.5 text-xs sm:text-[13px] leading-5 text-[#A0A0A8]">
                  Get answers from our specialists anytime during your
                  project journey.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side FAQ */}

      <div className="space-y-3.5 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            data-aos="fade-left"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="group overflow-hidden rounded-[15px] sm:rounded-[16px] border border-[#2A2A30] bg-[#121212] shadow-[0_10px_25px_rgba(0,0,0,.35)] transition-all duration-500 hover:border-[#3E7BD6] hover:shadow-[0_0_35px_rgba(62,123,214,.35)]"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between gap-3 px-4 sm:px-5 md:px-5.5 py-4 sm:py-4.5 text-left"
            >
              <h3 className="pr-2 text-sm sm:text-[15px] md:text-base lg:text-[17px] font-semibold leading-5 sm:leading-6 text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#29B6F0]">
                {faq.question}
              </h3>

              <motion.div
                animate={{
                  rotate: open === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] shadow-[0_0_30px_rgba(62,123,214,.35)] shrink-0"
              >
                <ChevronDown
                  size={18}
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
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#2A2A30] bg-gradient-to-r from-[#29B6F0]/5 via-[#3E7BD6]/5 via-[#7A4FD1]/5 to-[#B93FC9]/5 px-4 sm:px-5 pb-4 sm:pb-5 pt-3.5 sm:pt-4">
                    <p className="text-xs sm:text-[13px] md:text-sm leading-5.5 sm:leading-6 text-[#A0A0A8]">
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
          data-aos-delay="500"
          data-aos-duration="800"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-5 sm:mt-6 rounded-[16px] sm:rounded-[18px] bg-gradient-to-r from-[#27baf4] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] p-5 sm:p-6 md:p-6.5 text-white shadow-[0_20px_50px_rgba(0,0,0,.45)]"
        >
          <h3
            data-aos="fade-up"
            data-aos-delay="550"
            className="text-lg sm:text-xl font-bold leading-6"
          >
            Still have questions?
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-2 text-xs sm:text-[13px] md:text-sm leading-5 sm:leading-6 text-white/90"
          >
            Our team is here to help you with any questions about our
            services, pricing, or project process.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="650"
            className="mt-4 sm:mt-5 rounded-full bg-[#121212] border border-[#2A2A30] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#3E7BD6] hover:shadow-[0_0_35px_rgba(62,123,214,.35)]"
          >
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </div>
  </div>
</section>


);
}
