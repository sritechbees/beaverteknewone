
"use client";

import { useEffect } from "react";
import {
  Building2,
  MapPin,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhereWeAre() {
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

  const locations = [
    {
      icon: Building2,
      title: "Headquarters",
      value: "Irvine, California",
    },
    {
      icon: MapPin,
      title: "Engineering Hub",
      value: "India",
    },
    {
      icon: Globe2,
      title: "Clients",
      value: "Across North America & Beyond",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#000000]
        py-12
        sm:py-14
        md:py-16
        lg:py-20
        xl:py-22
      "
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top cyan glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-100px]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-[#29B6F0]/[0.055]
            blur-[100px]
            sm:h-[380px]
            sm:w-[380px]
            sm:blur-[120px]
            lg:h-[460px]
            lg:w-[460px]
          "
        />

        {/* Bottom violet glow */}
        <div
          className="
            absolute
            bottom-[-160px]
            left-[-120px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#7A4FD1]/[0.045]
            blur-[100px]
            sm:h-[340px]
            sm:w-[340px]
          "
        />

        {/* Right magenta glow */}
        <div
          className="
            absolute
            right-[-130px]
            top-[40%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#B93FC9]/[0.035]
            blur-[100px]
            sm:h-[320px]
            sm:w-[320px]
          "
        />
      </div>

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
          bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =======================================================
            HEADING AREA
        ======================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          {/* Badge */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]/80
              px-3.5
              py-1.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#29B6F0]/40
              sm:px-4
              sm:py-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#29B6F0]
                shadow-[0_0_10px_rgba(41,182,240,.8)]
                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#29B6F0]
                sm:text-[11px]
                md:text-xs
              "
            >
              Global Presence
            </span>
          </div>

          {/* Title */}

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              mt-5
              text-[29px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
              sm:mt-6
              sm:text-[33px]
              md:text-[37px]
              lg:text-[42px]
              xl:text-[45px]
            "
          >
            Where We{" "}
            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Are
            </span>
          </h2>

          {/* Gradient Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="220"
            className="
              mx-auto
              mt-5
              h-[2px]
              w-12
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              shadow-[0_0_14px_rgba(41,182,240,.2)]
              sm:mt-6
              sm:w-16
              md:w-20
            "
          />

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="280"
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[12px]
              leading-6
              text-[#A0A0A8]
              sm:mt-6
              sm:text-[13px]
              sm:leading-6
              md:text-[14px]
              md:leading-7
              lg:text-[15px]
            "
          >
            Strategically positioned to support businesses with experienced
            engineering teams and trusted technology partnerships across
            multiple regions.
          </p>
        </div>

        {/* =======================================================
            LOCATION SHOWCASE
        ======================================================== */}

        <div
          className="
            relative
            mt-10
            sm:mt-12
            md:mt-14
            lg:mt-16
          "
        >
          {/* Top decorative line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#2A2A30]
              to-transparent
            "
            data-aos="fade-in"
            data-aos-duration="1000"
          />

          {/* =====================================================
              LOCATION GRID
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {locations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 110}
                  data-aos-duration="700"
                  className={`
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    border-b
                    border-[#2A2A30]
                    px-0
                    py-7
                    transition-all
                    duration-500

                    sm:px-1
                    sm:py-8

                    md:min-h-[230px]
                    md:px-6
                    md:py-9

                    lg:min-h-[245px]
                    lg:px-8
                    lg:py-10

                    xl:min-h-[250px]
                    xl:px-9

                    ${
                      index === 1
                        ? "md:border-r md:border-[#2A2A30] xl:border-r"
                        : ""
                    }

                    ${
                      index === 0
                        ? "xl:border-r xl:border-[#2A2A30]"
                        : ""
                    }
                  `}
                >
                  {/* =================================================
                      SUBTLE HOVER GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-[#29B6F0]/0
                      blur-[70px]
                      transition-all
                      duration-700
                      group-hover:bg-[#29B6F0]/[0.08]
                    "
                  />

                  {/* =================================================
                      BOTTOM GRADIENT HOVER LINE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    data-aos="zoom-in"
                    data-aos-delay={220 + index * 110}
                    className="
                      relative
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#2A2A30]
                      bg-[#0A0A0A]
                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:border-[#29B6F0]/40
                      group-hover:shadow-[0_0_24px_rgba(41,182,240,.10)]

                      sm:h-11
                      sm:w-11

                      md:h-12
                      md:w-12
                    "
                  >
                    <Icon
                      className="
                        h-[18px]
                        w-[18px]
                        text-[#29B6F0]
                        transition-transform
                        duration-500
                        group-hover:scale-110

                        sm:h-5
                        sm:w-5

                        md:h-[22px]
                        md:w-[22px]
                      "
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      relative
                      mt-6
                      sm:mt-7
                      md:mt-8
                    "
                  >
                    {/* Small Gradient Indicator */}

                    <div
                      className="
                        mb-3
                        h-[2px]
                        w-7
                        rounded-full
                        bg-[linear-gradient(90deg,#29B6F0,#7A4FD1)]
                        transition-all
                        duration-500
                        group-hover:w-11
                        sm:mb-3.5
                      "
                    />

                    {/* Title */}

                    <h3
                      data-aos="fade-up"
                      data-aos-delay={280 + index * 110}
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#29B6F0]
                        sm:text-xs
                        md:text-[13px]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Value */}

                    <p
                      data-aos="fade-up"
                      data-aos-delay={330 + index * 110}
                      className="
                        mt-2.5
                        max-w-[380px]
                        text-[19px]
                        font-semibold
                        leading-[1.3]
                        tracking-[-0.025em]
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-1

                        sm:mt-3
                        sm:text-[21px]

                        md:text-[22px]

                        lg:text-[23px]

                        xl:text-[24px]
                      "
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* =================================================
                      ARROW
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-6
                      right-0
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#2A2A30]
                      bg-[#0A0A0A]
                      opacity-45
                      transition-all
                      duration-500

                      group-hover:translate-x-1
                      group-hover:border-[#3E7BD6]/50
                      group-hover:opacity-100

                      sm:right-1
                      sm:h-9
                      sm:w-9

                      md:right-6

                      lg:right-8

                      xl:right-9
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-[#A0A0A8]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom decorative line */}

          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#2A2A30]
              to-transparent
            "
            data-aos="fade-in"
            data-aos-delay="350"
          />
        </div>

        {/* =======================================================
            BOTTOM GLOBAL LINE
        ======================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2.5
            text-center

            sm:mt-9
            sm:gap-3

            md:mt-10
          "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span
            className="
              h-px
              w-6
              shrink-0
              bg-[#2A2A30]
              sm:w-10
              md:w-14
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#5A5A62]
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Global Technology Presence
          </span>

          <span
            className="
              h-px
              w-6
              shrink-0
              bg-[#2A2A30]
              sm:w-10
              md:w-14
            "
          />
        </div>
      </div>
    </section>
  );
}

