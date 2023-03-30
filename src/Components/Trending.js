import React from 'react'
import attackontitan from '../Images/attackontitan.png'
import jujutsukaisen from '../Images/jujutsukaisen.png'
import onepiece from '../Images/onepiece.png'

export default function Trending() {
  return (
    <div className="pl-20">
      <div className="flex gap-1 text-4xl font-['Outfit'] font-semibold pt-16">
        <p className="text-white">Trending</p>
        <p className="text-[#FBC94A]">this week</p>
      </div>
      <div className="flex overflow-x-scroll gap-4 pt-8">
        <div>
          <button><img src={attackontitan} alt="attack on titan" /></button>
        </div>
        <div>
          <button><img src={jujutsukaisen} alt="jujutsu kaisen" /></button>
        </div>
        <div>
          <button><img src={onepiece} alt="one piece" className="rounded-[21px]" /></button>
        </div>
      </div>
    </div>
  )
}
