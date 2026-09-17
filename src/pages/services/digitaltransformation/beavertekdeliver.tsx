
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Beavertekdeliver() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const gradientText =
    "bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent";

  return (
    <div>
      <section
        className="
          relative
          overflow-hidden
          bg-black
          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            -left-32
            top-10
            h-64
            w-64
            rounded-full
            bg-[#29B6F0]/10
            blur-[120px]
            sm:h-72
            sm:w-72
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-72
            w-72
            rounded-full
            bg-[#7A4FD1]/10
            blur-[140px]
            sm:h-80
            sm:w-80
          "
        />

        {/* Center Ambient Light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#3E7BD6]/5
            blur-[150px]
            sm:h-96
            sm:w-96
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            sm:px-5
            md:px-6
            lg:px-7
          "
        >
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span
              data-aos="fade-down"
              className="
                inline-flex
                rounded-full
                border
                border-[#29B6F0]/20
                bg-[#29B6F0]/10
                px-3.5
                py-1
                text-[11px]
                font-medium
                text-[#29B6F0]
                backdrop-blur-xl
                sm:px-4
                sm:py-1.5
                sm:text-xs
              "
            >
              What BeaverTek Deliver
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="120"
              className="
                mt-3
                text-[27px]
                font-extrabold
                leading-tight
                text-white
                sm:mt-4
                sm:text-3xl
                md:text-4xl
                lg:text-[40px]
              "
            >
              What
              <span
                className="
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  via-[#7A4FD1]
                  to-[#B93FC9]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                BeaverTek{" "}
              </span>
              Deliver
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mt-9 sm:mt-10 md:mt-12 lg:mt-14">
            {/* Center Timeline Line */}
            <div
              className="
                absolute
                left-1/2
                top-0
                hidden
                h-full
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-transparent
                via-[#29B6F0]
                via-[#3E7BD6]
                to-[#7A4FD1]
                opacity-70
                lg:block
              "
            />

            {/* ================= ITEM 1 ================= */}
            <div
              className="
                group
                relative
                mb-10
                grid
                items-center
                gap-5
                sm:mb-12
                sm:gap-6
                lg:grid-cols-2
                lg:gap-7
              "
              onMouseEnter={() => setHoveredItem(1)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Lighting */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#29B6F0]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#29B6F0]/10
                  lg:block
                "
              />

              <div
                data-aos="fade-right"
                className="
                  relative
                  text-left
                  transition-transform
                  duration-500
                  lg:pr-14
                  lg:text-right
                  group-hover:lg:-translate-x-1
                "
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[26px]
                  "
                >
                  <span>Cloud Migration &</span>
                  <br />
                  <span
                    className={`transition-all duration-500 ${
                      hoveredItem === 1 ? gradientText : "text-white"
                    }`}
                  >
                    Modernization
                  </span>
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="180"
                  className="
                    mt-2.5
                    max-w-xl
                    text-[15px]
                    leading-6
                    text-zinc-400
                    sm:mt-3
                    sm:text-base
                    sm:leading-7
                    lg:ml-auto
                  "
                >
                  Move from legacy systems to secure, scalable cloud environments
                  with minimal disruption and maximum performance.
                </p>
              </div>

              <div className="hidden lg:block" />
            </div>

            {/* ================= ITEM 2 ================= */}
            <div
              className="
                group
                relative
                mb-10
                grid
                items-center
                gap-5
                sm:mb-12
                sm:gap-6
                lg:grid-cols-2
                lg:gap-7
              "
              onMouseEnter={() => setHoveredItem(2)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Lighting */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#3E7BD6]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#3E7BD6]/10
                  lg:block
                "
              />

              <div className="hidden lg:block" />

              <div
                data-aos="fade-left"
                data-aos-delay="80"
                className="
                  relative
                  transition-transform
                  duration-500
                  lg:pl-14
                  group-hover:lg:translate-x-1
                "
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay="160"
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[26px]
                  "
                >
                  <span>AI-Driven</span>
                  <br />
                  <span
                    className={`transition-all duration-500 ${
                      hoveredItem === 2 ? gradientText : "text-white"
                    }`}
                  >
                    Automation
                  </span>
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="240"
                  className="
                    mt-2.5
                    max-w-xl
                    text-[15px]
                    leading-6
                    text-zinc-400
                    sm:mt-3
                    sm:text-base
                    sm:leading-7
                  "
                >
                  Transform workflows with intelligent automation that reduces
                  manual effort, improves accuracy, and accelerates
                  decision-making.
                </p>
              </div>
            </div>

            {/* ================= ITEM 3 ================= */}
            <div
              className="
                group
                relative
                mb-10
                grid
                items-center
                gap-5
                sm:mb-12
                sm:gap-6
                lg:grid-cols-2
                lg:gap-7
              "
              onMouseEnter={() => setHoveredItem(3)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Lighting */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#7A4FD1]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#7A4FD1]/10
                  lg:block
                "
              />

              <div
                data-aos="fade-right"
                data-aos-delay="80"
                className="
                  relative
                  text-left
                  transition-transform
                  duration-500
                  lg:pr-14
                  lg:text-right
                  group-hover:lg:-translate-x-1
                "
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay="160"
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[26px]
                  "
                >
                  <span>Integrated</span>
                  <br />
                  <span
                    className={`transition-all duration-500 ${
                      hoveredItem === 3 ? gradientText : "text-white"
                    }`}
                  >
                    AI Solutions
                  </span>
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="240"
                  className="
                    mt-2.5
                    max-w-xl
                    text-[15px]
                    leading-6
                    text-zinc-400
                    sm:mt-3
                    sm:text-base
                    sm:leading-7
                    lg:ml-auto
                  "
                >
                  Deploy advanced AI capabilities across your business—from
                  predictive analytics to conversational interfaces.
                </p>
              </div>

              <div className="hidden lg:block" />
            </div>

            {/* ================= ITEM 4 ================= */}
            <div
              className="
                group
                relative
                mb-10
                grid
                items-center
                gap-5
                sm:mb-12
                sm:gap-6
                lg:grid-cols-2
                lg:gap-7
              "
              onMouseEnter={() => setHoveredItem(4)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Lighting */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#29B6F0]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#29B6F0]/10
                  lg:block
                "
              />

              <div className="hidden lg:block" />

              <div
                data-aos="fade-left"
                data-aos-delay="80"
                className="
                  relative
                  transition-transform
                  duration-500
                  lg:pl-14
                  group-hover:lg:translate-x-1
                "
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay="160"
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[26px]
                  "
                >
                  <span>Managed</span>
                  <br />
                  <span
                    className={`transition-all duration-500 ${
                      hoveredItem === 4 ? gradientText : "text-white"
                    }`}
                  >
                    Services
                  </span>
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="240"
                  className="
                    mt-2.5
                    max-w-xl
                    text-[15px]
                    leading-6
                    text-zinc-400
                    sm:mt-3
                    sm:text-base
                    sm:leading-7
                  "
                >
                  End-to-end operational support ensuring reliability, security,
                  and continuous optimization of your digital ecosystem.
                </p>
              </div>
            </div>

            {/* ================= ITEM 5 ================= */}
            <div
              className="
                group
                relative
                grid
                items-center
                gap-5
                sm:gap-6
                lg:grid-cols-2
                lg:gap-7
              "
              onMouseEnter={() => setHoveredItem(5)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hover Lighting */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-64
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#3E7BD6]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#3E7BD6]/10
                  lg:block
                "
              />

              <div
                data-aos="fade-right"
                data-aos-delay="80"
                className="
                  relative
                  text-left
                  transition-transform
                  duration-500
                  lg:pr-14
                  lg:text-right
                  group-hover:lg:-translate-x-1
                "
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay="160"
                  className="
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[26px]
                  "
                >
                  <span>AI</span>
                  <br />
                  <span
                    className={`transition-all duration-500 ${
                      hoveredItem === 5 ? gradientText : "text-white"
                    }`}
                  >
                    Analytics
                  </span>
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="240"
                  className="
                    mt-2.5
                    max-w-xl
                    text-[15px]
                    leading-6
                    text-zinc-400
                    sm:mt-3
                    sm:text-base
                    sm:leading-7
                    lg:ml-auto
                  "
                >
                  Turn data into actionable insights with advanced analytics,
                  predictive modeling, and real-time dashboards that empower
                  smarter business decisions.
                </p>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Beavertekdeliver;
