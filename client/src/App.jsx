import React from 'react'
import { control } from './store/slice'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import Contact from './pages/Contact'
import Footer from './components/Footer'
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
      <Contact url={serverurl}/>
      <Footer />
      
    </div>
  )
}

export default App

