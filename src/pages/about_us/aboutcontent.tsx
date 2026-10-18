
"use client";

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#29B6F0]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#7A4FD1]/[0.08] blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div
          className="mb-9 text-center sm:mb-12 lg:mb-14"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-sm">
            About BeaverTek
          </span>

          {/* Reduced main title size */}
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
            Experienced technology leaders and engineers working together to
            turn complex business challenges into meaningful outcomes.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]" />
        </div>

        {/* Our Team content */}
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Team image */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/5.5]">
              <Image
                src="/home/whyexist.jpg"
                alt="BeaverTek team"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Team description */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            className="min-w-0"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-sm">
              Experience meets innovation
            </span>

            {/* Smaller title + subtitle on one line */}
            <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl lg:text-[28px]">
              Senior expertise.{" "}
              <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                Global execution.
              </span>
            </h3>

            <p
              className="mt-4 text-sm leading-7 text-[#B4B4BC] sm:text-base sm:leading-8"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              Our leadership brings more than 80 years of combined experience
              working with Fortune 500 companies across financial services,
              healthcare, retail, and technology. We have built payment
              platforms processing millions of transactions a month,
              healthcare AI used in real hospitals, and mobile products taken
              from concept to launch.
            </p>

            <p
              className="mt-3 text-sm leading-7 text-[#B4B4BC] sm:text-base sm:leading-8"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              We are global by design. Our US team handles strategy,
              architecture, and client partnership. Our India team handles
              deep engineering execution. Together, we deliver faster and at
              a better cost than a single-location firm.
            </p>

            {/* Supporting statement */}
            <div
              className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 sm:mt-6 sm:p-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex gap-3">
                <div className="h-auto w-1 shrink-0 rounded-full bg-gradient-to-b from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9]" />

                <p className="text-sm leading-7 text-[#D4D4D8] sm:text-base sm:leading-8">
                  Our experienced team combines technical expertise, thoughtful
                  engineering, and a business-first approach to deliver
                  solutions that create lasting value.
                </p>
              </div>
            </div>

            {/* Team strengths */}
            <div
              className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0A0A0A] p-3.5 transition-colors duration-300 hover:border-[#29B6F0]/30 sm:p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#29B6F0"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 shrink-0"
                >
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                <span className="text-sm font-medium text-white">
                  Senior Engineering
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0A0A0A] p-3.5 transition-colors duration-300 hover:border-[#7A4FD1]/30 sm:p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7A4FD1"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                </svg>

                <span className="text-sm font-medium text-white">
                  Global Collaboration
                </span>
              </div>
            </div>

            {/* Bottom accent line removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
