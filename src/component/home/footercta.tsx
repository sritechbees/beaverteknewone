"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Cloud,
  BrainCircuit,
} from "lucide-react";

const features = [
  { title: "Enterprise AI Solutions", icon: BrainCircuit },
  { title: "Cloud & Data Platforms", icon: Cloud },
  { title: "Healthcare Technology", icon: ShieldCheck },
  { title: "24/7 Expert Support", icon: Sparkles },
];

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      
      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative mx-auto flex min-h-[460px] w-full max-w-[1200px] flex-col items-center justify-between px-4 py-8 sm:min-h-[500px] sm:px-6 sm:py-10 lg:min-h-[530px] lg:px-8 lg:py-12">

        {/* =================================================
            DECORATIVE GLOW
        ================================================== */}
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#29B6F0]/5 blur-[90px]" />

        <div className="pointer-events-none absolute -right-16 top-16 h-56 w-56 rounded-full bg-[#7A4FD1]/5 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#B93FC9]/5 blur-[100px]" />

       
        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        <div className="relative z-20 flex w-full flex-1 flex-col items-center justify-center text-center">

          {/* Badge */}
          <div
            data-aos="fade-down"
            data-aos-duration="700"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#DEDEE3] bg-white px-3 py-1.5 transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6]/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#606068] sm:text-[9px]">
              Let&apos;s Build Together
            </span>
          </div>

          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="850"
            className="mt-4 text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#09090B] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]"
          >
            Need Senior
            <br />

            <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent">
              Technology Help?
            </span>
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="850"
            className="mt-3 max-w-[520px] text-[12px] leading-5 text-[#707078] sm:text-[13px] sm:leading-6 md:text-sm"
          >
            Partner with experienced engineers to design, build and scale
            secure AI-powered enterprise solutions tailored to your business.
          </p>

          {/* Buttons */}
          <div
  data-aos="fade-up"
  data-aos-delay="260"
  data-aos-duration="850"
  className="
    mt-5
    flex
    w-full
    flex-row
    items-center
    justify-center
    gap-2
    sm:w-auto
    sm:justify-start
  "
>
  {/* View All Demo */}
  <Link
    href="/contact/contacthero"
    className="
      group
      inline-flex
      w-auto
      items-center
      justify-center
      gap-1.5
      rounded-full
      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
      px-4
      py-2.5
      text-[10px]
      font-semibold
      text-white
      transition-all
      duration-500
      hover:-translate-y-1
      hover:scale-[1.02]
      active:scale-95
      sm:px-5
      sm:py-3
      sm:text-xs
    "
  >
    <span>View All Demo</span>

    <ArrowUpRight
      className="
        h-3 w-3 shrink-0
        transition-transform duration-500
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
    />
  </Link>

  {/* View Case Studies */}
  <Link
    href="/customers/casestudyoverall"
    className="
      group
      inline-flex
      w-auto
      items-center
      justify-center
      gap-1.5
      rounded-full
      border
      border-[#D8D8DE]
      bg-white
      px-4
      py-2.5
      text-[10px]
      font-semibold
      text-[#18181B]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#3E7BD6]
      hover:bg-[#FAFAFC]
      active:scale-95
      sm:px-5
      sm:py-3
      sm:text-xs
    "
  >
    <span>View Case Studies</span>

    <ArrowUpRight
      className="
        h-3 w-3 shrink-0
        text-[#7A4FD1]
        transition-transform duration-500
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
    />
  </Link>
</div>
        </div>

        {/* =================================================
            FEATURE CARDS
        ================================================== */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="900"
          className="relative z-20 mt-8 grid w-full max-w-[900px] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={420 + index * 70}
                data-aos-duration="750"
                className="group flex min-w-0 items-center justify-center gap-2 rounded-lg border border-[#E5E5E9] bg-white px-2.5 py-2.5 transition-all duration-400 hover:-translate-y-1 hover:border-[#3E7BD6]/45 hover:bg-[#FCFCFE] sm:px-3 sm:py-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-transform duration-400 group-hover:scale-105">
                  <Icon className="h-3.5 w-3.5 text-white" />
                </div>

                <span className="min-w-0 text-[8px] font-semibold leading-3 text-[#27272A] sm:text-[9px] sm:leading-4">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="650"
          className="pointer-events-none mt-6 h-[1px] w-[55%] bg-gradient-to-r from-transparent via-[#3E7BD6]/20 to-transparent"
        />
      </div>
    </section>
  );
}