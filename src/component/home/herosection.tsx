"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const projects = [
  {
    id: 1,
    image: "/home/dataanalytics.jpg",
  },
  {
    id: 2,
    image: "/home/homehero.jpg",
  },
  {
    id: 3,
    image: "/home/abouthero1.png",
  },
  {
    id: 4,
    image: "/home/Banner1.jpg",
  },
  {
    id: 5,
    image: "/home/producthero.png",
  },
];

function Herosection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isPausedRef = useRef(false);

  /* ============================================================
     AOS
  ============================================================ */

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

  /* ============================================================
     SMOOTH INFINITE TRAIN
  ============================================================ */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateWidth = () => {
      loopWidthRef.current = track.scrollWidth / 2;
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(track);

    const speed = 0.32;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current -= speed;

        if (
          loopWidthRef.current > 0 &&
          Math.abs(positionRef.current) >= loopWidthRef.current
        ) {
          positionRef.current += loopWidthRef.current;
        }

        track.style.transform = `translate3d(${positionRef.current}px,0,0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /* ============================================================
     PAUSE ON HOVER
  ============================================================ */

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#000000]

        px-4
        pb-8
        pt-7

        sm:px-6
        sm:pb-10
        sm:pt-8

        md:pb-11
        md:pt-9

        lg:px-10
        lg:pb-12
        lg:pt-10

        xl:px-16
      "
    >
      {/* ==========================================================
          BACKGROUND
      =========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan */}

        <div
          className="
            absolute
            -left-40
            top-0

            h-[260px]
            w-[260px]

            rounded-full

            bg-[#29B6F0]/8

            blur-[110px]

            sm:h-[320px]
            sm:w-[320px]
          "
        />

        {/* Violet */}

        <div
          className="
            absolute
            -right-36
            top-0

            h-[280px]
            w-[280px]

            rounded-full

            bg-[#7A4FD1]/8

            blur-[115px]

            sm:h-[340px]
            sm:w-[340px]
          "
        />

        {/* Magenta */}

        <div
          className="
            absolute
            bottom-0
            left-1/2

            h-[250px]
            w-[250px]

            -translate-x-1/2

            rounded-full

            bg-[#B93FC9]/6

            blur-[110px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.018]

            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]

            [background-size:60px_60px]
          "
        />
      </div>

      {/* ==========================================================
          MAIN CONTAINER
      =========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
        "
      >
        {/* ========================================================
            HERO CONTENT
        ========================================================= */}

        <div
          className="
            grid
            items-center

            gap-7

            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-10

            xl:grid-cols-[0.9fr_1.1fr]
            xl:gap-14
          "
        >
          {/* ======================================================
              LEFT
          ======================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="950"
            className="
              mx-auto
              w-full
              max-w-[620px]

              text-center

              lg:mx-0
              lg:text-left
            "
          >
            {/* LABEL */}

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="650"
              className="
                mb-3
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-white/10

                bg-white/[0.035]

                px-3
                py-1.5

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-[#29B6F0]/40
                hover:bg-white/[0.06]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-1.5
                  w-1.5
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    absolute
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#29B6F0]
                    shadow-[0_0_12px_rgba(41,182,240,.9)]
                  "
                />

                <span
                  className="
                    absolute
                    h-3
                    w-3
                    animate-ping
                    rounded-full
                    bg-[#29B6F0]/20
                  "
                />
              </span>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#A0A0A8]

                  sm:text-[9px]
                "
              >
                BeaverTek Digital Products
              </span>
            </div>

            {/* MAIN TITLE */}

            <h1
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="900"
              className="
           font-extrabold
                text-[40px]
             
                leading-[0.94]
                tracking-[-0.055em]
                text-white

                transition-transform
                duration-500

                hover:translate-x-0.5

                sm:text-[50px]

                md:text-[54px]

                lg:text-[52px]

                xl:text-[66px]
              "
            >
              Build What&apos;s
              <br />

              <span
                className="
                  relative
                  inline-block

                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Next.
              </span>
            </h1>

            {/* SECOND TITLE */}

            <h2
              data-aos="fade-up"
              data-aos-delay="260"
              className="
                mt-2

                text-[25px]
                font-semibold
                leading-tight
                tracking-[-0.035em]

                text-white/95

                transition-all
                duration-500

                hover:text-white

                sm:text-[31px]
                md:text-[33px]
                lg:text-[34px]
                xl:text-[39px]
              "
            >
              Digital Products
            </h2>

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="340"
              className="
                mx-auto
                mt-4

                max-w-[510px]

                text-[12px]
                leading-[1.7]

                text-[#A0A0A8]

                transition-colors
                duration-500

                hover:text-[#D4D4D8]

                sm:text-[13px]

                md:text-[14px]

                lg:mx-0
              "
            >
              We create modern digital products that combine exceptional
              experiences, powerful technology, and scalable solutions for
              ambitious businesses.
            </p>

            {/* ====================================================
                BUTTONS
            ===================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="430"
              className="
                mt-5

                flex
                flex-wrap
                justify-center
                gap-2.5

                lg:justify-start
              "
            >
              {/* PRIMARY */}
<Link href="/products/producthero">
              <button
                type="button"
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-full

                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]

                  px-5
                  py-2.5

                  text-[11px]
                  font-semibold
                  text-white

                  transition-all
                  duration-400

                  hover:-translate-y-1

                  hover:shadow-[0_10px_30px_rgba(62,123,214,.30)]

                  active:translate-y-0

                  sm:px-6
                  sm:py-3
                  sm:text-xs
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products

                  <ArrowUpRight
                    className="
                      h-3
                      w-3

                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>

                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-[60%]

                    skew-x-[-20deg]

                    bg-white/20

                    transition-all
                    duration-700

                    group-hover:left-[130%]
                  "
                />
              </button></Link>

              {/* SECONDARY */}
<Link href="/customers/casestudyoverall">
              <button
                type="button"
                className="
                  group

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.025]

                  px-5
                  py-2.5

                  text-[11px]
                  font-semibold
                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-400

                  hover:-translate-y-1
                  hover:border-[#3E7BD6]/70
                  hover:bg-[#3E7BD6]/10
                  hover:text-[#29B6F0]

                  sm:px-6
                  sm:py-3
                  sm:text-xs
                "
              >
                <span className="flex items-center gap-2">
                  View Showcase

                  <ArrowUpRight
                    className="
                      h-3
                      w-3

                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </button>
              </Link>
            </div>
          </div>

          {/* ======================================================
              RIGHT STATISTICS
          ======================================================= */}

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="950"
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]
            "
          >
            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[12%]

                rounded-[30px]

                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

                opacity-15

                blur-[55px]
              "
            />

            {/* FLOATING ORB */}

            <div
              className="
                pointer-events-none
                absolute
                -right-2
                -top-3
                hidden

                h-10
                w-10

                rounded-full

                border
                border-[#29B6F0]/25

                bg-[#29B6F0]/5

                backdrop-blur-xl

                transition-all
                duration-700

                hover:scale-125

                sm:block
              "
            />

            {/* PANEL */}

            <div
              className="
                group/panel
                relative

                rounded-[20px]

                border
                border-white/10

                bg-[#0A0A0A]/90

                p-1.5

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:border-[#3E7BD6]/35

                sm:rounded-[23px]
                sm:p-2
              "
            >
              {/* PANEL GRADIENT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  rounded-[20px]

                  bg-[linear-gradient(135deg,rgba(41,182,240,.09),transparent_35%,transparent_65%,rgba(185,63,201,.10))]

                  opacity-70

                  transition-opacity
                  duration-500

                  group-hover/panel:opacity-100

                  sm:rounded-[23px]
                "
              />

              {/* STAT GRID */}

              <div
                className="
                  relative

                  grid
                  grid-cols-2

                  gap-1.5

                  sm:grid-cols-4
                  sm:gap-2
                "
              >
                <StatCard
                  number="10+"
                  title="WEBSITE"
                  subtitle="DEMOS"
                  index="01"
                  delay="250"
                />

                <StatCard
                  number="80+"
                  title="TOTAL INNER"
                  subtitle="PAGE"
                  index="02"
                  delay="330"
                />

                <StatCard
                  number="350+"
                  title="TOTAL"
                  subtitle="BLOCKS"
                  index="03"
                  delay="410"
                />

                <StatCard
                  number="10+"
                  title="MEGA MENU"
                  subtitle="DESIGNS"
                  index="04"
                  delay="490"
                />
              </div>

              {/* BOTTOM INFO */}

              <div
                data-aos="fade-up"
                data-aos-delay="540"
                className="
                  relative

                  mt-1.5

                  flex
                  items-center
                  justify-between

                  rounded-[12px]

                  border
                  border-white/[0.06]

                  bg-white/[0.025]

                  px-2.5
                  py-2

                  transition-all
                  duration-500

                  hover:border-[#3E7BD6]/20
                  hover:bg-white/[0.04]

                  sm:px-3.5
                  sm:py-2.5
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      bg-[#22C55E]/10
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        rounded-full

                        bg-[#22C55E]

                        shadow-[0_0_9px_rgba(34,197,94,.9)]
                      "
                    />
                  </span>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        text-[#D4D4D8]

                        sm:text-[9px]
                      "
                    >
                      DIGITAL SHOWCASE
                    </p>

                    <p
                      className="
                        text-[7px]
                        text-[#707078]

                        sm:text-[8px]
                      "
                    >
                      Built for modern businesses
                    </p>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p
                    className="
                      text-[7px]
                      tracking-[0.16em]
                      text-[#55555D]
                    "
                  >
                    BEAVERTEK
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      text-[#A0A0A8]
                    "
                  >
                    Build. Scale. Transform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SHOWCASE
        ========================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
          className="
            relative
            mt-8

            sm:mt-10

            lg:mt-11
          "
        >
          {/* HEADER */}

          <div
            className="
              mb-3.5

              flex
              items-end
              justify-between
              gap-4

              sm:mb-4
            "
          >
            <div
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#29B6F0]

                  sm:text-[9px]
                "
              >
                Selected Work
              </p>

              <h3
                className="
                  mt-0.5

                  text-lg
                  font-semibold
                  tracking-[-0.03em]
                  text-white

                  transition-colors
                  duration-300

                  hover:text-[#D4D4D8]

                  sm:text-xl
                  md:text-2xl
                "
              >
                Digital products in motion.
              </h3>
            </div>

            <p
              data-aos="fade-left"
              data-aos-delay="300"
              className="
                hidden
                max-w-[280px]

                text-right
                text-[9px]
                leading-4
                text-[#6F6F77]

                sm:block
              "
            >
              A continuous showcase of our digital product experiences.
            </p>
          </div>

          {/* ======================================================
              VIEWPORT
          ======================================================= */}

          <div
            className="
              relative

              -mx-4

              overflow-hidden

              sm:-mx-6

              lg:-mx-10

              xl:-mx-16
            "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-20
                h-full

                w-10

                bg-gradient-to-r
                from-[#000000]
                via-[#000000]/80
                to-transparent

                sm:w-16

                lg:w-28

                xl:w-36
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-20
                h-full

                w-10

                bg-gradient-to-l
                from-[#000000]
                via-[#000000]/80
                to-transparent

                sm:w-16

                lg:w-28

                xl:w-36
              "
            />

            {/* TRACK */}

            <div
              ref={trackRef}
              className="
                flex
                w-max

                gap-2.5

                py-1.5
                pl-4

                will-change-transform

                sm:gap-3.5
                sm:pl-6

                lg:gap-4
                lg:pl-10

                xl:gap-5
                xl:pl-16
              "
            >
              {projects.map((project) => (
                <ProductCard
                  key={`first-${project.id}`}
                  image={project.image}
                />
              ))}

              {projects.map((project) => (
                <ProductCard
                  key={`second-${project.id}`}
                  image={project.image}
                />
              ))}
            </div>
          </div>

          {/* BOTTOM LABEL */}

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="
              mt-3

              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className="
                h-px
                w-6

                bg-gradient-to-r
                from-transparent
                to-[#3E7BD6]

                sm:w-8
              "
            />

            <span
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#55555D]

                sm:text-[8px]
              "
            >
              Continuous Showcase
            </span>

            <span
              className="
                h-px
                w-6

                bg-gradient-to-l
                from-transparent
                to-[#B93FC9]

                sm:w-8
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STAT CARD
================================================================ */

function StatCard({
  number,
  title,
  subtitle,
  index,
  delay,
}: {
  number: string;
  title: string;
  subtitle: string;
  index: string;
  delay: string;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="
        group/stat
        relative

        min-h-[96px]

        overflow-hidden

        rounded-[12px]

        border
        border-white/[0.08]

        bg-white/[0.035]

        p-2.5

        backdrop-blur-xl

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-[#3E7BD6]/60
        hover:bg-white/[0.065]

        sm:min-h-[112px]
        sm:rounded-[14px]
        sm:p-3
      "
    >
      {/* TOP LINE */}

      <div
        className="
          absolute
          left-0
          top-0

          h-[2px]
          w-0

          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

          transition-all
          duration-600

          group-hover/stat:w-full
        "
      />

      {/* GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10

          h-20
          w-20

          rounded-full

          bg-[#29B6F0]/10

          blur-[30px]

          opacity-0

          transition-opacity
          duration-500

          group-hover/stat:opacity-100
        "
      />

      {/* NUMBER */}

      <div className="relative z-10 flex items-start justify-between">
        <span
          className="
            text-[23px]
            font-bold
            leading-none
            tracking-[-0.05em]
            text-white

            transition-all
            duration-500

            group-hover/stat:bg-[linear-gradient(135deg,#29B6F0,#7A4FD1,#B93FC9)]
            group-hover/stat:bg-clip-text
            group-hover/stat:text-transparent

            sm:text-[28px]
          "
        >
          {number}
        </span>

        <span
          className="
            text-[6px]
            font-medium
            tracking-[0.1em]
            text-[#55555D]

            transition-colors
            duration-300

            group-hover/stat:text-[#29B6F0]
          "
        >
          {index}
        </span>
      </div>

      {/* TEXT */}

      <div className="relative z-10 mt-4">
        <p
          className="
            text-[7px]
            font-semibold
            leading-[1.45]
            tracking-[0.06em]
            text-[#A0A0A8]

            transition-colors
            duration-300

            group-hover/stat:text-[#D4D4D8]

            sm:text-[8px]
          "
        >
          {title}
          <br />
          {subtitle}
        </p>
      </div>

      {/* DOT */}

      <span
        className="
          absolute
          bottom-2.5
          right-2.5

          h-1
          w-1

          rounded-full

          bg-[#3E7BD6]

          shadow-[0_0_8px_rgba(62,123,214,.8)]

          transition-all
          duration-500

          group-hover/stat:scale-150
          group-hover/stat:bg-[#29B6F0]
        "
      />
    </div>
  );
}

/* ================================================================
   PRODUCT CARD
================================================================ */

function ProductCard({ image }: { image: string }) {
  return (
    <div
      className="
        group/product

        relative

        h-[135px]
        w-[215px]

        shrink-0
        overflow-hidden

        rounded-[13px]

        border
        border-[#2A2A30]

        bg-[#121212]

        transition-all
        duration-600
        ease-out

        hover:-translate-y-2
        hover:scale-[1.015]
        hover:border-[#3E7BD6]

        sm:h-[165px]
        sm:w-[260px]
        sm:rounded-[15px]

        md:h-[180px]
        md:w-[295px]

        lg:h-[195px]
        lg:w-[325px]

        xl:h-[205px]
        xl:w-[350px]
      "
    >
      {/* IMAGE */}

      <img
        src={image}
        alt="BeaverTek digital product showcase"
        draggable={false}
        className="
          h-full
          w-full

          select-none

          object-cover
          object-top

          transition-transform
          duration-1000
          ease-out

          group-hover/product:scale-[1.08]
        "
      />

      {/* DARK BOTTOM */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[55%]

          bg-gradient-to-t
          from-black/55
          via-black/15
          to-transparent

          opacity-70

          transition-opacity
          duration-500

          group-hover/product:opacity-100
        "
      />

      {/* GRADIENT OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(135deg,rgba(41,182,240,.05),transparent_38%,rgba(122,79,209,.05),rgba(185,63,201,.12))]

          opacity-0

          transition-opacity
          duration-600

          group-hover/product:opacity-100
        "
      />

      {/* SCAN LINE */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0

          h-[2px]
          w-0

          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

          transition-all
          duration-700

          group-hover/product:w-full
        "
      />

      {/* HOVER BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[13px]

          ring-1
          ring-inset
          ring-transparent

          transition-all
          duration-500

          group-hover/product:ring-[#29B6F0]/35

          sm:rounded-[15px]
        "
      />

      {/* CORNER INDICATOR */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-2
          right-2

          h-1.5
          w-1.5

          rounded-full

          bg-[#29B6F0]

          opacity-0

          shadow-[0_0_10px_rgba(41,182,240,.9)]

          transition-all
          duration-500

          group-hover/product:opacity-100
        "
      />
    </div>
  );
}

export default Herosection;