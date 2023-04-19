import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <header>
          <nav className="absolute z-50 sm:flex w-full sm:justify-between text-white px-3 sm:px-20 pt-2 sm:pt-16">
            <Link className="text-base sm:text-2xl font-['Outfit'] font-semibold" to="/home">AnimeBinge</Link>
            <div className="flex gap-4 sm:gap-14 items-center text-xs sm:text-base">
              <Link to="/home"><button className="">Home</button></Link>
              <Link to="/discover"><button className="">Discover</button></Link>
              <Link to="/aboutus"><button className="">About Us</button></Link>
              <div className="flex gap-4 sm:gap-5 items-center">
                <Link to="/signup"><button className="rounded-md bg-transparent border-[1px] border-white px-1 sm:px-8 py-1 sm:py-3">Sign Up</button></Link>
                <Link to="/login"><button className="rounded-md bg-[#106580] border-[1px] border-[#106580] px-1 sm:px-8 py-1 sm:py-3">Log In</button></Link>
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
}
