
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Cloud,
  FileSpreadsheet,
  RefreshCw,
  Monitor,
  Link2,
  Sparkles,
  Search,
  Map,
  Rocket,
  Headphones,
} from "lucide-react";

function RealModernization() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="relative  overflow-hidden bg-white">
        {/* =========================================================
            BACKGROUND
        ========================================================== */}

        <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#29B6F0]/8 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/8 blur-[150px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A4FD1]/5 blur-[130px]" />

        {/* =========================================================
            HEADING
        ========================================================== */}

        <div
          className="relative z-10 px-4 text-center sm:px-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#3E7BD6]/25
              bg-[#F7F9FC]
              px-4
              py-2
              mt-8
              text-[9px]
              font-bold
              tracking-[0.25em]
              text-[#3E7BD6]
              shadow-[0_8px_25px_rgba(62,123,214,0.08)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#29B6F0]
              hover:bg-[#29B6F0]/5
              hover:text-[#29B6F0]
              hover:shadow-[0_10px_30px_rgba(41,182,240,0.12)]
              sm:px-5
              sm:text-xs
            "
          >
            <Sparkles className="h-3 w-3" />
            WHAT THIS LOOKS LIKE IN PRACTICE
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-[-0.05em]
              text-[#111827]
              sm:mt-6
              sm:text-4xl
              lg:text-5xl
            "
          >
            Real{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#29B6F0]
                via-[#7A4FD1]
                to-[#B93FC9]
                bg-clip-text
                text-transparent
              "
            >
              Modernization
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-[3px]
              w-20
              rounded-full
              bg-gradient-to-r
              from-[#29B6F0]
              via-[#3E7BD6]
              to-[#B93FC9]
              transition-all
              duration-500
              hover:w-32
            "
          />
        </div>

        {/* =========================================================
            MODERNIZATION TIMELINE
        ========================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            mt-16
            max-w-6xl
            px-4
            sm:px-6
            lg:mt-20
          "
        >
          {/* =======================================================
              MOBILE / TABLET PIPE LINE
          ======================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-[26px]
              top-0
              w-[2px]
              bg-gradient-to-b
              from-transparent
              via-[#29B6F0]
              via-[#3E7BD6]
              via-[#7A4FD1]
              via-[#B93FC9]
              to-transparent
              opacity-80
              sm:left-[30px]
              lg:hidden
            "
          />

          {/* =======================================================
              DESKTOP CENTER PIPE LINE
          ======================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#29B6F0]
              via-[#3E7BD6]
              via-[#7A4FD1]
              via-[#B93FC9]
              to-transparent
              opacity-80
              lg:block
            "
          />

          {/* =======================================================
              TIMELINE
          ======================================================== */}

          <div className="relative space-y-8 sm:space-y-10 lg:space-y-6">
            {[
              {
                icon: Cloud,
                text: "Migrating from on-premise servers to a secure cloud platform.",
                accent: "#29B6F0",
              },
              {
                icon: FileSpreadsheet,
                text: "Replacing spreadsheets with modern business applications.",
                accent: "#3E7BD6",
              },
              {
                icon: RefreshCw,
                text: "Upgrading legacy ERP and CRM platforms.",
                accent: "#7A4FD1",
              },
              {
                icon: Monitor,
                text: "Rebuilding outdated websites and internal tools.",
                accent: "#B93FC9",
              },
              {
                icon: Link2,
                text: "Connecting disconnected systems with seamless integrations.",
                accent: "#29B6F0",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.text}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 120}
                  data-aos-duration="900"
                  className="group relative"
                >
                  {/* =================================================
                      MOBILE / TABLET
                  ================================================== */}

                  <div className="grid grid-cols-[52px_1fr] gap-3 sm:grid-cols-[60px_1fr] sm:gap-4 lg:hidden">
                    {/* ICON */}

                    <div className="relative z-20 flex items-start justify-center">
                      <div
                        className="
                          relative
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          transition-all
                          duration-500
                          group-hover:scale-110
                          sm:h-12
                          sm:w-12
                        "
                        style={{
                          borderColor: `${item.accent}70`,
                          boxShadow: `0 8px 25px ${item.accent}18`,
                        }}
                      >
                        {/* Inner Glow */}

                        <div
                          className="
                            absolute
                            inset-1
                            rounded-full
                            opacity-0
                            blur-md
                            transition-all
                            duration-500
                            group-hover:opacity-25
                          "
                          style={{ backgroundColor: item.accent }}
                        />

                        <Icon
                          className="
                            relative
                            z-10
                            h-5
                            w-5
                            transition-all
                            duration-500
                            group-hover:scale-125
                          "
                          style={{ color: item.accent }}
                        />

                        {/* Orbit Dot */}

                        <span
                          className="
                            absolute
                            -right-1
                            -top-1
                            h-2.5
                            w-2.5
                            rounded-full
                            transition-all
                            duration-500
                            group-hover:scale-150
                          "
                          style={{
                            backgroundColor: item.accent,
                            boxShadow: `0 0 12px ${item.accent}`,
                          }}
                        />
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div
                      className="
                        relative
                        rounded-2xl
                        border
                        border-[#E5E7EB]
                        bg-white
                        p-5
                        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:border-[#3E7BD6]/30
                        group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                        sm:p-6
                      "
                    >
                      {/* Number */}

                      <div className="flex items-center gap-3">
                        <span
                          className="
                            text-[9px]
                            font-black
                            tracking-[0.25em]
                            transition-all
                            duration-500
                            group-hover:tracking-[0.35em]
                          "
                          style={{ color: item.accent }}
                        >
                          0{index + 1}
                        </span>

                        <div className="h-px w-8 bg-[#E5E7EB] transition-all duration-500 group-hover:w-14 group-hover:bg-[#3E7BD6]/40" />
                      </div>

                      {/* Label */}

                      <span
                        className="
                          mt-3
                          block
                          text-[8px]
                          font-bold
                          tracking-[0.22em]
                          text-[#9CA3AF]
                          transition-all
                          duration-500
                          group-hover:text-[#3E7BD6]
                          sm:text-[9px]
                        "
                      >
                        MODERNIZATION 0{index + 1}
                      </span>

                      {/* Main Text */}

                      <p
                        className="
                          mt-2
                          text-[14px]
                          font-medium
                          leading-6
                          text-[#6B7280]
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:text-[#111827]
                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {item.text}
                      </p>

                      {/* Bottom Hover Line */}

                      <div
                        className="
                          mt-4
                          h-[2px]
                          w-8
                          rounded-full
                          transition-all
                          duration-700
                          group-hover:w-20
                        "
                        style={{
                          background:
                            "linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)",
                        }}
                      />

                      {/* Corner Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-8
                          -top-8
                          h-24
                          w-24
                          rounded-full
                          opacity-0
                          blur-[40px]
                          transition-all
                          duration-700
                          group-hover:opacity-20
                        "
                        style={{ backgroundColor: item.accent }}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DESKTOP — 3 COLUMN TIMELINE
                      LEFT | CENTER | RIGHT
                  ================================================== */}

                  <div className="hidden min-h-[145px] grid-cols-[1fr_120px_1fr] lg:grid">
                    {/* =================================================
                        LEFT COLUMN
                    ================================================== */}

                    <div className="flex items-center justify-end">
                      {isLeft && (
                        <div
                          className="
                            relative
                            w-full
                            max-w-md
                            rounded-2xl
                            border
                            border-[#E5E7EB]
                            bg-white
                            p-6
                            text-right
                            shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:border-[#29B6F0]/40
                            group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]
                          "
                        >
                          {/* Number */}

                          <div className="flex items-center justify-end gap-3">
                            <div className="h-px w-8 bg-[#E5E7EB] transition-all duration-500 group-hover:w-16 group-hover:bg-[#29B6F0]/40" />

                            <span
                              className="
                                text-[10px]
                                font-black
                                tracking-[0.25em]
                                transition-all
                                duration-500
                                group-hover:tracking-[0.35em]
                              "
                              style={{ color: item.accent }}
                            >
                              0{index + 1}
                            </span>
                          </div>

                          <span
                            className="
                              mt-3
                              block
                              text-[9px]
                              font-bold
                              tracking-[0.25em]
                              text-[#9CA3AF]
                              transition-all
                              duration-500
                              group-hover:text-[#29B6F0]
                            "
                          >
                            MODERNIZATION 0{index + 1}
                          </span>

                          <p
                            className="
                              mt-2
                              text-base
                              font-medium
                              leading-7
                              text-[#6B7280]
                              transition-all
                              duration-500
                              group-hover:translate-x-[-4px]
                              group-hover:text-[#111827]
                            "
                          >
                            {item.text}
                          </p>

                          <div
                            className="
                              ml-auto
                              mt-4
                              h-[2px]
                              w-10
                              rounded-full
                              transition-all
                              duration-700
                              group-hover:w-24
                            "
                            style={{
                              background:
                                "linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)",
                            }}
                          />

                          {/* Card Glow */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              -right-10
                              top-1/2
                              h-24
                              w-24
                              -translate-y-1/2
                              rounded-full
                              opacity-0
                              blur-[45px]
                              transition-all
                              duration-700
                              group-hover:opacity-20
                            "
                            style={{ backgroundColor: item.accent }}
                          />
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        CENTER ICON
                    ================================================== */}

                    <div className="relative flex items-center justify-center">
                      <div
                        className="
                          relative
                          z-20
                          flex
                          h-[74px]
                          w-[74px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          transition-all
                          duration-700
                          group-hover:scale-110
                        "
                        style={{
                          borderColor: `${item.accent}80`,
                          boxShadow: `0 10px 35px ${item.accent}20`,
                        }}
                      >
                        {/* Outer Ring */}

                        <div
                          className="
                            absolute
                            -inset-2
                            rounded-full
                            border
                            opacity-0
                            transition-all
                            duration-700
                            group-hover:inset-[-7px]
                            group-hover:opacity-100
                          "
                          style={{
                            borderColor: `${item.accent}35`,
                          }}
                        />

                        {/* Inner Glow */}

                        <div
                          className="
                            absolute
                            inset-2
                            rounded-full
                            opacity-0
                            blur-md
                            transition-all
                            duration-700
                            group-hover:opacity-20
                          "
                          style={{ backgroundColor: item.accent }}
                        />

                        {/* Icon */}

                        <Icon
                          className="
                            relative
                            z-10
                            h-7
                            w-7
                            transition-all
                            duration-700
                            group-hover:scale-125
                          "
                          style={{ color: item.accent }}
                        />

                        {/* Top Dot */}

                        <span
                          className="
                            absolute
                            -right-1
                            -top-1
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-500
                            group-hover:scale-150
                          "
                          style={{
                            backgroundColor: item.accent,
                            boxShadow: `0 0 15px ${item.accent}`,
                          }}
                        />

                        {/* Number */}

                        <span
                          className="
                            absolute
                            -bottom-7
                            text-[8px]
                            font-black
                            tracking-[0.2em]
                            text-[#9CA3AF]
                            transition-all
                            duration-500
                            group-hover:text-[#111827]
                          "
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        RIGHT COLUMN
                    ================================================== */}

                    <div className="flex items-center justify-start">
                      {!isLeft && (
                        <div
                          className="
                            relative
                            w-full
                            max-w-md
                            rounded-2xl
                            border
                            border-[#E5E7EB]
                            bg-white
                            p-6
                            shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:border-[#7A4FD1]/40
                            group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]
                          "
                        >
                          {/* Number */}

                          <div className="flex items-center gap-3">
                            <span
                              className="
                                text-[10px]
                                font-black
                                tracking-[0.25em]
                                transition-all
                                duration-500
                                group-hover:tracking-[0.35em]
                              "
                              style={{ color: item.accent }}
                            >
                              0{index + 1}
                            </span>

                            <div className="h-px w-8 bg-[#E5E7EB] transition-all duration-500 group-hover:w-16 group-hover:bg-[#7A4FD1]/40" />
                          </div>

                          <span
                            className="
                              mt-3
                              block
                              text-[9px]
                              font-bold
                              tracking-[0.25em]
                              text-[#9CA3AF]
                              transition-all
                              duration-500
                              group-hover:text-[#7A4FD1]
                            "
                          >
                            MODERNIZATION 0{index + 1}
                          </span>

                          <p
                            className="
                              mt-2
                              text-base
                              font-medium
                              leading-7
                              text-[#6B7280]
                              transition-all
                              duration-500
                              group-hover:translate-x-1
                              group-hover:text-[#111827]
                            "
                          >
                            {item.text}
                          </p>

                          <div
                            className="
                              mt-4
                              h-[2px]
                              w-10
                              rounded-full
                              transition-all
                              duration-700
                              group-hover:w-24
                            "
                            style={{
                              background:
                                "linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)",
                            }}
                          />

                          {/* Card Glow */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              -left-10
                              top-1/2
                              h-24
                              w-24
                              -translate-y-1/2
                              rounded-full
                              opacity-0
                              blur-[45px]
                              transition-all
                              duration-700
                              group-hover:opacity-20
                            "
                            style={{ backgroundColor: item.accent }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            PROCESS
        ========================================================== */}

        <div className="relative z-10 mt-28">
          {/* Process Heading */}

          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-center"
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#7A4FD1]
              "
            >
              SIMPLE PROCESS
            </span>

            <div
              className="
                mx-auto
                mt-4
                h-[2px]
                w-12
                rounded-full
                bg-gradient-to-r
                from-[#29B6F0]
                to-[#B93FC9]
              "
            />
          </div>

          {/* =======================================================
              PROCESS
          ======================================================== */}

          <div className="relative mx-auto mt-16 max-w-6xl">
            {/* Connecting Line */}

            <div
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[8%]
                top-8
                hidden
                h-px
                bg-gradient-to-r
                from-[#29B6F0]/20
                via-[#7A4FD1]/50
                to-[#B93FC9]/20
                lg:block
              "
            />

            <div
              className="
                grid
                gap-12
                md:grid-cols-2
                lg:grid-cols-4
                lg:gap-8
              "
            >
              {[
                {
                  title: "Assess",
                  desc: "Review your current technology landscape.",
                  icon: Search,
                },
                {
                  title: "Plan",
                  desc: "Build a practical modernization roadmap.",
                  icon: Map,
                },
                {
                  title: "Execute",
                  desc: "Implement with minimal business disruption.",
                  icon: Rocket,
                },
                {
                  title: "Support",
                  desc: "Continuous optimization and long-term guidance.",
                  icon: Headphones,
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    data-aos-duration="900"
                    className="group relative text-center"
                  >
                    {/* =================================================
                        ICON NODE
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#E5E7EB]
                        bg-black
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-[#29B6F0]
                        group-hover:bg-[#29B6F0]/10
                        group-hover:shadow-[0_0_40px_rgba(41,182,240,0.2)]
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-1.5
                          rounded-full
                          border
                          border-[#3E7BD6]/20
                          transition-all
                          duration-700
                          group-hover:rotate-180
                          group-hover:border-[#B93FC9]/50
                        "
                      />

                      <Icon
                        className="
                          relative
                          z-10
                          h-6
                          w-6
                          
                          text-[#29B6F0]
                          transition-all
                          duration-500
                          group-hover:scale-125
                          group-hover:text-[#B93FC9]
                        "
                      />
                    </div>

                    {/* =================================================
                        STEP NUMBER
                    ================================================== */}

                    <span
                      className="
                        mt-6
                        block
                        text-[9px]
                        font-bold
                        tracking-[0.25em]
                        text-[#55555D]
                        transition-colors
                        duration-500
                        group-hover:text-[#29B6F0]
                      "
                    >
                      STEP 0{index + 1}
                    </span>

                    {/* =================================================
                        TITLE
                    ================================================== */}

                    <h3
                      className="
                        mt-3
                        text-xl
                        font-bold
                        tracking-tight
                        text-[#111827]
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:bg-gradient-to-r
                        group-hover:from-[#29B6F0]
                        group-hover:to-[#B93FC9]
                        group-hover:bg-clip-text
                        group-hover:text-transparent
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Accent */}

                    <div
                      className="
                        mx-auto
                        mt-4
                        h-[2px]
                        w-8
                        rounded-full
                        bg-gradient-to-r
                        from-[#29B6F0]
                        to-[#B93FC9]
                        transition-all
                        duration-500
                        group-hover:w-16
                      "
                    />

                    {/* Description */}

                    <p
                      className="
                        mx-auto
                        mt-5
                        max-w-[230px]
                        text-sm
                        leading-7
                        text-[#777780]
                        transition-all
                        duration-500
                        group-hover:translate-y-[-2px]
                        group-hover:text-[#A0A0A8]
                      "
                    >
                      {step.desc}
                    </p>

                    {/* Bottom Dot */}

                    <div
                      className="
                        mx-auto
                        mt-6
                        h-1
                        w-1
                        rounded-full
                        bg-[#29B6F0]
                        opacity-50
                        transition-all
                        duration-500
                        group-hover:w-8
                        group-hover:bg-[#B93FC9]
                        group-hover:opacity-100
                        group-hover:shadow-[0_0_15px_#B93FC9]
                      "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM LINE
        ========================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="
            mx-auto
            mt-24
            h-px
            w-full
            max-w-5xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/30
            to-transparent
          "
        />
      </div>
    </div>
  );
}

export default RealModernization;

