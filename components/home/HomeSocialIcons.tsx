"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import theKNot from "/public/images/theKnot.png";
import weddingwire from "/public/images/weddingwire.png";
import instagram from "/public/images/instagram.png";
import facebook from "/public/images/facebook.png";
import vimeo from "/public/images/vimeo.png";
import youtube from "/public/images/youtube.png";

export const HomeSocialIcons = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-16 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="pwe-heading">Follow us on:</h2>
        <hr className="line line-hr-center" />
      </div>
      <div className=" mt-11">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="swiper"
        >
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://www.theknot.com/marketplace/red-barn-wedding-studio-schaumburg-il-2027022'>
                <Image
                  src={theKNot}
                  className="object-cover"
                  alt=""
                  width="160"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://www.weddingwire.com/biz/red-barn-wedding-studio/776d90b9b48065a1.html'>
                <Image
                  src={weddingwire}
                  alt=""
                  width="180"
                  className=" opacity-70"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://www.instagram.com/redbarnweddingstudio/'>
                <Image
                  src={instagram}
                  alt=""
                  width="180"
                  className=" opacity-70"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://www.facebook.com/RedBarnWeddingStudio'>
                <Image
                  src={facebook}
                  alt=""
                  width="180"
                  className=" opacity-70"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://vimeo.com/user81106458'>
                <Image src={vimeo} alt="" width="180" className=" opacity-70" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center items-center">
              <Link href='https://www.youtube.com/channel/UCnTzNTKip1rjTTzd5vqO5HA'>
                <Image
                  src={youtube}
                  alt=""
                  width="180"
                  className=" opacity-70"
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
