"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "../ui/Icon";
import Lightbox from "yet-another-react-lightbox";
import { AnimatePresence } from "framer-motion";

import "yet-another-react-lightbox/styles.css";

interface Props {
  id: number;
  photos: [string];
  tag: string;
}

export const PortfolioGallery = ({ portfolio, tag }: any) => {
  const [index, setIndex] = useState(-1);

  const slides = portfolio.map((photo: any) => {
    return { src: photo.url };
  });

  return (
    <>
      <ul className="grid gap-y-8 sm:gap-6 lg:grid-cols-4 lg:gap-4 2xl:gap-5">
        <AnimatePresence>
          {portfolio.map((image: any, index: number) => (
            <motion.li
              key={index}
              className="group relative cursor-pointer"
              data-src={image}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" aspect-square overflow-hidden relative">
                <Image
                  src={image.url}
                  alt=""
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 20vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 rounded-2xl bg-gray-900 opacity-0 transition duration-300 group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-roze opacity-70"
                    onClick={() => setIndex(index)}
                  >
                    <Icon icon="plus" className="text-white" />
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Lightbox
        index={index}
        slides={slides}
        
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};
