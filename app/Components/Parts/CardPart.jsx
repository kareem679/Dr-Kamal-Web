"use server"

import Image from "next/image"


const CardPart = async ({ItemName,ItemImage,ItemInfo}) => {
  return (
    <div className="flex flex-col gap-10 rounded-2xl sm:p-6  p-4 bg-white  border border-cyan-100 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl hover:bg-cyan-200 w-full max-w-sm ">
        <Image className="rounded-xl object-cover w-full h-[200px] sm:h-[230px]" src={ItemImage} alt="123" width={500} height={400}/>

        <div className="flex flex-col gap-5 h-1/2 justify-between">
            <h2 className="text-3xl font-bold text-right">{ItemName}</h2>
            <p className="text-right text-lg">{ItemInfo}</p>
        </div>
    </div>
  )
}

export default CardPart