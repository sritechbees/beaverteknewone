"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Modernize",
    description:
      "Bring legacy systems, old infrastructure, and outdated workflows into the modern stack — without breaking what already works.",
    icon: Cpu,
    href: "/services/modernize/modernizehero",
  },
  {
    title: "See Your Data",
    description:
      "Turn the data your business already collects into dashboards, reports, and insights you can actually use to make decisions.",
    icon: TrendingUp,
    href: "/services/seeyourdata/seeyourdatahero",
  },
  {
    title: "Build Software",
    description:
      "Custom web and mobile applications, designed and engineered from concept to production by senior people.",
    icon: Code2,
    href: "/services/buildsoftware/herosection",
  },
  {
    title: "Stay Secure",
    description:
      "Keep your digital operations protected, monitored, and running — so a security event doesn't become a business event.",
    icon: ShieldCheck,
    href: "/services/staysecure/staysecureherosection",
  },
];

const gradient =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]";

const gradientText =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent";

export default function ServicesHub() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    const refreshTimer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#000000] text-white"
      data-aos="fade-in"
      data-aos-duration="700"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#29B6F0]/5 blur-[110px]"
        />

        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#B93FC9]/5 blur-[110px]"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12 lg:px-6 lg:py-14 xl:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-11"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Badge */}
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="700"
            className="
              inline-flex rounded-full
              border border-[#3E7BD6]/40
              bg-white/[0.03]
              px-3 py-1
              text-[10px] font-semibold
              tracking-[0.15em]
              text-[#29B6F0]
              sm:px-3.5 sm:py-1.5 sm:text-xs
            "
          >
            OUR SERVICES
          </span>

          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="800"
            className="
              mx-auto mt-3
              text-3xl font-black
              leading-[1.08]
              sm:mt-4 sm:text-4xl
              lg:text-5xl
            "
          >
            <span className="text-white">Four things, </span>
            <span className={gradientText}>done well.</span>
          </h2>

          {/* Gradient Divider */}
          <div
            data-aos="zoom-in"
            data-aos-delay="280"
            data-aos-duration="700"
            className={`
              mx-auto mt-4
              h-[3px] w-12
              rounded-full
              ${gradient}
              sm:mt-5 sm:w-16
            `}
          />

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="800"
            className="
              mx-auto mt-4 max-w-2xl
              text-[13px] leading-6
              text-[#A0A0A8]
              sm:mt-5 sm:text-sm
            "
          >
            BeaverTek is built around four core practices. Every engagement
            starts in one of these — and most clients eventually use more than
            one.
          </p>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}
        <div
          className="
            grid grid-cols-1
            gap-4
            sm:grid-cols-2 sm:gap-5
            lg:grid-cols-4 lg:gap-4
            xl:gap-5
          "
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const titleParts = service.title.split(" ");
            const firstPart = titleParts[0];
            const remainingPart = titleParts.slice(1).join(" ");

            return (
              <div
                key={service.title}
                className="group h-full"
                data-aos="fade-up"
                data-aos-delay={500 + index * 120}
                data-aos-duration="850"
                data-aos-easing="ease-out-cubic"
              >
                {/* =================================================
                    GRADIENT BORDER
                ================================================== */}
                <div
                  className="
                    relative h-full
                    rounded-2xl
                    p-[1px]
                    bg-[#2A2A30]
                    transition-all duration-500
                    group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    group-hover:shadow-[0_20px_55px_rgba(62,123,214,0.14)]
                  "
                >
                  {/* =================================================
                      CARD
                  ================================================== */}
                  <div
                    className="
                      relative flex h-full
                      min-h-[280px]
                      flex-col
                      overflow-hidden
                      rounded-[15px]
                      bg-[#121212]
                      p-5
                      transition-all duration-500
                      group-hover:bg-[#151515]
                      sm:min-h-[290px]
                      lg:min-h-[300px]
                    "
                  >
                    {/* =================================================
                        CARD GLOW — TOP RIGHT
                    ================================================== */}
                    <div
                      className="
                        pointer-events-none
                        absolute -right-20 -top-20
                        h-40 w-40
                        rounded-full
                        bg-[#29B6F0]/0
                        blur-[70px]
                        transition-all duration-700
                        group-hover:bg-[#29B6F0]/15
                      "
                    />

                    {/* =================================================
                        CARD GLOW — BOTTOM LEFT
                    ================================================== */}
                    <div
                      className="
                        pointer-events-none
                        absolute -bottom-20 -left-20
                        h-40 w-40
                        rounded-full
                        bg-[#B93FC9]/0
                        blur-[70px]
                        transition-all duration-700
                        group-hover:bg-[#B93FC9]/15
                      "
                    />

                    {/* =================================================
                        TOP GRADIENT LINE
                    ================================================== */}
                    <div
                      className={`
                        absolute left-5 right-5 top-0
                        h-[2px]
                        origin-left
                        scale-x-0
                        rounded-full
                        ${gradient}
                        transition-transform duration-500
                        group-hover:scale-x-100
                      `}
                    />

                    {/* =================================================
                        ICON
                    ================================================== */}
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={580 + index * 120}
                      data-aos-duration="650"
                      className="
                        relative z-10
                        mb-5
                        flex h-11 w-11
                        shrink-0
                        items-center justify-center
                        overflow-hidden
                        rounded-xl
                        border border-[#2A2A30]
                        bg-[#1A1A1E]
                        text-[#29B6F0]
                        transition-all duration-500
                        group-hover:border-transparent
                        group-hover:text-white
                        group-hover:shadow-[0_8px_25px_rgba(41,182,240,0.18)]
                      "
                    >
                      {/* Icon Gradient */}
                      <div
                        className={`
                          absolute inset-0
                          opacity-0
                          ${gradient}
                          transition-opacity duration-500
                          group-hover:opacity-100
                        `}
                      />

                      <Icon
                        className="
                          relative z-10
                          h-5 w-5
                          transition-transform duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                      />
                    </div>

                    {/* =================================================
                        TITLE
                    ================================================== */}
                    <h3
                      data-aos="fade-up"
                      data-aos-delay={640 + index * 120}
                      data-aos-duration="700"
                      className="
                        relative z-10
                        text-lg font-bold
                        tracking-tight
                        sm:text-xl
                      "
                    >
                      <span className="text-white">{firstPart}</span>

                      {remainingPart && (
                        <>
                          {" "}
                          <span className={gradientText}>
                            {remainingPart}
                          </span>
                        </>
                      )}
                    </h3>

                    {/* =================================================
                        DIVIDER
                    ================================================== */}
                    <div
                      data-aos="fade-right"
                      data-aos-delay={700 + index * 120}
                      data-aos-duration="600"
                      className="relative z-10 mt-2.5"
                    >
                      <div
                        className={`
                          h-[2px] w-8
                          rounded-full
                          ${gradient}
                          transition-all duration-500
                          group-hover:w-16
                        `}
                      />
                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}
                    <p
                      data-aos="fade-up"
                      data-aos-delay={740 + index * 120}
                      data-aos-duration="750"
                      className="
                        relative z-10
                        mt-4
                        flex-1
                        text-[13px]
                        leading-6
                        text-[#A0A0A8]
                        transition-colors duration-300
                        group-hover:text-[#D4D4D8]
                        sm:text-sm
                      "
                    >
                      {service.description}
                    </p>

                    {/* =================================================
                        CTA
                    ================================================== */}
                    <Link
                      href={service.href}
                      data-aos="fade-up"
                      data-aos-delay={800 + index * 120}
                      data-aos-duration="700"
                      className="
                        relative z-10
                        mt-5
                        inline-flex w-fit
                        items-center
                        gap-1.5
                        text-xs
                        font-semibold
                        text-[#29B6F0]
                        transition-all duration-300
                        group-hover:gap-3
                        group-hover:text-white
                        sm:text-sm
                      "
                    >
                      <span>Learn More</span>

                      {/* Gradient Arrow Background */}
                      <span
                        className={`
                          flex h-6 w-6
                          items-center justify-center
                          rounded-full
                          ${gradient}
                          text-white
                          shadow-[0_4px_14px_rgba(62,123,214,0.18)]
                          transition-all duration-300
                          group-hover:scale-110
                          group-hover:shadow-[0_5px_18px_rgba(185,63,201,0.3)]
                        `}
                      >
                        <ArrowRight
                          className="
                            h-3.5 w-3.5
                            transition-transform duration-300
                            group-hover:translate-x-0.5
                          "
                        />
                      </span>
                    </Link>

                    {/* =================================================
                        BOTTOM GRADIENT LINE
                    ================================================== */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                      <div
                        className={`
                          h-full
                          w-0
                          ${gradient}
                          transition-all duration-700
                          group-hover:w-full
                        `}
                      />
                    </div>

                    {/* =================================================
                        CORNER GLOW
                    ================================================== */}
                    <div
                      className="
                        pointer-events-none
                        absolute bottom-0 right-0
                        h-20 w-20
                        translate-x-8
                        translate-y-8
                        rounded-full
                        bg-[#7A4FD1]/0
                        blur-2xl
                        transition-all duration-700
                        group-hover:bg-[#7A4FD1]/20
                      "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}