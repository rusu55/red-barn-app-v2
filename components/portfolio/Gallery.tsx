"use client";
import React, { useState, useEffect, useCallback } from "react";
import { GalleryControls } from "./GalleryControls";
import { PortfolioGallery } from "./PortfolioGallery";

export const Gallery = ({ portfolio }: any) => {
  const [tag, setTag] = useState("all");
  const [galleryPhotos, setGalleryPhotos] = useState(portfolio);
  +useEffect(() => {
    setGalleryPhotos(
      tag === "all"
        ? portfolio
        : portfolio.filter((image: any) => image.tag[0] === tag)
    );
  }, [tag]);

  return (
    <>
      <GalleryControls onChange={setTag} active={tag} />
      <div className="mt-8">
        <PortfolioGallery tag={tag} portfolio={galleryPhotos} />
      </div>
    </>
  );
};
