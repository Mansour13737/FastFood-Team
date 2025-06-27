'use client'

import MasterCard from "@/components/MasterCard"
import SearchButton from "@/components/SearchButton"
import VectorLeft from "@/components/VectorLeft"
import Visa from "@/components/Visa"
import { useContext, useEffect, useMemo, useState } from "react"
import { AppContext } from "../context/AppContext"
import Link from "next/link"
import { products } from '@/components/DynamicPageProps'

export default function Payment() {

  const { finalPrice } = useContext(AppContext)

  // Get last visited product id
  const lastId = useMemo(() => Number(localStorage.getItem('lastProductId') || '1'), [])
  const product = useMemo(() => products.find(p => p.id === lastId), [lastId])
  const [spicy, setSpicy] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`spicy-${lastId}`)
      return saved ? Number(saved) : 0
    }
    return 0
  })
  const [portion, setPortion] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`portion-${lastId}`)
      return saved ? Number(saved) : 1
    }
    return 1
  })
  // Price calculation
  const price = useMemo(() => {
    if (!product) return 0
    let p = product.price * (1 + 0.3 * (portion - 1))
    return Math.round(p * 100) / 100
  }, [product, portion])
  // Tax and fare
  const tax = useMemo(() => Math.round(price * 0.05 * 100) / 100, [price])
  const fare = useMemo(() => price < 20 ? 3 : 2, [price])
  const total = useMemo(() => Math.round((price + tax + fare) * 100) / 100, [price, tax, fare])

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
          <span>${price}</span>
        </p>
        <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D]">
          <span>Tax</span>
          <span>5% : ${tax}</span>
        </p>
        <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D]">
          <span>Fare</span>
          <span>${fare}</span>
        </p>
      </div>
      <p className="mx-9 mt-2 flex justify-between items-center text-[18px] font-semibold text-[#3C2F2F]">
        <span>Order</span>
        <span>${total}</span>
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
          <p className="text-[20px] font-semibold text-black"><span className="text-[#EF2A39]">$</span>{total}</p>
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
