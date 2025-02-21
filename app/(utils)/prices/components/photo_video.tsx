import { Icon } from "@/components//ui/Icon"
import { VideoGrid } from "./video-grid"
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

export const PhotoVideo = () => {
  return (
    <RevealComponent index={1} variants={fadeBottomTop}>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center ">
                <div className="w-full order-2 md:order-1 md:w-3/5 px-4">
                     <VideoGrid />
                </div>
                <div className="w-full md:w-2/5 px-4 order-1 md:order-2">
                    <div className="flex flex-col md:pt-12">
                        <span className="uppercase text-md tracking-widest  text-roze pb-3">Photography + Cinematography</span>
                        <h2>Celebration Package </h2>
                        <span className="pl-2 text-base pb-2">(our most popular package)</span>
                        <hr className="line line-hr-left" />
                        <ul>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />10 Hours of Photography for ONE Photographer</li>                           
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Over 800 Images on your Wedding Day</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with all images</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Full Copyright release</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Complimentary Pre-wedding Consultation</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Web Gallery to share with your Friends</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />14x11 Wedding Album (Leather Cover, 30 pages)</li>
                            <br />
                            <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />10 Hours of Cinematography for ONE Videographer</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with a full length film edit</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Highlights video of the Wedding Day</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />RAW Footage Available</li>
                           
                        </ul>
                        <p className="font-pariss text-roze text-xl font-bold py-4 pl-4">$ 4395</p>
                    </div>
                    <div className="flex flex-col pt-10">
                        <p>The best part about this bundle is that our photo and video teams work together all the time. So you&apos;ll get a better wedding day experience and peace of mind knowing you hired the best team possible for your wedding. </p>
                    </div>
                    <div className="flex flex-col mt-10">
                        <span className="uppercase text-md tracking-widest  text-roze pb-3">Photo-Booth</span>
                        <h2>Photo Booth Package</h2>
                        <hr className="line line-hr-left" />
                        <ul>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Coverage during the Reception time</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Unlimited Prints</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Variety of Props</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Choice of the Backdrop</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Customized Logo for strips</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Scrapbook with a copy of every single strip</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Attendant for the duration of the coverage</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Online gallery</li>

                        </ul>
                        <p className="font-pariss text-roze text-xl font-bold py-4 pl-4">$ 995</p>
                    </div>
                   
                </div>        
               
        </div>
        </RevealComponent>
  )
}