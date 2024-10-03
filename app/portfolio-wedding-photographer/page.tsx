import prisma from "@/prisma/prisma";
import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Gallery } from "@/components/portfolio/Gallery";
import heroImage from '/public/images/portfolio-hero.webp'

import videos from "@/lib/videos";

export const metadata: Metadata = {
  title: "Best Wedding Photography, Cinematography, Engagement  - Red Barn Wedding Studio Portfolio",
  description: "Top Chicago Wedding Photographer and Videographer  in Chicago land. Wedding Photography and Cinematography at the art level."
}

const Portfolio = async () => {
  const portfolio = await prisma.portfolio.findMany({ 
    orderBy: [{ orderBy: "asc" }],
  });

  return (
    <div className="pt-10 md:pt-0">
      <Hero image={heroImage} title="Wedding Photography and Cinematography" description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <div>
          <Gallery portfolio={portfolio} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
