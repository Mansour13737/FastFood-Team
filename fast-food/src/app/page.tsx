import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/main'}>
        <div className="h-screen w-full bg-gradient-to-b from-[#FF939B] to-[#EF2A39] relative flex justify-center">
          <h2 className="font-normal font-lobster absolute top-[220px] text-[60px] text-white">Foodgo</h2>
          <Image src={'/home2.png'} width={150} height={150} alt="Image 1" className="absolute bottom-20 left-0" loading="lazy" />
          <Image src={'/home1.png'} width={150} height={150} alt="Image 1" className="absolute bottom-20 left-[90px]" loading="lazy"/>
        </div>
      </Link>
    </>
  );
}