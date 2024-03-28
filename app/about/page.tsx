import { Hero } from "@/components/ui/Hero";
import { AboutIntro } from "@/components/about/AboutIntro";

import aboutImage from "/public/images/image-3.jpg";

const About = () => {
  return (
    <>
      <Hero image={""} title={""} description={""} />
      <AboutIntro image={aboutImage} />
    </>
  );
};

export default About;
