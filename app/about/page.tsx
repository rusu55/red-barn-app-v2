import { Hero } from "@/components/ui/Hero";
import { AboutIntro } from "@/components/about/AboutIntro";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeIcons } from "@/components/home/HomeIcons";

import aboutImage from "/public/images/about-hero.jpg";
import img1 from '/public/images/alexis.jpg'

const About = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title={""} description={""} />
      <div className="mt-20">
        <AboutIntro image={img1}/>
      </div>
      <HomeReviews/>
      <HomeIcons />
    </div>
  );
};

export default About;
