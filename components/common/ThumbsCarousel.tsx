import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay} from "swiper/modules";

const ThumbsCarousel = () => {
  return (
    <div className='w-full py-16'>
        <div>aaaa</div>
        <div className='mt-11'>
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

          </Swiper>
        </div>
    </div>
  )
}

export default ThumbsCarousel