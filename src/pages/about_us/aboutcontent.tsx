"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutContent() {
  const [activeSection, setActiveSection] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* =========================================================
     ABOUT SECTIONS
  ========================================================== */

  const sections = [
    {
      title: "Why We Exist",
      image: "/home/whyexist.jpg",

      content:
        "Most small and mid-size companies are stuck between two bad options. Hire a full in-house IT and engineering team, which is expensive and slow to build. Or buy off-the-shelf software and consultants who do not really know the business. We started BeaverTek because there is a third option: a senior partner who treats your problems like our own, and who can actually build what you need.",

      supportingText:
        "We bring senior expertise and thoughtful engineering together to build practical technology solutions that solve real business challenges.",
    },

    {
      title: "How We Work",
      image: "/home/theteam.jpg",

      content:
        "We are not a body shop. Every engagement is led by senior people who have done the work before. We listen first, design carefully, and ship working software. We treat your data, your customers, and your operations with the same seriousness we would give a regulated enterprise — because at the size you are operating, mistakes cost more, not less.",

      supportingText:
        "We combine senior expertise, thoughtful engineering, and business-first thinking to deliver practical technology solutions built for lasting impact.",
    },

    {
      title: "The Team",
      image: "/home/studyhero.jpg",

      content:
        "Our leadership brings more than 80 years of combined experience working with Fortune 500 companies across financial services, healthcare, retail, and technology. We have built payment platforms processing millions of transactions a month, healthcare AI used in real hospitals, and mobile products taken from concept to launch. We are global by design. Our US team handles strategy, architecture, and client partnership. Our India team handles deep engineering execution. Together, we deliver faster and at a better cost than a single-location firm.",

      supportingText:
        "Our experienced team combines technical expertise, thoughtful engineering, and a business-first approach to deliver solutions that create lasting value.",
    },
  ];

  /* =========================================================
     AOS + ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= viewportCenter &&
          rect.bottom >= viewportCenter
        ) {
          setActiveSection(index);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    AOS.refresh();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      AOS.refreshHard();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#000000]
        py-12
        sm:py-14
        md:py-16
        lg:py-20
        xl:py-24
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Cyan ambient glow */}

        <div
          className="
            absolute
            -left-40
            top-[10%]
            h-64
            w-64
            rounded-full
            bg-[#29B6F0]/[0.055]
            blur-[110px]

            sm:h-80
            sm:w-80

            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* Violet ambient glow */}

        <div
          className="
            absolute
            -right-40
            top-[42%]
            h-72
            w-72
            rounded-full
            bg-[#7A4FD1]/[0.06]
            blur-[120px]

            sm:h-96
            sm:w-96

            lg:h-[460px]
            lg:w-[460px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />
      </div>

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
            SECTION LIST
        ======================================================== */}

        <div
          className="
            space-y-14
            sm:space-y-16
            md:space-y-20
            lg:space-y-24
            xl:space-y-28
          "
        >
          {sections.map((section, index) => (
            <div
              key={section.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="
                relative
                grid
                items-center
                gap-8

                sm:gap-10

                md:gap-12

                lg:grid-cols-2
                lg:gap-14

                xl:gap-20
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div
                data-aos={
                  index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                }
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-offset="60"
                data-aos-easing="ease-out-cubic"
                className={`
                  relative
                  flex
                  flex-col
                  justify-center

                  ${
                    index % 2 === 1
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                `}
              >
                {/* =================================================
                    SECTION LABEL
                ================================================== */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="120"
                  data-aos-duration="750"
                  className="
                    mb-4
                    flex
                    items-center
                    gap-2.5

                    sm:mb-5
                    sm:gap-3
                  "
                >
                  <span
                    className="
                      h-[2px]
                      w-8
                      rounded-full
                      bg-[#29B6F0]

                      sm:w-10

                      md:w-12
                    "
                  />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#29B6F0]

                      sm:text-[10px]
                      sm:tracking-[0.28em]

                      md:text-[11px]
                    "
                  >
                    About BeaverTek
                  </p>
                </div>

                {/* =================================================
                    HEADING
                ================================================== */}

                <h2
                  data-aos="fade-up"
                  data-aos-delay="180"
                  data-aos-duration="800"
                  className="
                    relative
                    max-w-xl
                    text-[29px]
                    font-extrabold
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-white

                    sm:text-[32px]
                    sm:leading-[1.08]

                    md:text-[36px]

                    lg:text-[40px]
                    lg:leading-[1.06]

                    xl:text-[43px]
                  "
                >
                  {section.title}
                </h2>

                {/* =================================================
                    GRADIENT DIVIDER
                ================================================== */}

                <div
                  data-aos="zoom-in"
                  data-aos-delay="240"
                  data-aos-duration="700"
                  className="
                    mt-4
                    h-[2px]
                    w-14
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]

                    sm:mt-5
                    sm:w-16

                    md:w-20
                  "
                />

                {/* =================================================
                    SUPPORTING TEXT
                ================================================== */}

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  className="
                    mt-4
                    max-w-xl
                    text-[13px]
                    leading-6
                    text-[#A0A0A8]

                    sm:mt-5
                    sm:text-[14px]
                    sm:leading-6.5

                    md:text-[15px]
                    md:leading-7

                    lg:text-[16px]
                    lg:leading-7
                  "
                >
                  {section.supportingText}
                </p>

                {/* =================================================
                    ACTIVE PROGRESS
                ================================================== */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="360"
                  data-aos-duration="700"
                  className="
                    mt-5
                    flex
                    items-center
                    gap-1.5

                    sm:mt-6
                    sm:gap-2
                  "
                >
                  <span
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        activeSection === index
                          ? "w-10 bg-[#29B6F0]"
                          : "w-5 bg-[#29B6F0]/40"
                      }
                    `}
                  />

                  <span
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        activeSection === index
                          ? "w-6 bg-[#3E7BD6]"
                          : "w-4 bg-[#3E7BD6]/30"
                      }
                    `}
                  />

                  <span
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        activeSection === index
                          ? "w-3 bg-[#B93FC9]"
                          : "w-2 bg-[#B93FC9]/25"
                      }
                    `}
                  />
                </div>
              </div>

              {/* =================================================
                  RIGHT IMAGE + CONTENT
              ================================================== */}

              <div
                data-aos={
                  index % 2 === 0
                    ? "fade-left"
                    : "fade-right"
                }
                data-aos-delay="160"
                data-aos-duration="850"
                data-aos-offset="60"
                data-aos-easing="ease-out-cubic"
                className={`
                  relative

                  ${
                    index % 2 === 1
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                `}
              >
                {/* =================================================
                    IMAGE / CONTENT WRAPPER
                ================================================== */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/[0.07]
                    bg-[#0A0A0A]
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-500

                    hover:border-[#3E7BD6]/40

                    sm:rounded-[22px]

                    lg:rounded-[24px]
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-[205px]
                      overflow-hidden

                      sm:h-[235px]

                      md:h-[270px]

                      lg:h-[285px]

                      xl:h-[310px]
                    "
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      priority={index === 0}
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 90vw,
                        50vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-[1400ms]
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* Image gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Soft image edge */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-20
                        bg-gradient-to-t
                        from-[#0A0A0A]
                        to-transparent
                      "
                    />

                    {/* Small active indicator */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        h-1
                        w-10
                        rounded-full
                        bg-[#29B6F0]
                        shadow-[0_0_14px_rgba(41,182,240,0.35)]

                        sm:bottom-5
                        sm:left-5
                        sm:w-12
                      "
                    />
                  </div>

                  {/* =================================================
                      TEXT CONTENT
                  ================================================== */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="260"
                    data-aos-duration="800"
                    className="
                      relative
                      bg-[#0A0A0A]
                      p-5

                      sm:p-6

                      md:p-7

                      lg:p-7

                      xl:p-8
                    "
                  >
                    <p
                      className="
                        text-[13px]
                        leading-6
                        text-[#D4D4D8]

                        sm:text-[14px]
                        sm:leading-6.5

                        md:text-[15px]
                        md:leading-7

                        lg:text-[15px]
                        lg:leading-7

                        xl:text-[16px]
                        xl:leading-7.5
                      "
                    >
                      {section.content}
                    </p>

                    {/* Bottom accent */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-1.5

                        sm:mt-6
                        sm:gap-2
                      "
                    >
                      <span
                        className="
                          h-1
                          w-8
                          rounded-full
                          bg-[#29B6F0]

                          sm:w-9
                        "
                      />

                      <span
                        className="
                          h-1
                          w-5
                          rounded-full
                          bg-[#3E7BD6]

                          sm:w-6
                        "
                      />

                      <span
                        className="
                          h-1
                          w-3
                          rounded-full
                          bg-[#B93FC9]

                          sm:w-3.5
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-[#000000]
          to-transparent

          sm:h-28

          md:h-32

          lg:h-36
        "
      />
    </section>
  );
}