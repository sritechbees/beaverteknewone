"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 70,
    });

    AOS.refresh();
  }, []);

  /* =========================================================
     SCROLL TO PAYMENT CASE STUDY
  ========================================================= */
  const scrollToProject = () => {
    const section = document.getElementById("PaymentPlatformCaseStudy");

    if (!section) {
      console.warn(
        'PaymentPlatformCaseStudy section with id="PaymentPlatformCaseStudy" was not found.',
      );
      return;
    }

    const headerOffset = 40;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(sectionPosition - headerOffset, 0),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 lg:py-20">
      {/* =====================================================
          VERY SUBTLE BACKGROUND ACCENTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle top cyan glow */}
        <div className="absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-[#29B6F0]/[0.035] blur-[140px]" />

        {/* Very subtle right violet glow */}
        <div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#7A4FD1]/[0.035] blur-[150px]" />

        {/* Bottom subtle magenta glow */}
        <div className="absolute bottom-[-12rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/[0.025] blur-[140px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Badge */}
            <span
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center rounded-full border border-[#3E7BD6]/25 bg-[#0A0A0A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#29B6F0] sm:px-5 sm:text-xs"
            >
              Case Study
            </span>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-6 max-w-2xl text-3xl font-black leading-[1.08] text-white sm:mt-7 sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px]"
            >
              Payment Platform
              <br />
              <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>

            {/* Divider */}
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              className="mt-6 h-1 w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-7 sm:w-24"
            />

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-7 max-w-2xl text-[15px] leading-7 text-[#D4D4D8] sm:mt-8 sm:text-base sm:leading-7 lg:text-[17px] lg:leading-8"
            >
              BeaverTek engineered a secure enterprise-grade payment
              integration platform capable of handling millions of monthly
              transactions while delivering high availability, performance,
              and continuous scalability for financial service providers.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Discuss Your Project */}
              <button
                type="button"
                onClick={scrollToProject}
                className="group inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(62,123,214,.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(185,63,201,.22)] sm:w-auto sm:px-8 sm:py-4"
              >
                Discuss Your Project

                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* View All Case Studies */}
              <Link
                href="/customers/casestudyoverall"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#2A2A30] bg-[#0A0A0A] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#3E7BD6] hover:bg-[#111111] sm:w-auto sm:px-8 sm:py-4"
              >
                View All Case Studies
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            data-aos="fade-left"
            data-aos-duration="1000"
            className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
          >
            {/* Very subtle image glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(41,182,240,.08),rgba(122,79,209,.045),transparent_68%)] blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px]">
              <Image
                src="/home/dataanalytics.jpg"
                alt="Payment Platform at Scale"
                width={900}
                height={700}
                priority
                className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[360px] md:h-[420px] lg:h-[500px]"
              />

              {/* Very subtle image color treatment */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#29B6F0]/[0.04] via-transparent to-[#B93FC9]/[0.08]" />
            </div>

            {/* Floating Gradient Line */}
            <div
              data-aos="fade-left"
              data-aos-delay="350"
              className="absolute -bottom-2 left-[15%] h-[3px] w-[70%] rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] opacity-70 sm:-bottom-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}