import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
export default function Q1_Route() {
    return (
        <div>
            <h1>Q1_Route</h1>
            <p>Set up a basic React Router with two routes: one for a Home page and one for
                anAbout page. Display the appropriate content based on the URL</p>
            <BrowserRouter>
            <Link className='btn btn-warning mx-2 my-4' to={'/'}>Home</Link>
            <Link className='btn btn-warning mx-2 my-4 ' to={'/about'}>About</Link>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}
