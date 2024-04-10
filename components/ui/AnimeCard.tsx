import Image from "next/image";
import img1 from "/public/images/a.jpg";
import { MotionDiv } from "./MotionDiv";
import React from "react";

export interface AnimeProp {
    id: string;
    name: string;
    image: {
      original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
  }
interface Prop {
    anime: AnimeProp;
    index: number;
  }

 // const variants = {
   // hidden: { opacity: 0, y: 250 },
   // visible: { opacity: 1, y: 0 },
 // };
  
export const AnimeCard = ({index, variants, children}: any) => {
  return (
    
    <MotionDiv
    variants={variants}              
    initial="hidden"
    whileInView= "visible"
              
    transition = {{     
      delay: 0.1 * index,         
      ease: [0.17, 0.67, 0.83, 0.67],      
    }}
    viewport={{once: true}}
    >
        {children}
    </MotionDiv>
  )
}
