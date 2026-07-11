"use client";

import { useEffect } from "react";
import {
  Building2,
  MapPin,
  Globe2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhereWeAre() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const locations = [
    {
      icon: Building2,
      title: "Headquarters",
      value: "Irvine, California",
    },
    {
      icon: MapPin,
      title: "Engineering Hub",
      value: "India",
    },
    {
      icon: Globe2,
      title: "Clients",
      value: "Across North America & Beyond",
    },
  ];

  return (
<section className="relative overflow-hidden bg-[#000000] py-16 lg:py-24">

  {/* Background Glow */}

  <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#29B6F0]/15 blur-[120px]" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#B93FC9]/15 blur-[140px]" />

  {/* Grid Pattern */}

  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#2A2A30_1px,transparent_1px),linear-gradient(to_bottom,#2A2A30_1px,transparent_1px)] bg-[size:40px_40px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <div
      className="mx-auto max-w-3xl text-center"
      data-aos="fade-up"
    >

      <span className="inline-flex items-center rounded-full border border-[#3E7BD6]/30 bg-[rgba(255,255,255,0.05)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
        Global Presence
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">

        Where We

        <span className="block bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
          Are
        </span>

      </h2>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9]" />

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#D4D4D8]">
        Strategically positioned to support businesses with experienced
        engineering teams and trusted technology partnerships across
        multiple regions.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

      {locations.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            data-aos="zoom-up"
            data-aos-delay={index * 150}
            className="group relative overflow-hidden rounded-[18px] border border-[#2A2A30] bg-[#121212] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#3E7BD6] hover:shadow-[0_0_60px_rgba(62,123,214,.35)]"
          >

            {/* Hover Glow */}

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#29B6F0]/15 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            {/* Icon */}

            <div className="relative flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] shadow-[0_0_35px_rgba(62,123,214,.35)]">

              <Icon className="h-8 w-8 text-white" />

            </div>

            {/* Number */}

            <span className="absolute right-8 top-8 text-6xl font-black text-white/5">
              0{index + 1}
            </span>

            {/* Title */}

            <h3 className="relative mt-8 text-xl font-bold bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-transparent">
              {item.title}
            </h3>

            {/* Description */}

            <p className="relative mt-4 text-2xl font-semibold leading-snug text-white">
              {item.value}
            </p>

            {/* Bottom Gradient Line */}

            <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] transition-all duration-500 group-hover:w-24"></div>

          </div>
        );
      })}

    </div>

  </div>

</section>
  );
}