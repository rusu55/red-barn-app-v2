"use client";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Testimonials from "../ui/testimonials/Testimonials";

const HomeReviews = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/img-2.webp", speed: -25 }]}
      className="h-[500px]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Testimonials />
      </div>
    </ParallaxBanner>
  );
};

export default HomeReviews;
