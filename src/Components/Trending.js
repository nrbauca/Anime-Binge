import React from 'react'
import attackontitan from '../Images/attackontitan.png'
import jujutsukaisen from '../Images/jujutsukaisen.png'
import onepiece from '../Images/onepiece.png'
import star from '../Images/star.png'

export default function Trending() {
  return (
    <div className="pl-20">
      <div className="flex gap-1 text-4xl font-['Outfit'] font-semibold pt-16">
        <p className="text-white">Trending</p>
        <p className="text-[#FBC94A]">this week</p>
      </div>

      <div className="flex gap-4 text-white pt-8">
        <div>
          <button>
              <p className="absolute text-2xl font-['Outfit'] font-semibold pl-6 pt-44">Attack On Titan</p>
              <div className="absolute flex gap-9 items-center text-xs pl-6 pt-[205px]">
                <p className="text-[#747474]">Category: Adventure Fiction, Dark Fantasy, Martial Arts</p>
                <container className="flex gap-1 items-center">
                  <img src={star} alt="star" />
                  <p className="font-semibold">5.0</p>
                </container>
              </div>
            <img src={attackontitan} alt="attack on titan" />
          </button>
        </div>

        <div>
          <button>
              <p className="absolute text-2xl font-['Outfit'] font-semibold pl-6 pt-44">Jujutsu Kaisen</p>
              <div className="absolute flex gap-28 items-center text-xs pl-6 pt-[205px]">
                <p className="text-[#747474]">Category: Adventure Fiction, Martial Arts</p>
                <container className="flex gap-1 items-center">
                  <img src={star} alt="star" />
                  <p className="font-semibold">5.0</p>
                </container>
              </div>
            <img src={jujutsukaisen} alt="jujutsu kaisen" />
          </button>
        </div>
        
        <div>
          <button>
              <p className="absolute text-2xl font-['Outfit'] font-semibold pl-6 pt-44">One Piece</p>
              <div className="absolute flex gap-32 items-center text-xs pl-6 pt-[205px]">
                <p className="text-[#747474]">Category: Adventure Fiction, Comedy</p>
                <container className="flex gap-1 items-center">
                  <img src={star} alt="star" />
                  <p className="font-semibold">5.0</p>
                </container>
              </div>
            <img src={onepiece} alt="one piece" className="rounded-[21px]"/>
          </button>
        </div>
      </div>
    </div>
  )
}
