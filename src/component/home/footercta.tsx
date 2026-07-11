
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  const features = [
    "Enterprise AI Solutions",
    "Cloud & Data Platforms",
    "Healthcare Technology",
    "24/7 Expert Support",
  ];

  return (
    <section className="relative overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: "url('/home/ctaimage.jpg')" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/80 to-[#000000]/45" />


  {/* Glow */}
  <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#29B6F0]/20 blur-[120px]" />
  <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#B93FC9]/20 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      <div data-aos="fade-right">

        <span
          className="
            inline-flex
            rounded-full
            border border-[#2A2A30]
            bg-[#121212]
            px-4 py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#29B6F0]
          "
        >
          Let's Build Together
        </span>

       <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
  <span className="text-white">Need Senior</span>
  <br />
  <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
    Technology Help?
  </span>
</h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#D4D4D8] sm:text-lg">
          Partner with experienced engineers to design, build and scale
          secure AI-powered enterprise solutions tailored to your business.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/contact/contacthero"
            className="
              rounded-full
              bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
              px-8
              py-4
              text-center
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(62,123,214,.35)]
              transition
              hover:scale-105
            "
          >
            Book a 30-Minute Call →
          </Link>

          <Link
            href="/customers/casestudyoverall"
            className="
              rounded-full
              border border-[#2A2A30]
              bg-white/5
              px-8
              py-4
              text-center
              font-semibold
              text-white
              backdrop-blur
              hover:border-[#3E7BD6]
              hover:bg-white/10
            "
          >
            View Case Studies
          </Link>

        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center sm:text-left">

          <div>
            <div className="text-3xl font-bold text-[#FFFFFF]">500+</div>
            <p className="text-sm text-[#A0A0A8]">Projects</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#FFFFFF]">50+</div>
            <p className="text-sm text-[#A0A0A8]">Experts</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-[#FFFFFF]">24/7</div>
            <p className="text-sm text-[#A0A0A8]">Support</p>
          </div>

        </div>

      </div>

      <div
        data-aos="fade-left"
        className="
          mx-auto
          w-full
          max-w-md
          rounded-[32px]
          border border-[#2A2A30]
          bg-[#121212]/90
          p-8
          backdrop-blur-xl
          shadow-[0_25px_60px_rgba(0,0,0,.45)]
        "
      >

        <h3 className="text-2xl font-bold text-[#FFFFFF]">
          Trusted Technology Partner
        </h3>

        <p className="mt-3 text-[#A0A0A8]">
          From strategy to deployment, we help organizations modernize with confidence.
        </p>

        <div className="mt-8 space-y-4">

          {features.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border border-[#2A2A30]
                bg-[#1A1A1E]
                p-4
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                  text-white
                "
              >
                ✓
              </div>

              <span className="font-medium text-[#FFFFFF]">
                {item}
              </span>
            </div>
          ))}

        </div>

        <div
          className="
            mt-8
            rounded-2xl
            bg-[linear-gradient(135deg,rgba(41,182,240,.18),rgba(185,63,201,.18))]
            border border-[#2A2A30]
            p-6
          "
        >
          <div className="text-4xl font-black text-[#FFFFFF]">
            98%
          </div>

          <p className="mt-2 text-[#A0A0A8]">
            Client satisfaction across enterprise engagements.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
  );
}
