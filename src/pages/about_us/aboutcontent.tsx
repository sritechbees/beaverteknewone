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
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#000000] py-16 sm:py-20 lg:py-24"
    >

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          {sections.map((section, index) => (
            <div
              key={section.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`
                relative
                grid
                items-center
                gap-8
                sm:gap-10
                lg:grid-cols-2
                lg:gap-14
              `}
            >

              {/* ================= LEFT CONTENT ================= */}

              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="100"
                className={`
                  relative flex flex-col justify-center
                  ${
                    index % 2 === 1
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                `}
              >

                {/* Number */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -top-6
                    left-0
                    select-none
                    text-[72px]
                    font-black
                    leading-none
                    text-white/[0.045]
                    sm:-top-8
                    sm:text-[100px]
                    md:text-[120px]
                  "
                >
                  0{index + 1}
                </span>

                {/* Label */}

                <div className="relative mb-4 flex items-center gap-3 sm:mb-5">

                  <span className="h-[2px] w-8 bg-[#29B6F0] sm:w-10" />

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-[#29B6F0]
                      sm:text-xs
                      sm:tracking-[0.35em]
                    "
                  >
                    About BeaverTek
                  </p>

                </div>

                {/* Heading */}

                <h2
                  className="
                    relative
                    max-w-xl
                    text-3xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-white
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  {section.title}
                </h2>

                {/* Gradient Divider */}

                <div
                  className="
                    mt-5
                    h-[3px]
                    w-16
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    sm:mt-7
                    sm:w-24
                  "
                />

                {/* Supporting Text */}

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#A0A0A8]
                    sm:mt-6
                    sm:text-base
                    sm:leading-7
                  "
                >
                  Senior expertise, thoughtful engineering, and practical
                  technology solutions built around real business needs.
                </p>

              </div>


              {/* ================= RIGHT IMAGE + CONTENT ================= */}

              <div
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="200"
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
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-500
                    hover:border-[#3E7BD6]
                  "
                >

                  {/* Image */}

                  <div
                    className="
                      relative
                      h-[230px]
                      overflow-hidden
                      sm:h-[280px]
                      md:h-[320px]
                      lg:h-[300px]
                      xl:h-[340px]
                    "
                  >

                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      priority={index === 0}
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 80vw,
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
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        sm:left-6
                        sm:top-6
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* Active Indicator */}

                    <div
                      className={`
                        absolute
                        bottom-5
                        left-5
                        h-1
                        rounded-full
                        bg-[#29B6F0]
                        transition-all
                        duration-500
                        sm:left-6
                        ${
                          activeSection === index
                            ? "w-16"
                            : "w-8"
                        }
                      `}
                    />

                  </div>


                  {/* ================= INNER TEXT CARD ================= */}

                  <div
                    className="
                      border-t
                      border-[#2A2A30]
                      bg-[#121212]
                      p-5
                      sm:p-6
                      md:p-7
                    "
                  >

                    <p
                      className="
                        text-sm
                        leading-7
                        text-[#D4D4D8]
                        sm:text-base
                        sm:leading-7
                        md:text-[17px]
                        md:leading-8
                      "
                    >
                      {section.content}
                    </p>

                    {/* Bottom Accent */}

                    <div className="mt-5 flex items-center gap-2">

                      <span className="h-1 w-8 rounded-full bg-[#29B6F0]" />

                      <span className="h-1 w-5 rounded-full bg-[#3E7BD6]" />

                      <span className="h-1 w-3 rounded-full bg-[#B93FC9]" />

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
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-[#000000]
          to-transparent
        "
      />

    </section>
  );
}