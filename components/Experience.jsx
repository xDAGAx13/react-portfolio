"use client"
import { EXPERIENCES } from '@/constants'
import React from 'react'
import {motion} from 'motion/react'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      initial={{y:-70, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Experiences</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index)=>(
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
            <motion.div 
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div 
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.5}}
            className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
            <p className='mb-4 text-neutral-400'>{experience.description}</p>
            {experience.technologies.map((tech, index)=>(
              <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-800' key={index}>{tech}</span>
            ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience