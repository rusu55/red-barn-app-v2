import { Hero } from "@/components/ui/Hero";
import Img from '/public/images/photography-hero.jpg';

const PhotoboothPage = () => {
  return (
    <div className="pt-20 md:pt-0">
        <Hero image={Img} title={""} description={""} />
        <div className="mx-auto max-w-screen-xl mt-16 px-6">
            <div>Why People LOve our PhotoBooth</div>
            <p>
              The photobooth is always a great way to entertain your guests and our photobooth is the top shelf of booths.
            </p>
            <div className="flex flex-wrap items-center justify-between">
              {/* Left Column */}
                <div>
                  <div>
                    <h2>Quality Photobooth</h2>
                    <p>Quality built booths for worry free events!</p>
                    <p>The Pixie photobooth is a open booth that can accommodate 10 people at once</p>
                  </div>
                  <div>
                    <h2>Live Printing</h2>
                    <p>Super gloss photo paper, printed in seconds.</p>
                    <p>2 strips of 2×6 at a time</p>
                  </div>
                  <div>
                    <h2>Online Gallery</h2>
                  </div>
                </div>
                <div>Center</div>
                {/* Right Column*/}
                <div>
                  <div>
                    <h2>Unlimited Prints</h2>
                    <p>Unlimited prints are included in the rental price so each person in the photo gets a print.</p>
                    <p>Take pictures 5 times or 10 times (does not matter to us)</p>
                  </div>
                  <div>
                    <h2>Unlimited Props</h2>
                    <p>we have everything from wigs, hats, moustaches, fancy glasses and others...</p>
                  </div>
                  <div>
                    <h2>ScrapBook Included</h2>
                    <p>1 scrapbook so you can collect all the memories and have a wonderful keepsake</p>
                  </div>
                  <div>
                    <h2>Choice of backdrop</h2>
                    <p></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhotoboothPage