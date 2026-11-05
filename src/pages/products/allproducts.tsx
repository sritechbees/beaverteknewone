
"use client";

import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowDownRight,
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
  Stethoscope,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      {
        title: "Enter Symptoms",
        description:
          "The user shares symptoms through the mobile experience.",
      },
      {
        title: "Assess & Triage",
        description:
          "Submitted information is evaluated to support triage.",
      },
      {
        title: "Receive Guidance",
        description:
          "The user receives guidance and red-flag awareness.",
      },
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
      {
        title: "Understand Health",
        description:
          "Relevant health information is considered for assessment.",
      },
      {
        title: "Evaluate Risk",
        description:
          "Risk triage and health scoring support risk awareness.",
      },
      {
        title: "Plan Preventive Care",
        description:
          "Health insights help guide appropriate care planning.",
      },
    ],
  },
  {
    id: "clipcraft",
    name: "Clip Craft AI",
    category: "Medical Video Creation",
    short: "Turn long videos into engaging medical shorts.",
    image: "/product/Healthcare App1.png",
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
      {
        title: "Upload Video",
        description: "Start with an existing long-form video.",
      },
      {
        title: "Create Short Clips",
        description:
          "AI-assisted editing helps prepare short-form content.",
      },
      {
        title: "Review & Share",
        description:
          "Review clips for education or marketing use.",
      },
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
      {
        title: "Register Patient",
        description:
          "Capture patient registration information digitally.",
      },
      {
        title: "Upload Documents",
        description:
          "Submit the required documents through the intake flow.",
      },
      {
        title: "Support Admission",
        description:
          "Keep intake information organized for admission.",
      },
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
      {
        title: "Provide Medical Image",
        description:
          "Start with an image from a supported imaging workflow.",
      },
      {
        title: "Process Image",
        description:
          "AI-powered processing supports image review.",
      },
      {
        title: "Review Insights",
        description:
          "Insights support qualified clinical review and decisions.",
      },
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
      {
        title: "Choose Learning Path",
        description:
          "Start with a structured healthcare learning pathway.",
      },
      {
        title: "Learn & Practice",
        description:
          "Explore clinical videos and case studies.",
      },
      {
        title: "Assess Progress",
        description:
          "Use assessments to review learning progress.",
      },
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
      {
        title: "Book Appointment",
        description:
          "Make an appointment through the booking experience.",
      },
      {
        title: "Receive Reminder",
        description:
          "Reminders help patients keep track of visits.",
      },
      {
        title: "Manage Visit",
        description:
          "Organized appointment information supports clinic operations.",
      },
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
      {
        title: "Manage Inventory",
        description:
          "Track pharmacy stock and inventory information.",
      },
      {
        title: "Process Prescriptions",
        description:
          "Manage prescription information in the workflow.",
      },
      {
        title: "Handle Billing & Expiry",
        description:
          "Support billing and medicine expiry monitoring.",
      },
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
      {
        title: "Identify Care Needs",
        description:
          "Start with the relevant patient care requirements.",
      },
      {
        title: "Coordinate Care",
        description:
          "Organize the appropriate specialty care workflow.",
      },
      {
        title: "Support Follow-up",
        description:
          "Support connected care activities and follow-up.",
      },
    ],
  },
];

export default function Allproduct() {
  const [selectedId, setSelectedId] = useState<string>(
    products[0].id
  );

  const selectedProduct =
    products.find((product) => product.id === selectedId) ??
    products[0];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedId]);

  const selectProduct = (id: string) => {
    setSelectedId(id);
  };

  const navigateProduct = (direction: "next" | "previous") => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedId
    );

    const safeIndex = currentIndex < 0 ? 0 : currentIndex;

    const nextIndex =
      direction === "next"
        ? (safeIndex + 1) % products.length
        : (safeIndex - 1 + products.length) % products.length;

    setSelectedId(products[nextIndex].id);

    window.setTimeout(() => {
      document.getElementById("product-navigation")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const currentIndex = products.findIndex(
    (product) => product.id === selectedProduct.id
  );

  return (
    <main className="overflow-hidden bg-[#05070D] text-white">
      {/* PRODUCTS INTRO */}
      <section
       id="key-features"
   className="scroll-mt-24 relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/healthcare-products.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-[#05070D]/20" />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg,rgba(5,7,13,0.35) 0%,rgba(5,7,13,0.95) 100%)",
          }}
        />

            <div
            className="absolute inset-x-0 top-0 -z-10 h-px opacity-20"
            style={{ background: gradient }}
            />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              data-aos="fade-up"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#63D5FF] sm:text-xs"
            >
              Explore Our Products
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="80"
              className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Technology built around
              <span
                className="mt-1 block bg-clip-text text-transparent"
                style={{ backgroundImage: gradient }}
              >
                healthcare needs.
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="mx-auto mt-3 max-w-xl text-xs leading-6 text-gray-300 sm:text-sm sm:leading-7"
            >
              From patient intake to preventive care, discover solutions
              designed to support healthcare teams and patient experiences.
              Select a product to learn more.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="220"
              className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-gray-300 sm:text-xs"
            >
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                Healthcare Products
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                AI-Powered Solutions
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">
                Connected Care
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section
        id="all-products"
        className="relative scroll-mt-20 overflow-hidden px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14"
      >
        <div className="mx-auto max-w-7xl">
          {/* PRODUCT NAVIGATION */}
          <div
            id="product-navigation"
            className="mb-5 scroll-mt-24"
            aria-label="Choose a healthcare product"
          >
            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#63D5FF]">
                Explore Our Solutions
              </p>
              <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Healthcare Products
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
              {products.map((product, index) => {
                const isSelected = selectedId === product.id;
                const ProductIcon = product.icon;

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => selectProduct(product.id)}
                    aria-pressed={isSelected}
                    className={`group relative flex min-h-[68px] min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border p-2.5 text-left transition-colors duration-300 sm:p-3 ${
                      isSelected
                        ? "border-[#63D5FF]/40 bg-white/[0.025]"
                        : "border-white/[0.08] bg-transparent hover:border-white/20"
                    }`}
                  >
                    {isSelected && (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[2px]"
                        style={{ background: gradient }}
                      />
                    )}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isSelected
                          ? "bg-[#29B6F0]/10 text-[#63D5FF]"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                    >
                      <ProductIcon size={18} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[9px] text-gray-500">
                        PRODUCT {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-0.5 block truncate text-xs font-semibold sm:text-sm ${
                          isSelected ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {product.name}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SELECTED PRODUCT DETAILS */}
          <div
            key={selectedProduct.id}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090B12]"
          >
            {/* WIDE PRODUCT IMAGE */}
<div
  className="group relative w-full min-w-0 overflow-hidden bg-[#05070D]"
  data-aos="fade-up"
>
  <div className="relative aspect-[1983/793] w-full overflow-hidden bg-[#05070D]">
    {/* Product Image */}
    <img
      src={selectedProduct.image}
      alt={`${selectedProduct.name} healthcare product`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-contain object-center"
    />

    {/* Bottom Gradient Overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05070D]/95 via-[#05070D]/65 to-transparent" />

    {/* Left Side Content - Vertically Centered */}
    <div className="absolute inset-y-0 left-0 flex w-full items-center px-4 py-5 sm:px-8 lg:w-[65%] lg:px-12">
      <div className="max-w-xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#63D5FF] sm:text-[10px]">
          {selectedProduct.category}
        </p>

        <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          {selectedProduct.name}
        </h2>

        <p className="mt-2 max-w-lg text-xs leading-relaxed text-white/85 sm:mt-3 sm:text-sm sm:leading-6">
          {selectedProduct.short}
        </p>

        {/* Product Description */}
        <p className="mt-2 max-w-lg text-[11px] leading-relaxed text-gray-300 sm:mt-3 sm:text-sm sm:leading-6">
          {selectedProduct.description}
        </p>

        {/* View More Button */}
        <button
          type="button"
          onClick={() => {
            document.getElementById("key-features")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="group/btn mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm"
          style={{ background: gradient }}
        >
          View More
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  </div>
</div>


           

            {/* KEY FEATURES AND WORKFLOW */}
            <div
              id="product-information"
              className="scroll-mt-24 grid grid-cols-1 gap-7 p-5 sm:p-7 lg:grid-cols-2 lg:gap-8 lg:p-9"
            >
              {/* KEY FEATURES */}
              <div data-aos="fade-up">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: gradient }}
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#63D5FF]">
                      Core Capabilities
                    </p>
                    <h3 className="mt-0.5 text-xl font-bold text-white sm:text-2xl">
                      Key Features
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Discover the essential capabilities of {selectedProduct.name}.
                </p>

                <div className="mt-5 space-y-2.5">
                  {selectedProduct.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="group flex items-start gap-3 rounded-lg border border-white/[0.07] bg-transparent p-3 transition-colors duration-300 hover:border-[#29B6F0]/25"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white"
                        style={{ background: gradient }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="flex-1 pt-1 text-sm leading-6 text-gray-300 transition-colors group-hover:text-white">
                        {feature}
                      </p>

                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0 text-[#63D5FF]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* WORKFLOW */}
              <div data-aos="fade-up" data-aos-delay="80">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: gradient }}
                  >
                    <Activity size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#63D5FF]">
                      Process Overview
                    </p>
                    <h3 className="mt-0.5 text-xl font-bold text-white sm:text-2xl">
                      Workflow
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Follow the key steps in the {selectedProduct.name} process.
                </p>

                <div className="relative mt-5 space-y-3">
                  {selectedProduct.workflow.map((step, index) => (
                    <div
                      key={step.title}
                      className="group relative flex gap-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 60}
                    >
                      {/* TIMELINE */}
                      <div className="relative flex shrink-0 flex-col items-center">
                        <span
                          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-105"
                          style={{ background: gradient }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {index < selectedProduct.workflow.length - 1 && (
                          <span className="mt-1.5 min-h-6 w-px flex-1 bg-gradient-to-b from-[#29B6F0]/40 to-white/[0.06]" />
                        )}
                      </div>

                      {/* WORKFLOW CARD */}
                      <div className="mb-1.5 flex-1 rounded-lg border border-white/[0.07] bg-transparent p-3.5 transition-colors duration-300 group-hover:border-[#29B6F0]/25 sm:p-4">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-sm font-semibold text-white sm:text-base">
                            {step.title}
                          </h4>

                          <ArrowUpRight
                            size={15}
                            className="shrink-0 text-gray-600 transition-colors group-hover:text-[#63D5FF]"
                          />
                        </div>

                        <p className="mt-1.5 text-sm leading-6 text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PREVIOUS / NEXT PRODUCT */}
            <div className="flex flex-col gap-3 border-t border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-9">
              <p className="text-xs text-gray-500">
                Product {String(currentIndex + 1).padStart(2, "0")} of{" "}
                {String(products.length).padStart(2, "0")}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateProduct("previous")}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ArrowDownRight
                    className="rotate-[135deg]"
                    size={16}
                  />
                  Previous
                </button>

                <button
                  type="button"
                  onClick={() => navigateProduct("next")}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: gradient }}
                >
                  Next Product
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
