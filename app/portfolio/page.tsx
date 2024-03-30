import prisma from "@/prisma/prisma";
import { Hero } from "@/components/ui/Hero";
import { Gallery } from "@/components/portfolio/Gallery";
import { PortfolioIntro } from "@/components/portfolio/PortfolioIntro";

export const portfolios = [
  { id: 1, img: "IMage1", tag: "Engagement" },
  { id: 2, img: "IMage2", tag: "Wedding" },
  { id: 3, img: "IMage3", tag: "Engagement" },
  { id: 4, img: "IMage4", tag: "Wedding" },
  { id: 5, img: "IMage5", tag: "Wedding" },
];

const Portfolio = async () => {
  const portfolio = await prisma.portfolio.findMany({});

  return (
    <div className="pt-20 md:pt-0">
      <Hero image={""} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <PortfolioIntro />
        <div className="mt-14">
          <Gallery portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
