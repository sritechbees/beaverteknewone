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
      offset: 100,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#161E2F] pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6B91AD]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#23314F]/40 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#23314F] border border-[#6B91AD]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6B91AD]" />
              <span className="text-sm text-gray-300">
                Trusted Technology Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Senior technology,
              <span className="block text-[#6B91AD]">
                built for businesses
              </span>
              your size.
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              BeaverTek helps small and mid-size companies modernize their
              systems, make sense of their data, and build software that
              actually works. Fortune 500 experience, applied to the work
              in front of you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/inquiry"
                className="px-8 py-4 rounded-2xl bg-[#6B91AD]
                hover:bg-[#5A7C95]
                text-white font-semibold text-center
                transition-all duration-300"
              >
                Book a 30-Minute Call
              </Link>

              <Link
                href="/customers/casestudyhero"
                className="px-8 py-4 rounded-2xl border border-[#6B91AD]
                text-white hover:bg-[#23314F]
                text-center transition-all duration-300"
              >
                See What We Have Built
              </Link>

            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div
            data-aos="fade-left"
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#6B91AD]/20 bg-white/5 backdrop-blur-xl shadow-2xl">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover"
              >
                <source
                  src="/video/beavertek-hero.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#161E2F]/70 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid grid-cols-3 gap-3">

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <h3 className="text-white font-bold text-xl">
                      150+
                    </h3>
                    <p className="text-gray-300 text-xs">
                      Clients
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <h3 className="text-white font-bold text-xl">
                      4.5M
                    </h3>
                    <p className="text-gray-300 text-xs">
                      Transactions
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                    <h3 className="text-white font-bold text-xl">
                      AI
                    </h3>
                    <p className="text-gray-300 text-xs">
                      Healthcare
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Floating Decoration */}
            <div className="absolute -z-10 -right-8 -top-8 w-40 h-40 bg-[#6B91AD]/20 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}