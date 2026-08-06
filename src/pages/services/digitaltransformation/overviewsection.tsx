import React from 'react'

function Overviewsection() {
  return (
    <div>
        <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">
  {/* Background Glow */}
  <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
  <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left Image */}
      <div className="relative">

        {/* Gradient Border */}
        <div className="rounded-[32px] bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 p-[1px]">

          <div className="overflow-hidden rounded-[31px] bg-[#0B0B0B]">

            <img
              src="/services/End-to-End Digital Transformation.jpg"
              alt="Digital Transformation"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-8 right-8 hidden max-w-xs rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:block">

          <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

          <p className="text-sm leading-7 text-zinc-300">
            End-to-End Digital Transformation
          </p>

        </div>

      </div>

      {/* Right Content */}
      <div>

        {/* Small Title */}
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
          Overview
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
          End-to-End
          <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Digital Transformation
          </span>
        </h2>

        {/* Divider */}
        <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        {/* Description */}
        <p className="mt-8 text-lg leading-9 text-zinc-300">
          Empower your business with a unified digital transformation
          ecosystem. Our comprehensive offering brings together cloud
          migration, application modernization, AI integration, and managed
          services into one seamless, scalable solution. We help organizations
          accelerate innovation, optimize operations, and unlock new business
          value through intelligent, cloud-first technologies.
        </p>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Overviewsection