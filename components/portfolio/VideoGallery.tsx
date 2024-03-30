"use client";
import React, { useState } from "react";
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
  const data = (
    <a className="gallery-item" data-src="https://vimeo.com/668001870" key="4">
      <img
        style={{ maxWidth: "400px" }}
        className="img-responsive"
        alt=""
        src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
      />
    </a>
  );
  return (
    <>
      <ul className="grid gap-y-8 sm:gap-6 lg:grid-cols-4 lg:gap-4 2xl:gap-5">
        <AnimatePresence>
          {videos.map((video: any, index: number) => (
            <motion.li
              key={index}
              className="group relative cursor-pointer"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" aspect-square overflow-hidden relative">
                <Image
                  src={video.poster}
                  alt=""
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 20vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 rounded-2xl bg-gray-900 opacity-0 transition duration-300 group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-roze opacity-70"
                    onClick={() => setOpen(true)}
                  >
                    <Icon icon="plus" className="text-white" />
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <LightGallery
        index={}
        download={false}
        speed={500}
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
      >
        {data}
      </LightGallery>
    </>
  );
};

export default VideoGallery;
