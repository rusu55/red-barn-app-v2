'use client';
import { useEffect, useRef } from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
}
export const RevealComponent = ({children, width="fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(()=>{
       
        mainControls.start("visible")
    },[isInView, mainControls])

  return (
    <div ref={ref} style={{position:"relative" , width, overflow: "hidden"}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75 },
                visible: {opacity: 1, y: 0}
            }}
            initial= "hidden"
            animate={mainControls}
            transition={{duration:0.5, delay:0.25}}
        >
            {children}
        </motion.div>
    </div>
  )
}
