"use client";

import React, { useEffect, useState, useRef } from "react";

import TestimonialsArrows from "./TestimonialsArrows";
import TestimonialsControls from "./TestimonialsControls";
import TestimonialsItem from "./TestimonialsItem";

export const reviews = [
  {
    name: "Lynda C",
    review:
      "It was an absolute pleasure to have worked with Red barn! Photographers and videographer made me feel comfortable! They were all professional, personable and friendly! They helped make my wedding day even more amazing! Thank you so much! I'm so grateful to have found you!",
  },
  {
    name: " Elli J",
    review:
      "Red Barn did a fantastic job! Our wedding photos are so joyful and beautiful! The team of photographers were so wonderful to work with and since we spent the whole day with them, that was so important. They really helped us have fun and feel beautiful on our special day! ",
  },
  {
    name: "Morgan H",
    review:
      "I just received my wedding photos. They're everything I wanted and more. We had a Christmas wedding.. Red Barn captured the beauty of Christmas into our photos.. BEAUTIFUL. I highly recommend Red Barn for your wedding.",
  },
  {
    name: "Colleen M",
    review:
      "We had the best experience working with Red Barn. We were so happy with how our engagement and wedding photos turned out! I would recommend them to anyone. Very professional and easy to work with. Elena, Bogdan, and Max are all great : ) We loved working them!",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval: any = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < reviews.length - 1 ? currentSlide + 1 : 0
      );
    }, 7000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  /* Carousel Control */
  /* ---- arrows ---- */

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : reviews.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < reviews.length - 1 ? currentSlide + 1 : 0;

    setCurrentSlide(index);
  };

  const switchIndex = (index: any) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  return (
    <section className=" bg-white p-8 h-3/5 md:h-1/2 relative ">
      <div className="max-w-2xl">
        <div className=" overflow-hidden relative">
          {reviews.map((review: any, index: any) => (
            <TestimonialsItem
              reviews={review}
              key={index}
              index={index}
              currentIndex={currentSlide}
            />
          ))}
        </div>
        <TestimonialsControls
          slides={reviews}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
        <TestimonialsArrows prev={prev} next={next} />
      </div>
    </section>
  );
};

export default Testimonials;
