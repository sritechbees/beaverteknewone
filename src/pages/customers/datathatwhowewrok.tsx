import React from "react";
import { Landmark, HeartPulse, ShoppingBag, Building2 } from "lucide-react";

function Datathatwhowewrok() {
  return (
    <div>
      {/* ==========================================================
                    WHO WE WORK WITH
   ========================================================== */}

      <section className="relative overflow-hidden bg-[#000000] py-16 sm:py-20 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#29B6F0]/10 blur-[170px]" />
          <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ========================================================= */}
          {/* MAIN GRID */}
          {/* ========================================================= */}

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
            {/* ========================================================= */}
            {/* LEFT */}
            {/* ========================================================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="lg:sticky lg:top-28"
            >
              {/* Badge */}
              <span className="inline-flex w-fit items-center rounded-full border border-[#29B6F0]/30 bg-[#101418]/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl sm:px-5 sm:py-2 sm:text-xs">
                WHO WE WORK WITH
              </span>

              {/* Heading */}
              <h2 className="mt-5 text-[32px] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-[40px] md:text-[48px] lg:text-[52px]">
                <span className="block text-white">Industries</span>

                <span className="mt-1 block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
                  We Transform
                </span>
              </h2>

              {/* Intro */}
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#A0A0A8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-lg">
                Every engagement begins with understanding the business. From
                healthcare and finance to retail and enterprise, BeaverTek
                delivers software that scales with growth.
              </p>

              {/* Small Accent */}
              <div
                data-aos="fade-right"
                data-aos-delay="180"
                data-aos-duration="700"
                className="mt-6 h-1 w-14 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:w-16"
              />
            </div>

            {/* ========================================================= */}
            {/* RIGHT — TIMELINE */}
            {/* ========================================================= */}

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute bottom-5 left-[20px] top-5 hidden w-px bg-gradient-to-b from-[#29B6F0]/70 via-[#3E7BD6]/50 via-[#7A4FD1]/50 to-[#B93FC9]/70 sm:block" />

              <div className="space-y-6 sm:space-y-7">
                {/* ===================================================== */}
                {/* FINANCIAL SERVICES */}
                {/* ===================================================== */}

                <div
                  data-aos="fade-left"
                  data-aos-duration="900"
                  className="group relative flex gap-5 sm:gap-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#29B6F0]/30 bg-[#080B11] text-[#29B6F0] shadow-[0_0_0_5px_rgba(5,7,13,.9)] transition-all duration-300 group-hover:border-[#29B6F0]/70 group-hover:bg-[#29B6F0]/10 group-hover:shadow-[0_0_25px_rgba(41,182,240,.18)]">
                    <Landmark
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 border-b border-[#222]/80 pb-6 sm:pb-7">
                    <h3 className="text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl md:text-3xl">
                      Financial Services
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8">
                      Payment platforms, merchant integrations, banking software
                      and secure financial systems.
                    </p>
                  </div>
                </div>

                {/* ===================================================== */}
                {/* HEALTHCARE */}
                {/* ===================================================== */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="900"
                  className="group relative flex gap-5 sm:gap-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3E7BD6]/30 bg-[#080B11] text-[#3E7BD6] shadow-[0_0_0_5px_rgba(5,7,13,.9)] transition-all duration-300 group-hover:border-[#3E7BD6]/70 group-hover:bg-[#3E7BD6]/10 group-hover:shadow-[0_0_25px_rgba(62,123,214,.18)]">
                    <HeartPulse
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 border-b border-[#222]/80 pb-6 sm:pb-7">
                    <h3 className="text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl md:text-3xl">
                      Healthcare
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8">
                      AI healthcare platforms, patient engagement, workflow
                      automation and clinical systems.
                    </p>
                  </div>
                </div>

                {/* ===================================================== */}
                {/* RETAIL & COMMERCE */}
                {/* ===================================================== */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="900"
                  className="group relative flex gap-5 sm:gap-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7A4FD1]/30 bg-[#080B11] text-[#7A4FD1] shadow-[0_0_0_5px_rgba(5,7,13,.9)] transition-all duration-300 group-hover:border-[#7A4FD1]/70 group-hover:bg-[#7A4FD1]/10 group-hover:shadow-[0_0_25px_rgba(122,79,209,.18)]">
                    <ShoppingBag
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 border-b border-[#222]/80 pb-6 sm:pb-7">
                    <h3 className="text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl md:text-3xl">
                      Retail & Commerce
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8">
                      Digital commerce, customer platforms, analytics and
                      business automation.
                    </p>
                  </div>
                </div>

                {/* ===================================================== */}
                {/* ENTERPRISE OPERATIONS */}
                {/* ===================================================== */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="900"
                  className="group relative flex gap-5 sm:gap-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B93FC9]/30 bg-[#080B11] text-[#B93FC9] shadow-[0_0_0_5px_rgba(5,7,13,.9)] transition-all duration-300 group-hover:border-[#B93FC9]/70 group-hover:bg-[#B93FC9]/10 group-hover:shadow-[0_0_25px_rgba(185,63,201,.18)]">
                    <Building2
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl md:text-3xl">
                      Enterprise Operations
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#A0A0A8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8">
                      Business intelligence, reporting platforms, dashboards and
                      enterprise workflow software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ENTERPRISE MESSAGE */}
          {/* ================================================= */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative mt-10 overflow-hidden bg-black sm:mt-12 lg:mt-14"
          >
            {/* ================================================= */}
            {/* MAIN CARD */}
            {/* ================================================= */}
            <div className="relative overflow-hidden bg-black px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}
              <div className="relative mx-auto max-w-5xl text-center">
                {/* Label */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#29B6F0] sm:w-12" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#29B6F0] sm:text-xs sm:tracking-[0.32em]">
                    BUILT FOR EVERY INDUSTRY
                  </span>

                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#7A4FD1] sm:w-12" />
                </div>

                {/* ================================================= */}
                {/* HEADING */}
                {/* ================================================= */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay="160"
                  data-aos-duration="900"
                  className="mx-auto mt-5 max-w-4xl text-[28px] font-black leading-[1.06] tracking-[-0.035em] text-white sm:mt-6 sm:text-[34px] md:text-[40px] lg:text-[48px] xl:text-[52px]"
                >
                  <span className="block">Great software</span>

                  <span className="mt-1 block sm:mt-2">
                    is never about the{" "}
                    <span className="relative inline-block bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent transition-all duration-500 hover:drop-shadow-[0_0_22px_rgba(41,182,240,0.28)]">
                      industry.
                    </span>
                  </span>
                </h3>

                {/* Gradient divider */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="220"
                  data-aos-duration="700"
                  className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] transition-all duration-500 hover:w-24 sm:mt-6 sm:w-20"
                />

                {/* ================================================= */}
                {/* PARAGRAPH */}
                {/* ================================================= */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="280"
                  data-aos-duration="900"
                  className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#A0A0A8] sm:mt-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-[17px]"
                >
                  Every successful platform starts by understanding people,
                  simplifying complex workflows, and building technology that
                  delivers measurable business value over time.
                </p>

                {/* ================================================= */}
                {/* STRATEGY */}
                {/* ================================================= */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="360"
                  data-aos-duration="800"
                  className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-8 sm:gap-x-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.24em]">
                    Strategy
                  </span>

                  <span className="text-[#29B6F0]">•</span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.24em]">
                    Design
                  </span>

                  <span className="text-[#29B6F0]">•</span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.24em]">
                    Engineering
                  </span>

                  <span className="text-[#29B6F0]">•</span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.24em]">
                    AI
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* BOTTOM GRADIENT GLOW */}
              {/* ================================================= */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,#B93FC9,transparent)] opacity-70" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Datathatwhowewrok;
