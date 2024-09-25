import Image from "next/image";

import aboutImage from "/public/images/image-1.jpg";

export const HomeIntroduction = () => {
  return (
    <section className="my-16">
      <div className="mx-auto max-w-screen-xl flex flex-wrap justify-center">
        {/* Block Text*/}
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col px-4 py-2">
            <span></span>
            
            <h1>Chicago Wedding Photographers</h1>
            <hr className="line line-hr-left"></hr>
              
            <p>
              Wedding Photography is so much more than taking pretty pictures. We want
              to help you make memories and preserve them in images that make
              you feel like you&apos;re in those moments again.
            </p>
            <p>
              Red Barn Wedding Studio is a wedding photography and wedding cinematography company, based in Chicago, Illinois, dedicated to customer service and exceptional visual storytelling. All our lead wedding photographers and videographers have around 15 years experience in the wedding field, covering and experiencing all kinds of lighting scenarios and true life stories.
            </p>
            <p>
            We believe that your wedding collection should reflect who you are as a couple; it should capture all the joy and energy of your special day. The artistic, documentary approach is a celebration of authentic, meaningful moments. We would be delighted to be part of your wedding journey, and we hope your collection will bring you joy for many years to come.
            </p>
           <p>
           We know that it takes much time and energy to plan a dream wedding, and we are determined to do our part to make your special day a success. We cannot wait to meet you and discuss your initial wedding thoughts and vision.
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
