"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { images } from "@/lib/carousel";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomeCarousel = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={0}
        //centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
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
            //sss
          <SwiperSlide key={index}>
            <Image
              // height={600}
              // width={1200}
              src={image.src}
              alt="Chicago Wedding Photographer"
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1920px) 80vw"
              //style={{objectFit: "cover"}}
              className="object-cover object-center"
              //priority={true}
              //loading="eager"
              //sizes=" 300px, (min-width: 640px) 100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
