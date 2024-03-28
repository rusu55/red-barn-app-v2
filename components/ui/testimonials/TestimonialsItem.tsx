"use client";
import React from "react";
import clsx from "clsx";

const TestimonialsItem = ({
  reviews: { name, review },
  currentIndex,
  index,
}: any) => {
  return (
    <div
      className={clsx('top-10 px-10',
      currentIndex === index
        ? "opacity-100 text-center absolute top-0 left-0 animate-fadeIn "
        : " opacity-0"
      )}
    >      
      <h2 className="text-2xl">{name}</h2>
      <p className="mt-4">{review}</p>
    </div>
  );
};

export default TestimonialsItem;
