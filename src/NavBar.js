import React from 'react'
import AboutUs from './AboutUs'
import Discover from './Discover'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default function NavBar() {
  return (
    <div>
        <nav className="flex justify-between absolute w-10/12 text-white ml-32 mt-24">
        <p className="text-2xl font-['Outfit'] font-bold">AnimeBinge</p>
        <div className="flex items-center gap-6">
            <Home />
            <Discover />
            <AboutUs />
            <SignUp />
            <LogIn />
        </div>
        </nav>
    </div>
  )
}