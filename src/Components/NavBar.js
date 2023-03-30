import React from 'react'
import AboutUs from './AboutUs'
import Discover from './Discover'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default function NavBar() {
  return (
    <div>
        <nav className="absolute flex -space-x-[-505px] text-white pl-20 pt-16">
        <p className="text-2xl font-['Outfit'] font-semibold">AnimeBinge</p>
        <div className="flex gap-16 items-center">
            <Home />
            <Discover />
            <AboutUs />
            <div className="flex gap-5 items-center">
              <SignUp />
              <LogIn />
            </div>
        </div>
        </nav>
    </div>
  )
}
