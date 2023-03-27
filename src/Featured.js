import React from 'react'
import star from "./star.png"
import watchnow from "./watchnow.png"

export default function Featured() {
  return (
    <div className="absolute text-white ml-32 mt-80">
        <h1 className="text-6xl font-['Outfit'] font-bold">Kimetsu no Yaiba</h1>
        <div className="flex gap-6 mt-5">
            <container className="flex items-center gap-1">
                <img src={star} alt="star" />
                <p className="font-semibold">5.0</p>
            </container>
            <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
        </div>
        <p className="mt-5">Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by <br />
        Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon <br />
        slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.</p>
        <img src={watchnow} alt="watch now" className="mt-4"/>
    </div>
  )
}