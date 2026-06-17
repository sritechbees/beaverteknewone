"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import App_layout from "@/component/layout/app_layout";
import ServicesHub from "./serviceshub";

export default function ServicesHero() {
  return (
    <App_layout>
    <section className="relative overflow-hidden bg-[#161E2F] pt-16 pb-20 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#6B91AD]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,145,173,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-[#6B91AD]/40 bg-[#6B91AD]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#9DB7CA]">
              WHAT WE DO
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
              Four things,
              <br />
              <span className="text-[#6B91AD]">
                done well.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
              BeaverTek is built around four core practices. Every engagement
              starts in one of these — and most clients eventually use more than
              one.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-400">
              We keep the list short on purpose. You will not find us pretending
              to do everything.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-[#6B91AD] px-7 py-4 font-semibold text-white transition hover:bg-[#5C819B]"
              >
                Talk to Our Team
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#services"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#6B91AD] hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#1F2A40] p-6 transition hover:-translate-y-1 hover:bg-[#24314B]">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-[#6B91AD]/20 flex items-center justify-center text-xl">
                    ⚙️
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Modernize
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Modern platforms, cloud transformation and digital
                    modernization.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#1F2A40] p-6 transition hover:-translate-y-1 hover:bg-[#24314B]">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-[#6B91AD]/20 flex items-center justify-center text-xl">
                    📊
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    See Your Data
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Analytics, reporting and business intelligence for
                    confident decisions.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#1F2A40] p-6 transition hover:-translate-y-1 hover:bg-[#24314B]">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-[#6B91AD]/20 flex items-center justify-center text-xl">
                    💻
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Build Software
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Custom applications designed for performance and scale.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#1F2A40] p-6 transition hover:-translate-y-1 hover:bg-[#24314B]">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-[#6B91AD]/20 flex items-center justify-center text-xl">
                    🔒
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Stay Secure
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Security assessments, compliance and continuous protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-[#6B91AD]/20 bg-[#23314F] px-8 py-4 shadow-xl">
              <p className="text-center text-sm font-medium tracking-wide text-[#9DB7CA]">
                FOUR CORE PRACTICES • ONE TRUSTED PARTNER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServicesHub/>
    </App_layout>
  );
}