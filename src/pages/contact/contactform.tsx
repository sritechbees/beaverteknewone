
"use client";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Contactform() {
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
     
     Allowed:
     - A-Z
     - a-z
     - spaces
     - .
     - '

     Numbers are NOT allowed.
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

    /* Clear error when user starts correcting the form */
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

    /* Clear form */
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
          
          py-10
          sm:py-11
          md:py-12
          lg:py-14
          px-3
          sm:px-4
          md:px-5
          lg:px-6
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
            -top-24
            -left-24
            h-72
            w-72
            sm:h-80
            sm:w-80
            rounded-full
            bg-[#29B6F0]/15
            blur-[100px]
            sm:blur-[110px]
          "
        />

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="
            absolute
            top-1/2
            right-0
            h-64
            w-64
            sm:h-72
            sm:w-72
            rounded-full
            bg-[#7A4FD1]/15
            blur-[100px]
            sm:blur-[110px]
          "
        />

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="
            absolute
            -bottom-20
            left-1/3
            h-64
            w-64
            sm:h-72
            sm:w-72
            rounded-full
            bg-[#B93FC9]/15
            blur-[100px]
            sm:blur-[110px]
          "
        />

        {/* ===================================================
            MAIN CONTAINER
        ==================================================== */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div
            className="
              grid
              lg:grid-cols-2
              gap-5
              sm:gap-6
              md:gap-7
              lg:gap-8
              items-start
            "
          >
            {/* =================================================
                LEFT — CONTACT FORM
            ================================================== */}

            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="
                bg-white
                rounded-[16px]
                sm:rounded-[18px]
                border
                border-[#E5E7EB]
                shadow-[0_20px_50px_rgba(0,0,0,.15)]
                p-4
                sm:p-5
                md:p-6
                lg:p-7
              "
            >
              {/* =================================================
                  FORM TITLE
              ================================================== */}

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  text-2xl
                  sm:text-[26px]
                  md:text-[28px]
                  lg:text-3xl
                  font-bold
                  text-[#0B0F14]
                  mb-5
                  sm:mb-6
                "
              >
                Start the Conversation
              </h2>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 sm:space-y-[18px]"
              >
                {/* =================================================
                    NAME
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="100">
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      text-[#0B0F14]
                      mb-1.5
                      sm:mb-2
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
                      sm:rounded-[16px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      text-[#0B0F14]
                      placeholder:text-[#7A7A7A]
                      px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
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
                      block
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      text-[#0B0F14]
                      mb-1.5
                      sm:mb-2
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
                      sm:rounded-[16px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      text-[#0B0F14]
                      placeholder:text-[#7A7A7A]
                      px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                    "
                  />
                </div>

                {/* =================================================
                    COMPANY
                    OPTIONAL
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="200">
                  <label
                    htmlFor="company"
                    className="
                      block
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      text-[#0B0F14]
                      mb-1.5
                      sm:mb-2
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
                      sm:rounded-[16px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      text-[#0B0F14]
                      placeholder:text-[#7A7A7A]
                      px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
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
                      block
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      text-[#0B0F14]
                      mb-1.5
                      sm:mb-2
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
                      sm:rounded-[16px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      text-[#0B0F14]
                      px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
                    "
                  >
                    <option
                      value=""
                      className="bg-white text-[#0B0F14]"
                    >
                      Select an option
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
                    OPTIONAL
                ================================================== */}

                <div data-aos="fade-up" data-aos-delay="300">
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      text-[#0B0F14]
                      mb-1.5
                      sm:mb-2
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
                      rounded-[14px]
                      sm:rounded-[16px]
                      bg-white
                      border
                      border-[#D1D5DB]
                      text-[#0B0F14]
                      placeholder:text-[#7A7A7A]
                      px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      resize-none
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#3E7BD6]
                      focus:ring-4
                      focus:ring-[#3E7BD6]/20
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
                      sm:text-sm
                      font-medium
                      text-red-600
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
                    py-3
                    sm:py-3.5
                    rounded-xl
                    text-sm
                    sm:text-[14px]
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_35px_rgba(62,123,214,.35)]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
                  }}
                >
                  Start the Conversation
                </button>

                {/* =================================================
                    FOOTER TEXT
                ================================================== */}

                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="
                    text-[#6B7280]
                    text-xs
                    sm:text-[13px]
                    leading-5
                    text-center
                  "
                >
                  Prefer email or phone? Use the details below. We read
                  everything.
                </p>
              </form>
            </div>

            {/* =================================================
                RIGHT — CONTACT INFORMATION
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="
                relative
                overflow-hidden
                rounded-[16px]
                sm:rounded-[18px]
                p-5
                sm:p-6
                md:p-7
                lg:p-8
                text-white
                bg-[#121212]
                border
                border-[#2A2A30]
                shadow-[0_20px_50px_rgba(0,0,0,.45)]
                flex
                flex-col
                justify-between
                h-full
              "
            >
              {/* =================================================
                  BACKGROUND GLOWS
              ================================================== */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-56
                  h-56
                  sm:w-64
                  sm:h-64
                  rounded-full
                  bg-[#29B6F0]/20
                  blur-[75px]
                  sm:blur-[85px]
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  -left-14
                  w-48
                  h-48
                  sm:w-56
                  sm:h-56
                  rounded-full
                  bg-[#B93FC9]/20
                  blur-[70px]
                  sm:blur-[80px]
                "
              />

              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  w-56
                  h-56
                  sm:w-60
                  sm:h-60
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#7A4FD1]/10
                  blur-[100px]
                  sm:blur-[110px]
                "
              />

              <div className="relative z-10">
                {/* =================================================
                    BADGE
                ================================================== */}

                <span
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="
                    inline-block
                    px-3
                    py-1.5
                    sm:px-4
                    sm:py-2
                    rounded-full
                    bg-white/5
                    border
                    border-[#2A2A30]
                    text-[#29B6F0]
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[2px]
                    sm:tracking-[3px]
                    font-semibold
                  "
                >
                  Contact BeaverTek
                </span>

                {/* =================================================
                    CONTACT DETAILS
                ================================================== */}

                <div
                  className="
                    mt-6
                    sm:mt-7
                    md:mt-8
                    space-y-3
                    sm:space-y-4
                  "
                >
                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="
                      flex
                      items-start
                      gap-3
                      sm:gap-4
                      p-3.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      bg-white/5
                      border
                      border-[#2A2A30]
                      hover:border-[#3E7BD6]
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        bg-gradient-to-r
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        flex
                        items-center
                        justify-center
                        text-lg
                        shadow-[0_0_25px_rgba(62,123,214,.30)]
                        shrink-0
                      "
                    >
                      📧
                    </div>

                    <div className="min-w-0">
                      <p className="text-[#29B6F0] text-xs uppercase">
                        Email Us
                      </p>

                      <h4
                        className="
                          text-base
                          sm:text-[17px]
                          font-semibold
                          text-[#FFFFFF]
                          break-words
                        "
                      >
                        info@beavertek.com
                      </h4>
                    </div>
                  </div>

                  {/* =================================================
                      USA
                  ================================================== */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                      flex
                      items-start
                      gap-3
                      sm:gap-4
                      p-3.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      bg-white/5
                      border
                      border-[#2A2A30]
                      hover:border-[#3E7BD6]
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        bg-gradient-to-r
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        flex
                        items-center
                        justify-center
                        text-lg
                        shadow-[0_0_25px_rgba(62,123,214,.30)]
                        shrink-0
                      "
                    >
                      🇺🇸
                    </div>

                    <div className="min-w-0">
                      <p className="text-[#29B6F0] text-xs uppercase">
                        USA Office
                      </p>

                      <h4 className="text-base sm:text-[17px] font-semibold text-[#FFFFFF]">
                        +1 (949) 885-6193
                      </h4>

                      <p className="text-[#A0A0A8] text-xs sm:text-[13px] mt-0.5">
                        Irvine, California
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      INDIA
                  ================================================== */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="
                      flex
                      items-start
                      gap-3
                      sm:gap-4
                      p-3.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      bg-white/5
                      border
                      border-[#2A2A30]
                      hover:border-[#3E7BD6]
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        bg-gradient-to-r
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        flex
                        items-center
                        justify-center
                        text-lg
                        shadow-[0_0_25px_rgba(62,123,214,.30)]
                        shrink-0
                      "
                    >
                      🇮🇳
                    </div>

                    <div className="min-w-0">
                      <p className="text-[#29B6F0] text-xs uppercase">
                        India Office
                      </p>

                      <h4 className="text-base sm:text-[17px] font-semibold text-[#FFFFFF]">
                        +91 99620 92583
                      </h4>

                      <p className="text-[#A0A0A8] text-xs sm:text-[13px] mt-0.5">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      HOURS
                  ================================================== */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="
                      flex
                      items-start
                      gap-3
                      sm:gap-4
                      p-3.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      bg-white/5
                      border
                      border-[#2A2A30]
                      hover:border-[#3E7BD6]
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        bg-gradient-to-r
                        from-[#29B6F0]
                        via-[#3E7BD6]
                        via-[#7A4FD1]
                        to-[#B93FC9]
                        flex
                        items-center
                        justify-center
                        text-lg
                        shadow-[0_0_25px_rgba(62,123,214,.30)]
                        shrink-0
                      "
                    >
                      ⏰
                    </div>

                    <div className="min-w-0">
                      <p className="text-[#29B6F0] text-xs uppercase">
                        Business Hours
                      </p>

                      <h4 className="text-base sm:text-[17px] font-semibold text-[#FFFFFF]">
                        Monday – Friday
                      </h4>

                      <p className="text-[#A0A0A8] text-xs sm:text-[13px] mt-0.5">
                        9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    WHY WORK WITH BEAVERTEK
                ================================================== */}

                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="
                    mt-4
                    sm:mt-5
                    rounded-[16px]
                    sm:rounded-[18px]
                    p-3.5
                    sm:p-4
                    border
                    border-[#2A2A30]
                    bg-gradient-to-r
                    from-[#29B6F0]/10
                    via-[#3E7BD6]/10
                    via-[#7A4FD1]/10
                    to-[#B93FC9]/10
                  "
                >
                  <h3
                    className="
                      text-base
                      sm:text-[17px]
                      font-semibold
                      mb-3
                      sm:mb-4
                      text-[#FFFFFF]
                    "
                  >
                    Why Work With BeaverTek?
                  </h3>

                  <div
                    className="
                      grid
                      grid-cols-2
                      lg:grid-cols-4
                      gap-2
                      sm:gap-3
                    "
                  >
                    {/* 24h */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="450"
                      className="text-center"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-[#29B6F0]">
                        24h
                      </h2>

                      <p className="text-[10px] sm:text-xs text-[#A0A0A8] mt-0.5 sm:mt-1">
                        Response Time
                      </p>
                    </div>

                    {/* Global */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="text-center"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-[#3E7BD6]">
                        Global
                      </h2>

                      <p className="text-[10px] sm:text-xs text-[#A0A0A8] mt-0.5 sm:mt-1">
                        Delivery Team
                      </p>
                    </div>

                    {/* AI */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="550"
                      className="text-center"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-[#7A4FD1]">
                        AI
                      </h2>

                      <p className="text-[10px] sm:text-xs text-[#A0A0A8] mt-0.5 sm:mt-1">
                        First Solutions
                      </p>
                    </div>

                    {/* 100% */}

                    <div
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="text-center"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-[#B93FC9]">
                        100%
                      </h2>

                      <p className="text-[10px] sm:text-xs text-[#A0A0A8] mt-0.5 sm:mt-1">
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

      {/* =====================================================
          SUCCESS POPUP
      ====================================================== */}

     
{showPopup && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      flex
      items-start
      justify-end
      bg-black/70
      backdrop-blur-md
      px-3
      pt-6
      sm:pt-8
      md:pt-10
      pr-3
      sm:pr-6
      md:pr-8
    "
  >
    <div
      data-aos="zoom-in"
      className="
        relative
        overflow-hidden
        bg-[#121212]
        border
        border-[#2A2A30]
        rounded-2xl
        sm:rounded-3xl
        shadow-[0_25px_60px_rgba(0,0,0,.45)]
        max-w-md
        w-[92%]
        sm:w-[420px]
        p-5
        sm:p-6
        md:p-7
        text-center
      "
    >
      {/* =================================================
          POPUP BACKGROUND GLOWS
      ================================================== */}

      <div
        className="
          absolute
          -top-16
          -right-16
          w-44
          h-44
          sm:w-52
          sm:h-52
          rounded-full
          bg-[#29B6F0]/15
          blur-[70px]
        "
      />

      <div
        className="
          absolute
          -top-72
          left-1/2
          -translate-x-1/2
          w-44
          h-44
          sm:w-52
          sm:h-52
          rounded-full
          bg-[#B93FC9]/15
          blur-[70px]
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
            w-16
            h-16
            sm:w-[72px]
            sm:h-[72px]
            rounded-full
            bg-[#22C55E]/15
            border
            border-[#22C55E]/30
            flex
            items-center
            justify-center
          "
        >
          <svg
            className="
              w-8
              h-8
              sm:w-9
              sm:h-9
              text-[#22C55E]
            "
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
            text-2xl
            sm:text-3xl
            font-bold
            text-[#FFFFFF]
            mt-4
            sm:mt-5
          "
        >
          Thanks — message sent !
        </h2>

        {/* =================================================
            POPUP MESSAGE
        ================================================== */}

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            text-[#A0A0A8]
            text-sm
            sm:text-[15px]
            mt-3
            sm:mt-4
            leading-6
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
            sm:mt-7
            w-full
            py-2.5
            sm:py-3
            rounded-full
            text-sm
            sm:text-[14px]
            text-white
            font-semibold
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(62,123,214,.35)]
            transition-all
            duration-300
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

export default Contactform;

