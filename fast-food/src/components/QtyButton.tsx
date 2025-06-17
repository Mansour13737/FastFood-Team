'use client'
import { useState } from "react"
export default function QtyButton() {
const [qtyNumber,setQtyNumber]=useState<number>(0)


  const handleIncrement = () => {
      setQtyNumber((prev) => prev + 1)
  }
  const handleDecrement = () => {
    if (qtyNumber <1) {
   return   setQtyNumber(0)
    }
            setQtyNumber((prev) => prev - 1)

  }
    
  return (
    <div className="flex justify-center items-center gap-2 mx-auto  ">
      <button className='w-9 h-9  text-center bg-[#EF2A39] pb-[3px] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F]' onClick={handleDecrement}>-</button>
      <span >{qtyNumber}</span>
      <button className='w-9 h-9  flex justify-center items-center pb-[3px] bg-[#EF2A39] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F]' onClick={handleIncrement}>+</button>
    </div>
  )
}

