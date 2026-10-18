
"use client";

import { useEffect } from "react";
import { Building2, MapPin, Globe2, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    icon: Building2,
    title: "Headquarters",
    value: "Irvine, California",
  },
  {
    icon: MapPin,
    title: "Engineering Hub",
    value: "India",
  },
  {
    icon: Globe2,
    title: "Clients",
    value: "Across North America & Beyond",
  },
];

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function WhereWeAre() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 40,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#29B6F0]/[0.06] blur-[100px] sm:h-80 sm:w-80" />

        <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-[#7A4FD1]/[0.05] blur-[100px]" />

        <div className="absolute right-[-100px] top-1/3 h-64 w-64 rounded-full bg-[#B93FC9]/[0.035] blur-[100px]" />
      </div>

      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.018] [background-image:linear-gradient(to_right,#A0A0A8_1px,transparent_1px),linear-gradient(to_bottom,#A0A0A8_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div
          className="mx-auto max-w-2xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_8px_rgba(41,182,240,.65)]" />
            Global Presence
          </span>

          <h2 className="mt-4 text-[27px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-[42px]">
            Where We{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: gradient }}
            >
              Are
            </span>
          </h2>

          <div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full sm:mt-5 sm:w-16"
            style={{ backgroundImage: gradient }}
          />

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[#A0A0A8] sm:mt-5 sm:text-sm sm:leading-7">
            Strategically positioned to support businesses with experienced
            engineering teams and trusted technology partnerships across
            multiple regions.
          </p>
        </div>

        {/* Location cards */}
        <div className="mt-7 border-y border-white/[0.10] sm:mt-9 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`
                    group relative flex min-w-0 flex-col
                    overflow-hidden px-4 py-5
                    transition-colors duration-300
                    hover:bg-white/[0.025]
                    sm:px-5 sm:py-6
                    lg:px-7 lg:py-7
                    ${
                      index < 2
                        ? "border-b border-white/[0.10] md:border-b-0"
                        : ""
                    }
                    ${
                      index === 0
                        ? "md:border-r md:border-white/[0.10] xl:border-r"
                        : ""
                    }
                    ${
                      index === 1
                        ? "md:col-span-1 md:border-b md:border-white/[0.10] xl:border-b-0 xl:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Soft hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#29B6F0]/0 blur-[55px] transition-colors duration-500 group-hover:bg-[#29B6F0]/[0.10]"
                  />

                  {/* Icon and arrow */}
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.09] bg-[#0A0A0A] transition-all duration-300 group-hover:border-[#29B6F0]/40 group-hover:bg-[#29B6F0]/[0.07] sm:h-11 sm:w-11">
                      <Icon className="h-5 w-5 text-[#29B6F0] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-[#5A5A62] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#29B6F0]" />
                  </div>

                  {/* Card content */}
                  <div className="relative mt-5 sm:mt-6">
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-xs">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[360px] break-words text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#E8F7FF] sm:text-xl lg:text-[22px]">
                      {item.value}
                    </p>
                  </div>

                  {/* Bottom gradient hover accent */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundImage: gradient }}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Footer label */}
        <div
          className="mt-5 flex items-center justify-center gap-2.5 sm:mt-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span className="h-px w-6 bg-white/15 sm:w-10" />

          <span className="text-center text-[9px] font-medium uppercase tracking-[0.17em] text-[#686870] sm:text-[10px] sm:tracking-[0.2em]">
            Global Technology Presence
          </span>

          <span className="h-px w-6 bg-white/15 sm:w-10" />
        </div>
      </div>
    </section>
  );
}
