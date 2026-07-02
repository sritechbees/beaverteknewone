"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import AboutContent from "./aboutcontent";
import WhatWeBelieve from "./whatwebelieve";
import WhereWeAre from "./whereweare";

export default function AboutHero() {
  return (
    <App_layout>
 <section className="bg-white overflow-hidden py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[520px]">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-semibold">
              About BeaverTek
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
              Building
              <span className="block bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-7 max-w-lg">
              We create innovative software solutions, AI applications,
              cloud platforms and enterprise products that help
              businesses grow with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
  href="/services/serviceshero"
  className="rounded-full bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#22C55E] px-7 py-3.5 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Our Services
</Link>

              <Link
  href="/contact/contacthero"
  className="rounded-full border border-sky-500 bg-white px-7 py-3.5 font-semibold text-sky-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#38BDF8] hover:to-[#22C55E] hover:text-white hover:border-transparent"
>
  Contact Us
</Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            {/* Background Blur */}
            <div className="absolute w-80 h-80 bg-sky-200 rounded-full blur-3xl opacity-40"></div>

            <div
              className="relative w-full max-w-[520px] h-[340px] sm:h-[420px] lg:h-[520px] overflow-hidden shadow-2xl border-8 border-white"
              style={{
                borderRadius:
                  " 20% 30% 20% 35% / 20% 30% 50% 65%",
              }}
            >
              <Image
                src="/home/studyhero.jpg"
                alt="About"
                fill
                className="object-fill"
                priority
              />
            </div>

          </div>

        </div>

      </div>
    </section>
    <AboutContent/>
    
    <WhatWeBelieve/>
    <WhereWeAre/>
    </App_layout>
  );
}