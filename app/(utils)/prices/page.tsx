import { Hero } from "@/components/ui/Hero";
import aboutImage from "/public/images/about-hero.webp";
import img1 from "/public/images/prices/1.webp";
import img2 from "/public/images/prices/2.webp";

import { Photography } from "./components/photography";
import { Intro } from "./components/intro";
import { PhotoVideo } from "./components/photo_video";
import { Videography } from "./components/videography";
import { ExtraServices } from "./components/extra_services";
import { Questions } from "./components/questions";
import { HomeIcons } from "@/components/home/HomeIcons";

const PricePage = () => {
  return (
    <div className="pt-20 md:pt-0">
        <Hero image={aboutImage} title={""} description={""} />
        <Intro image={img1} />
        <Photography  />
        <PhotoVideo />
        <Videography />
        <ExtraServices />
        <Questions image={img2} />
        <HomeIcons />
    </div>
  )
}

export default PricePage