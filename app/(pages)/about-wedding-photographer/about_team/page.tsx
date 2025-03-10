import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { AboutTeam } from "@/components/about/AboutTeam";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeIcons } from "@/components/home/HomeIcons";
import prisma from "@/prisma/prisma";
import aboutImage from "/public/images/about-hero.webp";
import img1 from '/public/images/alexis.jpg'

export const metadata: Metadata = {
  title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
  description: "Voted the Best Chicago Wedding Photographer  and Best of Weddings by The Knot. With over 10 years of experience, we understand that your wedding is a celebration for two of you and the people coming together."
}

const OurTeamPage = async () => {
  const team = await prisma.employee.findMany({ 
    include:{
      photography: true,
      videography: true,
    },
    orderBy: [{ orderBy: "asc" }],
  }); 
console.log(team);
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title={"Best Photographers & Videographers"} description={"Best Photographers & Videographers"} />
      <AboutTeam  image={img1} team={team}/>
      <HomeReviews/>
      <HomeIcons />
    </div>
  )
}

export default OurTeamPage