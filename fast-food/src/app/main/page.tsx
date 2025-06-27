'use client'
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import ProductTitle from "@/components/ProductTitle"
interface Product {
  id: number
  title: string
  description: string
  price: number
  star: number
  image: string
  isLiked : boolean
}

export default function Main() {

  const {products} = useContext(AppContext)
  const [showLikedOnly, setShowLikedOnly] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter products by liked and category
  let filteredProducts = products;
  if (showLikedOnly) {
    filteredProducts = filteredProducts.filter(p => p.isLiked)
  }
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory)
  }

  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative items-center px-4 overflow-x-hidden overflow-y-auto">
      <header className="w-full relative h-[120px]">
        <h2 className="font-normal font-lobster absolute text-[35px] text-[#3C2F2F] top-[28px] left-[19px]">Foodgo</h2>
        <p className="absolute tracking-tighter top-[89px] left-[19px] text-[15px] text-[#6A6A6A]">Order your favourite food <b className="text-[15px]">!</b></p>
        <Image src={'/girl.png'} width={70} height={70} alt="Pic" className="absolute top-[28px] right-[19px] rounded-2xl" />
      </header>

      <main className="w-full flex-1 flex flex-col pb-[120px]">
        <div className="flex h-fit w-full items-center justify-between">
          <input type="text" className="shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] w-[80%] rounded-[15px]" />
          <svg className="bg-[url('/setting.svg')] bg-contain bg-no-repeat bg-center w-[45px] h-[45px]" />
        </div>

        <div className="mt-8 flex gap-1 sticky top-[168px] z-30 bg-white py-2">
          <button
            className={`h-[45px] text-[14px] px-5 py-2 flex items-center justify-center rounded-[17px] ${selectedCategory === 'all' ? 'bg-[#EF2A39] text-white' : 'bg-[#F3F4F6] text-[#6A6A6A]'}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`h-[45px] text-[14px] px-5 py-2 flex items-center justify-center rounded-[17px] ${selectedCategory === 'combos' ? 'bg-[#EF2A39] text-white' : 'bg-[#F3F4F6] text-[#6A6A6A]'}`}
            onClick={() => setSelectedCategory('combos')}
          >
            Combos
          </button>
          <button
            className={`h-[45px] text-[14px] px-5 py-2 flex items-center justify-center rounded-[17px] ${selectedCategory === 'spicy' ? 'bg-[#EF2A39] text-white' : 'bg-[#F3F4F6] text-[#6A6A6A]'}`}
            onClick={() => setSelectedCategory('spicy')}
          >
            Spicy
          </button>
          <button
            className={`h-[45px] text-[14px] px-5 py-2 flex items-center justify-center rounded-[17px] ${selectedCategory === 'hot' ? 'bg-[#EF2A39] text-white' : 'bg-[#F3F4F6] text-[#6A6A6A]'}`}
            onClick={() => setSelectedCategory('hot')}
          >
            Hot
          </button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[5px] w-full mt-3 mb-[120px] text-[#3C2F2F]">
          {filteredProducts.length === 0 && showLikedOnly ? (
            <div className="col-span-2 w-full flex justify-center items-center py-10 text-lg font-semibold text-gray-400">
              No products found in this section.
            </div>
          ) : (
            filteredProducts.map((item: Product, key) => (
              <ProductTitle info={item} key={key}  />
            ))
          )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <footer className="bg-[url('/main-footer.png')] bg-cover bg-center bg-no-repeat w-full h-[50px] justify-between flex">
          <div className="w-[38%] h-full flex justify-between items-center gap-10 px-[22px]">
            <Link href={'/'} className="w-fit h-fit relative z-[60]">
              <Image src={'/home.png'} alt="home" width={17} height={17} />
            </Link>
            <Link href={'/userProfile'} className="w-fit h-fit relative z-[60]">
              <Image src={'/user.png'} alt="home" width={17} height={17} />
            </Link>
          </div>
          <div className="w-[38%] h-full flex justify-between items-center gap-10 px-[22px]">
            <Link href={'/chat'} className="w-fit h-fit relative z-[60]">
              <Image src={'/comment.png'} alt="home" width={17} height={17} />
            </Link>
            <button
              className="w-fit h-fit relative z-[60] focus:outline-none"
              onClick={() => setShowLikedOnly(prev => !prev)}
              id="liked"
            >
              <Image
                src={showLikedOnly ? '/red.svg' : '/heart.png'}
                alt="home"
                width={17}
                height={17}
              />
            </button>
          </div>
        </footer>

        <div className="w-full h-fit flex justify-center items-center mx-auto bottom-[15px] absolute">
          <Link href={'/'} className="relative z-[60]">
            <Image src={'/plus.png'} width={80} height={80} alt="plus" />
          </Link>
        </div>
      </div>
    </div>
  )
}
