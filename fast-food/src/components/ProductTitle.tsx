import Image from "next/image"
import Link from "next/link"

interface Product {
    id: number
    title: string
    description: string
    price: number
    star: number
    image: string
}


export default function ProductTitle({ info }: { info: Product }) {
    return (
        <Link href={`/products/${info.id}`}>
            <div className="relative flex flex-col items-center justify-between shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.3)] rounded-[15px] h-[180px] px-[10px]">
                <Image src={info.image} width={100} height={100} alt={info.title} priority />

                <div className="flex flex-col items-center pb-2">
                    <p className="w-[120px] text-wrap text-[#3C2F2F]  text-[12px]">{info.title}</p>
                    <div className="flex justify-between w-[95%] items-center mt-2">
                        <div className="flex gap-1">
                            <svg className=" bg-[url('/star.png')] bg-no-repeat bg-contain bg-center w-4 h-4" />
                            <span className="text-[12px]">{info.star}</span>
                        </div>
                        <svg className=" lazy bg-[url('/heart.svg')] bg-no-repeat bg-contain bg-center w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
