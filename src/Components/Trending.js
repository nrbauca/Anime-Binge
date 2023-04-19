import React from 'react'
import attackontitan from '../Images/attackontitan.png'
import jujutsukaisen from '../Images/jujutsukaisen.png'
import onepiece from '../Images/onepiece.png'
import star from '../Images/star.png'

export default function Trending() {
  return (
    <div className="pl-3 sm:pl-20">
      <div className="flex gap-1 text-[18px] sm:text-4xl font-['Outfit'] font-semibold sm:pt-16">
        <p className="text-white">Trending</p>
        <p className="text-[#FBC94A]">this week</p>
      </div>

      <div className="flex gap-1 sm:gap-4 text-white sm:pt-8">
        <div>
          <button>
            <p className="absolute text-[6px] sm:text-2xl font-['Outfit'] font-semibold sm:pl-6 pt-8 sm:pt-44">Attack On Titan</p>
            <div className="absolute flex w-1/5  sm:w-full sm:gap-9 items-center text-[4px] sm:text-xs sm:pl-6 pt-[40px] sm:pt-[205px]">
              <p className="text-[#747474]">Category: Adventure Fiction, Dark Fantasy, Martial Arts</p>
              <container className="flex gap-[2px] sm:gap-1 items-center">
                <img src={star} alt="star" className="h-[8px] sm:h-full sm:w-full" />
                <p className="font-semibold">5.0</p>
              </container>
            </div>
            <img src={attackontitan} alt="attack on titan" />
          </button>
        </div>

        <div>
          <button>
            <p className="absolute text-[6px] sm:text-2xl font-['Outfit'] font-semibold sm:pl-6 pt-8 sm:pt-44">Jujutsu Kaisen</p>
            <div className="absolute flex w-1/5 sm:w-full sm:gap-28 items-center text-[4px] sm:text-xs sm:pl-6 pt-[40px] sm:pt-[205px]">
              <p className="text-[#747474]">Category: Adventure Fiction, Martial Arts</p>
              <container className="flex gap-[2px] sm:gap-1 items-center">
                <img src={star} alt="star" className="h-[8px] sm:h-full sm:w-full" />
                <p className="font-semibold">5.0</p>
              </container>
            </div>
            <img src={jujutsukaisen} alt="jujutsu kaisen" />
          </button>
        </div>
        
        <div>
          <button>
            <p className="absolute text-[6px] sm:text-2xl font-['Outfit'] font-semibold sm:pl-6 pt-8 sm:pt-44">One Piece</p>
            <div className="absolute flex w-1/5 sm:w-full sm:gap-32 items-center text-[4px] sm:text-xs sm:pl-6 pt-[40px] sm:pt-[205px]">
              <p className="text-[#747474]">Category: Adventure Fiction, Comedy</p>
              <container className="flex gap-[2px] sm:gap-1 items-center">
                <img src={star} alt="star" className="h-[8px] sm:h-full sm:w-full" />
                <p className="font-semibold">5.0</p>
              </container>
            </div>
            <img src={onepiece} alt="one piece" className="rounded-[4px] sm:rounded-[21px]"/>
          </button>
        </div>
      </div>
    </div>
  )
}
