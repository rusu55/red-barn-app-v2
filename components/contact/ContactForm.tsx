"use client";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import bgImage from "@/public/images/img-2.jpg";

export const ContactForm = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/img-2.jpg", speed: -25 }]}
      className="h-[300px] md:h-[780px]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          className="bg-white"
          name="lc_contact_form"
          frameBorder="0"
          width="45%"
          height="690"
          src="https://548203.17hats.com/p#/embed/zztkrnnwkgvxwcxfdfrtspfwzcwcxhbs"
        ></iframe>
        <script
          type="text/javascript"
          src="https://548203.17hats.com/vendor/iframeSizer.min.js"
        async ></script>
      </div>
    </ParallaxBanner>
  );
};
