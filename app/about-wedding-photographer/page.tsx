import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { AboutIntro } from "@/components/about/AboutIntro";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeIcons } from "@/components/home/HomeIcons";

import aboutImage from "/public/images/about-hero.webp";
import img1 from '/public/images/alexis.webp'

export const metadata: Metadata = {
  title: "About Chicago Wedding Photographer - Red Barn Wedding Studio, best wedding photography",
  description: "Voted the Best Chicago Wedding Photographer  and Best of Weddings by The Knot. With over 10 years of experience, we understand that your wedding is a celebration for two of you and the people coming together."
}

const About = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title="Wedding Photographers Chicago" description={""} />
      <div className="mt-20">
        <AboutIntro image={img1}/>
      </div>
      <HomeReviews/>
      <HomeIcons />
    </div>
  );
};

export default About;
