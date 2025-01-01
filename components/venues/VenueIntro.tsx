import Image from "next/image";
import Link from "next/link";
import { RevealComponent } from "../ui/RevealComponent";
import { RenderHTML } from "@/lib/render-html";

import { fadeTopBottom } from "@/lib/animation";

export const VenueIntro = ({image, data, ...props}: any) => {

    return (
    <>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6'>
            {/* Block Text*/}
            
                <div className="flex flex-col px-4 pb-8">                    
                    <span className="uppercase text-md tracking-widest  text-roze">Wedding Photography at</span>
                    <h1>{data.name}</h1>                   
                    <hr className='line line-hr-left'></hr>                    
                    <RenderHTML htmlContent={data.description} />
                    <p className="w-full text-center md:text-right"><Link className="border-b-2 border-roze inline-block w-[300px] font-normal font-pariss text-roze text-2xl" href='/wedding-venues'>See more Venues we love ...</Link></p>
                </div>       
        </div>
    </>
  )
}
