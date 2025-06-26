import SearchButton from "@/components/SearchButton";
import VectorLeft from "@/components/VectorLeft";
import Image from "next/image";

export default function Chat() {
    return (
        <div className="flex flex-col gap-5 pt-5 px-2">
            <div className='flex justify-between items-center top-6 w-full px-5 '>
                <VectorLeft />
                <SearchButton />
            </div>
            <div className="flex flex-col gap-9 px-4 w-full">
                <div className="flex gap-3 items-center">
                    <Image src={'/user-black.svg'} width={40} height={40} alt="pic" />
                    <span className="bg-[#F3F4F6] p-2 rounded-[13px]">Hi, how can I help you?</span>
                </div>
                <div className="flex gap-2 items-center self-end">
                    <span className="bg-[#EF2A39]  text-white px-5 py-2 rounded-[13px] ml-10">Hello, I ordered two fried chicken burgers. can I know how much time it will get to arrive?</span>
                    <Image src={'/user-pink.svg'} width={52} height={52} alt="pic" className="self-start" />
                </div>
                <div className="flex gap-3 items-center">
                    <Image src={'/user-black.svg'} width={40} height={40} alt="pic" className="self-start" />
                    <span className="bg-[#F3F4F6] p-2 rounded-[13px]">Ok, please let me check!</span>
                </div>
                <div className="flex gap-2 items-center self-end">
                    <span className="bg-[#EF2A39]  text-white px-3 py-2 rounded-[13px]">Sure...</span>
                    <Image src={'/user-pink.svg'} width={52} height={52} alt="pic" className="self-start" />
                </div>
                <div className="flex gap-3 items-center">
                    <Image src={'/user-black.svg'} width={40} height={40} alt="pic" className="self-start" />
                    <span className="bg-[#F3F4F6] p-2 rounded-[13px]">It’ll get 25 minutes to arrive to your address</span>
                </div>
                <div className="flex gap-2 items-center self-end">
                    <span className="bg-[#EF2A39]  text-white px-3 py-2 rounded-[13px]">Ok, thanks you for your support</span>
                    <Image src={'/user-pink.svg'} width={52} height={52} alt="pic" className="self-start" />
                </div>
                <div className="flex gap-3 relative h-fit w-full"> 
                    <input type="text" className="border-[.2px] w-full h-13 rounded-[12px] pl-5" />
                    <div className="bg-red-500 p-3 rounded-[12px] absolute right-1 top-[50%] -translate-y-[50%]">
                        <Image src={'/telegram.svg'} width={20} height={20} alt="pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
