"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterCTA from "../home/footercta";
import Image from "next/image";

const gradient =
  "linear-gradient(135deg,#29B6F0_0%,#3E7BD6_40%,#7A4FD1_75%,#B93FC9_100%)";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const services = [
    [
      "End-to-End Digital Transformation",
      "/services/digitaltransformation/herosection",
    ],
    ["Cloud Cost Optimization (FinOps)", "/services/finops/herosection"],
    ["DevOps & DevSecOps", "/services/devops/herosection"],
    [
      "Mobile App Development",
      "/services/mobileappdevelopment/herosection",
    ],
    [
      "Custom Software Development & Maintenance",
      "/services/customsoftware/herosection",
    ],
    [
      "Data Analytics and Reporting",
      "/services/dataanalytics/herosection",
    ],
  ];

  const quickLinks = [
    ["Home", "/"],
    ["About", "/about_us/abouthero"],
    ["Services", "/services/serviceshero"],
    ["Customers", "/customers/casestudyhero"],
    ["Products", "/products/producthero"],
    ["Contact", "/contact/contacthero"],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#000000] text-white">
      {/* =====================================================
          FOOTER CTA
      ====================================================== */}
      <FooterCTA />

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#29B6F0]/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-[#B93FC9]/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/5
          blur-[140px]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-6
          lg:px-8
          lg:py-16
        "
      >
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* =================================================
              COMPANY
          ================================================= */}

          <div
            data-aos="fade-up"
            className="group"
          >
            {/* LOGO */}

            <div className="mb-5 inline-flex">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  transition-all
                  duration-500
                  group-hover:scale-[1.03]
                "
              >
                {/* Logo Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                  "
                  style={{
                    background: gradient,
                  }}
                />

                <Image
                  src="/home/Logo option-2.png"
                  alt="BeaverTek"
                  width={210}
                  height={110}
                  priority
                  className="
                    relative
                    z-10
                    h-auto
                    w-[190px]
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-[#A0A0A8]
                transition-colors
                duration-300
                group-hover:text-[#C7C7CC]
              "
            >
              A technology partner for small and mid-size businesses. We
              modernize systems, build software, unlock data insights, and
              keep digital operations secure.
            </p>

            {/* MINI INDICATORS */}

            <div className="mt-6 flex items-center gap-2">
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#29B6F0]
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:shadow-[0_0_14px_#29B6F0]
                "
              />

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#3E7BD6]
                  transition-all
                  delay-75
                  duration-300
                  group-hover:scale-125
                  group-hover:shadow-[0_0_14px_#3E7BD6]
                "
              />

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#B93FC9]
                  transition-all
                  delay-150
                  duration-300
                  group-hover:scale-125
                  group-hover:shadow-[0_0_14px_#B93FC9]
                "
              />
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                bg-clip-text
                text-transparent
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map(([name, href], index) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="
                      group/link
                      relative
                      flex
                      w-fit
                      items-center
                      gap-2
                      py-1.5
                      text-sm
                      text-[#A0A0A8]
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {/* Animated Line */}

                    <span
                      className="
                        absolute
                        -left-3
                        h-px
                        w-0
                        bg-gradient-to-r
                        from-[#29B6F0]
                        to-[#B93FC9]
                        transition-all
                        duration-300
                        group-hover/link:w-2
                      "
                    />

                    <span>{name}</span>

                    {/* Arrow */}

                    <span
                      className="
                        translate-x-[-4px]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover/link:translate-x-0
                        group-hover/link:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES - NEW 6 SERVICES
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                bg-clip-text
                text-transparent
              "
            >
              Services
            </h3>

            <ul className="space-y-1.5">
              {services.map(([name, href], index) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="
                      group/service
                      relative
                      flex
                      items-center
                      gap-2
                      overflow-hidden
                      rounded-lg
                      px-3
                      py-2
                      text-sm
                      text-[#A0A0A8]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    {/* Sliding Gradient Background */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-[#29B6F0]/10
                        via-[#7A4FD1]/10
                        to-[#B93FC9]/10
                        transition-transform
                        duration-500
                        group-hover/service:translate-x-0
                      "
                    />

                    {/* Left Accent */}

                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-0
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-gradient-to-b
                        from-[#29B6F0]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        transition-all
                        duration-300
                        group-hover/service:h-6
                      "
                    />


                    {/* Service Name */}

                    <span
                      className="
                        relative
                        z-10
                        flex-1
                        leading-5
                      "
                    >
                      {name}
                    </span>

                    {/* Arrow */}

                    <span
                      className="
                        relative
                        z-10
                        -translate-x-2
                        text-[#29B6F0]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover/service:translate-x-0
                        group-hover/service:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                bg-clip-text
                text-transparent
              "
            >
              Contact
            </h3>

            <div className="space-y-3">
              {[
                ["Email", "info@beavertek.com"],
                ["USA", "+1 (949) 885-6193"],
                ["India", "+91 99620 92583"],
                ["Headquarters", "Irvine, California"],
                ["Engineering Hub", "India"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    group/contact
                    rounded-lg
                    border
                    border-transparent
                    px-3
                    py-2
                    transition-all
                    duration-300
                    hover:border-[#2A2A30]
                    hover:bg-white/[0.025]
                    hover:translate-x-1
                  "
                >
                  <p
                    className="
                      text-xs
                      font-medium
                      text-[#3E7BD6]
                      transition-colors
                      duration-300
                      group-hover/contact:text-[#29B6F0]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-sm
                      text-[#A0A0A8]
                      transition-colors
                      duration-300
                      group-hover/contact:text-white
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            PREMIUM STRIP
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="
            group/strip
            relative
            mt-12
            overflow-hidden
            rounded-[18px]
            border
            border-[#2A2A30]
            bg-[#121212]
            p-5
            transition-all
            duration-500
            hover:border-[#3E7BD6]/50
            hover:bg-[#151515]
          "
        >
          {/* Gradient Sweep */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[30%]
              w-[40%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.04]
              to-transparent
              transition-all
              duration-1000
              group-hover/strip:left-[110%]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-4
              md:flex-row
            "
          >
            <p
              className="
                text-center
                text-sm
                leading-6
                text-[#A0A0A8]
                transition-colors
                duration-300
                group-hover/strip:text-[#D4D4D8]
                md:text-left
              "
            >
              Building scalable digital systems with modern engineering &
              AI-driven solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Scalable Systems",
                "AI Solutions",
                "Cloud Native",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    group/tag
                    cursor-default
                    rounded-full
                    border
                    border-[#2A2A30]
                    bg-[#000000]
                    px-3.5
                    py-1.5
                    text-xs
                    text-[#D4D4D8]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#3E7BD6]
                    hover:text-white
                    hover:shadow-[0_8px_25px_rgba(62,123,214,0.12)]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-[#2A2A30]
            pt-7
            md:flex-row
          "
        >
          <p
            className="
              text-center
              text-xs
              text-[#7A7A7A]
              transition-colors
              duration-300
              hover:text-[#A0A0A8]
              md:text-left
            "
          >
            © {new Date().getFullYear()} BeaverTek. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-[#A0A0A8]">
            <Link
              href="#"
              className="
                relative
                transition-colors
                duration-300
                hover:text-[#29B6F0]
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-0
                after:bg-[#29B6F0]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
                relative
                transition-colors
                duration-300
                hover:text-[#B93FC9]
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-0
                after:bg-[#B93FC9]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}