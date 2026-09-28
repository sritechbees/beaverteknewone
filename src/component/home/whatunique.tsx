
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Award,
  BrainCircuit,
  Database,
  Layers3,
  Rocket,
  ArrowRight,
} from "lucide-react";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const uniquePoints = [
  {
    title: "Deep Industry Experience",
    description:
      "80+ years combined with Fortune 500 companies, delivering strategic, high-impact solutions.",
    icon: Award,
  },
  {
    title: "Technology is in Our DNA",
    description:
      "Passion drives us. Innovation defines us. Our energy and focus are unmatched.",
    icon: BrainCircuit,
  },
  {
    title: "Tailored, Future-Ready Solutions",
    description:
      "Every solution we build is scalable, secure, and uniquely designed for your needs.",
    icon: Rocket,
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Transform data into insights with advanced analytics, BI, and real-time reporting.",
    icon: Database,
  },
  {
    title: "Legacy Modernization",
    description:
      "Modernize with confidence. We bridge the gap between legacy infrastructure and modern frameworks.",
    icon: Layers3,
  },
];

function Whatunique() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  const changeFeature = (nextIndex: number) => {
    if (isChanging || nextIndex === activeIndex) return;

    setIsChanging(true);

    setTimeout(() => {
      setActiveIndex(nextIndex);

      setTimeout(() => {
        setIsChanging(false);
      }, 120);
    }, 180);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % uniquePoints.length;
    changeFeature(nextIndex);
  };

  const activeItem = uniquePoints[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND LIGHT
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-64
          w-64
          rounded-full
          bg-[#29B6F0]/[0.035]
          blur-[100px]
          md:h-80
          md:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-64
          w-64
          rounded-full
          bg-[#B93FC9]/[0.035]
          blur-[100px]
          md:h-80
          md:w-80
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* =======================================================
            SECTION HEADING
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
            <span
              className="h-[2px] w-7 rounded-full sm:w-9"
              style={{ background: GRADIENT }}
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#5D5E66]
                sm:text-xs
              "
            >
              Why BeaverTek
            </span>

            <span
              className="h-[2px] w-7 rounded-full sm:w-9"
              style={{ background: GRADIENT }}
            />
          </div>

          {/* Heading */}
          <h2
            className="
              text-[32px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0A0A0A]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[52px]
              xl:text-[56px]
            "
          >
            What makes us{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRADIENT }}
            >
              Unique?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[15px]
              leading-6
              text-[#65666D]
              sm:mt-5
              sm:text-[16px]
              sm:leading-7
              md:text-[17px]
            "
          >
            We know you have plenty of options. Here’s why companies choose{" "}
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: GRADIENT }}
            >
              BeaverTek
            </span>
            .
          </p>
        </div>

        {/* =======================================================
            IMAGE
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="220"
          className="
            relative
            mx-auto
            mt-8
            w-full
            max-w-5xl
            sm:mt-10
            md:mt-12
            lg:mt-14
          "
        >
          {/* =====================================================
              IMAGE AREA
          ====================================================== */}
          <div
            className="
              relative
              h-[350px]
              w-full
              overflow-hidden
              rounded-[20px]
              bg-[#080A10]
              sm:h-[380px]
              sm:rounded-[22px]
              md:h-[400px]
              lg:h-[410px]
              xl:h-[420px]
            "
          >
            {/* Background Image */}
            <Image
              src="/home/whyexist.jpg"
              alt="BeaverTek technology"
              fill
              priority
              className="
                object-cover
                object-center
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* BeaverTek Gradient Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#29B6F0]/10
                via-transparent
                to-[#B93FC9]/15
              "
            />

            {/* =================================================
                COMPACT CONTENT CARD
            ================================================== */}
            <div
  className="
    absolute
    left-4
    top-1/2
    z-20
    w-[calc(100%-32px)]
    max-w-[430px]
    -translate-y-1/2
    sm:left-6
    sm:w-[calc(100%-48px)]
    md:left-8
    lg:left-10
  "
>
  <div
    className={`
      relative
      overflow-hidden
      rounded-[12px]
      border
      border-white/15
      bg-white/10
      px-5
      py-5
      shadow-[0_18px_45px_rgba(0,0,0,0.28)]
      backdrop-blur-xl
      transition-all
      duration-500
      sm:px-6
      sm:py-6
      md:px-7
      md:py-7
      ${
        isChanging
          ? "translate-y-2 opacity-0"
          : "translate-y-0 opacity-100"
      }
    `}
  >
    {/* =================================================
        ICON + CONTENT
    ================================================== */}
    <div className="flex items-start gap-4 sm:gap-5">

      {/* =================================================
          ICON
      ================================================== */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          border
          border-white/15
          bg-white/10
          sm:h-12
          sm:w-12
        "
      >
        <ActiveIcon
          className="
            h-5
            w-5
            text-gray-950
            sm:h-6
            sm:w-6
          "
          strokeWidth={1.5}
        />

        {/* BeaverTek gradient accent */}
        <span
          className="
            absolute
            -right-1
            -top-1
            h-2.5
            w-2.5
            rounded-full
          "
          style={{
            background: GRADIENT,
          }}
        />
      </div>

      {/* =================================================
          TEXT
      ================================================== */}
      <div className="min-w-0 flex-1">

        {/* TITLE */}
        <h3
          className="
            text-[21px]
            font-semibold
            leading-[1.18]
            tracking-[-0.02em]
            text-gray-950
            sm:text-[24px]
            md:text-[27px]
            lg:text-[29px]
          "
        >
          {activeItem.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3
            text-[14px]
            leading-6
            text-white
            sm:text-[15px]
            sm:leading-7
            md:text-[16px]
          "
        >
          {activeItem.description}
        </p>
      </div>
    </div>

    {/* =================================================
        ACTIVE PROGRESS
    ================================================== */}
    <div className="mt-6 flex items-center gap-1.5">
      {uniquePoints.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show feature ${index + 1}`}
          onClick={() => changeFeature(index)}
          className="
            flex
            h-4
            items-center
            justify-center
          "
        >
          <span
            className={`
              block
              h-[2px]
              rounded-full
              transition-all
              duration-500
              ${
                index === activeIndex
                  ? "w-8 sm:w-10"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }
            `}
            style={
              index === activeIndex
                ? {
                    background: GRADIENT,
                  }
                : undefined
            }
          />
        </button>
      ))}
    </div>
  </div>
</div>

            {/* =================================================
                NEXT ARROW
            ================================================== */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Show next reason"
              className="
                group
                absolute
                bottom-5
                right-5
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/20
                active:scale-95
                sm:bottom-6
                sm:right-6
                sm:h-12
                sm:w-12
                md:bottom-7
                md:right-7
              "
            >
              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                strokeWidth={1.7}
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  rounded-full
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-300
                  group-hover:opacity-70
                "
                style={{ background: GRADIENT }}
              />
            </button>
          </div>
        </div>

        {/* =======================================================
            SMALL BOTTOM ACCENT
        ======================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="
            mx-auto
            mt-8
            flex
            h-4
            items-center
            justify-center
            sm:mt-10
          "
        >
          <span
            className="
              h-[3px]
              w-14
              rounded-full
              sm:w-16
              md:w-20
            "
            style={{ background: GRADIENT }}
          />
        </div>
      </div>
    </section>
  );
}

export default Whatunique;
