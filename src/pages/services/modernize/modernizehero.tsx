"use client";

import App_layout from "@/component/layout/app_layout";
import ModernizeContent from "./modernizecontent";

export default function ModernizeHero() {
  return (
      <App_layout>
    <section className="relative overflow-hidden bg-gray-300">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6B91AD]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#161E2F]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div
          className="mx-auto max-w-4xl text-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <span className="inline-flex rounded-full bg-[#E8EFF4] px-5 py-2 text-sm font-semibold tracking-widest text-[#23314F]">
            MODERNIZE
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-[#161E2F] lg:text-7xl">
            Bring your systems forward,
            <br />
            without breaking them.
          </h1>
        </div>
      </div>
    </section>
    <ModernizeContent/>
  </App_layout>
  );
}