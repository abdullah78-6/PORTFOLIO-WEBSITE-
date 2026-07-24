import React from 'react'
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
import {toast} from "react-hot-toast"
import axios from "axios"
import { MdOutlineMessage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub, IoMdDownload } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
const Contact = ({url}) => {
    const dispatch=useDispatch();
    const Contactdetails=useSelector(state=>state.main.Contactdetails);
    const onchangehandler=(e)=>{

        dispatch(control.setContactdetails({
            name:e.target.name,
            value:e.target.value
        }))

    }
    const Submitform=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post(url+"/api/client/add_contact",Contactdetails,{
                                withCredentials:true
                
                
            })
            if(res.data.status){
                toast.success(res.data.message);
            }
            else{
                toast.error(res.data.message);
            }
            
        } catch (error) {
            console.log(error.message);
            
        }

    }
  return (
    <section className="px-4 md:px-8 mt-6 font-semibold ">
   <div className="max-w-6xl max-lg:max-w-2xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16 ">
         <h2 className="text-3xl font-bold text-slate-200 mb-6 md:text-4xl ">
            Contact us
         </h2>
         <p className="text-base leading-relaxed text-slate-200 ">
            Have a question, need support, or want to discuss your next project? We’re here to help.
         </p>
      </div>

      <div onSubmit={Submitform} className="grid lg:grid-cols-2 items-start gap-12">
         <form className="space-y-6 border-2 p-6 border-gray-500 rounded-xl">
            <div>
               <label htmlFor="name"
                  className="mb-2 text-slate-200 font-medium text-sm inline-block">Name</label>
               <input onChange={onchangehandler} name="name" value={Contactdetails.name} type="text" id="name" name="name" placeholder="John doe" required
                  className="px-3 py-2.5 text-sm text-slate-200 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600  dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            <div>
               <label htmlFor="email"
                  className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
               <input onChange={onchangehandler} name="email" value={Contactdetails.email} type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
            </div>
            
            
            <div>
               <label htmlFor="message"
                  className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
               <textarea onChange={onchangehandler} name="message" value={Contactdetails.message} placeholder="Write message" rows="6" type="text" id="message" name="message" required
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
            </div>

            <button type="submit"
               className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Send
               message</button>
         </form>

         <div className="grid gap-6 sm:grid-cols-2 sm:gap-12 max-lg:-order-1">
            <div className="flex  gap-4 flex-col">
               <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600 dark:fill-slate-400"
                     viewBox="0 0 32 32">
                     <path
                        d="M26.69 7.8c-1.97-4.13-6.03-6.74-10.6-6.8C11.51.94 7.45 3.46 5.41 7.6c-2.12 4.29-1.62 9.26 1.32 12.99l7.59 9.64a2.024 2.024 0 0 0 3.18 0l7.79-9.9c2.83-3.6 3.36-8.39 1.4-12.52zm-2.96 11.29-7.83 9.9-7.59-9.64c-2.45-3.11-2.87-7.28-1.1-10.86 1.7-3.44 4.95-5.48 8.71-5.48h.15c3.86.06 7.16 2.17 8.82 5.66s1.23 7.38-1.16 10.42"
                        data-original="#000000" />
                     <path
                        d="M15.91 7.16c-3.01 0-5.46 2.45-5.46 5.46s2.45 5.46 5.46 5.46 5.46-2.45 5.46-5.46-2.45-5.46-5.46-5.46m0 8.91a3.461 3.461 0 0 1 0-6.92 3.461 3.461 0 0 1 0 6.92"
                        data-original="#000000" />
                  </svg>
               </div>
               <div>
                  <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Location</h3>
                  <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">Lucknow, Uttar Pradesh</p>
               </div>
            </div>

            <div className="flex items-start gap-4 flex-col ">
               <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600 dark:fill-slate-400"
                     viewBox="0 0 32 32">
                     <path
                        d="M22.56 30a5.2 5.2 0 0 1-2-.41A34.53 34.53 0 0 1 2.4 11.42a5 5 0 0 1 1.06-5.51l3-3a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-1.63 1.65a12.54 12.54 0 0 0 7.07 7.07l1.68-1.67a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-3 3a5 5 0 0 1-3.56 1.5M8.62 4a1 1 0 0 0-.71.29l-3 3a3 3 0 0 0-.64 3.31 32.47 32.47 0 0 0 17.1 17.16 3 3 0 0 0 3.31-.64l3-3a1 1 0 0 0 0-1.42l-3.54-3.53a1 1 0 0 0-1.41 0l-2.12 2.12a1 1 0 0 1-1 .24 14.42 14.42 0 0 1-9.12-9.12 1 1 0 0 1 .24-1l2.12-2.12a1 1 0 0 0 .29-.71 1 1 0 0 0-.29-.7L9.33 4.29A1 1 0 0 0 8.62 4"
                        data-original="#000000" />
                  </svg>
               </div>
               <div>
                  <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Call us</h3>
                  <p className="text-sm text-slate-600 mt-1 dark:text-slate-400"> +91-9956337354</p>
               </div>
            </div>

            <div className="flex items-start gap-4 flex-col justify-center">
               <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600 dark:fill-slate-400"
                     viewBox="0 0 24 24" aria-hidden="true">
                     <path 
                        d="M.41 4.747A4.35 4.35 0 0 1 4.76.4h14.488a4.35 4.35 0 0 1 4.35 4.352l-.007 10.109a4.35 4.35 0 0 1-4.35 4.346H13.52a.3.3 0 0 0-.188.07l-4.548 3.84c-1.319 1.113-3.338.176-3.338-1.552v-2.068a.29.29 0 0 0-.29-.29h-.403a4.35 4.35 0 0 1-4.35-4.352zM4.76 2.14a2.61 2.61 0 0 0-2.61 2.608l-.008 10.108a2.61 2.61 0 0 0 2.61 2.611h.403c1.12 0 2.03.91 2.03 2.03v2.068a.29.29 0 0 0 .475.22l4.548-3.839a2.03 2.03 0 0 1 1.31-.479h5.723a2.61 2.61 0 0 0 2.61-2.608l.007-10.108a2.61 2.61 0 0 0-2.61-2.61zm2.128 5.29a.87.87 0 0 1 .87-.87h8.485a.87.87 0 0 1 0 1.74H7.757a.87.87 0 0 1-.87-.87zm0 4.744a.87.87 0 0 1 .87-.87h4.781a.87.87 0 0 1 0 1.74H7.758a.87.87 0 0 1-.87-.87"
                       data-original="#000000" />
                  </svg>
               </div>
               <div className='flex flex-col'>
                  <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">Chat to us</h3>
                  <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">abdullahqidwai92@gmail.com</p>
               </div>
               <div className="flex justify-center items-center gap-6 text-6xl text-cyan-500 w-full mt-2 flex-wrap">
      
                <a
                  href="#"
                  className="hover:text-[#D91656] duration-300 hover:scale-110"
                >
                  <IoLogoGithub />
                </a>
      
                <a
                  href="#"
                  className="hover:text-[#D91656] duration-300 hover:scale-110"
                >
                  <SiLeetcode />
                </a>
      
                <a
                  href="#"
                  className="hover:scale-110 duration-300"
                >
                <i className="devicon-linkedin-plain hover:text-[#D91656]"></i>
                </a>
      
                <a
                  href="#"
                  className="hover:text-[#D91656] duration-300 hover:scale-110"
                >
                  <GrInstagram />
                </a>
                
              
                
      
              </div>

               
            </div>
            
            
         </div>
      </div>
   </div>
</section>
  )
}

export default Contact