"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function WhereWeAre() {
  return (
    <div>
    <section className="bg-[#0F172A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Where We Are
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-[#6B91AD] font-semibold mb-3">
              Headquarters
            </h3>
            <p className="text-white text-xl">
              Irvine, California
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-[#6B91AD] font-semibold mb-3">
              Engineering Hub
            </h3>
            <p className="text-white text-xl">
              India
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-[#6B91AD] font-semibold mb-3">
              Clients
            </h3>
            <p className="text-white text-xl">
              Across North America & Beyond
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}