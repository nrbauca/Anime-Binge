import React from 'react'
import group6 from '../Images/group6.png'
import line5 from '../Images/line5.png'

export default function Overview() {
  return (
    <div className="absolute px-3 sm:pl-20">
      <div className="flex  items-center space-x-[120px] sm:space-x-[800px] text-[6px] sm:text-sm text-white font-['Outfit']">
        <ul className="flex gap-3 sm:gap-6 items-center ">
          <li className="font-semibold">Overview</li>
          <li>Episodes</li>
          <li>Details</li>
        </ul>
        <img src={group6} alt="shapes" className="h-[6px] sm:h-full" />
      </div>
      <img src={line5} alt="line" className="h-[1px] sm:h-full pl-[4.5px] sm:pl-2" />
    </div>
  )
}
