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
        <div className="w-[80px] h-fit flex flex-col bg-[#3C2F2F] items-center justify-start rounded-[8px]  text-white p-1">
            <div className="bg-white w-full rounded-[5px] flex justify-center items-center">
                <div
                    className="w-[50px] h-[40px] bg-no-repeat bg-contain bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                ></div>
            </div>
            <div className="text-[10px] text-center mt-1 ">{item.title}</div>
            <div onClick={chooseHndler}>
                <span className={isChoosed?`bg-red-500 p-1 rounded-full h-[18px] w-[18px] flex justify-center items-center` :"bg-green-500 p-1 h-[18px] w-[18px] rounded-full flex justify-center items-center" }>{isChoosed ? "+" : "✓"}</span>
            </div>
            
        </div>
    );
}
