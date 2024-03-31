"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import { LightGallerySettings } from "lightgallery/lg-settings";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Icon } from "../ui/Icon";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import videos from "@/lib/videos";

export const VideoGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = useState(-1);
  const data = (
    <div className="gallery-item cursor-pointer" data-src={videos[0].src} key="4">
      <Image
        width={400}
        height={400}
        alt=""
        src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
      />
    </div>
  );

  const bodyContent = (
      
        <>
          {videos.map((video: any, index: number) =>(              
             
              <div className="gallery-item cursor-pointer aspect-square overflow-hidden relative" data-src={video.src} key={index} data-lg-size={video.size}>
              <Image
              fill
                className="rounded-2xl object-cover"
                sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 20vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
                alt=""
                src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
              />
              
              </div>
            
           
          ))}
        </>
  )
  return (   
    <ul className="grid gap-y-8 sm:gap-6 lg:grid-cols-4 lg:gap-4 2xl:gap-5">
           <LightGallery 
        index={index}
       download={false}
        speed={500}
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
      >
        {bodyContent}
      </LightGallery>   
   </ul>
  );
};

export default VideoGallery;
