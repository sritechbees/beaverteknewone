
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

function SeeYourDataSection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-10 sm:py-12 md:py-14 lg:py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-28 -top-32 h-64 w-64 rounded-full blur-[110px] sm:h-72 sm:w-72"
          style={{
            background: "#29B6F0",
            opacity: 0.08,
          }}
        />

        <div
          className="absolute -right-20 top-16 h-72 w-72 rounded-full blur-[125px] sm:h-80 sm:w-80"
          style={{
            background: "#7A4FD1",
            opacity: 0.08,
          }}
        />

        <div
          className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-[120px] sm:h-64 sm:w-64"
          style={{
            background: "#B93FC9",
            opacity: 0.07,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid items-center gap-7 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-12">
          {/* LEFT — TITLE */}
          <div
            data-aos="fade-right"
            data-aos-duration="850"
            data-aos-offset="60"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <span
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-offset="40"
              className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/[0.04] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#29B6F0] backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[10px] md:text-xs"
            >
              SEE YOUR DATA
            </span>

            {/* Heading */}
            <h2
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="850"
              data-aos-offset="50"
              className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:mt-6 lg:text-[50px] xl:text-[47px]"
            >
              <span className="text-white">Stop Guessing.</span>
              <br />

              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradient }}
              >
                Make Smarter
                <br className="hidden sm:block" /> Decisions.
              </span>
            </h2>

            {/* Divider */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
              data-aos-offset="40"
              className="mx-auto mt-5 h-[3px] w-14 rounded-full sm:mt-5 sm:w-16 lg:mx-0 lg:w-20"
              style={{ background: gradient }}
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="150"
            data-aos-offset="60"
            className="relative"
          >
            <div className="relative border-l border-[#2A2A30] pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              {/* Paragraph 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="750"
                data-aos-offset="40"
                className="relative"
              >
                <span
                  className="absolute -left-[21px] top-2 h-2 w-2 rounded-full sm:-left-[25px] sm:h-2.5 sm:w-2.5 md:-left-[29px]"
                  style={{ background: "#29B6F0" }}
                />

                <p className="text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-7">
                  Most businesses already have valuable data spread across
                  their CRM, accounting software, support systems, websites,
                  and internal applications.
                </p>
              </div>

              {/* Divider */}
              <div
                data-aos="fade-left"
                data-aos-delay="350"
                data-aos-duration="650"
                className="my-5 h-px w-full bg-[#2A2A30] sm:my-6"
              />

              {/* Paragraph 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="750"
                data-aos-offset="40"
                className="relative"
              >
                <span
                  className="absolute -left-[21px] top-2 h-2 w-2 rounded-full sm:-left-[25px] sm:h-2.5 sm:w-2.5 md:-left-[29px]"
                  style={{ background: "#3E7BD6" }}
                />

                <p className="text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-7">
                  The challenge isn't collecting more data—it's bringing
                  everything together into one clear, connected view.
                </p>
              </div>

              {/* Divider */}
              <div
                data-aos="fade-left"
                data-aos-delay="450"
                data-aos-duration="650"
                className="my-5 h-px w-full bg-[#2A2A30] sm:my-6"
              />

              {/* Paragraph 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="750"
                data-aos-offset="40"
                className="relative"
              >
                <span
                  className="absolute -left-[21px] top-2 h-2 w-2 rounded-full sm:-left-[25px] sm:h-2.5 sm:w-2.5 md:-left-[29px]"
                  style={{ background: "#B93FC9" }}
                />

                <p className="text-sm leading-6 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-7">
                  BeaverTek connects, organizes, and visualizes your business
                  data so you can stop guessing and start deciding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeeYourDataSection;

