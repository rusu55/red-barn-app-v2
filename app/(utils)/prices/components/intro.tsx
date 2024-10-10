import Image from "next/image"
import { Button } from "@/components/ui/Button"
export const Intro = ({image}: any) => {
  return (
    <> 
    
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center py-4">           
        <div className="w-full lg:w-1/2 px-4 hidden lg:block max-w-[600px] max-h-[600px]">
            <Image src={image} alt="Wedding Photography" className=" rounded-2xl" />
        </div>
        <div className="w-full lg:w-1/2 px-4 py-4 lg:py-0">
            <div className="flex flex-col lg:px-20">
                <span className="uppercase text-md tracking-widest  text-roze">Welcome to</span>
                <h1>Red Barn Studio</h1>
                <hr className="line line-hr-left" />
                <p>
                    Our style is 80% documentation and 20% direction. We’ll direct when needed – like during portraits – and capture candid moments as they happen throughout your wedding day. This is how we tell your amazing story. Hiring wedding photographers has always been stressful and difficult. We wanted to change that. We wanted to offer incredible photography and video at a great price that was reliable, consistent and meaningful. We did just that.
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
