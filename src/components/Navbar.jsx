import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='max-w-[1080px] py-2 px-4 mx-auto flex justify-between items-center overflow-hidden'>

      {/* left Image */}
      <Link>

        <img src='https://seeklogo.com/images/A/adobe-portfolio-logo-BD502F658C-seeklogo.com.png' alt="" className='w-[50px] h-[50px]'></img>
      </Link>

      {/* Right-Button */}
      <div className='flex gap-x-[30px]'>
        <a href="#about" className='text-secondary font-medium cursor-pointer hover:text-white transition-all duration-150'>About</a>
        <a href="#works" className='text-secondary font-medium cursor-pointer hover:text-white transition-all duration-150'>Works</a>
        <a href="#contact" className='text-secondary font-medium cursor-pointer hover:text-white transition-all duration-150'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar