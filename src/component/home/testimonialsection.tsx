"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
    quote:
      "BeaverTek built a powerful analytics platform with Tableau integration, transforming our business insights.",
  },
  {
    name: "Cooraez",
    role: "Healthcare Partner",
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
    quote:
      "An outstanding AI healthcare platform with seamless patient intake and smart triage workflows.",
  },
  {
    name: "Ravi",
    role: "Technology Partner",
    image: "/home/one.jpeg",
    bgImage: "/home/one.jpeg",
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
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#000000]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#29B6F0]/7
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B93FC9]/8
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/5
          blur-[120px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]

          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center

            sm:mb-14
            lg:mb-16
          "
        >
          {/* Badge */}

          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]
              px-4
              py-2

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.20em]

              text-[#29B6F0]

              shadow-[0_0_25px_rgba(41,182,240,.08)]
            "
          >
            Client Testimonials
          </span>

          {/* Title */}

          <h2
            data-aos="fade-up"
            data-aos-delay="180"
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl
              md:text-5xl
              lg:text-6xl
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
            data-aos-delay="280"
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#A0A0A8]

              sm:text-base
            "
          >
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>

          {/* Divider */}

          <div
            data-aos="zoom-in"
            data-aos-delay="380"
            className="
              mx-auto
              mt-6
              h-[2px]
              w-16
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              shadow-[0_0_18px_rgba(41,182,240,.30)]
            "
          />
        </div>

        {/* ===================================================
            TESTIMONIAL SLIDER
        =================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="
            relative
            mx-auto
            max-w-6xl
          "
        >
          {/* =================================================
              MAIN SLIDER AREA
          ================================================= */}

          <div
            className="
              relative
              flex
              items-center
              gap-4

              lg:gap-7
            "
          >
            {/* =================================================
                LEFT ARROW
            ================================================= */}

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                group
                relative
                z-30
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#0A0A0A]

                text-[#55555D]

                transition-all
                duration-500

                hover:border-[#3E7BD6]
                hover:bg-[#121212]
                hover:text-[#29B6F0]

                hover:shadow-[0_0_25px_rgba(41,182,240,.15)]

                sm:h-12
                sm:w-12

                lg:h-14
                lg:w-14
              "
            >
              <ChevronLeft
                className="
                  h-5
                  w-5

                  transition-transform
                  duration-500

                  group-hover:-translate-x-1

                  sm:h-6
                  sm:w-6
                "
              />

              {/* Glow */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-[#29B6F0]/5
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />
            </button>

            {/* =================================================
                SWIPER
            ================================================= */}

            <div className="min-w-0 flex-1">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={800}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="!overflow-hidden"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={item.name}>
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-[#24242A]
                        bg-[#0D0D0F]

                        shadow-[0_25px_80px_rgba(0,0,0,.45)]

                        transition-all
                        duration-700

                        hover:border-[#3E7BD6]
                      "
                    >
                      {/* =================================================
                          BACKGROUND IMAGE
                      ================================================= */}

                      <div className="absolute inset-0">
                        <Image
                          src={item.bgImage}
                          alt=""
                          fill
                          priority={index === 0}
                          className="
                            object-cover
                            opacity-[0.055]
                            grayscale

                            transition-transform
                            duration-[1400ms]

                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* =================================================
                          DARK OVERLAY
                      ================================================= */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-[linear-gradient(90deg,#080808_0%,#0D0D0F_50%,#080808_100%)]
                        "
                      />

                      {/* =================================================
                          TOP GRADIENT
                      ================================================= */}

                      <div
                        className="
                          absolute
                          left-[12%]
                          right-[12%]
                          top-0
                          h-[2px]
                          rounded-full
                          bg-[linear-gradient(90deg,transparent,#29B6F0,#7A4FD1,#B93FC9,transparent)]
                          opacity-70
                          shadow-[0_0_20px_rgba(41,182,240,.45)]
                        "
                      />

                      {/* =================================================
                          CONTENT
                      ================================================= */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          min-h-[300px]
                          items-center
                          px-6
                          py-8

                          sm:min-h-[320px]
                          sm:px-10

                          md:min-h-[340px]
                          md:px-14

                          lg:min-h-[360px]
                          lg:px-16
                        "
                      >
                        <div
                          className="
                            mx-auto
                            grid
                            w-full
                            max-w-4xl
                            items-center
                            gap-8

                            md:grid-cols-[150px_1fr]
                            md:gap-10

                            lg:grid-cols-[170px_1fr]
                            lg:gap-12
                          "
                        >
                          {/* =================================================
                              PROFILE IMAGE
                          ================================================= */}

                          <div
                            data-aos="zoom-in"
                            data-aos-delay="150"
                            className="
                              mx-auto
                              md:mx-0
                            "
                          >
                            <div
                              className="
                                relative
                                h-[130px]
                                w-[110px]

                                sm:h-[145px]
                                sm:w-[120px]

                                md:h-[155px]
                                md:w-[125px]

                                lg:h-[170px]
                                lg:w-[135px]
                              "
                            >
                              {/* Gradient Border */}

                              <div
                                className="
                                  absolute
                                  -inset-[2px]
                                  rounded-[16px]
                                  bg-[linear-gradient(135deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                                  opacity-80
                                "
                              />

                              {/* Image */}

                              <div
                                className="
                                  relative
                                  h-full
                                  w-full
                                  overflow-hidden
                                  rounded-[15px]
                                  border
                                  border-[#0A0A0A]
                                  bg-[#121212]
                                "
                              >
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="
                                    object-cover

                                    transition-transform
                                    duration-700

                                    group-hover:scale-105
                                  "
                                />

                                <div
                                  className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/30
                                    via-transparent
                                    to-transparent
                                  "
                                />
                              </div>

                              {/* Quote Icon */}

                              <div
                                className="
                                  absolute
                                  -right-3
                                  -top-3
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-[#3E7BD6]/40
                                  bg-[#0A0A0A]
                                  shadow-[0_0_20px_rgba(41,182,240,.12)]
                                "
                              >
                                <Quote
                                  className="
                                    h-4
                                    w-4
                                    text-[#29B6F0]
                                  "
                                />
                              </div>
                            </div>
                          </div>

                          {/* =================================================
                              TESTIMONIAL CONTENT
                          ================================================= */}

                          <div
                            data-aos="fade-left"
                            data-aos-delay="250"
                            className="
                              text-center
                              md:text-left
                            "
                          >
                            {/* Quote */}

                            <p
                              className="
                                relative
                                max-w-3xl
                                text-base
                                font-light
                                leading-7
                                text-[#D4D4D8]

                                sm:text-lg
                                sm:leading-8

                                md:text-xl
                                md:leading-9

                                lg:text-[21px]
                              "
                            >
                              <span
                                className="
                                  mr-1
                                  text-2xl
                                  font-bold
                                  text-[#29B6F0]
                                "
                              >
                                “
                              </span>

                              {item.quote}

                              <span
                                className="
                                  ml-1
                                  text-2xl
                                  font-bold
                                  text-[#B93FC9]
                                "
                              >
                                ”
                              </span>
                            </p>

                            {/* Divider */}

                            <div
                              className="
                                my-5
                                h-px
                                w-full
                                max-w-[420px]
                                bg-gradient-to-r
                                from-[#29B6F0]/40
                                via-[#7A4FD1]/20
                                to-transparent

                                mx-auto
                                md:mx-0
                              "
                            />

                            {/* Name + Role */}

                            <div
                              className="
                                flex
                                items-center
                                justify-center
                                gap-3

                                md:justify-start
                              "
                            >
                              <div>
                                <h3
                                  className="
                                    text-base
                                    font-semibold
                                    text-white
                                  "
                                >
                                  {item.name}
                                </h3>

                                <p
                                  className="
                                    mt-0.5
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.14em]
                                    text-[#777780]
                                  "
                                >
                                  {item.role}
                                </p>
                              </div>

                              {/* Verified */}

                              <BadgeCheck
                                className="
                                  h-4
                                  w-4
                                  text-[#29B6F0]
                                "
                              />
                            </div>

                            {/* Stars */}

                            <div
                              className="
                                mt-4
                                flex
                                justify-center
                                gap-1

                                md:justify-start
                              "
                            >
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="
                                    h-3.5
                                    w-3.5
                                    fill-[#29B6F0]
                                    text-[#29B6F0]
                                  "
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          BOTTOM GRADIENT
                      ================================================= */}

                      <div
                        className="
                          absolute
                          bottom-0
                          left-[15%]
                          right-[15%]
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-[#3E7BD6]/30
                          to-transparent
                        "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* =================================================
                RIGHT ARROW
            ================================================= */}

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
              className="
                group
                relative
                z-30
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#2A2A30]
                bg-[#0A0A0A]

                text-[#55555D]

                transition-all
                duration-500

                hover:border-[#3E7BD6]
                hover:bg-[#121212]
                hover:text-[#29B6F9]

                hover:shadow-[0_0_25px_rgba(185,63,201,.15)]

                sm:h-12
                sm:w-12

                lg:h-14
                lg:w-14
              "
            >
              <ChevronRight
                className="
                  h-5
                  w-5

                  transition-transform
                  duration-500

                  group-hover:translate-x-1

                  sm:h-6
                  sm:w-6
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-[#B93FC9]/5
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />
            </button>
          </div>

          {/* =================================================
              SLIDE INDICATOR
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="
                  h-1
                  w-5
                  rounded-full
                  bg-[#2A2A30]

                  transition-all
                  duration-500

                  hover:w-8
                  hover:bg-[#3E7BD6]
                "
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="
            mx-auto
            mt-12
            h-px
            max-w-4xl
            bg-gradient-to-r
            from-transparent
            via-[#3E7BD6]/20
            to-transparent
          "
        />
      </div>
    </section>
  );
}