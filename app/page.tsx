import Image from "next/image";
import prisma from "@/prisma/prisma";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { HomeRecentWork } from "@/components/home/HomeRecentWork";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeSocialIcons } from "@/components/home/HomeSocialIcons";

const Home = async () => {
  const highlights = await prisma.blog.findMany({
    take: 3,
    where: {
      highlights: "yes",
    },
  });
  return (
    <>
      <HomeHero />
      <HomeIntroduction />
      <HomeRecentWork highlights={highlights} />
      <HomeReviews />
      <HomeSocialIcons />
    </>
  );
};
export default Home;
