import Button from "@/components/Button";
import Link from "next/link";

export default function success() {
    return (
        <div className="bg-[#d2d2d2] flex justify-center items-center h-screen w-full">
            <div className=" bg-[#FFFF] rounded-[20px] flex flex-col items-center justify-start mx-[50px] w-full h-[325px] pt-5">
                <span className="w-17 h-17 rounded-full bg-red-500 text-white flex justify-center items-center text-[40px] font-bold">✓</span>
                <h1 className="text-3xl font-bold text-[#3C2F2F] mb-4 lg:text-4xl xl:text-5xl">Order Successful!</h1>
                <p className="text-[14px] mt-3 font-normal text-[#808080] mx-[60px] text-center">Your payment was successful. A receipt for this purchase has been sent to your email.</p>
                <Link href={"/main"} className="bg-[#3C2F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2A1F1F] transition-colors lg:px-12 lg:py-4 lg:text-lg lg:rounded-xl xl:px-16 xl:py-5 xl:text-xl">
                    <Button color="bg-red-500 text-white mt-4 w-40">
                        Go Back
                    </Button>
                </Link>
            </div>
        </div>
    )
}
