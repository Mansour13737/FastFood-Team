'use client'
import Image from "next/image"
import { useState } from "react"

export default function SearchButton() {
    const [search, setSearch] = useState<boolean>(false)
    
    const searchButtonClicked = () => {
        if (search === false) {
            setSearch(true)
    } else {
        
        setSearch(false)
    }
}
    return (

        <div className="flex ">
            <div className="flex justify-center items-center gap-2">
                <input className={search?`w-[90%] h-6 rounded-md border border-gray-300 px-2 transition-all opacity-100 scale-100 duration-200`:"pacity-0 scale-95 max-h-0 overflow-hidden"}type="text" />
                <span onClick={searchButtonClicked} className={search?"text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-300 font-bold text-l":`hidden`}>X</span>
            </div>
            <div className={search?"hidden":`flex justify-center items-center` } onClick={searchButtonClicked}>
                <Image src={"/products/search.png"} alt="search" width={20} height={20} />
            </div>


        </div>
    )
}
