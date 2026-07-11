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
   
      <footer className="relative bg-[#000000] text-white overflow-hidden">
 <FooterCTA/>
 
      {/* Glow Background */}
     <div className="absolute top-0 left-0 w-96 h-96 bg-[#29B6F0]/10 blur-[140px] rounded-full" />
<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B93FC9]/10 blur-[140px] rounded-full" />
     

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

            <p className="text-[#A0A0A8] leading-relaxed">
              A technology partner for small and mid-size businesses.
              We modernize systems, build software, unlock data insights,
              and keep digital operations secure.
            </p>

            {/* MINI INDICATORS */}
           <div className="mt-6 flex gap-2">
  <div className="h-2.5 w-2.5 rounded-full bg-[#29B6F0]" />
  <div className="h-2.5 w-2.5 rounded-full bg-[#3E7BD6]" />
  <div className="h-2.5 w-2.5 rounded-full bg-[#B93FC9]" />
</div>

          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-6 text-lg font-semibold bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
  Quick Links
</h3>

            <ul className="space-y-3 text-[#A0A0A8]">
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
                    className="hover:text-[#29B6F0] transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="mb-6 text-lg font-semibold bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
  Services
</h3>

           <ul className="space-y-3 text-[#A0A0A8]">

              {[
                ["Modernize", "/services/modernize/modernizehero"],
                ["See Your Data", "/services/seeyourdata/seeyourdatahero"],
                ["Build Software", "/services/buildsoftware/herosection"],
                ["Stay Secure", "/services/staysecure/staysecureherosection"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-[#7A4FD1] transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div data-aos="fade-up" data-aos-delay="300">

           <h3 className="mb-6 text-lg font-semibold bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
  Contact
</h3>

            <div className="space-y-4 text-[#A0A0A8]">

              {[
                ["Email", "info@beavertek.com"],
                ["USA", "+1 (949) 885-6193"],
                ["India", "+91 99620 92583"],
                ["Headquarters", "Irvine, California"],
                ["Engineering Hub", "India"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[#3E7BD6] font-medium text-sm">
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
           border border-[#2A2A30]
bg-[#121212]
            p-6
            flex flex-col md:flex-row
            justify-between items-center
            gap-4
          "
        >

          <p className="text-[#A0A0A8] text-center md:text-left">
            Building scalable digital systems with modern engineering & AI-driven solutions.
          </p>

          <div className="
            flex gap-3 text-sm
            text-white
          ">
            <span className="px-4 py-2 rounded-[999px] bg-[#000000] border border-[#2A2A30]">
              Scalable Systems
            </span>

            <span className="px-4 py-2 rounded-[999px] bg-[#000000] border border-[#2A2A30]">
              AI Solutions
            </span>

            <span className="px-4 py-2 rounded-[999px] bg-[#000000] border border-[#2A2A30]">
              Cloud Native
            </span>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="
         border-t border-[#2A2A30]
          mt-10 pt-8
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">

          <p className="text-[#7A7A7A] text-center md:text-left">
            © {new Date().getFullYear()} BeaverTek. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-[#A0A0A8]">
            <Link href="#" className="hover:text-[#29B6F0]">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-[#7A4FD1]">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}