"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Productcontent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  const gradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  return (
    <>
      {/* =======================================================
          BEAVER HEALTH AI
      ======================================================= */}


<section
  className="
    relative
    overflow-hidden
    bg-white
    py-9
    sm:py-11
    md:py-12
    lg:py-14
  "
>
  {/* =================================================
      SUBTLE BACKGROUND GRID
  ================================================= */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#3E7BD6 1px,transparent 1px),linear-gradient(90deg,#3E7BD6 1px,transparent 1px)",
      backgroundSize: "45px 45px",
    }}
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
    <div
      className="
        grid
        items-center
        gap-7
        sm:gap-8
        md:gap-9
        lg:grid-cols-2
        lg:gap-11
        xl:gap-14
      "
    >
      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <div className="w-full max-w-xl">
        {/* Badge */}

        <div
          data-aos="fade-down"
          data-aos-duration="750"
          data-aos-delay="80"
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#D9DDE5]
            bg-[#F7F9FC]
            px-3
            py-1.5
            shadow-sm
            sm:px-3.5
            sm:py-1.5
          "
        >
          <Activity className="mr-1.5 h-3.5 w-3.5 text-[#3E7BD6] sm:h-4 sm:w-4" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#3E7BD6]
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Beaver Product
          </span>
        </div>

        {/* Heading */}

        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
          className="
            mt-4
            text-[2rem]
            font-black
            leading-[1.04]
            tracking-[-0.04em]
            text-[#111318]
            sm:mt-5
            sm:text-[2.4rem]
            md:text-[2.8rem]
            lg:text-[3.1rem]
            xl:text-[3.5rem]
          "
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: gradient,
            }}
          >
            BeaverHealthAI
          </span>
        </h1>

        {/* Sub Heading */}

        <p
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="230"
          className="
            mt-2
            text-base
            font-semibold
            text-[#30343B]
            sm:text-lg
            md:text-xl
          "
        >
          Intelligent Healthcare AI Platform
        </p>

        {/* Description */}

        <p
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="300"
          className="
            mt-4
            max-w-lg
            text-[13px]
            leading-6
            text-[#5D636D]
            sm:mt-4.5
            sm:text-sm
            sm:leading-6.5
            md:text-[15px]
            lg:text-base
            lg:leading-7
          "
        >
          BeaverHealthAI combines AI-powered patient intake,
          intelligent triaging, remote patient monitoring,
          predictive analytics and hospital workflow automation
          into one secure enterprise platform.
        </p>

        {/* Buttons */}

        <div
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="380"
          className="
            mt-6
            flex
            flex-wrap
            gap-2.5
            sm:mt-6
            sm:gap-3
          "
        >
          {/* Primary */}

          <Link
            href="https://beaverhealth.ai"
            target="_blank"
            className="
              group
              inline-flex
              items-center
              rounded-full
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(41,182,240,.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(62,123,214,.25)]
              sm:px-5.5
              sm:py-3
              sm:text-sm
            "
            style={{
              background: gradient,
            }}
          >
            Visit Platform

            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
          </Link>

          {/* Secondary */}

          <Link
            href="/customers/casestudyhero"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D7DBE3]
              bg-white
              px-5
              py-2.5
              text-xs
              font-semibold
              text-[#252932]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#3E7BD6]
              hover:bg-[#F7F9FC]
              hover:text-[#3E7BD6]
              sm:px-5.5
              sm:py-3
              sm:text-sm
            "
          >
            Contact Sales
          </Link>
        </div>

        {/* Trust Tags */}

        <div
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="470"
          className="
            mt-5
            flex
            flex-wrap
            gap-2
            sm:mt-6
            sm:gap-2.5
          "
        >
          {[
            "AI Powered",
            "Healthcare",
            "Cloud Native",
            "Enterprise Security",
          ].map((item, index) => (
            <div
              key={item}
              data-aos="zoom-in"
              data-aos-delay={520 + index * 70}
              className="
                rounded-full
                border
                border-[#E0E3E8]
                bg-[#F8F9FB]
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-[#59606B]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#3E7BD6]
                hover:bg-[#F1F6FF]
                hover:text-[#3E7BD6]
                sm:px-3.5
                sm:py-1.5
                sm:text-xs
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="120"
        className="
          relative
          flex
          w-full
          items-center
          justify-center
        "
      >
        {/* Gradient Border Wrapper */}

        <div
          className="
            w-full
            max-w-[470px]
            rounded-[22px]
            p-[1px]
            shadow-[0_20px_60px_rgba(31,41,55,.10)]
            sm:max-w-[520px]
            lg:max-w-[560px]
          "
          style={{
            background: gradient,
          }}
        >
          {/* White Card */}

          <div className="overflow-hidden rounded-[21px] border border-[#E1E4EA] bg-white">
            {/* Top Gradient Line */}

            <div
              className="h-[3px] w-full"
              style={{
                background: gradient,
              }}
            />

            <div className="p-4 sm:p-5 md:p-6 lg:p-7">
              {/* Header */}

              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="220"
                className="flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    shadow-[0_8px_20px_rgba(62,123,214,.18)]
                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1)",
                  }}
                >
                  <Brain className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#3E7BD6] sm:text-[10px]">
                    AI Platform
                  </p>

                  <h2 className="mt-0.5 text-lg font-bold leading-tight text-[#15181D] sm:text-xl md:text-2xl">
                    Healthcare AI Platform
                  </h2>
                </div>
              </div>

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                className="
                  mt-4
                  text-[13px]
                  leading-6
                  text-[#5D636D]
                  sm:text-sm
                  sm:leading-6
                  md:text-[15px]
                "
              >
                A healthcare intelligence platform combining AI-powered
                patient intake, intelligent triaging, remote monitoring,
                predictive analytics and automated clinical workflows.
              </p>

              {/* Divider */}

              <div className="my-5 h-px w-full bg-[#E5E7EB] sm:my-6" />

              {/* Feature 1 */}

              <div
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="350"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#E3E6EB]
                  bg-[#F8F9FB]
                  p-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#29B6F0]
                  hover:bg-[#F5FAFF]
                  hover:shadow-[0_8px_25px_rgba(41,182,240,.10)]
                  sm:gap-3.5
                  sm:p-3.5
                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    shadow-sm
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#29B6F0,#3E7BD6)",
                  }}
                >
                  <HeartPulse className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#171A1F] sm:text-base">
                    Smart Patient Intake
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#6B7280] sm:text-sm sm:leading-6">
                    Intelligent registration and automated triage
                    to reduce healthcare workload.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}

              <div
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="450"
                className="
                  mt-2.5
                  group
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#E3E6EB]
                  bg-[#F8F9FB]
                  p-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#7A4FD1]
                  hover:bg-[#FAF8FF]
                  hover:shadow-[0_8px_25px_rgba(122,79,209,.10)]
                  sm:gap-3.5
                  sm:p-3.5
                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    shadow-sm
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#3E7BD6,#7A4FD1)",
                  }}
                >
                  <Activity className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#171A1F] sm:text-base">
                    Remote Monitoring
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#6B7280] sm:text-sm sm:leading-6">
                    Real-time patient insights beyond hospital walls
                    with secure AI monitoring.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}

              <div
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="550"
                className="
                  mt-2.5
                  group
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#E3E6EB]
                  bg-[#F8F9FB]
                  p-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#B93FC9]
                  hover:bg-[#FEF8FF]
                  hover:shadow-[0_8px_25px_rgba(185,63,201,.10)]
                  sm:gap-3.5
                  sm:p-3.5
                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    shadow-sm
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#7A4FD1,#B93FC9)",
                  }}
                >
                  <ShieldCheck className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#171A1F] sm:text-base">
                    Enterprise Security
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#6B7280] sm:text-sm sm:leading-6">
                    Secure cloud architecture with enterprise-grade
                    healthcare data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* =======================================================
          LIVE IMPACT
      ======================================================= */}

<section
  className="
    relative
    overflow-hidden
    bg-[#000000]
    py-9
    sm:py-11
    md:py-12
    lg:py-14
  "
>
  {/* =================================================
      SUBTLE GRID
  ================================================= */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(#3E7BD6 1px,transparent 1px),linear-gradient(90deg,#3E7BD6 1px,transparent 1px)",
      backgroundSize: "45px 45px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
    {/* =================================================
        HEADING
    ================================================= */}

    <div
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-offset="50"
      className="mx-auto max-w-3xl text-center"
    >
      {/* Badge */}

      <span
        data-aos="zoom-in"
        data-aos-duration="700"
        className="
          inline-flex
          rounded-full
          border
          border-[#2A2A30]
          bg-[#121212]
          px-3
          py-1.5
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.24em]
          text-[#29B6F0]
          sm:px-3.5
          sm:py-1.5
          sm:text-[10px]
          md:text-[11px]
        "
      >
        LIVE IMPACT
      </span>

      {/* Heading */}

      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="850"
        className="
          mt-4
          text-[1.8rem]
          font-black
          leading-[1.08]
          tracking-[-0.035em]
          text-white
          sm:mt-4.5
          sm:text-[2.2rem]
          md:text-[2.7rem]
          lg:text-[3.1rem]
          xl:text-[3.4rem]
        "
      >
        Healthcare AI{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: gradient,
          }}
        >
          Running In Production
        </span>
      </h2>

      {/* Description */}

      <p
        data-aos="fade-up"
        data-aos-delay="180"
        data-aos-duration="850"
        className="
          mx-auto
          mt-3
          max-w-2xl
          text-[13px]
          leading-6
          text-[#D4D4D8]
          sm:mt-4
          sm:text-sm
          sm:leading-6
          md:text-[15px]
          lg:text-base
          lg:leading-6.5
        "
      >
        Serving hospitals, empowering healthcare professionals, and
        processing healthcare data securely with AI-powered automation.
      </p>
    </div>

    {/* =================================================
        BENTO CARDS
    ================================================= */}

    <div
      className="
        mt-8
        grid
        gap-3.5
        sm:mt-9
        sm:gap-4
        md:mt-10
        md:grid-cols-3
        md:gap-4.5
        lg:gap-5
      "
    >
      {/* =================================================
          CARD 1
      ================================================= */}

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        className="
          group
          relative
          overflow-hidden
          rounded-[18px]
          border
          border-[#2A2A30]
          bg-[#121212]
          p-4
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#3E7BD6]
          hover:shadow-[0_14px_40px_rgba(41,182,240,.08)]
          sm:rounded-[20px]
          sm:p-5
          lg:p-5.5
        "
      >
        {/* Accent */}

        <div
          className="
            absolute
            -right-12
            -top-12
            h-28
            w-28
            rounded-full
            opacity-0
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-20
          "
          style={{
            background: gradient,
          }}
        />

        {/* Icon */}

        <div
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-lg
            shadow-[0_8px_20px_rgba(41,182,240,.12)]
            sm:h-12
            sm:w-12
          "
          style={{
            background: gradient,
          }}
        >
          🏥
        </div>

        <h3
          className="
            mt-4
            text-lg
            font-bold
            leading-tight
            text-white
            sm:mt-5
            sm:text-xl
            lg:text-2xl
          "
        >
          Multiple Hospitals
        </h3>

        <p
          className="
            mt-2.5
            text-xs
            leading-5
            text-[#D4D4D8]
            sm:text-sm
            sm:leading-6
          "
        >
          Trusted by hospitals and healthcare providers with
          enterprise-grade digital healthcare infrastructure.
        </p>

        <div className="mt-5 border-t border-[#2A2A30] pt-4 sm:mt-5 sm:pt-4.5">
          <h4 className="text-2xl font-black text-[#29B6F0] sm:text-3xl">
            10+
          </h4>

          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
            Healthcare Partners
          </p>
        </div>
      </div>

      {/* =================================================
          CARD 2
      ================================================= */}

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="180"
        className="
          group
          relative
          overflow-hidden
          rounded-[18px]
          border
          border-[#2A2A30]
          bg-[#121212]
          p-4
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#7A4FD1]
          hover:shadow-[0_14px_40px_rgba(122,79,209,.08)]
          sm:rounded-[20px]
          sm:p-5
          lg:p-5.5
        "
      >
        {/* Accent */}

        <div
          className="
            absolute
            -right-12
            -top-12
            h-28
            w-28
            rounded-full
            opacity-0
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-20
          "
          style={{
            background: gradient,
          }}
        />

        {/* Icon */}

        <div
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-lg
            shadow-[0_8px_20px_rgba(122,79,209,.12)]
            sm:h-12
            sm:w-12
          "
          style={{
            background: gradient,
          }}
        >
          👨‍⚕️
        </div>

        <h3
          className="
            mt-4
            text-lg
            font-bold
            leading-tight
            text-white
            sm:mt-5
            sm:text-xl
            lg:text-2xl
          "
        >
          Patients Supported
        </h3>

        <p
          className="
            mt-2.5
            text-xs
            leading-5
            text-[#D4D4D8]
            sm:text-sm
            sm:leading-6
          "
        >
          AI-powered patient engagement helping thousands receive
          faster and more personalized care.
        </p>

        <div className="mt-5 border-t border-[#2A2A30] pt-4 sm:mt-5 sm:pt-4.5">
          <h4 className="text-2xl font-black text-[#7A4FD1] sm:text-3xl">
            50K+
          </h4>

          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
            Patients
          </p>
        </div>
      </div>

      {/* =================================================
          CARD 3
      ================================================= */}

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="260"
        className="
          group
          relative
          overflow-hidden
          rounded-[18px]
          border
          border-[#2A2A30]
          bg-[#121212]
          p-4
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#B93FC9]
          hover:shadow-[0_14px_40px_rgba(185,63,201,.08)]
          sm:rounded-[20px]
          sm:p-5
          lg:p-5.5
        "
      >
        {/* Accent */}

        <div
          className="
            absolute
            -right-12
            -top-12
            h-28
            w-28
            rounded-full
            opacity-0
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-20
          "
          style={{
            background: gradient,
          }}
        />

        {/* Icon */}

        <div
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-lg
            shadow-[0_8px_20px_rgba(185,63,201,.12)]
            sm:h-12
            sm:w-12
          "
          style={{
            background: gradient,
          }}
        >
          📊
        </div>

        <h3
          className="
            mt-4
            text-lg
            font-bold
            leading-tight
            text-white
            sm:mt-5
            sm:text-xl
            lg:text-2xl
          "
        >
          Healthcare Analytics
        </h3>

        <p
          className="
            mt-2.5
            text-xs
            leading-5
            text-[#D4D4D8]
            sm:text-sm
            sm:leading-6
          "
        >
          Processing healthcare insights securely with AI-driven
          predictive analytics and automation.
        </p>

        <div className="mt-5 border-t border-[#2A2A30] pt-4 sm:mt-5 sm:pt-4.5">
          <h4 className="text-2xl font-black text-[#B93FC9] sm:text-3xl">
            AI
          </h4>

          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
            Powered Intelligence
          </p>
        </div>
      </div>
    </div>

    {/* =================================================
        BOTTOM STATS
    ================================================= */}

    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="300"
      className="
        mt-7
        grid
        grid-cols-2
        gap-y-5
        rounded-[20px]
        border
        border-[#2A2A30]
        bg-[#121212]
        px-4
        py-5
        sm:mt-8
        sm:gap-y-6
        sm:px-6
        sm:py-6
        lg:mt-9
        lg:grid-cols-4
        lg:gap-4
      "
    >
      {/* Stat 1 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-center"
      >
        <h3 className="text-2xl font-black text-[#29B6F0] sm:text-3xl">
          10+
        </h3>

        <p className="mt-1 text-xs text-[#A0A0A8] sm:text-sm">
          Hospitals
        </p>
      </div>

      {/* Stat 2 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="470"
        className="text-center"
      >
        <h3 className="text-2xl font-black text-[#3E7BD6] sm:text-3xl">
          50K+
        </h3>

        <p className="mt-1 text-xs text-[#A0A0A8] sm:text-sm">
          Patients
        </p>
      </div>

      {/* Stat 3 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="540"
        className="text-center"
      >
        <h3 className="text-2xl font-black text-[#7A4FD1] sm:text-3xl">
          24/7
        </h3>

        <p className="mt-1 text-xs text-[#A0A0A8] sm:text-sm">
          Monitoring
        </p>
      </div>

      {/* Stat 4 */}

      <div
        data-aos="zoom-in"
        data-aos-delay="610"
        className="text-center"
      >
        <h3 className="text-2xl font-black text-[#B93FC9] sm:text-3xl">
          AI
        </h3>

        <p className="mt-1 text-xs text-[#A0A0A8] sm:text-sm">
          Automation
        </p>
      </div>
    </div>
  </div>
</section>



      {/* =======================================================
          PREMIUM CTA
      ======================================================= */}
<section
  className="
    relative
    overflow-hidden
    bg-white
    py-7
    sm:py-9
    md:py-10
    lg:py-8
  "
>
  {/* =================================================
      SUBTLE BACKGROUND GRID
  ================================================= */}

  

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
    <div
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-offset="50"
      className="
        overflow-hidden
       
       
        bg-white
      
        sm:rounded-[25px]
        lg:rounded-[28px]
      "
    >
      <div
        className="
          grid
          items-center
          gap-5
          sm:gap-6
          md:gap-7
          lg:grid-cols-[1.05fr_.95fr]
          lg:gap-8
          xl:gap-10
        "
      >
        {/* =================================================
            LEFT
        ================================================= */}

        <div
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="100"
          className="
            p-5
            sm:p-7
            md:p-8
            lg:p-9
            xl:p-10
          "
        >
          {/* Badge */}

          <span
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="150"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#DDE2E9]
              bg-[#F6F8FB]
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#3E7BD6]
              shadow-sm
              sm:px-3.5
              sm:py-1.5
              sm:text-[10px]
              md:text-[11px]
            "
          >
            BEAVERHEALTHAI
          </span>

          {/* Heading */}

          <h2
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="220"
            className="
              mt-3.5
              text-[1.9rem]
              font-black
              leading-[1.06]
              tracking-[-0.035em]
              text-[#15181D]
              sm:mt-4
              sm:text-[2.25rem]
              md:text-[2.6rem]
              lg:text-[3rem]
              xl:text-[3.25rem]
            "
          >
            Smart Healthcare{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: gradient,
              }}
            >
              Platform
            </span>
          </h2>

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="300"
            className="
              mt-3.5
              max-w-xl
              text-[13px]
              leading-6
              text-[#5F6670]
              sm:mt-4
              sm:text-sm
              sm:leading-6
              md:text-[15px]
              lg:text-base
              lg:leading-6.5
            "
          >
            BeaverHealthAI is an intelligent healthcare platform engineered by
            BeaverTek to automate clinical workflows, enhance patient care,
            deliver predictive analytics, and provide secure AI-powered digital
            healthcare solutions for hospitals and healthcare organizations.
          </p>

          {/* Button */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="380"
            className="mt-5 sm:mt-5.5"
          >
            <Link
              href="https://beaverhealth.ai"
              target="_blank"
              className="
                group
                inline-flex
                items-center
                rounded-full
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(62,123,214,.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(62,123,214,.25)]
                sm:px-5.5
                sm:py-3
                sm:text-sm
              "
              style={{
                background: gradient,
              }}
            >
              Visit BeaverHealthAI

              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================= */}

        <div
          data-aos="fade-left"
          data-aos-duration="950"
          data-aos-delay="180"
          className="
            relative
            flex
            items-center
            justify-center
            px-5
            pb-6
            sm:px-7
            sm:pb-7
            md:px-8
            lg:px-7
            lg:py-8
            xl:px-8
          "
        >
          <div className="relative">
            {/* Image */}

            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="
                relative
                overflow-hidden
                border
                border-[#E1E5EB]
                bg-[#F5F7FA]
                shadow-[0_18px_45px_rgba(15,23,42,.12)]
              "
              style={{
                borderRadius:
                  "38% 62% 58% 42% / 42% 35% 65% 58%",
              }}
            >
              <Image
                src="/home/abouthero1.png"
                alt="BeaverHealthAI"
                width={520}
                height={430}
                priority
                className="
                  block
                  h-auto
                  w-full
                  max-w-[270px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  sm:max-w-[320px]
                  md:max-w-[350px]
                  lg:max-w-[390px]
                  xl:max-w-[410px]
                "
              />
            </div>

            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="450"
              className="
                absolute
                -left-2
                top-4
                rounded-lg
                border
                border-[#E0E4EA]
                bg-white
                px-3
                py-2
                shadow-[0_12px_30px_rgba(15,23,42,.12)]
                sm:-left-5
                sm:top-5
                sm:rounded-xl
                sm:px-3.5
                sm:py-2.5
                md:-left-6
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#3E7BD6]
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                AI Powered
              </p>

              <h4 className="mt-0.5 text-sm font-bold text-[#171A1F] sm:text-base">
                Healthcare
              </h4>
            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================= */}

            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="520"
              className="
                absolute
                -right-2
                bottom-4
                rounded-full
                px-3.5
                py-2
                text-[10px]
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(15,23,42,.18)]
                sm:-right-5
                sm:bottom-5
                sm:px-4
                sm:py-2.5
                sm:text-xs
                md:-right-6
              "
              style={{
                background: gradient,
              }}
            >
              Secure Platform
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* =======================================================
          RELATIONSHIP SECTION
      ======================================================= */}

<section
  className="
    relative
    overflow-hidden
    bg-[#000000]
    py-8
    sm:py-10
    md:py-11
    lg:py-12
  "
>
  {/* =================================================
      SUBTLE DOT GRID
  ================================================= */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "radial-gradient(#3E7BD6 1px,transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />

  <div
    className="
      relative
      mx-auto
      max-w-6xl
      px-4
      sm:px-5
      md:px-6
      lg:px-8
    "
  >
    {/* =================================================
        MAIN CARD
    ================================================= */}

    <div
      data-aos="zoom-in"
      data-aos-duration="900"
      data-aos-offset="50"
      className="
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#2A2A30]
        bg-[#121212]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,.28)]
        sm:rounded-[24px]
        sm:p-7
        md:p-8
        lg:rounded-[26px]
        lg:p-9
        xl:p-10
      "
    >
      {/* =================================================
          SOFT GRADIENT GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-72
          -translate-x-1/2
          rounded-full
          opacity-[0.08]
          blur-3xl
        "
        style={{
          background: gradient,
        }}
      />

      <div className="relative z-10">
        {/* =================================================
            TOP GRADIENT
        ================================================= */}

        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="
            mx-auto
            h-0.5
            w-16
            rounded-full
            sm:h-1
            sm:w-20
          "
          style={{
            background: gradient,
          }}
        />

        {/* =================================================
            LOGO CIRCLE
        ================================================= */}

        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
          className="mt-5 flex justify-center sm:mt-6"
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              shadow-[0_10px_30px_rgba(62,123,214,.18)]
              sm:h-16
              sm:w-16
            "
            style={{
              background: gradient,
            }}
          >
            <span className="text-2xl sm:text-3xl">
              🚀
            </span>
          </div>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <h2
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="150"
          className="
            mt-5
            text-center
            text-[1.8rem]
            font-black
            leading-tight
            tracking-[-0.03em]
            text-white
            sm:mt-6
            sm:text-3xl
            md:text-[2.2rem]
            lg:text-[2.5rem]
          "
        >
          Built by{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: gradient,
            }}
          >
            BeaverTek
          </span>
        </h2>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="230"
          className="
            mx-auto
            mt-3.5
            max-w-3xl
            text-center
            text-[13px]
            leading-6
            text-[#D4D4D8]
            sm:mt-4
            sm:text-sm
            sm:leading-6.5
            md:text-[15px]
            lg:text-base
            lg:leading-7
          "
        >
          <span className="font-semibold text-white">
            BeaverHealthAI
          </span>{" "}
          is a flagship product of
          <span className="font-semibold text-white">
            {" "}BeaverTek
          </span>,
          designed, engineered and continuously operated by our in-house
          product team. Every feature reflects our expertise in AI,
          cloud-native architecture, healthcare workflows and enterprise
          software engineering.
        </p>

        {/* =================================================
            FEATURE CHIPS
        ================================================= */}

        <div
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="320"
          className="
            mt-6
            flex
            flex-wrap
            justify-center
            gap-1.5
            sm:mt-7
            sm:gap-2
          "
        >
          {[
            "AI Powered",
            "Healthcare",
            "Cloud Native",
            "Enterprise Security",
            "Scalable Platform",
            "Built by BeaverTek",
          ].map((item, index) => (
            <div
              key={item}
              data-aos="zoom-in"
              data-aos-duration="650"
              data-aos-delay={350 + index * 60}
              className="
                rounded-full
                border
                border-[#2A2A30]
                bg-[#1A1A1E]
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-[#D4D4D8]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#3E7BD6]
                hover:bg-[#202026]
                hover:text-white
                sm:px-3.5
                sm:py-2
                sm:text-xs
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          data-aos="fade-in"
          data-aos-duration="700"
          className="
            my-6
            h-px
            w-full
            bg-[#2A2A30]
            sm:my-7
          "
        />

        {/* =================================================
            STATS
        ================================================= */}

        <div
          data-aos="fade-up"
          data-aos-duration="850"
          data-aos-delay="420"
          className="
            grid
            gap-5
            text-center
            md:grid-cols-3
            md:gap-4
          "
        >
          {/* Stat 1 */}

          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="470"
            className="
              rounded-xl
              border
              border-transparent
              px-3
              py-2
              transition-all
              duration-300
              hover:border-[#2A2A30]
              hover:bg-[#1A1A1E]
            "
          >
            <h3
              className="
                bg-clip-text
                text-2xl
                font-black
                text-transparent
                sm:text-3xl
              "
              style={{
                backgroundImage: gradient,
              }}
            >
              AI
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
              Driven Innovation
            </p>
          </div>

          {/* Stat 2 */}

          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="540"
            className="
              rounded-xl
              border
              border-transparent
              px-3
              py-2
              transition-all
              duration-300
              hover:border-[#2A2A30]
              hover:bg-[#1A1A1E]
            "
          >
            <h3
              className="
                bg-clip-text
                text-2xl
                font-black
                text-transparent
                sm:text-3xl
              "
              style={{
                backgroundImage: gradient,
              }}
            >
              24/7
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
              Reliable Platform
            </p>
          </div>

          {/* Stat 3 */}

          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="610"
            className="
              rounded-xl
              border
              border-transparent
              px-3
              py-2
              transition-all
              duration-300
              hover:border-[#2A2A30]
              hover:bg-[#1A1A1E]
            "
          >
            <h3
              className="
                bg-clip-text
                text-2xl
                font-black
                text-transparent
                sm:text-3xl
              "
              style={{
                backgroundImage: gradient,
              }}
            >
              100%
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#A0A0A8] sm:text-xs">
              BeaverTek Built
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}