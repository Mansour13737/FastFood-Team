import Link from "next/link"
import Image from "next/image"
export default function Main() {
  return (
    <div className="h-screen w-full bg-white flex flex-col relative ">
      <div className="absolute bottom-0 mx-auto bg-[url('/main-footer.png')] bg-cover bg-center w-full h-[50px] justify-between flex">
        <div className="w-[38%] h-full flex justify-between items-center gap-10 px-[22px]">
          <Link href={'/'} className="w-fit h-fit">
            <Image src={'/home.png'} alt="home" width={17} height={17} />
          </Link>
          <Link href={'/'} className="w-fit h-fit">
            <Image src={'/user.png'} alt="home" width={17} height={17} />
          </Link>
        </div>
        <div className="w-[38%] h-full flex justify-between items-center gap-10 px-[22px]">
          <Link href={'/'} className="w-fit h-fit">
            <Image src={'/comment.png'} alt="home" width={17} height={17} />
          </Link>
          <Link href={'/'} className="w-fit h-fit">
            <Image src={'/heart.png'} alt="home" width={17} height={17} />
          </Link>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center absolute mx-auto bottom-6">
        <Link href={'/'}>
          <Image src={'/plus.png'} width={80} height={80} alt="plus" />
        </Link>
      </div>
    </div>
  )
}
