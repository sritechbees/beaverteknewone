"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterCTA from "../home/footercta";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <footer className="relative bg-[#0B0F14] text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#45A6E5]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FD14F]/10 blur-[140px] rounded-full" />

      <FooterCTA />

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* COMPANY + LOGO BLOCK */}
          <div data-aos="fade-up">

            <div className="flex items-center gap-3 mb-5">

  {/* LOGO IMAGE */}
  <div className="
   
  ">
    <Image
      src="/home/BeaverTek -Logo.png"
      alt="BeaverTek Logo"
      width={220}
      height={70}
      className="object-contain"
    />
  </div>

  {/* BRAND */}
 

</div>

            <p className="text-[#5B6B7B] leading-relaxed">
              A technology partner for small and mid-size businesses.
              We modernize systems, build software, unlock data insights,
              and keep digital operations secure.
            </p>

            {/* MINI INDICATORS */}
            <div className="mt-6 flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#45A6E5]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#45A6E5]/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#8FD14F]/60" />
            </div>

          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-6 text-[#EAF1F7]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#5B6B7B]">
              {[
                ["Home", "/"],
                ["About", "/about_us/abouthero"],
                ["Services", "/services/serviceshero"],
                ["Customers", "/customers/casestudyhero"],
                ["Products", "/products/producthero"],
                ["Contact", "/contact/contacthero"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-[#45A6E5] transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-6 text-[#EAF1F7]">
              Services
            </h3>

            <ul className="space-y-3 text-[#5B6B7B]">

              {[
                ["Modernize", "/services/modernize/modernizehero"],
                ["See Your Data", "/services/seeyourdata/seeyourdatahero"],
                ["Build Software", "/services/buildsoftware/herosection"],
                ["Stay Secure", "/services/staysecure/staysecureherosection"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-[#8FD14F] transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div data-aos="fade-up" data-aos-delay="300">

            <h3 className="text-lg font-semibold mb-6 text-[#EAF1F7]">
              Contact
            </h3>

            <div className="space-y-4 text-[#5B6B7B]">

              {[
                ["Email", "info@beavertek.com"],
                ["USA", "+1 (949) 885-6193"],
                ["India", "+91 99620 92583"],
                ["Headquarters", "Irvine, California"],
                ["Engineering Hub", "India"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[#45A6E5] font-medium text-sm">
                    {label}
                  </p>
                  <p>{value}</p>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* NEW PREMIUM STRIP (ONE MORE DESIGN YOU WANTED) */}
        <div
          data-aos="fade-up"
          className="
            mt-14
            rounded-[18px]
            border border-[#1C2530]
            bg-[#131A23]
            p-6
            flex flex-col md:flex-row
            justify-between items-center
            gap-4
          "
        >

          <p className="text-[#5B6B7B] text-center md:text-left">
            Building scalable digital systems with modern engineering & AI-driven solutions.
          </p>

          <div className="
            flex gap-3 text-sm
            text-[#EAF1F7]
          ">
            <span className="px-4 py-2 rounded-[999px] bg-[#0B0F14] border border-[#1C2530]">
              Scalable Systems
            </span>

            <span className="px-4 py-2 rounded-[999px] bg-[#0B0F14] border border-[#1C2530]">
              AI Solutions
            </span>

            <span className="px-4 py-2 rounded-[999px] bg-[#0B0F14] border border-[#1C2530]">
              Cloud Native
            </span>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="
          border-t border-[#1C2530]
          mt-10 pt-8
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">

          <p className="text-[#5B6B7B] text-center md:text-left">
            © {new Date().getFullYear()} BeaverTek. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-[#5B6B7B]">
            <Link href="#" className="hover:text-[#45A6E5]">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#8FD14F]">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}