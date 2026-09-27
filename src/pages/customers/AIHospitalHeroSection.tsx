"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AIHospitalHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 40,
    });

    AOS.refresh();
  }, []);

  const handleDiscussClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const target = document.getElementById("AIcasestudytwo");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-7xl
        overflow-hidden
        bg-[#000000]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:py-16
        xl:py-20
      "
    >
      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}

      <div
        className="
          grid
          items-center
          gap-8
          sm:gap-10
          md:gap-12
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="
            order-2
            flex
            w-full
            min-w-0
            flex-col
            justify-center
            lg:order-1
          "
        >
          {/* Badge */}

          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-[#3E7BD6]/30
              bg-white/[0.025]
              px-3.5
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#29B6F0]
              backdrop-blur-sm
              sm:px-4
              sm:py-2
              sm:text-[10px]
              sm:tracking-[0.26em]
              md:text-[11px]
            "
          >
            AI Healthcare Case Study
          </span>

          {/* Heading */}

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              mt-4
              max-w-[620px]
              text-[34px]
              font-black
              leading-[1.06]
              tracking-tight
              text-white
              sm:mt-5
              sm:text-[42px]
              md:text-[50px]
              lg:mt-6
              lg:text-[56px]
              xl:text-[64px]
            "
          >
            AI in

            <br />

            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Real Hospitals
            </span>
          </h1>

          {/* Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="250"
            className="
              mt-4
              h-[3px]
              w-16
              rounded-full
              bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              sm:mt-5
              sm:w-20
              md:w-24
              md:h-[4px]
            "
          />

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="
              mt-5
              max-w-[560px]
              text-[14px]
              leading-6
              text-[#D4D4D8]
              sm:mt-6
              sm:text-[15px]
              sm:leading-7
              md:text-[16px]
              md:leading-8
              lg:mt-7
              lg:text-lg
              lg:leading-9
            "
          >
            BeaverTek partnered with healthcare providers to build an
            enterprise AI platform that transforms patient intake,
            automates hospital workflows, enhances clinical
            decision-making, and enables secure digital healthcare
            experiences across modern hospitals.
          </p>

          {/* Buttons */}

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="
              mt-6
              flex
              w-full
              flex-col
              gap-2.5
              sm:mt-8
              sm:flex-row
              sm:gap-3
              md:gap-4
            "
          >
            <Link
              href="#AIcasestudytwo"
              onClick={handleDiscussClick}
              className="
                inline-flex
                w-full
                max-w-[210px]
                items-center
                justify-center
                self-start
                rounded-full
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_16px_35px_rgba(41,182,240,.22)]
                transition
                duration-300
                hover:scale-[1.02]
                sm:w-auto
                sm:max-w-none
                sm:px-7
                sm:py-3.5
                sm:text-sm
                sm:hover:scale-105
                md:px-8
                md:py-4
              "
            >
              Discuss Your Project

              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <Link
              href="/customers/casestudyoverall"
              className="
                inline-flex
                w-full
                max-w-[210px]
                items-center
                justify-center
                self-start
                rounded-full
                border
                border-[#2A2A30]
                bg-white/[0.025]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                backdrop-blur-sm
                transition
                duration-300
                hover:border-[#29B6F0]
                sm:w-auto
                sm:max-w-none
                sm:px-7
                sm:py-3.5
                sm:text-sm
                md:px-8
                md:py-4
              "
            >
              View All Case Studies
            </Link>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT IMAGE */}
        {/* ================================================= */}

        <div
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="150"
          className="
            order-1
            flex
            w-full
            min-w-0
            justify-center
            lg:order-2
            lg:justify-end
          "
        >
          <div
            className="
              w-full
              max-w-[650px]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[20px]
                border
                border-[#2A2A30]
                bg-[#121212]
                shadow-[0_20px_60px_rgba(0,0,0,.38)]
                sm:rounded-[24px]
                md:rounded-[28px]
                lg:rounded-[32px]
              "
            >
              <Image
                src="/home/abouthero1.png"
                alt="AI in Real Hospitals"
                width={650}
                height={500}
                priority
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SCROLL TARGET SUPPORT */}
      {/* ================================================= */}

      <div
        id="AIcasestudytwo"
        className="scroll-mt-2"
      />
    </div>
  );
}