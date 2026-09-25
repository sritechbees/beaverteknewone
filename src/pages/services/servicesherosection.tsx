"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import App_layout from "@/component/layout/app_layout";
import ServicesHub from "./serviceshub";
import Servicescard from "./servicescard";
import Buildtogether from "./buildtogether";
import Howwework from "./howwework";

const beaverTekGradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

export default function ServicesHerosection() {
  /* =========================================================
     AOS
  ========================================================= */

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      title: "End-to-End Digital Transformation",
      image: "/services/End-to-end-digital-transformation.jpg",
      href: "/services/digitaltransformation/herosection",
      shape: "60% 40% 55% 45% / 45% 55% 45% 55%",
    },
    {
      title: "Cloud Cost Optimization",
      image: "/services/cloud-cost-optimization2.jpg",
      href: "/services/finops/herosection",
      shape: "42% 58% 48% 52% / 58% 42% 58% 42%",
    },
    {
      title: "DevOps & DevSecOps",
      image: "/services/Devops.jpg",
      href: "/services/devops/herosection",
      shape: "52% 48% 62% 38% / 42% 58% 42% 58%",
    },
    {
      title: "Mobile App Development",
      image: "/services/Mobile App Development.jpg",
      href: "/services/mobileappdevelopment/herosection",
      shape: "45% 55% 40% 60% / 60% 40% 60% 40%",
    },
    {
      title: "Custom Software Development",
      image: "/services/Custom Software Development and Maintance.jpg",
      href: "/services/customsoftware/herosection",
      shape: "58% 42% 50% 50% / 40% 60% 40% 60%",
    },
    {
      title: "Data Analytics & Reporting",
      image: "/services/Data Analytics2.jpg",
      href: "/services/dataanalytics/herosection",
      shape: "40% 60% 58% 79% / 52% 48% 62% 38%",
    },
  ];

  return (
    <App_layout>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="20"
        className="
          relative
          overflow-hidden
          bg-[#000000]
          py-10
          sm:py-12
          md:py-14
          lg:py-16
          xl:py-18
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Cyan */}

          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1200"
            className="
              absolute
              -left-32
              top-10
              h-52
              w-52
              rounded-full
              bg-[#29B6F0]/[0.07]
              blur-[110px]
              sm:h-60
              sm:w-60
              md:h-64
              md:w-64
            "
          />

          {/* Blue */}

          <div
            data-aos="zoom-in"
            data-aos-delay="180"
            data-aos-duration="1300"
            className="
              absolute
              -right-10
              top-1/3
              h-56
              w-56
              rounded-full
              bg-[#3E7BD6]/[0.06]
              blur-[120px]
              sm:h-72
              sm:w-72
            "
          />

          {/* Magenta */}

          <div
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="1300"
            className="
              absolute
              -bottom-20
              right-1/4
              h-52
              w-52
              rounded-full
              bg-[#B93FC9]/[0.06]
              blur-[110px]
              sm:h-60
              sm:w-60
            "
          />

          {/* Grid */}

          <div
            data-aos="fade-in"
            data-aos-duration="1500"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              MAIN TWO COLUMN
          ================================================== */}

          <div
            className="
              grid
              items-center
              gap-10
              md:gap-12
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="850"
              className="
                flex
                min-w-0
                flex-col
                items-center
                text-center
                lg:items-start
                lg:text-left
              "
            >
              {/* Badge */}

              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="650"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#2A2A30]
                  bg-[#121212]
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#29B6F0]
                  sm:px-3.5
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                What We Do
              </span>

              {/* =================================================
                  MAIN TITLE
              ================================================== */}

              <h1
                data-aos="fade-up"
                data-aos-delay="260"
                data-aos-duration="850"
                className="
                  mt-4
                  max-w-2xl
                  text-[2rem]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.035em]
                  sm:mt-5
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[50px]
                  xl:text-[56px]
                  2xl:text-[60px]
                "
              >
                {/* White */}

                <span
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="650"
                  className="inline-block text-white"
                >
                  Technology
                </span>

                <br />

                {/* Gradient */}

                <span
                  data-aos="fade-up"
                  data-aos-delay="360"
                  data-aos-duration="700"
                  className="
                    inline-block
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Built Around Your
                </span>

                <br />

                {/* White */}

                <span
                  data-aos="fade-left"
                  data-aos-delay="420"
                  data-aos-duration="650"
                  className="inline-block text-white"
                >
                  Business.
                </span>
              </h1>

              {/* Divider */}

              <div
                data-aos="zoom-in"
                data-aos-delay="470"
                data-aos-duration="650"
                className="
                  mx-auto
                  mt-4
                  h-[2px]
                  w-14
                  rounded-full
                  bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                  sm:mt-5
                  sm:w-16
                  lg:mx-0
                "
              />

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="520"
                data-aos-duration="700"
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#D4D4D8]
                  sm:mt-5
                  sm:text-[15px]
                  sm:leading-7
                  md:text-base
                  md:leading-7
                  lg:mx-0
                "
              >
                BeaverTek delivers focused technology solutions that help
                businesses modernize, optimize operations, build better
                software, and turn data into meaningful business value.
              </p>

              {/* Second Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="580"
                data-aos-duration="700"
                className="
                  mx-auto
                  mt-2.5
                  max-w-xl
                  text-[12px]
                  leading-5
                  text-[#A0A0A8]
                  sm:mt-3
                  sm:text-sm
                  sm:leading-6
                  lg:mx-0
                "
              >
                From digital transformation to analytics and secure engineering,
                our services are designed around real business needs and
                measurable outcomes.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-delay="650"
                data-aos-duration="750"
                className="
                  mt-6
                  flex
                  w-auto
                  flex-col
                  items-center
                  gap-2.5
                  sm:mt-7
                  sm:flex-row
                  sm:gap-3
                  lg:justify-start
                "
              >
                {/* Primary */}

                <Link
                  href="/contact/contacthero"
                  data-aos="fade-right"
                  data-aos-delay="700"
                  data-aos-duration="650"
                  className="
                    inline-flex
                    min-w-[145px]
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-lg
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_0_24px_rgba(62,123,214,.14)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    sm:min-w-0
                    sm:text-[13px]
                  "
                >
                  Talk to Our Team
                  <ArrowRight size={15} />
                </Link>

                {/* Secondary */}

                <Link
                  href="#services"
                  data-aos="fade-left"
                  data-aos-delay="750"
                  data-aos-duration="650"
                  className="
                    inline-flex
                    min-w-[145px]
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-lg
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#3E7BD6]
                    hover:bg-[#1A1A1E]
                    sm:min-w-0
                    sm:text-[13px]
                  "
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
                FIXED SERVICE GRID
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="900"
              className=" relative mx-auto w-full max-w-[540px] min-w-0 "
            >
              {" "}
              {/* ================================================= SERVICE GRID ================================================== */}{" "}
              <div className=" grid grid-cols-2 items-start gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-5 md:gap-x-5 md:gap-y-6 ">
                {" "}
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    data-aos={
                      index % 3 === 0
                        ? "fade-right"
                        : index % 3 === 1
                          ? "zoom-in"
                          : "fade-left"
                    }
                    data-aos-delay={350 + index * 100}
                    data-aos-duration="850"
                    data-aos-easing="ease-out-cubic"
                    className={` relative min-w-0 w-full ${index % 2 === 1 ? "mt-5 sm:mt-7 md:mt-8" : ""} `}
                  >
                    {" "}
                    <Link
                      href={service.href}
                      className=" group relative block w-full overflow-hidden border border-[#2A2A30] bg-[#121212] shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#3E7BD6] hover:shadow-[0_18px_40px_rgba(62,123,214,.16)] "
                      style={{ borderRadius: service.shape }}
                    >
                      {" "}
                      {/* ================================================= IMAGE Full organic curve ================================================== */}{" "}
                      <div className=" relative h-[118px] w-full overflow-hidden sm:h-[138px] md:h-[155px] lg:h-[165px] xl:h-[175px] ">
                        {" "}
                        {/* Image */}{" "}
                        <img
                          src={service.image}
                          alt={service.title}
                          className=" absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
                        />{" "}
                        {/* ================================================= DARK OVERLAY ================================================== */}{" "}
                        <div className=" absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 " />{" "}
                        {/* ================================================= BEAVERTEK GRADIENT TINT ================================================== */}{" "}
                        <div className=" absolute inset-0 bg-gradient-to-br from-[#29B6F0]/[0.06] via-transparent to-[#B93FC9]/[0.14] opacity-80 transition-opacity duration-500 group-hover:opacity-100 " />{" "}
                        {/* ================================================= CENTERED SERVICE TITLE ================================================== */}{" "}
                        <div className=" absolute inset-x-0 bottom-5 z-10 flex flex-col items-center justify-center px-2 text-center sm:bottom-6 sm:px-3 md:bottom-7 ">
                          {" "}
                          {/* Gradient Line */}{" "}
                          <div className=" mb-2 h-[2px] w-7 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 group-hover:w-11 sm:mb-2.5 sm:w-8 " />{" "}
                          {/* Title */}{" "}
                          <h3 className=" max-w-[95%] text-center text-[10px] font-extrabold leading-[1.2] tracking-[-0.01em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.7)] transition-colors duration-300 group-hover:text-[#29B6F0] sm:text-[11px] sm:leading-[1.25] md:text-xs lg:text-[13px] xl:text-sm ">
                            {" "}
                            {service.title}{" "}
                          </h3>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* ================================================= BOTTOM GRADIENT ACCENT ================================================== */}{" "}
                      <div className=" absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-700 group-hover:w-full " />{" "}
                    </Link>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES HUB
      ====================================================== */}

      <div data-aos="fade-up" data-aos-duration="850" data-aos-offset="50">
        <ServicesHub />

        <Howwework />

        <Buildtogether />

        {/* <Servicescard /> */}
      </div>
    </App_layout>
  );
}
