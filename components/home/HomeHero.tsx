"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomeHero = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[60vh] md:h-[85vh]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className="block w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
