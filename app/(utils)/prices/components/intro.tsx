import Image from "next/image"
import { Button } from "@/components/ui/Button"
export const Intro = ({image}: any) => {
  return (
    <> 
    
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center py-4">           
        <div className="w-full lg:w-1/2 px-4 hidden lg:block max-w-[600px] max-h-[600px]">
            <Image src={image} alt="Wedding Photography" className=" rounded-2xl object-cover object-center"  sizes="(min-width: 768px) 30vw"/>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
            <div className="flex flex-col lg:px-20">
                <span className="uppercase text-md tracking-widest  text-roze">Welcome to</span>
                <h1>Red Barn Studio</h1>
                <hr className="line line-hr-left" />
                <p>
                    Our style is a  mixture of documentary and guided. We’ll step in to provide direction when it’s needed—such as during portraits—but for the rest of your wedding day, we focus on capturing candid, natural moments as they unfold. This allows us to tell your unique story in a way that feels authentic and timeless.<br/><br/> We understand that choosing wedding photographers can feel overwhelming and stressful. That’s why we set out to change the game—offering stunning photography and videography at a great value, while ensuring reliability, consistency, and heartfelt storytelling. And we’re proud to say we’ve done exactly that.
                </p>
                <div className="py-6 flex items-center justify-center space-x-3">
                    <Button href="https://redbarnweddingstudio.setmore.com">Online Appointment</Button>
                    <Button href="/contact-wedding-photographer">Contact Us</Button>
                </div>
            </div>
        </div>            
    </div>
    {/**
    <div className="bg-neutral-100/75">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center py-4">
            <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
                <h2>Every Couple</h2>
                <span className="uppercase text-md tracking-widest  text-roze">Recives...</span>
                <div className="w-full lg:w-[60%]">
                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>High Resolution Images</h5>
                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Pre Wedding Consultation</h5>
                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Full Copyright Release</h5>
                    <h5 className='text-lg  pt-4 text-left  border-b border-dashed border-slate-200'>Online Gallery</h5>
                </div>
                
            </div>
            <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
                    images
            </div>
        </div>
    </div>
    */}
    </>   
  )
}
