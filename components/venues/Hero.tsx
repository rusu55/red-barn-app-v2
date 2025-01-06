import React from "react";

interface Props {
  hero: string;
  title: string;
  description: string;
}

export const Hero = ({ hero, title, description }: Props) => {
  return (
    <div
      className="w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-10 py-24 md:py-64">
        <div className="w-[60%] md:max-w-lg bg-white/80 py-4 md:py-9 px-7 text-center ">
          <span className="font-normal font-pariss text-lg md:text-xl">
            Red Barn Wedding Studio
          </span>
          <hr className="line line-hr-center mx-auto" />
          <h1 className="text-base md:text-4xl pt-2 md:pt-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
