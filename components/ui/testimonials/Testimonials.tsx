"use client";

import React, { useEffect, useState, useRef } from "react";

import TestimonialsArrows from "./TestimonialsArrows";
import TestimonialsControls from "./TestimonialsControls";
import TestimonialsItem from "./TestimonialsItem";

export const reviews = [
  {
    name: "Bogdan Rusu",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ratione, voluptatem cum molestiae hic nam neque culpa eveniet magnam consequatur vitae accusamus ducimus voluptates. Optio consequuntur ipsam autem officia itaque!",
  },
  {
    name: "Elena Rusu",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ratione, voluptatem cum molestiae hic nam neque culpa eveniet magnam consequatur vitae accusamus ducimus voluptates. Optio consequuntur ipsam autem officia itaque!",
  },
  {
    name: "Katerina Rusu",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ratione, voluptatem cum molestiae hic nam neque culpa eveniet magnam consequatur vitae accusamus ducimus voluptates. Optio consequuntur ipsam autem officia itaque!",
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
    <section className=" bg-white p-8 h-3/5 relative ">
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
