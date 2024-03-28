"use client";
import React from "react";
import { Icon } from "../Icon";

const TestimonialsItem = ({
  reviews: { name, review },
  currentIndex,
  index,
}: any) => {
  return (
    <div
      className={
        currentIndex === index
          ? "opacity-100 text-center absolute top-0 left-0 animate-fadeIn "
          : " opacity-0"
      }
    >
      <Icon icon="arrowBack" stroke={2} className="img" />
      <h2 className="">{name}</h2>
      <p>{review}</p>
    </div>
  );
};

export default TestimonialsItem;
