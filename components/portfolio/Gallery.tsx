"use client";
import React, { useState, useEffect, useCallback } from "react";
import { GalleryControls } from "./GalleryControls";
import { PortfolioGallery } from "./PortfolioGallery";
import { VideoGallery } from "./VideoGallery";
import { PortfolioPhotoIntro } from "@/components/portfolio/PortfolioPhotoIntro";

export const Gallery = ({ portfolio, videos }: any) => {
  const [tag, setTag] = useState("all");
  const [galleryPhotos, setGalleryPhotos] = useState(portfolio);
  
  useEffect(() => {
    setGalleryPhotos(
      tag === "all"
        ? portfolio
        : portfolio.filter((image: any) => image.tag[0] === tag)
    );
  }, [tag]);

  return (
    <>
      {tag != "Cinematography" && <PortfolioPhotoIntro />}

      <GalleryControls onChange={setTag} active={tag} />
      <div className="mt-8">
        <PortfolioGallery tag={tag} portfolio={galleryPhotos} />
      </div>
      {(tag === "all" || tag === "Cinematography") && (
        <div className="mt-10">
          <VideoGallery videos={videos} />
        </div>
      )}
    </>
  );
};
