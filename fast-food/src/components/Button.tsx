interface Prp {
    children : React.ReactNode;
    color? : string;
}

export default function Button({children,color} : Prp) {
  return (
    <div className={`h-[45px] text-[14px] px-5 py-2 flex items-center justify-center rounded-[17px] ${color ? color : 'bg-[#F3F4F6] text-[#6A6A6A]'}`}>
      {children}
    </div>
  )
}
