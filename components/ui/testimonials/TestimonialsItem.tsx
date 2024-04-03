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
      className={clsx(
        "top-0 md:top-2 px-10",
        currentIndex === index
          ? "opacity-100 text-center absolute top-0 left-0 animate-fadeIn "
          : " opacity-0"
      )}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl">{name}</h2>
        <hr className="line line-hr-center" />
      </div>
      <p className="mt-4 text-sm">{review}</p>
    </div>
  );
};

export default TestimonialsItem;
