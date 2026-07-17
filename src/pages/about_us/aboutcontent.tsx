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
      duration: 1000,
      once: true,
      easing: "ease-in-out",
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <section
  ref={containerRef}
  className="relative overflow-hidden bg-[#000000]"
>
  {/* ================= Sticky Background ================= */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    {sections.map((item, index) => (
      <Image
        key={item.title}
        src={item.image}
        alt={item.title}
        fill
        priority={index === 0}
        sizes="100vw"
        className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out ${
          activeSection === index
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110"
        }`}
      />
    ))}

    {/* Dark Overlay */}

    <div className="absolute inset-0 bg-black/55" />

    {/* Gradient */}

    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#000000]" />

    {/* Decorative Glow */}

    <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#29B6F0]/20 blur-[140px]" />

    <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/20 blur-[140px]" />

  </div>

  {/* ================= Scroll Content ================= */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="space-y-0">

      {/* Part 2 starts from here */}

      {sections.map((section, index) => (
        <div
          key={section.title}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className={`relative grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2 ${
            index % 2 === 1
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }`}
        >
          {/* ================= LEFT TITLE ================= */}

          <div
            data-aos="fade-up"
            className="relative"
          >
            {/* Huge Number */}

            <span className="absolute -top-14 left-0 select-none text-[120px] font-black leading-none text-white/10 md:text-[190px]">

              0{index + 1}

            </span>

            {/* Label */}

            <p className="
              relative
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              bg-gradient-to-r
              from-[#29B6F0]
              via-[#3E7BD6]
              to-[#7A4FD1]
              bg-clip-text
              text-transparent
            ">

              About BeaverTek

            </p>

            {/* Heading */}

            <h2 className="relative max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">

              {section.title}

            </h2>

            {/* Divider */}

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-[#2abffa] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

          </div>

          {/* ================= CONTENT CARD ================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              rounded-[32px]
              border
              border-[#2A2A30]
              bg-[rgba(255,255,255,0.05)]
              backdrop-blur-xl
              p-8
              lg:p-12
              shadow-[0_0_60px_rgba(62,123,214,.25)]
            "
          >
            <p className="text-lg leading-9 text-[#D4D4D8]">

              {section.content}

            </p>
          </div>

        </div>
      ))}

    </div>
  </div>

  {/* ================= Bottom Fade ================= */}

  <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-[#000000] via-[#0A0A0A]/70 to-transparent" />

  {/* Part 3 starts here */}
  {/* ================= Bottom Gradient ================= */}

  <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-full bg-gradient-to-t from-[#000000] via-[#0A0A0A]/80 to-transparent" />

</section>
  );
}