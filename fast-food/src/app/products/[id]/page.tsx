import { products, Product } from '@/data/products'
import Image from 'next/image'
import OrderButton from '@/components/OrderButton'
import QtyButton from '@/components/QtyButton'
import SearchButton from '@/components/SearchButton'
import VectorLeft from '@/components/VectorLeft'

type Props = { params: { id: string } }



export default function ProductPage({ params }: Props) {
    const product: Product | undefined = products.find((p) => p.id === Number(params.id))

    if (!product) {
        return <p className="p-8 text-red-600">Product Not Found</p>
    }

    return (
        <main className="container mx-auto p-4">
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
                        <div className="flex items-center  gap-2 pl-4 mt-2 mb-5">
                            <Image
                                src="/products/star.png"
                                width={16}
                                height={16}

                                alt="rating star"
                            />
                            <span className='text-[#808080] text-[14px]'>{product.star}</span>
                        </div>
                    </div>
                    <p className="text-[14px] w-[80%] text-[#6A6A6A] mb-2 text-justify tracking-tighter font-semibold ">{product.description}</p>
                </div>
                {/* qty and spicy */}
                <div className='flex justify-between items-center mt-6 mb-4 '>
                    <div className='flex flex-col w-[40%]  justify-center rounded-lg p-2'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium'>Spicy</span>
                        <div>
                            <input type="range" className='w-full h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg appearance-none cursor-pointer custom-thumb' />
                        </div>
                        <div className='flex justify-between w-full '>
                            <span className='text-[#1CC019] text-[12px] font-semibold '>Mild</span>
                            <span className='text-[#EF2A39] text-[12px] font-semibold '>Hot</span>
                        </div>
                    </div>
                    <div className='flex flex-col w-[30%] h-[40px] justify-center gap-1 mr-2'>
                        <span className='text-[14px] text-[#3C2F2F] font-medium justify-self-start'>Portion</span>
                        <QtyButton />
                    </div>

                </div>

                {/* price & order */}
                <div>
                    <div className='flex justify-center  gap-3 items-center mb-4'>
                        <span className='text-[11px] text-white bg-[#EF2A39] font-bold rounded-lg py-3 px-3'>${product.price.toFixed(2)}</span>
                        <OrderButton />
                    </div>
                </div>
            </div>
        </main>
    )
}