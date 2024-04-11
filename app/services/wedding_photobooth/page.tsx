import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { StripsSlider } from "@/components/services/StripsSlider";
import Img from "/public/images/photography-hero.jpg";
import photobooth from "/public/images/photobooth.jpg";

const PhotoboothPage = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={Img} title={""} description={""} />
      <div className="mx-auto max-w-screen-xl mt-16 px-6">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl w-[80%] md:text-4xl">Why People Love our PhotoBooth</h1>
          <hr className="mx-auto block line-hr-center" />
          <p className="text-center pt-4">
            The photobooth is always a great way to entertain your guests and our
            photobooth is the top shelf of booths.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center mt-10">
          {/* Left Column */}
          <div className="order-1 w-full md:w-1/4">
            <div className="w-full flex flex-col items-center md:items-end ">
              <h2 className=" !text-2xl md:!text-3xl">Quality Photobooth</h2>
              <p className="pt-4 text-center md:text-right ">
                Quality built booths for worry free events! <br />
                Our photobooth is a open booth that can accommodate 10
                people at once
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-center md:items-end">
              <h2 className=" !text-2xl md:!text-3xl">Live Printing</h2>
              <p className="pt-4 text-center md:text-right">
                Super gloss paper, printed in seconds.
                <br />2 strips of 2×6 at a time
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-center md:items-end">
              <h2 className="!text-2xl md:!text-3xl">Online Gallery</h2>
              <p className="pt-4 text-center md:text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus consequuntur ad expedita perferendis</p>
              <span className="border-t border-roze w-[120px]" />
            </div>
          </div>
          <div className="pt-8 md:pt-0 order-3 md:order-2 w-full md:w-1/2">
            <Image src={photobooth} alt="" className="w-[200px] md:w-[300px] object-cover mx-auto" />
          </div>
          {/* Right Column*/}
          <div className="order-2 md:order-3 w-full md:w-1/4">
            <div className="pt-8 md:pt-0 w-full flex flex-col items-center md:items-start">
              <h2 className="!text-2xl md:!text-3xl">Unlimited Prints</h2>
              <p className="pt-4 text-center md:text-left">
                Unlimited prints are included in the rental price so each person
                in the photo gets a print.
                <br />
                Take pictures 5 times or 10 times (does not matter to us)
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-center md:items-start">
              <h2 className="!text-2xl md:!text-3xl">Unlimited Props</h2>
              <p className="pt-4 text-center  md:text-left">
                we have everything from wigs, hats, moustaches, fancy glasses
                and others...
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-center md:items-start">
              <h2 className="!text-2xl md:!text-3xl">Scrapbook Included</h2>
              <p className="pt-4 text-center  md:text-left">
                1 scrapbook so you can collect all the memories and have a
                wonderful keepsake
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-center md:items-start">
              <h2 className="!text-2xl md:!text-3xl">Choice of backdrop</h2>
              <p className="pt-4 text-center  md:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="border-t border-roze w-[120px]" />
            </div>
          </div>
        </div>
        {/* Slider */}
        <StripsSlider />
      </div>
    </div>
  );
};

export default PhotoboothPage;
