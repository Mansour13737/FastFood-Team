'use client'
import Image from 'next/image'
import OrderButton from '@/components/OrderButton'
import SearchButton from '@/components/SearchButton'
import VectorLeft from '@/components/VectorLeft'
import Link from 'next/link'
import { products } from '@/components/DynamicPageProps'
import TotalPrice from '@/components/TotalPrice'
import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  // Persisted states for spicy and portion
  const [spicy, setSpicy] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`spicy-${id}`)
      return saved ? Number(saved) : 0
    }
    return 0
  })
  const [portion, setPortion] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`portion-${id}`)
      return saved ? Number(saved) : 1
    }
    return 1
  })

  useEffect(() => {
    localStorage.setItem(`spicy-${id}`, spicy.toString())
  }, [spicy, id])
  useEffect(() => {
    localStorage.setItem(`portion-${id}`, portion.toString())
  }, [portion, id])

  if (!product) {
    return <p className="p-8 text-red-600">Product Not Found</p>
  }

  return (
    <main className="container mx-auto p-4 lg:p-8 xl:p-12 lg:max-w-6xl">
      <div className='flex justify-between items-center'>
        <VectorLeft />
        <SearchButton />
      </div>
      <div className="w-full mx-auto">
        <div className="w-full bg-white flex items-center flex-col">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={300}
            className="w-[70%] h-auto rounded-lg"
          />
          <div className='w-full flex flex-col justify-start'>
            <h1 className="w-full text-[20px] text-center text-[#3C2F2F] font-sans line-clamp-2 font-semibold">{product.title}</h1>
            <div className="flex items-center gap-2 pl-4 mt-2 mb-5">
              <Image
                src="/products/star.png"
                width={16}
                height={16}
                alt="rating star"
              />
              <span className='text-[#808080] text-[14px]'>{product.star}</span>
            </div>
          </div>
          <p className="text-[14px] w-[80%] text-[#6A6A6A] mb-2 text-justify tracking-tighter font-semibold">{product.description}</p>
        </div>
        {/* qty and spicy */}
        <div className='flex justify-between items-center mt-6 mb-4'>
          <div className='flex flex-col w-[40%] justify-center rounded-lg p-2'>
            <span className='text-[14px] text-[#3C2F2F] font-medium'>Spicy</span>
            <div>
              <input
                type="range"
                min={0}
                max={4}
                value={spicy}
                onChange={e => setSpicy(Number(e.target.value))}
                className='w-full h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg appearance-none cursor-pointer custom-thumb'
              />
            </div>
            <div className='flex justify-between w-full'>
              <span className='text-[#1CC019] text-[12px] font-semibold'>Mild</span>
              <span className='text-[#EF2A39] text-[12px] font-semibold'>Hot</span>
            </div>
          </div>
          <div className='flex flex-col w-[30%] h-[40px] justify-center gap-1 mr-2'>
            <span className='text-[14px] text-[#3C2F2F] font-medium justify-self-start'>Portion</span>
            <div className="flex justify-center items-center gap-2 mx-auto">
              <button className='w-9 h-9 text-center bg-[#EF2A39] pb-[3px] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F]'
                onClick={() => setPortion(p => Math.max(1, p - 1))}>-</button>
              <span>{portion}</span>
              <button className='w-9 h-9 flex justify-center items-center pb-[3px] bg-[#EF2A39] text-white rounded-lg text-2xl font-bold shadow-md shadow-[#FF99004F]'
                onClick={() => setPortion(p => Math.min(10, p + 1))}>+</button>
            </div>
          </div>
        </div>
        {/* price & order */}
        <div>
          <div className='flex justify-center gap-3 items-center mb-4 '>
            <TotalPrice id={id} portion={portion} />
            <Link href={'/customize'} className='w-full' onClick={() => localStorage.setItem('lastProductId', id.toString())}>
              <OrderButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}