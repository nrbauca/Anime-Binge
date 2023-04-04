import React from 'react'
import star from '../Images/star.png'
import watchnow from '../Images/watchnow.png'
import Overview from './Overview'
// import kimetsu from '../Images/kimetsu.png'
import Header from './Header'

export default function Featured() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute z-10 top-0 text-white font-['Outfit'] pl-20 pt-[355px]">
        <p className="text-7xl font-semibold">Kimetsu no Yaiba</p>
        <div className="flex gap-6 items-center text-xs pt-2">
          <container className="flex gap-1 items-center">
            <img src={star} alt="star" />
            <p className="font-semibold">5.0</p>
          </container>
          <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
        </div>
        <p className="pt-4">Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by <br />
        Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon <br />
        slayer after his family was slaughtered and his younger sister Nezuko turned into a <br />
        demon.</p>
        <button><img src={watchnow} alt="watch now" className="pt-4"/></button>
      </div>
      <div className="absolute z-20 top-0 pt-[900px]">
        <Overview />
      </div>
    </div>
  )
}
