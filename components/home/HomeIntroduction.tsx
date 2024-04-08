import Image from "next/image";

import aboutImage from "/public/images/image-1.jpg";

export const HomeIntroduction = () => {
  return (
    <section className=" my-16">
      <div className="mx-auto max-w-screen-xl flex flex-wrap justify-center">
        {/* Block Text*/}
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col px-4 py-2">
            <span></span>
            <h2>About Us</h2>
            <hr className="line line-hr-left"></hr>
            <p>
              Photography is so much more than taking pretty pictures. We want
              to help you make memories and preserve them in images that make
              you feel like you're in those moments again.
            </p>
            <p>
              We are Red Barn Wedding STudio, Chicago wedding photographer and
              cinematographer serving Chicago, all suburbs, and beyond!
            </p>
            <p>
              We often say that we are a mix of a lifestyle and fine art wedding
              photographers. A little bit candid and fun, and a little bit
              poised and elegant. We love to create romantic images with an
              editorial feel that still capture your authentic emotions and
              personality.
            </p>
            <p className="font-normal font-pariss text-roze text-xl text-center md:text-right">
              Red Barn Wedding Studio
            </p>
          </div>
        </div>
        {/* Block Image*/}
        <div className="w-full md:w-1/2 px-4">
          <div className="relative w-full">
            <div className="relative pt-4 pb-4 mb-8 max-w-[600px] img">
              <Image
                className="object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95"
                src={aboutImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
