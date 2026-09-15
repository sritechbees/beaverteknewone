
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BuildSoftwareContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-12 sm:py-14 md:py-16 lg:py-18">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-[#29B6F0]/12 blur-[120px] sm:h-80 sm:w-80" />

        {/* Blue Glow */}
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#3E7BD6]/12 blur-[135px] sm:h-96 sm:w-96" />

        {/* Magenta Glow */}
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#B93FC9]/8 blur-[130px] sm:h-72 sm:w-72" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(41,182,240,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(41,182,240,.045) 1px,transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-5 lg:px-6">
        {/* =====================================================
            HEADER / CONTENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <span
            data-aos="fade-down"
            data-aos-delay="80"
            data-aos-duration="650"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#3E7BD6]/35
              bg-[#0A0A0A]
              px-3.5
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#29B6F0]
              shadow-[0_0_18px_rgba(41,182,240,.07)]
              backdrop-blur-xl
              sm:px-4
              sm:py-2
              sm:text-[10px]
              md:text-[11px]
            "
          >
            WHAT IT IS
          </span>

          {/* Title */}

          <h2
            data-aos="zoom-in-up"
            data-aos-delay="130"
            data-aos-duration="750"
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              tracking-tight
              sm:mt-5
              sm:text-4xl
              md:text-[42px]
              lg:text-[46px]
            "
          >
            {/* White Half */}

            <span className="text-white">
              Build{" "}
            </span>

            {/* BeaverTek Gradient Half */}

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
              }}
            >
              Software
            </span>
          </h2>

          {/* Gradient Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="210"
            data-aos-duration="650"
            className="mx-auto mt-4 h-[2px] w-12 rounded-full sm:mt-5 sm:w-14"
            style={{
              background:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
              boxShadow: "0 0 18px rgba(62,123,214,.25)",
            }}
          />

          {/* Description */}

          <div className="mt-5 space-y-4 text-sm leading-6 text-[#D4D4D8] sm:mt-6 sm:space-y-5 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
            <p
              data-aos="fade-up"
              data-aos-delay="280"
              data-aos-duration="800"
            >
              Sometimes off-the-shelf software does not fit the business. The
              workflow is too specific. The integration is too tight. The
              customer experience needs to be your own. That is when you need a
              partner who can build.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="380"
              data-aos-duration="800"
            >
              We design and engineer custom web and mobile applications and
              we stay with them through launch and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
