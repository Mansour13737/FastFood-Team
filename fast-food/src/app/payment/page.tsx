'use client'

import MasterCard from "@/components/MasterCard"
import SearchButton from "@/components/SearchButton"
import VectorLeft from "@/components/VectorLeft"
import Visa from "@/components/Visa"
import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { products } from '@/components/DynamicPageProps'

export default function Payment() {

  // Get last visited product id
  const [lastId, setLastId] = useState(1)
  const [portion, setPortion] = useState(1)
  const product = useMemo(() => products.find(p => p.id === lastId), [lastId])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id = Number(localStorage.getItem('lastProductId') || '1')
      setLastId(id)
      const savedPortion = localStorage.getItem(`portion-${id}`)
      setPortion(savedPortion ? Number(savedPortion) : 1)
    }
  }, [])
  // Price calculation
  const price = useMemo(() => {
    if (!product) return 0
    const p = product.price * (1 + 0.3 * (portion - 1))
    return Math.round(p * 100) / 100
  }, [product, portion])
  // Tax and fare
  const tax = useMemo(() => Math.round(price * 0.05 * 100) / 100, [price])
  const fare = useMemo(() => price < 20 ? 3 : 2, [price])
  const total = useMemo(() => Math.round((price + tax + fare) * 100) / 100, [price, tax, fare])

  return (
    <div className="lg:min-h-screen lg:bg-gray-50 lg:py-8 xl:py-12">
      <div className='flex justify-between items-center mt-[28px] mr-[19px] ml-3 lg:max-w-4xl lg:mx-auto lg:mt-8 lg:mr-0 lg:ml-0 lg:mb-8 xl:mt-12 xl:mb-12 xl:mx-auto'>
        <VectorLeft />
        <SearchButton />
      </div>
      <div className="lg:max-w-4xl lg:mx-auto lg:bg-white lg:rounded-2xl lg:shadow-xl lg:p-8 xl:p-12">
        <p className="text-5 font-semibold text-[#3C2F2F] mt-[15px] ml-5 lg:text-[24px] lg:mt-0 lg:ml-0 lg:mb-6 xl:text-[28px] xl:mb-8">Order summary</p>
        <div className="mx-9 flex flex-col gap-2 mt-4 border-b-[1px] border-[#F0F0F0] pb-[14.5px] lg:mx-0 lg:gap-4 lg:pb-6 xl:gap-6 xl:pb-8">
          <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D] lg:text-[18px] xl:text-[20px]">
            <span>Order</span>
            <span>${price}</span>
          </p>
          <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D] lg:text-[18px] xl:text-[20px]">
            <span>Tax</span>
            <span>5% : ${tax}</span>
          </p>
          <p className="flex justify-between items-center text-[16px] font-normal text-[#7D7D7D] lg:text-[18px] xl:text-[20px]">
            <span>Fare</span>
            <span>${fare}</span>
          </p>
        </div>
        <p className="mx-9 mt-2 flex justify-between items-center text-[18px] font-semibold text-[#3C2F2F] lg:mx-0 lg:mt-4 lg:text-[22px] xl:mt-6 xl:text-[24px]">
          <span>Order</span>
          <span>${total}</span>
        </p>
        <p className="mx-9 mt-[16px] flex justify-between items-center text-[14px] font-semibold text-[#3C2F2F] lg:mx-0 lg:mt-6 lg:text-[16px] xl:mt-8 xl:text-[18px]">
          <span>Estimated delivery time:</span>
          <span>15 - 30mins</span>
        </p>
        <p className="mx-9 mt-[27px] flex justify-between items-center text-[20px] font-semibold text-[#3C2F2F] lg:mx-0 lg:mt-12 lg:text-[24px] xl:mt-16 xl:text-[28px]">
          Payment methods
        </p>
        <div className="lg:space-y-4 xl:space-y-6">
          <MasterCard />
          <Visa />
        </div>
        <div className="flex gap-[9px] ml-5 mt-[17px] lg:mx-0 lg:mt-8 lg:gap-4 xl:mt-12 xl:gap-6">
          <input type="checkbox" className="bg-[#EF2A39] lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
          <p className="lg:text-[16px] xl:text-[18px]">Save card details for future payments</p>
        </div>
        <div className="flex justify-between mx-5 mt-[45px] lg:mx-0 lg:mt-12 lg:bg-gray-50 lg:p-6 lg:rounded-xl xl:mt-16 xl:p-8 xl:rounded-2xl">
          <div>
            <p className="text-[16px] font-normal text-[#808080] lg:text-[18px] xl:text-[20px]">Total price</p>
            <p className="text-[20px] font-semibold text-black lg:text-[24px] xl:text-[28px]"><span className="text-[#EF2A39]">$</span>{total}</p>
          </div>
          <Link href={"/success"} className="lg:flex lg:items-center">
            <button className='bg-[#3C2F2F]  rounded-lg  text-white text-[12px] font-semibold py-3 px-19 lg:text-[16px] lg:py-4 lg:px-8 lg:rounded-xl lg:font-bold lg:hover:bg-[#2A1F1F] lg:transition-colors lg:duration-300 xl:text-[18px] xl:py-5 xl:px-10'>
              Finish Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
