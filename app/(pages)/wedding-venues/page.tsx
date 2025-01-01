import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { InfiniteScrollingVenues } from "@/components/venues/InfiniteScrollingVenues";

import { fetchVenues } from "./action";

export const metadata: Metadata = {
  title: "Best Wedding Photography in Chicago Area  - Red Barn Wedding Studio",
  description:
    "Best Chicago Wedding Photography and Best of Weddings Cinematography. Explore our photography for guidance on making the most of your wedding photography experience.",
};

const VenuesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  let venues = await fetchVenues({ search });
  //const recentVenues = venues.slice(0, 3);
  
  // <SearchBar /><TagsComponent />
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={hero_img} title="Wedding Photographer in Chicago" description="" />
      <div className="mx-auto max-w-screen-xl py-20 flex flex-wrap justify-center gap-4 ">       
        <div
          className="w-full px-4 "
          key={Math.random()}
        >
          <InfiniteScrollingVenues search={search} initialVenues={venues} />
        </div>
       
      </div>
    </div>
  );
};

export default VenuesPage;
