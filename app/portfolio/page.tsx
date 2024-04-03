import prisma from "@/prisma/prisma";
import { Hero } from "@/components/ui/Hero";
import { Gallery } from "@/components/portfolio/Gallery";
import heroImage from '/public/images/portfolio-hero.jpg'

import videos from "@/lib/videos";

const Portfolio = async () => {
  const portfolio = await prisma.portfolio.findMany({});

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={heroImage} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <div className="mt-14">
          <Gallery portfolio={portfolio} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
