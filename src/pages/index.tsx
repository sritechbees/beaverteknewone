import Image from "next/image";

import App_layout from "@/component/layout/app_layout";
import Herosection from "@/component/home/herosection";
import FourPillars from "@/component/home/fourpillars";
import ProofSection from "@/component/home/proofsection";
import TestimonialsSection from "@/component/home/testimonialsection";
import Whoweare from "@/component/home/whoweare";
import Whatunique from "@/component/home/whatunique";




export default function Home() {
  return (
    <div>
      
       <App_layout>
       
          <Herosection/>
          <Whoweare/>
          <FourPillars/>
          <ProofSection/>
           <Whatunique/>
          <TestimonialsSection/>
         
       </App_layout>
      
        </div>
  );
}
