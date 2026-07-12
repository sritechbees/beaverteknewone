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
          {/* Right */}
<div className="relative flex items-center justify-center">

  {/* Background Glow */}
  <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-[#29B6F0]/20 via-[#7A4FD1]/15 to-[#B93FC9]/20 blur-[130px]" />

  <div className="relative grid grid-cols-2 gap-6">

    {/* Image 1 */}
    <Link
      href="/services/modernize/modernizehero"
      className="group relative overflow-hidden shadow-2xl"
      style={{
        borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
      }}
    >
      <img
        src="/home/whyexist.jpg"
        alt="Modernize"
        className="h-[240px] w-[220px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">
          Modernize
        </h3>
      </div>
    </Link>

    {/* Image 2 */}
    <Link
      href="/services/seeyourdata/seeyourdatahero"
      className="group relative mt-14 overflow-hidden shadow-2xl"
      style={{
        borderRadius: "38% 62% 42% 58% / 52% 40% 60% 48%",
      }}
    >
      <img
        src="/home/producthero.png"
        alt="See Your Data"
        className="h-[280px] w-[230px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">
          See Your Data
        </h3>
      </div>
    </Link>

    {/* Image 3 */}
    <Link
      href="/services/buildsoftware/herosection"
      className="group relative -mt-10 ml-10 overflow-hidden shadow-2xl"
      style={{
        borderRadius: "52% 48% 60% 40% / 40% 58% 42% 60%",
      }}
    >
      <img
        src="/home/theteam.jpg"
        alt="Build Software"
        className="h-[280px] w-[230px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">
          Build Software
        </h3>
      </div>
    </Link>

    {/* Image 4 */}
    <Link
      href="/services/staysecure/staysecureherosection"
      className="group relative overflow-hidden shadow-2xl"
      style={{
        borderRadius: "42% 58% 40% 60% / 60% 38% 62% 40%",
      }}
    >
      <img
        src="/home/homehero.jpg"
        alt="Stay Secure"
        className="h-[240px] w-[220px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">
          Stay Secure
        </h3>
      </div>
    </Link>

  </div>

</div>
        </div>
      </div>
    </section>
    <ServicesHub/>
    </App_layout>
  );
}