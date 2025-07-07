'use client'
import { HERO_CONTENT } from "@/constants";
import React from "react";
import {motion} from 'motion/react'

const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
              className="pb-12 text-4xl font-mono tracking-tight lg:mt-16 lg:text-5xl"
            >
              Rohan Daga
            </motion.h1>
            <motion.span
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Easing Life through Tech
            </motion.span>
            <motion.p 
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1}}
              src="/rohan.jpeg"
              className="rounded-2xl size-80 shadow-lg"
              alt="Rohan Daga"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
