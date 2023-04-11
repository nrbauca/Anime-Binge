import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <header>
          <nav className="absolute z-50 flex -space-x-[-505px] text-white pl-20 pt-16">
            <Link className="text-2xl font-['Outfit'] font-semibold" to="/home">AnimeBinge</Link>
            <div className="flex gap-16 items-center">
              <Link to="/home"><button className="text-base">Home</button></Link>
              <Link to="/discover"><button className="text-base">Discover</button></Link>
              <Link to="/aboutus"><button className="text-base">About Us</button></Link>
              <div className="flex gap-5 items-center">
                <Link to="/signup"><button className="rounded-md bg-transparent border-[1px] border-white text-base px-8 py-3">Sign Up</button></Link>
                <Link to="/login"><button className="rounded-md bg-[#106580] border-[1px] border-[#106580] text-base px-8 py-3">Log In</button></Link>
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
}
