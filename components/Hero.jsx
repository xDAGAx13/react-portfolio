import { HERO_CONTENT } from "@/constants";
import React from "react";
import ProfilePic from "../public/rohan.jpeg";
import {motion} from 'motion/react'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              animate={{ x: 100 }}
              className="pb-12 text-4xl font-mono tracking-tight lg:mt-16 lg:text-5xl"
            >
              Rohan Daga
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Easing Life through Tech
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img
              src="/rohan.jpeg"
              className="rounded-2xl size-90 shadow-lg"
              alt="Rohan Daga"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
