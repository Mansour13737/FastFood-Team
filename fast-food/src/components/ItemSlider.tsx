
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type Item = {
  id: number
  name: string
  image: string
}

type Props = {
  title: string
  items: Item[]
}

export default function ItemSlider({ title, items }: Props) {
  const [selected, setSelected] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="my-6">
      <h2 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h2>
      <Swiper spaceBetween={16} slidesPerView={'auto'}>
        {items.map(item => {
          const isActive = selected.includes(item.id)
          return (
            <SwiperSlide key={item.id} style={{ width: 120 }}>
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white">
                <div className="h-[90px] w-full relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex items-center justify-between px-2 py-2 bg-neutral-800 text-white">
                  <span className="text-sm font-medium">{item.name}</span>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-200 ${
                      isActive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {isActive ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
