import React from 'react'
import kimetsu from '../Images/kimetsu.png'

export default function Header() {
  return (
    <div>
        <img src={kimetsu} alt="absolute kimetsu no yaiba" />  
        <div className="absolute z-10 top-0 h-[986px] w-full bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>
    </div>
  )
}
