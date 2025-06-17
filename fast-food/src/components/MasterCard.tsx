

export default function MasterCard() {

    return (
        <div className="mx-5 bg-[#3C2F2F] rounded-[20px] mt-[15px] h-[80px] pr-5 pl-[18px] flex items-center">
            <div className="bg-[url('/master-card.svg')] w-[70px] h-[42px] "></div>
            <div className="ml-[31px] flex flex-col gap-[10px] ">
                <p className="font-medium text-[14px] text-white">Credit card</p>
                <p className="font-medium text-[14px] text-[#808080]">5105 **** **** 0505</p>
            </div>
            <div className="border-white border-[2px] w-5 h-5 rounded-full ml-[65px] flex items-center justify-center">
                <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            </div>
        </div>
    )
}
