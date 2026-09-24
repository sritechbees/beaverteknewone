
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
  BadgeCheck,
  Star,
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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#000000]
        py-10

        sm:py-12

        md:py-14

        lg:py-16
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-0
          h-44
          w-44
          rounded-full
          bg-[#29B6F0]/5
          blur-[80px]

          sm:-left-28
          sm:h-52
          sm:w-52

          lg:h-60
          lg:w-60
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-44
          w-44
          rounded-full
          bg-[#B93FC9]/6
          blur-[90px]

          sm:-right-28
          sm:h-52
          sm:w-52

          lg:h-60
          lg:w-60
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7A4FD1]/4
          blur-[80px]

          sm:h-48
          sm:w-48
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
          max-w-7xl
          px-4

          sm:px-6

          md:px-8

          lg:px-10

          xl:px-8
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
              px-3.5
              py-1.5

              sm:px-4
              sm:py-2
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
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#A0A0A8]

                sm:text-[11px]

                md:text-xs
              "
            >
              Client Testimonials
            </span>
          </div>

          {/* Short Title */}

          <h2
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="800"
            className="
              mt-4
              text-[2.15rem]
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-white


              sm:mt-4
                sm:text-[2.25rem]
                md:text-[2.6rem]
                lg:mt-4
                lg:text-[3rem]
                xl:text-[3.25rem]
                
                
                
                
                
                
                
                
                "
        
             

          
             


            
          >
            Hear From{" "}
            <span
              className="
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Our Clients
            </span>
          </h2>

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#A0A0A8]


              

              sm:mt-5
              sm:text-[15px]
              sm:leading-7

              md:text-base
              md:leading-7

              lg:text-[17px]
              lg:leading-7
            "
          >
            Long-term partnerships built on measurable outcomes,
            technical excellence, and trust.
          </p>

          
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
            mt-8
            w-full
            max-w-6xl

            sm:mt-10

            md:mt-12
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              gap-2

              sm:gap-3

              md:gap-4
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
                duration-300
                hover:border-[#3E7BD6]
                hover:bg-[#101015]
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
                spaceBetween={10}
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
                        relative
                        w-full
                        overflow-hidden
                        rounded-2xl

                        sm:rounded-[18px]

                        md:rounded-[20px]
                      "
                    >
                      {/* =================================================
                          BACKGROUND GLOWS
                      ================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-14
                          -top-14
                          h-28
                          w-28
                          rounded-full
                          bg-[#29B6F0]/5
                          blur-[55px]

                          sm:h-36
                          sm:w-36
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-14
                          -left-14
                          h-28
                          w-28
                          rounded-full
                          bg-[#B93FC9]/5
                          blur-[55px]

                          sm:h-36
                          sm:w-36
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
                          min-h-[190px]
                          items-center
                          px-4
                          py-5

                          sm:min-h-[205px]
                          sm:px-6
                          sm:py-6

                          md:min-h-[215px]
                          md:px-8

                          lg:min-h-[225px]
                          lg:px-10
                        "
                      >
                        <div
                          className="
                            mx-auto
                            w-full
                            max-w-[800px]
                            text-center
                          "
                        >
                          {/* =================================================
                              QUOTE TEXT
                          ================================================== */}

                          <p
                            data-aos="fade-up"
                            data-aos-delay="120"
                            data-aos-duration="750"
                            className="
                              mx-auto
                              w-full
                              max-w-[700px]
                              px-1
                              text-sm
                              font-medium
                              leading-6
                              text-[#D4D4D8]

                              sm:text-[15px]
                              sm:leading-7

                              md:text-base
                              md:leading-7

                              lg:text-[17px]
                              lg:leading-7
                            "
                          >
                            <span
                              className="
                                mr-1
                                text-[20px]
                                font-black
                                leading-none
                                text-[#29B6F0]

                                sm:text-[24px]
                              "
                            >
                              “
                            </span>

                            {item.quote}

                            <span
                              className="
                                ml-1
                                text-[20px]
                                font-black
                                leading-none
                                text-[#B93FC9]

                                sm:text-[24px]
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
                            data-aos-delay="200"
                            data-aos-duration="650"
                            className="
                              mx-auto
                              my-3
                              h-px
                              w-[65%]
                              max-w-[280px]
                              bg-gradient-to-r
                              from-transparent
                              via-[#3E7BD6]/35
                              to-transparent

                              sm:my-3.5
                            "
                          />

                          {/* =================================================
                              AUTHOR
                          ================================================== */}

                          <div
                            data-aos="fade-up"
                            data-aos-delay="260"
                            data-aos-duration="650"
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2
                            "
                          >
                            <div>
                              <h3
                                className="
                                  text-[11px]
                                  font-semibold
                                  text-white

                                  sm:text-xs

                                  md:text-[13px]
                                "
                              >
                                {item.name}
                              </h3>

                              <p
                                className="
                                  mt-0.5
                                  text-[8px]
                                  font-medium
                                  uppercase
                                  tracking-[0.12em]
                                  text-[#777780]

                                  sm:text-[9px]

                                  md:text-[10px]
                                "
                              >
                                {item.role}
                              </p>
                            </div>

                            <BadgeCheck
                              className="
                                h-3.5
                                w-3.5
                                text-[#29B6F0]

                                sm:h-4
                                sm:w-4
                              "
                            />
                          </div>

                          {/* =================================================
                              STARS
                          ================================================== */}

                          <div
                            data-aos="fade-up"
                            data-aos-delay="320"
                            data-aos-duration="650"
                            className="
                              mt-1.5
                              flex
                              justify-center
                              gap-0.5

                              sm:mt-2
                            "
                          >
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="
                                  h-2.5
                                  w-2.5
                                  fill-[#29B6F0]
                                  text-[#29B6F0]

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
                duration-300
                hover:border-[#3E7BD6]
                hover:bg-[#101015]
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
            data-aos-delay="380"
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
                  w-3
                  rounded-full
                  bg-[#2A2A30]
                  transition-all
                  duration-300
                  hover:w-5
                  hover:bg-[#3E7BD6]

                  sm:w-3.5
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
          data-aos-delay="450"
          data-aos-duration="700"
          className="
            mx-auto
            mt-6
            h-px
            w-[65%]
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

