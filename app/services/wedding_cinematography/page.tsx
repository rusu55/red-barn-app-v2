"use client";
import { Hero } from "@/components/ui/Hero";

import Img from '/public/images/photography-hero.jpg';
import { ServiceIntro } from "@/components/services/ServiceIntro";
import {ServiceIntroData} from '@/lib/services';
import { AdditionalServices } from "@/components/services/AdditionalServices";
import { VideoItem } from "@/components/portfolio/VideoItem";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import { Icon } from "@/components/ui/Icon";

import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";


import { videoItems, weddingVideography } from "@/lib/services";



const CinematographyPage = () => {
  return (
    <div className="pt-20 md:pt-0">
        <Hero image={Img} title="Best Wedding Videography in Chicago" description={""} />
        <div className="mx-auto max-w-screen-xl mt-16 px-6">
            <ServiceIntro data={ServiceIntroData[1]} />
        </div>
        <div className="bg-neutral-100/75 mt-10">
            <div className='mx-auto max-w-screen-xl py-10 flex flex-col md:flex-row gap-x-4'>
                <div className='w-full md:w-[50%]'>
                <div className="px-4">
                        <h5 className="text-xl mt-5">{weddingVideography.title}</h5>
                        <hr className="line-hr-left" />
                        <p className=" whitespace-pre-line">{weddingVideography.highlights}</p>
                        <ul className="pb-8">
                            {weddingVideography.details.map((detail: string, index: number) =>(
                                    <li  key={index} className="flex items-center gap-1"><Icon icon="check" stroke={1} className="text-roze" />{detail}</li>
                            ))}                       
                        </ul>
                    </div>      
                </div>
                
                    <LightGallery 
                        elementClassNames='w-full md:w-[50%] grid gap-y-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 2xl:gap-5 px-4'
                        plugins={[lgVideo, lgZoom]}
                        download={false}
                        >
                        {videoItems?.map((video: any, index: number) =>(
                            
                                <VideoItem key={index} data={video}/> 
                            
                        ))}                                   
                    </LightGallery>   
              
            </div>
        </div>
        <div className="mx-auto max-w-screen-xl my-16 px-4">
             <RevealComponent index={2} variants={fadeBottomTop}>
                <AdditionalServices /> 
            </RevealComponent>  
        </div>           
    </div>
  )
}

export default CinematographyPage