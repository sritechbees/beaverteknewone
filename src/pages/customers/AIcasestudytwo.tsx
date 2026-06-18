"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import App_layout from "@/component/layout/app_layout";

export default function AICaseStudyTwo() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <App_layout>
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div data-aos="fade-up">

          <span className="inline-flex items-center rounded-full bg-[#E8EFF4] px-5 py-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#1D3D63]">
            Case Study Two
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-light text-[#16213E] leading-tight max-w-4xl">
            AI in real hospitals
          </h1>

        </div>

        {/* Overview */}

        <div
          data-aos="fade-up"
          className="mt-16 rounded-[32px] overflow-hidden bg-white border border-gray-200 shadow-sm"
        >

          <div className="grid lg:grid-cols-3">

            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="uppercase tracking-[0.25em] text-xs text-[#6B91AD] font-semibold">
                Industry
              </p>

              <h3 className="mt-4 text-2xl font-light text-[#16213E]">
                Healthcare
              </h3>

            </div>

            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="uppercase tracking-[0.25em] text-xs text-[#6B91AD] font-semibold">
                Service
              </p>

              <h3 className="mt-4 text-2xl font-light text-[#16213E]">
                Build software
                <br />
                See your data
              </h3>

            </div>

            <div className="bg-[#16213E] text-white p-8 md:p-10">

              <p className="uppercase tracking-[0.25em] text-xs text-blue-200">
                Product
              </p>

              <h3 className="mt-4 text-2xl font-light">
                BeaverHealthAI
              </h3>

            </div>

          </div>

        </div>

        {/* Challenge */}

        <div className="grid lg:grid-cols-12 gap-14 py-24">

          <div
            data-aos="fade-right"
            className="lg:col-span-4"
          >

            <div className="sticky top-28">

              <span className="w-14 h-14 rounded-full bg-[#16213E] text-white flex items-center justify-center text-xl">
                01
              </span>

              <h2 className="mt-8 text-4xl font-light text-[#16213E]">
                The challenge
              </h2>

              <div className="w-20 h-[3px] bg-[#4A8ABF] mt-6 rounded-full"></div>

            </div>

          </div>

          <div
            data-aos="fade-left"
            className="lg:col-span-8"
          >

            <div className="bg-white rounded-[32px] border border-gray-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500">

              <p className="text-lg text-gray-700 leading-9">

                Healthcare providers were drowning in front-desk workflows,
                paper intake, and reactive care.

              </p>

              <p className="mt-8 text-lg text-gray-700 leading-9">

                They needed software that worked the way modern medicine
                does — intelligent, integrated, and built for actual
                clinical staff.

              </p>

            </div>

          </div>

        </div>

        {/* What We Built */}

        <div className="grid lg:grid-cols-12 gap-14">

          <div
            data-aos="fade-right"
            className="lg:col-span-4"
          >

            <div className="sticky top-28">

              <span className="w-14 h-14 rounded-full bg-[#16213E] text-white flex items-center justify-center text-xl">
                02
              </span>

              <h2 className="mt-8 text-4xl font-light text-[#16213E]">
                What we built
              </h2>

              <div className="w-20 h-[3px] bg-[#4A8ABF] mt-6 rounded-full"></div>

            </div>

          </div>

          <div
            data-aos="fade-left"
            className="lg:col-span-8"
          >

            <div className="rounded-[32px] bg-[#16213E] text-white p-8 md:p-12">

              <p className="text-xl leading-10 text-gray-200">

                A connected suite of healthcare applications —
                patient intake, AI-driven triaging, and preventive care
                tools — that ultimately became the foundation of
                BeaverHealthAI, our own healthcare AI platform.

              </p>

            </div>

          </div>

        </div>

      </div>

              {/* ======================================
            WHERE IT STANDS TODAY
        ======================================= */}

        <section className="py-24">

          <div
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-[#6B91AD]">
              Where it stands today
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-light text-[#16213E]">
              Growing beyond
              <br />
              the original engagement.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-white rounded-[30px] border border-gray-200 p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-2xl">
                🏥
              </div>

              <h3 className="mt-8 text-3xl font-light text-[#16213E]">
                Multiple
              </h3>

              <p className="mt-3 text-gray-600 leading-8">
                Used in multiple hospitals.
              </p>

            </div>

            {/* Card 2 */}

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-white rounded-[30px] border border-gray-200 p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-2xl">
                ❤️
              </div>

              <h3 className="mt-8 text-3xl font-light text-[#16213E]">
                Thousands
              </h3>

              <p className="mt-3 text-gray-600 leading-8">
                Supporting tens of thousands of patients.
              </p>

            </div>

            {/* Card 3 */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group bg-white rounded-[30px] border border-gray-200 p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#16213E] text-white flex items-center justify-center text-2xl">
                🚀
              </div>

              <h3 className="mt-8 text-3xl font-light text-[#16213E]">
                Growing
              </h3>

              <p className="mt-3 text-gray-600 leading-8">
                Continuing to grow as a standalone product.
              </p>

            </div>

          </div>

        </section>

        {/* ======================================
            WHY IT MATTERS
        ======================================= */}

        <section
          data-aos="zoom-in"
          className="rounded-[40px] overflow-hidden bg-gradient-to-br from-[#16213E] via-[#20324F] to-[#16213E]"
        >

          <div className="px-8 md:px-16 py-16 md:py-24">

            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-blue-200">
              Why it matters
            </span>

            <h2 className="mt-8 text-4xl md:text-5xl text-white font-light leading-tight max-w-4xl">
              Going from clinical concept
              <br />
              to working software inside
              <br />
              a hospital is hard.
            </h2>

            <p className="mt-10 text-lg leading-9 text-gray-300 max-w-4xl">

              We did it — and the platform we built kept growing into
              a product line of its own.

            </p>

          </div>

        </section>

        {/* ======================================
            CASE NAVIGATION
        ======================================= */}

        <section
          data-aos="fade-up"
          className="grid md:grid-cols-2 gap-8 py-24"
        >
<Link href="/customers/PaymentPlatformCaseStudy">
          <button className="group bg-white border border-gray-200 rounded-[30px] p-8 text-left hover:-translate-y-2 hover:shadow-xl transition-all duration-500">

            <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
              Previous Case Study
            </p>

            <h3 className="mt-5 text-3xl font-light text-[#16213E]">
              Payment platform at scale
            </h3>

            <span className="inline-flex mt-8 text-[#16213E] group-hover:-translate-x-1 transition">
              ← View Previous
            </span>

          </button>
</Link>
          <button className="group bg-[#16213E] rounded-[30px] p-8 text-left text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

            <p className="uppercase tracking-[0.25em] text-xs text-blue-200">
              Next Case Study
            </p>

            <h3 className="mt-5 text-3xl font-light">
              Case Study Three
            </h3>
<Link href="/customers/Datathatdrivesdecisionscasestudy">
            <span className="inline-flex mt-8 group-hover:translate-x-2 transition">
              View Next →
            </span>
</Link>
          </button>

        </section>
    </section>
    </App_layout>
  );
}