import { Icon } from "@/components//ui/Icon"
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

export const Videography = () => {
  return (
    <div className="bg-neutral-100/75">  
    <RevealComponent index={1} variants={fadeBottomTop}>
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center py-16">
        <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col">
                        <span className="uppercase text-md tracking-widest  text-roze pb-3">Cinematography</span>
                        <h2>Movie-Star Package</h2>
                        <hr className="line line-hr-left" />
                        <ul>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />10 Hours of Cinematography</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />ONE Videographer</li>                           
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with all images</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Full Copyright release</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Complimentary Pre-wedding Consultation</li>                           
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Free USB with a full length film edit</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />Highlights video of the Wedding Day</li>
                           <li className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />RAW Footage Available</li>
                        </ul>
                        <p className="font-pariss text-roze text-xl font-bold py-4 pl-4">$ 2495</p>
                    </div>
                    
         </div>

         <div className="w-full md:w-1/2 px-4">
         <div className="flex flex-col">
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
    </div>
  )
}
