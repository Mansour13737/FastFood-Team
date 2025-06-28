'use client'
import { AppContext } from "@/app/context/AppContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"



interface Product {
    id: number
    title: string
    description: string
    price: number
    star: number
    image: string
    isLiked: boolean
    category: string
}


export default function ProductTitle({ info }: { info: Product }) {

    const {handleLike} = useContext(AppContext)



    return (
        <div className="relative">
            <Link href={`/products/${info.id}`}>
                <div className="relative flex flex-col items-center justify-between shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.3)] rounded-[15px] h-[180px] px-[10px] lg:h-[220px] lg:px-[12px] xl:h-[240px] xl:px-[14px]">
                    <Image src={info.image} width={100} height={100} alt={info.title} priority className="lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]" />

                    <div className="flex flex-col items-center pb-2 lg:pb-3 xl:pb-4">
                        <p className="w-[120px] text-wrap text-[#3C2F2F]  text-[12px] lg:w-[140px] lg:text-[14px] xl:w-[160px] xl:text-[16px]">{info.title}</p>
                        <div className="flex justify-between w-[95%] items-center mt-2 lg:mt-3 xl:mt-4">
                            <div className="flex gap-1 lg:gap-2">
                                <svg className=" bg-[url('/star.png')] bg-no-repeat bg-contain bg-center w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                                <span className="text-[12px] lg:text-[14px] xl:text-[16px]">{info.star}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <svg
                className={info.isLiked ? "right-4 bottom-[9px] absolute bg-[url('/red.svg')] bg-no-repeat bg-contain bg-center w-4 h-4 cursor-pointer lg:right-5 lg:bottom-[11px] lg:w-5 lg:h-5 xl:right-6 xl:bottom-[13px] xl:w-6 xl:h-6" : "right-4 bottom-[9px] absolute bg-[url('/heart.svg')] bg-no-repeat bg-contain bg-center w-4 h-4 cursor-pointer lg:right-5 lg:bottom-[11px] lg:w-5 lg:h-5 xl:right-6 xl:bottom-[13px] xl:w-6 xl:h-6"}
                onClick={() => handleLike(info)}
            />
        </div>
    )
}
