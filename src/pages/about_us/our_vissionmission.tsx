import React from "react";

function Our_vissionmission() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#29B6F0]">
            Who We Are
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Vision &{" "}
            <span className="bg-gradient-to-r from-[#29B6F0] via-[#7A4FD1] to-[#B93FC9] bg-clip-text text-transparent">
              Mission
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A0A0A8] sm:text-base">
            Building a smarter, data-driven future through innovation,
            reliable technology, and meaningful partnerships.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Vision */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#29B6F0]/40 sm:p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#29B6F0]/20 to-[#3E7BD6]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#29B6F0"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Our Vision
            </h3>

            <p className="text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
              To be a trusted technology partner, transforming the way
              businesses use data to make smarter decisions, drive innovation,
              and achieve sustainable growth in an increasingly data-driven
              world.
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#29B6F0] to-[#3E7BD6] transition-all duration-300 group-hover:w-24" />
          </div>

          {/* Mission */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#7A4FD1]/40 sm:p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A4FD1]/20 to-[#B93FC9]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B93FC9"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
                <path d="m16.2 7.8 5-5" />
                <path d="M21 3h-4" />
                <path d="M21 3v4" />
              </svg>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Our Mission
            </h3>

            <p className="text-sm leading-7 text-[#A0A0A8] sm:text-base sm:leading-8">
              At BeaverTek, we focus on giving clients precise and reliable
              data. We ensure this information is accessible whenever and
              wherever they need it. Our goal is to enable smarter decisions
              and drive meaningful growth. Ultimately, we help businesses
              succeed in an increasingly data-driven world.
            </p>

            <div className="mt-5 border-l-2 border-[#7A4FD1] pl-4">
              <p className="text-sm font-medium italic leading-7 text-white/80 sm:text-base">
                Empower our clients with accurate, actionable data anytime,
                anywhere so they can thrive in a data-driven world.
              </p>
            </div>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] transition-all duration-300 group-hover:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Our_vissionmission;