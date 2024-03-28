import React from "react";
import { Icon } from "../Icon";

const TestimonialsArrows = ({ prev, next }: any) => {
  return (
    <>
      <span className="absolute top-[calc(50%-20px)] left-3 cursor-pointer hover:text-roze duration-300 ease-in-out" onClick={prev} >
        <Icon icon="arrowLeft" stroke={2}/>
      </span>
      <span className="absolute top-[calc(50%-20px)] right-3 cursor-pointer  hover:text-roze duration-300 ease-in-out" onClick={next} >
        <Icon icon="arrowRight" stroke={2} />
      </span>
    </>
  );
};

export default TestimonialsArrows;
