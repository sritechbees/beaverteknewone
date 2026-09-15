
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";

/* ========================================================= */
/* BeaverTek Gradient */
/* ========================================================= */

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

/* ========================================================= */
/* Audience */
/* ========================================================= */

const audience = [
  "Leaders who are flying half-blind",
  "CFOs who want a real number, not a guess",
  "Operations heads who need to know what is happening right now",
  "Founders who want one dashboard instead of seven tabs",
];

/* ========================================================= */
/* Pipeline Component */
/* ========================================================= */

function Pipeline() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* Data Pipeline Highlight */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16"
        >
          <div className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-10">

            {/* ================= LEFT CONTENT ================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-offset="60"
            >
              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#3E7BD6]/30
                  bg-[#3E7BD6]/5
                  px-4
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  sm:px-5
                  sm:py-2
                  sm:text-xs
                "
              >
                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Connected Data
                </span>
              </span>

              {/* Heading */}
              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-[#111111]
                  sm:mt-5
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[2.6rem]
                "
              >
                <span className="text-[#111111]">
                  Data Pipelines
                </span>

                <br />

                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  That Keep Everything
                </span>

                <br />

                <span className="text-[#111111]">
                  Connected
                </span>
              </h3>

              {/* Gradient Divider */}
              <div
                className="
                  mt-4
                  h-[3px]
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  sm:mt-5
                  sm:w-16
                "
                data-aos="zoom-in"
                data-aos-delay="180"
                data-aos-duration="650"
              />

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#55555D]
                  sm:mt-5
                  sm:text-base
                  sm:leading-8
                "
                data-aos="fade-up"
                data-aos-delay="220"
                data-aos-duration="800"
              >
                We build data pipelines that move information cleanly between
                systems, keeping every dashboard and report accurate, reliable,
                and always up to date.
              </p>
            </div>

            {/* ================= RIGHT PIPELINE ================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="60"
              className="relative"
            >
              {/* Desktop Gradient Line */}
              <div
                className="
                  absolute
                  -left-3
                  top-8
                  hidden
                  h-[calc(100%-64px)]
                  w-[2px]
                  rounded-full
                  bg-gradient-to-b
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  lg:block
                "
              />

              <div className="space-y-3 sm:space-y-4">
                {[
                  "CRM",
                  "Accounting System",
                  "Support Tickets",
                  "Website",
                  "Devices",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    data-aos="fade-left"
                    data-aos-delay={i * 80}
                    data-aos-duration="750"
                    data-aos-offset="40"
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-white
                      px-4
                      py-3.5
                      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#3E7BD6]/60
                      hover:shadow-[0_10px_30px_rgba(62,123,214,0.12)]
                      sm:gap-4
                      sm:px-5
                      sm:py-4
                    "
                  >
                    {/* Left Gradient Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                      style={{
                        background: beaverTekGradient,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#29B6F0]/10
                        transition-all
                        duration-300
                        group-hover:bg-gradient-to-br
                        group-hover:from-[#29B6F0]
                        group-hover:via-[#3E7BD6]
                        group-hover:to-[#7A4FD1]
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <CheckCircle2
                        size={19}
                        strokeWidth={2}
                        className="
                          text-[#3E7BD6]
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Text */}
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#222222]
                        transition-colors
                        duration-300
                        group-hover:text-[#3E7BD6]
                        sm:text-base
                      "
                    >
                      {item}
                    </span>

                    {/* Right Indicator */}
                    <div
                      className="
                        ml-auto
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#C7C7CC]
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:bg-[#29B6F0]
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* Who This Is For */}
        {/* ========================================================= */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">

            {/* ===================================================== */}
            {/* LEFT — Audience Cards */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-offset="60"
              className="space-y-3 sm:space-y-4"
            >
              {audience.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="750"
                  data-aos-offset="40"
                  className="
                    group
                    relative
                    flex
                    items-start
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-4
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-300
                    hover:border-[#3E7BD6]/60
                    hover:shadow-[0_10px_30px_rgba(62,123,214,0.12)]
                    sm:gap-4
                    sm:p-5
                  "
                >
                  {/* Gradient Accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[3px]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      background: beaverTekGradient,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="
                      mt-0.5
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#29B6F0]/10
                      transition-all
                      duration-300
                      group-hover:bg-gradient-to-br
                      group-hover:from-[#29B6F0]
                      group-hover:via-[#3E7BD6]
                      group-hover:to-[#7A4FD1]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={2}
                      className="
                        text-[#3E7BD6]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Text */}
                  <p
                    className="
                      text-sm
                      font-medium
                      leading-6
                      text-[#333333]
                      transition-colors
                      duration-300
                      group-hover:text-[#3E7BD6]
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* ===================================================== */}
            {/* RIGHT — Heading + Description */}
            {/* ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-offset="60"
            >
              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#3E7BD6]/30
                  bg-[#3E7BD6]/5
                  px-4
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  sm:px-5
                  sm:py-2
                  sm:text-xs
                "
              >
                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Who This Is For
                </span>
              </span>

              {/* Heading */}
              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:mt-5
                  sm:text-3xl
                  md:text-4xl
                "
              >
                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Built for
                </span>

                <br />

                <span className="text-[#111111]">
                  Modern Business Leaders
                </span>
              </h3>

              {/* Gradient Divider */}
              <div
                className="
                  mt-4
                  h-[3px]
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  sm:mt-5
                  sm:w-16
                "
                data-aos="zoom-in"
                data-aos-delay="180"
                data-aos-duration="650"
              />

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#55555D]
                  sm:mt-5
                  sm:text-base
                  sm:leading-8
                "
                data-aos="fade-up"
                data-aos-delay="220"
                data-aos-duration="800"
              >
                Designed for business leaders who need confidence in their
                numbers and visibility into what is happening across the
                business.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pipeline;

