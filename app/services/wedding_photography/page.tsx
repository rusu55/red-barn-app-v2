import { Card } from "@/components/services/Card";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { AdditionalServices } from "@/components/services/AdditionalServices";
import { Hero } from "@/components/ui/Hero";
import { ServiceForm } from "@/components/services/ServiceForm";
import prisma from "@/prisma/prisma";
import Img from '/public/images/photography-hero.jpg';
import { weddingPhotography } from "@/lib/services";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import { PhotographySamples } from "@/components/services/PhotographySamples";

const PhotographyPage = async () => {
  const highlights = await prisma.blog.findMany({
    take: 3,
    where: {
      highlights: "yes",
    },
  });

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={Img} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <ServiceIntro />
        <div className="flex flex-col md:flex-row md:flex-wrap md:max-w-screen-lg md:mx-auto md:gap-4">
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
          <PhotographySamples  highlights={highlights}/>
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