'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function VectorLeft() {
  const router = useRouter()
  
  const vectorClickHandler = () => {
    router.back()
  }
  return (
    <>
    <div  className="cursor-pointer">
      <Image onClick={vectorClickHandler} src={"/products/Vector-left.png"} width={17} height={17} alt="Vector-Left" />
    </div>
    </>
  )
}
