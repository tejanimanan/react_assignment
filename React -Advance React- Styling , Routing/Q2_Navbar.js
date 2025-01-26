import React from 'react'
import { Link } from 'react-router-dom'

export default function Q2_Navbar() {
  return (
    <div>
        <nav className='bg-dark'>
            <Link className='btn btn-warning mx-3 my-4' to="/"> Home</Link>
            <Link className='btn btn-warning mx-3 my-4' to="/about"> About</Link>
            <Link className='btn btn-warning mx-3 my-4' to="/contact"> contactus</Link>
        </nav>
    </div>
  )
}
