import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';
// import { render } from 'react-dom'
import "./Hero.css";
import Tilt from 'react-parallax-tilt';

import blob from "./images/blob.svg"


import {styles} from "../styles"
 


const Hero = () => {


 



  return (

    <div className='relative mb-[-150px] px-6'>
      <div className='max-w-[1000px] h-screen px-[40px] mx-auto flex justify-between  mt-24'>

        {/* left-content */}
        <div className='flex flex-row items-start mt-28 select-none'>

          <div className='relative flex flex-col items-center'>
            <div className='w-4 h-4 bg-[hsl(250,69%,61%)] rounded-full absolute'></div>
            <div className='w-1 h-[200px]  violet-gradient  '></div>

          </div>

          <div className='mx-6'>
            <h1 className={`${styles.heroHeadText}  text-white `}>Hi, I am <span className='text-[hsl(250,69%,61%)] '>Himanshu</span></h1>
            <h3 className={`font-black hidden sm:flex text-[1.5rem] mt-[4px] sm:text-[2.1rem] sm:mt-[-10px]  text-white `}>I am a
              <Typed
                strings={[
                  " Full Stack Developer.",
                  " Web Developer.",
                  " Problem Solver.",
                  " Backend Developer.",
                  " Coder.",]}
                typeSpeed={40}
                backSpeed={50}
                attr=""
                loop 
                
                >
                <span className='ml-[7px] text-gray-500'></span>
              </Typed>
            </h3>

          </div>
        </div>


        {/* right-content */}

        <Tilt className=' hidden relative lg:flex justify-center items-center mr-[-90px] w-[370px] h-[370px]'>

          

            <img className="z-[1] right-[10px] " src={blob} alt=""></img>
            <img src="https://thepranaygupta.github.io/assets/img/icon.png" className='absolute h-[280px] w-[280px] z-[10]' alt=""></img>
         

        </Tilt>







      </div>


      <div className='hidden absolute w-full lg:flex justify-center bottom-60  items-center'>

        <a href="#about">

          <div className='w-[30px] h-[60px] rounded-3xl  border-[4px] p-2 flex justify-center  border-solid border-secondary'>
            <motion.div
              animate={
                {
                  y: [0, 24, 0]
                }
              }
              transition={
                {
                  duration: 1.5,
                  repeat: Infinity,


                }
              }
              className="bg-secondary w-5 h-3 rounded-full"
            />


          </div>

        </a>

      </div>
    </div>

  )
}

export default Hero;