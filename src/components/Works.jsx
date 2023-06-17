import React from 'react'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from './HOC/SectionWrapper'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { projects } from './projects'
import { Tilt } from 'react-tilt'
import github from "./images/github.png"




const Works = () => {

  const ProjectCard = (props) => {
    return (
       <motion.div variants={fadeIn("up","spring",0.75*props.index,0.75)} >
            <Tilt options={{max:45,scale:1,speed:450}} className="bg-tertiary p-5 rounded-xl w-[270px] sm:w-[290px] md:w-[340px]  select-none ">

                <div className='relative w-full h-[170px] sm:h-[200px] '>
                   <img src={props.project.image} alt={props.project.title} className='w-full h-full object-cover rounded-2xl'></img>
                   <div className='absolute m-1 top-0 right-0 w-8 h-8 rounded-[100%] flex justify-center items-center black-gradient cursor-pointer' onClick={()=>window.open(props.project.repo_url,"_blank")}>
                          <img src={github} alt="github" className='h-5 w-5'></img>
                   </div>
                </div>

                <div className=' mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{props.project.title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{props.project.description}</p>
                </div>

                <div className='flex flex-wrap gap-4 mt-4 select-none'>
                    {
                       props.project.technologies.map((tech,index)=>(
                           <p className='text-[14px] text-gray-500' >{tech}</p>
                       ))
                    }
                </div>

            </Tilt>
       </motion.div>
    )
  }
  return (
    <div className='w-full py-5' id="works">
      <div className='max-w-[1250px] px-8 sm:px-16 mx-auto my-[40px]'>

        <motion.div variants={textVariant()} className='max-w-[1250px] mx-auto '>
        <p className={styles.sectionSubText} >
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>Project</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className='max-w-3xl text-[14px] sm:text-[17px] text-secondary leading-[30px] mt-4'>
        Following Projects showcases my skills and experience through real-worls examples of my work. Each project is breifly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
       <div className='flex flex-wrap justify-center gap-y-6 px-6 sm:px-0 sm:justify-between my-8'>
          {
            projects.map((project,index)=>(
                <ProjectCard key={index} project={project}></ProjectCard>
            ))
          }
       </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Works,"works")