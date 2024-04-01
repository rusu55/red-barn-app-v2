import prisma from "@/prisma/prisma";
import { Hero } from "@/components/ui/Hero";
import { Gallery } from "@/components/portfolio/Gallery";
import { PortfolioIntro } from "@/components/portfolio/PortfolioIntro";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import videos from "@/lib/videos";

const Portfolio = async () => {
  const portfolio = await prisma.portfolio.findMany({});

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={""} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <PortfolioIntro />
        <div className="mt-14">
          <Gallery portfolio={portfolio} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
