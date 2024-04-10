
import React, {useEffect} from "react";
import Link from "next/link";

import { RevealComponent } from "../ui/RevealComponent";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

import { fadeTopBottom } from "@/lib/animation";

export const ContactIntro = () => {

  
  return (
    <div>
      <div>
        <span>Contact Us</span>
        <h2>I`d love to tell your story.</h2>
      </div>
      <div className="w-full">
        <p>We are excited to go wherever your love story is taking me and looking forward to hearing from you!</p>
        <div>
             <ul className="mx-auto w-[80%] ">
                <li className="py-2 border-b-2 border-roze flex justify-between items-center"><span className=" uppercase">Phone:</span><span className="font-pariss text-lg text-right w-[80%] leading-9">(312) 912-5004</span></li>
                <li className="py-2 border-b-2 border-roze flex justify-between items-center"><span className=" uppercase">Email:</span><span className="font-pariss text-lg text-right w-[80%] leading-9">RedBarnBride@yahoo.com</span></li> 
                 
              </ul>
        </div>
        <p className="pt-14 text-center">Please fill out the form or setup an appoiment directly with us...</p>
        <div className="text-center py-6">
          <Button href="https://redbarnweddingstudio.setmore.com">Book An Appoiment</Button>
        </div>
      </div>
      <div className="w-full px-4 md:w-[38%] flex flex-col gap-y-6"></div>
      <div className="mt-10">
        <h2>Follow US on: </h2>
        <div className="flex items-center justify-start gap-x-2 cursor-pointer">
        <RevealComponent index={1} variants={fadeTopBottom}>
            <Link href="https://www.facebook.com/RedBarnWeddingStudio"><Icon icon="facebook" className="text-roze w-12 h-12"/></Link>
        </RevealComponent>
        <RevealComponent index={2} variants={fadeTopBottom}>
            <Link href="https://www.instagram.com/redbarnweddingstudio/"><Icon icon="instagram" className="text-roze  w-12 h-12"/></Link>
          </RevealComponent>
          <RevealComponent index={3} variants={fadeTopBottom}>
            <Link href="https://vimeo.com/user81106458"><Icon icon="vimeo" className="text-roze  w-12 h-12"/></Link>
          </RevealComponent>
          <RevealComponent index={4} variants={fadeTopBottom}>
            <Link href="https://www.youtube.com/channel/UCnTzNTKip1rjTTzd5vqO5HA"><Icon icon="youtube" className="text-roze  w-12 h-12"/></Link>
          </RevealComponent>
        </div>
      </div>
    </div>
  );
};
