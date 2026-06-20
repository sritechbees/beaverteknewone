"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Productcontent from "./productcontent";
import App_layout from "@/component/layout/app_layout";

export default function ProductsHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
       <App_layout>
    <section className="relative overflow-hidden bg-[#F8FAFC]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-100 blur-3xl opacity-70"></div>

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 blur-3xl opacity-60"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div data-aos="fade-right">

            <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 backdrop-blur-xl px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6B91AD] shadow-sm">

              OUR PRODUCTS

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-light leading-[1.05] text-[#16213E]">

              Software
              <br />
              we have built,
              <br />
              in production.

            </h1>

            <p className="mt-10 max-w-xl text-lg leading-9 text-slate-600">

              Beyond client work, BeaverTek builds and operates its own
              products — proving the same engineering we bring to your
              business. Here is what we are running today.

            </p>

          </div>

          {/* Right */}

          <div
            data-aos="fade-left"
            className="relative"
          >

            <div className="rounded-[40px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl p-8 md:p-10">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-3xl bg-[#16213E] p-8 text-white hover:-translate-y-2 transition duration-500">

                  <div className="text-4xl">⚙️</div>

                  <div className="mt-10 h-2 w-16 rounded-full bg-blue-300"></div>

                </div>

                <div className="rounded-3xl bg-white border border-slate-200 p-8 hover:-translate-y-2 transition duration-500">

                  <div className="text-4xl">💻</div>

                  <div className="mt-10 h-2 w-16 rounded-full bg-slate-300"></div>

                </div>

                <div className="rounded-3xl bg-white border border-slate-200 p-8 hover:-translate-y-2 transition duration-500">

                  <div className="text-4xl">📊</div>

                  <div className="mt-10 h-2 w-16 rounded-full bg-slate-300"></div>

                </div>

                <div className="rounded-3xl bg-[#EAF3FF] p-8 hover:-translate-y-2 transition duration-500">

                  <div className="text-4xl">🚀</div>

                  <div className="mt-10 h-2 w-16 rounded-full bg-[#16213E]"></div>

                </div>

              </div>

              <div className="mt-8 rounded-3xl bg-[#16213E] p-8 text-white">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                      Production
                    </p>

                    <h3 className="mt-3 text-3xl font-light">
                      Software
                    </h3>

                  </div>

                  <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                    ✓
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
<Productcontent/>
    </section>
    </App_layout>
  );
}