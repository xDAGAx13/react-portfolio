'use client'
import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' mb-10 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='pl-5 text-xl font-semibold cursor-pointer hover:text-gray-300 transition-all text-gray-400' >Rohan</h1>        
      </div>
      <div className='transition-all pr-7 flex flex-row gap-2 text-2xl'>
        <a href='https://www.linkedin.com/in/rohan-daga-70a156167/' target='_blank'><FaLinkedin className='text-gray-400 hover:text-gray-300 transition-all cursor-pointer'/></a>
        <a href='https://github.com/xDAGAx13' target='_blank'><FaGithub className='text-gray-400 hover:text-gray-300 transition-all cursor-pointer'/></a>
        <a href='https://www.instagram.com/rohan_daga_13/?hl=en' target='_blank'><FaInstagram className='text-gray-400 hover:text-gray-300 transition-all cursor-pointer'/></a>
      </div>
    </nav>
  )
}

export default Navbar