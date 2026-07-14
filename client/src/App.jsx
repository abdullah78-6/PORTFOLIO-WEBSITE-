import React from 'react'
import { control } from './store/slice'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
const App = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.main.counter);
  const themecolors={
      backgroundcolor:"#211832",

      navbarcolor1:"#090040",


      navbarcolor2:"#432E54",


    backgroundcolor2:"#3C0753"
 }

  return (
    <div style={{backgroundColor:themecolors.backgroundcolor2}}>
      {/* <h1 className='bg-purple-600 p-4 text-center text-gray-400 text-3xl '>client</h1> */}
      <h1 className='text-6xl text-white'>{counter}</h1>
      <button onClick={()=>dispatch(control.setcounter())} className='bg-white p-9'>REDUX TESTING </button>
    </div>
  )
}

export default App

