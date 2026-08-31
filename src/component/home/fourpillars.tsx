
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Zap,
  BarChart3,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  Cloud,
  Smartphone,
} from "lucide-react";

/* =========================================================
   PILLARS
========================================================= */

const pillars = [
  {
    number: "01",
    title: "Modernize",
    href: "/services/modernize/modernizehero",
    description:
      "Bring legacy systems and infrastructure into the modern stack.",
    icon: Zap,
  },
  {
    number: "02",
    title: "See Your Data",
    href: "/services/seeyourdata/seeyourdatahero",
    description:
      "Analytics, dashboards, and reporting that drive better decisions.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Build Software",
    href: "/services/buildsoftware/herosection",
    description:
      "Custom applications, web and mobile, from concept to launch.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Stay Secure",
    href: "/services/staysecure/staysecureherosection",
    description:
      "Keep digital operations running, protected, and monitored.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Cloud",
    href: "/services/cloud",
    description:
      "Build scalable, reliable, and cost-effective cloud solutions.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Mobile",
    href: "/services/mobile",
    description:
      "Create modern mobile experiences designed for real users.",
    icon: Smartphone,
  },
];

/* =========================================================
   CARD
========================================================= */

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const Icon = pillar.icon;

  return (
    <div
      data-aos={index < 3 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 100}
      data-aos-duration="800"
      className="group w-full"
    >
      <Link href={pillar.href} className="block">
        <article
          className="
            relative
            min-h-[165px]
            overflow-hidden
            rounded-[20px]
            border
            border-[#24242A]
            bg-[#0D0D0F]
            px-4
            py-4

            transition-all
            duration-500

            hover:-translate-y-1
            hover:border-[#3E7BD6]
            hover:bg-[#101014]

            hover:shadow-[0_18px_45px_rgba(41,182,240,.10)]

            sm:min-h-[175px]
            sm:px-5
          "
        >
          {/* =================================================
              GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-28
              w-28
              rounded-full
              bg-[#29B6F0]/10
              blur-[55px]

              transition-all
              duration-700

              group-hover:bg-[#29B6F0]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-12
              -left-12
              h-28
              w-28
              rounded-full
              bg-[#B93FC9]/5
              blur-[55px]

              transition-all
              duration-700

              group-hover:bg-[#B93FC9]/15
            "
          />

          {/* =================================================
              TOP GRADIENT
          ================================================= */}

          <div
            className="
              absolute
              left-[12%]
              right-[12%]
              top-0
              h-[2px]
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              opacity-50

              transition-all
              duration-500

              group-hover:left-[5%]
              group-hover:right-[5%]
              group-hover:opacity-100
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="relative z-10 flex items-center justify-between">
            <span
              className="
                rounded-full
                border
                border-[#2A2A30]
                bg-[#080808]
                px-2.5
                py-1
                text-[9px]
                font-bold
                tracking-[0.15em]
                text-[#29B6F0]

                transition-all
                duration-500

                group-hover:border-[#3E7BD6]
                group-hover:bg-[#29B6F0]/10
              "
            >
              {pillar.number}
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                text-[#55555D]

                transition-all
                duration-500

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#29B6F0]
              "
            />
          </div>

          {/* =================================================
              ICON + TITLE
          ================================================= */}

          <div className="relative z-10 mt-4 flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-[#2A2A30]
                bg-[#080808]

                transition-all
                duration-500

                group-hover:border-[#3E7BD6]
                group-hover:bg-[#29B6F0]/10
                group-hover:shadow-[0_0_20px_rgba(41,182,240,.12)]
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
                "
              />
            </div>

            <h3
              className="
                text-base
                font-semibold
                tracking-tight
                text-white

                transition-all
                duration-500

                sm:text-lg

                group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                group-hover:bg-clip-text
                group-hover:text-transparent
              "
            >
              {pillar.title}
            </h3>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              relative
              z-10
              mt-2.5
              text-xs
              leading-5
              text-[#A0A0A8]

              sm:text-sm
            "
          >
            {pillar.description}
          </p>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mt-3
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#29B6F0]
              "
            >
              Explore
            </span>

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-[#29B6F0]/30
                to-transparent
              "
            />

            <span
              className="
                text-xs
                text-[#B93FC9]

                transition-transform
                duration-500

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FourPillars() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
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
        overflow-hidden
        bg-black
        py-14
        sm:py-18
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-72
          w-72
          rounded-full
          bg-[#29B6F0]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#B93FC9]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/5
          blur-[100px]
        "
      />

      {/* =====================================================
          GRID BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]

          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5

          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            CENTER TITLE — TOP
        =================================================== */}

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          {/* =================================================
              TOP ORBIT
          ================================================= */}

          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="
              relative
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#3E7BD6]/30
              bg-[#0A0A0A]
              shadow-[0_0_35px_rgba(41,182,240,.08)]
            "
          >
            <div
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                shadow-[0_0_18px_#29B6F0]
              "
            />

            <div
              className="
                absolute
                inset-2
                rounded-full
                border
                border-[#29B6F0]/10
              "
            />
          </div>

          {/* =================================================
              BADGE
          ================================================= */}

          <span
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              inline-flex
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]
              px-4
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#29B6F0]

              sm:text-[10px]
            "
          >
            FOUR PILLARS
          </span>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            data-aos="fade-up"
            data-aos-delay="250"
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Four Things,
            <br />

            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                bg-clip-text
                text-transparent
              "
            >
              Done Well.
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-[#A0A0A8]

              sm:text-base
            "
          >
            BeaverTek helps small and mid-size companies modernize
            their systems, make sense of their data, and build
            software that actually works.
          </p>

          {/* =================================================
              GRADIENT LINE
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="
              mt-6
              h-[2px]
              w-20
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              shadow-[0_0_18px_rgba(41,182,240,.35)]
            "
          />

          {/* =================================================
              CTA
          ================================================= */}

          <Link
            href="/services"
            data-aos="fade-up"
            data-aos-delay="550"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white

              shadow-[0_8px_30px_rgba(41,182,240,.12)]

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-[0_12px_40px_rgba(185,63,201,.20)]
            "
          >
            Explore Our Services

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-500

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* ===================================================
            CARDS AREA
            LEFT 3 + RIGHT 3
=================================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-[1150px]
            grid-cols-1
            gap-5

            lg:grid-cols-2
            lg:gap-x-20
            lg:gap-y-4

            xl:gap-x-28
          "
        >
          {/* =================================================
              LEFT SIDE — 01, 02, 03
          ================================================= */}

          <div className="flex flex-col gap-4">

            {/* 01 — TOP */}

            <div
              className="
                lg:-translate-y-6
              "
            >
              <PillarCard
                pillar={pillars[0]}
                index={0}
              />
            </div>

            {/* 02 — MIDDLE / SMALLER */}

            <div
              className="
                lg:w-[85%]
                lg:self-end
              "
            >
              <PillarCard
                pillar={pillars[1]}
                index={1}
              />
            </div>

            {/* 03 — BOTTOM */}

            <div
              className="
                lg:translate-y-6
              "
            >
              <PillarCard
                pillar={pillars[2]}
                index={2}
              />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — 04, 05, 06
          ================================================= */}

          <div className="flex flex-col gap-4">

            {/* 04 — TOP */}

            <div
              className="
                lg:-translate-y-6
              "
            >
              <PillarCard
                pillar={pillars[3]}
                index={3}
              />
            </div>

            {/* 05 — MIDDLE / SMALLER */}

            <div
              className="
                lg:w-[85%]
                lg:self-start
              "
            >
              <PillarCard
                pillar={pillars[4]}
                index={4}
              />
            </div>

            {/* 06 — BOTTOM */}

            <div
              className="
                lg:translate-y-6
              "
            >
              <PillarCard
                pillar={pillars[5]}
                index={5}
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM LINE
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="
            mx-auto
            mt-14
            h-px
            max-w-5xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/25
            to-transparent
          "
        />
      </div>
    </section>
  );
}

