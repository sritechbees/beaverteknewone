"use client";

import App_layout from "@/component/layout/app_layout";
import { Cpu } from "lucide-react";

import WhyModernizationMatters from "./whymodernizationmatters";
import RealModernization from "./real modernization";


export default function ModernizeContent() {
  return (
    <div>
 
    <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-28">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#29B6F0]/10 blur-[130px]" />

    <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/10 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left */}

      <div
        data-aos="fade-right"
        data-aos-duration="1000"
      >

        <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/40 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-[#29B6F0] backdrop-blur-md">
          WHAT IT IS
        </span>

        <h2 className="mt-6 text-3xl font-black leading-tight text-white md:text-4xl xl:text-5xl">
          Modernization
          <br />

          <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
            Made Practical
          </span>

        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#B93FC9]" />

        <p className="mt-8 max-w-xl text-base leading-8 text-[#D4D4D8]">
          Most businesses rely on a combination of legacy applications,
          spreadsheets, and modern platforms. Modernization connects them
          into a secure, scalable environment without disrupting daily work.
        </p>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#A0A0A8]">
          BeaverTek upgrades your technology step by step—protecting existing
          investments while preparing your business for future growth.
        </p>

      </div>

      {/* Right */}

      <div
        className="relative"
        data-aos="fade-left"
        data-aos-duration="1000"
      >

        <div className="rounded-3xl border border-[#2A2A30] bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-[#3E7BD6] hover:bg-white/10">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]">

            <Cpu className="h-8 w-8 text-white" />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">
            Legacy + Modern
          </h3>

          <p className="mt-5 leading-8 text-[#D4D4D8]">
            We modernize your existing infrastructure instead of replacing
            everything. This reduces cost, minimizes downtime, and improves
            long-term scalability.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#29B6F0]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#29B6F0]" />

              <span className="text-sm text-[#D4D4D8]">
                Existing systems stay operational
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#7A4FD1]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#7A4FD1]" />

              <span className="text-sm text-[#D4D4D8]">
                Secure cloud-ready architecture
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#2A2A30] bg-[#121212] p-4 transition hover:border-[#B93FC9]">

              <div className="h-2.5 w-2.5 rounded-full bg-[#B93FC9]" />

              <span className="text-sm text-[#D4D4D8]">
                Planned migration with minimal risk
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
</div>
</section>
<RealModernization/>
<WhyModernizationMatters/>
</div>
 );
}