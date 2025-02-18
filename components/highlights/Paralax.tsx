'use client';
import { ParallaxBanner } from "react-scroll-parallax";
import { Button } from "../ui/Button";

export const ParalaxComponent = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/carousel-9.webp", speed: -25, }]}
      className="h-[500px]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
       <h2 className="text-white px-10" >
        ​​Ready to begin? Reach out today to reserve your date.
       </h2>
       <Button href="/wedding-venues" className="rounded-xl mt-8">Let`s Connect</Button>
      </div>
    </ParallaxBanner>
  )
}
