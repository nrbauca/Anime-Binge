import React from 'react'
import throwback1 from './throwback1.png'
import throwback2 from './throwback2.png'
import throwback3 from './throwback3.png'

export default function Throwback() {
  return (
    <div className="pl-20">
      <div className="flex text-4xl font-['Outfit'] font-semibold pt-16">
        <p className="text-white">Throwback Anime!</p>
      </div>
      <div className="flex flex-nowrap gap-4 pt-8 pr-4 pb-16">
        <div>
          <img src={throwback1} alt="throwback 1 anime" />
        </div>
        <container>
        <img src={throwback2} alt="throwback 2 anime" />
        </container>
        <container>
        <img src={throwback3} alt="throwback 3 anime" />
        </container>
      </div>
    </div>
  )
}
