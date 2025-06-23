'use client'

import { AppContext } from '@/app/context/AppContext'
import { useContext, useEffect } from 'react'

export default function TotalPrice({ id }: { id: number }) {

    const { setId, finalPrice,fixPrice} = useContext(AppContext)

    useEffect(() => {
        setId(id)
        fixPrice()        
    })

    return (
        <div>
            <span  className='text-[11px] text-white bg-[#EF2A39] font-bold rounded-lg py-3 px-3'>${finalPrice}</span>
        </div>
    )
}
