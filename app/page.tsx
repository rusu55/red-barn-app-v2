import prisma from "@/prisma/prisma";
//import { HomeHero } from "@/components/home/HomeHero";
import { HomeCarousel } from "@/components/carousel/HomeCarousel";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { HomeRecentWork } from "@/components/home/HomeRecentWork";
import HomeReviews from "@/components/home/HomeReviews";
import { HomeSocialIcons } from "@/components/home/HomeSocialIcons";
import { HomeIcons } from "@/components/home/HomeIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.redbarnweddingstudio.com'),
  title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
  description:
    "Your Perfect Wedding with our Chicago Wedding Photographer from Red Barn Wedding Studio, the best of wedding photographers and cinematographers in Chicago",

  openGraph: {
    title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
    description:
      "Your Perfect Wedding with our Chicago Wedding Photographer from Red Barn Wedding Studio, the best of wedding photographers and cinematographers in Chicago",
    url: "https://redbarnweddingstudio.com",
    siteName: "Red Barn Wedding Studio",
    images: [
      {
        url: "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/796573d8-903d-4666-ae15-7c39d499072a.jpg",
        width: 800,
        height: 600,
        alt: "Wedding Photographer Chicago",
      },
      {
        url: "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg",
        width: 800,
        height: 600,
        alt: "Wedding Photographer Chicago",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <HomeCarousel/>
      <HomeIntroduction />
      <HomeRecentWork highlights={highlights} />
      <HomeIcons />
      <HomeReviews />
      <HomeSocialIcons />
    </>
  );
};
export default Home;
