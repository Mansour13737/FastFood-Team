'use client'
import { useState } from "react";



interface Items {
    id: number;
    title: string;
    img: string;
}

export default function CustomStuff({ item }: { item: Items }) {

    const [isChoosed,setIsChoosed] = useState<boolean>(true)

     function chooseHndler() {
        setIsChoosed(!isChoosed)
    }
    return (
        <div className="w-[80px] pb-2 flex flex-col bg-[#3C2F2F] items-center justify-start rounded-[8px]  text-white p-1 lg:w-[120px] lg:pb-4 lg:rounded-[16px] lg:p-3 xl:w-[140px] xl:pb-6 xl:rounded-[20px] xl:p-4">
            <div className="bg-white w-full rounded-[5px] flex justify-center items-center lg:rounded-[12px] xl:rounded-[16px]">
                <div
                    className="w-[50px] h-[40px] bg-no-repeat bg-contain bg-center lg:w-[80px] lg:h-[64px] xl:w-[100px] xl:h-[80px]"
                    style={{ backgroundImage: `url(${item.img})` }}
                ></div>
            </div>
            <div className="text-[10px] text-center mt-1 lg:text-[14px] lg:mt-2 xl:text-[16px] xl:mt-3">{item.title}</div>
            <div onClick={chooseHndler} className="mt-1">
                <span className={isChoosed?`bg-red-500 p-1 rounded-full h-[18px] w-[18px] flex justify-center items-center pb-[5px] text-center pl-[4px] text-[13px] transition-all duration-100 ` :"bg-green-500 p-1 h-[18px] w-[18px] rounded-full flex justify-center items-center text-[9px] content-center text-center pl-[5px] transition-all duration-100" }>{isChoosed ? "+" : "✓"}</span>
            </div>
            
        </div>
    );
}
