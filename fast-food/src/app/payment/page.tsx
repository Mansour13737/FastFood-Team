'use client'

import MasterCard from "@/components/MasterCard"
import SearchButton from "@/components/SearchButton"
import VectorLeft from "@/components/VectorLeft"
import Visa from "@/components/Visa"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Link from "next/link"

export default function Payment() {

  const { finalPrice } = useContext(AppContext)

  return (
    <div>
      <div className='flex justify-between items-center mt-[28px] mr-[19px] ml-3'>
        <VectorLeft />
        <SearchButton />
      </div>
      <p className="text-5 font-semibold text-[#3C2F2F] mt-[15px] ml-5">Order summary</p>
      <div className="mx-9 flex flex-col gap-2 mt-4 border-b-[1px] border-[#F0F0F0] pb-[14.5px]">
        <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D]">
          <span>Order</span>
          <span>{finalPrice}</span>
        </p>
        <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D]">
          <span>Tax</span>
          <span>5% :</span>
        </p>
        <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D]">
          <span>Fare</span>
          <span></span>
        </p>
      </div>
      <p className="mx-9 mt-2 flex justify-between items-center text-[18px] font-semibold text-[#3C2F2F]">
        <span>Order</span>
        <span>$16.48</span>
      </p>
      <p className="mx-9 mt-[16px] flex justify-between items-center text-[14px] font-semibold text-[#3C2F2F]">
        <span>Estimated delivery time:</span>
        <span>15 - 30mins</span>
      </p>
      <p className="mx-9 mt-[27px] flex justify-between items-center text-[20px] font-semibold text-[#3C2F2F]">
        Payment methods
      </p>
      <MasterCard />
      <Visa />
      <div className="flex gap-[9px] ml-5 mt-[17px]">
        <input type="checkbox" className="bg-[#EF2A39]" />
        <p>Save card details for future payments</p>
      </div>
      <div className="flex justify-between mx-5 mt-[45px]">
        <div >
          <p className="text-[16px] font-normal text-[#808080]">Total price</p>
          <p className="text-[20px] font-semibold text-black"><span className="text-[#EF2A39]">$</span>{finalPrice}</p>
        </div>
        <Link href={"/success"}>
          <button className='bg-[#3C2F2F]  rounded-lg  text-white text-[12px] font-semibold py-3 px-19'>
            Finish Order
          </button>
        </Link>
      </div>
    </div>

  )
}
