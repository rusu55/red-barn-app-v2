import type { Metadata } from "next";
import { Card } from "@/components/services/Card";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { AdditionalServices } from "@/components/services/AdditionalServices";
import { Hero } from "@/components/ui/Hero";
import { ServiceForm } from "@/components/services/ServiceForm";
import prisma from "@/prisma/prisma";
import Img from '/public/images/photography-hero.webp';
import { weddingPhotography } from "@/lib/services";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import { PhotographySamples } from "@/components/services/PhotographySamples";
import {ServiceIntroData} from '@/lib/services';

export const metadata: Metadata = {
  title: "Wedding Photography Services Chicago land",
  description: "We offer Wedding Photography services  at the art level for brides and grooms in Chicago land",
  openGraph:{
    images: [
      {
        url: 'https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/79cdac27-9ab5-45a2-835a-5a8c6dd04726.jpg'
      }
    ]
  }
}
const PhotographyPage = async () => {

  const samples = await prisma.blog.findMany({
    take: 3,
    where: {
      sample: Boolean(true),
    }
  })

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={Img} title="Best Wedding Photography in Chicago" description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <ServiceIntro data={ServiceIntroData[0]} />
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:max-w-screen-lg md:mx-auto md:gap-8 pt-8">
          {weddingPhotography.map((service, index) =>(
            <RevealComponent key={index} index={index} variants={fadeBottomTop}>
              <Card key={index} service={service}/>
            </RevealComponent>
          ))}
        </div> 
        <div className="mt-20">
          <AdditionalServices /> 
        </div>
      </div>
        <div className="mt-20">
          <PhotographySamples  highlights={samples}/>
        </div>
        <div className="mx-auto max-w-screen-xl mt-16 px-6">
          <div className="mt-20">
            <ServiceForm />
          </div>     
      </div>
    </div>
  )
}

export default PhotographyPage