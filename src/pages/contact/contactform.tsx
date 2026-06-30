"use client";
import React from "react";
import App_layout from "@/component/layout/app_layout";
import Faqsection from "./faqsection";
import { useState } from "react";
function Contactform() {
const [showPopup, setShowPopup] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  setShowPopup(true);
  form.reset();

  setTimeout(() => {
    setShowPopup(false);
  }, 4000);
};

  return (
    <div>
      {/* ================= Contact Section ================= */}

      <section className="bg-[#EAF1F7] py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* ================= Left ================= */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="bg-white rounded-[18px] shadow-xl p-7 lg:p-8"
            >
              <h2 className="text-3xl font-bold text-[#0B0F14] mb-7">
                Start the Conversation
              </h2>

              <form className="space-y-5">

                {/* Name */}

                <div data-aos="fade-up" data-aos-delay="100">
                  <label className="block font-semibold text-[#0B0F14] mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-[18px] border border-gray-300 px-5 py-3 outline-none transition-all duration-300 focus:border-[#45A6E5] focus:ring-4 focus:ring-[#45A6E5]/20"
                  />
                </div>

                {/* Email */}

                <div data-aos="fade-up" data-aos-delay="150">
                  <label className="block font-semibold text-[#0B0F14] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-[18px] border border-gray-300 px-5 py-3 outline-none transition-all duration-300 focus:border-[#45A6E5] focus:ring-4 focus:ring-[#45A6E5]/20"
                  />
                </div>

                {/* Company */}

                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block font-semibold text-[#0B0F14] mb-2">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-[18px] border border-gray-300 px-5 py-3 outline-none transition-all duration-300 focus:border-[#45A6E5] focus:ring-4 focus:ring-[#45A6E5]/20"
                  />
                </div>

                {/* Select */}

                <div data-aos="fade-up" data-aos-delay="250">
                  <label className="block font-semibold text-[#0B0F14] mb-2">
                    What can we help with?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select className="w-full rounded-[18px] border border-gray-300 px-5 py-3 outline-none transition-all duration-300 focus:border-[#45A6E5] focus:ring-4 focus:ring-[#45A6E5]/20">

                    <option>Select an option</option>

                    <option>Modernize my systems</option>

                    <option>Make sense of my data</option>

                    <option>Build custom software</option>

                    <option>Secure my operations</option>

                    <option>Something else</option>

                  </select>
                </div>

                {/* Message */}

                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block font-semibold text-[#0B0F14] mb-2">
                    Tell us more
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Share a few details..."
                    className="w-full rounded-[18px] border border-gray-300 px-5 py-3 resize-none outline-none transition-all duration-300 focus:border-[#45A6E5] focus:ring-4 focus:ring-[#45A6E5]/20"
                  />
                </div>

                {/* Button */}

                <button
                  data-aos="zoom-in"
                  data-aos-delay="350"
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(120deg,#45A6E5,#8FD14F)",
                  }}
                >
                  Start the Conversation
                </button>

                <p className="text-[#5B6B7B] text-sm text-center">
                  Prefer email or phone? Use the details below. We read everything.
                </p>

              </form>
            </div>

            {/* ================= Right ================= */}
<div
  data-aos="fade-left"
  data-aos-duration="1000"
  className="relative overflow-hidden rounded-[18px] p-8 lg:p-10 text-white bg-[#0B0F14] shadow-2xl flex flex-col justify-between h-full"
>

  {/* Background Glow */}

  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#45A6E5]/20 blur-[90px]" />

  <div className="absolute bottom-0 -left-16 w-60 h-60 rounded-full bg-[#8FD14F]/20 blur-[80px]" />

  <div className="relative z-10">

    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#45A6E5] text-xs uppercase tracking-[3px] font-semibold">
      Contact BeaverTek
    </span>

    

    

    <div className="mt-10 space-y-6">

      {/* Email */}

      <div
        data-aos="fade-up"
        className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] flex items-center justify-center text-xl">
          📧
        </div>

        <div>
          <p className="text-[#45A6E5] text-sm uppercase">
            Email Us
          </p>

          <h4 className="text-lg font-semibold">
            admin@beavertek.com
          </h4>
        </div>
      </div>

      {/* USA */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] flex items-center justify-center text-xl">
          🇺🇸
        </div>

        <div>
          <p className="text-[#45A6E5] text-sm uppercase">
            USA Office
          </p>

          <h4 className="text-lg font-semibold">
            +1 (949) 885-6193
          </h4>

          <p className="text-gray-400 text-sm">
            Irvine, California
          </p>
        </div>
      </div>

      {/* India */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] flex items-center justify-center text-xl">
          🇮🇳
        </div>

        <div>
          <p className="text-[#45A6E5] text-sm uppercase">
            India Engineering Center
          </p>

          <h4 className="text-lg font-semibold">
            +91 99620 92583
          </h4>

          <p className="text-gray-400 text-sm">
            Chennai, Tamil Nadu
          </p>
        </div>
      </div>

      {/* Hours */}

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45A6E5] to-[#8FD14F] flex items-center justify-center text-xl">
          ⏰
        </div>

        <div>
          <p className="text-[#45A6E5] text-sm uppercase">
            Business Hours
          </p>

          <h4 className="text-lg font-semibold">
            Monday – Friday
          </h4>

          <p className="text-gray-400 text-sm">
            9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

    </div>

    {/* Bottom Card */}
<div
  data-aos="zoom-in"
  data-aos-delay="400"
  className="mt-6 rounded-[18px] p-4 border border-[#45A6E5]/20 bg-gradient-to-r from-[#45A6E5]/10 to-[#8FD14F]/10"
>
  <h3 className="text-lg font-semibold mb-4 text-white">
    Why Work With BeaverTek?
  </h3>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#8FD14F]">
        24h
      </h2>

      <p className="text-xs text-gray-300 mt-1">
        Response Time
      </p>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#45A6E5]">
        Global
      </h2>

      <p className="text-xs text-gray-300 mt-1">
        Delivery Team
      </p>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#8FD14F]">
        AI
      </h2>

      <p className="text-xs text-gray-300 mt-1">
        First Solutions
      </p>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#45A6E5]">
        100%
      </h2>

      <p className="text-xs text-gray-300 mt-1">
        Secure Development
      </p>
    </div>

  </div>
</div>

  </div>

</div>

          </div>
        </div>
      </section>


      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            data-aos="zoom-in"
            className="bg-white rounded-3xl shadow-2xl max-w-md w-[92%] p-8 text-center"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-[#0B0F14] mt-6">
              Thanks — message sent!
            </h2>

            <p className="text-[#5B6B7B] mt-4 leading-7">
              Prototype form.
              <br />
              Wire it to email
              <br />
              <span className="font-semibold text-[#45A6E5]">
                admin@beavertek.com
              </span>
              <br />
              + your CRM when ready.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-8 w-full py-3 rounded-full text-white font-semibold hover:scale-105 transition"
              style={{
                background:
                  "linear-gradient(120deg,#45A6E5,#8FD14F)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

     

      <Faqsection />
    </div>
  );
}

export default Contactform;