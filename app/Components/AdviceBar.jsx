"use server" 
import AnimationPartCom from "./Parts/AnimationPartCom";

const AdviceBar = async ({ advTitle, info }) => {
  return (
    <div className="text-center mt-20 reveal">
      <AnimationPartCom/>
      {/* العنوان مع أيقونة */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {advTitle}
        </h2>
        <i className="fa-solid fa-grin-beam text-5xl md:text-6xl text-cyan-600"></i>
      </div>

      {/* النص */}
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl m-auto">
        {info}
      </p>
    </div>
  );
};

export default AdviceBar;