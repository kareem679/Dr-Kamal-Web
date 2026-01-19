"use server"
import AnimationPartCom from "./Parts/AnimationPartCom";

const TreatmentSteps = async () => {
  return (
    <div>
      <AnimationPartCom />
      <section className="mt-32 px-5 reveal">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            خطوات العلاج داخل العيادة
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            رحلة علاج واضحة تبدأ بالتشخيص الدقيق وتنتهي بابتسامة صحية ومتناسقة
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl font-bold text-cyan-600 mb-4">01</span>
              <div className="w-4 h-4 bg-cyan-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">الفحص والتشخيص</h3>
              <p className="text-gray-500 text-sm">
                تقييم شامل للأسنان والفكين باستخدام أحدث الأدوات
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl font-bold text-cyan-600 mb-4">02</span>
              <div className="w-4 h-4 bg-cyan-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">خطة العلاج</h3>
              <p className="text-gray-500 text-sm">
                تحديد نوع التقويم المناسب حسب الحالة بدقة
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl font-bold text-cyan-600 mb-4">03</span>
              <div className="w-4 h-4 bg-cyan-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">المتابعة الدورية</h3>
              <p className="text-gray-500 text-sm">
                متابعة منتظمة لضمان تقدم العلاج بالشكل الصحيح
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl font-bold text-cyan-600 mb-4">04</span>
              <div className="w-4 h-4 bg-cyan-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">النتيجة النهائية</h3>
              <p className="text-gray-500 text-sm">
                ابتسامة متناسقة وصحة فموية تدوم طويلًا
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentSteps;
