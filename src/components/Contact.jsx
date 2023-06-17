import React from 'react'
import {useState,useRef} from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import {styles} from "../styles"
import { SectionWrapper } from './HOC/SectionWrapper'
import { slideIn } from '../utils/motion'
import { toast } from 'react-toastify';



//service id = service_3annrjw
//template id = template_boucdfj
//ATMkiopYEcJY98T0A

 
const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name :"",
    email:"",
    message:""
  })
  const [Loading,setLoading]=useState(false);

  const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true);

      emailjs.send("service_7hs5zg1","template_boucdfj",
         {
          from_name : form.name,
          to_name : "Himanshu",
          from_email : form.email,
          to_email : "himanshujangra33@gmail.com",
          message : form.message
         },
         "ATMkiopYEcJY98T0A"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank You! I will get back to you as soon as possible.")

        setForm({
          name:"",
          email:"",
          message:""
        })
      })
      .catch((err) => {
         setLoading(false)

         console.log(err);
         toast.error("Something went wrong!");
      })

  }

  const handleChange = (e) => {
    const {name,value} = e.target;

    setForm({...form, [name] : value})
}

  return (
    <div className='w-full py-16 px-8' id="contact">
       <motion.div variants={slideIn("down","spring",0.2,0.75)} className='max-w-[800px]   rounded-2xl mx-auto p-8   bg-black-100'>
        <p className={styles.sectionSubText} >
          Get in Touch 
        </p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

         <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
               <span className='text-white text-[14px]  font-medium mb-4 sm:text-[16px]'>Your Name</span>
               <input 
                 type='text'
                 name="name"
                 value={form.name}
                 onChange={handleChange}
                 placeholder="What's your name"
                 className='bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-[14px] sm:placeholder:text-[16px] text-white outline-none font-medium border-none rounded-lg'
               ></input>
            </label>

            <label className='flex flex-col'>
               <span className='text-white text-[14px] font-medium mb-4 sm:text-[16px]'>Your Email</span>
               <input 
                 type='email'
                 name="email"
                 value={form.email}
                 onChange={handleChange}
                 placeholder="What's your E-mail"
                 className='bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-[14px] sm:placeholder:text-[16px] text-white outline-none font-medium border-none rounded-lg'
               ></input>
            </label>

            <label className='flex flex-col'>
               <span className='text-white text-[14px] font-medium mb-4 sm:text-[16px]'>Message</span>
                <textarea 
                  row="20"
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write Your Message Here"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-[14px] sm:placeholder:text-[16px] text-white outline-none font-medium  border-none rounded-lg'
                ></textarea>
            </label>


            <button className='bg-tertiary py-3 px-8  outline-none w-fit text-white font-bold rounded-xl shadow-md'>
               {
                Loading ? "Sending.." : "Send"
               }
            </button>
         </form>
      </motion.div>

     
       
       

        
    </div>
  )
}

export default SectionWrapper(Contact,"contact")