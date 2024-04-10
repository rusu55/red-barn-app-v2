'use client';
import { useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";


export const RevealComponent = ({index, variants, children}: any) => {
    const { ref, inView } = useInView();   

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [inView, controls]);

  return (
    <div ref={ref} style={{position:"relative",overflow: "hidden"}}>
        <motion.div
            variants={variants}
            initial= "hidden"
            animate={controls}
            transition={{duration:0.5, delay: 0.2 * index, }}
            viewport={{once: true}}
        >
            {children}
        </motion.div>
    </div>
  )
}
