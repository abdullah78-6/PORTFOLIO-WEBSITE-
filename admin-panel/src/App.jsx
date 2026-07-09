import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { control } from './store/slice'
import Homepage from './components/Homepage'
import Uploadcontent from './pages/Uploadcontent'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Herosection from './pages/Herosection'
const App = () => {
  const backendurl = "http://localhost:9000"
  const backendemail = useSelector(state => state.main.backendemail)
  const dispatch = useDispatch();
 const checklogin = async () => {
    try {
      const res = await axios.get(backendurl + "/api/auth/pr", {
        withCredentials: true
      })

      if (res.data.status) {
        dispatch(control.setbackendemail(res.data.email))
      } else {
        dispatch(control.setbackendemail(""))
      }
    } catch (error) {
      dispatch(control.setbackendemail(""))
      console.log("check login app.jsx ",error);
    } 
  }

  useEffect(() => {
    checklogin()
  }, [])
return (
    <div>
      {backendemail&&<Navbar url={backendurl} />}
      <hr className={backendemail?"":"hidden"} />

      <div className={backendemail?"flex":"flex1"}>

        {backendemail && <Sidebar url={backendurl} />}

        <Routes>
          <Route
            path="/"
            element={backendemail ? <Dashboard url={backendurl} /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={!backendemail ? <Login url={backendurl} /> : <Navigate to="/" />}
          />

          <Route
            path="/upload"
            element={backendemail ? <Uploadcontent url={backendurl} /> : <Navigate to="/login" />}
          />

          <Route
            path="/skills"
            element={backendemail ? <Skills url={backendurl} /> : <Navigate to="/login" />}
          />

          <Route
            path="/projects"
            element={backendemail ? <Project url={backendurl} /> : <Navigate to="/login" />}
          />

          <Route
            path="/herosection"
            element={backendemail ? <Herosection url={backendurl} /> : <Navigate to="/login" />}
          />
        </Routes>

      </div>
    </div>
  )
}

export default App