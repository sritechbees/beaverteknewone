
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutContent() {
  const [activeSection, setActiveSection] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      title: "Why We Exist",
      image: "/home/whyexist.jpg",
      content:
        "Most small and mid-size companies are stuck between two bad options. Hire a full in-house IT and engineering team, which is expensive and slow to build. Or buy off-the-shelf software and consultants who do not really know the business. We started BeaverTek because there is a third option: a senior partner who treats your problems like our own, and who can actually build what you need.",
    },
    {
      title: "How We Work",
      image: "/home/theteam.jpg",
      content:
        "We are not a body shop. Every engagement is led by senior people who have done the work before. We listen first, design carefully, and ship working software. We treat your data, your customers, and your operations with the same seriousness we would give a regulated enterprise because at the size you are operating, mistakes cost more, not less.",
    },
    {
      title: "The Team",
      image: "/home/studyhero.jpg",
      content:
        "Our leadership brings more than 80 years of combined experience working with Fortune 500 companies across financial services, healthcare, retail, and technology. We have built payment platforms processing millions of transactions a month, healthcare AI used in real hospitals, and mobile products taken from concept to launch. We are global by design. Our US team handles strategy, architecture, and client partnership. Our India team handles deep engineering execution. Together, we deliver faster and at a better cost than a single-location firm.",
    },
  ];

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
        py-9
        sm:py-10
        md:py-12
        lg:py-14
      "
    >
      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-8
        "
      >
        <div
          className="
            space-y-10
            sm:space-y-12
            md:space-y-14
            lg:space-y-16
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
                gap-6
                sm:gap-7
                md:gap-8
                lg:grid-cols-2
                lg:gap-10
                xl:gap-12
              "
            >
              {/* ================= LEFT CONTENT ================= */}

              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
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
                {/* Number */}

                <span
                  data-aos="fade-up"
                  data-aos-delay="120"
                  data-aos-duration="750"
                  className="
                    pointer-events-none
                    absolute
                    -top-4
                    left-0
                    select-none
                    text-[56px]
                    font-black
                    leading-none
                    text-white/[0.04]
                    sm:-top-5
                    sm:text-[72px]
                    md:text-[88px]
                    lg:-top-6
                    lg:text-[100px]
                  "
                >
                  0{index + 1}
                </span>

                {/* Label */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="140"
                  data-aos-duration="750"
                  className="
                    relative
                    mb-3
                    flex
                    items-center
                    gap-2.5
                    sm:mb-3.5
                    sm:gap-3
                  "
                >
                  <span
                    className="
                      h-[2px]
                      w-7
                      bg-[#29B6F0]
                      sm:w-8
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#29B6F0]
                      sm:text-[9px]
                      sm:tracking-[0.28em]
                      md:text-[10px]
                    "
                  >
                    About BeaverTek
                  </p>
                </div>

                {/* Heading */}

                <h2
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  className="
                    relative
                    max-w-xl
                    text-[25px]
                    font-extrabold
                    leading-[1.1]
                    tracking-[-0.025em]
                    text-white
                    sm:text-[28px]
                    md:text-[32px]
                    lg:text-[36px]
                    xl:text-[38px]
                  "
                >
                  {section.title}
                </h2>

                {/* Gradient Divider */}

                <div
                  data-aos="zoom-in"
                  data-aos-delay="260"
                  data-aos-duration="700"
                  className="
                    mt-3
                    h-[2px]
                    w-12
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    sm:mt-4
                    sm:w-16
                  "
                />

                {/* Supporting Text */}

                <p
                  data-aos="fade-up"
                  data-aos-delay="320"
                  data-aos-duration="800"
                  className="
                    mt-3.5
                    max-w-xl
                    text-[11px]
                    leading-5
                    text-[#A0A0A8]
                    sm:mt-4
                    sm:text-xs
                    sm:leading-5
                    md:text-[13px]
                    md:leading-6
                  "
                >
                  Senior expertise, thoughtful engineering, and practical
                  technology solutions built around real business needs.
                </p>
              </div>

              {/* ================= RIGHT IMAGE + CONTENT ================= */}

              <div
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="180"
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
                {/* ================= IMAGE CARD ================= */}

                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="220"
                  data-aos-duration="850"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    shadow-[0_16px_45px_rgba(0,0,0,0.42)]
                    transition-all
                    duration-500
                    hover:border-[#3E7BD6]
                    sm:rounded-[20px]
                    lg:rounded-[22px]
                  "
                >
                  {/* Image */}

                  <div
                    className="
                      relative
                      h-[185px]
                      overflow-hidden
                      sm:h-[215px]
                      md:h-[245px]
                      lg:h-[260px]
                      xl:h-[285px]
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
                        duration-[1200ms]
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Image Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* Number */}

                    <div
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="650"
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        text-[11px]
                        font-bold
                        text-white
                        shadow-lg
                        transition-transform
                        duration-500
                        group-hover:scale-105
                        sm:left-5
                        sm:top-5
                        sm:h-9
                        sm:w-9
                        sm:text-xs
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* Active Indicator */}

                    <div
                      data-aos="fade-right"
                      data-aos-delay="350"
                      data-aos-duration="700"
                      className={`
                        absolute
                        bottom-4
                        left-4
                        h-1
                        rounded-full
                        bg-[#29B6F0]
                        transition-all
                        duration-500
                        sm:bottom-5
                        sm:left-5
                        ${
                          activeSection === index
                            ? "w-12 sm:w-14"
                            : "w-6 sm:w-7"
                        }
                      `}
                    />
                  </div>

                  {/* ================= INNER TEXT CARD ================= */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    className="
                      border-t
                      border-[#2A2A30]
                      bg-[#121212]
                      p-4
                      sm:p-5
                      md:p-6
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        leading-5
                        text-[#D4D4D8]
                        sm:text-xs
                        sm:leading-5
                        md:text-[13px]
                        md:leading-6
                        lg:text-[13px]
                        xl:text-sm
                        xl:leading-6
                      "
                    >
                      {section.content}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      data-aos="fade-right"
                      data-aos-delay="380"
                      data-aos-duration="650"
                      className="
                        mt-3.5
                        flex
                        items-center
                        gap-1.5
                        sm:mt-4
                        sm:gap-2
                      "
                    >
                      <span className="h-1 w-6 rounded-full bg-[#29B6F0] sm:w-7" />
                      <span className="h-1 w-4 rounded-full bg-[#3E7BD6] sm:w-5" />
                      <span className="h-1 w-2.5 rounded-full bg-[#B93FC9] sm:w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

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
        "
      />
    </section>
  );
}

