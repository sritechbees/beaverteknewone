"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  const features = [
    "Enterprise AI Solutions",
    "Cloud & Data Platforms",
    "Healthcare Technology",
    "24/7 Expert Support",
  ];

  return (
    <section className="relative overflow-hidden">

      

     
      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-24
        "
      >

        {/* PREMIUM RECTANGLE BOX */}
        <div
  className="
    relative
    overflow-hidden
    rounded-[24px]
    border
    border-[#2A2A30]
    bg-[#0A0A0A]
    shadow-[0_30px_100px_rgba(0,0,0,.55)]
  "
>

          {/* Inner Rectangle Background Image */}
  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-center
      transition-transform
      duration-[2000ms]
    "
    style={{
      backgroundImage: "url('/home/ctaimage.jpg')",
    }}
  />

  {/* Inner Image Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#000000]/60
      via-[#000000]/90
      to-[#000000]/60
    "
  />

  {/* Inner Gradient Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -top-40
      left-1/2
      h-80
      w-80
      -translate-x-1/2
      rounded-full
      bg-[#29B6F0]/10
      blur-[120px]
    "
  />

  {/* Content */}
  <div
    className="
      relative
      z-10
      grid
      items-center
      gap-10
      p-6
      sm:p-8
      md:p-10
      lg:grid-cols-2
      lg:gap-14
      lg:p-14
    "
  >

            {/* ================= LEFT CONTENT ================= */}
            <div data-aos="fade-right">

              {/* Badge */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-4
                  py-2
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#29B6F0]
                "
              >
                Let's Build Together
              </span>

              {/* Title */}
              <h2
                className="
                  mt-5
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                  font-extrabold
                  leading-[1.1]
                  tracking-tight
                "
              >
                <span className="text-white">
                  Need Senior
                </span>

                <span
                  className="
                    block
                    mt-1.5
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Technology Help?
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-7
                  md:leading-8
                  text-[#D4D4D8]
                "
              >
                Partner with experienced engineers to design, build and scale
                secure AI-powered enterprise solutions tailored to your business.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  href="/contact/contacthero"
                  className="
                    rounded-full
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    px-6
                    py-3.5
                    text-center
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                    shadow-[0_0_40px_rgba(62,123,214,.30)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  Book a 30-Minute Call →
                </Link>

                <Link
                  href="/customers/casestudyoverall"
                  className="
                    rounded-full
                    border
                    border-[#2A2A30]
                    bg-white/5
                    px-6
                    py-3.5
                    text-center
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:border-[#3E7BD6]
                    hover:bg-white/10
                  "
                >
                  View Case Studies
                </Link>

              </div>

              {/* Stats */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-3
                  gap-4
                  border-t
                  border-[#2A2A30]
                  pt-7
                  text-center
                  sm:text-left
                  sm:gap-6
                "
              >

                <div>
                  <div
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    500+
                  </div>

                  <p className="mt-1 text-xs sm:text-sm text-[#A0A0A8]">
                    Projects
                  </p>
                </div>

                <div>
                  <div
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    50+
                  </div>

                  <p className="mt-1 text-xs sm:text-sm text-[#A0A0A8]">
                    Experts
                  </p>
                </div>

                <div>
                  <div
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    24/7
                  </div>

                  <p className="mt-1 text-xs sm:text-sm text-[#A0A0A8]">
                    Support
                  </p>
                </div>

              </div>

            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div
              data-aos="fade-left"
              className="
                w-full
                max-w-md
                mx-auto
                lg:max-w-none
              "
            >

              <div
                className="
                  rounded-[20px]
                  border
                  border-[#2A2A30]
                  bg-[#121212]/90
                  p-6
                  sm:p-7
                  backdrop-blur-xl
                  shadow-[0_25px_60px_rgba(0,0,0,.45)]
                "
              >

                {/* Card Heading */}
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  Trusted Technology Partner
                </h3>

                <p
                  className="
                    mt-2.5
                    text-sm
                    sm:text-base
                    leading-6
                    text-[#A0A0A8]
                  "
                >
                  From strategy to deployment, we help organizations modernize
                  with confidence.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">

                  {features.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[#2A2A30]
                        bg-[#1A1A1E]
                        p-3.5
                        transition-all
                        duration-300
                        hover:border-[#3E7BD6]/60
                        hover:bg-[#1A1A1E]/90
                      "
                    >

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        ✓
                      </div>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-[#FFFFFF]
                        "
                      >
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

                {/* Satisfaction */}
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border
                    border-[#2A2A30]
                    bg-[linear-gradient(135deg,rgba(41,182,240,.14),rgba(185,63,201,.14))]
                    p-5
                  "
                >

                  <div
                    className="
                      text-3xl
                      sm:text-4xl
                      font-extrabold
                      text-white
                    "
                  >
                    98%
                  </div>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-6
                      text-[#A0A0A8]
                    "
                  >
                    Client satisfaction across enterprise engagements.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}