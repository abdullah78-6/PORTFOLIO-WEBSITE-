import React, { useEffect } from 'react'
import { control } from './store/slice'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero-section'
import OurWork from './pages/Ourwork'
import About from './pages/About'
import Education from './pages/Education'
import Achivement from './pages/Achivement'
import axios from "axios"
import { useRef } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import Skills from './pages/Skills'
const App = () => {
  const dispatch=useDispatch();
  const serverurl="http://localhost:9000"
  const scroll=useSelector(state=>state.main.scroll);
  const sent=useRef(false);
const themecolors={
      backgroundcolor:"#211832",

      navbarcolor1:"#090040",


      navbarcolor2:"#432E54",


    backgroundcolor2:"#3C0753"
 }

 const Fetchviews=async()=>{
  try {
    const res=await axios.post(serverurl+"/api/monitor/addv",
      {},
    {
      withCredentials:true,
    }
    );
  } catch (error) {
    console.error('Error WEBSITE VIEW:', error.message);
  }

 }
 useEffect(()=>{
  if(sent.current) {
    return ;
  }
  sent.current=true;
  Fetchviews();
 },[]);
 useEffect(()=>{
  const handlescroll=()=>{
    dispatch(control.setscroll(window.scrollY));

  };
  window.addEventListener("scroll",handlescroll);
  return ()=>{
    window.removeEventListener("scroll",handlescroll);
  }
 },[dispatch]);




 return (
    <div>
    <Navbar/>
    <div className=' fixed bottom-8 right-8 z-50 bg-[#aa93d4] rounded-4xl hover:scale-125 transition-all '>
      {scroll>=1504?<h1 className='text-4xl p-1 font-semibold    text-[#0a5388] cursor-pointer '>{<FaArrowCircleUp />}</h1>:<></>}
      </div>
      <Hero url={serverurl}/>
      <OurWork/>
      <About/>
      <Education url={serverurl}/>
      <Skills url={serverurl}/>
      <Achivement url={serverurl}/>
      <Contact url={serverurl}/>
      <Footer />
      
    </div>
  )
}

export default App

