import { Card } from "@/components/services/Card";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { AdditionalServices } from "@/components/services/AdditionalServices";
import { Hero } from "@/components/ui/Hero";
import { ServiceForm } from "@/components/services/ServiceForm";

const PhotographyPage = () => {
  return (
    <div>
      <Hero image={""} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <ServiceIntro />
        <div className="flex flex-col md:flex-row md:flex-wrap md:max-w-screen-lg md:mx-auto md:gap-4">
          <Card />
          <Card />
        </div> 
        <div className="mt-20">
          <AdditionalServices /> 
        </div>
         <div className="mt-20">
          <ServiceForm />
        </div>     
      </div>
    </div>
  )
}

export default PhotographyPage