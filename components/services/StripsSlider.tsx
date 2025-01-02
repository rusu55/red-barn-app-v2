"use client";
import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const slides = [
    { src: '/images/booth-1.jpg'},
    {src: '/images/booth-2.jpg'},
    {src: '/images/booth-3.jpg'},
    {src: '/images/booth-4.jpg'},
    {src: '/images/booth-5.jpg'},
]
export const StripsSlider = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-16 bg-white">
            <div className=" mt-11">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          }}
          modules={[Autoplay]}
          className="swiper"
        >
            {slides.map((img, index) =>(
                <SwiperSlide key={index}>
                    <div className="w-full flex justify-center items-center">
                    <Image
                        src={img.src}
                        className="object-cover"
                        alt=""
                        width="300"
                        height="160"
                        />
                    </div>
                </SwiperSlide>
            ))}        
        </Swiper>
      </div>
    </div>
  );
};
