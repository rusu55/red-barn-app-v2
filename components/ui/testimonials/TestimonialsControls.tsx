"use client";
import React from "react";
import clsx from "clsx";

const TestimonialsControls = ({ slides, currentIndex, switchIndex }: any) => {
  return (
    <ul className="absolute w-full block text-center bottom-4  left-0">
      {slides.map((slide: any, index: any) => (
        <li
          key={index}
          className={clsx(
            "list-none inline-block w-1 h-1 rounded-full mx-1",
            index === currentIndex ? " bg-roze mx-1" : " bg-slate-500 "
          )}
          onClick={() => switchIndex(index)}
        ></li>
      ))}
    </ul>
  );
};

export default TestimonialsControls;
