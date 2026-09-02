"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Brent",
    role: "Business Partner",
    quote:
      "BeaverTek built a powerful analytics platform with Tableau integration, transforming our business insights.",
  },
  {
    name: "Cooraez",
    role: "Healthcare Partner",
    quote:
      "An outstanding AI healthcare platform with seamless patient intake and smart triage workflows.",
  },
  {
    name: "Ravi",
    role: "Technology Partner",
    quote:
      "BeaverTek provided expert development and strategy, helping us launch faster and more efficiently.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] py-8 sm:py-10 md:py-8 lg:py-8">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-0
          h-52
          w-52
          rounded-full
          bg-[#29B6F0]/5
          blur-[90px]
          sm:-left-32
          sm:h-60
          sm:w-60
          lg:h-64
          lg:w-64
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-0
          h-52
          w-52
          rounded-full
          bg-[#B93FC9]/6
          blur-[100px]
          sm:-right-32
          sm:h-60
          sm:w-60
          lg:h-64
          lg:w-64
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/4
          blur-[90px]
          sm:h-56
          sm:w-56
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:55px_55px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1250px]
          px-3
          sm:px-5
          md:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* Badge */}

          <div
            data-aos="zoom-in"
            data-aos-delay="80"
            data-aos-duration="700"
            className="
              inline-flex
              max-w-full
              items-center
              gap-1.5
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]
              px-2.5
              py-1.5
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#3E7BD6]/60
              sm:px-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[7px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#A0A0A8]
                sm:text-[8px]
                sm:tracking-[0.18em]
                md:text-[9px]
              "
            >
              Client Testimonials
            </span>
          </div>

          {/* Title */}

          <h2
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="800"
            className="
              mt-3
              text-[24px]
              font-extrabold
              leading-[1.1]
              tracking-[-0.04em]
              text-white
              sm:text-[29px]
              md:text-[36px]
              lg:text-[44px]
              xl:text-[46px]
            "
          >
            Trusted By{" "}
            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Industry Leaders
            </span>
          </h2>

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="
              mx-auto
              mt-2
              max-w-[520px]
              px-2
              text-[10px]
              leading-5
              text-[#A0A0A8]
              sm:text-xs
              md:text-[13px]
            "
          >
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>

          {/* Gradient Line */}

          <div
            data-aos="zoom-in"
            data-aos-delay="280"
            data-aos-duration="700"
            className="
              mx-auto
              mt-3
              h-[2px]
              w-10
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              transition-all
              duration-500
              hover:w-16
            "
          />
        </div>

        {/* ===================================================
            SWIPER
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="180"
          data-aos-duration="900"
          className="
            relative
            mx-auto
            mt-6
            w-full
            max-w-[1050px]
            sm:mt-7
            md:mt-8
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              gap-1.5
              sm:gap-2
              md:gap-3
              lg:gap-4
            "
          >
            {/* =================================================
                LEFT ARROW
            ================================================== */}

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="700"
              className="
                group
                relative
                z-20
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#0A0A0A]
                text-[#707078]
                transition-all
                duration-500
                hover:-translate-x-1
                hover:border-[#3E7BD6]
                hover:bg-[#121212]
                hover:text-[#29B6F0]
                sm:h-9
                sm:w-9
                md:h-10
                md:w-10
              "
            >
              <ChevronLeft
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-500
                  group-hover:-translate-x-0.5
                  sm:h-4
                  sm:w-4
                "
              />
            </button>

            {/* =================================================
                SWIPER AREA
            ================================================== */}

            <div className="min-w-0 flex-1 overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={750}
                slidesPerView={1}
                spaceBetween={12}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="w-full !overflow-hidden"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={item.name}>
                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay={index * 80}
                      data-aos-duration="800"
                      className="
                        group
                        relative
                        w-full
                        overflow-hidden
                        rounded-[16px]
                        border
                        border-[#24242A]
                        bg-[#0D0D0F]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-[#3E7BD6]
                        sm:rounded-[18px]
                      "
                    >
                      {/* =================================================
                          BACKGROUND GLOWS
                      ================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-16
                          -top-16
                          h-32
                          w-32
                          rounded-full
                          bg-[#29B6F0]/5
                          blur-[60px]
                          transition-all
                          duration-700
                          group-hover:bg-[#29B6F0]/9
                          sm:h-40
                          sm:w-40
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-16
                          -left-16
                          h-32
                          w-32
                          rounded-full
                          bg-[#B93FC9]/5
                          blur-[60px]
                          transition-all
                          duration-700
                          group-hover:bg-[#B93FC9]/9
                          sm:h-40
                          sm:w-40
                        "
                      />

                      {/* =================================================
                          TOP GRADIENT
                      ================================================== */}

                      <div
                        className="
                          absolute
                          left-[18%]
                          right-[18%]
                          top-0
                          h-[2px]
                          rounded-full
                          bg-[linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,#B93FC9,transparent)]
                          opacity-70
                          transition-all
                          duration-700
                          group-hover:left-[8%]
                          group-hover:right-[8%]
                        "
                      />

                      {/* =================================================
                          CONTENT
                      ================================================== */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          min-h-[225px]
                          items-center
                          px-3
                          py-5
                          sm:min-h-[240px]
                          sm:px-6
                          sm:py-6
                          md:min-h-[250px]
                          md:px-8
                          lg:min-h-[260px]
                          lg:px-10
                          lg:py-7
                        "
                      >
                        <div className="mx-auto w-full max-w-[800px] text-center">

                          {/* Quote Icon */}

                          <div
                            data-aos="fade-down"
                            data-aos-delay="120"
                            data-aos-duration="650"
                            className="mb-2.5 flex justify-center sm:mb-3"
                          >
                            <div
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-[#3E7BD6]/30
                                bg-[#0A0A0A]
                                transition-all
                                duration-500
                                group-hover:scale-105
                                group-hover:border-[#29B6F0]/60
                                sm:h-10
                                sm:w-10
                                sm:rounded-xl
                              "
                            >
                              <Quote
                                strokeWidth={3}
                                className="
                                  h-4
                                  w-4
                                  text-[#29B6F0]
                                  sm:h-[18px]
                                  sm:w-[18px]
                                "
                              />
                            </div>
                          </div>

                          {/* =================================================
                              QUOTE TEXT
                          ================================================== */}

                          <p
                            data-aos="fade-up"
                            data-aos-delay="180"
                            data-aos-duration="750"
                            className="
                              mx-auto
                              w-full
                              max-w-[720px]
                              px-1
                              text-[12px]
                              font-medium
                              leading-[1.65]
                              text-[#D4D4D8]
                              transition-colors
                              duration-500
                              group-hover:text-white
                              sm:text-[14px]
                              sm:leading-6
                              md:text-[15px]
                              md:leading-7
                              lg:text-[17px]
                            "
                          >
                            <span
                              className="
                                mr-1
                                text-[24px]
                                font-black
                                leading-none
                                text-[#29B6F0]
                                sm:text-[30px]
                              "
                            >
                              “
                            </span>

                            {item.quote}

                            <span
                              className="
                                ml-1
                                text-[24px]
                                font-black
                                leading-none
                                text-[#B93FC9]
                                sm:text-[30px]
                              "
                            >
                              ”
                            </span>
                          </p>

                          {/* =================================================
                              DIVIDER
                          ================================================== */}

                          <div
                            data-aos="zoom-in"
                            data-aos-delay="250"
                            data-aos-duration="650"
                            className="
                              mx-auto
                              my-2.5
                              h-px
                              w-[70%]
                              max-w-[300px]
                              bg-gradient-to-r
                              from-transparent
                              via-[#3E7BD6]/35
                              to-transparent
                              sm:my-3
                            "
                          />

                          {/* =================================================
                              AUTHOR
                          ================================================== */}

                          <div
                            data-aos="fade-up"
                            data-aos-delay="310"
                            data-aos-duration="650"
                            className="
                              flex
                              items-center
                              justify-center
                              gap-1.5
                              sm:gap-2
                            "
                          >
                            <div>
                              <h3
                                className="
                                  text-[11px]
                                  font-semibold
                                  text-white
                                  sm:text-[12px]
                                  md:text-[13px]
                                "
                              >
                                {item.name}
                              </h3>

                              <p
                                className="
                                  mt-0.5
                                  text-[7px]
                                  font-medium
                                  uppercase
                                  tracking-[0.12em]
                                  text-[#777780]
                                  sm:text-[8px]
                                  md:text-[9px]
                                "
                              >
                                {item.role}
                              </p>
                            </div>

                            <BadgeCheck
                              className="
                                h-3
                                w-3
                                text-[#29B6F0]
                                transition-all
                                duration-500
                                group-hover:text-[#B93FC9]
                                sm:h-3.5
                                sm:w-3.5
                              "
                            />
                          </div>

                          {/* =================================================
                              STARS
                          ================================================== */}

                          <div
                            data-aos="fade-up"
                            data-aos-delay="370"
                            data-aos-duration="650"
                            className="mt-1.5 flex justify-center gap-0.5 sm:mt-2"
                          >
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="
                                  h-2.5
                                  w-2.5
                                  fill-[#29B6F0]
                                  text-[#29B6F0]
                                  transition-transform
                                  duration-300
                                  group-hover:scale-110
                                  sm:h-3
                                  sm:w-3
                                "
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          BOTTOM GRADIENT
                      ================================================== */}

                      <div
                        className="
                          absolute
                          bottom-0
                          left-[20%]
                          right-[20%]
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-[#3E7BD6]/30
                          to-transparent
                          transition-all
                          duration-700
                          group-hover:left-[8%]
                          group-hover:right-[8%]
                          group-hover:via-[#29B6F0]/60
                        "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* =================================================
                RIGHT ARROW
            ================================================== */}

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="700"
              className="
                group
                relative
                z-20
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#0A0A0A]
                text-[#707078]
                transition-all
                duration-500
                hover:translate-x-1
                hover:border-[#3E7BD6]
                hover:bg-[#121212]
                hover:text-[#B93FC9]
                sm:h-9
                sm:w-9
                md:h-10
                md:w-10
              "
            >
              <ChevronRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-500
                  group-hover:translate-x-0.5
                  sm:h-4
                  sm:w-4
                "
              />
            </button>
          </div>

          {/* =================================================
              SLIDE INDICATORS
          ================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="420"
            data-aos-duration="650"
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-1.5
              sm:mt-4
            "
          >
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() =>
                  swiperRef.current?.slideToLoop(index)
                }
                className="
                  h-1
                  w-3.5
                  rounded-full
                  bg-[#2A2A30]
                  transition-all
                  duration-500
                  hover:w-6
                  hover:bg-[#3E7BD6]
                  sm:w-4
                  sm:hover:w-7
                "
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="700"
          className="
            mx-auto
            mt-6
            h-px
            w-[70%]
            max-w-4xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent
            sm:mt-7
          "
        />
      </div>
    </section>
  );
}