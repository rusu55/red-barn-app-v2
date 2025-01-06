import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { Hero } from "@/components/venues/Hero";
import hero_img from "/public/images/about.jpg";
import _ from "lodash";
import { VenueIntro } from "@/components/venues/VenueIntro";
import { RecentGaleries } from "@/components/venues/RecentGaleries";
import { HomeIcons } from "@/components/home/HomeIcons";


export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
  
  const id = params.venueId
  const venue = await fetch(`http://localhost:3000/api/venue/${id}`).then((res) => res.json())
  
  return {
      title: venue.name,
      description: `Red Barn Wedding Studio brigs to the future Brides and Grooms an new Wedding Venue Photography: ${venue.name}`,
      openGraph:{
        images: [
          {
            url: venue.hero
          }
        ]
      }
    };
  }

const VenuePage = async ({params}: any) => {
    const id = params.venueId
    const venue = await fetch(`http://localhost:3000/api/venue/${id}`).then((res) => res.json())
    console.log(venue)
  return (
    <div className="pt-20 md:pt-0">
      <Hero hero={venue.hero} title={venue.name} description={""} />
      <div className="mt-20">
        <VenueIntro image={venue.hero} data={venue} />        
        <RecentGaleries galleries={venue.blogs} />
        <HomeIcons />
      </div>      
    </div>
  )
}

export default VenuePage