import App_layout from '@/component/layout/app_layout'
import React from 'react'
import Overviewsection from './overviewsection'
import Beavertekdeliver from './beavertekdeliver'

function Herosection() {
  return (
    <div>
        <App_layout>
<section className="relative h-[70vh] min-h-[650px] overflow-hidden">

  {/* Background Image */}
  <img
    src="/services/End-to-end-digital-transformation.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

  {/* Top Glow */}
  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />

  {/* Content */}
  <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

    <div className="max-w-4xl">

      {/* Breadcrumb */}

      <span className="inline-flex rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
        Services / Digital Transformation
      </span>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">

        End-to-End

        <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Digital Transformation
        </span>

      </h1>

    </div>

  </div>

</section>
<Overviewsection/>
<Beavertekdeliver/>
</App_layout>
    </div>
  )
}

export default Herosection