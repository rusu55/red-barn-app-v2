"use client";
import React from "react";

const TestimonialsControls = ({ slides, currentIndex, switchIndex }: any) => {
  return (
    <ul className="dots">
      {slides.map((slide: any, index: any) => (
        <li
          key={index}
          className={index === currentIndex ? "dot active" : "dot"}
          onClick={() => switchIndex(index)}
        ></li>
      ))}
    </ul>
  );
};

export default TestimonialsControls;
