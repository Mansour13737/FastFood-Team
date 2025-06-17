
export default function Visa() {
    return (
        <div className="mx-5 bg-[#F3F4F6] rounded-[20px] mt-[15px] h-[80px] pr-5 pl-[18px] flex items-center">
            <div className="bg-[url('/visa.svg')] bg-no-repeat bg-contain bg-center w-[70px] h-[42px] "></div>
            <div className="ml-[31px] flex flex-col gap-[10px] ">
                <p className="font-medium text-[14px] text-[#3C2F2F]">Credit card</p>
                <p className="font-medium text-[14px] text-[#808080]">3566 **** **** 0505</p>
            </div>
            <div className="border-[#efe7e7] border-[2px] w-5 h-5 rounded-full ml-[65px] flex items-center justify-center">
                <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            </div>
        </div>
    )
}
