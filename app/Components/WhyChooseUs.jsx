"use server"
import AnimationPartCom from "./Parts/AnimationPartCom";
const WhyChooseUs = async () => {
  return (
    <section className="mt-50 px-5 bg-cyan-50 py-28 reveal">
      <AnimationPartCom/>
      <div className="max-w-6xl mx-auto">
        {/* Title */}

        <div className="mb-20 flex justify-between items-center relative">

          {/* Decoration باستخدام circles */}
          <div className="hidden md:flex space-x-4">
            <div className="w-6 h-6 bg-cyan-200 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-cyan-300 rounded-full animate-bounce delay-150"></div>
            <div className="w-5 h-5 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
          </div>

          <div className="flex flex-col items-end z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              لية تختار عيادة د/ كمال محمود
            </h2>
            <div className="w-24 h-[4px] bg-gradient-to-r from-cyan-400 to-cyan-600 mt-5 rounded-full"></div>
          </div>
          
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          <div className="flex flex-col gap-10 text-lg text-gray-700 leading-loose">
            <p>
              بنقدم رعاية متكاملة في تقويم الأسنان تعتمد على التشخيص الدقيق
              والتخطيط الصحيح لكل حالة، باستخدام أحدث التقنيات المعتمدة عالميًا.
            </p>

            <p>
              هدفنا مش بس ترتيب الأسنان، لكن تحسين صحة الفم والوصول لابتسامة
              متناسقة وطبيعية تدوم على المدى الطويل.
            </p>
          </div>


          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <span className="text-cyan-600 text-3xl leading-none">✓</span>
              <p className="text-lg text-gray-800">
                خبرة واسعة في جميع حالات تقويم الأسنان للكبار والأطفال
              </p>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-cyan-600 text-3xl leading-none">✓</span>
              <p className="text-lg text-gray-800">
                استخدام أحدث تقنيات التقويم المعتمدة في بريطانيا
              </p>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-cyan-600 text-3xl leading-none">✓</span>
              <p className="text-lg text-gray-800">
                خطط علاج مخصصة تناسب كل حالة بدقة وراحة
              </p>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-cyan-600 text-3xl leading-none">✓</span>
              <p className="text-lg text-gray-800">
                متابعة دورية مستمرة لضمان أفضل النتائج
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
