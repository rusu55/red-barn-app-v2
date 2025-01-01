import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { InfiniteScrollingVenues } from "@/components/venues/InfiniteScrollingVenues";

import { fetchVenues } from "./action";

export const metadata: Metadata = {
  title: "Best Wedding Photographers Red Barn Studio  - at Chicago Venues",
  description:
    "Chicago Wedding Photography and Weddings Cinematography. Red Barn Wedding Studio at Chicago Wedding Venues.",
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
      <div className="mx-auto max-w-screen-xl py-2 md:py-20 flex flex-wrap justify-center gap-4 ">       
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
