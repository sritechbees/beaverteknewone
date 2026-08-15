"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] pt-16 pb-20">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0">

       
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-[#B93FC9]/15
            blur-[140px]
            rounded-full
          "
        />

      </div>

      {/* ================= DOTTED PATTERN ================= */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[radial-gradient(#2A2A30_1px,transparent_1px)]
          [background-size:20px_20px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div data-aos="fade-right">

            {/* Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-[#121212]
                border border-[#2A2A30]
                mb-6
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#29B6F0]" />

              <span
                className="
                  text-xs
                  sm:text-sm
                  text-[#A0A0A8]
                  font-semibold
                  tracking-wide
                "
              >
                DIGITAL PRODUCTS
              </span>
            </div>

            {/* ================= TITLE ================= */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-[62px]
                font-extrabold
                text-white
                leading-[1.08]
                tracking-tight
              "
            >
              Build What’s Next.

              <span
                className="
                  block
                  mt-2
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Digital Products
              </span>

              <span className="block mt-2 text-white">
                That Perform.
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="
                mt-6
                text-[#A0A0A8]
                text-base
                sm:text-lg
                max-w-xl
                leading-7
                sm:leading-8
              "
            >
              We don’t just develop software—we engineer scalable,
              enterprise-grade digital products that power healthcare, AI,
              automation, analytics, and business transformation.
            </p>

            {/* ================= BUTTONS ================= */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
                mt-8
              "
            >

              <Link
                href="/products/producthero"
                className="
                  px-7
                  py-3.5
                  sm:px-8
                  sm:py-4
                  rounded-2xl
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  text-white
                  text-sm
                  sm:text-base
                  font-semibold
                  text-center
                  shadow-[0_10px_35px_rgba(62,123,214,.25)]
                  hover:shadow-[0_15px_45px_rgba(62,123,214,.35)]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Explore Products →
              </Link>

              <Link
                href="/customers/casestudyhero"
                className="
                  px-7
                  py-3.5
                  sm:px-8
                  sm:py-4
                  rounded-2xl
                  border border-[#2A2A30]
                  bg-[#121212]
                  text-white
                  text-sm
                  sm:text-base
                  font-semibold
                  text-center
                  hover:bg-[#1A1A1E]
                  hover:border-[#3E7BD6]
                  transition-all
                  duration-300
                "
              >
                Contact Sales →
              </Link>

            </div>

            {/* ================= FEATURE ROW ================= */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="
                flex
                flex-wrap
                gap-x-5
                gap-y-3
                mt-9
                text-xs
                sm:text-sm
                text-[#A0A0A8]
              "
            >

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#29B6F0] rounded-full" />
                Enterprise Security
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3E7BD6] rounded-full" />
                Cloud Native
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7A4FD1] rounded-full" />
                AI Powered
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B93FC9] rounded-full" />
                Scalable Solutions
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative"
          >

            {/* IMAGE GROUP */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-[#2A2A30]
                bg-[#121212]
                shadow-2xl
              "
            >

              <img
                src="/home/Banner1.jpg"
                alt="BeaverTek Digital Products"
                className="
                  h-[390px]
                  sm:h-[430px]
                  lg:h-[450px]
                  w-full
                  object-cover
                  transition-transform
                  duration-[2500ms]
                  ease-in-out
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/5
                  to-transparent
                "
              />

            </div>

            {/* ================= FLOATING STATS ================= */}
            <div
              className="
                absolute
                -bottom-9
                left-0
                right-0
                px-3
                sm:px-4
              "
            >

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4
                  gap-2
                  sm:gap-3
                  rounded-2xl
                  border border-[#2A2A30]
                  bg-[#121212]/95
                  backdrop-blur-xl
                  p-3
                  sm:p-4
                  shadow-xl
                "
              >

                <div className="text-center py-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    50+
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#A0A0A8]">
                    Live Products
                  </p>
                </div>

                <div className="text-center py-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    120+
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#A0A0A8]">
                    Clients
                  </p>
                </div>

                <div className="text-center py-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    99.9%
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#A0A0A8]">
                    Uptime
                  </p>
                </div>

                <div className="text-center py-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    24/7
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#A0A0A8]">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}