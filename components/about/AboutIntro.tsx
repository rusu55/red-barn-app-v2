import Image from "next/image";
import Link from "next/link";

export const AboutIntro = ({image,...props}: any) => {
  return (
    <>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6'>
            {/* Block Text*/}
            <div className="w-full md:w-1/2 px-4">
                <div className="flex flex-col px-4 py-2">
                    <span></span>
                    <h2>Red Barn Wedding Studio</h2>
                    <hr className='line line-hr-left'></hr>
                    <p>Red Barn Wedding Studio offers wedding photography , wedding cinematography and photo-booth services to brides and grooms in the Chicago area and the suburbs surrounding. We also travel further and do destination weddings based on availability!</p>
                    <p>At Red Barn Wedding Studio we capture all styles of wedding photography : Photojournalistic, Traditional, Candid, Contemporary and the list goes on...</p>
                    <p>We like to meet with our couples and offer Complimentary Wedding Consultation that can be done in person by visiting our studio OR on-line using Skype or Facetime. The couple&apos;s schedules tend to be very busy these days, and we try to save the trips for those who live too far from Des Plaines.</p>
                    <p>Weddings … endless hours of planning go into them, and that &apos;s why you need a good photographer to freeze frame those special moments for you. We will capture the spirit of the occasion from every angle, leaving you with a collection of stunning photographs that will tell your story for a life time.
    Our artistic and candid approach seeks to embrace each heartfelt smile, every enchanting glance, and the unique human connection that spark, between you and your loved ones, guaranteeing you stunning bridal wedding photos that are brought to life.</p>
                    
                </div>                
            </div>
            {/* Block Image*/}
            <div className="w-full md:w-1/2 px-4 mt-20">
                <div className='relative w-full'>
                    <div className='relative pt-4 pb-4 mb-8 max-w-[600px] img'>
                        <Image className='object-cover object-center h-full w-full duration-500 ease-in-out hover:scale-95'  src={image} alt=""  /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-neutral-100/75 py-10 md:py-20">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-start items-start px-2 md:px-6">
                <div className="w-full md:w-1/2 px-4">
                    <div className="flex flex-col px-4 py-2">
                        <p>You deserve a creative and personal story that is completely yours, and it is our job as Wedding photographers and cinematographers to capture your wedding story in a beautiful and innovative way. Your wedding is unique to you. Together, we will make sure your wedding photos will look like nobody else&apos;s. Our commitment is to you as a customer and to our quality. All our offerings come with unlimited images captured on your wedding day , USBs with full copyright release and raw footage as included in the package.</p>
                        <p className="font-normal font-pariss text-roze text-xl text-center md:text-right">Red Barn Wedding Studio</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4">                   
                        <ul className="mx-auto font-pariss text-lg text-center md:text-right w-[80%] leading-9">
                            <li className="py-2 border-b-2 border-roze"><Link href="/services/wedding_photography">Wedding Photography</Link></li>
                            <li className="py-2 border-b-2 border-roze"><Link href="/services/wedding_cinematography">Wedding Cinematography</Link></li>
                            <li className="py-2 border-b-2 border-roze"><Link href="/services/wedding_photography">Engagement Photograohy</Link></li>
                            <li className="py-2 border-b-2 border-roze"><Link href="/services/wedding_photobooth">Wedding Photobooth</Link></li>
                        </ul>
                    
                </div>
            </div>
        </div>
    </>
  )
}
