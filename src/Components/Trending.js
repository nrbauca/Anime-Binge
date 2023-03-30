import React from 'react'
import attackontitan from '../Images/attackontitan.png'
import jujutsukaisen from '../Images/jujutsukaisen.png'

export default function Trending() {
  return (
    <div className="pl-20">
      <div className="flex gap-1 text-4xl font-['Outfit'] font-semibold pt-16">
        <p className="text-white">Trending</p>
        <p className="text-[#FBC94A]">this week</p>
      </div>
      <div className="flex flex-nowrap gap-4 pt-8">
        <div>
          <img src={attackontitan} alt="attack on titan" />
        </div>
        <container>
        <img src={jujutsukaisen} alt="jujutsu kaisen" />
        </container>
        <container>
        <img src={attackontitan} alt="attack on titan" />
        </container>
      </div>
    </div>
  )
}
