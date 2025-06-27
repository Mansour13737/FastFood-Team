import Button from "@/components/Button";
import SearchButton from "@/components/SearchButton";
import VectorLeft from "@/components/VectorLeft";
import Image from "next/image";

export default function UserProfile() {
    return (
        <div className='bg-radial relative z-10 from-[#FF2A9D] to-[rgb(239,42,57)] h-screen w-full pt-[161px]'>
            <div className='flex z-10 justify-between items-center absolute top-6 w-full px-5 '>
                <VectorLeft />
                <SearchButton />
            </div>
            <Image src={'/products/1.png'} id="food-1" width={130} height={130} alt="pic" className="absolute top-1 scale-150 -left-4 z-0 opacity-50" />
            <Image src={'/products/2.png'} id="food-2" width={130} height={130} alt="pic" className="absolute top-9 -right-4 z-0 opacity-50" />

            <div id="girl" className="absolute z-30 bg-[url('/girl.png')] rounded-2xl w-[150px] bg-no-repeat bg-contain bg-center top-[68px] right-[50%] translate-x-[50%] h-[150px]"></div>
            <div id="form" className="bg-white w-full z-20 h-screen rounded-[35px] flex flex-col  ">
                <div className=" gap-8 flex flex-col w-full justify-center items-center mt-[115px]">
                    <div className="relative w-[80%]">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=" "
                            className="peer pl-3 shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] scale-y-115 w-full rounded-[10px] border border-gray-400 focus:ring-2 outline-0 focus:ring-gray-200 transition-all duration-200"
                        />
                        <label
                            htmlFor="name"
                            className="transition-all duration-200 z-10 absolute left-4 top-1/2 transform -translate-y-[14px] bg-white text-sm
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700
        peer-focus:top-[2px] peer-focus:text-gray-400 px-[2px]"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative w-[80%]">
                        <input
                            type="text"
                            name="name"
                            id="Email"
                            placeholder=" "
                            className="peer pl-3 shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] scale-y-115 w-full rounded-[10px] border border-gray-400 focus:ring-2 outline-0 focus:ring-gray-200 transition-all duration-200"
                        />
                        <label
                            htmlFor="Email"
                            className="transition-all duration-200 z-10 absolute left-4 top-1/2 transform -translate-y-[14px] bg-white text-sm
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700
        peer-focus:top-[2px] peer-focus:text-gray-400 px-[2px]"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative w-[80%]">
                        <input
                            type="text"
                            name="name"
                            id="Delivery-address"
                            placeholder=" "
                            className="peer pl-3 shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] scale-y-115 w-full rounded-[10px] border border-gray-400 focus:ring-2 outline-0 focus:ring-gray-200 transition-all duration-200"
                        />
                        <label
                            htmlFor="Delivery-address"
                            className="transition-all duration-200 z-10 absolute left-4 top-1/2 transform -translate-y-[14px] bg-white text-sm
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700
        peer-focus:top-[2px] peer-focus:text-gray-400 px-[2px]"
                        >
                            Delivery address
                        </label>
                    </div>
                    <div className="relative w-[80%]">
                        <input
                            type="password"
                            name="name"
                            id="Password"
                            placeholder=" "
                            className="peer pl-3 shadow-[0.5px_0.5px_0.5px_0.5px_rgba(0,0,0,0.3)] h-[40px] scale-y-115 w-full rounded-[10px] border border-gray-400 focus:ring-2 outline-0 focus:ring-gray-200 transition-all duration-200"
                        />
                        <label
                            htmlFor="Password"
                            className="transition-all duration-200 z-10 absolute left-4 top-1/2 transform -translate-y-[14px] bg-white text-sm
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700
        peer-focus:top-[2px] peer-focus:text-gray-400 px-[2px]"
                        >
                            Password
                        </label>
                    </div>

                </div>
                <div className="border-[1px] rounded-[0.2px] w-[80%] mt-13 mx-auto border-[#E8E8E8]"></div>
                <div className="flex justify-between w-[100%] mt-[50px] px-8">
                    <Button color="w-[43%] bg-[#3C2F2F] text-white font-semibold py-6">
                        <div className="flex justify-between w-full">
                            <span>Edit Profile</span>
                            <Image src={'/edit.svg'} width={18} height={18} alt="pink" />
                        </div>
                    </Button>
                    <Button color="w-[43%] bg-white border-2 border-[#EF2A39] text-[#EF2A39] font-bold py-[22px]">
                        <div className="flex gap-5 w-full">
                            <span>Log Out</span>
                            <Image src={'/sign-out.svg'} width={18} height={18} alt="pink" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

