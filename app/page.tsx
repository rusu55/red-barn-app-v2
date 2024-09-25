import Image from "next/image";
import prisma from "@/prisma/prisma";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { HomeRecentWork } from "@/components/home/HomeRecentWork";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeSocialIcons } from "@/components/home/HomeSocialIcons";
import { HomeIcons } from "@/components/home/HomeIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
  description:
    "Perfect Wedding Day with Red Barn Wedding Studio, the best wedding photographer and cinematographer in Chicago land. We are the best wedding photographers in Illinois",
};
const Home = async () => {
  const highlights = await prisma.blog.findMany({
    take: 3,
    where: {
      highlights: Boolean(true),
    },
  });
  return (
    <>
      <HomeHero />
      <HomeIntroduction />
      <HomeRecentWork highlights={highlights} />
      <HomeIcons />
      <HomeReviews />
      <HomeSocialIcons />
    </>
  );
};
export default Home;
