import React from 'react'
import './navbar.css'
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className='Nav'>
        <div className='text'>
        <h5><Link to ="/">Home</Link></h5>
        </div>
        <div className='text'>
          <h5><a href="Gallery">Gallery</a></h5>
        </div>
        <div className='text'>
        <h5><a href="Event">Event</a></h5>
        </div>
        <div className='text'>
           <h5><a href="Feedback">Feedback</a></h5>
        </div>
        <div className='text'>
           <h5><a href="Contact">Contact </a></h5>
        </div>
      </div>  
      <div>

      </div>
      
      <Outlet/>
    </>
    
  )
}
