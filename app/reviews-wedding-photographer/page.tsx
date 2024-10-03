import type { Metadata } from "next";
import Image from "next/image";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
import { Hero } from "@/components/ui/Hero";

import { HomeIcons } from "@/components/home/HomeIcons";

import aboutImage from "/public/images/about-hero.jpg";
import img1 from '/public/images/reviews/any1.webp'
import img2 from '/public/images/reviews/any2.webp'
import img3 from '/public/images/reviews/any3.webp'
 import img4 from '/public/images/reviews/grace1.webp'
 import img5 from '/public/images/reviews/grace2.webp'
 import img6 from '/public/images/reviews/klaudia1.webp'
 import img7 from '/public/images/reviews/klaudia2.webp'
 import img8 from '/public/images/reviews/klaudia3.webp'

export const metadata: Metadata = {
  title: "Nice Words about our Wedding Photography",
  description: "Voted the Best Wedding Photographers in Chicago. With over 10 years of experience, we understand that your wedding is a celebration for two of you and the people coming together."
}

const ReviewsPage = () => {
  return (
    <div className="pt-20 md:pt-0">
      <Hero image={aboutImage} title="Wedding Photographers Reviews" description={""} />
      <div className="mt-20 max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6">
        <div className="w-full" >
            <span className="uppercase text-md tracking-widest  text-roze">Nice Words About</span>
            <h1 className="leading-snug text-4xl">Our Red Barn Team</h1>
            <hr className='line line-hr-left'></hr>      
        </div>
        <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-2/5 px-4">
              <p>
              We worked with Bogdan for both our engagement photo shoot and our wedding day, and we couldn&apos;t be happier with the results. The quality and quantity of the photos exceeded our expectations. From the very beginning, Redbarn was flexible and willing to create a customized package that suited our needs perfectly. 
              </p>
              <p>Our engagement photo session at Lincoln Park with Bogdan was an absolute delight. He made us feel comfortable and guided us effortlessly.
              </p>
              <p>
               On our wedding day, Bogdan&apos;s expertise and professionalism shone through as he directed us seamlessly, capturing every special moment of us and the guests. 
              Redbarn&apos;s dedication to providing exceptional service and their attention to detail truly set them apart. We had the best time working with Bogdan and the Redbarn team.
              </p>
              <p className="font-normal font-pariss text-roze text-xl text-center md:text-right">Annie K</p>
            </div>
            <div className="w-full lg:w-3/5 px-4">
            <div className='w-full'>
                    <div className='grid grid-rows-2 grid-flow-col gap-2 items-center'>
                      <div className="row-span-2">
                        <Image className='object-cover rounded-lg h-[508px] duration-500 ease-in-out hover:scale-95'  src={img1} alt=""  /> 
                      </div>
                      <div>
                        <Image className='object-cover rounded-lg h-[255px] duration-500 ease-in-out hover:scale-95'  src={img2} alt=""  /> 
                      </div>
                      <div>
                        <Image className='object-cover rounded-lg h-[255px] duration-500 ease-in-out hover:scale-95'  src={img3} alt=""  /> 
                      </div>                       
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="w-full mt-10 bg-neutral-100/75 py-10 md:py-20">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6">
            <RevealComponent index={0} variants={fadeBottomTop}>
            <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-3/5 px-4">
                <div className='w-full'>
                        <div className='grid grid-rows-2 grid-flow-col gap-2 items-center'>
                          <div className="row-span-2">
                            <Image className='object-cover rounded-lg h-[508px] duration-500 ease-in-out hover:scale-95'  src={img4} alt=""  /> 
                          </div>
                          <div className="row-span-2">
                            <Image className='object-cover rounded-lg h-[508px] duration-500 ease-in-out hover:scale-95'  src={img5} alt=""  /> 
                          </div>                    
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 px-4">
                  <p>
                  All I can say is WOW! We had Elena and Bogdan as our photographers, as well as a videographer. They were so professional, and worked their butts off to get amazing shots from beginning to end. 
                  </p>
                  <p>
                    We had a huge wedding and despite the crowd they still managed to get phenomenal shots! My husband hates taking photos, but they made it easy, and put up with our busy day and giant wedding party with ease.
                  </p>
                  <p>
                    I really love the photos, they mean so much to me as these photos will last a life time of one of our most important days. I will be recommending them to my family and friends in the future!
                  </p>
                  <p className="font-normal font-pariss text-roze text-xl text-center md:text-right">Grace N</p>
                </div>            
            </div>
            </RevealComponent>
            </div>
        </div>

         <div className="mt-20 max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6">
         <RevealComponent index={1} variants={fadeBottomTop}>
         <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-2/5 px-4">
            <p>
              From the start, the team at Red Barn Studio has been so helpful. They were transparent with their prices and were willing to answer all our questions. Bogdan and Elena were a pleasure to work with throughout our wedding planning process and during our wedding day.
            </p>
            <p>  
               Their communication was excellent and the service provided the day of the wedding was stellar. Our wedding went so smoothly because of Bogdan and his team! They guided us throughout our day and made sure we were always on time. 
             </p>
             <p>  
               Our pictures turned out even better than we expected. I recommend Red Barn Studio for your wedding photography needs!
              </p>
              <p className="font-normal font-pariss text-roze text-xl text-center md:text-right">Klaudia K</p>
            </div>
            <div className="w-full lg:w-3/5 px-4">
            <div className='w-full'>
                    <div className='grid grid-rows-2 grid-flow-col gap-2 items-center'>                      
                      <div>
                        <Image className='object-cover rounded-lg h-[255px] duration-500 ease-in-out hover:scale-95'  src={img7} alt=""  /> 
                      </div>
                      <div>
                        <Image className='object-cover rounded-lg h-[255px] duration-500 ease-in-out hover:scale-95'  src={img8} alt=""  /> 
                      </div> 
                      <div className="row-span-2">
                        <Image className='object-cover rounded-lg h-[508px] duration-500 ease-in-out hover:scale-95'  src={img6} alt=""  /> 
                      </div>                      
                    </div>
                </div>
            </div>
        </div>
        </RevealComponent>
         </div> 
      <HomeIcons />
    </div>
  );
}

export default ReviewsPage