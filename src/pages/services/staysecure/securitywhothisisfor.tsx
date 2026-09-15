
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecurityEditorialSection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-14 sm:py-16 lg:py-20">
      {/* ========================= BACKGROUND ========================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <div className="absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-[#29B6F0]/8 blur-[150px] sm:h-[32rem] sm:w-[32rem]" />

        {/* Blue Glow */}
        <div className="absolute -right-32 top-10 h-[24rem] w-[24rem] rounded-full bg-[#3E7BD6]/8 blur-[150px] sm:h-[30rem] sm:w-[30rem]" />

        {/* Violet Glow */}
        <div className="absolute bottom-20 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[#7A4FD1]/7 blur-[140px]" />

        {/* Magenta Glow */}
        <div className="absolute -bottom-20 right-0 h-[20rem] w-[20rem] rounded-full bg-[#B93FC9]/7 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.025)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]" />

        {/* Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:30px_30px] opacity-[0.018]" />
      </div>

      {/* ========================= CONTAINER ========================= */}

      <div className="relative mx-auto max-w-7xl space-y-20 px-4 sm:space-y-24 sm:px-5 md:px-6 lg:space-y-28 lg:px-8">
        {/* ========================================================= */}
        {/* WHO THIS IS FOR */}
        {/* ========================================================= */}

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ================= LEFT ================= */}

          <div
            className="lg:col-span-3"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="lg:sticky lg:top-28">
              {/* Small Number */}

              <div
                className="mb-5 flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#29B6F0]">
                  01
                </span>

                <span className="h-px w-10 bg-gradient-to-r from-[#29B6F0] to-transparent" />
              </div>

              {/* Badge */}

              <span className="inline-flex items-center border-b border-[#3E7BD6]/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs">
                WHO THIS IS FOR
              </span>

              {/* Heading */}

              <h2 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[2.7rem]">
                <span className="text-white">Who </span>

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  We Help
                </span>
              </h2>

              {/* Editorial Line */}

              <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:w-20" />
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-9">
            {/* Main Editorial Content */}

            <div
              className="relative border-l border-[#2A2A30] pl-5 sm:pl-7 lg:pl-10"
              data-aos="fade-left"
              data-aos-delay="120"
              data-aos-duration="900"
            >
              {/* Gradient Accent */}

              <div className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-[#29B6F0] to-transparent" />

              <p className="max-w-4xl text-lg font-medium leading-8 tracking-[-0.015em] text-[#D4D4D8] sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                Businesses that handle customer data, payments, or healthcare
                information and any company that knows a single breach or
                extended outage would be a serious problem. If you do not have
                a dedicated security person, you are who we are built for.
              </p>

              {/* Editorial Divider */}

              <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-[#29B6F0]/60 via-[#3E7BD6]/30 to-transparent" />

              {/* Insight */}

              <div
                className="mt-8 max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="800"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#29B6F0] sm:text-xs">
                    Insight
                  </span>

                  <span className="h-px flex-1 bg-[#2A2A30]" />
                </div>

                <p className="mt-4 text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                  Most companies only think about security after an incident.
                  We help you avoid that stage entirely.
                </p>

                <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROOF */}
        {/* ========================================================= */}

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ================= LEFT ================= */}

          <div
            className="lg:col-span-3"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="lg:sticky lg:top-28">
              {/* Small Number */}

              <div
                className="mb-5 flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#7A4FD1]">
                  02
                </span>

                <span className="h-px w-10 bg-gradient-to-r from-[#7A4FD1] to-transparent" />
              </div>

              {/* Badge */}

              <span className="inline-flex items-center border-b border-[#3E7BD6]/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs">
                PROOF
              </span>

              {/* Heading */}

              <h2 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[2.7rem]">
                <span className="text-white">Trusted </span>

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>

              {/* Editorial Line */}

              <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9] sm:w-20" />
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-9">
            {/* Main Editorial Content */}

            <div
              className="relative border-l border-[#2A2A30] pl-5 sm:pl-7 lg:pl-10"
              data-aos="fade-left"
              data-aos-delay="120"
              data-aos-duration="900"
            >
              {/* Gradient Accent */}

              <div className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-[#3E7BD6] to-transparent" />

              <p className="max-w-4xl text-lg font-medium leading-8 tracking-[-0.015em] text-[#D4D4D8] sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                We bring enterprise-grade security practice to mid-size
                operations every day drawing on experience securing systems
                for Fortune 500 financial services, healthcare, and retail
                clients.
              </p>

              {/* Divider */}

              <div className="mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-[#3E7BD6]/60 via-[#7A4FD1]/30 to-transparent" />

              {/* ================= SUPPORTING POINTS ================= */}

              <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
                {/* Experience */}

                <div
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay="180"
                  data-aos-duration="750"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.28em] text-[#29B6F0]">
                      EXPERIENCE
                    </span>

                    <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 to-transparent transition-all duration-500 group-hover:from-[#29B6F0]" />
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                    Enterprise-grade security applied to real mid-size
                    systems.
                  </p>

                  <div className="mt-5 h-[2px] w-10 bg-[#29B6F0] transition-all duration-500 group-hover:w-20" />
                </div>

                {/* Focus */}

                <div
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="750"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.28em] text-[#B93FC9]">
                      FOCUS
                    </span>

                    <span className="h-px flex-1 bg-gradient-to-r from-[#B93FC9]/50 to-transparent transition-all duration-500 group-hover:from-[#B93FC9]" />
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                    Practical protection, not over-engineered enterprise
                    theater.
                  </p>

                  <div className="mt-5 h-[2px] w-10 bg-[#B93FC9] transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= BOTTOM LINE ========================= */}

      <div
        className="relative mx-auto mt-16 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#3E7BD6]/40 to-transparent sm:mt-20"
        data-aos="fade-in"
        data-aos-duration="1000"
      />
    </section>
  );
}

