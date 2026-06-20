"use client";

import App_layout from "@/component/layout/app_layout";
import Contactform from "./contactform";

export default function ContactHero() {
  return (
    <App_layout>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#E8EFF4] blur-3xl opacity-80"></div>

          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#6B91AD]/10 blur-3xl"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div data-aos="fade-right">

              <span className="inline-flex rounded-full border border-[#6B91AD]/30 bg-[#E8EFF4] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6B91AD]">

                GET IN TOUCH

              </span>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-light leading-tight text-[#161E2F]">

                Let's start with a conversation.

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-[#1A1A1A]/80">

                Tell us a bit about what you are trying to do. A senior member
                of the BeaverTek team will respond personally — usually within
                one business day. No call center. No sales pipeline. Just a
                conversation.

              </p>

            </div>

            {/* Right */}

            <div
              data-aos="fade-left"
              className="relative"
            >

              <div className="rounded-[36px] border border-[#E8EFF4] bg-white p-10 shadow-xl">

                <div className="space-y-8">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#161E2F] text-white text-xl">

                      💬

                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-[0.3em] text-[#6B91AD]">

                        Conversation

                      </p>

                      <h3 className="text-2xl font-semibold text-[#161E2F]">

                        Personal Response

                      </h3>

                    </div>

                  </div>

                  <div className="space-y-5">

                    <div className="rounded-2xl bg-[#F8FAFC] border border-[#E8EFF4] p-5 transition hover:border-[#6B91AD] hover:translate-x-2 duration-300">

                      <p className="text-[#1A1A1A]">

                        A senior member of the BeaverTek team will respond
                        personally.

                      </p>

                    </div>

                    <div className="rounded-2xl bg-[#F8FAFC] border border-[#E8EFF4] p-5 transition hover:border-[#6B91AD] hover:translate-x-2 duration-300">

                      <p className="text-[#1A1A1A]">

                        Usually within one business day.

                      </p>

                    </div>

                    <div className="rounded-2xl bg-[#161E2F] p-6 text-white">

                      <p className="leading-8">

                        No call center.<br />
                        No sales pipeline.<br />
                        Just a conversation.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Line */}

          <div
            data-aos="fade-up"
            className="mt-20 border-t border-[#E8EFF4] pt-10"
          >

            <div className="flex flex-col md:flex-row justify-between gap-8">

              <div>

                <h4 className="text-[#161E2F] font-semibold">

                  Senior Team

                </h4>

              </div>

              <div>

                <h4 className="text-[#161E2F] font-semibold">

                  Personal Response

                </h4>

              </div>

              <div>

                <h4 className="text-[#161E2F] font-semibold">

                  Usually Within One Business Day

                </h4>

              </div>

            </div>

          </div>

        </div>
 <Contactform/>
      </section>
     
    </App_layout>
  );
}