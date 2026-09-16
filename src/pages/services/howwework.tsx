"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Howwework() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className=""
        data-aos="fade-up"
        data-aos-duration="850"
      >
        <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.06)]">

          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">

            {/* =========================================================
                LEFT SECTION
            ========================================================= */}

            <div className="p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9">

              {/* Badge */}

              <span
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="80"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#3E7BD6]/20
                  bg-[#F5F8FF]
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  tracking-[0.16em]
                  text-[#3E7BD6]
                  sm:text-xs
                "
              >
                HOW WE WORK
              </span>

              {/* =====================================================
                  TITLE
              ====================================================== */}

              <h2
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="130"
                className="
                  mt-4
                  max-w-xl
                  text-3xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  sm:text-4xl
                  lg:text-[40px]
                  xl:text-[44px]
                "
              >
                <span className="text-[#111827]">
                  Senior people.
                </span>

                <br />

                <span
                  className="
                    bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Practical delivery.
                </span>
              </h2>

              {/* Gradient line */}

              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="180"
                className="
                  mt-4
                  h-[3px]
                  w-14
                  rounded-full
                  bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                "
              />

              {/* Description 1 */}

              <p
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="220"
                className="
                  mt-5
                  max-w-2xl
                  text-[13px]
                  leading-6
                  text-[#4B5563]
                  sm:text-sm
                  sm:leading-6
                "
              >
                Technology projects succeed when experienced people stay
                involved from planning through delivery. That's why every
                BeaverTek engagement is led by senior consultants who focus
                on outcomes not unnecessary complexity.
              </p>

              {/* Description 2 */}

              <p
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="270"
                className="
                  mt-3.5
                  max-w-2xl
                  text-[13px]
                  leading-6
                  text-[#6B7280]
                  sm:text-sm
                  sm:leading-6
                "
              >
                Whether we're modernizing infrastructure, building software,
                improving data visibility, or strengthening cybersecurity,
                our process stays collaborative, transparent, and measurable.
              </p>

              {/* =========================================================
                  PROCESS CARDS
              ========================================================= */}

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">

                {[
                  {
                    title: "Discover",
                    text: "Understand your business, systems, goals, and challenges before recommending technology.",
                  },
                  {
                    title: "Design",
                    text: "Create scalable architectures and implementation plans tailored to your organization.",
                  },
                  {
                    title: "Deliver",
                    text: "Build, deploy, migrate, and integrate with minimal disruption to business operations.",
                  },
                  {
                    title: "Improve",
                    text: "Monitor, optimize, and continuously improve performance, security, and reliability.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={320 + index * 80}
                    className="
                      group
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-[#F9FAFB]
                      p-3.5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#3E7BD6]/40
                      hover:bg-white
                      hover:shadow-[0_10px_30px_rgba(62,123,214,0.09)]
                      sm:p-4
                    "
                  >
                    {/* Process Title */}

                    <h4
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={360 + index * 80}
                      className="
                        text-sm
                        font-bold
                        text-[#111827]
                        transition-all
                        duration-300
                        group-hover:bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                        group-hover:bg-clip-text
                        group-hover:text-transparent
                        sm:text-[15px]
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Process Description */}

                    <p
                      data-aos="fade-up"
                      data-aos-duration="650"
                      data-aos-delay={390 + index * 80}
                      className="
                        mt-2
                        text-[11px]
                        leading-5
                        text-[#6B7280]
                        sm:text-xs
                        sm:leading-5
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* =========================================================
                RIGHT SECTION
            ========================================================= */}

            <div
              className="
                relative
                overflow-hidden
                border-t
                border-[#E5E7EB]
                bg-[#F8FAFC]
                p-5
                sm:p-6
                md:p-7
                lg:border-l
                lg:border-t-0
                lg:p-8
                xl:p-9
              "
            >

              {/* Soft background gradients */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#29B6F0]/[0.07]
                  blur-[70px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#B93FC9]/[0.06]
                  blur-[70px]
                "
              />

              {/* Decorative vertical line */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  right-8
                  top-8
                  hidden
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-[#3E7BD6]/10
                  to-transparent
                  sm:block
                "
              />

              <div className="relative z-10">

                {/* =====================================================
                    RIGHT TITLE
                ====================================================== */}

                <h3
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="
                    max-w-md
                    text-2xl
                    font-black
                    leading-tight
                    sm:text-3xl
                    lg:text-[32px]
                  "
                >
                  <span className="text-[#111827]">
                    Why clients choose{" "}
                  </span>

                  <span
                    className="
                      bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    BeaverTek
                  </span>
                </h3>

                {/* Small line */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="80"
                  data-aos-duration="700"
                  className="
                    mt-3
                    h-[3px]
                    w-12
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                  "
                />

                {/* =======================================================
                    FEATURES
                ======================================================= */}

                <div className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">

                  {/* Senior expertise */}

                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="150"
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-white
                      p-4
                      shadow-[0_5px_18px_rgba(0,0,0,0.035)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#29B6F0]/30
                      hover:shadow-[0_12px_30px_rgba(41,182,240,0.10)]
                      sm:p-4.5
                    "
                  >
                    {/* Gradient hover bar */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        origin-bottom
                        scale-y-0
                        bg-[linear-gradient(180deg,#29B6F0,#3E7BD6)]
                        transition-transform
                        duration-400
                        group-hover:scale-y-100
                      "
                    />

                    <div className="min-w-0">

                      <h4
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="220"
                        className="
                          text-sm
                          font-bold
                          text-[#111827]
                          transition-colors
                          duration-300
                          group-hover:text-[#29B6F0]
                          sm:text-[15px]
                        "
                      >
                        Senior expertise
                      </h4>

                      <p
                        data-aos="fade-up"
                        data-aos-duration="650"
                        data-aos-delay="260"
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-[#6B7280]
                          sm:text-xs
                          sm:leading-5.5
                        "
                      >
                        Experienced consultants stay engaged throughout the
                        project—not just during sales.
                      </p>

                    </div>
                  </div>

                  {/* Business-first thinking */}

                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="230"
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-white
                      p-4
                      shadow-[0_5px_18px_rgba(0,0,0,0.035)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#7A4FD1]/30
                      hover:shadow-[0_12px_30px_rgba(122,79,209,0.10)]
                      sm:p-4.5
                    "
                  >
                    {/* Gradient hover bar */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        origin-bottom
                        scale-y-0
                        bg-[linear-gradient(180deg,#3E7BD6,#7A4FD1)]
                        transition-transform
                        duration-400
                        group-hover:scale-y-100
                      "
                    />

                    <div className="min-w-0">

                      <h4
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                        className="
                          text-sm
                          font-bold
                          text-[#111827]
                          transition-colors
                          duration-300
                          group-hover:text-[#7A4FD1]
                          sm:text-[15px]
                        "
                      >
                        Business-first thinking
                      </h4>

                      <p
                        data-aos="fade-up"
                        data-aos-duration="650"
                        data-aos-delay="340"
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-[#6B7280]
                          sm:text-xs
                          sm:leading-5.5
                        "
                      >
                        Every recommendation is aligned with measurable
                        business outcomes.
                      </p>

                    </div>
                  </div>

                  {/* Long-term partnership */}

                  <div
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="310"
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-white
                      p-4
                      shadow-[0_5px_18px_rgba(0,0,0,0.035)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#B93FC9]/30
                      hover:shadow-[0_12px_30px_rgba(185,63,201,0.10)]
                      sm:p-4.5
                    "
                  >
                    {/* Gradient hover bar */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        origin-bottom
                        scale-y-0
                        bg-[linear-gradient(180deg,#7A4FD1,#B93FC9)]
                        transition-transform
                        duration-400
                        group-hover:scale-y-100
                      "
                    />

                    <div className="min-w-0">

                      <h4
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="380"
                        className="
                          text-sm
                          font-bold
                          text-[#111827]
                          transition-colors
                          duration-300
                          group-hover:text-[#B93FC9]
                          sm:text-[15px]
                        "
                      >
                        Long-term partnership
                      </h4>

                      <p
                        data-aos="fade-up"
                        data-aos-duration="650"
                        data-aos-delay="420"
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-[#6B7280]
                          sm:text-xs
                          sm:leading-5.5
                        "
                      >
                        We continue supporting clients long after projects
                        launch through optimization and ongoing guidance.
                      </p>

                    </div>
                  </div>

                </div>

                {/* Bottom gradient accent */}

                <div
                  data-aos="fade-left"
                  data-aos-delay="480"
                  data-aos-duration="700"
                  className="
                    mt-6
                    h-[2px]
                    w-full
                    rounded-full
                    bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                    opacity-30
                  "
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howwework;