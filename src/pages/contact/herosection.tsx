
"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Contactformtalk from "./contactformtalk";

const GRADIENT =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <App_layout>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        className="
          relative
          isolate
          min-h-[500px]
          w-full
          overflow-hidden
          sm:min-h-[540px]
          md:min-h-[560px]
          lg:min-h-[600px]
        "
      >
        {/* =========================================================
            BACKGROUND IMAGE
        ========================================================== */}

        <div
          className="
            absolute
            inset-0
            -z-20
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/contact/Contact.jpg')",
          }}
        />

        {/* =========================================================
            DARK OVERLAY
        ========================================================== */}

        <div className="absolute inset-0 -z-10 bg-black/10" />

        {/* =========================================================
            SUBTLE GRADIENT OVERLAY
        ========================================================== */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/20 via-black/45 to-black/20" />

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}

        <div
          className="
            mx-auto
            flex
            min-h-[460px]
            w-full
            max-w-7xl
            items-center
            justify-center
            px-4
            py-12
            text-center
            sm:min-h-[500px]
            sm:px-6
            sm:py-14
            md:min-h-[520px]
            md:px-8
            md:py-16
            lg:min-h-[560px]
            lg:px-10
            lg:py-18
            xl:min-h-[580px]
          "
        >
          <div className="w-full max-w-4xl">
            {/* =====================================================
                BEAVERTEK
            ====================================================== */}

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                mb-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.24em]
                sm:mb-4
                sm:text-xs
                md:text-sm
              "
              style={{
                backgroundImage: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BEAVERTEK
            </p>

            {/* =====================================================
                MAIN HEADING
            ====================================================== */}

            <h1
              data-aos="fade-up"
              data-aos-delay="180"
              className="
                mx-auto
                max-w-3xl
                text-[28px]
                font-extrabold
                leading-[1.12]
                tracking-tight
                text-white
                sm:text-3xl
                md:text-[40px]
                lg:text-[48px]
                xl:text-[54px]
              "
            >
              Let&apos;s Build{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: GRADIENT,
                }}
              >
                Something Great
              </span>{" "}
              Together
            </h1>

            {/* =====================================================
                SECTION TITLE
            ====================================================== */}

            <h2
              data-aos="fade-up"
              data-aos-delay="260"
              className="
                mx-auto
                mt-4
                text-lg
                font-semibold
                text-white
                sm:mt-5
                sm:text-xl
                md:text-2xl
                lg:text-[26px]
              "
            >
              BeaverTek IT Services
            </h2>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              data-aos="fade-up"
              data-aos-delay="340"
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[13px]
                leading-5
                text-white/75
                sm:mt-5
                sm:text-sm
                sm:leading-6
                md:text-base
                md:leading-7
                lg:max-w-3xl
              "
            >
              Whether you&apos;re looking for a custom IT solution, want to
              collaborate on a project, or just have a question our team is
              here to help. Reach out and let&apos;s start a conversation that
              could transform your business.
            </p>

            {/* =====================================================
                CTA
            ====================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="420"
              className="
                mt-6
                flex
                justify-center
                sm:mt-7
              "
            >
              <Link
                href="#contactformtalk"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  to-[#B93FC9]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#29B6F0]/20
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl
                  hover:shadow-[#7A4FD1]/25
                  sm:px-6
                  sm:py-3
                  sm:text-sm
                "
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM SECTION
          ID USED BY "LET'S TALK" BUTTON
      ========================================================== */}

      <section
        id="contactformtalk"
        className="scroll-mt-20 sm:scroll-mt-24"
      >
        <Contactformtalk />
      </section>
    </App_layout>
  );
}

