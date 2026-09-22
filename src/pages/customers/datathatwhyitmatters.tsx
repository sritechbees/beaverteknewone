import TestimonialsSection from '@/component/home/testimonialsection'
import React from 'react'

function Datathatwhyitmatters() {
  return (
    <div>
       {/* WHY IT MATTERS - PREMIUM DESIGN */}
{/* ===================================================== */}

<section className="relative overflow-hidden bg-[#05070D] py-16 sm:py-16 lg:py-12 pb-8">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#29B6F0]/10 blur-[160px]" />
    <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:54px_54px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

      {/* LEFT */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="relative"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#111827]/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl sm:px-5 sm:py-2 sm:text-xs"
        >
          WHY IT MATTERS
        </span>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">

          <div className="h-3 w-3 shrink-0 rounded-full bg-[#29B6F0] shadow-[0_0_20px_rgba(41,182,240,.7)]" />

          <div className="h-px w-16 bg-gradient-to-r from-[#29B6F0] to-[#7A4FD1] sm:w-24" />

          <p className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            BeaverTek Insight
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div
        data-aos="fade-left"
        data-aos-duration="900"
        className="relative"
      >

        <h2 className="text-[32px] font-black leading-[1.08] tracking-[-0.025em] text-white sm:text-[38px] md:text-[44px] lg:text-[48px]">

          Decisions become
          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] bg-clip-text text-transparent">
            faster, smarter,
          </span>

          <br />

          and more confident.

        </h2>

        <div className="mt-6 h-1 w-20 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] sm:mt-7 sm:w-24" />

        <p className="mt-6 max-w-3xl text-sm leading-7 text-[#D4D4D8] sm:text-[15px] sm:leading-7 md:text-base md:leading-8 lg:text-lg">
          Reliable reporting transforms how organizations operate. When
          executives trust the numbers, teams spend less time validating
          spreadsheets and more time making informed, data-driven
          decisions that improve performance every day.
        </p>

        {/* Key Outcomes */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="900"
          className="mt-9 grid gap-5 sm:grid-cols-3 sm:gap-6"
        >

          <div className="group">
            <div className="mb-3 h-px w-10 bg-[#29B6F0] transition-all duration-300 group-hover:w-16" />

            <p className="text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6)] group-hover:bg-clip-text group-hover:text-transparent sm:text-base">
              Trusted Reports
            </p>
          </div>

          <div className="group">
            <div className="mb-3 h-px w-10 bg-[#3E7BD6] transition-all duration-300 group-hover:w-16" />

            <p className="text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#3E7BD6,#7A4FD1)] group-hover:bg-clip-text group-hover:text-transparent sm:text-base">
              Faster Decisions
            </p>
          </div>

          <div className="group">
            <div className="mb-3 h-px w-10 bg-[#B93FC9] transition-all duration-300 group-hover:w-16" />

            <p className="text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#7A4FD1,#B93FC9)] group-hover:bg-clip-text group-hover:text-transparent sm:text-base">
              Better Outcomes
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<TestimonialsSection/>
        </div>
  )
}

export default Datathatwhyitmatters