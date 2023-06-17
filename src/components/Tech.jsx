import React from 'react'
import { SectionWrapper } from './HOC/SectionWrapper'
import css from "./images/css.png"
import node from "./images/nodejs.png"
import html from "./images/html.png"
import git from "./images/git.png"
import react from "./images/reactjs.png"
import redux from "./images/redux.png"
import javascript from "./images/javascript.png"
import mongo from "./images/mongodb.png"
import tailwind from "./images/tailwind.png"
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion' 

const Tech = () => {
  const Technologies = [
    {
      icon: css,
      title :"CSS-3"
    },
    {
      icon: html,
      title:"HTML-5"
    },
    {
      icon: javascript,
      title:"Javascript"
    },
    {
      icon: git,
      title : "Git"
    },
    {
      icon: react,
      title : "React.js"
    },
    {
      icon: mongo,
      title :"MongoDB"
    },
    {
      icon: node,
      title :"Node"
    },
    {
      icon: redux,
      title:"Redux"
    },
    {
      icon: tailwind,
      title:"Tailwind"
    }
  ]


  return (
    <div className='w-full py-7'>
      <div className='max-w-[1250px] mx-auto px-14'>

        <motion.h2 variants={fadeIn("", "", 0.1, 1)} className={styles.sectionHeadText}>Skills</motion.h2>

        <div className='flex flex-wrap gap-4 justify-center  items-center max-w-[1000px] mx-auto my-10 ' > 
             {
               Technologies.map((technology,index)=>(
                    <motion.div variants={fadeIn("down","spring",0.1*index,0.75)} >
                         
                        <img title={technology.title} src={technology.icon} alt={technology.title} className='h-[100px] w-[100px]  md:h-[130px] md:w-[130px] hover:scale-75 transition-all duration-200'></img>
                    </motion.div>
               ))
             }
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech,"tech")