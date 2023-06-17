import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export const ServiceCard = (props) => {
  return (
    <Tilt >

      <motion.div variants={fadeIn("down","spring",0.5*props.service.index,0.75)} className='w-[280px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div options={{max:45,scale:1,speed:450}}z
        className='bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] justify-evenly items-center flex flex-col'>
           
           <img src={props.service.icon} alt={props.service.title} className='w-20 h-20'></img>
           <p className='text-white text-[20px] font-bold text-center'>{props.service.title}</p>

        </div>
        
      </motion.div>
        
    </Tilt>
  )
}
 