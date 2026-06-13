"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sections = [
    {
      title: "Why We Exist",
      content:
        "Most small and mid-size companies are stuck between two bad options. Hire a full in-house IT and engineering team, which is expensive and slow to build. Or buy off-the-shelf software and consultants who do not really know the business. We started BeaverTek because there is a third option: a senior partner who treats your problems like our own, and who can actually build what you need.",
    },
    {
      title: "How We Work",
      content:
        "We are not a body shop. Every engagement is led by senior people who have done the work before. We listen first, design carefully, and ship working software. We treat your data, your customers, and your operations with the same seriousness we would give a regulated enterprise — because at the size you are operating, mistakes cost more, not less.",
    },
    {
      title: "The Team",
      content:
        "Our leadership brings more than 80 years of combined experience working with Fortune 500 companies across financial services, healthcare, retail, and technology. We have built payment platforms processing millions of transactions a month, healthcare AI used in real hospitals, and mobile products taken from concept to launch. We are global by design. Our US team handles strategy, architecture, and client partnership. Our India team handles deep engineering execution. Together, we deliver faster and at a better cost than a single-location firm.",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="space-y-20">

          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Number */}
              <div
                data-aos="fade-up"
                className="relative"
              >
                <span className="absolute -top-10 left-0 text-[120px] md:text-[180px] font-black text-white/5">
                  0{index + 1}
                </span>

                <h2 className="relative text-4xl md:text-5xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Content */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10"
              >
                <p className="text-slate-300 text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}