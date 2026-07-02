
"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterCTA() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  const features = [
    "Enterprise AI Solutions",
    "Cloud & Data Platforms",
    "Healthcare Technology",
    "24/7 Expert Support",
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/home/ctaimage.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07131E]/95 via-[#07131E]/80 to-[#07131E]/35" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#45A6E5]/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#8FD14F]/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-right">
            <span className="inline-flex rounded-full border border-[#45A6E5]/40 bg-[#45A6E5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#45A6E5]">
              Let's Build Together
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Need Senior
              <br />
              Technology Help?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Partner with experienced engineers to design, build and scale
              secure AI-powered enterprise solutions tailored to your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact/contacthero" className="rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] px-8 py-4 text-center font-semibold text-white transition hover:scale-105">
                Book a 30‑Minute Call →
              </Link>
              <Link href="/customers/casestudyoverall" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur hover:bg-white/20">
                View Case Studies
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center sm:text-left">
              <div><div className="text-3xl font-bold text-white">500+</div><p className="text-sm text-slate-400">Projects</p></div>
              <div><div className="text-3xl font-bold text-white">50+</div><p className="text-sm text-slate-400">Experts</p></div>
              <div><div className="text-3xl font-bold text-white">24/7</div><p className="text-sm text-slate-400">Support</p></div>
            </div>
          </div>

          <div data-aos="fade-left" className="mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white">Trusted Technology Partner</h3>
            <p className="mt-3 text-slate-300">
              From strategy to deployment, we help organizations modernize with confidence.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] text-white">✓</div>
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#45A6E5]/20 to-[#8FD14F]/20 p-6">
              <div className="text-4xl font-black text-white">98%</div>
              <p className="mt-2 text-slate-300">Client satisfaction across enterprise engagements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
