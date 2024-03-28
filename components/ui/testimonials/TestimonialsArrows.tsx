import React from "react";
import { Icon } from "../Icon";

const TestimonialsArrows = ({ prev, next }: any) => {
  return (
    <>
      <span className="left arrow">
        <Icon icon="arrowBack" stroke={2} onClick={prev} />
      </span>
      <span className="right arrow">
        <Icon icon="arrowBack" stroke={2} onClick={next} />
      </span>
    </>
  );
};

export default TestimonialsArrows;
