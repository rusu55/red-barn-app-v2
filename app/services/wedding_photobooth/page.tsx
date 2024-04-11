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
        <h1 className="text-center">Why People Love our PhotoBooth</h1>
        <hr className="mx-auto block line-hr-center" />
        <p className="text-center">
          The photobooth is always a great way to entertain your guests and our
          photobooth is the top shelf of booths.
        </p>
        <div className="flex flex-wrap items-start justify-center mt-10">
          {/* Left Column */}
          <div className="w-full md:w-1/4">
            <div className="w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Quality Photobooth</h2>
              <p className="pt-4 text-right">
                Quality built booths for worry free events! <br />
                The Pixie photobooth is a open booth that can accommodate 10
                people at once
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-end">
              <h2 className=" !text-3xl text-right">Live Printing</h2>
              <p className="text-right pt-4">
                Super gloss paper, printed in seconds.
                <br />2 strips of 2×6 at a time
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Online Gallery</h2>
              <span className="border-t border-roze w-[120px]" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={photobooth} alt="" className="w-[300px] object-cover mx-auto" />
          </div>
          {/* Right Column*/}
          <div className="w-full md:w-1/4">
            <div className="w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Unlimited Prints</h2>
              <p className="text-right pt-4">
                Unlimited prints are included in the rental price so each person
                in the photo gets a print.
                <br />
                Take pictures 5 times or 10 times (does not matter to us)
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Unlimited Props</h2>
              <p className="text-right pt-4">
                we have everything from wigs, hats, moustaches, fancy glasses
                and others...
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Scrapbook Included</h2>
              <p className="text-right pt-4">
                1 scrapbook so you can collect all the memories and have a
                wonderful keepsake
              </p>
              <span className="border-t border-roze w-[120px]" />
            </div>
            <div className="pt-8 w-full flex flex-col items-end">
              <h2 className=" !text-3xl">Choice of backdrop</h2>
              <p></p>
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
