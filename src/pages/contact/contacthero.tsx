"use client";

import { useEffect } from "react";
import App_layout from "@/component/layout/app_layout";
import Contactform from "./contactform";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <App_layout>
     <section className="relative overflow-hidden bg-[#000000] py-24 lg:py-32">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-contain bg-center scale-105"
    style={{
      backgroundImage: "url('/home/contacthero.jpg')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* GLOW EFFECTS */}
  <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#29B6F0]/15 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/15 blur-3xl" />
  <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/10 blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div data-aos="fade-right">

        <span
          className="
            inline-flex
            rounded-[999px]
            border border-[#2A2A30]
            bg-white/5
            backdrop-blur-xl
            px-5 py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#29B6F0]
        "
        >
          Get in Touch
        </span>

        <h1
          className="
            mt-8
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-light
            leading-tight
            text-[#FFFFFF]
        "
        >
          Let's start with a

          <span
            className="
              block
              bg-gradient-to-r
              from-[#29B6F0]
              via-[#3E7BD6]
              to-[#B93FC9]
              bg-clip-text
              text-transparent
              font-semibold
          "
          >
            conversation.
          </span>

        </h1>

        <p
          className="
            mt-8
            max-w-xl
            text-lg
            leading-9
            text-[#D4D4D8]
        "
        >
          Tell us what you're trying to build.
          A senior BeaverTek engineer
          will respond personally —
          usually within one business day.
          No call center.
          No sales funnel.
          Just a real conversation.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div
        data-aos="fade-left"
        className="relative"
      >

        <div
          className="
            rounded-[18px]
            border border-[#2A2A30]
            bg-white/5
            backdrop-blur-2xl
            p-10
            shadow-[0_25px_60px_rgba(0,0,0,.45),0_0_60px_rgba(185,63,201,.20)]
        "
        >

          <div className="space-y-8">

            {/* ICON HEADER */}
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-[18px]
                  bg-gradient-to-br
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  via-[#7A4FD1]
                  to-[#B93FC9]
                  text-white
                  text-xl
                  shadow-[0_0_35px_rgba(62,123,214,.35)]
              "
              >
                💬
              </div>

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[#29B6F0]
                "
                >
                  Conversation
                </p>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-[#FFFFFF]
                "
                >
                  Personal Response
                </h3>

              </div>

            </div>

            {/* INFO BOXES */}
            <div className="space-y-5">

              <div
                className="
                  rounded-[18px]
                  bg-[#121212]
                  border border-[#2A2A30]
                  p-5
                  text-[#D4D4D8]
                  hover:border-[#3E7BD6]
                  hover:shadow-[0_0_35px_rgba(62,123,214,.20)]
                  transition-all
                  duration-300
              "
              >
                Senior engineers handle every inquiry personally.
              </div>

              <div
                className="
                  rounded-[18px]
                  bg-[#121212]
                  border border-[#2A2A30]
                  p-5
                  text-[#D4D4D8]
                  hover:border-[#3E7BD6]
                  hover:shadow-[0_0_35px_rgba(62,123,214,.20)]
                  transition-all
                  duration-300
              "
              >
                Usually respond within 24 hours.
              </div>

              <div
                className="
                  rounded-[18px]
                  p-6
                  text-white
                  font-medium
                  bg-gradient-to-br
                  from-[#29B6F0]
                  via-[#3E7BD6]
                  via-[#7A4FD1]
                  to-[#B93FC9]
                  shadow-[0_0_40px_rgba(62,123,214,.35)]
              "
              >
                No call center.
                <br />
                No sales pipeline.
                <br />
                Just engineering conversation.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* FORM SECTION */}
  <div className="relative z-10 mt-16">
    <Contactform />
  </div>

</section>
    </App_layout>
  );
}