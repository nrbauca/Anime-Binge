import React from 'react'
import Featured from '../Components/Featured'
import Trending from '../Components/Trending'
import Throwback from '../Components/Throwback'

export default function Home() {
  return (
    <div>
      <Featured />
      <Trending />
      <Throwback />
    </div>
  )
}
