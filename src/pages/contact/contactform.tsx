
import React from 'react'
import App_layout from '@/component/layout/app_layout'
import Faqsection from './faqsection'
function Contactform() {
  return (
    <div>
      
{/* ================= Contact Section ================= */}
<section className="bg-[#E8EFF4] py-20 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* ================= Left - Contact Form ================= */}
      <div
        data-aos="fade-right"
        className="bg-white rounded-3xl shadow-xl p-8 lg:p-10"
      >
        <h2 className="text-3xl font-bold text-[#161E2F] mb-8">
          Start the Conversation
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[#161E2F] font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-[#6B91AD] focus:ring-2 focus:ring-[#6B91AD]/20 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#161E2F] font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-[#6B91AD] focus:ring-2 focus:ring-[#6B91AD]/20 outline-none transition"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-[#161E2F] font-semibold mb-2">
              Company
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-[#6B91AD] focus:ring-2 focus:ring-[#6B91AD]/20 outline-none transition"
            />
          </div>

          {/* Select */}
          <div>
            <label className="block text-[#161E2F] font-semibold mb-2">
              What can we help with?{" "}
              <span className="text-red-500">*</span>
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-[#6B91AD] focus:ring-2 focus:ring-[#6B91AD]/20 outline-none transition">
              <option>Select an option</option>
              <option>Modernize my systems</option>
              <option>Make sense of my data</option>
              <option>Build custom software</option>
              <option>Secure my operations</option>
              <option>Something else</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#161E2F] font-semibold mb-2">
              Tell us more
            </label>

            <textarea
              rows={5}
              placeholder="Share a few details..."
              className="w-full rounded-xl border border-gray-300 px-5 py-3 resize-none focus:border-[#6B91AD] focus:ring-2 focus:ring-[#6B91AD]/20 outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#161E2F] hover:bg-[#23314F] text-white font-semibold py-4 rounded-xl transition duration-300 hover:scale-[1.02]"
          >
            Start the conversation
          </button>

          <p className="text-[#1A1A1A] text-sm text-center">
            Prefer email or phone? Use the details below. We read everything.
          </p>
        </form>
      </div>

      {/* ================= Right - Contact Details ================= */}
      <div
        data-aos="fade-left"
        className="bg-[#161E2F] rounded-3xl shadow-xl p-8 lg:p-10 text-white h-full flex flex-col justify-center"
      >
        <span className="text-[#6B91AD] uppercase tracking-[4px] text-sm font-semibold">
          Contact Details
        </span>

        <h3 className="text-4xl font-bold mt-4 mb-8">
          Get in Touch
        </h3>

        <div className="space-y-6">

          <div className="border-b border-white/10 pb-5">
            <p className="text-[#6B91AD] text-sm uppercase">
              Email
            </p>
            <p className="text-lg mt-1">
              info@beavertek.com
            </p>
          </div>

          <div className="border-b border-white/10 pb-5">
            <p className="text-[#6B91AD] text-sm uppercase">
              Phone (USA)
            </p>
            <p className="text-lg mt-1">
              +1 (949) 885-6193
            </p>
          </div>

          <div className="border-b border-white/10 pb-5">
            <p className="text-[#6B91AD] text-sm uppercase">
              Phone (India)
            </p>
            <p className="text-lg mt-1">
              +91 99620 92583
            </p>
          </div>

          <div className="border-b border-white/10 pb-5">
            <p className="text-[#6B91AD] text-sm uppercase">
              Headquarters
            </p>
            <p className="text-lg mt-1">
              Irvine, California
            </p>
          </div>

          <div className="border-b border-white/10 pb-5">
            <p className="text-[#6B91AD] text-sm uppercase">
              Engineering Team
            </p>
            <p className="text-lg mt-1">
              India
            </p>
          </div>

          <div>
            <p className="text-[#6B91AD] text-sm uppercase">
              Visits
            </p>
            <p className="text-lg mt-1">
              By appointment only — no walk-ins
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
<Faqsection/>
        </div>
  )
}

export default Contactform