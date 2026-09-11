
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
        py-10
        sm:py-11
        md:py-12
        lg:py-14
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#29B6F0]/[0.06]
            blur-[100px]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-140px]
            left-[-100px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#7A4FD1]/[0.05]
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            right-[-100px]
            top-[35%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#B93FC9]/[0.04]
            blur-[90px]
          "
        />
      </div>

      {/* ================= GRID PATTERN ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.028]
          bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-8
        "
      >
        {/* ================= HEADING ================= */}

        <div
          className="mx-auto max-w-3xl text-center"
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
              gap-1.5
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]/80
              px-3
              py-1.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#29B6F0]/40
              sm:gap-2
              sm:px-4
              sm:py-2
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_rgba(41,182,240,.8)]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#29B6F0]
                sm:text-[10px]
                md:text-[11px]
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
              mt-4
              text-[26px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.03em]
              text-white
              sm:mt-5
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[40px]
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
              mt-4
              h-[2px]
              w-12
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              shadow-[0_0_14px_rgba(41,182,240,.25)]
              sm:mt-5
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
              mt-4
              max-w-2xl
              text-[11px]
              leading-6
              text-[#A0A0A8]
              sm:mt-5
              sm:text-xs
              sm:leading-6
              md:text-[13px]
              md:leading-6
            "
          >
            Strategically positioned to support businesses with experienced
            engineering teams and trusted technology partnerships across
            multiple regions.
          </p>
        </div>

        {/* ================= LOCATION SHOWCASE ================= */}

        <div className="relative mt-8 sm:mt-10 md:mt-11 lg:mt-12">
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
                    min-h-[205px]
                    overflow-hidden
                    border-b
                    border-[#2A2A30]
                    px-1
                    py-6
                    transition-all
                    duration-500
                    sm:min-h-[220px]
                    sm:px-4
                    sm:py-7
                    md:min-h-[225px]
                    md:px-5
                    md:py-7
                    lg:px-6
                    lg:py-8
                    ${
                      index < 2
                        ? "xl:border-r"
                        : ""
                    }
                    ${
                      index === 1
                        ? "md:border-r md:border-[#2A2A30] xl:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      h-32
                      w-32
                      rounded-full
                      bg-[#29B6F0]/0
                      blur-[60px]
                      transition-all
                      duration-700
                      group-hover:bg-[#29B6F0]/10
                    "
                  />

                  {/* Bottom Hover Line */}

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

                  {/* ================= TOP ================= */}

                  <div className="relative flex items-center justify-between">
                    {/* Icon */}

                    <div
                      data-aos="zoom-in"
                      data-aos-delay={220 + index * 110}
                      className="
                        relative
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#2A2A30]
                        bg-[#0A0A0A]
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:border-[#29B6F0]/40
                        group-hover:shadow-[0_0_24px_rgba(41,182,240,.12)]
                        sm:h-10
                        sm:w-10
                        sm:rounded-xl
                        md:h-11
                        md:w-11
                      "
                    >
                      <Icon
                        className="
                          h-4
                          w-4
                          text-[#29B6F0]
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          sm:h-5
                          sm:w-5
                          md:h-[21px]
                          md:w-[21px]
                        "
                      />
                    </div>

                    {/* Number */}

                    <span
                      className="
                        select-none
                        text-4xl
                        font-black
                        leading-none
                        tracking-[-0.06em]
                        text-white/[0.045]
                        transition-all
                        duration-500
                        group-hover:text-white/[0.08]
                        sm:text-5xl
                        md:text-6xl
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="relative mt-6 sm:mt-7">
                    {/* Small gradient indicator */}

                    <div
                      className="
                        mb-3
                        h-[2px]
                        w-6
                        rounded-full
                        bg-[linear-gradient(90deg,#29B6F0,#7A4FD1)]
                        transition-all
                        duration-500
                        group-hover:w-10
                      "
                    />

                    {/* Title */}

                    <h3
                      data-aos="fade-up"
                      data-aos-delay={280 + index * 110}
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
                      {item.title}
                    </h3>

                    {/* Value */}

                    <p
                      data-aos="fade-up"
                      data-aos-delay={330 + index * 110}
                      className="
                        mt-2
                        max-w-[360px]
                        text-[17px]
                        font-semibold
                        leading-[1.3]
                        tracking-[-0.02em]
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:text-[19px]
                        md:text-[21px]
                        lg:text-[22px]
                      "
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* ================= ARROW ================= */}

                  <div
                    className="
                      absolute
                      bottom-5
                      right-1
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#2A2A30]
                      bg-[#0A0A0A]
                      opacity-50
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:border-[#3E7BD6]/50
                      group-hover:opacity-100
                      sm:bottom-6
                      sm:right-4
                      md:right-5
                      lg:right-6
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        text-[#A0A0A8]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:h-4
                        sm:w-4
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

        {/* ================= BOTTOM GLOBAL LINE ================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2.5
            text-center
            sm:mt-8
            sm:gap-3
          "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="h-px w-6 bg-[#2A2A30] sm:w-10" />

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#5A5A62]
              sm:text-[9px]
              md:text-[10px]
            "
          >
            Global Technology Presence
          </span>

          <span className="h-px w-6 bg-[#2A2A30] sm:w-10" />
        </div>
      </div>
    </section>
  );
}

