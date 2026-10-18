
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Eye, Target, Sparkles, ArrowDownRight } from "lucide-react";

function Our_vissionmission() {
  const beaverTekGradient =
    "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    const handleResize = () => AOS.refresh();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      AOS.refreshHard();
    };
  }, []);

  const gradientTextStyle = {
    background: beaverTekGradient,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
  };

  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-[85%] -translate-x-1/2 rounded-full bg-[#29B6F0]/[0.06] blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Main Heading */}
        <header
          className="mx-auto mb-7 max-w-3xl text-center sm:mb-9 lg:mb-10"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A0A0A8] sm:text-xs sm:tracking-[0.3em]">
            Who We Are
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Our Vision{" "}
            <span style={gradientTextStyle}>&amp; Mission</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#A0A0A8] sm:mt-4 sm:text-base sm:leading-7">
            Building meaningful technology that empowers businesses to make
            smarter decisions and achieve lasting growth.
          </p>
        </header>

        {/* Combined Vision and Mission Box */}
        <div className="relative mx-auto w-full overflow-hidden bg-[#08080A]">
          {/* VISION SECTION */}
          <article
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-once="true"
            className="relative overflow-hidden border-0 bg-white px-5 pb-11 pt-7 sm:px-8 sm:pb-12 sm:pt-8 md:px-10 lg:px-14 lg:pb-14 lg:pt-10"
          >
            {/* Vision Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#29B6F0]/[0.08] blur-[90px] sm:h-64 sm:w-64"
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-5 sm:gap-6 md:grid-cols-[0.8fr_1.5fr] md:gap-9 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
              {/* Vision Title - Left */}
              <div
                className="min-w-0"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center bg-[#29B6F0]/10 text-[#238FD0] sm:mb-4 sm:h-12 sm:w-12">
                  <Eye size={24} strokeWidth={1.7} />
                </div>

                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#73737D] sm:text-xs sm:tracking-[0.22em]">
                  Our Perspective
                </p>

                <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111116] sm:text-3xl lg:text-4xl">
                  Our{" "}
                  <span style={gradientTextStyle}>Vision</span>
                </h3>

                <div
                  className="mt-3 h-1 w-11 sm:mt-4 sm:w-12"
                  style={{ background: beaverTekGradient }}
                />
              </div>

              {/* Vision Description - Right */}
              <div
                className="min-w-0"
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                <p className="text-sm leading-7 text-[#55555F] sm:text-base sm:leading-8">
                  To be a trusted technology partner, transforming the way
                  businesses use data to make smarter decisions, drive
                  innovation, and achieve sustainable growth in an increasingly
                  data-driven world.
                </p>

                <div className="mt-4 flex items-center gap-2.5 text-xs font-semibold text-[#45454F] sm:mt-5 sm:text-sm">
                  <Sparkles
                    size={16}
                    className="shrink-0 text-[#3E7BD6]"
                  />
                  <span>Innovation &amp; Growth</span>
                </div>
              </div>
            </div>

            {/* Diagonal Transition */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-7 translate-y-px bg-[#08080A] [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:h-9 lg:h-10"
            />
          </article>

          {/* MISSION SECTION */}
          <article
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-once="true"
            className="relative overflow-hidden border-0 bg-[#08080A] px-5 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8 md:px-10 lg:px-14 lg:pb-10 lg:pt-9"
          >
            {/* Mission Ambient Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 h-52 w-52 rounded-full bg-[#7A4FD1]/[0.10] blur-[90px] sm:h-64 sm:w-64"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-[#29B6F0]/[0.06] blur-[85px]"
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-5 sm:gap-6 md:grid-cols-[1.5fr_0.8fr] md:gap-9 lg:grid-cols-[1.5fr_0.85fr] lg:gap-14">
              {/* Mission Description - Left */}
              <div
                className="order-2 min-w-0 md:order-1"
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                <p className="text-sm leading-7 text-[#C0C0C8] sm:text-base sm:leading-8">
                  At BeaverTek, we focus on giving clients precise and reliable
                  data. We ensure this information is accessible whenever and
                  wherever they need it. Our goal is to enable smarter
                  decisions and drive meaningful growth. Ultimately, we help
                  businesses succeed in an increasingly data-driven world.
                </p>

                {/* Mission Statement */}
                <div className="mt-4 border-l-2 border-[#7A4FD1] py-0.5 pl-3 sm:mt-5 sm:pl-4">
                  <p className="text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                    Empower our clients with accurate, actionable data anytime,
                    anywhere so they can thrive in a data-driven world.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2.5 text-xs font-semibold text-[#A0A0A8] sm:mt-5 sm:text-sm">
                  <Sparkles
                    size={16}
                    className="shrink-0 text-[#7A4FD1]"
                  />
                  <span>Data &amp; Decisions</span>
                </div>
              </div>

              {/* Mission Title - Right */}
              <div
                className="order-1 min-w-0 md:order-2"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center bg-white/[0.06] text-[#29B6F0] sm:mb-4 sm:h-12 sm:w-12">
                  <Target size={24} strokeWidth={1.7} />
                </div>

                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0A0A8] sm:text-xs sm:tracking-[0.22em]">
                  Our Purpose
                </p>

                <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Our{" "}
                  <span style={gradientTextStyle}>Mission</span>
                </h3>

                <div
                  className="mt-3 h-1 w-11 sm:mt-4 sm:w-12"
                  style={{ background: beaverTekGradient }}
                />

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#A0A0A8] sm:mt-5 sm:text-sm">
                  <span>Purpose-driven technology</span>
                  <ArrowDownRight
                    size={16}
                    className="shrink-0 text-[#29B6F0]"
                    strokeWidth={1.6}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Our_vissionmission;
