'use client'

import QtyButton from '@/components/QtyButton'
import Image from "next/image"
import CustomStuff from '@/components/CustomStuff'
import OrderButton from '@/components/OrderButton'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Customize() {

    const {customStaff,customStaff2} = useContext(AppContext)

    return (
        <div className='w-full h-screen pt-[10px] pr-[15px] overflow-x-hidden'>
            <div className="flex justify-between w-full gap-[25px]">
                <div className='w-full  content-center'>
                    <Image src={'/customize.jpg'} width={240} height={297} alt="customize" />
                </div>
                <div className="flex flex-col  justify-around w-[162px] ">
                    <p className='text-[14px] font-normal'><b>Customize</b> Your Burger to Your Tastes. Ultimate Experience</p>

                    <div className='flex flex-col justify-center rounded-lg p-2  w-full'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium'>Spicy</span>
                        <div>
                            <input type="range" className='w-full h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg appearance-none cursor-pointer custom-thumb' />
                        </div>
                        <div className='flex justify-between w-full'>
                            <span className='text-[#1CC019] text-[12px] font-semibold '>Mild</span>
                            <span className='text-[#EF2A39] text-[12px] font-semibold '>Hot</span>
                        </div>
                    </div>
                    <div className='flex  flex-col justify-center gap-1 w-full'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium justify-self-start'>Portion</span>
                        <QtyButton />
                    </div>

                    <div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full pl-[15px] mt-[35px]'>
                <div className='flex justify-start'>
                    <span className='font-semibold'>Toppings</span>
                </div>
                <div className='w-full flex flex-col  justify-around gap-3 mt-[10px]'>
                    <div className='flex gap-1 justify-center items-center'>
                        {customStaff.map((item) => (
                            <CustomStuff item={item} key={item.id} />
                        ))}
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        {customStaff2.map((item) => (
                            <CustomStuff item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            <div className='flex justify-center w-full gap-1 items-center mt-4'>
                <span className='text-[11px] text-white bg-[#EF2A39] font-bold rounded-lg py-3 px-3'>$</span>
                <OrderButton />
            </div>
            </div>
        </div>
    )
}

