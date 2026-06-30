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
      <section className="relative overflow-hidden bg-[#0B0F14] py-24 lg:py-32">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-contain bg-center scale-105"
          style={{
            backgroundImage: "url('/home/contacthero.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0B0F14]/50" />

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#45A6E5]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#8FD14F]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div data-aos="fade-right">

              <span className="
                inline-flex rounded-[999px]
                border border-[#1C2530]
                bg-[#131A23]
                px-5 py-2
                text-xs font-semibold uppercase tracking-[0.35em]
                text-[#45A6E5]
              ">
                Get in Touch
              </span>

              <h1 className="
                mt-8
                text-5xl md:text-6xl xl:text-7xl
                font-light leading-tight
                text-white
              ">
                Let's start with a
                <span className="
                  block
                  bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]
                  text-transparent bg-clip-text
                  font-semibold
                ">
                  conversation.
                </span>
              </h1>

              <p className="
                mt-8 max-w-xl
                text-lg leading-9
                text-[#ccdbeb]
              ">
                Tell us what you're trying to build. A senior BeaverTek engineer
                will respond personally — usually within one business day.
                No call center. No sales funnel. Just a real conversation.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div data-aos="fade-left" className="relative">

              <div className="
                rounded-[18px]
                border border-[#1C2530]
                bg-[#131A23]/70
                backdrop-blur-xl
                p-10
                shadow-[0_0_60px_rgba(69,166,229,0.12)]
              ">

                <div className="space-y-8">

                  {/* ICON HEADER */}
                  <div className="flex items-center gap-4">

                    <div className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]
                      text-white text-xl
                    ">
                      💬
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#45A6E5]">
                        Conversation
                      </p>
                      <h3 className="text-2xl font-semibold text-white">
                        Personal Response
                      </h3>
                    </div>

                  </div>

                  {/* INFO BOXES */}
                  <div className="space-y-5">

                    <div className="
                      rounded-[18px]
                      bg-[#0B0F14]
                      border border-[#1C2530]
                      p-5
                      text-[#ccdbeb]
                      hover:border-[#45A6E5]
                      transition
                    ">
                      Senior engineers handle every inquiry personally.
                    </div>

                    <div className="
                      rounded-[18px]
                      bg-[#0B0F14]
                      border border-[#1C2530]
                      p-5
                      text-[#ccdbeb]
                      hover:border-[#8FD14F]
                      transition
                    ">
                      Usually respond within 24 hours.
                    </div>

                    <div className="
                      rounded-[18px]
                      p-6
                      text-gray-950
                      bg-gradient-to-r from-[#45A6E5] to-[#8FD14F]
                      font-medium
                      rounded-[18px]
                    ">
                      No call center.<br />
                      No sales pipeline.<br />
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