import React from 'react'
import handleSubmit from '../Handles/handlesubmit';
import { useRef } from 'react';

export default function LogIn() {
const dataRef = useRef()

const submithandler = (e) => {
  e.preventDefault()
  handleSubmit(dataRef.current.value)
  dataRef.current.value = ""
}

  return (
  <div className="App text-white py-96">
    <form onSubmit={submithandler}>
      <input type= "text" ref={dataRef} className="text-black" />
      <button type = "submit">Save</button>
      </form>
  </div>
  );
}
