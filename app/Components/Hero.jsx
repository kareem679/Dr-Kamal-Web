"use server"
import AnimationPartCom from "./Parts/AnimationPartCom";
const Hero =  async ({ Title, Subtitle }) => {
  return (
    <div className="reveal h-[70vh] w-full flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white relative overflow-hidden">
      <AnimationPartCom/>
      {/* Title */}
      <h1 className="text-7xl sm:text-6xl md:text-8xl font-extrabold drop-shadow-lg text-center ">{Title}</h1>

      {Subtitle && (<p className="mt-4 text-lg sm:text-2xl md:text-3xl font-light text-center drop-shadow-md  delay-200">{Subtitle}</p>)}

      {/* Optional animated floating circles */}
      <span className="absolute w-32 h-32 bg-white opacity-10 rounded-full top-10 left-10 animate-pulseSlow"></span>
      <span className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-20 right-20 animate-pulseSlow"></span>
      <span className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-1/5 right-2/3 animate-pulseSlow"></span>
      <span className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-3/4 right-1/3 animate-pulseSlow"></span>
    </div>
  );
};

export default Hero;
