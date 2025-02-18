'use client';
import { ParallaxBanner } from "react-scroll-parallax";
import { Button } from "../ui/Button";

export const ParalaxComponent = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/carousel-9.webp", speed: -30, }]}
      className="h-[500px]"
     
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50" >
       <h2 className="text-white w-[70%] mx-auto text-center" >
        ​​Ready to begin? Reach out today to reserve your date.
       </h2>
       <p className="text-white text-xl w-[70%] mx-auto text-center pt-6">Fill out the form, and we’ll get back to you shortly!</p>
      </div>
    </ParallaxBanner>
  )
}
