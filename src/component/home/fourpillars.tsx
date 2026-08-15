"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function FourPillars() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const pillars = [
    {
      number: "01",
      title: "Modernize",
      href: "/services/modernize/modernizehero",
      image: "/home/payment.jpg",
      description:
        "Bring legacy systems and infrastructure into the modern stack.",
    },
    {
      number: "02",
      title: "See Your Data",
      href: "/services/seeyourdata/seeyourdatahero",
      image: "/home/healthai.jpg",
      description:
        "Analytics, dashboards, and reporting that drive decisions.",
    },
    {
      number: "03",
      title: "Build Software",
      href: "/services/buildsoftware/herosection",
      image: "/home/mobile-app.jpg",
      description:
        "Custom applications, web and mobile, from concept to launch.",
    },
    {
      number: "04",
      title: "Stay Secure",
      href: "/services/staysecure/staysecureherosection",
      image: "/home/healthai.jpg",
      description:
        "Keep digital operations running, protected, and monitored.",
    },
    {
      number: "05",
      title: "Stay Secure",
      href: "/services/staysecure/staysecureherosection",
      image: "/home/healthai.jpg",
      description:
        "Keep digital operations running, protected, and monitored.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] pt-16 pb-8">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B93FC9]/15 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-12 md:mb-14"
        >

          {/* Badge */}
          <span
            className="
              inline-flex items-center
              px-4 py-2
              rounded-full
              bg-[#121212]
              border border-[#2A2A30]
              text-[#29B6F0]
              text-xs sm:text-sm
              font-semibold
              tracking-[0.15em]
              uppercase
              animate-[fadeInUp_0.8s_ease-out]
            "
          >
            FOUR PILLARS
          </span>

          {/* Main Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-[1.15]
              tracking-tight
              text-white
              animate-[fadeInUp_1s_ease-out]
            "
          >
            Four Things,
            <span
              className="
                ml-2
                bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                text-transparent
                bg-clip-text
              "
            >
              Done Well.
            </span>
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-[#A0A0A8]
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              md:leading-8
              font-normal
              animate-[fadeInUp_1.2s_ease-out]
            "
          >
            BeaverTek helps small and mid-size companies modernize their
            systems, make sense of their data, and build software that
            actually works.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 26,
              },
            }}
            className="!pb-12"
          >

            {pillars.map((pillar) => (
              <SwiperSlide key={pillar.number}>

                <Link
                  href={pillar.href}
                  className="group block h-full"
                >

                  <div
                    className="
                      h-full
                      overflow-hidden
                      rounded-[18px]
                      bg-[#121212]
                      border border-[#2A2A30]
                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:border-[#29B6F0]/60
                      hover:shadow-[0_20px_60px_rgba(41,182,240,0.20)]
                    "
                  >

                    {/* ================= IMAGE ================= */}
                    <div className="group relative h-44 sm:h-48 overflow-hidden">

                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="
                          object-cover
                          scale-100
                          transition-transform
                          duration-[2500ms]
                          ease-linear
                          will-change-transform
                          group-hover:scale-125
                        "
                      />

                      {/* Grid Overlay */}
                      <div
                        className="
                          absolute inset-0
                          opacity-20
                          bg-[radial-gradient(#2A2A30_1px,transparent_1px)]
                          [background-size:20px_20px]
                        "
                      />

                      {/* Number */}
                      <div className="absolute top-4 left-4">

                        <div
                          className="
                            min-w-[42px]
                            h-8
                            px-3
                            flex
                            items-center
                            justify-center
                            rounded-full
                            bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                            text-white
                            text-xs
                            font-bold
                            tracking-wide
                            shadow-lg
                          "
                        >
                          {pillar.number}
                        </div>

                      </div>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="p-5 sm:p-6 flex flex-col min-h-[215px]">

                      {/* Title */}
                      <h3
                        className="
                          text-lg
                          sm:text-xl
                          font-semibold
                          tracking-tight
                          text-white
                          mb-3

                          transition-all
                          duration-500

                          group-hover:text-transparent
                          group-hover:bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]
                          group-hover:bg-clip-text

                          animate-[fadeInUp_0.8s_ease-out]
                        "
                      >
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          text-[#A0A0A8]
                          text-sm
                          sm:text-[15px]
                          leading-6
                          font-normal
                          flex-grow
                          max-w-[95%]

                          animate-[fadeInUp_1s_ease-out]
                        "
                      >
                        {pillar.description}
                      </p>

                      {/* CTA */}
                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          gap-2
                          text-[#29B6F0]
                          text-sm
                          font-semibold
                          tracking-wide
                          transition-colors
                          duration-300

                          group-hover:text-[#7A4FD1]
                        "
                      >
                        <span>Learn More</span>

                        <span
                          className="
                            text-[#B93FC9]
                            text-base
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                          "
                        >
                          →
                        </span>
                      </div>

                    </div>
                  </div>

                </Link>

              </SwiperSlide>
            ))}

          </Swiper>
        </div>

      </div>
    </section>
  );
}