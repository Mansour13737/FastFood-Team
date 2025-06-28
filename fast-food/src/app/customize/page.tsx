'use client'

import Image from "next/image"
import CustomStuff from '@/components/CustomStuff'
import OrderButton from '@/components/OrderButton'
import { useContext, useEffect, useState, useMemo } from 'react'
import { AppContext } from '../context/AppContext'
import Link from 'next/link'
import { products } from '@/components/DynamicPageProps'

export default function Customize() {
    const {customStaff,customStaff2} = useContext(AppContext)
    // Assume last visited product id is stored in localStorage
    const [lastId, setLastId] = useState(1)
    const [spicy, setSpicy] = useState(0)
    const [portion, setPortion] = useState(1)
    const product = useMemo(() => products.find(p => p.id === lastId), [lastId])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const id = Number(localStorage.getItem('lastProductId') || '1')
            setLastId(id)
            const savedSpicy = localStorage.getItem(`spicy-${id}`)
            const savedPortion = localStorage.getItem(`portion-${id}`)
            setSpicy(savedSpicy ? Number(savedSpicy) : 0)
            setPortion(savedPortion ? Number(savedPortion) : 1)
        }
    }, [])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(`spicy-${lastId}`, spicy.toString())
        }
    }, [spicy, lastId])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(`portion-${lastId}`, portion.toString())
        }
    }, [portion, lastId])
    // Price calculation (same as product page)
    const price = useMemo(() => {
        if (!product) return 0
        const p = product.price * (1 + 0.3 * (portion - 1))
        return Math.round(p * 100) / 100
    }, [product, portion])

    return (
        <div className='w-full h-screen pt-[10px] pr-[15px] overflow-x-hidden lg:pt-8 lg:pr-8 lg:pl-8 lg:h-auto lg:min-h-screen'>
            <div className="flex justify-between w-full gap-[25px] lg:gap-16 xl:gap-24 lg:max-w-6xl lg:mx-auto">
                <div className='w-full content-center lg:w-1/2 lg:flex lg:justify-center'>
                    <Image src={'/customize.jpg'} width={240} height={297} alt="customize" className="lg:w-full lg:max-w-[400px] lg:h-auto lg:rounded-2xl lg:shadow-xl xl:max-w-[500px]" />
                </div>
                <div className="flex flex-col justify-around w-[162px] lg:w-1/2 lg:gap-8 xl:gap-12">
                    <p className='text-[14px] font-normal lg:text-[18px] lg:leading-relaxed xl:text-[20px]'><b>Customize</b> Your Burger to Your Tastes. Ultimate Experience</p>

                    <div className='flex flex-col justify-center rounded-lg p-2 w-full lg:p-6 lg:bg-gray-50 xl:p-8'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium lg:text-[18px] xl:text-[20px] lg:mb-3'>Spicy</span>
                        <div>
                            <input type="range" min={0} max={4} value={spicy} onChange={e => setSpicy(Number(e.target.value))} className='w-full h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg appearance-none cursor-pointer custom-thumb' />
                        </div>
                        <div className='flex justify-between w-full'>
                            <span className='text-[#1CC019] text-[12px] font-semibold '>Mild</span>
                            <span className='text-[#EF2A39] text-[12px] font-semibold '>Hot</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-1 w-full lg:p-6 lg:bg-gray-50 xl:p-8'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium justify-self-start lg:text-[18px] xl:text-[20px] lg:mb-3'>Portion</span>
                        <div className="flex justify-center items-center gap-2 mx-auto lg:gap-4">
                            <button className='w-9 h-9 text-center bg-[#EF2A39] pb-[3px] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F] lg:w-12 lg:h-12 lg:text-3xl xl:w-14 xl:h-14'
                                onClick={() => setPortion(p => Math.max(1, p - 1))}>-</button>
                            <span className="lg:text-[20px] lg:font-bold xl:text-[24px]">{portion}</span>
                            <button className='w-9 h-9 flex justify-center items-center pb-[3px] bg-[#EF2A39] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F] lg:w-12 lg:h-12 lg:text-3xl xl:w-14 xl:h-14'
                                onClick={() => setPortion(p => Math.min(10, p + 1))}>+</button>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full pl-[15px] mt-[15px] lg:pl-0 lg:mt-12 xl:mt-16'>
                <div className='flex justify-start lg:mb-6 xl:mb-8'>
                    <span className='font-semibold lg:text-[20px] xl:text-[24px]'>Toppings</span>
                </div>
                <div className='w-full flex flex-col justify-around gap-3 mt-[10px] lg:gap-6 xl:gap-8'>
                    <div className='flex gap-1 justify-center items-center lg:gap-3 xl:gap-4'>
                        {customStaff.map((item) => (
                            <CustomStuff item={item} key={item.id} />
                        ))}
                    </div>
                    <div className='flex gap-1 justify-center items-center lg:gap-3 xl:gap-4'>
                        {customStaff2.map((item) => (
                            <CustomStuff item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            <div className='flex justify-center w-full items-center gap-3 mt-4 lg:mt-8 lg:gap-6 xl:mt-12 xl:gap-8'>
                <span className='text-[11px] text-white bg-[#EF2A39] w-fit font-bold rounded-lg p-3 lg:text-[18px] lg:px-6 lg:py-4 xl:text-[20px] xl:px-8 xl:py-5'>${price}</span>
                <Link href={'/payment'} className='w-full flex justify-center items-center lg:flex-1 lg:max-w-[300px]'>
                <OrderButton />
                </Link>
            </div>
            </div>
        </div>
    )
}

