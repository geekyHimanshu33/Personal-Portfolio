import React from 'react'
// import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { ServiceCard } from './ServiceCard'
import { fadeIn, textVariant } from "../utils/motion"
import backend from "./images/backend.png";
import web from "./images/web.png"
import problem from "./images/problem.png"
import { SectionWrapper } from './HOC/SectionWrapper'


const About = () => {

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: problem,
    },
    {
      title: "React Developer",
      icon: backend
    },
  ];



  return (
    <div className='max-w-[1250px] py-[100px] mx-auto px-6 overflow-hidden' id="about">
      <motion.div variants={textVariant()} className='max-w-[1250px] mx-auto '>
        <p className={styles.sectionSubText} >
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='max-w-3xl text-[14px] sm:text-[17px] text-secondary leading-[30px]'>
        A highly skilled and detail-oriented Software Developer  with a passion
        for crafting visually stunning and experience in Javascript, React.js ,
        Node.js to create user-friendly web applications.
        I continually seek opportunities to expand my skill set, With strong
        problem-solving abilities and a keen eye for detail. I am dedicated to delivering high-quality front-end solutions that exceed client expectations.
      </motion.p>


      <div className='flex flex-wrap gap-6 w-full justify-center sm:justify-between py-10'>
        {
          services.map((service,index) => (
              <ServiceCard key={service.title} index={index} service={service}/>
          ))

          
        }
      </div>
    </div>
  )
}

export default SectionWrapper(About,"about")