"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Productcontent() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <>
      {/* =======================================================
                BEAVER HEALTH AI (Part 2)
      ======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-32">

  {/* ================================
      PREMIUM AURORA BACKGROUND
  ================================= */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Cyan Glow */}
    <div className="absolute -top-52 -left-52 h-[600px] w-[600px]
      rounded-full bg-[#29B6F0]/20 blur-[180px]
      animate-pulse" />

    {/* Blue Glow */}
    <div className="absolute top-20 right-0 h-[520px] w-[520px]
      rounded-full bg-[#3E7BD6]/20 blur-[170px]" />

    {/* Violet Glow */}
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px]
      rounded-full bg-[#7A4FD1]/20 blur-[190px]" />

    {/* Magenta Glow */}
    <div className="absolute bottom-10 right-20 h-[420px] w-[420px]
      rounded-full bg-[#B93FC9]/15 blur-[160px]" />


    {/* Animated Grid */}

    <div
      className="
      absolute inset-0 opacity-[0.05]
      [background-image:linear-gradient(#3E7BD6_1px,transparent_1px),linear-gradient(90deg,#3E7BD6_1px,transparent_1px)]
      [background-size:50px_50px]
      "
    />

  </div>



  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">


    <div className="grid items-center gap-16 lg:grid-cols-2">


      {/* ================================
          LEFT CONTENT
      ================================= */}


      <div data-aos="fade-right">


        {/* Badge */}

        <div
          className="
          inline-flex items-center
          rounded-full
          border border-[#3E7BD6]/40
          bg-[#121212]/70
          px-5 py-2
          backdrop-blur-2xl
          shadow-[0_15px_40px_rgba(41,182,240,.15)]
          "
        >

          <Activity 
            className="mr-2 h-4 w-4 text-[#29B6F0]"
          />

          <span
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#29B6F0]
            "
          >
            Beaver Product
          </span>

        </div>




        {/* Heading */}

        <h1
          className="
          mt-8
          text-5xl
          font-black
          leading-tight
          text-white
          md:text-6xl
          "
        >

          <span
            className="
            bg-gradient-to-r
            from-[#29B6F0]
            via-[#3E7BD6]
            via-[#7A4FD1]
            to-[#B93FC9]
            bg-clip-text
            text-transparent
            "
          >
            BeaverHealthAI
          </span>


        </h1>




        {/* Sub Heading */}

        <p
          className="
          mt-5
          text-xl
          font-medium
          text-[#D4D4D8]
          "
        >
          Intelligent Healthcare AI Platform
        </p>




        {/* Description */}

        <p
          className="
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-[#A0A0A8]
          "
        >

          BeaverHealthAI combines AI-powered patient intake,
          intelligent triaging, remote patient monitoring,
          predictive analytics and hospital workflow automation
          into one secure enterprise platform.

        </p>





        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">


          {/* Primary Button */}

          <Link
            href="https://beaverhealth.ai"
            target="_blank"
            className="
            group
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-[#29B6F0]
            via-[#3E7BD6]
            via-[#7A4FD1]
            to-[#B93FC9]

            px-8
            py-4

            text-sm
            font-semibold
            text-white

            shadow-[0_20px_60px_rgba(41,182,240,.35)]

            transition-all
            duration-500

            hover:-translate-y-1
            hover:scale-105
            "
          >

            Visit Platform


            <ArrowRight
              className="
              ml-3
              h-5
              w-5
              transition
              group-hover:translate-x-1
              "
            />


          </Link>





          {/* Secondary Button */}

          <Link
            href="/customers/casestudyhero"

            className="
            rounded-full

            border
            border-[#3E7BD6]

            bg-[#121212]/70

            px-8
            py-4

            text-sm
            font-semibold

            text-white

            backdrop-blur-xl

            transition-all
            duration-500

            hover:bg-[#3E7BD6]

            hover:scale-105
            "
          >

            Contact Sales

          </Link>


        </div>





        {/* Small Trust Tags */}

        <div className="mt-12 flex flex-wrap gap-4">


          {[
            "AI Powered",
            "Healthcare",
            "Cloud Native",
            "Enterprise Security"
          ].map((item)=>(

            <div
              key={item}
              className="
              rounded-full
              border
              border-[#2A2A30]

              bg-[#121212]/70

              px-5
              py-2

              text-sm

              text-[#D4D4D8]

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-[#3E7BD6]

              hover:text-white
              "
            >

              {item}

            </div>

          ))}


        </div>



      </div>



      {/* RIGHT SIDE KEEP YOUR EXISTING CODE */}

      <div>
        {/* Existing Right Card */}
        {/* ================================================= */}
{/* RIGHT SIDE - PREMIUM AI GLASS CARD */}
{/* ================================================= */}

<div
  data-aos="fade-left"
  className="relative flex min-h-[620px] items-center justify-center"
>


{/* Floating Glow */}

<div
className="
absolute
top-10
right-10
h-64
w-64
rounded-full
bg-[#29B6F0]/20
blur-[140px]
"
/>


<div
className="
absolute
bottom-10
left-0
h-72
w-72
rounded-full
bg-[#7A4FD1]/20
blur-[150px]
"
/>



{/* Gradient Border Wrapper */}

<div
className="
relative
w-full
rounded-[36px]
p-[1px]

bg-gradient-to-r
from-[#29B6F0]
via-[#3E7BD6]
via-[#7A4FD1]
to-[#B93FC9]

shadow-[0_30px_100px_rgba(41,182,240,.20)]
"
>


{/* Glass Card */}

<div
className="
relative
overflow-hidden
rounded-[35px]

border
border-[#2A2A30]

bg-[#121212]/90

backdrop-blur-2xl

transition-all
duration-500

hover:-translate-y-3
hover:scale-[1.02]

hover:shadow-[0_40px_120px_rgba(62,123,214,.30)]
"
>


{/* Animated Top Line */}

<div
className="
h-1
w-full

bg-gradient-to-r
from-[#29B6F0]
via-[#3E7BD6]
via-[#7A4FD1]
to-[#B93FC9]

animate-pulse
"
/>



<div className="p-8 lg:p-12">


{/* Header */}

<div className="flex items-center gap-5">


<div
className="
flex
h-16
w-16
items-center
justify-center

rounded-2xl

bg-gradient-to-br
from-[#29B6F0]
via-[#3E7BD6]
to-[#7A4FD1]

shadow-[0_15px_45px_rgba(41,182,240,.35)]
"
>

<Brain
className="
h-8
w-8
text-white
"
/>

</div>




<div>


<p
className="
text-xs
uppercase
tracking-[0.35em]
text-[#29B6F0]
"
>
AI Platform
</p>


<h2
className="
mt-2
text-3xl
font-bold
text-white
"
>
Healthcare AI
Platform
</h2>


</div>


</div>





{/* Description */}


<p
className="
mt-8
text-[17px]
leading-9
text-[#D4D4D8]
"
>

A healthcare intelligence platform combining AI-powered
patient intake, intelligent triaging, remote monitoring,
predictive analytics and automated clinical workflows.

</p>





{/* Divider */}


<div
className="
my-10
h-px
w-full

bg-gradient-to-r
from-transparent
via-[#3E7BD6]/50
to-transparent
"
/>






{/* Feature 1 */}

<div
data-aos="fade-up"
className="
group

flex
items-start
gap-5

rounded-[24px]

border
border-[#2A2A30]

bg-[#1A1A1E]/80

p-5

transition-all
duration-500

hover:border-[#29B6F0]

hover:scale-[1.02]

hover:shadow-[0_20px_60px_rgba(41,182,240,.20)]
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center

rounded-xl

bg-gradient-to-br
from-[#29B6F0]
to-[#3E7BD6]
"
>

<HeartPulse
className="h-6 w-6 text-white"
/>

</div>



<div>


<h4
className="
font-semibold
text-white
"
>
Smart Patient Intake
</h4>


<p
className="
mt-2
text-sm
leading-7
text-[#A0A0A8]
"
>
Intelligent registration and automated triage
to reduce healthcare workload.
</p>


</div>


</div>







{/* Feature 2 */}


<div
data-aos="fade-up"
data-aos-delay="150"

className="
mt-5

group

flex
items-start
gap-5

rounded-[24px]

border
border-[#2A2A30]

bg-[#1A1A1E]/80

p-5

transition-all
duration-500

hover:border-[#7A4FD1]

hover:scale-[1.02]

hover:shadow-[0_20px_60px_rgba(122,79,209,.25)]
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center

rounded-xl

bg-gradient-to-br
from-[#3E7BD6]
to-[#7A4FD1]
"
>

<Activity
className="h-6 w-6 text-white"
/>

</div>



<div>


<h4
className="
font-semibold
text-white
"
>
Remote Monitoring
</h4>


<p
className="
mt-2
text-sm
leading-7
text-[#A0A0A8]
"
>
Real-time patient insights beyond hospital walls
with secure AI monitoring.
</p>


</div>


</div>







{/* Feature 3 */}


<div
data-aos="fade-up"
data-aos-delay="300"

className="
mt-5

group

flex
items-start
gap-5

rounded-[24px]

border
border-[#2A2A30]

bg-[#1A1A1E]/80

p-5

transition-all
duration-500

hover:border-[#B93FC9]

hover:scale-[1.02]

hover:shadow-[0_20px_60px_rgba(185,63,201,.25)]
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center

rounded-xl

bg-gradient-to-br
from-[#7A4FD1]
to-[#B93FC9]
"
>

<ShieldCheck
className="h-6 w-6 text-white"
/>

</div>



<div>


<h4
className="
font-semibold
text-white
"
>
Enterprise Security
</h4>


<p
className="
mt-2
text-sm
leading-7
text-[#A0A0A8]
"
>
Secure cloud architecture with enterprise-grade
healthcare data protection.
</p>


</div>


</div>




</div>


</div>


</div>


</div>
      </div>


    </div>


  </div>


</section>

     
      {/* =======================================================
      Live Impact Starts (Part 3)
======================================================= */}

      <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-28">
  {/* Background */}
  
 {/* ================================
      PREMIUM AURORA BACKGROUND
  ================================= */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Cyan Glow */}
    <div className="absolute -top-52 -left-52 h-[600px] w-[600px]
      rounded-full bg-[#29B6F0]/20 blur-[180px]
      animate-pulse" />

    {/* Blue Glow */}
    <div className="absolute top-20 right-0 h-[520px] w-[520px]
      rounded-full bg-[#3E7BD6]/20 blur-[170px]" />

    {/* Violet Glow */}
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px]
      rounded-full bg-[#7A4FD1]/20 blur-[190px]" />

    {/* Magenta Glow */}
    <div className="absolute bottom-10 right-20 h-[420px] w-[420px]
      rounded-full bg-[#B93FC9]/15 blur-[160px]" />


    {/* Animated Grid */}

    <div
      className="
      absolute inset-0 opacity-[0.05]
      [background-image:linear-gradient(#3E7BD6_1px,transparent_1px),linear-gradient(90deg,#3E7BD6_1px,transparent_1px)]
      [background-size:50px_50px]
      "
    />

  </div>


  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* Heading */}

    <div
      data-aos="fade-up"
      className="mx-auto max-w-3xl text-center"
    >

      <span className="inline-flex rounded-full border border-[#2A2A30] bg-[#121212] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#29B6F0] backdrop-blur-xl">
        LIVE IMPACT
      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight text-[#FFFFFF] md:text-5xl">
        Healthcare AI{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
          }}
        >
          Running In Production
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#D4D4D8]">
        Serving hospitals, empowering healthcare professionals, and
        processing healthcare data securely with AI-powered automation.
      </p>

    </div>

          {/* ================================================= */}
          {/* Bento Cards */}
          {/* ================================================= */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
  {/* Card 1 */}

  <div
    data-aos="zoom-in"
    className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6] hover:shadow-[0_0_40px_rgba(62,123,214,.35)]"
  >
    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#29B6F0]/20 blur-[80px]" />

    <div className="relative">
      <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] shadow-[0_0_40px_rgba(62,123,214,.35)]">
        🏥
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#FFFFFF]">
        Multiple Hospitals
      </h3>

      <p className="mt-4 leading-7 text-[#D4D4D8]">
        Trusted by hospitals and healthcare providers with
        enterprise-grade digital healthcare infrastructure.
      </p>

      <div className="mt-8 border-t border-[#2A2A30] pt-5">
        <h4 className="text-4xl font-black text-[#29B6F0]">10+</h4>

        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
          Healthcare Partners
        </p>
      </div>
    </div>
  </div>

  {/* Card 2 */}

  <div
    data-aos="zoom-in"
    data-aos-delay="150"
    className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#7A4FD1] hover:shadow-[0_0_40px_rgba(122,79,209,.35)]"
  >
    <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#7A4FD1]/20 blur-[90px]" />

    <div className="relative">
      <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] shadow-[0_0_40px_rgba(62,123,214,.35)]">
        👨‍⚕️
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#FFFFFF]">
        Patients Supported
      </h3>

      <p className="mt-4 leading-7 text-[#D4D4D8]">
        AI-powered patient engagement helping thousands receive faster
        and more personalized care.
      </p>

      <div className="mt-8 border-t border-[#2A2A30] pt-5">
        <h4 className="text-4xl font-black text-[#7A4FD1]">50K+</h4>

        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
          Patients
        </p>
      </div>
    </div>
  </div>

  {/* Card 3 */}

  <div
    data-aos="zoom-in"
    data-aos-delay="300"
    className="group relative overflow-hidden rounded-[24px] border border-[#2A2A30] bg-[#121212] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#B93FC9] hover:shadow-[0_0_60px_rgba(185,63,201,.35)]"
  >
    <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-[#B93FC9]/20 blur-[90px]" />

    <div className="relative">
      <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] shadow-[0_0_40px_rgba(62,123,214,.35)]">
        📊
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#FFFFFF]">
        Healthcare Analytics
      </h3>

      <p className="mt-4 leading-7 text-[#D4D4D8]">
        Processing healthcare insights securely with AI-driven
        predictive analytics and automation.
      </p>

      <div className="mt-8 border-t border-[#2A2A30] pt-5">
        <h4 className="text-4xl font-black text-[#B93FC9]">AI</h4>

        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
          Powered Intelligence
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ================================================= */}
          {/* Bottom Stats */}
          {/* ================================================= */}

<div
  data-aos="fade-up"
  className="mt-20 grid grid-cols-2 gap-6 rounded-[28px] border border-[#2A2A30] bg-[#121212]/80 p-8 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,.45)] lg:grid-cols-4"
>
  <div className="text-center">
    <h3 className="text-4xl font-black text-[#29B6F0]">10+</h3>

    <p className="mt-2 text-sm text-[#A0A0A8]">
      Hospitals
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-4xl font-black text-[#3E7BD6]">
      50K+
    </h3>

    <p className="mt-2 text-sm text-[#A0A0A8]">
      Patients
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-4xl font-black text-[#7A4FD1]">
      24/7
    </h3>

    <p className="mt-2 text-sm text-[#A0A0A8]">
      Monitoring
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-4xl font-black text-[#B93FC9]">
      AI
    </h3>

    <p className="mt-2 text-sm text-[#A0A0A8]">
      Automation
    </p>
  </div>
</div>
        </div>
      </section>

      {/* =======================================================
      Premium CTA Starts (Part 4)
======================================================= */}
      
 <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EEF5FF_30%,#F5F1FF_70%,#FFF9FE_100%)] py-16 lg:py-20">

  {/* ================================================= */}
  {/* PREMIUM AURORA BACKGROUND */}
  {/* ================================================= */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Cyan Glow */}
    <div className="absolute -top-56 -left-56 h-[620px] w-[620px] rounded-full bg-[#29B6F0]/20 blur-[180px] animate-pulse" />

    {/* Blue Glow */}
    <div className="absolute top-10 right-0 h-[520px] w-[520px] rounded-full bg-[#3E7BD6]/18 blur-[170px]" />

    {/* Violet Glow */}
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#7A4FD1]/18 blur-[180px]" />

    {/* Magenta Glow */}
    <div className="absolute bottom-10 right-16 h-[430px] w-[430px] rounded-full bg-[#B93FC9]/15 blur-[170px]" />

    {/* Soft White Glow */}
    <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[220px]" />

    {/* Animated Grid */}
    <div
      className="absolute inset-0 opacity-[0.05]
      [background-image:linear-gradient(#3E7BD6_1px,transparent_1px),linear-gradient(90deg,#3E7BD6_1px,transparent_1px)]
      [background-size:48px_48px]"
    />

    {/* Radial Overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,182,240,.12),transparent_60%)]" />

  </div>

  {/* ================================================= */}
  {/* Container */}
  {/* ================================================= */}

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

    <div
      data-aos="fade-up"
      className="overflow-hidden rounded-[34px] border border-white/70 bg-white/80 backdrop-blur-3xl shadow-[0_30px_90px_rgba(41,182,240,.08)]"
    >

      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div className="relative p-8 lg:p-14">

          {/* Small Glow */}
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#29B6F0]/10 blur-[100px]" />

          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-[#29B6F0]/20 bg-[#29B6F0]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#29B6F0]">

            BEAVERHEALTHAI

          </span>

          {/* Heading */}

          <h2 className="mt-7 text-4xl font-black leading-[1.08] text-[#111111] lg:text-6xl">

            Smart Healthcare

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
              }}
            >
              {" "}
              Platform
            </span>

          </h2>

          {/* Description */}

          <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#5E6673]">

            BeaverHealthAI is an intelligent healthcare platform engineered by
            BeaverTek to automate clinical workflows, enhance patient care,
            deliver predictive analytics, and provide secure AI-powered digital
            healthcare solutions for hospitals and healthcare organizations.

          </p>

         
          {/* CTA */}

          <div className="mt-10 flex flex-wrap items-center gap-5">

            <Link
              href="https://beaverhealth.ai"
              target="_blank"
              className="group inline-flex items-center rounded-full px-8 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_55px_rgba(62,123,214,.35)]"
              style={{
                background:
                  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
              }}
            >
              Visit BeaverHealthAI

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

           

          </div>

        </div>
                {/* ================= Right ================= */}

        <div className="relative flex items-center justify-center px-8 pb-10 lg:px-10 lg:py-12">

          {/* Premium Background Glow */}

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-r from-[#29B6F0]/20 via-[#3E7BD6]/20 via-[#7A4FD1]/20 to-[#B93FC9]/20 blur-[110px]" />

          </div>

          {/* Decorative Blob 1 */}

          <div className="absolute -top-8 right-10 h-24 w-24 rounded-full bg-[#29B6F0]/20 blur-3xl" />

          {/* Decorative Blob 2 */}

          <div className="absolute bottom-0 left-8 h-28 w-28 rounded-full bg-[#B93FC9]/20 blur-3xl" />

          {/* Decorative Ring */}

          <div className="absolute right-16 top-14 h-20 w-20 rounded-full border border-[#3E7BD6]/20 bg-white/20 backdrop-blur-xl" />

          {/* Organic Image */}

          <div className="relative">

            {/* Outer Glow */}

            <div
              className="absolute inset-0 scale-110 blur-[90px]"
              style={{
                borderRadius: "40% 60% 55% 45% / 42% 34% 66% 58%",
                background:
                  "linear-gradient(135deg,rgba(41,182,240,.25),rgba(62,123,214,.20),rgba(122,79,209,.20),rgba(185,63,201,.20))",
              }}
            />

            {/* Glass Border */}

            <div
              className="absolute -inset-3 backdrop-blur-xl"
              style={{
                borderRadius: "42% 58% 60% 40% / 40% 32% 68% 60%",
                background: "rgba(255,255,255,.35)",
              }}
            />

            {/* Image Container */}

            <div
              className="relative overflow-hidden border border-white/80 bg-white shadow-[0_35px_90px_rgba(0,0,0,.18)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_110px_rgba(62,123,214,.25)]"
              style={{
                borderRadius: "38% 62% 58% 42% / 42% 35% 65% 58%",
              }}
            >
              <Image
                src="/home/abouthero1.png"
                alt="BeaverHealthAI"
                width={520}
                height={430}
                priority
                className="w-full max-w-[430px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -left-10 top-8 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,.12)] backdrop-blur-xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                AI Powered
              </p>

              <h4 className="mt-2 text-xl font-bold text-[#111111]">
                Healthcare
              </h4>

            </div>

            {/* Floating Badge */}

            <div className="absolute -right-8 bottom-8 rounded-full bg-gradient-to-r from-[#29B6F0] via-[#3E7BD6] via-[#7A4FD1] to-[#B93FC9] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(62,123,214,.35)]">

              Secure Platform

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* =======================================================
      Relationship Section Starts (Part 5)
======================================================= */}
     

      <section className="relative overflow-hidden bg-[#000000] py-20 lg:py-24">
  {/* Background Effects */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-32 left-0 h-[380px] w-[380px] rounded-full bg-[#29B6F0]/15 blur-[150px]" />

    <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#B93FC9]/15 blur-[180px]" />

    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(41,182,240,.08), transparent 65%)",
      }}
    />

    <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#3E7BD6_1px,transparent_1px)] [background-size:28px_28px]" />

  </div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

    <div
      data-aos="zoom-in"
      className="overflow-hidden rounded-[32px] border border-[#2A2A30] bg-[#121212]/90 p-10 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,.45)] lg:p-16"
    >

      {/* Top Gradient */}

      <div
        className="mx-auto h-1 w-32 rounded-full"
        style={{
          background:
            "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
        }}
      />

      {/* Logo Circle */}

      <div className="mt-10 flex justify-center">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full shadow-[0_20px_60px_rgba(62,123,214,.35)]"
          style={{
            background:
              "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
          }}
        >
          <span className="text-4xl">🚀</span>
        </div>
      </div>

      {/* Heading */}

      <h2 className="mt-10 text-center text-3xl font-black text-[#FFFFFF] md:text-4xl">
        Built by{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
          }}
        >
          BeaverTek
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-[#D4D4D8]">
        <span className="font-semibold text-[#FFFFFF]">
          BeaverHealthAI
        </span>{" "}
        is a flagship product of
        <span className="font-semibold text-[#FFFFFF]">
          {" "}BeaverTek
        </span>,
        designed, engineered and continuously operated by our in-house
        product team. Every feature reflects our expertise in AI,
        cloud-native architecture, healthcare workflows and enterprise
        software engineering.
      </p>

      {/* Feature Chips */}

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {[
          "AI Powered",
          "Healthcare",
          "Cloud Native",
          "Enterprise Security",
          "Scalable Platform",
          "Built by BeaverTek",
        ].map((item) => (
          <div
            key={item}
            className="rounded-full border border-[#2A2A30] bg-[#1A1A1E] px-5 py-3 text-sm font-medium text-[#FFFFFF] backdrop-blur-xl transition-all duration-300 hover:border-[#3E7BD6] hover:bg-[#121212]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Divider */}

      <div
        className="my-12 h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(62,123,214,.35), transparent)",
        }}
      />

      {/* Bottom Stats */}

      <div className="grid gap-6 text-center md:grid-cols-3">

        <div>
          <h3
            className="bg-clip-text text-4xl font-black text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
            }}
          >
            AI
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
            Driven Innovation
          </p>
        </div>

        <div>
          <h3
            className="bg-clip-text text-4xl font-black text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
            }}
          >
            24/7
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
            Reliable Platform
          </p>
        </div>

        <div>
          <h3
            className="bg-clip-text text-4xl font-black text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)",
            }}
          >
            100%
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#A0A0A8]">
            BeaverTek Built
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}
