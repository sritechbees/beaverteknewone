
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Clock3,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Contactformtalk() {
  /* =========================================================
     FORM STATE
  ========================================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    help: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  /* =========================================================
     AOS
  ========================================================= */

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  /* =========================================================
     NAME VALIDATION
  ========================================================= */

  const isValidName = (value: string) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ.'\s]+$/.test(value.trim());
  };

  /* =========================================================
     EMAIL VALIDATION
  ========================================================= */

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  };

  /* =========================================================
     HANDLE INPUT CHANGE
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const help = formData.help;

    /* =======================================================
       REQUIRED FIELD CHECK
    ======================================================= */

    if (!name || !email || !help) {
      setError("Please fill in all required fields.");
      return;
    }

    /* =======================================================
       NAME CHECK
    ======================================================= */

    if (!isValidName(name)) {
      setError("Please enter a valid name using letters only.");
      return;
    }

    /* =======================================================
       EMAIL CHECK
    ======================================================= */

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    /* =======================================================
       SUCCESS
    ======================================================= */

    setError("");
    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      help: "",
      message: "",
    });
  };

  /* =========================================================
     CLOSE SUCCESS POPUP
  ========================================================= */

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(135deg,#000000_0%,#0A0A0A_30%,#121212_70%,#1A1A1E_100%)]
          px-3
          py-10
          sm:px-4
          sm:py-11
          md:px-5
          md:py-12
          lg:px-6
          lg:py-14
          xl:px-8
        "
      >
        {/* ===================================================
            BACKGROUND GLOW
        ==================================================== */}

        <div
          data-aos="fade-down"
          data-aos-duration="900"
          className="
            absolute
            -left-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#29B6F0]/10
            blur-[90px]
            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="
            absolute
            right-0
            top-1/2
            h-60
            w-60
            rounded-full
            bg-[#7A4FD1]/10
            blur-[90px]
            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="
            absolute
            -bottom-20
            left-1/3
            h-56
            w-56
            rounded-full
            bg-[#B93FC9]/10
            blur-[90px]
            sm:h-64
            sm:w-64
            sm:blur-[100px]
          "
        />

        {/* ===================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div
            className="
              grid
              items-stretch
              gap-6
              lg:grid-cols-2
              lg:gap-8
              xl:gap-10
            "
          >
            {/* =================================================
                LEFT — CONTACT FORM
            ================================================== */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="
                flex
                h-full
                flex-col
                rounded-[16px]
                border
                border-[#E5E7EB]
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                sm:rounded-[18px]
                sm:p-5
                md:p-6
                lg:p-7
              "
            >
              {/* =================================================
                  FORM HEADING
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-5 sm:mb-6"
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#3E7BD6]
                    sm:text-sm
                  "
                >
                  Let&apos;s Work Together
                </p>

                <h2
                  className="
                    mt-1.5
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#0B0F14]
                    sm:mt-2
                    sm:text-[26px]
                    md:text-[28px]
                    lg:text-3xl
                  "
                >
                  Contact Us
                </h2>

                <p
                  className="
                    mt-2.5
                    max-w-xl
                    text-sm
                    leading-6
                    text-[#6B7280]
                    sm:mt-3
                    sm:text-[15px]
                    sm:leading-6
                  "
                >
                  Email us at{" "}
                  <a
                    href="mailto:info@beavertek.com"
                    className="
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      bg-clip-text
                      font-semibold
                      text-transparent
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    info@beavertek.com
                  </a>{" "}
                  or message us here.
                </p>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-1 flex-col space-y-4 sm:space-y-[18px]"
              >
                {/* =================================================
                    NAME
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="100">
                  <label
                    htmlFor="name"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-semibold
                      text-[#0B0F14]
                      sm:mb-2
                      sm:text-[14px]
                    "
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="
                      w-full
                      rounded-[14px]
                      border
                      border-[#D1D5DB]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-[#0B0F14]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#7A7A7A]
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                      sm:rounded-[16px]
                      sm:py-3
                    "
                  />
                </div>

                {/* =================================================
                    EMAIL
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="150">
                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-semibold
                      text-[#0B0F14]
                      sm:mb-2
                      sm:text-[14px]
                    "
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="
                      w-full
                      rounded-[14px]
                      border
                      border-[#D1D5DB]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-[#0B0F14]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#7A7A7A]
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                      sm:rounded-[16px]
                      sm:py-3
                    "
                  />
                </div>

                {/* =================================================
                    COMPANY
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="200">
                  <label
                    htmlFor="company"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-semibold
                      text-[#0B0F14]
                      sm:mb-2
                      sm:text-[14px]
                    "
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                    className="
                      w-full
                      rounded-[14px]
                      border
                      border-[#D1D5DB]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-[#0B0F14]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#7A7A7A]
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                      sm:rounded-[16px]
                      sm:py-3
                    "
                  />
                </div>

                {/* =================================================
                    WHAT CAN WE HELP WITH
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="250">
                  <label
                    htmlFor="help"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-semibold
                      text-[#0B0F14]
                      sm:mb-2
                      sm:text-[14px]
                    "
                  >
                    What can we help with?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="help"
                    name="help"
                    value={formData.help}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-[14px]
                      border
                      border-[#D1D5DB]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-[#0B0F14]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                      sm:rounded-[16px]
                      sm:py-3
                    "
                  >
                    <option value="">Select an option</option>

                    <option value="End-to-End Digital Transformation">
                      End-to-End Digital Transformation
                    </option>

                    <option value="Cloud Cost Optimization (FinOps)">
                      Cloud Cost Optimization (FinOps)
                    </option>

                    <option value="DevOps & DevSecOps">
                      DevOps & DevSecOps
                    </option>

                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>

                    <option value="Custom Software Development & Maintenance">
                      Custom Software Development & Maintenance
                    </option>

                    <option value="Data Analytics and Reporting">
                      Data Analytics and Reporting
                    </option>

                    <option
                      value="Modernize my systems"
                      className="bg-white text-[#0B0F14]"
                    >
                      Modernize my systems
                    </option>

                    <option
                      value="Make sense of my data"
                      className="bg-white text-[#0B0F14]"
                    >
                      Make sense of my data
                    </option>

                    <option
                      value="Build custom software"
                      className="bg-white text-[#0B0F14]"
                    >
                      Build custom software
                    </option>

                    <option
                      value="Secure my operations"
                      className="bg-white text-[#0B0F14]"
                    >
                      Secure my operations
                    </option>

                    <option
                      value="Something else"
                      className="bg-white text-[#0B0F14]"
                    >
                      Something else
                    </option>
                  </select>
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="300">
                  <label
                    htmlFor="message"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-semibold
                      text-[#0B0F14]
                      sm:mb-2
                      sm:text-[14px]
                    "
                  >
                    Tell us more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share a few details..."
                    className="
                      w-full
                      resize-none
                      rounded-[14px]
                      border
                      border-[#D1D5DB]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-[#0B0F14]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#7A7A7A]
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                      sm:rounded-[16px]
                      sm:py-3
                    "
                  />
                </div>

                {/* =================================================
                    ERROR MESSAGE
                ================================================== */}

                {error && (
                  <p
                    data-aos="fade-up"
                    className="
                      rounded-lg
                      border
                      border-red-200
                      bg-red-50
                      px-3
                      py-2.5
                      text-center
                      text-xs
                      font-medium
                      text-red-600
                      sm:text-sm
                    "
                  >
                    {error}
                  </p>
                )}

                {/* =================================================
                    SUBMIT BUTTON
                ================================================== */}

                <button
                  data-aos="zoom-in"
                  data-aos-delay="350"
                  type="submit"
                  className="
                    w-full
                    rounded-xl
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_35px_rgba(62,123,214,.35)]
                    sm:py-3.5
                    sm:text-[14px]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                  }}
                >
                  Send Message
                </button>

                {/* =================================================
                    FOOTER TEXT
                ================================================== */}

                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="
                    text-center
                    text-xs
                    leading-5
                    text-[#6B7280]
                    sm:text-[13px]
                  "
                >
                  Prefer email or phone? Use the details below. We read
                  everything.
                </p>
              </form>
            </div>

            {/* =================================================
                RIGHT — CONTACT BEAVERTEK
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="
                relative
                flex
                h-full
                min-h-full
                flex-col
                justify-center
                overflow-hidden
                rounded-[16px]
                border
                border-[#2A2A30]
                bg-[#121212]
                p-5
                text-white
                shadow-[0_20px_50px_rgba(0,0,0,.40)]
                sm:rounded-[18px]
                sm:p-6
                md:p-7
                lg:p-8
                xl:p-9
              "
            >
              {/* =================================================
                  SUBTLE BACKGROUND GLOW
              ================================================== */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#29B6F0]/10
                  blur-[90px]
                  sm:h-64
                  sm:w-64
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#B93FC9]/10
                  blur-[90px]
                  sm:h-64
                  sm:w-64
                "
              />

          
<div className="relative z-10 w-full">
  {/* =================================================
      RIGHT LOGO + HEADING
  ================================================== */}

  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="
      flex
      flex-col
      items-center
      text-center
    "
  >
    {/* LOGO */}
    <div
      className="
        relative
        mb-4
        h-16
        w-44
        sm:mb-5
        sm:h-[72px]
        sm:w-52
        md:mb-6
      "
    >
      <Image
        src="/contact/contactlogo.png"
        alt="BeaverTek"
        fill
        priority
        className="object-contain"
      />
    </div>

    {/* SMALL BRAND LABEL */}
    <p
      className="
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.28em]
        text-[#29B6F0]
        sm:text-xs
        md:text-sm
      "
    >
      BeaverTek
    </p>

    {/* HEADING */}
    <h3
      className="
        mt-2
        text-xl
        font-bold
        tracking-tight
        text-white
        sm:text-2xl
        md:text-[26px]
      "
    >
      Contact BeaverTek
    </h3>

    <p
      className="
        mt-2
        max-w-md
        text-xs
        leading-5
        text-[#A0A0A8]
        sm:text-sm
        sm:leading-6
      "
    >
      Let&apos;s connect and discuss how we can help move your business
      forward.
    </p>
  </div>

  {/* =================================================
      CONTACT DETAILS
  ================================================== */}

  <div
    className="
      mx-auto
      mt-7
      grid
      w-full
      max-w-xl
      gap-3
      sm:mt-8
      sm:gap-4
      md:mt-9
    "
  >
    {/* =================================================
        EMAIL
    ================================================== */}

    <a
      href="mailto:info@beavertek.com"
      data-aos="fade-up"
      data-aos-delay="150"
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        transition-all
        duration-300
        hover:border-[#29B6F0]/30
        hover:bg-white/[0.05]
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#29B6F0]/10
          text-[#29B6F0]
          transition-all
          duration-300
          group-hover:bg-[#29B6F0]/15
          group-hover:shadow-[0_0_20px_rgba(41,182,240,0.12)]
          sm:h-11
          sm:w-11
        "
      >
        <Mail
          size={19}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Email
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-[#29B6F0]
            sm:text-[15px]
          "
        >
          info@beavertek.com
        </p>
      </div>

      {/* ARROW */}
      <span
        className="
          shrink-0
          text-[#52525B]
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-[#29B6F0]
        "
      >
        →
      </span>
    </a>

    {/* =================================================
        PHONE
    ================================================== */}

    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="
        flex
        w-full
        items-start
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#3E7BD6]/10
          text-[#3E7BD6]
          sm:h-11
          sm:w-11
        "
      >
        <Phone
          size={19}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Phone
        </p>

        <div className="mt-1 space-y-0.5">
          <p className="text-sm font-semibold text-white sm:text-[15px]">
            USA: +1 (949) 885-6193
          </p>

          <p className="text-sm font-semibold text-white sm:text-[15px]">
            India: +91 99620 92583
          </p>
        </div>
      </div>
    </div>

    {/* =================================================
        INSTAGRAM
    ================================================== */}

    <a
      href="https://www.instagram.com/beavertek_ai/"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="250"
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        transition-all
        duration-300
        hover:border-[#B93FC9]/30
        hover:bg-white/[0.05]
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* INSTAGRAM ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#B93FC9]/10
          text-[#B93FC9]
          transition-all
          duration-300
          group-hover:bg-[#B93FC9]/15
          group-hover:shadow-[0_0_20px_rgba(185,63,201,0.12)]
          sm:h-11
          sm:w-11
        "
      >
        <div
          className="
            relative
            flex
            h-[18px]
            w-[18px]
            items-center
            justify-center
            rounded-[5px]
            border-[1.5px]
            border-current
          "
        >
          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              border-[1.5px]
              border-current
            "
          />

          <span
            className="
              absolute
              right-[2px]
              top-[2px]
              h-[2.5px]
              w-[2.5px]
              rounded-full
              bg-current
            "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Instagram
        </p>

        <p
          className="
            mt-1
            text-sm
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-[#B93FC9]
            sm:text-[15px]
          "
        >
          @beavertek_ai
        </p>
      </div>

      {/* ARROW */}
      <span
        className="
          shrink-0
          text-[#52525B]
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-[#B93FC9]
        "
      >
        ↗
      </span>
    </a>

    {/* =================================================
        WEBSITE
    ================================================== */}

    <a
      href="https://beavertek.com"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="300"
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        transition-all
        duration-300
        hover:border-[#29B6F0]/30
        hover:bg-white/[0.05]
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#29B6F0]/10
          text-[#29B6F0]
          transition-all
          duration-300
          group-hover:bg-[#29B6F0]/15
          group-hover:shadow-[0_0_20px_rgba(41,182,240,0.12)]
          sm:h-11
          sm:w-11
        "
      >
        <Globe
          size={19}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Website
        </p>

        <p
          className="
            mt-1
            text-sm
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-[#29B6F0]
            sm:text-[15px]
          "
        >
          beavertek.com
        </p>
      </div>

      {/* ARROW */}
      <span
        className="
          shrink-0
          text-[#52525B]
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-[#29B6F0]
        "
      >
        ↗
      </span>
    </a>

    {/* =================================================
        ADDRESS
    ================================================== */}

    <div
      data-aos="fade-up"
      data-aos-delay="350"
      className="
        flex
        w-full
        items-start
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#B93FC9]/10
          text-[#B93FC9]
          sm:h-11
          sm:w-11
        "
      >
        <MapPin
          size={19}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Address
        </p>

        <p
          className="
            mt-1
            text-sm
            font-semibold
            leading-6
            text-white
            sm:text-[15px]
          "
        >
          Irvine, CA 92620, Chennai, India
        </p>
      </div>
    </div>

    {/* =================================================
        BUSINESS HOURS
    ================================================== */}

    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="
        flex
        w-full
        items-start
        gap-3
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-4
        py-3.5
        sm:gap-4
        sm:px-5
        sm:py-4
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#3E7BD6]/10
          text-[#3E7BD6]
          sm:h-11
          sm:w-11
        "
      >
        <Clock3
          size={19}
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#7A7A7A]
            sm:text-[11px]
          "
        >
          Business Hours
        </p>

        <p className="mt-1 text-sm font-semibold text-white sm:text-[15px]">
          Monday – Friday
        </p>

        <p className="mt-0.5 text-xs text-[#A0A0A8] sm:text-[13px]">
          9:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  </div>

  {/* =================================================
      BOTTOM GRADIENT LINE
  ================================================== */}

  <div
    data-aos="fade-up"
    data-aos-delay="450"
    className="
      mx-auto
      mt-7
      h-px
      w-full
      max-w-xl
      bg-gradient-to-r
      from-[#29B6F0]
      via-[#7A4FD1]
      to-[#B93FC9]
      opacity-40
      sm:mt-8
    "
  />
</div>



              
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUCCESS POPUP — CENTERED ALL DEVICES
      ====================================================== */}

      {showPopup && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            px-3
            py-6
            backdrop-blur-md
            sm:px-5
            sm:py-8
            md:px-6
            lg:px-8
          "
        >
          <div
            data-aos="zoom-in"
            className="
              relative
              my-auto
              w-full
              max-w-[92%]
              overflow-hidden
              rounded-2xl
              border
              border-[#2A2A30]
              bg-[#121212]
              p-5
              text-center
              shadow-[0_25px_60px_rgba(0,0,0,.45)]
              sm:max-w-[420px]
              sm:rounded-3xl
              sm:p-6
              md:max-w-[440px]
              md:p-7
            "
          >
            {/* =================================================
                POPUP BACKGROUND GLOWS
            ================================================== */}

            <div
              className="
                absolute
                -right-16
                -top-16
                h-44
                w-44
                rounded-full
                bg-[#29B6F0]/15
                blur-[70px]
                sm:h-52
                sm:w-52
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-20
                h-44
                w-44
                rounded-full
                bg-[#B93FC9]/15
                blur-[70px]
                sm:h-52
                sm:w-52
              "
            />

            <div className="relative z-10">
              {/* =================================================
                  SUCCESS ICON
              ================================================== */}

              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#22C55E]/30
                  bg-[#22C55E]/15
                  sm:h-[72px]
                  sm:w-[72px]
                "
              >
                <svg
                  className="h-8 w-8 text-[#22C55E] sm:h-9 sm:w-9"
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

              {/* =================================================
                  POPUP TITLE
              ================================================== */}

              <h2
                data-aos="fade-up"
                data-aos-delay="150"
                className="
                  mt-4
                  text-2xl
                  font-bold
                  text-[#FFFFFF]
                  sm:mt-5
                  sm:text-3xl
                "
              >
                Thanks — message sent!
              </h2>

              {/* =================================================
                  POPUP MESSAGE
              ================================================== */}

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-[#A0A0A8]
                  sm:mt-4
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                Thank you for contacting BeaverTek.
                <br />
                We have received your message.
                <br />
                <span className="font-semibold text-[#29B6F0]">
                  We will get back to you shortly.
                </span>
              </p>

              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                data-aos="zoom-in"
                data-aos-delay="250"
                type="button"
                onClick={closePopup}
                className="
                  mt-6
                  w-full
                  rounded-full
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(62,123,214,.35)]
                  sm:mt-7
                  sm:py-3
                  sm:text-[14px]
                "
                style={{
                  background:
                    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactformtalk;

