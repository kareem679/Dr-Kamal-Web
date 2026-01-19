"use server" 
import Image from "next/image";
import AnimationPartCom from "./Parts/AnimationPartCom";

const CasesCom = async() => {
  return (
    <div className="flex justify-center bg-gradient-to-br from-blue-400 via-white to-blue-500 py-20">
      <AnimationPartCom/>
      <div className="w-full max-w-7xl px-4 reveal">

        <div className="mb-16 text-center ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">حالات</h1>
          <h4 className="text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold text-gray-500">بعض الحالات قبل وبعد</h4>
          <hr className="w-24 mt-6 mx-auto border-4 border-black"/>
        </div>

        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-5 justify-center ">
                <div className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                    <Image className="w-full h-full object-cover md:max-w-[500px]" src="/Images/Case1.png" alt="123" width={450} height={400} />
                </div>
                <div className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                    <Image className="w-full h-full object-cover md:max-w-[500px]" src="/Images/Case2.png" alt="123" width={450} height={400} />
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default CasesCom;
