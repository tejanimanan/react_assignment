import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Q2_Home from './Q2_Home'
import About from './About'
import Q2_Navbar from './Q2_Navbar'
import Q2_Contact from './Q2_Contact'

export default function Q2_RoutingBar() {
  return (
    <div>
        <h1>Q2_RoutingBar</h1>
        <BrowserRouter>
            <Q2_Navbar/>
            <Routes>
                <Route path='/' element={<Q2_Home></Q2_Home>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Q2_Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
