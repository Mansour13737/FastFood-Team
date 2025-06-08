import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-b from-[#FF939B] to-[#EF2A39] relative flex justify-center">
        <h2 className="font-normal font-lobster absolute top-[220px] text-[60px] text-white">Foodgo</h2>
        <Link href={'/main'} className="absolute bottom-0 left-0">
          <div className="w-[200px] h-[200px] flex items-center justify-center cursor-pointer">
            <Image src={'/home2.png'} width={150} height={150} alt="Image 1" />
          </div>
        </Link>
        <Link href={'/main'} className="absolute bottom-0 left-[90px]">
          <div className="w-[200px] h-[200px] flex items-center justify-center cursor-pointer">
            <Image src={'/home1.png'} width={150} height={150} alt="Image 1" />
          </div>
        </Link>
      </div>
    </div>
  );
}