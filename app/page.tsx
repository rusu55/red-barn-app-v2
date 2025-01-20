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
  metadataBase: new URL('https://redbarnweddingstudio.com'),
  title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
  description:
    "Perfect Wedding with Chicago Wedding Photographer from Red Barn Wedding Studio - the best wedding photographers and cinematographers in Chicago",

  openGraph: {
    title: "Chicago Wedding Photographer - Red Barn Wedding Studio",
    description:
      "Perfect Wedding with Chicago Wedding Photographer from Red Barn Wedding Studio - the best wedding photographers and cinematographers in Chicago",
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  "headline": "Chicago Wedding Photographer - Red Barn Wedding Studio",
  "description": "Perfect Wedding with Chicago Wedding Photographer from Red Barn Wedding Studio - the best wedding photographers and cinematographers in Chicago",
  "image": [
              "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/796573d8-903d-4666-ae15-7c39d499072a.jpg",
              "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/67a5370f-501a-4ad2-aab2-39169557dcb3.jpg",
              "https://files.edgestore.dev/0xr56vabfzzugegm/publicFiles/_public/331cb3dd-496f-4e0b-914d-c49274aef17e.jpg"
            ],
  "publisher": {
              "@type": "Organization",
              "name": "Red Barn Wedding Studio",
              "logo": {
                "@type": "ImageObject",
                "url": "hhttps://redbarnweddingstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.64015fa7.jpg&w=256&q=75"
              }
            },
 "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://redbarnweddingstudio.com"
           }
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
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
