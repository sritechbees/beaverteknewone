
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Overviewsection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <section
        className="
          relative
          overflow-hidden
          bg-[#050505]
          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            -left-32
            top-16
            h-60
            w-60
            rounded-full
            bg-cyan-500/10
            blur-[110px]
            sm:h-72
            sm:w-72
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-8
            h-64
            w-64
            rounded-full
            bg-violet-600/10
            blur-[130px]
            sm:h-80
            sm:w-80
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            sm:px-5
            md:px-6
            lg:px-7
          "
        >
          <div
            className="
              grid
              items-center
              gap-7
              sm:gap-8
              md:gap-10
              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* Left Content */}
            <div className="order-1">
              {/* Small Title */}
              <span
                data-aos="fade-down"
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3.5
                  py-1
                  text-[11px]
                  font-medium
                  text-cyan-300
                  backdrop-blur-xl
                  sm:px-4
                  sm:py-1.5
                  sm:text-xs
                  md:text-sm
                "
              >
                Overview
              </span>

              {/* Heading */}
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  mt-3.5
                  text-[27px]
                  font-extrabold
                  leading-[1.12]
                  text-white
                  sm:mt-4
                  sm:text-[32px]
                  md:text-4xl
                  lg:text-[42px]
                "
              >
                End-to-End

                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-[#29B6F0]
                    via-[#3E7BD6]
                    via-[#7A4FD1]
                    to-[#B93FC9]
                    bg-clip-text
                    text-transparent
                    sm:mt-1.5
                  "
                >
                  Digital Transformation
                </span>
              </h2>

              {/* Divider */}
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="
                  mt-4
                  h-1
                  w-20
                  max-w-[120px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#29B6F0]
                  to-[#7A4FD1]
                  sm:mt-5
                  sm:w-24
                "
              />

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="
                  mt-4
                  max-w-2xl
                  text-[15px]
                  leading-6.5
                  text-zinc-300
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                  lg:text-[17px]
                  lg:leading-7.5
                "
              >
                Empower your business with a unified digital transformation  
                ecosystem. Our comprehensive offering brings together cloud  
                migration, application modernization, AI integration, and managed  
                services into one seamless, scalable solution. We help organizations  
                accelerate innovation, optimize operations, and unlock new business  
                value through intelligent, cloud-first technologies.
              </p>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="relative order-2"
            >
              <div
                className="
                  overflow-hidden
                  rounded-[20px]
                  bg-[#0B0B0B]
                  sm:rounded-[24px]
                  lg:rounded-[28px]
                "
              >
                <img
                  src="/services/Data Analytics1.jpg"
                  alt="Digital Transformation"
                  className="
                    h-[240px]
                    w-full
                    object-fill
                    transition
                    duration-700
                    hover:scale-105
                    sm:h-[300px]
                    md:h-[340px]
                    lg:h-[400px]
                    xl:h-[440px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overviewsection;

