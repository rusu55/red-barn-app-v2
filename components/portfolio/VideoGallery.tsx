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

export const VideoGallery = ({ videos }: any) => {
  const bodyContent = (
    <>
      {videos.map((video: any, index: number) => (
        <motion.div
          className="gallery-item cursor-pointer aspect-square overflow- group relative"
          data-src={video.src}
          key={index}
          data-lg-size={video.size}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            fill
            className="rounded-2xl object-cover"
            sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 20vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
            alt=""
            src={video.img}
          />
          <div className="absolute flex right-5 bottom-2 ">
            <Icon icon="playFilled" className="text-white h-10 w-10" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gray-900 opacity-0 transition duration-300 group-hover:opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-roze opacity-70">
              <Icon icon="playFilled" className="text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );

  return (
    <>
      <div className="grid gap-y-8 sm:gap-6 lg:grid-cols-4 lg:gap-4 2xl:gap-5">
        <AnimatePresence>
          <LightGallery
            plugins={[lgVideo, lgZoom]}
            download={false}
            elementClassNames="custom-class-name"
          >
            {bodyContent}
          </LightGallery>
        </AnimatePresence>
      </div>
    </>
  );
};
