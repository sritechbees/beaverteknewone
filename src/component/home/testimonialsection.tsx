"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
  {
    name: "Brent",
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
    quote:
      "BeaverTek built a powerful analytics platform with Tableau integration, transforming our business insights.",
  },
  {
    name: "Cooraez",
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
    quote:
      "An outstanding AI healthcare platform with seamless patient intake and smart triage workflows.",
  },
  {
    name: "Ravi",
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
    quote:
      "BeaverTek provided expert development and strategy, helping us launch faster and more efficiently.",
  },
];
  return (
    <section className="relative bg-[#161E2F] py-24 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#6B91AD]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-[#23314F] text-[#6B91AD] text-sm font-medium mb-6">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Trusted By
            <span className="text-[#6B91AD]"> Industry Leaders</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>
        </div>
{/* Testimonial Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

  {testimonials.map((item, index) => (
    <div
      key={item.name}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="relative w-full max-w-[320px] h-[430px] overflow-hidden rounded-[16px] group shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Top Quote */}
      <div className="absolute top-[55px] left-[60px] text-white text-[70px] leading-none font-bold z-30">
        “
      </div>

      {/* Bottom Grey Bar */}
      <div className="absolute bottom-[70px] left-4 right-4 h-[85px] bg-[#d9d9d9]/80 z-10" />

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">

        <div className="relative w-[280px] h-[220px]">

          {/* Profile Image */}
          <div className="absolute left-0 top-0 w-[115px] h-[180px] border-[4px] border-white overflow-hidden shadow-2xl bg-white">

            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />

          </div>

          {/* White Content Card */}
          <div className="absolute right-0 top-[5px] w-[190px] bg-white p-4 shadow-2xl">

            <h3 className="text-[24px] italic font-light text-[#6B91AD] mb-2 leading-none">
              {item.name}
            </h3>

            {/* Stars */}
            <div className="flex gap-1 text-[#f5c03c] text-sm mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Testimonial */}
            <p className="text-[12px] text-gray-800 leading-5 line-clamp-6">
              {item.quote}
            </p>

            <div className="mt-3 border-t pt-2">
              <p className="text-[11px] font-semibold text-[#161E2F]">
                {item.name}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Quote */}
      <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 text-white text-[70px] leading-none font-bold z-30">
        ”
      </div>

    </div>
  ))}

</div>
        
      </div>
    </section>
  );
}