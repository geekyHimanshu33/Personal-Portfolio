import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'

export const SectionWrapper = (Component,idComp) => 
function HOC(){
     return(
         <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true,amount:0.30}} >
           <Component/>
         </motion.div>
     )
}