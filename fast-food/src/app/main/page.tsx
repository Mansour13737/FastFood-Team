'use client'
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import ProductTitle from "@/components/ProductTitle"
interface Product {
  id: number
  title: string
  description: string
  price: number
  star: number
  image: string
}

export default function Main() {

  const {products} = useContext(AppContext)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative items-center px-4">
      <header className="w-full relative h-[120px]">
        <h2 className="font-normal font-lobster absolute text-[35px] text-[#3C2F2F] top-[28px] left-[19px]">Foodgo</h2>
        <p className="absolute tracking-tighter top-[89px] left-[19px] text-[15px] text-[#6A6A6A]">Order your favourite food <b className="text-[15px]">!</b></p>
        <Image src={'/girl.png'} width={70} height={70} alt="Pic" className="absolute top-[28px] right-[19px] rounded-2xl" />
      </header>

      <main className="w-full flex-1 flex flex-col">
        <div className="flex h-fit w-full items-center justify-between">
          <input type="text" className="shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] w-[80%] rounded-[15px]" />
          <svg className="bg-[url('/setting.svg')] bg-contain bg-no-repeat bg-center w-[45px] h-[45px]" />
        </div>

        <div className="mt-8 flex gap-1">
          <Button color="bg-[#EF2A39] text-white">All</Button>
          <Button>Combos</Button>
          <Button>Spicy</Button>
          <Button>Hot</Button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[5px] w-full mt-3 mb-[120px] text-[#3C2F2F]">
          {products.map((item: Product, key) => (
            <ProductTitle info={item} key={key} />
          ))}
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
            <Link href={'/'} className="w-fit h-fit relative z-[60]">
              <Image src={'/comment.png'} alt="home" width={17} height={17} />
            </Link>
            <Link href={'/'} className="w-fit h-fit relative z-[60]">
              <Image src={'/heart.png'} alt="home" width={17} height={17} />
            </Link>
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
