"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "@/pages/customers/testimonial";

const beaverTekGradient =
  "linear-gradient(100deg, #29B6F0 0%, #3E7BD6 38%, #7A4FD1 72%, #B93FC9 100%)";

function CustomerHero() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      disable: false,
    });

    const timer = window.setTimeout(() => {
      AOS.refresh();
    }, 250);

    return () => {
      window.clearTimeout(timer);
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
    <section className="relative isolate flex min-h-[310px] w-full items-center justify-center overflow-hidden bg-[#05070D] text-center sm:min-h-[550px] lg:min-h-[610px] xl:min-h-[640px]">
      {/* Background Image */}
     <div
  aria-hidden="true"
  className="absolute inset-0 -z-30 bg-[url('/product/customerhero.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[position:center_45%]"
/>

      {/* Dark Overlay — improved image visibility and text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-black/45"
      />

      {/* Additional center overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.08) 50%, rgba(5,7,13,0.65) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-[#05070D] via-[#05070D]/40 to-transparent sm:h-24"
      />

      {/* BeaverTek Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[110px] sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-[#7A4FD1]/10 blur-[110px] sm:h-72 sm:w-72"
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {/* Eyebrow */}
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3.5 py-1.5 backdrop-blur-md sm:gap-2.5 sm:px-4 sm:py-2"
          >
            <Users
              size={15}
              strokeWidth={1.8}
              className="text-[#70CFF7]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs sm:tracking-[0.22em]">
              Our Customers
            </span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#29B6F0" }}
            />
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 max-w-4xl text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.65)] sm:mt-6 sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px]"
          >
            Driving Success
            <br className="hidden sm:block" />{" "}
            <span className="sm:inline">Through </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: beaverTekGradient,
                WebkitBackgroundClip: "text",
              }}
            >
              Partnership
            </span>
          </h1>

          {/* Supporting Headline */}
          <h2
            data-aos="fade-up"
            data-aos-delay="160"
            className="mt-4 text-base font-bold tracking-tight text-white drop-shadow-md sm:mt-5 sm:text-lg md:text-xl lg:text-2xl"
          >
            Trusted by Global Enterprises
          </h2>

          {/* Gradient Divider */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 h-[3px] w-14 rounded-full sm:mt-5 sm:w-16"
            style={{ background: beaverTekGradient }}
          />

          {/* Description — unchanged */}
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mx-auto mt-5 max-w-3xl text-[13px] font-medium leading-6 text-white/95 drop-shadow-md sm:mt-6 sm:text-sm sm:leading-7 md:text-base md:leading-8"
          >
            Our customers are at the heart of everything we do. From Fortune
            500 companies to fast-growing startups, BeaverTek empowers
            organizations with scalable IT solutions, deep technical
            expertise, and a commitment to long-term success. We build
            relationships that last and deliver outcomes that matter.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
            className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5"
          >
            <Link
              href="/customers/casestudyhero"
              className="group inline-flex min-h-[45px] items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-bold text-white shadow-[0_5px_25px_rgba(41,182,240,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(122,79,209,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6F0] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[48px] sm:px-6 sm:text-sm"
              style={{ background: beaverTekGradient }}
            >
              Explore Our Customers
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact/herosection"
              className="group inline-flex min-h-[45px] items-center justify-center gap-2 rounded-lg border border-white/40 bg-black/35 px-5 py-3 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#70CFF7] hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6F0] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-[48px] sm:px-6 sm:text-sm"
            >
              <Sparkles
                size={15}
                className="text-[#70CFF7] transition-transform duration-300 group-hover:rotate-12"
              />
              Let&apos;s Talk
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Bottom Trust Note */}
          <div
            data-aos="fade-up"
            data-aos-delay="380"
            className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[9px] font-semibold tracking-[0.06em] text-white/85 sm:mt-6 sm:gap-x-3 sm:text-[10px] md:text-xs"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#29B6F0]" />

            <span>SCALABLE SOLUTIONS</span>

            <span className="text-white/50">/</span>

            <span>TECHNICAL EXPERTISE</span>

            <span className="text-white/50">/</span>

            <span>LASTING PARTNERSHIPS</span>
          </div>
        </div>
      </div>
    </section>
    <Testimonial/>
    </div>
  );
}

export default CustomerHero;