import Link from 'next/link'
import React from 'react'

function Datathatdrivesdecisionshero() {
  return (
    <div>
       <section className="relative overflow-hidden bg-[#05070D] py-20 lg:py-24">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute inset-0 bg-black" />

    <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#29B6F0]/10 blur-[150px]" />

    <div className="absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-[#7A4FD1]/10 blur-[170px]" />

    <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#B93FC9]/10 blur-[150px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

  </div>

  {/* Container */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] xl:gap-20">

      {/* ================================================= */}
      {/* LEFT CONTENT */}
      {/* ================================================= */}

      <div
        data-aos="fade-right"
        className="order-2 lg:order-1"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[#121212]/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0] backdrop-blur-xl">
          Case Study Three
        </span>

        <h1 className="mt-7 text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">

          Data that

          <br />

          <span className="bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_70%,#B93FC9_100%)] bg-clip-text text-transparent">

            Drives Decisions

          </span>

        </h1>

        <div className="mt-6 h-1 w-24 rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]" />

        <p className="mt-8 max-w-xl text-base leading-8 text-[#D4D4D8] lg:text-lg lg:leading-9">

          BeaverTek built an enterprise reporting platform that
          transforms fragmented operational data into secure,
          real-time dashboards. Leadership teams gain instant
          visibility into business performance through one
          intelligent reporting experience.

        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/contact/contacthero"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
          >
            Book a Discovery Call
          </Link>

          <Link
            href="/customers/casestudyoverall"
            className="inline-flex items-center justify-center rounded-full border border-[#2A2A30] bg-[#121212]/70 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#29B6F0]"
          >
            View Case Studies
          </Link>

        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT IMAGE */}
      {/* ================================================= */}

      <div
        data-aos="fade-left"
        className="order-1 flex justify-center lg:order-2 lg:justify-end"
      >

        <div className="relative w-full max-w-[620px]">

          <div className="overflow-hidden rounded-[34px] border border-[#2A2A30] bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,.45)]">

            <img
              src="/home/homehero.jpg"
              alt="Enterprise Reporting Dashboard"
              className="block h-auto w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

        </div>
  )
}

export default Datathatdrivesdecisionshero