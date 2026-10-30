
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
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

export default function Sampleproduct() {
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

  const navigateProduct = (direction: "previous" | "next") => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedId
    );

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % products.length
        : (currentIndex - 1 + products.length) % products.length;

    setSelectedId(products[nextIndex].id);

    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#05070D] text-white">
      {/* ================= PRODUCTS INTRO ================= */}

      <section
        ref={productsRef}
        id="all-products"
        className="relative isolate scroll-mt-20 overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/healthcare-products.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-[#05070D]/80" />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg,rgba(5,7,13,0.35) 0%,rgba(5,7,13,0.82) 100%)",
          }}
        />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              data-aos="fade-up"
              data-aos-duration="750"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#29B6F0] sm:text-sm sm:tracking-[0.22em]"
            >
              Explore Our Products
            </p>

            <h2
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="100"
              className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
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

      {/* ================= PRODUCT SHOWCASE: 35% / 65% ================= */}

      <section
        className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/[0.08] bg-[#05070D]"
        aria-label="Healthcare product showcase"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 10% 10%,rgba(41,182,240,0.10),transparent 40%),radial-gradient(ellipse at 90% 45%,rgba(122,79,209,0.10),transparent 40%)",
          }}
        />

        <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start lg:grid-cols-[minmax(0,35fr)_minmax(0,65fr)]">
          {/* ================= LEFT: PRODUCT LIST - 35% ================= */}

        
            <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-5 lg:py-6 xl:px-7 xl:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                Our Products
              </p>

              <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl lg:text-xl xl:text-2xl">
                Explore Solutions
              </h2>

              <p className="mt-2 hidden text-sm leading-6 text-gray-400 lg:block">
                Choose a product to explore its features and workflow.
              </p>

              <nav
                aria-label="Healthcare products"
                className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] lg:mt-6 lg:flex-col lg:gap-1.5 lg:overflow-x-visible lg:overflow-y-visible lg:pb-0"
              >
                {products.map((product) => {
                  const ProductIcon = product.icon;
                  const isSelected = selectedId === product.id;

                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => selectProduct(product.id)}
                      aria-pressed={isSelected}
                      className={`group flex min-h-[58px] min-w-[175px] shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:min-w-[200px] lg:min-w-0 lg:w-full lg:gap-2.5 lg:px-3 lg:py-3 ${
                        isSelected
                          ? "border-[#29B6F0]/30 bg-white/[0.075] text-white"
                          : "border-white/[0.07] bg-white/[0.02] text-gray-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-white lg:border-transparent lg:bg-transparent"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 sm:h-10 sm:w-10 ${
                          isSelected
                            ? "text-white"
                            : "bg-white/[0.06] text-gray-400 group-hover:text-white"
                        }`}
                        style={
                          isSelected
                            ? { background: gradient }
                            : undefined
                        }
                      >
                        <ProductIcon size={18} strokeWidth={1.8} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block break-words text-sm font-semibold leading-5">
                          {product.name}
                        </span>

                        <span className="mt-0.5 block break-words text-xs leading-4 text-gray-500">
                          {product.category}
                        </span>
                      </span>

                      <ArrowRight
                        size={15}
                        className={`hidden shrink-0 transition-all duration-300 lg:block ${
                          isSelected
                            ? "text-[#63D5FF] opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          

          {/* ================= RIGHT: PRODUCT DETAILS - 65% ================= */}

          <div className="min-w-0">
            <section
              ref={detailsRef}
              id="product-information"
              key={selectedProduct.id}
              className="min-w-0 scroll-mt-5"
            >
              {/* ================= WIDE PRODUCT IMAGE ================= */}

              <div
                className="group relative w-full min-w-0 overflow-hidden bg-[#05070D]"
                data-aos="fade-up"
              >
                <div className="relative h-[clamp(210px,48vw,340px)] w-full overflow-hidden bg-[#05070D] sm:h-[clamp(250px,35vw,370px)] lg:h-[clamp(250px,28vw,400px)] xl:h-[420px]">
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} healthcare product`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#05070D]/70 via-[#05070D]/20 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/50 via-transparent to-[#05070D]/5" />
                </div>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <div
                className="border-b border-white/[0.08] px-4 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-7 xl:px-9"
                data-aos="fade-up"
              >
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8BE0FF] backdrop-blur-md sm:text-xs sm:tracking-[0.18em]">
                  <SelectedIcon size={14} className="shrink-0" />
                  <span>{selectedProduct.category}</span>
                </div>

                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                  <div className="min-w-0 flex-1">
                    <h1 className="break-words text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl xl:text-5xl">
                      {selectedProduct.name}
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-3 sm:text-base sm:leading-7">
                      {selectedProduct.short}
                    </p>

                    <p className="mt-3 max-w-4xl text-sm leading-6 text-gray-300 sm:mt-4 sm:leading-7">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div
                    className="hidden h-11 w-11 shrink-0 items-center justify-center self-start rounded-xl text-white sm:flex lg:h-12 lg:w-12"
                    style={{ background: gradient }}
                  >
                    <SelectedIcon size={22} />
                  </div>
                </div>
              </div>

              {/* ================= KEY FEATURES + WORKFLOW ================= */}

              <div className="px-4 py-7 sm:px-6 sm:py-8 lg:px-7 lg:py-8 xl:px-9">
                <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 xl:gap-9">
                  {/* KEY FEATURES */}

                  <div className="min-w-0" data-aos="fade-up">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                      What You Get
                    </p>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Key Features
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400 sm:leading-7">
                      Discover how {selectedProduct.name} supports healthcare
                      operations with practical, purpose-built capabilities.
                    </p>

                    <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                      {selectedProduct.features.map((feature) => (
                        <div
                          key={feature}
                          className="group flex min-w-0 items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            strokeWidth={1.8}
                            className="mt-1 shrink-0 text-[#63D5FF] transition-transform duration-300 group-hover:scale-110"
                          />

                          <p className="min-w-0 break-words text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-white sm:leading-7">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WORKFLOW */}

                  <div
                    className="min-w-0"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29B6F0]">
                      How It Works
                    </p>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Workflow
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400 sm:leading-7">
                      Follow the process behind {selectedProduct.name} from
                      one step to the next.
                    </p>

                    <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                      {selectedProduct.workflow.map((step) => (
                        <div
                          key={step.title}
                          className="group relative min-w-0 pl-4"
                        >
                          <span
                            className="absolute left-0 top-[9px] h-2 w-2 rounded-full"
                            style={{ background: gradient }}
                          />

                          <h3 className="break-words text-sm font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-[#63D5FF] sm:text-base sm:leading-7">
                            {step.title}
                          </h3>

                          <p className="mt-1.5 break-words text-sm leading-6 text-gray-400 sm:leading-7">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ================= PREVIOUS / NEXT ================= */}

                <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                  <p className="text-sm text-gray-400">
                    Explore another healthcare solution
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3">
                    <button
                      type="button"
                      onClick={() => navigateProduct("previous")}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-gray-200 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:px-4 sm:text-sm"
                    >
                      <ArrowRight className="rotate-180" size={15} />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={() => navigateProduct("next")}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs font-semibold text-white transition duration-300 hover:opacity-90 sm:px-4 sm:text-sm"
                      style={{ background: gradient }}
                    >
                      Next Product
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          
        </div>
      </section>
    </main>
  );
}
