"use server"
import Hero from "@/app/Components/Hero";
import AnimationPartCom from "@/app/Components/Parts/AnimationPartCom";

const page = async () => {
  return (
    <div>
      <AnimationPartCom/>
      <div className="reveal">
        <Hero
          Title="من هو الدكتور كمال خضر؟"
          Subtitle="الزماله البريطانيه لتقويم الأسنان بالكلية الملكية بادنبره"
        />
      </div>
      <section className=" py-16 reveal">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            من هو الدكتور كمال؟
          </h2>
          <p className="text-center text-blue-700 italic mb-12">
            {" "}
            يؤمن الدكتور كمال بأن الابتسامة الجميلة قادرة على تغيير حياة
            الإنسان. مهمته هي تقديم{" "}
            <span className="font-semibold">
              {" "}
              رعاية أسنان عالية الجودة وخالية من الألم{" "}
            </span>{" "}
            بلمسة شخصية.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                لماذا يثق المرضى بالدكتور كمال
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>👨‍⚕️ خبرة تزيد عن 12 عامًا</li>
                <li>🦷 أحدث التقنيات</li>
                <li>😊 لطيف مع الكبار والصغار</li>
                <li>🧼 تعقيم صارم</li>
                <li>⏰ يحترم وقتك</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                By the Numbers
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>🫶 أكثر من 100 مريض سعيد</li>
                <li>✅ أكثر من 80 علاج ناجح</li>
                <li>⭐ رضا المرضى بنسبة 99%</li>
                <li>😁 أكثر من 12 عامًا من الابتسامات</li>
              </ul>
            </div>
          </div>

          <blockquote className="mt-12 text-center text-blue-800 italic text-lg md:text-xl max-w-2xl mx-auto">
            "العلاج بعناية، لا بخوف. أعتقد أن كل زيارة لطبيب الأسنان يجب أن تكون
            مريحة وخالية من التوتر."
          </blockquote>


        </div>
      </section>
    </div>
  );
};

export default page;
