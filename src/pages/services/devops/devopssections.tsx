
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DevOpsSections() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });

    AOS.refresh();
  }, []);

  const services = [
    {
      number: "01",
      title: "DevOps",
      description:
        "Accelerate innovation. Automate delivery. Scale with confidence. We streamline your software lifecycle with automated build, test, and deployment pipelines enabling faster releases and stronger collaboration across teams.",
      image: "/services/Data Analytics1.jpg",
      gradient: "from-[#29B6F0] via-[#3E7BD6] to-[#7A4FD1]",
    },
    {
      number: "02",
      title: "DevSecOps",
      description:
        "Secure every line of code. Deliver with confidence. Security is built into every stage of development. We integrate automated security checks, compliance controls, and vulnerability remediation to ensure rapid, safe, and reliable releases.",
      image: "/services/Data Analytics1.jpg",
      gradient: "from-[#7A4FD1] via-[#B93FC9] to-[#29B6F0]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000000] py-9 sm:py-12 lg:py-14">
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-[240px] w-[240px] rounded-full bg-[#29B6F0]/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

      <div className="absolute -right-40 bottom-10 h-[240px] w-[240px] rounded-full bg-[#B93FC9]/10 blur-[120px] sm:h-[320px] sm:w-[320px]" />

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

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
        {/* Section Heading */}

        <div
          className="mb-7 max-w-3xl sm:mb-9 lg:mb-10"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="inline-flex items-center rounded-full border border-[#2A2A30] bg-[rgba(255,255,255,.05)] px-3 py-1 backdrop-blur-xl sm:px-4 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29B6F0] shadow-[0_0_10px_rgba(41,182,240,.7)]" />

            <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D4D4D8] sm:text-[11px]">
              DevOps & DevSecOps
            </span>
          </div>
        </div>

        {/* Service Sections */}

        <div className="space-y-12 sm:space-y-14 lg:space-y-16">
          {services.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={service.number}
                className={`grid items-center gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-10 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}

                <div
                  className="relative flex items-center justify-center"
                  data-aos={reverse ? "fade-left" : "fade-right"}
                  data-aos-duration="900"
                >
                  <div className="w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[210px] w-full object-fill sm:h-[270px] md:h-[310px] lg:h-[350px] xl:h-[390px]"
                    />
                  </div>
                </div>

                {/* TEXT */}

                <div
                  className="max-w-xl"
                  data-aos={reverse ? "fade-right" : "fade-left"}
                  data-aos-delay="120"
                  data-aos-duration="900"
                >
                  

                  {/* Title */}

                 
<h2 className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl xl:text-[46px]">
  {service.title.length > 4 ? (
    <>
      <span className="text-[#FFFFFF]">
        {service.title.slice(0, Math.ceil(service.title.length / 2))}
      </span>
      <span
        className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
      >
        {service.title.slice(Math.ceil(service.title.length / 2))}
      </span>
    </>
  ) : (
    <span className="text-[#FFFFFF]">{service.title}</span>
  )}
</h2>



                  {/* Gradient Underline */}

                  <div
                    className={`mt-3 h-[2px] w-10 bg-gradient-to-r ${service.gradient} sm:mt-4 sm:w-12`}
                  />

                  {/* Description */}

                  <p className="mt-4 text-[13px] leading-6 text-[#A0A0A8] sm:mt-5 sm:text-sm sm:leading-7 lg:text-[15px]">
                    {service.description}
                  </p>

                  {/* Decorative Element */}

                  <div className="mt-5 flex items-center gap-2 sm:mt-6">
                    <div
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient} shadow-[0_0_10px_rgba(41,182,240,.5)]`}
                    />

                    <div className="h-px w-8 bg-[#2A2A30] sm:w-10" />
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

export default DevOpsSections;

