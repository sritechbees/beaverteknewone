"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#161E2F] min-h-screen flex items-center">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B91AD]/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div
              data-aos="fade-right"
              className="inline-flex items-center gap-2 bg-[#23314F] border border-[#6B91AD]/20 px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B91AD]" />
              <span className="text-sm text-slate-200">
                Trusted Technology Partner
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Senior Technology,
              <br />

              <span className="text-[#6B91AD]">
                Built For Businesses
              </span>

              <br />
              Your Size.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              BeaverTek helps small and mid-size companies modernize
              their systems, make sense of their data, and build
              software that actually works.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/inquiry"
                className="px-8 py-4 rounded-xl bg-[#6B91AD] hover:bg-[#587A94] text-white font-semibold transition-all duration-300 hover:scale-105 text-center"
              >
                Book a 30-Minute Call
              </Link>

              <Link
                href="/customers"
                className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition text-center"
              >
                See What We've Built
              </Link>
            </div>

            {/* Metrics */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-14 grid grid-cols-3 gap-5"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#6B91AD]">
                  150+
                </h3>

                <p className="text-slate-400 text-sm">
                  Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#6B91AD]">
                  4.5M
                </h3>

                <p className="text-slate-400 text-sm">
                  Transactions / Month
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#6B91AD]">
                  80+
                </h3>

                <p className="text-slate-400 text-sm">
                  Years Experience
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div
            data-aos="zoom-in"
            className="relative flex justify-center"
          >

            <div className="relative w-full max-w-xl">

              <div className="absolute inset-0 bg-[#6B91AD]/20 blur-3xl rounded-full" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                <div className="grid grid-cols-2 gap-5">

                  <div className="bg-[#23314F] rounded-2xl p-6">
                    <h4 className="text-[#6B91AD] font-semibold">
                      Modernize
                    </h4>

                    <p className="text-slate-300 text-sm mt-3">
                      Legacy systems to cloud-ready platforms.
                    </p>
                  </div>

                  <div className="bg-[#23314F] rounded-2xl p-6">
                    <h4 className="text-[#6B91AD] font-semibold">
                      Analytics
                    </h4>

                    <p className="text-slate-300 text-sm mt-3">
                      Dashboards and insights that matter.
                    </p>
                  </div>

                  <div className="bg-[#23314F] rounded-2xl p-6">
                    <h4 className="text-[#6B91AD] font-semibold">
                      Software
                    </h4>

                    <p className="text-slate-300 text-sm mt-3">
                      Web & mobile apps built to scale.
                    </p>
                  </div>

                  <div className="bg-[#23314F] rounded-2xl p-6">
                    <h4 className="text-[#6B91AD] font-semibold">
                      Security
                    </h4>

                    <p className="text-slate-300 text-sm mt-3">
                      Protected and monitored operations.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}