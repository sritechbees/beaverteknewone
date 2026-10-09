
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Brent",
    designation: "Senior Vice President",
    description:
      "I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. Your dedication, attention to details, and willingness to go beyond expectations truly stood out.",
    initials: "B",
    project: "Reporting Solutions",
  },
  {
    id: 2,
    name: "Cooraez",
    designation: "CEO",
    description:
      "BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.",
    initials: "C",
    project: "Project Excellence",
  },
  {
    id: 3,
    name: "Ravi Rajagopal",
    designation: "CEO",
    description:
      "I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes they went all in, and it made a huge difference.",
    initials: "R",
    project: "Campus Solutions",
  },
];

const BRAND_GRADIENT =
  "linear-gradient(110deg, #29B6F0 0%, #3E7BD6 38%, #7A4FD1 72%, #B93FC9 100%)";

const LIGHT_BRAND_GRADIENT =
  "linear-gradient(135deg, rgba(41,182,240,0.13) 0%, rgba(62,123,214,0.09) 38%, rgba(122,79,209,0.10) 72%, rgba(185,63,201,0.12) 100%)";

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 45,
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

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-9 sm:py-11 md:py-13 lg:py-15">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Section heading */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-7 max-w-4xl text-center sm:mb-8 md:mb-10"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="60"
            className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#3E7BD6]/15 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_18px_rgba(41,182,240,0.07)] backdrop-blur-xl sm:mb-4"
          >
            <Sparkles
              size={13}
              strokeWidth={2}
              className="shrink-0 text-[#29B6F0]"
              aria-hidden="true"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#525866] sm:text-[10px] sm:tracking-[0.25em] md:text-[11px]">
              Voices of Our Clients
            </span>
          </div>

          <h2 className="text-[25px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#111318] sm:text-[30px] md:text-[37px] lg:text-[43px] xl:text-[46px]">
            Trusted by Clients.
            <span
              className="mt-1 block bg-clip-text text-transparent sm:mt-1.5"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Proven by Results.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[12px] leading-6 text-[#626977] sm:mt-4 sm:text-sm sm:leading-7 md:text-[15px]">
            Strong partnerships. Exceptional collaboration. Real experiences
            from the people who work with BeaverTek.
          </p>

          <div className="mx-auto mt-5 flex w-fit items-center gap-1.5 sm:mt-6">
            <span className="h-1 w-6 rounded-full bg-[#29B6F0]" />
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1]" />
            <span className="h-1 w-6 rounded-full bg-[#B93FC9]" />
          </div>
        </div>

        {/* Responsive flex testimonial cards */}
        <div className="flex flex-col items-stretch gap-4 sm:gap-5 md:flex-row md:flex-wrap md:items-stretch md:justify-center lg:flex-nowrap lg:gap-5">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative flex min-w-0 flex-1 basis-full flex-col rounded-[21px] p-px transition-all duration-500 ease-out hover:-translate-y-1 sm:rounded-[24px] md:basis-[calc(50%-0.625rem)] lg:basis-0"
              style={{
                background:
                  "linear-gradient(145deg, rgba(41,182,240,0.58), rgba(62,123,214,0.17) 38%, rgba(122,79,209,0.30) 72%, rgba(185,63,201,0.40))",
              }}
            >
              {/* Subtle gradient border glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30 sm:rounded-[25px]"
                style={{ backgroundImage: BRAND_GRADIENT }}
              />

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-4 shadow-[0_4px_20px_rgba(17,19,24,0.03)] transition-all duration-500 sm:rounded-[23px] sm:p-5 md:p-5 lg:p-5 xl:p-5"
                style={{
                  backgroundImage: "none",
                }}
              >
               {/* Smooth left-to-right BeaverTek gradient overlay */}
<div
  className="
    pointer-events-none
    absolute inset-0
    -translate-x-full
    transition-transform duration-700 ease-in-out
    group-hover:translate-x-0
  "
  style={{
    backgroundImage: LIGHT_BRAND_GRADIENT,
  }}
/>

                {/* Quote icon */}
                <div className="relative mb-4 flex items-center justify-between sm:mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#29B6F0]/20 bg-[#29B6F0]/[0.07] transition-all duration-300 group-hover:scale-105 group-hover:border-[#29B6F0]/40 group-hover:bg-white/70 sm:h-11 sm:w-11 sm:rounded-2xl">
                    <Quote
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="text-[#29B6F0] transition-transform duration-300 group-hover:rotate-[-8deg]"
                    />
                  </div>
                </div>

            
{/* Testimonial description and aligned project labels */}
<div className="relative flex flex-1 flex-col">
  <p className="text-[15px] leading-[1.85] text-[#515967] transition-colors duration-300 group-hover:text-[#363E4B] sm:text-base sm:leading-[1.85] md:text-[15px] lg:text-[15px] xl:text-base">
    “{item.description}”
  </p>

  {/* Project label — aligned at the same position */}
  <div className="mt-auto pt-4 sm:pt-5">
    <div className="inline-flex min-h-[30px] w-fit max-w-full items-center gap-2 rounded-full border border-[#3E7BD6]/10 bg-[#F7F9FC] px-2.5 py-1.5 transition-all duration-300 group-hover:border-[#3E7BD6]/20 group-hover:bg-white/70">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundImage: BRAND_GRADIENT }}
      />

      <span className="break-words text-[10px] font-semibold text-[#626977] sm:text-[11px]">
        {item.project}
      </span>
    </div>
  </div>
</div>



                {/* Divider */}
                <div className="relative my-4 h-px bg-gradient-to-r from-[#DCE2EC] via-[#E8EBF2] to-transparent sm:my-5" />

                {/* Client profile */}
                <div className="relative flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <div
                    className="h-11 w-11 shrink-0 rounded-full p-[1.5px] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
                    style={{ backgroundImage: BRAND_GRADIENT }}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-white/80">
                      <span
                        className="bg-clip-text text-base font-extrabold text-transparent sm:text-lg"
                        style={{ backgroundImage: BRAND_GRADIENT }}
                      >
                        {item.initials}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words text-sm font-bold text-[#171B24] transition-colors duration-300 group-hover:text-[#3E7BD6] sm:text-[15px]">
                      {item.name}
                    </h3>

                    <p className="mt-0.5 text-[11px] leading-5 text-[#7A8290] sm:text-xs">
                      {item.designation}
                    </p>
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div
                  className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 opacity-80 transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6"
                  style={{ backgroundImage: BRAND_GRADIENT }}
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}