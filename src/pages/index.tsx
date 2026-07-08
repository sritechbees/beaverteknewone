import Image from "next/image";

import App_layout from "@/component/layout/app_layout";
import Herosection from "@/component/home/herosection";
import FourPillars from "@/component/home/fourpillars";
import ProofSection from "@/component/home/proofsection";
import TestimonialsSection from "@/component/home/testimonialsection";
import CaseStudyHero from "@/component/common/CaseStudyHero";



export default function Home() {
  return (
    <div>
      
       <App_layout>
       
          <Herosection/>
          <FourPillars/>
          <ProofSection/>
          <TestimonialsSection/>
      <CaseStudyHero/>
       </App_layout>
      
        </div>
  );
}
