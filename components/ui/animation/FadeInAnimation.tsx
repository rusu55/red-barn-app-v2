'use client';
import React from 'react';
import {motion, LazyMotion, domAnimation} from 'framer-motion'


const fadeInAnimation = {
    initial:{
        opacity: 0,
        y: 70,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

export const FadeInAnimation = ({children}: any) => {
  return (
    <LazyMotion features={domAnimation}>
        <motion.div
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                transition={{delay:0.25}}
        >
                {children}
        </motion.div>
    </LazyMotion>
  )
}

