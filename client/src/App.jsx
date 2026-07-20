import React from 'react'
import { control } from './store/slice'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero-section'
import OurWork from './pages/Ourwork'
import About from './pages/About'
const App = () => {
  const dispatch=useDispatch();
  const serverurl="http://localhost:9000"
const themecolors={
      backgroundcolor:"#211832",

      navbarcolor1:"#090040",


      navbarcolor2:"#432E54",


    backgroundcolor2:"#3C0753"
 }

  return (
    <div>
      <Navbar/>
      <Hero url={serverurl}/>
      <OurWork/>
      <About/>
      <Contact url={serverurl}/>
      <Footer />
      
    </div>
  )
}

export default App

