'use client'

import { AppContext } from '@/app/context/AppContext'
import { useContext, useEffect } from 'react'

export default function TotalPrice({ id, portion = 1 }: { id: number, portion?: number }) {

    const { setId, products } = useContext(AppContext)

    // Find the product by id
    const product = products.find((p) => p.id === id)
    // Calculate price: base + (portion-1)*30%base
    let price = product ? product.price * (1 + 0.3 * (portion - 1)) : 0
    price = Math.round(price * 100) / 100

    useEffect(() => {
        setId(id)
    }, [id, setId])

    return (
        <div className="lg:flex lg:justify-center">
            <span  className='text-[11px] text-white bg-[#EF2A39] font-bold rounded-lg py-3 px-3 lg:text-[18px] lg:py-4 lg:px-6 lg:rounded-xl lg:font-bold xl:text-[20px] xl:py-5 xl:px-8'>${price}</span>
        </div>
    )
}
