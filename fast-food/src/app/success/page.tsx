import Button from "@/components/Button";
import Link from "next/link";

export default function success() {
    return (
        <div className="bg-[#d2d2d2] flex justify-center items-center h-screen w-full">
            <div className=" bg-[#FFFF] rounded-[20px] flex flex-col items-center justify-start mx-[50px] w-full h-[325px] pt-5">
                <span className="w-17 h-17 rounded-full bg-red-500 text-white flex justify-center items-center text-[40px] font-bold">✓</span>
                <p className="text-red-600 text-[30px] font-bold mt-5">Success !</p>
                <p className="text-[14px] mt-3 font-normal text-[#808080] mx-[60px] text-center">Your payment was successful. A receipt for this purchase has been sent to your email.</p>
                <Link href={"/main"}>
                    <Button color="bg-red-500 text-white mt-4 w-40">
                        Go Back
                    </Button>
                </Link>
            </div>
        </div>
    )
}
