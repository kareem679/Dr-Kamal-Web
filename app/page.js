"use server";

import Image from "next/image";
import Slide from "./Components/Parts/Slide";
import CasesCom from "./Components/CasesCom";
import AdviceBar from "./Components/AdviceBar";
import Link from "next/link";
import CardsCom from "./Components/CardsCom";
import TreatmentSteps from "./Components/TreatmentSteps";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/TestimonialsCom";
import AnimationPartCom from "./Components/Parts/AnimationPartCom";



const page = async () => {
  const images = ["/Images/Sliders/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg", "/Images/Sliders/caroline-lm--m-4tYmtLlI-unsplash.jpg", "/Images/Sliders/Bg.jpg"];
  const CardsList = [
    {
      Name: "تقويم للاطفال لتعديل نمو الفكين",
      Image: "/Images/Services/KidBraces.jpg",
      Info: "تقويم الأسنان للأطفال يساعد على توجيه نمو الفكين بشكل صحيح، ويمنع مشاكل ازدحام الأسنان أو سوء الإطباق عند الكبار مستقبلاً.",
    },
    {
      Name: "ترتيب ازدحام الاسنان",
      Image: "/Images/Services/Mouse2.jpg",
      Info: "يهدف هذا العلاج إلى تصحيح ازدحام الأسنان وإعادة ترتيبها داخل الفك لضمان ابتسامة متناسقة ووظيفة مضغ سليمة.",
    },
    {
      Name: "غلق المسافات بين الاسنان",
      Image: "/Images/Services/teeth_gap.png",
      Info: "يعمل هذا الإجراء على سد الفراغات بين الأسنان، سواء بين القواطع الأمامية أو الأسنان الأخرى، للحصول على ابتسامة متناسقة وجمالية.",
    },
    {
      Name: "تصحيح الابتسامه اللثويه",
      Image: "/Images/Services/Smile.jpg",
      Info: "يهدف إلى تعديل ابتسامة اللثة (Gummy Smile) بحيث يظهر جزء مناسب من الأسنان ويقل ظهور اللثة لتحسين الشكل الجمالي للابتسامة.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <AnimationPartCom/>
      <div className="slider w-full h-[90vh] relative overflow-hidden rounded-md shadow reveal">
        <Slide images={images} />
        <div className="absolute z-20 top-1/2 right-[8%] text-right transform -translate-y-1/2 flex flex-col items-end gap-10">
          <h1 className="lg:text-8xl text-6xl lg:w-2/3 font-bold text-white drop-shadow-lg">
            رعاية متكاملة لابتسامتك بمعايير عالمية
          </h1>

          <h2 className="bg-cyan-700/80 rounded-md p-5 text-3xl font-semibold overflow-hidden  text-white">
            أحدث تقنيات تصميم الابتسامة والعلاج التجميلي
          </h2>
        </div>
      </div>

      {/* Who is Dr/Kamal */}
      <div className="flex justify-between  items-center mt-15 bg-white pr-5 md:pr-20 reveal">
        <div className="flex flex-col xl:flex-row gap-20 lg:gap-20 w-full">
          <div className="flex w-full xl:w-1/2 justify-center xl:justify-start items-end   ">
            <Image
              src="/Images/Doctor/DrWithBg2.png"
              className="hidden xl:block  "
              alt="123"
              width={700}
              height={500}
            ></Image>

            <Image
              src="/Images/Doctor/dr3.png"
              alt="Doctor"
              width={400}
              height={300}
              className="block xl:hidden"
            />
          </div>

          <div className="flex flex-col w-full xl:w-1/2">
            <div className="flex flex-col gap-10">
              <h3 className="text-6xl font-bold text-right">
                من هو د/ كمال خضر ؟
              </h3>
              <h2 className="text-4xl font-bold text-right">
                الزماله البريطانيه لتقويم الأسنان بالكلية الملكية بادنبره
              </h2>
              <p className="text-xl text-gray-500 font-semibold leading-13 text-right">
                {" "}
                يتمتع د/ كمال خضر بخبرة واسعة في مجال طب الأسنان، حيث يقدّم
                رعاية طبية متكاملة تعتمد على أحدث التقنيات العالمية مع الاهتمام
                بأدق التفاصيل لضمان راحة المرضى. يحرص الدكتور على تقديم حلول
                علاجية مخصصة لكل حالة، بهدف تحقيق أفضل النتائج والحفاظ على صحة
                وجمال الابتسامة على المدى الطويل.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="flex items-center justify-end gap-4">
                <h2 className="text-2xl">أحدث التقنيات</h2>
                <Image
                  src="/Images/Point.png"
                  width={40}
                  height={40}
                  alt="123"
                ></Image>
              </div>

              <div className="flex items-center justify-end gap-4">
                <h2 className="text-2xl">علاج شخصي</h2>
                <Image
                  src="/Images/Point.png"
                  width={40}
                  height={40}
                  alt="123"
                ></Image>
              </div>

              <div className="flex items-center justify-end gap-4">
                <h2 className="text-2xl">جدولة المواعيد المرنة</h2>
                <Image
                  src="/Images/Point.png"
                  width={40}
                  height={40}
                  alt="123"
                ></Image>
              </div>

              <div className="flex items-center justify-end gap-4">
                <h2 className="text-2xl">رعاية لطيفة للأطفال والبالغين</h2>
                <Image
                  src="/Images/Point.png"
                  width={40}
                  height={40}
                  alt="123"
                ></Image>
              </div>
            </div>

            <div className="flex justify-end mx-5 mt-20">
              <button className="bg-cyan-600 my-5 text-white px-15 py-3 text-xl font-semibold rounded-xl hover:bg-cyan-700 hover:-translate-y-2 transition cursor-pointer ">
                عرض المزيد
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cases */}
      <CasesCom />

      {/* Advice Bar */}
      <AdviceBar
        advTitle="لو عندك أي مشاكل في أسنانك"
        info="العيادة متخصصة في جميع حالات تقويم الأسنان للكبار والأطفال، ترتيب ازدحام الأسنان، غلق المسافات بين الأسنان وتصحيح الابتسامة اللثوية. يستخدم فريقنا أحدث التقنيات العالمية المعتمدة في بريطانيا لضمان أفضل النتائج وأجمل ابتسامة."
      />

      {/* Services */}
      <div className="mt-20 reveal">
        <CardsCom CardsList={CardsList} />
        <div className="w-full flex justify-center">
          <button className="bg-cyan-600 mt-10 text-white px-8 py-3 text-lg font-semibold rounded-xl hover:bg-cyan-700 hover:-translate-y-2 hover:scale-105 cursor-pointer transition duration-300 ">
            <Link href="/Views/Services">View All Services</Link>
          </button>
        </div>
      </div>

      {/* Steps */}
      <TreatmentSteps />

      {/* WhyChoosUs */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

    
    </div>
  );
};

export default page;
