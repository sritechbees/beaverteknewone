
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Clapperboard,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Image as ImageIcon,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Producthero from "./producthero";
import AllProducts from "./allproducts";

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const products = [
  {
    id: "triora",
    name: "Triora",
    category: "Symptom Triage",
    short: "Intelligent symptom assessment and healthcare guidance.",
     image: "/product/triora.png",
    description:
      "Support symptom assessment, AI-driven triage, and guidance to help identify potential red flags.",
    icon: Stethoscope,
    features: [
      "Mobile-based symptom assessment",
      "AI-driven triage support",
      "Instant symptom guidance",
      "Potential red flag detection",
    ],
    workflow: [
      { title: "Enter Symptoms", description: "The user shares symptoms through the mobile experience." },
      { title: "Assess & Triage", description: "Submitted information is evaluated to support triage." },
      { title: "Receive Guidance", description: "The user receives guidance and red-flag awareness." },
    ],
  },
  {
    id: "care360",
    name: "Care360 AI",
    category: "Preventive Care",
    short: "Personalized health insights and proactive care planning.",
     image: "/product/Care360 AI.png",
    description:
      "Support preventive healthcare through AI-powered risk triage, personalized health scores, and smart care plans.",
    icon: HeartPulse,
    features: [
      "AI-powered risk triage",
      "Personalized health score",
      "Smart care plans",
      "Preventive care support",
    ],
    workflow: [
      { title: "Understand Health", description: "Relevant health information is considered for assessment." },
      { title: "Evaluate Risk", description: "Risk triage and health scoring support risk awareness." },
      { title: "Plan Preventive Care", description: "Health insights help guide appropriate care planning." },
    ],
  },
  {
    id: "clipcraft",
    name: "Clip Craft AI",
    category: "Medical Video Creation",
    short: "Turn long videos into engaging medical shorts.",
    image: "/product/Clip craft AI.png",
    description:
      "Create short-form healthcare content for medical education, awareness, and hospital marketing.",
    icon: Clapperboard,
    features: [
      "AI-assisted video editing",
      "Automatic captions",
      "Short-form medical content",
      "Healthcare education and awareness",
    ],
    workflow: [
      { title: "Upload Video", description: "Start with an existing long-form video." },
      { title: "Create Short Clips", description: "AI-assisted editing helps prepare short-form content." },
      { title: "Review & Share", description: "Review clips for education or marketing use." },
    ],
  },
  {
    id: "intakeplus",
    name: "IntakePlus",
    category: "Patient Intake",
    short: "Simplify digital patient registration and admission.",
     image: "/product/IntakePlus.png",
    description:
      "Make patient intake more convenient with digital registration and document uploads.",
    icon: ClipboardList,
    features: [
      "Digital patient registration",
      "Document uploads",
      "Organized intake information",
      "Smoother admission workflows",
    ],
    workflow: [
      { title: "Register Patient", description: "Capture patient registration information digitally." },
      { title: "Upload Documents", description: "Submit the required documents through the intake flow." },
      { title: "Support Admission", description: "Keep intake information organized for admission." },
    ],
  },
  {
    id: "medlens",
    name: "MedLens",
    category: "Image Processing",
    short: "AI-powered medical image analysis and decision support.",
     image: "/product/Medlens Image Processing.png",
    description:
      "Support imaging workflows involving X-rays, CT, MRI, and ultrasound with AI-powered image analysis.",
    icon: ImageIcon,
    features: [
      "AI-powered image analysis",
      "X-ray image workflows",
      "CT and MRI imaging support",
      "Ultrasound imaging support",
      "Clinical decision support",
    ],
    workflow: [
      { title: "Provide Medical Image", description: "Start with an image from a supported imaging workflow." },
      { title: "Process Image", description: "AI-powered processing supports image review." },
      { title: "Review Insights", description: "Insights support qualified clinical review and decisions." },
    ],
  },
  {
    id: "tractor",
    name: "Tractor",
    category: "Healthcare Training",
    short: "Structured clinical learning, practice, and development.",
     image: "/product/Tractor.png",
    description:
      "A healthcare training platform featuring clinical videos, case studies, learning paths, and assessments.",
    icon: GraduationCap,
    features: [
      "Clinical videos and cases",
      "Structured learning paths",
      "Learning assessments",
      "Certifications",
    ],
    workflow: [
      { title: "Choose Learning Path", description: "Start with a structured healthcare learning pathway." },
      { title: "Learn & Practice", description: "Explore clinical videos and case studies." },
      { title: "Assess Progress", description: "Use assessments to review learning progress." },
    ],
  },
  {
    id: "medisync",
    name: "MediSync",
    category: "Doctor Appointments",
    short: "Simplified appointment booking and patient reminders.",
     image: "/product/MediSync.png",
    description:
      "Help patients book appointments and receive reminders while supporting clinic efficiency.",
    icon: Activity,
    features: [
      "Online appointment booking",
      "Appointment reminders",
      "Notifications",
      "Support for reducing missed appointments",
    ],
    workflow: [
      { title: "Book Appointment", description: "Make an appointment through the booking experience." },
      { title: "Receive Reminder", description: "Reminders help patients keep track of visits." },
      { title: "Manage Visit", description: "Organized appointment information supports clinic operations." },
    ],
  },
  {
    id: "easymedi",
    name: "EasyMedi",
    category: "Pharmacy Management",
    short: "Manage pharmacy stock, prescriptions, billing, and expiry alerts.",
     image: "/product/EasyMedi Pharmacy Management.png",
    description:
      "Bring essential pharmacy management activities together in one organized workflow.",
    icon: Pill,
    features: [
      "Inventory and stock control",
      "Prescription management",
      "Sales and billing",
      "Medicine expiry alerts",
    ],
    workflow: [
      { title: "Manage Inventory", description: "Track pharmacy stock and inventory information." },
      { title: "Process Prescriptions", description: "Manage prescription information in the workflow." },
      { title: "Handle Billing & Expiry", description: "Support billing and medicine expiry monitoring." },
    ],
  },
  {
    id: "medflow",
    name: "MedFlow AI",
    category: "End-to-End Care",
    short: "Connected care management across healthcare specialties.",
     image: "/product/End-to-End Digital Transformation.JPG",
    description:
      "Support care management workflows across gynecology, cardiology, diabetic care, and general care.",
    icon: BrainCircuit,
    features: [
      "End-to-end care management",
      "Gynecology care workflows",
      "Cardiology care workflows",
      "Diabetic and general care workflows",
    ],
    workflow: [
      { title: "Identify Care Needs", description: "Start with the relevant patient care requirements." },
      { title: "Coordinate Care", description: "Organize the appropriate specialty care workflow." },
      { title: "Support Follow-up", description: "Support connected care activities and follow-up." },
    ],
  },
];

export default function ProductHero() {
  const [selectedId, setSelectedId] = useState("triora");
  const productsRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLElement>(null);

  const selectedProduct =
    products.find((product) => product.id === selectedId) ?? products[0];

  const SelectedIcon = selectedProduct.icon;

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selectProduct = (id: string) => {
    setSelectedId(id);

    window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <App_layout>
      <main className="overflow-hidden bg-[#05070D] text-white">
        {/* ================= MAIN HERO ================= */}
        
<section className="relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[68vh] sm:px-6 sm:py-24 lg:min-h-[72vh] lg:px-8">
  {/* Background image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-top bg-center"
    style={{
      backgroundImage: "url('/home/abouthero.png')",
    }}
  />

  {/* Background overlay */}
  <div className="absolute inset-0 -z-10 bg-[#05070D]/45" />

  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "linear-gradient(90deg,rgba(5,7,13,0.78) 0%,rgba(5,7,13,0.48) 50%,rgba(5,7,13,0.65) 100%)",
    }}
  />

  {/* Subtle BeaverTek gradient */}
  <div
    className="absolute inset-0 -z-10 opacity-15"
    style={{
      background:
        "linear-gradient(135deg,transparent 35%,#3E7BD6 72%,#B93FC9 100%)",
    }}
  />

  {/* Centered content */}
  <div
    data-aos="fade-up"
    className="mx-auto w-full max-w-4xl text-center"
  >
    {/* Eyebrow */}
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md sm:mb-5 sm:text-sm">
      <Sparkles size={15} style={{ color: "#29B6F0" }} />
      BeaverHealth AI · Product Ecosystem
    </div>

    {/* Heading */}
    <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
      Smarter Healthcare.
      <span
        className="mt-1 block bg-clip-text text-transparent"
        style={{ backgroundImage: gradient }}
      >
        Connected Solutions.
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-5 sm:text-base sm:leading-7">
      Discover intelligent healthcare solutions designed to simplify
      clinical workflows, support patient care, and improve everyday
      healthcare operations.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row">
      <button
        type="button"
        onClick={scrollToProducts}
        className="inline-flex min-h-11 w-full max-w-[230px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
        style={{ background: gradient }}
      >
        Explore Our Products
        <ArrowDown size={17} />
      </button>

      <Link
        href="/contact/herosection"
        className="inline-flex min-h-11 w-full max-w-[230px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.15] sm:w-auto"
      >
        Talk to Our Team
        <ArrowUpRight size={17} />
      </Link>
    </div>
  </div>
</section>


        {/* ================= PRODUCTS HERO ================= */}
        
<section
  ref={productsRef}
  id="all-products"
  className="relative isolate scroll-mt-20 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
>
  {/* Background image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/healthcare-products.jpg')",
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 -z-10 bg-[#05070D]/80" />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "linear-gradient(180deg,rgba(5,7,13,0.35) 0%,rgba(5,7,13,0.82) 100%)",
    }}
  />

  <div className="mx-auto max-w-7xl">
    {/* Centered content */}
    <div className="mx-auto max-w-3xl text-center">
      <p
        data-aos="fade-up"
        data-aos-duration="750"
        className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em]"
        style={{ color: "#29B6F0" }}
      >
        Explore Our Products
      </p>

      <h2
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="100"
        className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Technology built around{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: gradient }}
        >
          healthcare needs.
        </span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-duration="850"
        data-aos-delay="200"
        className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:mt-4 sm:text-base sm:leading-7"
      >
        From patient intake to preventive care, discover solutions
        designed to support healthcare teams and patient experiences.
        Select a product to learn more.
      </p>
    </div>
  </div>
</section>


        {/* ================= ALL PRODUCTS LIST ================= */}
        
<section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
  <div className="mx-auto max-w-7xl">
    {/* Section heading */}
    <div
      className="mb-7 flex flex-wrap items-end justify-between gap-3 sm:mb-9"
      data-aos="fade-up"
    >
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
          style={{ color: "#29B6F0" }}
        >
          Our Solutions
        </p>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          All Healthcare Products
        </h2>
      </div>

      <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
        {products.length} Products
      </span>
    </div>

    {/* Product cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {products.map((product, index) => {
        const Icon = product.icon;
        const isSelected = selectedId === product.id;

        /*
          Add an image property to each product object:
          image: "/images/products/triora.jpg"
        */
        const productImage = (
          product as (typeof product) & { image?: string }
        ).image;

        return (
          <button
            key={product.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => selectProduct(product.id)}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 70}
            className={`group relative isolate flex min-h-[265px] flex-col overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 sm:min-h-[285px] sm:p-6 ${
              isSelected
                ? "border-[#29B6F0]/60 shadow-[0_0_25px_rgba(41,182,240,0.10)]"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            {/* Default card background */}
            <div className="absolute inset-0 -z-20 bg-[#0B0D15]" />

            {/* Product image appears on hover */}
            {productImage && (
              <div
                className="absolute inset-0 -z-10 scale-105 bg-cover bg-center opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
                style={{ backgroundImage: `url('${productImage}')` }}
              />
            )}

            {/* Dark overlay keeps text readable */}
            <div
              className={`absolute inset-0 -z-10 transition-all duration-500 ${
                productImage
                  ? "bg-[#05070D]/85 group-hover:bg-[#05070D]/65 group-focus-visible:bg-[#05070D]/65"
                  : "bg-gradient-to-br from-[#101522] to-[#080A10]"
              }`}
            />

            {/* Subtle gradient accent */}
            <div
              className={`absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 ${
                isSelected
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
              }`}
              style={{ background: gradient }}
            />

            {/* Icon and arrow */}
            <div className="flex items-start justify-between gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-[#63D5FF] backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
              >
                <Icon size={22} />
              </div>

              <ArrowUpRight
                size={19}
                className="text-gray-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            {/* Product content */}
            <div className="mt-auto pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#63D5FF] sm:text-xs">
                {product.category}
              </p>

              <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                {product.name}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-200">
                {product.short}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold sm:text-sm">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: gradient }}
                >
                  View Features & Workflow
                </span>

                <ArrowRight
                  size={15}
                  className="text-[#63D5FF] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  </div>
</section>

        {/* ================= SELECTED PRODUCT DETAILS ================= */}
       
<section
  ref={detailsRef}
  id="product-details"
  className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/[0.08] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
>
  {/* Background */}
  <div className="absolute inset-0 -z-20 bg-[#05070D]" />

  <div
    className="absolute inset-0 -z-10 opacity-30"
    style={{
      background:
        "radial-gradient(ellipse at 15% 10%,rgba(41,182,240,0.12),transparent 42%),radial-gradient(ellipse at 90% 35%,rgba(122,79,209,0.12),transparent 40%)",
    }}
  />

  <div className="mx-auto max-w-7xl">
    {/* Product hero */}
    <div
      key={selectedProduct.id}
      data-aos="fade-up"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
    >
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute -right-20 -top-24 -z-0 h-64 w-64 rounded-full opacity-15 blur-[90px] sm:h-80 sm:w-80"
        style={{ background: gradient }}
      />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
            style={{ color: "#29B6F0" }}
          >
            {selectedProduct.category}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {selectedProduct.name}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            {selectedProduct.description}
          </p>
        </div>

        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-2xl text-white sm:h-16 sm:w-16 sm:self-center"
          style={{ background: gradient }}
        >
          <SelectedIcon size={28} />
        </div>
      </div>
    </div>

    {/* Features and workflow */}
    <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
      {/* Key features */}
      <div data-aos="fade-up" className="min-w-0">
        <div className="mb-5 sm:mb-6">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#29B6F0" }}
          >
            What You Get
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Key Features
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Discover the capabilities designed to support your healthcare needs.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {selectedProduct.features.map((feature) => (
            <div
              key={feature}
              className="group flex items-start gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-5"
            >
              <div className="mt-0.5 shrink-0">
                <CheckCircle2
                  size={19}
                  style={{ color: "#63D5FF" }}
                />
              </div>

              <p className="text-sm leading-6 text-gray-300">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div data-aos="fade-up" data-aos-delay="100" className="min-w-0">
        <div className="mb-5 sm:mb-6">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#29B6F0" }}
          >
            How It Works
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Workflow
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Understand how each step connects to the next.
          </p>
        </div>

        <div className="space-y-3">
          {selectedProduct.workflow.map((step, index) => (
            <div
              key={step.title}
              className="group relative rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-5"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* No numbered badge */}
                <div
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    background: gradient,
                    boxShadow: "0 0 12px rgba(41,182,240,0.3)",
                  }}
                />

                <div className="min-w-0">
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400 sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Explore other products */}
    <div className="mt-10 border-t border-white/[0.08] pt-7 sm:mt-12 sm:pt-8">
      <p className="text-sm font-medium text-gray-400">
        Explore another product
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {products
          .filter((product) => product.id !== selectedId)
          .map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => selectProduct(product.id)}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-gray-300 transition-colors hover:border-white/30 hover:bg-white/[0.07] hover:text-white sm:px-4 sm:text-sm"
            >
              {product.name}
            </button>
          ))}
      </div>
    </div>

    {/* Contact CTA */}
    <div
      data-aos="fade-up"
      className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:mt-12 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-10 blur-[80px]"
        style={{ background: gradient }}
      />

      <div className="relative min-w-0">
        <p
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "#29B6F0" }}
        >
          Let&apos;s Connect
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
          Interested in {selectedProduct.name}?
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:leading-7">
          Talk to our team about your healthcare requirements and explore
          the right solution for your workflow.
        </p>
      </div>

      <Link
        href="/contact/herosection"
        className="relative mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto lg:mt-0 lg:shrink-0"
        style={{ background: gradient }}
      >
        Talk to Our Team
        <ArrowUpRight size={17} />
      </Link>
    </div>
  </div>
</section>

      </main>
      <Producthero/>
    </App_layout>
  );
}
