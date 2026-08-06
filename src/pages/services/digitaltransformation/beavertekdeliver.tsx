import React from 'react'

function Beavertekdeliver() {
  return (
    <div>
        <section className="relative overflow-hidden bg-black py-24 lg:py-32">
  {/* Background Glow */}
  <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
  <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[180px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
        What BeaverTek Deliver
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
        What
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          {" "}BeaverTek{" "}
        </span>
        Deliver
      </h2>

    </div>

    {/* Timeline */}
    <div className="relative mt-24">

      {/* Center Line */}
      <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 lg:block" />

      {/* Item 1 */}
      <div className="relative mb-24 grid items-center gap-10 lg:grid-cols-2">

        <div className="text-right lg:pr-20">
          <h3 className="text-3xl font-semibold text-white">
            Cloud Migration &
            <br />
            Modernization
          </h3>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Move from legacy systems to secure, scalable cloud environments
            with minimal disruption and maximum performance.
          </p>
        </div>

        <div />

        <div className="absolute left-1/2 top-5 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-cyan-400 lg:block" />

      </div>

      {/* Item 2 */}
      <div className="relative mb-24 grid items-center gap-10 lg:grid-cols-2">

        <div />

        <div className="lg:pl-20">

          <h3 className="text-3xl font-semibold text-white">
            AI-Driven
            <br />
            Automation
          </h3>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Transform workflows with intelligent automation that reduces
            manual effort, improves accuracy, and accelerates
            decision-making.
          </p>

        </div>

        <div className="absolute left-1/2 top-5 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-blue-500 lg:block" />

      </div>

      {/* Item 3 */}
      <div className="relative mb-24 grid items-center gap-10 lg:grid-cols-2">

        <div className="text-right lg:pr-20">

          <h3 className="text-3xl font-semibold text-white">
            Integrated
            <br />
            AI Solutions
          </h3>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Deploy advanced AI capabilities across your business—from
            predictive analytics to conversational interfaces.
          </p>

        </div>

        <div />

        <div className="absolute left-1/2 top-5 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-violet-500 lg:block" />

      </div>

      {/* Item 4 */}
      <div className="relative mb-24 grid items-center gap-10 lg:grid-cols-2">

        <div />

        <div className="lg:pl-20">

          <h3 className="text-3xl font-semibold text-white">
            Managed
            <br />
            Services
          </h3>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            End-to-end operational support ensuring reliability, security,
            and continuous optimization of your digital ecosystem.
          </p>

        </div>

        <div className="absolute left-1/2 top-5 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-cyan-400 lg:block" />

      </div>

      {/* Item 5 */}
      <div className="relative grid items-center gap-10 lg:grid-cols-2">

        <div className="text-right lg:pr-20">

          <h3 className="text-3xl font-semibold text-white">
            AI
            <br />
            Analytics
          </h3>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Turn data into actionable insights with advanced analytics,
            predictive modeling, and real-time dashboards that empower
            smarter business decisions.
          </p>

        </div>

        <div />

        <div className="absolute left-1/2 top-5 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-blue-500 lg:block" />

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Beavertekdeliver