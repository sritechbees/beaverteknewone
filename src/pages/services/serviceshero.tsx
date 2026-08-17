"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import App_layout from "@/component/layout/app_layout";
import ServicesHub from "./serviceshub";


export default function ServicesHero() {
  const services = [
    {
      title: "End-to-End Digital Transformation",
      image: "/home/whyexist.jpg",
      href: "/services/digitaltransformation/herosection",
      shape: "60% 40% 55% 45% / 45% 55% 45% 55%",
    },
    {
      title: "Cloud Cost Optimization",
      image: "/home/producthero.png",
      href: "/services/finops/herosection",
      shape: "42% 58% 48% 52% / 58% 42% 58% 42%",
    },
    {
      title: "DevOps & DevSecOps",
      image: "/home/theteam.jpg",
      href: "/services/devops/herosection",
      shape: "52% 48% 62% 38% / 42% 58% 42% 58%",
    },
    {
      title: "Mobile App Development",
      image: "/home/homehero.jpg",
      href: "/services/mobileappdevelopment/herosection",
      shape: "45% 55% 40% 60% / 60% 40% 60% 40%",
    },
    {
      title: "Custom Software Development",
      image: "/home/whyexist.jpg",
      href: "/services/customsoftware/herosection",
      shape: "58% 42% 50% 50% / 40% 60% 40% 60%",
    },
    {
      title: "Data Analytics & Reporting",
      image: "/home/producthero.png",
      href: "/services/dataanalytics/herosection",
      shape: "40% 60% 58% 42% / 52% 48% 62% 38%",
    },
  ];

  return (
    <App_layout>
      <section className="relative overflow-hidden bg-[#000000] pt-16 pb-20 lg:pb-28">

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#29B6F0]
                "
              >
                What We Do
              </span>

              {/* Title */}
              <h1
                className="
                  mt-7
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  xl:text-[68px]
                "
              >
                <span className="text-white">
                  Technology
                </span>

                <br />

                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Built Around Your Business.
                </span>
              </h1>

              {/* Divider */}
              <div
                className="
                  mt-7
                  h-[3px]
                  w-20
                  rounded-full
                  bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                  mx-auto
                  lg:mx-0
                "
              />

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-xl
                  mx-auto
                  text-base
                  leading-7
                  text-[#D4D4D8]
                  sm:text-lg
                  sm:leading-8
                  lg:mx-0
                "
              >
                BeaverTek delivers focused technology solutions that help
                businesses modernize, optimize operations, build better
                software, and turn data into meaningful business value.
              </p>

              <p
                className="
                  mt-4
                  max-w-xl
                  mx-auto
                  text-sm
                  leading-7
                  text-[#A0A0A8]
                  sm:text-base
                  lg:mx-0
                "
              >
                From digital transformation to analytics and secure
                engineering, our services are designed around real business
                needs and measurable outcomes.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:justify-center
                  lg:justify-start
                "
              >
                <Link
                  href="/contact/contacthero"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_30px_rgba(62,123,214,.20)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  Talk to Our Team
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#3E7BD6]
                    hover:bg-[#1A1A1E]
                  "
                >
                  Explore Services
                </Link>
              </div>

            </div>

            {/* ================= RIGHT SIDE - 6 CURVED IMAGES ================= */}
            <div className="relative mx-auto w-full max-w-[600px]">

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                  sm:gap-5
                  md:gap-6
                "
              >

                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`
                      group
                      relative
                      overflow-hidden
                      border
                      border-[#2A2A30]
                      bg-[#121212]
                      shadow-[0_20px_50px_rgba(0,0,0,.35)]
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-[#3E7BD6]
                      ${index % 2 === 1 ? "mt-8 sm:mt-10" : ""}
                    `}
                    style={{
                      borderRadius: service.shape,
                    }}
                  >

                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        h-[190px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                        sm:h-[210px]
                        md:h-[225px]
                      "
                    />

                    {/* Dark Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/25
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:from-black/90
                      "
                    />

                    {/* Service Number */}
                    <span
                      className="
                        absolute
                        right-4
                        top-4
                        text-3xl
                        font-black
                        text-white/20
                        transition-colors
                        duration-300
                        group-hover:text-[#29B6F0]/60
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* Service Content */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        p-4
                        sm:p-5
                      "
                    >
                      <div
                        className="
                          mb-2
                          h-[2px]
                          w-8
                          rounded-full
                          bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                          transition-all
                          duration-500
                          group-hover:w-14
                        "
                      />

                      <h3
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-white
                          text-center
                          sm:text-base
                          sm:leading-6
                        "
                      >
                        {service.title}
                      </h3>
                    </div>

                  </Link>
                ))}

              </div>

            </div>

</div>
        </div>
      </div>
    </section>
    <ServicesHub/>
    </App_layout>
  );
}