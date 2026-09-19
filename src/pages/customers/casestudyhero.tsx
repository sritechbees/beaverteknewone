"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import CaseStudyHero from "@/component/common/herosection";

const images = [
  "/home/studyhero.jpg",
  "/home/healthai.jpg",
  "/home/producthero.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <App_layout>
      <CaseStudyHero/>
   
    </App_layout>
  );
}