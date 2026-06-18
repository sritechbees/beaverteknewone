import App_layout from '@/component/layout/app_layout'
import Link from 'next/link'
import React from 'react'

function Datathatdrivesdecisionscasestudy() {
  return (
    <App_layout>
    <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF6FF] py-24 lg:py-32">

  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div data-aos="fade-right">

        <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-[#16213E] font-medium text-sm tracking-widest uppercase">
          Case Study Three
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-light leading-tight text-[#16213E]">
          Data that
          <br />
          drives
          <br />
          decisions.
        </h1>

        <div className="mt-10 flex flex-wrap gap-4">

          <div className="px-6 py-3 rounded-full border border-slate-300 bg-white">
            Industry:
            <span className="font-semibold ml-2">
              Enterprise reporting
            </span>
          </div>

          <div className="px-6 py-3 rounded-full border border-slate-300 bg-white">
            Service:
            <span className="font-semibold ml-2">
              See your data
            </span>
          </div>

        </div>

      </div>

      {/* Right */}

      <div
        data-aos="fade-left"
        className="bg-white rounded-[40px] shadow-2xl border border-slate-200 p-10 lg:p-14"
      >

        <p className="uppercase tracking-[0.3em] text-xs text-slate-500 font-semibold">
          The challenge
        </p>

        <h2 className="mt-5 text-4xl font-light text-[#16213E] leading-tight">
          Reporting was slow,
          inconsistent,
          and trusted by no one.
        </h2>

        <p className="mt-8 text-lg leading-9 text-slate-600">

          A client with significant operational data could not get the clear,
          accurate reports leadership needed to make decisions.
          Reporting was slow, inconsistent,
          and trusted by no one.

        </p>

      </div>

    </div>

  </div>

</section>


{/* =======================================================
    WHAT WE BUILT
======================================================= */}

<section className="py-24">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div
      data-aos="fade-up"
      className="text-center max-w-3xl mx-auto"
    >

      <span className="uppercase tracking-[0.3em] text-xs text-[#6B91AD] font-semibold">
        What we built
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-light text-[#16213E]">
        Tableau reporting built
        for everyday decisions.
      </h2>

    </div>

    <div className="mt-20 grid lg:grid-cols-2 gap-10">

      {/* Left */}

      <div
        data-aos="fade-right"
        className="rounded-[35px] bg-[#16213E] p-10 lg:p-14 text-white"
      >

        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
          📊
        </div>

        <h3 className="mt-8 text-3xl font-light">
          Reporting Environment
        </h3>

        <p className="mt-6 text-lg leading-9 text-slate-300">

          A Tableau-based reporting environment with cleaned data
          sources, executive dashboards, and operational reports —
          built and stress-tested for daily use.

        </p>

      </div>

      {/* Right */}

      <div className="grid gap-8">

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rounded-[30px] border border-slate-200 bg-white p-8 hover:-translate-y-2 hover:shadow-xl transition duration-500"
        >

          <div className="text-4xl">📈</div>

          <h4 className="mt-5 text-2xl font-light text-[#16213E]">
            Cleaned Data Sources
          </h4>

        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="rounded-[30px] border border-slate-200 bg-white p-8 hover:-translate-y-2 hover:shadow-xl transition duration-500"
        >

          <div className="text-4xl">📉</div>

          <h4 className="mt-5 text-2xl font-light text-[#16213E]">
            Executive Dashboards
          </h4>

        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="rounded-[30px] border border-slate-200 bg-white p-8 hover:-translate-y-2 hover:shadow-xl transition duration-500"
        >

          <div className="text-4xl">📋</div>

          <h4 className="mt-5 text-2xl font-light text-[#16213E]">
            Operational Reports
          </h4>

        </div>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
    WHY IT MATTERS
===================================================== */}

<section className="py-24 bg-gradient-to-br from-[#16213E] via-[#1F3558] to-[#16213E] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div
      data-aos="fade-up"
      className="max-w-4xl"
    >

      <span className="uppercase tracking-[0.35em] text-blue-200 text-xs font-semibold">
        Why it matters
      </span>

      <h2 className="mt-8 text-5xl md:text-6xl font-light leading-tight text-white">
        When the people
        <br />
        running the business
        <br />
        start trusting the numbers,
        <br />
        decisions get faster
        <br />
        and better.
      </h2>

    </div>

  </div>

</section>


{/* =====================================================
    FEATURED TESTIMONIAL
===================================================== */}

<section className="py-24">

  <div className="max-w-6xl mx-auto px-6 lg:px-8">

    <div
      data-aos="zoom-in"
      className="relative overflow-hidden rounded-[40px] bg-white border border-slate-200 shadow-2xl p-10 md:p-16"
    >

      <div className="absolute top-8 right-8 text-[140px] text-slate-100 leading-none">
        "
      </div>

      <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#6B91AD]">
        Client Feedback
      </p>

      <blockquote className="mt-8 text-2xl md:text-3xl leading-relaxed font-light text-[#16213E]">

        "I wanted to take a moment to personally thank you for the exceptional
        work you have done on Tableau Reporting. Your dedication, attention
        to detail, and willingness to go beyond expectations truly stood out."

      </blockquote>

      <div className="mt-10">

        <h4 className="text-xl font-semibold text-[#16213E]">
          Brent
        </h4>

        <p className="text-slate-500 mt-2">
          Senior Vice President
        </p>

      </div>

    </div>

  </div>

</section>


{/* =====================================================
    WHAT CLIENTS SAY
===================================================== */}

<section className="pb-24">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div
      data-aos="fade-up"
      className="text-center max-w-3xl mx-auto"
    >

      <span className="uppercase tracking-[0.35em] text-xs font-semibold text-[#6B91AD]">
        What clients say
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-light text-[#16213E]">
        Client testimonials
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {/* Testimonial 1 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="group rounded-[35px] bg-white border border-slate-200 p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
      >

        <div className="text-5xl text-[#16213E]">
          ❝
        </div>

        <p className="mt-8 text-lg leading-9 text-slate-600">

          "BeaverTek's efforts did not just contribute to the success of the
          project — they set a high standard for excellence for the team.
          It is rare to see such commitment, and it has not gone unnoticed."

        </p>

        <div className="mt-10 pt-8 border-t border-slate-200">

          <h4 className="font-semibold text-xl text-[#16213E]">
            Cooraez
          </h4>

          <p className="text-slate-500 mt-1">
            CEO
          </p>

        </div>

      </div>

      {/* Testimonial 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="group rounded-[35px] bg-[#16213E] text-white p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
      >

        <div className="text-5xl text-blue-300">
          ❝
        </div>

        <p className="mt-8 text-lg leading-9 text-slate-300">

          "I just wanted to give a big shoutout for the incredible work
          BeaverTek did on our campus solutions. They didn't just check
          the boxes — they went all in. It made a huge difference."

        </p>

        <div className="mt-10 pt-8 border-t border-white/20">

          <h4 className="font-semibold text-xl">
            Ravi Rajagopal
          </h4>

          <p className="text-slate-300 mt-1">
            CEO
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ===========================================
    WHO WE WORK WITH
=========================================== */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div
      data-aos="fade-up"
      className="text-center max-w-4xl mx-auto"
    >

      <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#6B91AD]">
        Who we work with
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-light text-[#16213E]">
        Most of our clients are
        <br />
        small and mid-size companies.
      </h2>

    </div>

    {/* Industry Cards */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      {/* Card */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="group bg-white rounded-[32px] border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
      >

        <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-3xl">
          💳
        </div>

        <h3 className="mt-8 text-2xl font-light text-[#16213E]">
          Financial services
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          Financial services and payments
        </p>

      </div>

      {/* Card */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="group bg-white rounded-[32px] border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
      >

        <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-3xl">
          🏥
        </div>

        <h3 className="mt-8 text-2xl font-light text-[#16213E]">
          Healthcare
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          Healthcare and clinical operations
        </p>

      </div>

      {/* Card */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="group bg-white rounded-[32px] border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
      >

        <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-3xl">
          🛍️
        </div>

        <h3 className="mt-8 text-2xl font-light text-[#16213E]">
          Retail
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          Retail, hospitality, and consumer technology
        </p>

      </div>

      {/* Card */}

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="group bg-white rounded-[32px] border border-slate-200 p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
      >

        <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-3xl">
          🏢
        </div>

        <h3 className="mt-8 text-2xl font-light text-[#16213E]">
          Enterprise
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          Mid-market enterprise operations
        </p>

      </div>

    </div>

  </div>

</section>

{/* ===========================================
    CLOSING MESSAGE
=========================================== */}

<section className="py-24">

  <div className="max-w-5xl mx-auto px-6">

    <div
      data-aos="zoom-in"
      className="rounded-[40px] bg-gradient-to-br from-[#16213E] via-[#223A5E] to-[#16213E] p-12 md:p-16 text-center text-white shadow-2xl"
    >

      <span className="uppercase tracking-[0.3em] text-xs text-blue-200">
        Industries
      </span>

      <h2 className="mt-8 text-4xl md:text-5xl font-light leading-tight">

        If you do not see your
        industry above,
        that is fine.

      </h2>

      <p className="mt-10 text-lg leading-9 text-slate-300 max-w-3xl mx-auto">

        The pattern of work is more important than the vertical.

      </p>

    </div>

  </div>

</section>

{/* ===========================================
    CASE STUDY NAVIGATION
=========================================== */}

<section className="pb-24">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid md:grid-cols-2 gap-8">

      {/* Previous */}

      <button
        data-aos="fade-right"
        className="group rounded-[35px] border border-slate-200 bg-white p-10 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
      >

        <p className="uppercase tracking-[0.3em] text-xs text-slate-500">
          Previous Case Study
        </p>

        <h3 className="mt-6 text-3xl font-light text-[#16213E]">
          AI in real hospitals
        </h3>
<Link href="/customers/AIcasestudytwo">
        <div className="mt-10 flex items-center gap-3 text-[#16213E] font-medium group-hover:-translate-x-2 transition">

          ← View Previous

        </div>
</Link>
      </button>

      {/* End */}

      <div
        data-aos="fade-left"
        className="rounded-[35px] bg-[#16213E] text-white p-10 flex flex-col justify-center"
      >

        <p className="uppercase tracking-[0.3em] text-xs text-blue-200">
          End of Case Studies
        </p>

        <h3 className="mt-6 text-3xl font-light leading-snug">

          Real businesses.
          <br />
          Real software.
          <br />
          Running today.

        </h3>

      </div>

    </div>

  </div>

</section>
    </div>
    </App_layout>
  )
}

export default Datathatdrivesdecisionscasestudy