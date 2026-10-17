
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
    <section className="relative isolate overflow-hidden bg-[#000000] py-14 sm:py-20 lg:py-24 xl:py-28  ">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-[32rem] sm:w-[32rem] sm:blur-[150px]" />

        <div className="absolute -right-40 top-10 h-72 w-72 rounded-full bg-[#3E7BD6]/10 blur-[120px] sm:h-[30rem] sm:w-[30rem] sm:blur-[150px]" />

        <div className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7A4FD1]/8 blur-[120px] sm:h-[24rem] sm:w-[24rem]" />

        <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#B93FC9]/8 blur-[120px] sm:h-[26rem] sm:w-[26rem]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,240,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,240,.025)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:55px_55px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:30px_30px] opacity-[0.018]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ================= WHO THIS IS FOR ================= */}

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">

          {/* LEFT: SECTION HEADING */}

          <div
            className="lg:col-span-4"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="lg:sticky lg:top-28">

              {/* Badge */}

              <span className="inline-flex items-center gap-3 border-b border-[#3E7BD6]/40 pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs sm:tracking-[0.25em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />
                WHO THIS IS FOR
              </span>

              {/* Heading */}

              <h2 className="mt-5 max-w-sm text-3xl font-black leading-[1.06] tracking-[-0.045em] sm:mt-6 sm:text-4xl md:text-5xl lg:text-[2.7rem] xl:text-5xl">
                <span className="text-white">Who </span>

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  We Help
                </span>
              </h2>

              {/* Accent */}

              <div className="mt-6 flex items-center gap-2 sm:mt-7">
                <div className="h-[3px] w-12 rounded-full bg-[#29B6F0] sm:w-16" />
                <div className="h-[3px] w-7 rounded-full bg-[#3E7BD6] sm:w-9" />
                <div className="h-[3px] w-4 rounded-full bg-[#B93FC9]" />
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT */}

          <div
            className="relative lg:col-span-8"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="900"
          >
            <div className="relative border-l border-white/10 pl-5 sm:pl-7 lg:pl-9 xl:pl-11">

              {/* Gradient Accent */}

              <div className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-[#29B6F0] via-[#3E7BD6] to-transparent sm:h-24" />

              {/* Main Content */}

              <p className="max-w-4xl text-base font-medium leading-8 tracking-[-0.015em] text-[#D4D4D8] sm:text-lg sm:leading-9 md:text-xl md:leading-10">
                Businesses that handle customer data, payments, or healthcare
                information and any company that knows a single breach or
                extended outage would be a serious problem. If you do not have
                a dedicated security person, you are who we are built for.
              </p>

              {/* Divider */}

              <div className="mt-7 h-px w-full max-w-3xl bg-gradient-to-r from-[#29B6F0]/50 via-[#3E7BD6]/25 to-transparent sm:mt-9" />

              {/* Insight */}

              <div
                className="mt-7 max-w-2xl sm:mt-9"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_12px_#29B6F0]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#29B6F0] sm:text-xs sm:tracking-[0.28em]">
                    Insight
                  </span>

                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <p className="mt-4 text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                  Most companies only think about security after an incident.
                  We help you avoid that stage entirely.
                </p>

                <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#B93FC9]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION DIVIDER ================= */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:my-20 lg:my-16" />

        {/* ================= PROOF ================= */}

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">

          {/* LEFT: SECTION HEADING */}

          <div
            className="lg:col-span-4"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="lg:sticky lg:top-28">

              {/* Badge */}

              <span className="inline-flex items-center gap-3 border-b border-[#3E7BD6]/40 pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs sm:tracking-[0.25em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A4FD1] shadow-[0_0_12px_#7A4FD1]" />
                PROOF
              </span>

              {/* Heading */}

              <h2 className="mt-5 max-w-sm text-3xl font-black leading-[1.06] tracking-[-0.045em] sm:mt-6 sm:text-4xl md:text-5xl lg:text-[2.7rem] xl:text-5xl">
                <span className="text-white">Trusted </span>

                <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>

              {/* Accent */}

              <div className="mt-6 flex items-center gap-2 sm:mt-7">
                <div className="h-[3px] w-12 rounded-full bg-[#29B6F0] sm:w-16" />
                <div className="h-[3px] w-7 rounded-full bg-[#3E7BD6] sm:w-9" />
                <div className="h-[3px] w-4 rounded-full bg-[#B93FC9]" />
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT */}

          <div
            className="relative lg:col-span-8"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="900"
          >
            <div className="relative border-l border-white/10 pl-5 sm:pl-7 lg:pl-9 xl:pl-11">

              {/* Gradient Accent */}

              <div className="absolute -left-px top-0 h-20 w-px bg-gradient-to-b from-[#3E7BD6] via-[#7A4FD1] to-transparent sm:h-24" />

              {/* Main Content */}

              <p className="max-w-4xl text-base font-medium leading-8 tracking-[-0.015em] text-[#D4D4D8] sm:text-lg sm:leading-9 md:text-xl md:leading-10">
                We bring enterprise-grade security practice to mid-size
                operations every day drawing on experience securing systems
                for Fortune 500 financial services, healthcare, and retail
                clients.
              </p>

              {/* Divider */}

              <div className="mt-7 h-px w-full max-w-3xl bg-gradient-to-r from-[#3E7BD6]/50 via-[#7A4FD1]/25 to-transparent sm:mt-9" />

              {/* SUPPORTING POINTS */}

              <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-9 sm:grid-cols-2 sm:gap-8 lg:gap-10">

                {/* Experience */}

                <div
                  className="group min-w-0"
                  data-aos="fade-up"
                  data-aos-delay="180"
                  data-aos-duration="750"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-[10px] font-bold tracking-[0.22em] text-[#29B6F0] sm:tracking-[0.28em]">
                      EXPERIENCE
                    </span>

                    <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 to-transparent transition-all duration-500 group-hover:from-[#29B6F0]" />
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                    Enterprise-grade security applied to real mid-size
                    systems.
                  </p>

                  <div className="mt-5 h-[2px] w-10 rounded-full bg-[#29B6F0] transition-all duration-500 group-hover:w-20" />
                </div>

                {/* Focus */}

                <div
                  className="group min-w-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="750"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-[10px] font-bold tracking-[0.22em] text-[#B93FC9] sm:tracking-[0.28em]">
                      FOCUS
                    </span>

                    <span className="h-px flex-1 bg-gradient-to-r from-[#B93FC9]/50 to-transparent transition-all duration-500 group-hover:from-[#B93FC9]" />
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
                    Practical protection, not over-engineered enterprise
                    theater.
                  </p>

                  <div className="mt-5 h-[2px] w-10 rounded-full bg-[#B93FC9] transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}

