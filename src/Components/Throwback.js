import React from 'react'
import throwback1 from '../Images/throwback1.png'
import throwback2 from '../Images/throwback2.png'
import throwback3 from '../Images/throwback3.png'

export default function Throwback() {
  return (
    <div className="px-3 sm:px-20">
      <div className="flex text-[18px] sm:text-4xl font-['Outfit'] font-semibold sm:pt-16">
        <p className="text-white">Throwback Anime!</p>
      </div>
      <div className="flex flex-nowrap gap-1 sm:gap-4 sm:pt-8 sm:pr-4 sm:pb-16">
        <div>
          <button><img src={throwback1} alt="throwback 1 anime" /></button>
        </div>
        <div>
          <button><img src={throwback2} alt="throwback 2 anime" /></button>
        </div>
        <div>
          <button><img src={throwback3} alt="throwback 3 anime" /></button>
        </div>
      </div>
    </div>
  )
}
