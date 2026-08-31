"use client";

import { useEffect, useRef } from "react";

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
     SMOOTH INFINITE TRAIN ANIMATION
  ============================================================ */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateWidth = () => {
      /*
        Because the project list is duplicated,
        half of the total width represents one
        complete set of cards.
      */

      loopWidthRef.current = track.scrollWidth / 2;
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(track);

    /*
      Very smooth and slow movement.

      0.25 = very slow
      0.35 = recommended
      0.50 = medium
      0.70 = fast
    */

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

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
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
     PAUSE TRAIN ON HOVER
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
        overflow-hidden
        bg-[#000000]
        px-4
        pb-10
        pt-8

        sm:px-6
        sm:pb-12
        sm:pt-10

        lg:px-10
        lg:pb-14
        lg:pt-12

        xl:px-16
      "
    >
      {/* ==========================================================
          BACKGROUND
      =========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan glow */}

        <div
          className="
            absolute
            -left-40
            top-10
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#29B6F0]/10
            blur-[110px]
          "
        />

        {/* Violet glow */}

        <div
          className="
            absolute
            -right-32
            top-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#7A4FD1]/10
            blur-[120px]
          "
        />

        {/* Magenta glow */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-[#B93FC9]/8
            blur-[120px]
          "
        />

        {/* Subtle grid */}

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
          max-w-[1500px]
        "
      >
        {/* ========================================================
            HERO CONTENT
        ========================================================= */}

        <div
          className="
            grid
            items-center
            gap-8

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10

            xl:grid-cols-[0.9fr_1.1fr]
            xl:gap-16
          "
        >
          {/* ======================================================
              LEFT SIDE TEXT
          ======================================================= */}

          <div
            className="
              max-w-[650px]
              text-center

              lg:text-left
            "
          >
            {/* Small label */}

            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/10
                bg-white/[0.035]
                px-3.5
                py-1.5
                backdrop-blur-xl

                sm:mb-5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#29B6F0]
                  shadow-[0_0_12px_rgba(41,182,240,0.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#A0A0A8]
                  uppercase

                  sm:text-[10px]
                "
              >
                BeaverTek Digital Products
              </span>
            </div>

            {/* ====================================================
                MAIN HEADING
            ===================================================== */}

            <h1
              className="
                text-[42px]
                font-bold
                leading-[0.95]
                tracking-[-0.055em]
                text-white

                sm:text-[52px]

                md:text-[52px]

                lg:text-[50px]

                xl:text-[68px]
              "
            >
              Build What&apos;s
              <br />

              <span
                className="
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Next.
              </span>
            </h1>

            {/* Secondary title */}

            <h2
              className="
                mt-3
                text-[27px]
                font-medium
                leading-tight
                tracking-[-0.035em]
                text-white/95

                sm:text-[34px]

                md:text-[30px]

                lg:text-[32px]

                xl:text-[40px]
              "
            >
              Digital Products
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[530px]
                text-[13px]
                leading-6
                text-[#A0A0A8]

                sm:text-[14px]
                sm:leading-6

                md:text-[15px]

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
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-3

                lg:justify-start
              "
            >
              {/* Primary */}

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
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(62,123,214,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_40px_rgba(185,63,201,0.35)]

                  sm:px-6
                  sm:py-3
                  sm:text-sm
                "
              >
                <span className="relative z-10">
                  Explore Products
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/20
                    transition-transform
                    duration-500
                    group-hover:translate-x-full
                  "
                />
              </button>

              {/* Secondary */}

              <button
                type="button"
                className="
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-white/[0.025]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#3E7BD6]
                  hover:bg-white/[0.05]
                  hover:shadow-[0_0_30px_rgba(62,123,214,0.15)]

                  sm:px-6
                  sm:py-3
                  sm:text-sm
                "
              >
                View Showcase
              </button>
            </div>
          </div>

          {/* ======================================================
              RIGHT STATISTICS CARD
          ======================================================= */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[680px]
            "
          >
            {/* Gradient glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[10%]
                rounded-[30px]
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                opacity-20
                blur-[60px]
              "
            />

            {/* Floating circle */}

            <div
              className="
                absolute
                -right-3
                -top-3
                hidden
                h-12
                w-12
                rounded-full
                border
                border-[#29B6F0]/20
                bg-[#29B6F0]/5
                backdrop-blur-xl

                sm:block
              "
            />

            {/* Main statistics panel */}

            <div
              className="
                relative
                rounded-[22px]
                border
                border-white/10
                bg-[#0A0A0A]/90
                p-2
                shadow-[0_20px_45px_rgba(0,0,0,0.4)]
                backdrop-blur-2xl

                sm:rounded-[24px]
                sm:p-2.5
              "
            >
              {/* Gradient overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[22px]
                  bg-[linear-gradient(135deg,rgba(41,182,240,0.10),transparent_35%,transparent_65%,rgba(185,63,201,0.12))]

                  sm:rounded-[24px]
                "
              />

              {/* ==================================================
                  STAT GRID
              =================================================== */}

              <div
                className="
                  relative
                  grid
                  grid-cols-2
                  gap-2

                  sm:grid-cols-4
                  sm:gap-2.5
                "
              >
                <StatCard
                  number="10+"
                  title="WEBSITE"
                  subtitle="DEMOS"
                  index="01"
                />

                <StatCard
                  number="80+"
                  title="TOTAL INNER"
                  subtitle="PAGE"
                  index="02"
                />

                <StatCard
                  number="350+"
                  title="TOTAL"
                  subtitle="BLOCKS"
                  index="03"
                />

                <StatCard
                  number="10+"
                  title="MEGA MENU"
                  subtitle="DESIGNS"
                  index="04"
                />
              </div>

              {/* ==================================================
                  BOTTOM INFO
              =================================================== */}

              <div
                className="
                  relative
                  mt-2
                  flex
                  items-center
                  justify-between
                  rounded-[14px]
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-3
                  py-2.5

                  sm:px-4
                "
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="
                      flex
                      h-6
                      w-6
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
                        shadow-[0_0_10px_rgba(34,197,94,0.9)]
                      "
                    />
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold text-[#D4D4D8] sm:text-[10px]">
                      DIGITAL SHOWCASE
                    </p>

                    <p className="text-[8px] text-[#7A7A7A] sm:text-[9px]">
                      Built for modern businesses
                    </p>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[8px] tracking-[0.15em] text-[#5A5A5A]">
                    BEAVERTEK
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#A0A0A8]">
                    Build. Scale. Transform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOVING SHOWCASE
        ========================================================= */}

        <div
          className="
            relative
            mt-9

            sm:mt-11

            lg:mt-12
          "
        >
          {/* ======================================================
              SHOWCASE HEADER
          ======================================================= */}

          <div
            className="
              mb-4
              flex
              items-end
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.2em]
                  text-[#29B6F0]
                  uppercase

                  sm:text-[10px]
                "
              >
                Selected Work
              </p>

              <h3
                className="
                  mt-1
                  text-xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white

                  sm:text-2xl
                "
              >
                Digital products in motion.
              </h3>
            </div>

            <p
              className="
                hidden
                max-w-[260px]
                text-right
                text-[10px]
                leading-4
                text-[#7A7A7A]

                sm:block
              "
            >
              A continuous showcase of our digital product experiences.
            </p>
          </div>

          {/* ======================================================
              MOVING CARD VIEWPORT
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
                w-12
                bg-gradient-to-r
                from-[#000000]
                via-[#000000]/80
                to-transparent

                sm:w-20

                lg:w-32
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
                w-12
                bg-gradient-to-l
                from-[#000000]
                via-[#000000]/80
                to-transparent

                sm:w-20

                lg:w-32
              "
            />

            {/* ====================================================
                TRAIN TRACK
            ===================================================== */}

            <div
              ref={trackRef}
              className="
                flex
                w-max
                gap-3
                py-2
                pl-4
                will-change-transform

                sm:gap-4
                sm:pl-6

                lg:gap-5
                lg:pl-10

                xl:pl-16
              "
            >
              {/* FIRST 5 CARDS */}

              {projects.map((project) => (
                <ProductCard
                  key={`first-${project.id}`}
                  image={project.image}
                />
              ))}

              {/* DUPLICATE 5 CARDS */}

              {projects.map((project) => (
                <ProductCard
                  key={`second-${project.id}`}
                  image={project.image}
                />
              ))}
            </div>
          </div>

          {/* ======================================================
              BOTTOM LINE
          ======================================================= */}

          <div className="mt-4 flex items-center justify-center gap-2">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#3E7BD6]
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                tracking-[0.22em]
                text-[#5A5A5A]
                uppercase
              "
            >
              Continuous Showcase
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-[#B93FC9]
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
}: {
  number: string;
  title: string;
  subtitle: string;
  index: string;
}) {
  return (
    <div
      className="
        group
        relative
        min-h-[108px]
        overflow-hidden
        rounded-[14px]
        border
        border-white/[0.08]
        bg-white/[0.04]
        p-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#3E7BD6]/60
        hover:bg-white/[0.065]
        hover:shadow-[0_0_25px_rgba(62,123,214,0.12)]

        sm:min-h-[125px]
        sm:rounded-[16px]
        sm:p-3.5
      "
    >
      {/* Gradient top border */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Number */}

      <div className="flex items-start justify-between">
        <span
          className="
            text-[25px]
            font-bold
            leading-none
            tracking-[-0.05em]
            text-white

            sm:text-[31px]
          "
        >
          {number}
        </span>

        <span
          className="
            text-[7px]
            font-medium
            tracking-[0.1em]
            text-[#5A5A5A]
          "
        >
          {index}
        </span>
      </div>

      {/* Text */}

      <div className="mt-5">
        <p
          className="
            text-[8px]
            font-semibold
            leading-3.5
            tracking-[0.07em]
            text-[#A0A0A8]

            sm:text-[9px]
          "
        >
          {title}
          <br />
          {subtitle}
        </p>
      </div>

      {/* Small glowing dot */}

      <span
        className="
          absolute
          bottom-3
          right-3
          h-1
          w-1
          rounded-full
          bg-[#3E7BD6]
          shadow-[0_0_8px_rgba(62,123,214,0.8)]
          transition-all
          duration-300
          group-hover:scale-150
          group-hover:bg-[#29B6F0]
        "
      />
    </div>
  );
}

/* ================================================================
   MOVING PRODUCT CARD
================================================================ */

function ProductCard({ image }: { image: string }) {
  return (
    <div
      className="
        group
        relative
        h-[150px]
        w-[235px]
        shrink-0
        overflow-hidden
        rounded-[14px]
        border
        border-[#2A2A30]
        bg-[#121212]
        shadow-[0_10px_25px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-[#3E7BD6]
        hover:shadow-[0_15px_35px_rgba(62,123,214,0.18)]

        sm:h-[180px]
        sm:w-[285px]
        sm:rounded-[16px]

        md:h-[195px]
        md:w-[320px]

        lg:h-[215px]
        lg:w-[355px]

        xl:h-[225px]
        xl:w-[375px]
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
          duration-700
          group-hover:scale-[1.035]
        "
      />

      {/* Bottom overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-black/45
          to-transparent
        "
      />

      {/* Brand gradient overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(41,182,240,0.06),transparent_40%,rgba(185,63,201,0.08))]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Hover border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[14px]
          ring-1
          ring-inset
          ring-transparent
          transition-all
          duration-500
          group-hover:ring-[#3E7BD6]/50

          sm:rounded-[16px]
        "
      />
    </div>
  );
}

export default Herosection;