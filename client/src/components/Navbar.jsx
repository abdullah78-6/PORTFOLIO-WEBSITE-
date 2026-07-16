import React from 'react'
import { control } from '../store/slice'
import {useSelector,useDispatch} from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const dispatch=useDispatch();
    const navbarclass=useSelector(state=>state.main.navbarclass);
    const mobilemenu=useSelector(state=>state.main.mobilemenu);
  return (
    <div className='font-semibold flex justify-between p-5 backdrop-blur-xl bg-[#0d1117]/60'>
        <div>
            <h1 onClick={()=>dispatch(control.setnavbarclass(""))} className='text-3xl uppercase text-[#5DF8D8] cursor-pointer'>abdullah<span className='text-[#D91656]'> qidwai</span></h1>
        </div>
        <ul className=' hidden lg:flex lg:justify-end lg:gap-5 lg:capitalize lg:text-xl lg:text-white      xl:flex xl:justify-end xl:gap-5 xl:capitalize xl:text-xl xl:text-white         md:flex md:justify-end md:gap-5 md:capitalize md:text-xl md:text-white'>
            <li onClick={()=>dispatch(control.setnavbarclass("one"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="one"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `}>about</li>
            <li onClick={()=>dispatch(control.setnavbarclass("two"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="two"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `} >education</li>
            <li onClick={()=>dispatch(control.setnavbarclass("three"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="three"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `} >skills</li>
            <li onClick={()=>dispatch(control.setnavbarclass("four"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="four"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `} >projects</li>
            <li onClick={()=>dispatch(control.setnavbarclass("five"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="five"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `} >achievements</li>
            <li onClick={()=>dispatch(control.setnavbarclass("six"))} className={`hover:text-pink-600 cursor-pointer transition ease-in-out duration-200 ${navbarclass==="six"&&"border-b-4 rounded-sm text-[#EF88AD] border-[#AD62AA] "} `} >contact</li>
            
        </ul>
        <div className='md:hidden lg:hidden xl:hidden '>
       {mobilemenu? <motion.button animate={{rotate:360 }} transition={{ duration:0.5}} onClick={()=>dispatch(control.setmobilemenu(false))} className='xl:hidden lg:hidden md:hidden text-4xl text-[#36ADA3] '><GiHamburgerMenu/></motion.button>:<motion.button transition={{ duration:0.5}}  onClick={()=>dispatch(control.setmobilemenu(true))} className='xl:hidden lg:hidden md:hidden text-4xl text-[#D91656] '><ImCross/></motion.button>}
        </div>
       {!mobilemenu&& <AnimatePresence>
  <motion.ul
    initial={{ opacity: 0, y: -30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -30, scale: 0.95 }}
    transition={{ duration: 0.35 }}
    className="
      lg:hidden md:hidden xl:hidden
      absolute top-20 left-4 right-4
      
      bg-[#5A9690]
      backdrop-blur-xl
      rounded-2xl
      border border-purple-500/30
      shadow-[0_0_35px_rgba(168,85,247,0.35)]
      overflow-hidden
      z-50
      p-2
    "
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        About
      </li>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.10 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        Education
      </li>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        Skills
      </li>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.20 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        Projects
      </li>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        Achievements
      </li>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.30 }}
    >
      <li onClick={()=>dispatch(control.setmobilemenu(true))} className="hover:text-pink-600 hover:bg-white/5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 hover:pl-6">
        Contact
      </li>
    </motion.div>
  </motion.ul>
</AnimatePresence>
}
        
      
    </div>
  )
}

export default Navbar     