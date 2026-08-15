"use client";

import { useEffect } from "react";
import {
  Building2,
  MapPin,
  Globe2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhereWeAre() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
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
    <section className="relative overflow-hidden bg-[#000000] py-16 sm:py-20 lg:py-16">

      {/* ================= GRID PATTERN ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#2A2A30]
              bg-[#121212]
              px-4
              py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#29B6F0]
              sm:px-5
              sm:py-2.5
              sm:text-xs
            "
          >
            Global Presence
          </span>

          {/* Title */}

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
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

          {/* Divider */}

          <div
            className="
              mx-auto
              mt-6
              h-[3px]
              w-16
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              sm:w-24
            "
          />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[#A0A0A8]
              sm:mt-7
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            Strategically positioned to support businesses with experienced
            engineering teams and trusted technology partnerships across
            multiple regions.
          </p>

        </div>


        {/* ================= LOCATION CARDS ================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-14
            sm:gap-6
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-7
          "
        >

          {locations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#3E7BD6]
                  hover:shadow-[0_0_60px_rgba(62,123,214,.35)]
                  sm:p-7
                  lg:p-8
                "
              >

                {/* ================= TOP ROW ================= */}

                <div className="flex items-start justify-between">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      transition-transform
                      duration-500
                      group-hover:scale-105
                      sm:h-16
                      sm:w-16
                    "
                  >
                    <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>

                  {/* Number */}

                  <span
                    className="
                      text-5xl
                      font-black
                      leading-none
                      text-white/[0.045]
                      sm:text-6xl
                    "
                  >
                    0{index + 1}
                  </span>

                </div>


                {/* ================= CARD CONTENT ================= */}

                <div className="mt-7 sm:mt-8">

                  {/* Title */}

                  <h3
                    className="
                      text-base
                      font-semibold
                      tracking-wide
                      text-[#29B6F0]
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Value */}

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-xl
                      font-semibold
                      leading-snug
                      text-white
                      sm:text-2xl
                    "
                  >
                    {item.value}
                  </p>

                </div>


                {/* ================= BOTTOM ACCENT ================= */}

                <div
                  className="
                    mt-7
                    h-[3px]
                    w-10
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    transition-all
                    duration-500
                    group-hover:w-24
                  "
                />

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}