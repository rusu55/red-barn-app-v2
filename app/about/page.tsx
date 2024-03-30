import { Hero } from "@/components/ui/Hero";
import { AboutIntro } from "@/components/about/AboutIntro";

import aboutImage from "/public/images/image-3.jpg";

const About = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={""} title={""} description={""} />
      <AboutIntro image={aboutImage} />
    </div>
  );
};

export default About;
