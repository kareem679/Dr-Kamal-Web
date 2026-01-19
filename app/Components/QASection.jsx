"use server";
import { User, Stethoscope } from "lucide-react";
import AnimationPartCom from "./Parts/AnimationPartCom";
const qa = [
  {
    q: "ماهو أفضل سن لزيارة طبيب تقويم الاسنان ?",
    a: "ينصح ان تكون أول زيارة لطبيب تقويم الاسنان ف عمر ٧ سنوات",
  },
  {
    q: "هل يزعج تقويم الاسنان ?",
    a: "غالبا لا يزعج جهاز التقويم  فقط من الممكن أن يشهر المريض بعد الارتياح وقليل من الشد علي الاسنان ف اول ايام بعد تركيب جهاز التقويم",
  },
  {
    q: "هل يسبب امتصاص الاطفال لاصابعهم ضررا علي الاسنان?",
    a: "هيه من العادات السيءه اذا استمرت لفترات طويله والتي تتطلب العلاج ف سن مبكره لتاثيرها علي نمو الفك والتي تؤدي الي بروز الفكين",
  },
  {
    q: "هل هناك علاقه بين ضيق مجري التنفس واعوجاج الاسنان ?",
    a: "نعم الأشخاص الذين يعانون من صعوبه ف التنفس عند النوم يؤثر ذلك علي انتظام الاسنان ويتطلع مراجعهة مرتبطه مع طبيب تقويم الاسنان  وطبيب الأنف والأذن",
  },
  {
    q: "ماهي مدة العلاج التقويم  للاسنان?",
    a: " تتراوح بين ٦ و٣٦ شهر حسب عمر المريض وحاله الاسنان",
  },
  {
    q: "هل تبقي بقع علي اسناني بعد التقويم ?",
    a: "غالبا لايتكون بقع علي الاسنان اذا قمت بالاهتمام بغسيل الاسنان  والاهتمام بصحة الفم طول فتره التقويم",
  },
];

const QASection = async () => {
  return (
    <div className="bg-cyan-50 reveal">
      <AnimationPartCom />
      <section className="max-w-4xl mx-auto px-4 py-20 ">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          💬 أسئلة بنسمعها من مرضانا
        </h2>

        <div className="flex flex-col gap-10">
          {qa.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-gray-200">
                  <User size={18} />
                </div>
                <div className="bg-gray-100 px-5 py-4 rounded-2xl max-w-[80%] shadow-sm animate-fadeIn">
                  <p className="font-medium">{item.q}</p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-cyan-600 text-white px-5 py-4 rounded-2xl max-w-[80%] shadow-md animate-fadeIn delay-150">
                  <p className="font-bold">{item.a}</p>
                </div>
                <div className="p-2 rounded-full bg-cyan-600 text-white">
                  <Stethoscope size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl  mb-4 font-semibold">❓ لسه عندك سؤال</p>
          <a
            target="_blank"
            href="https://wa.me/201033156066"
            className="bg-cyan-600 mt-5 text-white px-8 py-3 text-lg font-semibold rounded-xl hover:bg-cyan-700 hover:-translate-y-2 cursor-pointer transition"
          >
            احجز استشارة دلوقتي
          </a>
        </div>
      </section>
    </div>
  );
};

export default QASection;
