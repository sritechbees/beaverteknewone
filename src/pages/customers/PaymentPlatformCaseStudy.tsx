"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

export default function PaymentPlatformCaseStudy() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <App_layout>
    <section className="bg-[#F7F9FC] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <div
          data-aos="fade-right"
          className="flex items-center gap-3 text-sm text-gray-500"
        >
          <span>Our Work</span>

          <span>/</span>

          <span className="text-[#16213E] font-medium">
            Case Study
          </span>
        </div>

        {/* Hero */}

        <div
          data-aos="fade-up"
          className="mt-10"
        >
          <span className="inline-flex rounded-full bg-[#E8EFF4] text-[#1E3A5F] px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase">
            Case Study One
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-light text-[#16213E] leading-tight max-w-4xl">
            Payment platform at scale
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl">
            We work quietly. Most of our clients prefer not to be named publicly,
            especially in regulated industries. So instead of a logo wall, we let
            the work speak. Below is one engagement that shows what BeaverTek does
            at its best.
          </p>
        </div>

        {/* Overview Card */}

        <div
          data-aos="fade-up"
          className="mt-16 bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="grid lg:grid-cols-3">

            {/* Left */}

            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="text-xs uppercase tracking-[0.25em] text-[#6B91AD] font-semibold">
                Industry
              </p>

              <h3 className="mt-4 text-2xl text-[#16213E] font-light">
                Financial services
              </h3>

            </div>

            {/* Center */}

            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="text-xs uppercase tracking-[0.25em] text-[#6B91AD] font-semibold">
                Service
              </p>

              <h3 className="mt-4 text-2xl text-[#16213E] font-light">
                Build software,
                <br />
                modernize
              </h3>

            </div>

            {/* Right */}

            <div className="p-8 md:p-10 bg-[#16213E] text-white">

              <p className="uppercase tracking-[0.25em] text-xs text-blue-200">
                Status
              </p>

              <h3 className="mt-4 text-2xl font-light">
                Running in production
              </h3>

              <p className="mt-5 text-gray-300 leading-7">
                Designed, engineered, maintained and continuously
                supported by BeaverTek.
              </p>

            </div>

          </div>
        </div>

        {/* Challenge Section */}

        <div className="grid lg:grid-cols-12 gap-14 mt-24">

          {/* Left */}

          <div
            data-aos="fade-right"
            className="lg:col-span-4"
          >

            <div className="sticky top-28">

              <span className="inline-flex w-14 h-14 rounded-full bg-[#16213E] text-white items-center justify-center text-xl font-semibold">
                01
              </span>

              <h2 className="mt-8 text-4xl font-light text-[#16213E]">
                The challenge
              </h2>

              <div className="w-20 h-[3px] bg-[#4A8ABF] mt-6 rounded-full"></div>

            </div>

          </div>

          {/* Right */}

          <div
            data-aos="fade-left"
            className="lg:col-span-8"
          >

            <div className="bg-white rounded-[32px] border border-gray-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition duration-500">

              <p className="text-lg leading-9 text-gray-700">

                A growing financial services client needed a payment
                gateway integration platform that could serve multiple
                downstream merchants reliably and at scale.

              </p>

              <p className="mt-8 text-lg leading-9 text-gray-700">

                The existing process was manual, fragile, and could not
                keep up with growth.

              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-24 border-t border-gray-200"></div>



        {/* ==========================
            WHAT WE BUILT
        =========================== */}

        <div className="grid lg:grid-cols-12 gap-14 py-24">

          <div
            data-aos="fade-right"
            className="lg:col-span-4"
          >
            <div className="sticky top-28">

              <span className="inline-flex w-14 h-14 rounded-full bg-[#16213E] text-white items-center justify-center text-xl font-semibold">
                02
              </span>

              <h2 className="mt-8 text-4xl font-light text-[#16213E]">
                What we built
              </h2>

              <div className="w-20 h-[3px] bg-[#4A8ABF] rounded-full mt-6"></div>

            </div>
          </div>

          <div
            data-aos="fade-left"
            className="lg:col-span-8"
          >

            <div className="rounded-[32px] bg-[#16213E] text-white p-8 md:p-12 shadow-xl">

              <p className="text-xl leading-10 text-gray-200">

                A purpose-built payment gateway integration platform —
                designed, engineered, and now supported by BeaverTek
                end-to-end.

              </p>

            </div>

          </div>

        </div>

        {/* ==========================
            RESULTS
        =========================== */}

        <div
          data-aos="fade-up"
          className="rounded-[36px] bg-white border border-gray-200 shadow-sm overflow-hidden"
        >

          <div className="p-8 md:p-12">

            <p className="uppercase tracking-[0.3em] text-xs text-[#6B91AD] font-semibold">
              Where it stands today
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-light text-[#16213E]">
              Built to scale.
              <br />
              Running every day.
            </h2>

          </div>

          <div className="grid md:grid-cols-3">

            <div className="border-t md:border-r border-gray-200 p-10 text-center hover:bg-[#F8FAFC] transition duration-300">

              <h3 className="text-5xl font-light text-[#16213E]">
                150
              </h3>

              <p className="mt-3 text-gray-500 uppercase tracking-wider text-sm">
                Clients on the platform
              </p>

            </div>

            <div className="border-t md:border-r border-gray-200 p-10 text-center hover:bg-[#F8FAFC] transition duration-300">

              <h3 className="text-5xl font-light text-[#16213E]">
                4.5M
              </h3>

              <p className="mt-3 text-gray-500 uppercase tracking-wider text-sm">
                Transactions every month
              </p>

            </div>

            <div className="border-t border-gray-200 p-10 text-center hover:bg-[#F8FAFC] transition duration-300">

              <h3 className="text-5xl font-light text-[#16213E]">
                Ongoing
              </h3>

              <p className="mt-3 text-gray-500 uppercase tracking-wider text-sm">
                Support & Maintenance
              </p>

            </div>

          </div>

        </div>

        {/* ==========================
            WHY IT MATTERS
        =========================== */}

        <div
          data-aos="zoom-in"
          className="mt-24 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#16213E] via-[#23395B] to-[#16213E]"
        >

          <div className="p-8 md:p-16">

            <span className="inline-flex rounded-full bg-white/10 backdrop-blur px-5 py-2 text-xs tracking-[0.25em] uppercase text-blue-200">
              Why it matters
            </span>

            <h2 className="mt-8 text-4xl md:text-5xl font-light text-white leading-tight max-w-4xl">
              When the platform you build handles money,
              <br />
              "mostly working" is not a real option.
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300 max-w-4xl">

              This client trusted us with the system their business runs on —
              and we have not let them down.

            </p>

          </div>

        </div>

        {/* ==========================
            CASE STUDY NAVIGATION
        =========================== */}

        <div
          data-aos="fade-up"
          className="mt-24 grid md:grid-cols-2 gap-8"
        >

          <button
            className="group rounded-[28px] border border-gray-200 bg-white p-8 text-left hover:-translate-y-2 hover:shadow-xl transition duration-500"
          >

            <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
              Previous
            </p>

            <h3 className="mt-5 text-2xl font-light text-[#16213E]">
              All Case Studies
            </h3>
<Link href="/customers/casestudyhero">
            <span className="inline-flex mt-8 text-[#16213E] group-hover:-translate-x-1 transition">
              ← Back
            </span>
</Link>
          </button>

          <button
            className="group rounded-[28px] bg-[#16213E] text-white p-8 text-left hover:-translate-y-2 hover:shadow-2xl transition duration-500"
          >

            <p className="uppercase tracking-[0.25em] text-blue-200 text-xs">
              Next Case Study
            </p>

            <h3 className="mt-5 text-2xl font-light">
              Case Study Two
            </h3>
         <Link href="/customers/AIcasestudytwo">
            <span className="inline-flex mt-8 group-hover:translate-x-2 transition">
              Continue →
            </span>
         </Link>

          </button>

        </div>

      
      </div>
    </section>
    </App_layout>
  );
}