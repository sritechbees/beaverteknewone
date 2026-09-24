
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Cloud,
  BrainCircuit,
} from "lucide-react";

const features = [
  { title: "Enterprise AI Solutions", icon: BrainCircuit },
  { title: "Cloud & Data Platforms", icon: Cloud },
  { title: "Healthcare Technology", icon: ShieldCheck },
  { title: "24/7 Expert Support", icon: Sparkles },
];

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-white">

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[460px]
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-between
          px-4
          py-10

          sm:min-h-[500px]
          sm:px-6
          sm:py-12

          md:px-8
          md:py-14

          lg:min-h-[530px]
          lg:px-10
          lg:py-16

          xl:px-8
        "
      >

        {/* =================================================
            DECORATIVE GLOW
        ================================================== */}
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#29B6F0]/5 blur-[90px]" />

        <div className="pointer-events-none absolute -right-16 top-16 h-56 w-56 rounded-full bg-[#7A4FD1]/5 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#B93FC9]/5 blur-[100px]" />

        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        <div
          className="
            relative
            z-20
            flex
            w-full
            flex-1
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          {/* =================================================
              BADGE
          ================================================== */}
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#DEDEE3]
              bg-white
              px-3.5
              py-1.5
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#3E7BD6]/50

              sm:px-4
              sm:py-2
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#606068]

                sm:text-[11px]

                md:text-xs
              "
            >
              Let&apos;s Build Together
            </span>
          </div>

          {/* =================================================
              HEADING
              Reference: Four Pillars heading sizing
          ================================================== */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="850"
            className="
              mt-4
              max-w-[560px]
              text-[2.15rem]
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#09090B]
              transition-transform
              duration-500

              hover:translate-x-1

              sm:mt-5
              sm:text-[2.55rem]

              md:text-[2.9rem]

              lg:mt-5
              lg:text-[3.25rem]

              xl:text-[3.5rem]
            "
          >
            Need Senior
            <br />

            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Technology Help?
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
              Reference: Four Pillars description sizing
          ================================================== */}
          <p
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="850"
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6.5
              text-[#707078]
              transition-colors
              duration-500

              hover:text-[#414750]

              sm:mt-5
              sm:text-[15px]
              sm:leading-7

              md:text-base
              md:leading-7

              lg:text-[17px]
              lg:leading-7.5
            "
          >
            Partner with experienced engineers to design, build and scale
            secure AI-powered enterprise solutions tailored to your business.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="260"
            data-aos-duration="850"
            className="
              mt-5
              flex
              w-full
              flex-row
              items-center
              justify-center
              gap-2

              sm:mt-6
              sm:w-auto
              sm:gap-3
            "
          >

            {/* View All Demo */}
            <Link
              href="/contact/contacthero"
              className="
                group
                inline-flex
                w-auto
                items-center
                justify-center
                gap-1.5
                rounded-full
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                px-4
                py-2.5
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:scale-[1.02]
                active:scale-95

                sm:px-5
                sm:py-3
                sm:text-xs
              "
            >
              <span>View All Demo</span>

              <ArrowUpRight
                className="
                  h-3
                  w-3
                  shrink-0
                  transition-transform
                  duration-500
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5

                  sm:h-3.5
                  sm:w-3.5
                "
              />
            </Link>

            {/* View Case Studies */}
            <Link
              href="/customers/casestudyoverall"
              className="
                group
                inline-flex
                w-auto
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-[#D8D8DE]
                bg-white
                px-4
                py-2.5
                text-[10px]
                font-semibold
                text-[#18181B]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#3E7BD6]
                hover:bg-[#FAFAFC]
                active:scale-95

                sm:px-5
                sm:py-3
                sm:text-xs
              "
            >
              <span>View Case Studies</span>

              <ArrowUpRight
                className="
                  h-3
                  w-3
                  shrink-0
                  text-[#7A4FD1]
                  transition-transform
                  duration-500
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5

                  sm:h-3.5
                  sm:w-3.5
                "
              />
            </Link>
          </div>
        </div>

        {/* =================================================
            FEATURE CARDS
        ================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="900"
          className="
            relative
            z-20
            mt-8
            grid
            w-full
            max-w-[900px]
            grid-cols-2
            gap-2.5

            sm:mt-10
            sm:gap-3

            md:grid-cols-4
            md:gap-4

            lg:mt-12
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={420 + index * 70}
                data-aos-duration="750"
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#E5E5E9]
                  bg-white
                  px-2.5
                  py-2.5
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-[#3E7BD6]/45
                  hover:bg-[#FCFCFE]

                  sm:px-3
                  sm:py-3
                "
              >
                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    transition-transform
                    duration-400
                    group-hover:scale-105

                    sm:h-8
                    sm:w-8
                  "
                >
                  <Icon
                    className="
                      h-3.5
                      w-3.5
                      text-white

                      sm:h-4
                      sm:w-4
                    "
                  />
                </div>

                <span
                  className="
                    min-w-0
                    text-[8px]
                    font-semibold
                    leading-3
                    text-[#27272A]

                    sm:text-[9px]
                    sm:leading-4

                    md:text-[10px]
                  "
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="650"
          className="
            pointer-events-none
            mt-6
            h-[1px]
            w-[55%]
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent

            sm:mt-7
            sm:w-[50%]

            md:w-[45%]

            lg:w-[40%]
          "
        />
      </div>
    </section>
  );
}

