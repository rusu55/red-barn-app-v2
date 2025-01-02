import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import hero_img from "/public/images/about.jpg";
import { InfiniteScrollingVenues } from "@/components/venues/InfiniteScrollingVenues";

import { fetchVenues } from "./action";
import { SearchBarVenue } from "@/components/venues/searchBar";

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
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={hero_img} title="Wedding Photographer in Chicago" description="" />
      <div className="mx-auto max-w-screen-xl py-2 md:py-20 flex flex-wrap justify-center gap-4 ">       
        <div
          className="w-full px-4 "
          key={Math.random()}
        >
          <div className="pb-4 flex flex-col md:flex-row items-center justify-between">
           <div className="md:w-[68%]">
              <span className="uppercase text-md tracking-widest  text-roze">Red Barn Wedding Studio</span>
              <h1>Chicago Wedding Venues</h1>
              <hr className="line line-hr-left"></hr>
          </div> 
          <div className="md:w-[30%]">
            <SearchBarVenue search={search}/>
          </div>
          </div>
          <InfiniteScrollingVenues search={search} initialVenues={venues} />
        </div>
       
      </div>
    </div>
  );
};

export default VenuesPage;
