import Image from "next/image";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";

export const Questions = ({image}: any) => {
  return (
    <div className="bg-neutral-100/75"> 
    <RevealComponent index={1} variants={fadeBottomTop}>
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center py-4">
        <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
            <div className="flex flex-col">
                <span className="uppercase text-md tracking-widest  text-roze">
                frequently</span>
                <h1>Asked Questions</h1>
                <hr className="line line-hr-left" />
                <div className="pt-4">
                    <h6 className="text-xl">How do we secure our date?</h6>
                    <p>
                    We require a 25% retainer and a signed contract to secure your date. The remainder balance is du by the Wedding Date.
                    </p>
                </div>
                <div className="pt-4">
                    <h6 className="text-xl">Do you take Family Photos at the Wedding?</h6>
                    <p>
                     Of course! These are important images and we want to capture them. We typically take about 30 minutes immediately following the ceremony to photograph family portraits. 
                    </p>
                </div>
                <div className="pt-4">
                    <h6 className="text-xl">How do we get our Photos??</h6>
                    <p>
                     We deliver your photos within 70 days after the Wedding Day. Each photo will be edited for exposure and color, there  watermarks and all the photos are high resolution. Once your gallery is ready, you&apos;ll receive a link where you can download all the photos and share with family and friends.  
                    </p>
                </div>
                <div className="pt-4">
                    <h6 className="text-xl">How do we get our Video?</h6>
                    <p>
                     We deliver your edits within 90 days after Wedding Day. There are Online Links where you can download the Highlight Video and the Long Edit Video. RAW Footage vailable at request. 
                    </p>
                </div>
                <div className="pt-4">
                    <h6 className="text-xl">Do you have Liability Insurance?</h6>
                    <p>                     
                        Absolutely! If your venue needs a certificate of insurance (COI) just let us know and we&apos;ll gladly email it over.   
                    </p>
                </div>                                 
            </div>
        </div>   
        <div className="w-full lg:w-1/2 px-4 hidden lg:block max-w-[600px]">
            <Image src={image} alt="Wedding Photography" className=" rounded-2xl object-cover object-center"  sizes="(min-width: 768px) 30vw"/>
        </div>
    </div> 
    </RevealComponent>
</div>
  )
}
