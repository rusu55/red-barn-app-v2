import Image from "next/image";
import { Icon } from "@/components//ui/Icon";
import { PicturesGrid } from "./pictures-grid";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

export const Photography = () => {
  return (
    <div className="bg-neutral-100/75">  
    <RevealComponent index={1} variants={fadeBottomTop}>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center pt-12">           
                
                <div className="w-full md:w-2/5 px-4">
                    <div className="flex flex-col">
                        <span className="uppercase text-md tracking-widest  text-roze pb-3">Photography Package</span>
                        <h2>Everlasting Package</h2>
                        <hr className="line line-hr-left" />
                        <ul>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />10 Hours of Photography by Lead Photographer</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />8 Hours of Photography by Second Photographer</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Over 1100 Images on your Wedding Day</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with all images</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Full Copyright release</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Complimentary Pre-wedding Consultation</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Web Gallery to share with your Friends</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Engagement Session</li>
                        </ul>
                       <p className="font-pariss text-roze text-xl font-bold py-4 pl-4">$ 3295</p>
                    </div>
                    <div className="flex flex-col pt-10">
                        
                        <h2>Love Package</h2>
                        <hr className="line line-hr-left" />
                        <ul>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />10 Hours of Photography by Lead Photographer</li>
                           
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Over 800 Images on your Wedding Day</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with all images</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Full Copyright release</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Complimentary Pre-wedding Consultation</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Web Gallery to share with your Friends</li>
                           
                        </ul>
                        <p className="font-pariss text-roze text-xl font-bold py-4 pl-4">$ 2295</p>
                    </div>
                    <div className="flex flex-col pt-10">
                        <p>Your photos will be delivered between 60-70 days after your wedding via online gallery, they will be high resolution, all edited for color and exposure and without any watermarks. You&apos;ll have full Copyright to all your photos.</p>
                    </div>
                </div>
                <div className="w-full md:w-3/5 px-4">
                    <PicturesGrid />
                </div>    
        </div>
        </RevealComponent>
      </div>
  )
}
