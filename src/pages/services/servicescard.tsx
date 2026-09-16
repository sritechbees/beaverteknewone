"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ArrowRight } from "lucide-react";

import App_layout from "@/component/layout/app_layout";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "End-to-End Digital Transformation",
    description:
      "Empower your business with a unified digital transformation ecosystem. Our comprehensive offering brings together cloud migration, application modernization, AI integration, and managed services into one seamless, scalable solution.",
    image: "/services/End-to-end-digital-transformation.jpg",
    route: "/services",
  },
  {
    title: "Cloud Cost Optimization (FinOps)",
    description:
      "Take control of your cloud spending without sacrificing performance. Our FinOps-driven cloud cost optimization services help businesses eliminate waste, rightsize resources, and ensure every dollar spent delivers measurable value.",
    image: "/services/cloud-cost-optimization2.jpg",
    route: "/services/finops",
  },
  {
    title: "DevOps & DevSecOps",
    description:
      "Accelerate innovation. Automate delivery. Scale with confidence. We streamline your software lifecycle with automated build, test, and deployment pipelines while integrating security into every stage of development.",
    image: "/services/Devops.jpg",
    route: "/services/devops",
  },
  {
    title: "Mobile App Development",
    description:
      "Transform ideas into powerful mobile experiences. We build secure, scalable, and user-friendly mobile apps for Android and iOS that enhance engagement, streamline operations, and accelerate digital transformation.",
    image: "/services/Mobile App Development.jpg",
    route: "/services/mobileappdevelopment",
  },
  {
    title: "Custom Software Development & Maintenance",
    description:
      "Tailored Software. Smart Operations. Sustainable Growth. We build secure, scalable, high-performance applications designed around your business needs—from concept to deployment and through ongoing maintenance.",
    image: "/services/Custom Software Development and Maintance.jpg",
    route: "/services/customsoftwaredevelopment",
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Transform raw business data into meaningful insights that support informed decision-making, improving operational efficiency and identifying new growth opportunities.",
    image: "/services/Data Analytics2.jpg",
    route: "/services/dataanalytics",
  },
];

const gradientText =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)] bg-clip-text text-transparent";

const gradientBg =
  "bg-[linear-gradient(135deg,#29B6F0_0%,#3E7BD6_35%,#7A4FD1_65%,#B93FC9_100%)]";

function splitTitle(title: string) {
  const words = title.split(" ");

  if (words.length <= 1) {
    return {
      first: title,
      rest: "",
    };
  }

  const splitIndex = Math.ceil(words.length / 2);

  return {
    first: words.slice(0, splitIndex).join(" "),
    rest: words.slice(splitIndex).join(" "),
  };
}

export default function Servicescard() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const openService = (route: string) => {
    router.push(route);
  };

  return (
    <section className="relative overflow-hidden bg-black py-7 sm:py-8 lg:py-10">
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[12%]
            top-[-180px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#29B6F0]/[0.03]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[5%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#7A4FD1]/[0.03]
            blur-[130px]
          "
        />
      </div>

      {/* =========================================================
          SUBTLE GRID
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="relative mx-auto max-w-6xl px-3 sm:px-4 md:px-5 lg:px-6">
        {/* =======================================================
            HEADING
        ======================================================= */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mx-auto mb-6 max-w-3xl text-center sm:mb-7 lg:mb-8"
        >
          {/* Badge */}

          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="650"
            className="
              mb-3
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#2A2A30]
              bg-[#0A0A0A]
              px-3
              py-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#29B6F0]
                shadow-[0_0_9px_rgba(41,182,240,.65)]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#A0A0A8]
                sm:text-[11px]
              "
            >
              Our Services
            </span>
          </div>

          {/* Heading */}

          <h2
            data-aos="fade-up"
            data-aos-delay="90"
            data-aos-duration="800"
            className="
              text-[28px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.025em]
              text-white
              sm:text-[36px]
              md:text-[44px]
              lg:text-[50px]
              xl:text-[54px]
            "
          >
            <span className="text-white">
              Technology solutions{" "}
            </span>

            <span className={gradientText}>for every need.</span>
          </h2>

          {/* Gradient underline */}

          <div
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="650"
            className="
              mx-auto
              mt-3
              h-[2px]
              w-12
              rounded-full
              bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
              sm:mt-3.5
            "
          />

          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-delay="160"
            data-aos-duration="750"
            className="
              mx-auto
              mt-3.5
              max-w-3xl
              text-[13px]
              font-medium
              leading-6
              text-[#A0A0A8]
              sm:mt-4
              sm:text-[14px]
              sm:leading-6.5
              md:text-[15px]
              md:leading-7
            "
          >
            From cloud transformation and AI to software development,
            cybersecurity, mobile applications, and analytics, BeaverTek
            delivers scalable technology solutions built around your
            business.
          </p>
        </div>

        {/* =======================================================
            SERVICES GRID
        ======================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="180"
          data-aos-duration="800"
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-3
            lg:gap-4
          "
        >
          {services.map((service, index) => {
            const { first, rest } = splitTitle(service.title);

            return (
              <article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 80}
                data-aos-duration="700"
                className="
                  group
                  relative
                  flex
                  h-[365px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#24242A]
                  bg-[#101010]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#3E7BD6]/60
                  hover:bg-[#121212]
                  hover:shadow-[0_18px_40px_rgba(41,182,240,.08)]
                  sm:h-[370px]
                  lg:h-[375px]
                "
              >
                {/* =================================================
                    IMAGE — SQUARE ROUNDED
                ================================================= */}

                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  data-aos-duration="850"
                  className="
                    relative
                    mx-3
                    mt-3
                    h-[145px]
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#2A2A30]
                    sm:h-[150px]
                    lg:h-[155px]
                  "
                >
                  {/* Image */}

                  <div
                    className="
                      absolute
                      inset-0
                      scale-100
                      bg-cover
                      bg-center
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      group-hover:scale-[1.08]
                    "
                    style={{
                      backgroundImage: `url("${service.image}")`,
                    }}
                  />

                  {/* Image dark overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      transition-all
                      duration-500
                      group-hover:bg-black/0
                    "
                  />

                  {/* Gradient hover overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(135deg,rgba(41,182,240,.12),rgba(62,123,214,.03),rgba(122,79,209,.08),rgba(185,63,201,.12))]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Bottom gradient line */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    px-4
                    pb-4
                    pt-3
                    sm:px-4.5
                    sm:pb-4.5
                  "
                >
                  {/* TITLE */}

                  <h3
                    data-aos="fade-up"
                    data-aos-delay={index * 60 + 100}
                    data-aos-duration="650"
                    className="
                      text-[16px]
                      font-bold
                      leading-[1.2]
                      tracking-tight
                      transition-all
                      duration-500
                      sm:text-[17px]
                    "
                  >
                    <span
                      className="
                        text-white
                        transition-all
                        duration-300
                        group-hover:text-[#F5F5F5]
                      "
                    >
                      {first}{" "}
                    </span>

                    {rest && (
                      <span
                        className={`
                          ${gradientText}
                          transition-all
                          duration-500
                          group-hover:brightness-125
                          group-hover:drop-shadow-[0_0_8px_rgba(122,79,209,0.22)]
                        `}
                      >
                        {rest}
                      </span>
                    )}
                  </h3>

                  {/* TITLE HOVER LINE */}

                  <div
                    className="
                      mt-2
                      h-[2px]
                      w-8
                      rounded-full
                      bg-[linear-gradient(90deg,#29B6F0,#3E7BD6,#7A4FD1,#B93FC9)]
                      opacity-50
                      transition-all
                      duration-500
                      group-hover:w-14
                      group-hover:opacity-100
                    "
                  />

                  {/* DESCRIPTION */}

                  <p
                    data-aos="fade-up"
                    data-aos-delay={index * 60 + 145}
                    data-aos-duration="650"
                    className="
                      mt-2.5
                      line-clamp-3
                      text-[12.5px]
                      font-normal
                      leading-[1.65]
                      tracking-[0.005em]
                      text-[#A6A6AF]
                      transition-all
                      duration-300
                      group-hover:text-[#C2C2CA]
                      sm:text-[13px]
                      sm:leading-[1.68]
                    "
                  >
                    {service.description}
                  </p>

                  {/* =================================================
                      VIEW MORE
                  ================================================= */}

                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 60 + 190}
                    data-aos-duration="650"
                    className="mt-auto pt-3"
                  >
                    <button
                      type="button"
                      onClick={() => openService(service.route)}
                      className="
                        group/button
                        relative
                        flex
                        h-9
                        w-full
                        items-center
                        overflow-hidden
                        rounded-lg
                        border
                        border-[#303038]
                        bg-[#18181B]
                        px-3
                        text-[11px]
                        font-semibold
                        text-white
                        transition-all
                        duration-500
                        hover:border-transparent
                        hover:shadow-[0_8px_22px_rgba(62,123,214,.20)]
                        sm:h-9.5
                        sm:text-xs
                      "
                    >
                      {/* Animated background */}

                      <span
                        className={`
                          absolute
                          inset-0
                          ${gradientBg}
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover/button:opacity-100
                        `}
                      />

                      {/* Button content */}

                      <span
                        className="
                          relative
                          z-10
                          flex
                          w-full
                          items-center
                          justify-between
                        "
                      >
                        {/* LEFT ARROW */}

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.06]
                            transition-all
                            duration-500
                            group-hover/button:translate-x-[calc(100%+0px)]
                            group-hover/button:border-white/20
                            group-hover/button:bg-white/15
                          "
                        >
                          <ArrowRight
                            size={13}
                            strokeWidth={2}
                            className="
                              -rotate-180
                              transition-transform
                              duration-500
                              group-hover/button:rotate-0
                            "
                          />
                        </span>

                        {/* CENTER TEXT */}

                        <span
                          className="
                            absolute
                            left-1/2
                            -translate-x-1/2
                            whitespace-nowrap
                            transition-all
                            duration-500
                            group-hover/button:font-bold
                          "
                        >
                          View More
                        </span>

                        {/* RIGHT SPACE */}

                        <span className="h-6 w-6 shrink-0" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* =================================================
                    CARD HOVER GRADIENT BORDER
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-transparent
                    bg-[linear-gradient(#101010,#101010)_padding-box,linear-gradient(135deg,rgba(41,182,240,.0),rgba(62,123,214,.0),rgba(122,79,209,.0),rgba(185,63,201,.0))_border-box]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}