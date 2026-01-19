"use server"

import AnimationPartCom from "./Parts/AnimationPartCom";
const Testimonials = async () => {
  const testimonials = [
    {
      name: "أحمد سامي",
      text: "العيادة ممتازة والخدمة رائعة، د/ كمال محمود جعل ابتسامتي أفضل بكثير. تجربة احترافية من أول زيارة.",
    },
    {
      name: "منة خالد",
      text: "حببت اهتمام الفريق بكل التفاصيل، التقويم تم بطريقة سلسة ومريحة جدًا للأطفال.",
    },
    {
      name: "محمد علي",
      text: "النتائج فاقت توقعاتي، الابتسامة الآن متناسقة وجميلة، وأنصح أي حد يبحث عن تقويم احترافي يزور العيادة.",
    },
  ];

  return (
    <section className="py-28  px-5 mt-15 reveal">
      <AnimationPartCom/>
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            آراء مرضانا
          </h2>
          <div className="w-24 h-[4px] bg-cyan-600 mt-5 rounded-full"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 border border-gray-200 rounded-xl bg-white hover:bg-gray-200 hover:-translate-y-5 transition shadow-md">
              <span className="text-cyan-600 text-3xl font-bold tracking-wider">❝</span>
              <p className="text-gray-800 text-lg leading-relaxed font-semibold">{t.text}</p>
              <h3 className="text-right text-gray-900 text-xl font-bold">{t.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
