import React from 'react'
import group6 from '../Images/group6.png'
import line5 from '../Images/line5.png'

export default function Overview() {
  return (
    <div className="absolute pl-20">
        <div className="flex -space-x-[-850px] items-center text-sm text-white font-['Outfit']">
            <ul className="flex gap-6 items-center ">
                <li className="font-semibold">Overview</li>
                <li>Episodes</li>
                <li>Details</li>
            </ul>
            <img src={group6} alt="shapes" />
        </div>
        <img src={line5} alt="line" className="pl-2" />
    </div>
  )
}
