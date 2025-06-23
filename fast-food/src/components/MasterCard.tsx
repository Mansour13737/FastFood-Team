'use client'

import { AppContext } from "@/app/context/AppContext"
import { useContext } from "react"

export default function MasterCard() {

    const { masterActive, setMasterActive } = useContext(AppContext)

    function masterFunc() {
        if (masterActive) {
            setMasterActive(false)
        } else {
            setMasterActive(true)
        }
    }

    return (
        <div onClick={masterFunc} className={masterActive ? "mx-5 bg-[#3C2F2F] rounded-[20px] mt-[15px] h-[80px] pr-5 pl-[18px] flex items-center transition-all duration-200" : "mx-5 bg-[#F3F4F6] rounded-[20px] mt-[15px] h-[80px] pr-5 pl-[18px] flex items-center transition-all duration-200"}>
            <div className="bg-[url('/master-card.svg')] w-[70px] h-[42px] "></div>
            <div className="ml-[31px] flex flex-col gap-[10px] ">
                <p className={masterActive ? "font-medium text-[16px] text-white" : "font-medium text-[14px] text-[#3C2F2F]"}>Credit card</p>
                <p className="font-medium text-[14px] text-[#808080]">5105 **** **** 0505</p>
            </div>
            <div className="border-white border-[2px] w-5 h-5 rounded-full ml-[65px] flex items-center justify-center">
                <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            </div>
        </div>
    )
}
