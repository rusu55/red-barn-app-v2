"use client";
import { useState } from "react";
import Image from "next/image";
import { HomeCarousel } from "@/components/carousel/HomeCarousel";
import dynamic from "next/dynamic";
import { ParalaxComponent } from "@/components/highlights/Paralax";
import { Card } from "@/components/highlights/Card";
import { HomeIcons } from "@/components/home/HomeIcons";
import { RevealComponent } from "@/components/ui/RevealComponent";
import { fadeBottomTop } from "@/lib/animation";
const BridalForm = dynamic(() => import("@/app/(utils)/bridal/components/bridal-form"), {
  ssr: false,
});
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import img1 from '/public/images/owners.jpg'
import { workflowSteps } from "@/lib/setps";


const HighlightsPage = () => {  
    const [loading, isLoading] = useState(false);
    const [send, setSend] = useState(false)
    const router = useRouter();

    const onSubmit = (values: any) => {
        isLoading(true);
        axios
        .post("/api/bridal", values)
        .then((response) => {
          toast.success("Form was successful sent!");
        })
        .catch((error) => {
          console.log("Questionaire was not sent!");
        })
        .finally(() => {
          isLoading(false);
          setSend(true);
          router.push("/");
        });
    }
  return (
    <div className="pt-20 md:pt-0">
      <HomeCarousel />
      {/* Intro Section */}
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center px-2 md:px-6 py-10">
            <div className="w-full md:w-1/2 px-4">
                <span className="uppercase text-md tracking-widest text-roze">Red Barn wedding Studio</span>
                <h2 className="text-3xl">CREATING TIMELESS ART FOR OUR COUPLES</h2>
                <hr className="line line-hr-left" />
                <p>
                Whether it’s an intimate wedding at home or a grand celebration… you deserve a photographer who can truly capture the essence of your love story. Someone who not only understands the quiet, emotional moments—like a bride’s final thoughts before walking down the aisle—but also knows how to bring out the groom’s genuine smile, as if they’ve been friends for years. You need someone who can freeze every fleeting, magical moment of your wedding day, preserving it like a treasure you can hold onto forever.
                </p>
                <p>
                From the moment we connect until your photos and videos are in your hands, our aim is to make the entire process smooth and stress-free. We’ll be by your side every step of the way, capturing your unique story with authenticity and artistry. The result? A beautiful, heartfelt collection of images that tell your story and preserve memories you’ll hold close forever.
                </p>
            </div>
             {/* Image Grid */}
            <div className="w-full md:w-1/2 px-4 mt-20">
                <Image className="object-cover rounded-lg md:h-[400px] duration-500 ease-in-out hover:scale-95" src={img1} alt="" />
            </div>
      </div>
      <section className="bg-neutral-100/75">
        <div className="mx-auto max-w-screen-xl py-20">
            <div className="flex flex-col items-center">
                    <h2 className="pwe-heading text-center md:text-left text-3xl">Your Journey Starts Now—Unforgettable Wedding Memories Await.</h2>
                    <hr className="line line-hr-center" />
            </div>
            <div className="flex flex-col gap-y-6 md:flex-row md:items-stretch md:flex-wrap md:justify-center md:max-w-screen-xl md:mx-auto md:gap-8 pt-8">
                {workflowSteps.map((steps, index)=>(
                    <RevealComponent key={index} index={index} variants={fadeBottomTop}>
                        <Card data={steps}/>
                    </RevealComponent>
                ))}
                
                
            </div>
        </div>
      </section>   
      <ParalaxComponent />
      
      {send === false ? (
        <RevealComponent index={1} variants={fadeBottomTop}>
        <BridalForm onSubmit={onSubmit} disabled={loading} source='advertize'/>
        </RevealComponent>
         ) : ("")       
        }
      <HomeIcons />
    </div>
  )
}

export default HighlightsPage