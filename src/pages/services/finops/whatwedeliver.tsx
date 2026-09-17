
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BarChart3,
  Scale,
  BellRing,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

function Whatwedeliver() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const services = [
    {
      title: "Cloud Cost Analysis",
      description:
        "Gain full visibility into your cloud usage and spending patterns. We identify inefficiencies, unused resources, and cost-heavy workloads to build a clear optimization roadmap.",
      gradient: "from-[#29B6F0] to-[#3E7BD6]",
      image: "/services/Cloud Cost Analysis.jpg",
      icon: BarChart3,
      direction: "left",
    },
    {
      title: "Resource Rightsizing",
      description:
        "Ensure your cloud resources match real-time demand. We adjust compute, storage, and network configurations to eliminate over-provisioning while maintaining peak performance.",
      gradient: "from-[#3E7BD6] to-[#7A4FD1]",
      image: "/services/Cloud Cost Optimization.jpg",
      icon: Scale,
      direction: "top",
    },
    {
      title: "Budget Monitoring",
      description:
        "Stay ahead of unexpected costs with proactive monitoring, alerts, and monthly spend governance. We help you track budgets, forecast usage, and prevent cost overruns.",
      gradient: "from-[#7A4FD1] to-[#B93FC9]",
      image: "/services/Cloud Cost Analysis.jpg",
      icon: BellRing,
      direction: "right",
    },
    {
      title: "Instance Planning",
      description:
        "Optimize instance selection across compute families, storage tiers, and pricing models (on-demand, reserved, spot). We ensure you always run the most cost-efficient configuration for your workloads.",
      gradient: "from-[#B93FC9] to-[#29B6F0]",
      image: "/services/Cloud Cost Analysis.jpg",
      icon: ServerCog,
      direction: "bottom",
    },
  ];

  /* ---------------------------------------------------------
     Direction-safe animation
     Uses inline transform so right/bottom always work
  --------------------------------------------------------- */
  const getInitialTransform = (direction: string) => {
    switch (direction) {
      case "left":
        return "translate3d(-100%, 0, 0)";

      case "top":
        return "translate3d(0, -100%, 0)";

      case "right":
        return "translate3d(100%, 0, 0)";

      case "bottom":
        return "translate3d(0, 100%, 0)";

      default:
        return "translate3d(-100%, 0, 0)";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#000000] py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-72 sm:w-72" />

      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#B93FC9]/10 blur-[120px] sm:h-72 sm:w-72" />

      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Container */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-7">
        {/* Section Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <div
            className="mb-4 inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-3.5 py-1.5 backdrop-blur-xl sm:mb-5"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_12px_rgba(41,182,240,.8)] sm:h-2 sm:w-2" />

            <span className="ml-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D4D4D8] sm:text-xs">
              What We Deliver
            </span>
          </div>

          <h2
            className="text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[34px] md:text-[40px] lg:text-[46px]"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            What{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>

          <div
            className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] sm:mt-5 sm:w-16"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>

        {/* Cards */}

        <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[22px]"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* Gradient Border */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    z-0
                    rounded-[22px]
                    bg-gradient-to-br
                    ${service.gradient}
                    opacity-0
                    blur-[2px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-50
                    ${isActive ? "opacity-70" : ""}
                  `}
                />

                {/* Main Card */}

                <div
                  className="
                    relative
                    z-10
                    min-h-[310px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#2A2A30]
                    bg-[#121212]
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-[#3E7BD6]/60
                    group-hover:shadow-[0_20px_45px_rgba(0,0,0,.45)]
                    sm:min-h-[320px]
                    lg:min-h-[340px]
                  "
                >
                  {/* =================================================
                      NORMAL CARD CONTENT
                  ================================================== */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      min-h-[310px]
                      flex-col
                      p-5
                      transition-opacity
                      duration-300
                      sm:min-h-[320px]
                      sm:p-6
                      lg:min-h-[340px]
                      lg:p-6
                      ${
                        isActive
                          ? "pointer-events-none opacity-0"
                          : "opacity-100"
                      }
                    `}
                  >
                    {/* Arrow */}

                    <div className="flex justify-end">
                      <button
                        type="button"
                        aria-label={`Show ${service.title}`}
                        onClick={() =>
                          setActiveCard(isActive ? null : index)
                        }
                        className="
                          flex
                          h-9
                          w-9
                          cursor-pointer
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#2A2A30]
                          bg-[#0A0A0A]
                          transition-all
                          duration-500
                          hover:border-[#3E7BD6]
                          hover:bg-[#3E7BD6]/10
                        "
                      >
                        <ArrowUpRight
                          className="
                            h-4
                            w-4
                            text-[#A0A0A8]
                            transition-all
                            duration-500
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#29B6F0]
                          "
                          strokeWidth={1.8}
                        />
                      </button>
                    </div>

                    {/* Bottom Content */}

                    <div className="mt-auto">
                      {/* Icon */}

                      <div
                        className="
                          mb-5
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#2A2A30]
                          bg-[#0A0A0A]
                          transition-all
                          duration-500
                          group-hover:border-[#3E7BD6]/70
                        "
                      >
                        <Icon
                          className="
                            h-5
                            w-5
                            text-[#A0A0A8]
                            transition-colors
                            duration-500
                            group-hover:text-[#29B6F0]
                          "
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* Gradient Line */}

                      <div
                        className={`
                          mb-4
                          h-[2px]
                          w-10
                          rounded-full
                          bg-gradient-to-r
                          ${service.gradient}
                          transition-all
                          duration-500
                          group-hover:w-16
                        `}
                      />

                      {/* Title */}

                      <h3
                        className="
                          text-xl
                          font-semibold
                          leading-tight
                          text-white
                          transition-all
                          duration-500
                          group-hover:bg-gradient-to-r
                          group-hover:from-[#29B6F0]
                          group-hover:via-[#3E7BD6]
                          group-hover:to-[#B93FC9]
                          group-hover:bg-clip-text
                          group-hover:text-transparent
                          sm:text-[21px]
                          lg:text-[22px]
                        "
                      >
                        {service.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-2.5
                          text-[14px]
                          leading-6
                          text-[#A0A0A8]
                          transition-colors
                          duration-500
                          group-hover:text-[#D4D4D8]
                          sm:text-[15px]
                          sm:leading-6.5
                        "
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      IMAGE PANEL
                      Direction is controlled with inline transform
                  ================================================== */}

                  <div
                    className="absolute inset-0 z-30 overflow-hidden rounded-[22px]"
                    style={{
                      transform: isActive
                        ? "translate3d(0, 0, 0)"
                        : getInitialTransform(service.direction),
                      transition:
                        "transform 900ms cubic-bezier(0.76, 0, 0.24, 1)",
                      willChange: "transform",
                    }}
                  >
                    {/* Image */}

                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-black/30" />

                    {/* BeaverTek Gradient */}

                    <div
                      className={`
                        absolute
                        inset-0
                        bg-gradient-to-br
                        ${service.gradient}
                        opacity-10
                      `}
                    />

                    {/* Readability Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />

                    {/* Image State Content */}

                    <div
                      className={`
                        relative
                        z-20
                        flex
                        h-full
                        min-h-[310px]
                        flex-col
                        p-5
                        transition-all
                        duration-700
                        sm:min-h-[320px]
                        sm:p-6
                        lg:min-h-[340px]
                        lg:p-6
                        ${
                          isActive
                            ? "translate-y-0 opacity-100 delay-300"
                            : "translate-y-5 opacity-0 delay-0"
                        }
                      `}
                    >
                      {/* Close Arrow */}

                      <div className="flex justify-end">
                        <button
                          type="button"
                          aria-label={`Hide ${service.title}`}
                          onClick={() => setActiveCard(null)}
                          className="
                            flex
                            h-9
                            w-9
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/30
                            bg-black/45
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:border-[#29B6F0]
                            hover:bg-black/65
                          "
                        >
                          <ArrowUpRight
                            className="
                              h-4
                              w-4
                              rotate-90
                              text-[#29B6F0]
                            "
                            strokeWidth={1.8}
                          />
                        </button>
                      </div>

                      {/* Image Content */}

                      <div className="mt-auto">
                        {/* Icon */}

                        <div
                          className="
                            mb-5
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/20
                            bg-black/45
                            backdrop-blur-md
                          "
                        >
                          <Icon
                            className="h-5 w-5 text-[#29B6F0]"
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* Gradient Line */}

                        <div
                          className={`
                            mb-4
                            h-[2px]
                            w-16
                            rounded-full
                            bg-gradient-to-r
                            ${service.gradient}
                          `}
                        />

                        {/* Image Title - Gradient Only */}

                        <h3
                          className="
                            bg-gradient-to-r
                            from-[#29B6F0]
                            via-[#3E7BD6]
                            to-[#B93FC9]
                            bg-clip-text
                            text-xl
                            font-semibold
                            leading-tight
                            text-transparent
                            drop-shadow-[0_3px_10px_rgba(0,0,0,.5)]
                            sm:text-[21px]
                            lg:text-[22px]
                          "
                        >
                          {service.title}
                        </h3>

                        {/* Image Description */}

                        <p
                          className="
                            mt-2.5
                            text-[14px]
                            leading-6
                            text-white/90
                            drop-shadow-[0_3px_10px_rgba(0,0,0,.9)]
                            sm:text-[15px]
                            sm:leading-6.5
                          "
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Whatwedeliver;
