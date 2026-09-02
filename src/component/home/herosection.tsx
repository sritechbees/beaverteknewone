"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, ChevronRight } from "lucide-react";

/* ================================================================
   PROJECTS
================================================================ */

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

/* ================================================================
   STATS
================================================================ */

const stats = [
  {
    number: "10+",
    title: "WEBSITE",
    subtitle: "DEMOS",
    index: "01",
    icon: "screen" as const,
  },
  {
    number: "80+",
    title: "TOTAL INNER",
    subtitle: "PAGES",
    index: "02",
    icon: "file" as const,
  },
  {
    number: "350+",
    title: "TOTAL",
    subtitle: "BLOCKS",
    index: "03",
    icon: "grid" as const,
  },
  {
    number: "10+",
    title: "MEGA MENU",
    subtitle: "DESIGNS",
    index: "04",
    icon: "menu" as const,
  },
];

/* ================================================================
   HERO SECTION
================================================================ */

function Herosection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);

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
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  /* ============================================================
     INFINITE SHOWCASE
  ============================================================ */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const speed = 0.8;

    const animate = () => {
      if (!pausedRef.current) {
        positionRef.current -= speed;

        const loopWidth = track.scrollWidth / 2;

        if (
          loopWidth > 0 &&
          Math.abs(positionRef.current) >= loopWidth
        ) {
          positionRef.current += loopWidth;
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        px-4
        pb-10
        pt-7
        sm:px-6
        sm:pb-12
        sm:pt-9
        lg:px-10
        lg:pb-14
        lg:pt-10
        xl:px-16
      "
      style={{
        backgroundImage: "url('/home/homebg.jpeg')",
      }}
    >
      {/* ========================================================
          BACKGROUND OVERLAY
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* ========================================================
          BACKGROUND GRADIENT
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.65),rgba(0,0,0,0.35),rgba(20,10,45,0.45))]
        "
      />

      {/* ========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* CYAN */}

        <div
          className="
            absolute
            -left-40
            top-10
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#29B6F0]/15
            blur-[120px]
            sm:h-[420px]
            sm:w-[420px]
          "
        />

        {/* VIOLET */}

        <div
          className="
            absolute
            -right-40
            top-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#7A4FD1]/18
            blur-[130px]
            sm:h-[520px]
            sm:w-[520px]
          "
        />

        {/* MAGENTA */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-[#B93FC9]/12
            blur-[130px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
        "
      >
        {/* ======================================================
            HERO
        ======================================================= */}

        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[.88fr_1.12fr]
            lg:gap-10
            xl:gap-12
          "
        >
          {/* ====================================================
              LEFT CONTENT
          ==================================================== */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[560px]
              text-center
              lg:mx-0
              lg:text-left
            "
          >
            {/* LABEL */}

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/20
                px-3.5
                py-1.5
                shadow-[0_0_25px_rgba(41,182,240,0.06)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#29B6F0]/50
                hover:bg-white/[.06]
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
                    shadow-[0_0_12px_rgba(41,182,240,0.95)]
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
                  tracking-[.18em]
                  text-[#D4D4D8]
                  sm:text-[9px]
                "
              >
                BeaverTek Digital Products
              </span>
            </div>

            {/* TITLE */}

            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                text-[43px]
                font-extrabold
                leading-[.91]
                tracking-[-.06em]
                text-white
                drop-shadow-[0_5px_25px_rgba(0,0,0,0.3)]
                sm:text-[53px]
                md:text-[60px]
                lg:text-[55px]
                xl:text-[70px]
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

            {/* DESCRIPTION */}

            <p
              data-aos="fade-up"
              data-aos-delay="290"
              className="
                mx-auto
                mt-3.5
                max-w-[500px]
                text-[11px]
                leading-[1.75]
                text-[#C4C4CA]
                sm:text-[12px]
                md:text-[13px]
                lg:mx-0
              "
            >
              We create modern digital products that combine exceptional
              experiences, powerful technology, and scalable solutions for
              ambitious businesses.
            </p>
          </div>

          {/* ====================================================
              RIGHT SIDE
          ==================================================== */}

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="1000"
            className="
              relative
              mx-auto
              w-full
              max-w-[700px]
              lg:translate-x-2
              xl:translate-x-4
            "
          >
            {/* ==================================================
                DIGITAL ORB
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[8%]
                -top-[27%]
                h-[320px]
                w-[320px]
                rounded-full
                border
                border-[#29B6F0]/25
                bg-[radial-gradient(circle_at_30%_30%,rgba(41,182,240,0.3),rgba(62,123,214,0.12)_35%,rgba(122,79,209,0.08)_58%,transparent_72%)]
                shadow-[0_0_100px_rgba(41,182,240,0.18)]
                sm:h-[430px]
                sm:w-[430px]
                md:h-[520px]
                md:w-[520px]
                lg:h-[600px]
                lg:w-[600px]
              "
            />

            {/* ORBIT */}

            <div
              className="
                pointer-events-none
                absolute
                right-[4%]
                top-[7%]
                h-[100px]
                w-[350px]
                rotate-[-18deg]
                rounded-[50%]
                border
                border-[#7A4FD1]/35
                shadow-[0_0_35px_rgba(122,79,209,0.15)]
                sm:w-[440px]
              "
            />

            {/* ORB LIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                right-[12%]
                top-[18%]
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-[#29B6F0]
                shadow-[0_0_25px_8px_rgba(41,182,240,0.35)]
              "
            />

            {/* ==================================================
                PANEL OUTER GLOW
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[5%]
                rounded-[34px]
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                opacity-20
                blur-[45px]
                transition-all
                duration-700
              "
            />

            {/* ==================================================
                MAIN GRADIENT BORDER
            =================================================== */}

            <div
              className="
                group/panel
                relative
                z-10
                overflow-hidden
                rounded-[23px]
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                p-[1px]
                shadow-[0_25px_90px_rgba(0,0,0,0.55),0_0_40px_rgba(62,123,214,0.18)]
                transition-all
                duration-700
                hover:-translate-y-1
                hover:shadow-[0_30px_100px_rgba(62,123,214,0.28),0_0_60px_rgba(185,63,201,0.22)]
                sm:rounded-[27px]
              "
            >
              {/* OUTER BLUR LIGHT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[2px]
                  rounded-[25px]
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  opacity-30
                  blur-[12px]
                  transition-opacity
                  duration-700
                  group-hover/panel:opacity-60
                "
              />

              {/* ==================================================
                  INNER CARD
              =================================================== */}

              <div
                className="
                  group/inner
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[.08]
                  bg-[#121212]
                  p-2
                  backdrop-blur-2xl
                  sm:rounded-[26px]
                  sm:p-2.5
                "
              >
                {/* GRADIENT LIGHT WASH */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(135deg,rgba(41,182,240,0.1)_0%,transparent_30%,transparent_52%,rgba(122,79,209,0.08)_72%,rgba(185,63,201,0.12)_100%)]
                  "
                />

                {/* CYAN LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-[#29B6F0]/15
                    blur-[65px]
                    transition-all
                    duration-700
                    group-hover/panel:bg-[#29B6F0]/25
                  "
                />

                {/* VIOLET LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-50px]
                    top-[25%]
                    h-48
                    w-48
                    rounded-full
                    bg-[#7A4FD1]/12
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover/panel:bg-[#7A4FD1]/22
                  "
                />

                {/* MAGENTA LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-70px]
                    right-[-30px]
                    h-44
                    w-44
                    rounded-full
                    bg-[#B93FC9]/12
                    blur-[65px]
                    transition-all
                    duration-700
                    group-hover/panel:bg-[#B93FC9]/22
                  "
                />

                {/* ==================================================
                    FLOATING PARTICLES
                =================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    overflow-hidden
                    rounded-[inherit]
                  "
                >
                  <span
                    className="
                      absolute
                      left-[12%]
                      top-[18%]
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#29B6F0]
                      shadow-[0_0_18px_#29B6F0]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[18%]
                      top-[25%]
                      h-1
                      w-1
                      animate-pulse
                      rounded-full
                      bg-[#7A4FD1]
                      shadow-[0_0_16px_#7A4FD1]
                      [animation-delay:500ms]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[22%]
                      left-[28%]
                      h-1
                      w-1
                      animate-pulse
                      rounded-full
                      bg-[#B93FC9]
                      shadow-[0_0_16px_#B93FC9]
                      [animation-delay:1000ms]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[15%]
                      right-[32%]
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-[#3E7BD6]
                      shadow-[0_0_18px_#3E7BD6]
                      [animation-delay:700ms]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-[55%]
                      top-[12%]
                      h-1
                      w-1
                      animate-pulse
                      rounded-full
                      bg-[#29B6F0]
                      shadow-[0_0_14px_#29B6F0]
                      [animation-delay:1500ms]
                    "
                  />
                </div>

                {/* TOP GRADIENT LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[7%]
                    right-[7%]
                    top-0
                    h-[2px]
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    shadow-[0_0_15px_rgba(41,182,240,0.65),0_0_25px_rgba(185,63,201,0.25)]
                  "
                />

                {/* INNER HIGHLIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[15%]
                    top-0
                    h-[70px]
                    w-[70%]
                    rounded-full
                    bg-[#29B6F0]/5
                    blur-[35px]
                  "
                />

                {/* ==================================================
                    STATS GRID
                =================================================== */}

                <div
                  className="
                    relative
                    z-10
                    grid
                    grid-cols-2
                    gap-1.5
                    sm:grid-cols-4
                    sm:gap-2
                  "
                >
                  {stats.map((stat, index) => (
                    <StatCard
                      key={stat.index}
                      {...stat}
                      delay={250 + index * 80}
                    />
                  ))}
                </div>

                {/* ==================================================
                    INFO BAR
                =================================================== */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="
                    group/info
                    relative
                    z-10
                    mt-2
                    flex
                    items-center
                    justify-between
                    gap-3
                    overflow-hidden
                    rounded-[13px]
                    border
                    border-[#2A2A30]
                    bg-[#1A1A1E]/80
                    px-3
                    py-3
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-[#3E7BD6]/60
                    hover:bg-[#1A1A1E]
                    hover:shadow-[0_0_30px_rgba(62,123,214,0.12)]
                    sm:px-4
                  "
                >
                  {/* MOVING LIGHT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-[30%]
                      top-0
                      h-full
                      w-[30%]
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[.07]
                      to-transparent
                      transition-all
                      duration-1000
                      group-hover/info:left-[110%]
                    "
                  />

                  {/* LEFT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      min-w-0
                      items-center
                      gap-2.5
                    "
                  >
                    <div
                      className="
                        relative
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[9px]
                        border
                        border-[#3E7BD6]/35
                        bg-[linear-gradient(135deg,rgba(41,182,240,0.15),rgba(62,123,214,0.12),rgba(122,79,209,0.12),rgba(185,63,201,0.15))]
                        transition-all
                        duration-500
                        group-hover/info:scale-110
                        group-hover/info:border-[#29B6F0]/60
                        group-hover/info:shadow-[0_0_25px_rgba(41,182,240,0.18)]
                      "
                    >
                      <Box className="h-4 w-4 text-[#D4D4D8]" />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-[8px]
                          font-semibold
                          tracking-[.05em]
                          text-white
                          sm:text-[9px]
                        "
                      >
                        DIGITAL SHOWCASE
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[7px]
                          text-[#7A7A7A]
                          sm:text-[8px]
                        "
                      >
                        Built for modern businesses
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}

                  <div className="relative z-10 hidden text-right sm:block">
                    <p
                      className="
                        bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                        bg-clip-text
                        text-[8px]
                        font-bold
                        tracking-[.16em]
                        text-transparent
                      "
                    >
                      BEAVERTEK
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#7A7A7A]">
                      Build. Scale. Transform.
                    </p>
                  </div>
                </div>

                {/* INNER BORDER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[22px]
                    ring-1
                    ring-inset
                    ring-white/[.05]
                    sm:rounded-[26px]
                  "
                />
              </div>
            </div>

            {/* ==================================================
                FLOATING DOTS
            =================================================== */}

            <span
              className="
                pointer-events-none
                absolute
                -right-1
                top-[18%]
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-[#29B6F0]
                shadow-[0_0_18px_#29B6F0]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-[8%]
                left-[4%]
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-[#B93FC9]
                shadow-[0_0_16px_#B93FC9]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                bottom-[3%]
                right-[15%]
                h-1
                w-1
                rounded-full
                bg-[#7A4FD1]
                shadow-[0_0_12px_#7A4FD1]
              "
            />
          </div>
        </div>

        {/* ======================================================
            SELECTED WORK
        ======================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            relative
            mt-9
            sm:mt-11
            lg:mt-12
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
                  tracking-[.2em]
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
                  tracking-[-.035em]
                  text-white
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
                text-[#8A8A92]
                sm:block
              "
            >
              A continuous showcase of our digital product experiences.
            </p>
          </div>

          {/* ====================================================
              SHOWCASE VIEWPORT
          ==================================================== */}

          <div
            className="
              relative
              -mx-4
              overflow-hidden
              sm:-mx-6
              lg:-mx-10
              xl:-mx-16
            "
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-20
                w-14
                bg-gradient-to-r
                from-black/75
                to-transparent
                sm:w-20
                lg:w-32
                xl:w-40
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-20
                w-14
                bg-gradient-to-l
                from-black/75
                to-transparent
                sm:w-20
                lg:w-32
                xl:w-40
              "
            />

            {/* TRACK */}

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
              {[...projects, ...projects].map((project, index) => (
                <ProductCard
                  key={`${project.id}-${index}`}
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
                w-7
                bg-gradient-to-r
                from-transparent
                to-[#29B6F0]
                sm:w-9
              "
            />

            <span
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[.2em]
                text-[#62626B]
                sm:text-[8px]
              "
            >
              Continuous Showcase
            </span>

            <span
              className="
                h-px
                w-7
                bg-gradient-to-l
                from-transparent
                to-[#B93FC9]
                sm:w-9
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STAT ICON
================================================================ */

function StatIcon({
  type,
}: {
  type: "screen" | "file" | "grid" | "menu";
}) {
  const iconClass =
    "relative z-10 h-4 w-4 text-[#D4D4D8] transition-all duration-500 group-hover/stat:text-white group-hover/stat:scale-110";

  switch (type) {
    case "screen":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={iconClass}
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="13"
            rx="2"
          />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );

    case "file":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={iconClass}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>
      );

    case "grid":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={iconClass}
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1.5"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1.5"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1.5"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1.5"
          />
        </svg>
      );

    case "menu":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={iconClass}
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h10" />
          <circle
            cx="18"
            cy="18"
            r="2"
          />
        </svg>
      );

    default:
      return null;
  }
}

/* ================================================================
   PRODUCT CARD
================================================================ */

function ProductCard({
  image,
}: {
  image: string;
}) {
  return (
    <div
      className="
        group/product
        relative
        h-[150px]
        w-[245px]
        shrink-0
        overflow-hidden
        rounded-[18px]
        border
        border-white/10
        bg-[#121212]
        shadow-[0_15px_45px_rgba(0,0,0,0.35)]
        transition-all
        duration-700
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-[#3E7BD6]/60
        hover:shadow-[0_20px_55px_rgba(62,123,214,0.20),0_0_35px_rgba(185,63,201,0.12)]
        sm:h-[175px]
        sm:w-[290px]
        lg:h-[195px]
        lg:w-[330px]
      "
    >
      {/* IMAGE */}

      <img
        src={image}
        alt="Digital product showcase"
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover/product:scale-110
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
          transition-all
          duration-500
          group-hover/product:from-black/65
        "
      />

      {/* GRADIENT BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[18px]
          ring-1
          ring-inset
          ring-white/10
          transition-all
          duration-500
          group-hover/product:ring-[#29B6F0]/40
        "
      />

      {/* TOP GRADIENT LINE */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
          shadow-[0_0_15px_rgba(41,182,240,0.8)]
          transition-all
          duration-700
          group-hover/product:w-full
        "
      />

      {/* CENTER PLAY */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          scale-75
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/40
          opacity-0
          backdrop-blur-md
          transition-all
          duration-500
          group-hover/product:scale-100
          group-hover/product:opacity-100
        "
      >
        <ChevronRight
          className="
            h-4
            w-4
            text-white
            transition-transform
            duration-300
            group-hover/product:translate-x-0.5
          "
        />
      </div>

      {/* CORNER DOT */}

      <span
        className="
          absolute
          right-3
          top-3
          h-1.5
          w-1.5
          rounded-full
          bg-[#29B6F0]
          shadow-[0_0_12px_#29B6F0]
          transition-all
          duration-500
          group-hover/product:scale-150
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-1/2
          h-20
          w-32
          -translate-x-1/2
          rounded-full
          bg-[#7A4FD1]/20
          blur-[30px]
          opacity-0
          transition-all
          duration-700
          group-hover/product:opacity-100
        "
      />
    </div>
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
  icon,
  delay,
}: {
  number: string;
  title: string;
  subtitle: string;
  index: string;
  icon: "screen" | "file" | "grid" | "menu";
  delay: number;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="
        group/stat
        relative
        min-h-[120px]
        overflow-hidden
        rounded-[14px]
        border
        border-[#2A2A30]
        bg-[#121212]
        p-2.5
        backdrop-blur-xl
        transition-all
        duration-700
        ease-out
        hover:-translate-y-2
        hover:border-[#3E7BD6]/70
        hover:bg-[#17171A]
        hover:shadow-[0_18px_45px_rgba(62,123,214,0.20),0_0_45px_rgba(185,63,201,0.12)]
        sm:min-h-[135px]
        sm:rounded-[16px]
        sm:p-3
      "
    >
      {/* =====================================================
          PREMIUM MOVING SHINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[80%]
          top-0
          h-full
          w-[55%]
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
          opacity-0
          transition-all
          duration-[1200ms]
          group-hover/stat:left-[120%]
          group-hover/stat:opacity-100
        "
      />

      {/* =====================================================
          TOP GRADIENT LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          bottom-0
          h-[2px]
          w-0
          rounded-full
          bg-[linear-gradient(90deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
          shadow-[0_0_15px_rgba(41,182,240,0.65)]
          transition-all
          duration-700
          group-hover/stat:w-full
        "
      />

      {/* =====================================================
          CARD GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(41,182,240,0.08),transparent_35%,transparent_58%,rgba(185,63,201,0.10))]
          opacity-60
          transition-all
          duration-700
          group-hover/stat:opacity-100
        "
      />

      {/* =====================================================
          TOP RIGHT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#29B6F0]/12
          blur-[30px]
          opacity-50
          transition-all
          duration-700
          group-hover/stat:scale-150
          group-hover/stat:opacity-100
        "
      />

      {/* =====================================================
          BOTTOM MAGENTA GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-8
          h-24
          w-24
          rounded-full
          bg-[#B93FC9]/10
          blur-[30px]
          opacity-30
          transition-all
          duration-700
          group-hover/stat:scale-150
          group-hover/stat:opacity-100
        "
      />

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          min-h-[115px]
          flex-col
          items-center
          justify-center
          text-center
          sm:min-h-[130px]
        "
      >
        {/* ===================================================
            ICON
        =================================================== */}

        <div className="relative flex items-center justify-center">

          {/* OUTER GLOW */}

          <span
            className="
              pointer-events-none
              absolute
              h-10
              w-10
              rounded-full
              bg-[#29B6F0]/10
              blur-[12px]
              opacity-70
              animate-pulse
              transition-all
              duration-500
              group-hover/stat:h-14
              group-hover/stat:w-14
              group-hover/stat:bg-[#29B6F0]/20
            "
          />

          {/* OUTER ROTATING RING */}

          <span
            className="
              pointer-events-none
              absolute
              h-[46px]
              w-[46px]
              rounded-full
              border
              border-dashed
              border-[#3E7BD6]/20
              opacity-70
              transition-all
              duration-[1200ms]
              group-hover/stat:rotate-180
              group-hover/stat:border-[#29B6F0]/50
            "
          />

          {/* ICON CONTAINER */}

          <div
            className="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#3E7BD6]/40
              bg-[linear-gradient(135deg,rgba(41,182,240,0.15),rgba(62,123,214,0.12),rgba(122,79,209,0.14),rgba(185,63,201,0.16))]
              shadow-[0_0_18px_rgba(41,182,240,0.08)]
              transition-all
              duration-700
              ease-out
              group-hover/stat:scale-110
              group-hover/stat:rotate-6
              group-hover/stat:border-[#29B6F0]/80
              group-hover/stat:shadow-[0_0_30px_rgba(41,182,240,0.25),0_0_40px_rgba(185,63,201,0.12)]
              sm:h-10
              sm:w-10
            "
          >
            {/* INNER RING */}

            <span
              className="
                pointer-events-none
                absolute
                inset-[3px]
                rounded-full
                border
                border-dashed
                border-[#29B6F0]/20
                transition-all
                duration-700
                group-hover/stat:rotate-180
                group-hover/stat:border-[#29B6F0]/50
              "
            />

            <StatIcon type={icon} />
          </div>
        </div>

        {/* ===================================================
            NUMBER
        =================================================== */}

        <div className="relative mt-2.5">
          <span
            className="
              block
              text-[25px]
              font-bold
              leading-none
              tracking-[-.05em]
              text-white
              transition-all
              duration-500
              group-hover/stat:scale-110
              group-hover/stat:bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
              group-hover/stat:bg-clip-text
              group-hover/stat:text-transparent
              sm:text-[29px]
            "
          >
            {number}
          </span>
        </div>

        {/* ===================================================
            TEXT
        =================================================== */}

        <div className="relative mt-2">
          <p
            className="
              text-[7px]
              font-semibold
              leading-[1.35]
              tracking-[.07em]
              text-[#A0A0A8]
              transition-colors
              duration-500
              group-hover/stat:text-[#D4D4D8]
              sm:text-[8px]
            "
          >
            {title}
            <br />
            {subtitle}
          </p>
        </div>
      </div>

      {/* =====================================================
          INDEX
      ===================================================== */}

      <span
        className="
          absolute
          right-2.5
          top-2.5
          text-[6px]
          font-medium
          tracking-[.1em]
          text-[#5A5A5A]
          transition-all
          duration-500
          group-hover/stat:translate-x-0.5
          group-hover/stat:text-[#29B6F0]
        "
      >
        {index}
      </span>

      {/* =====================================================
          BOTTOM STATUS DOT
      ===================================================== */}

      <span
        className="
          absolute
          bottom-2.5
          right-2.5
          h-1
          w-1
          rounded-full
          bg-[#3E7BD6]
          shadow-[0_0_8px_#3E7BD6]
          transition-all
          duration-500
          group-hover/stat:scale-[2]
          group-hover/stat:bg-[#29B6F0]
          group-hover/stat:shadow-[0_0_14px_#29B6F0]
        "
      />

      {/* =====================================================
          INNER BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[14px]
          ring-1
          ring-inset
          ring-white/[0.04]
          transition-all
          duration-500
          group-hover/stat:ring-[#29B6F0]/15
        "
      />
    </div>
  );
}

export default Herosection;