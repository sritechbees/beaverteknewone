"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

function Innovativeservices() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
        lg:px-12
        lg:py-20
        xl:px-16
      "
    >
      {/* =========================================================
          SOFT BACKGROUND GLOW
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-64
          w-64
          rounded-full
          bg-[#29B6F0]/[0.035]
          blur-[100px]
          sm:h-80
          sm:w-80
          md:h-96
          md:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-64
          w-64
          rounded-full
          bg-[#B93FC9]/[0.035]
          blur-[100px]
          sm:h-80
          sm:w-80
          md:h-96
          md:w-96
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* =======================================================
            SMALL SECTION LABEL
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
            sm:mb-6
          "
        >
          <span
            className="
              h-[2px]
              w-7
              rounded-full
              sm:w-9
            "
            style={{ background: GRADIENT }}
          />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#686970]
              sm:text-xs
            "
          >
            Our Approach
          </span>

          <span
            className="
              h-[2px]
              w-7
              rounded-full
              sm:w-9
            "
            style={{ background: GRADIENT }}
          />
        </div>

        {/* =======================================================
            TITLE
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <h2
            className="
              text-[30px]
              font-extrabold
              leading-[1.12]
              tracking-[-0.035em]
              text-[#0A0A0A]
              sm:text-[36px]
              md:text-[44px]
              lg:text-[50px]
              xl:text-[54px]
            "
          >
            Innovative IT Services{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: GRADIENT,
              }}
            >
              with a Purpose-Driven Mission
            </span>
          </h2>
        </div>

        {/* =======================================================
            CONTENT
        ======================================================== */}
        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            sm:mt-12
            md:mt-14
          "
        >
          {/* =====================================================
              FIRST DESCRIPTION
          ====================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="220"
            className="
              relative
              text-center
            "
          >
            <p
              className="
                text-[15px]
                leading-7
                text-[#55565D]
                sm:text-[16px]
                sm:leading-8
                md:text-[18px]
                md:leading-8
                lg:text-[19px]
              "
            >
              BeaverTek is a passionate and forward-thinking IT services
              provider based in{" "}
              <span className="font-semibold text-[#222328]">
                Orange County, California
              </span>
              , with an extended presence in{" "}
              <span className="font-semibold text-[#222328]">
                Chennai, India
              </span>
              . With over eight decades of collective consulting experience
              across Fortune 500 companies and diverse industries, we bring
              deep expertise, innovative thinking, and unwavering dedication
              to every client engagement.
            </p>
          </div>

          {/* =====================================================
              GRADIENT DIVIDER
          ====================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="280"
            className="
              mx-auto
              my-8
              flex
              items-center
              justify-center
              sm:my-9
              md:my-10
            "
          >
            <span
              className="
                h-px
                w-16
                opacity-50
                sm:w-20
                md:w-24
              "
              style={{
                background: GRADIENT,
              }}
            />

            <span
              className="
                mx-2
                h-1.5
                w-1.5
                rounded-full
                sm:mx-3
              "
              style={{
                background: GRADIENT,
              }}
            />

            <span
              className="
                h-px
                w-16
                opacity-50
                sm:w-20
                md:w-24
              "
              style={{
                background: GRADIENT,
              }}
            />
          </div>

          {/* =====================================================
              SECOND DESCRIPTION
          ====================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="340"
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-[15px]
                leading-7
                text-[#55565D]
                sm:text-[16px]
                sm:leading-8
                md:text-[18px]
                md:leading-8
                lg:text-[19px]
              "
            >
              What sets us apart is more than just our technical
              proficiency—{" "}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: GRADIENT,
                }}
              >
                technology is in our DNA.
              </span>{" "}
              It fuels our contagious energy, drives our culture, and
              inspires our relentless pursuit to deliver solutions that
              truly make a difference.
            </p>
          </div>
        </div>

        {/* =======================================================
            BOTTOM ACCENT
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="420"
          className="
            mx-auto
            mt-10
            flex
            justify-center
            sm:mt-12
            md:mt-14
          "
        >
          <div
            className="
              h-[3px]
              w-14
              rounded-full
              sm:w-16
              md:w-20
            "
            style={{
              background: GRADIENT,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Innovativeservices;