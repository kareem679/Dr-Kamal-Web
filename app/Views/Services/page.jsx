"use server";
import CardsCom from "@/app/Components/CardsCom";
import Hero from "@/app/Components/Hero";
import AnimationPartCom from "@/app/Components/Parts/AnimationPartCom";

const page = async () => {
  const FirstCardsList = [
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
      Name: "علاج العضه المفتوحه والعميقه",
      Image: "/Images/Services/Maskgroup-1.png",
      Info: "يُستخدم هذا العلاج لتصحيح مشكلات العضة المفتوحة أو العميقة، والتي قد تؤثر على المضغ والكلام وصحة الأسنان، ويتم ذلك من خلال خطط تقويمية مخصصة لكل حالة.",
    },
    {
      Name: "تصحيح الابتسامه اللثويه",
      Image: "/Images/Services/Smile.jpg",
      Info: "يهدف إلى تعديل ابتسامة اللثة (Gummy Smile) بحيث يظهر جزء مناسب من الأسنان ويقل ظهور اللثة لتحسين الشكل الجمالي للابتسامة.",
    },
    {
      Name: "علاج بروز الفك",
      Image: "/Images/Services/Maskgroup.png",
      Info: "علاج بروز الفك يهدف إلى تحسين توازن الوجه وتصحيح وضع الفك العلوي أو السفلي باستخدام تقويم الأسنان أو خطط علاج متقدمة، مما يساعد على تحسين المظهر العام ووظيفة المضغ والنطق.",
    },

  ];
  const CardsList = [
    {
      Name: "تقويم معدني",
      Image: "/Images/Services/braces/Metalbraces.jpg",
      Info: "التقويم المعدني هو النوع الكلاسيكي والأكثر شيوعًا، يتكون من أسلاك معدنية وأقواس تثبت على الأسنان لتصحيح مشاكل الإطباق وزحمة الأسنان بفعالية عالية.",
    },
    {
      Name: "تقويم شفاف",
      Image: "/Images/Services/braces/TransparentOrthodontics.jpg",
      Info: "التقويم الشفاف عبارة عن أقواس بلاستيكية شفافة قابلة للإزالة، يهدف لتصحيح ترتيب الأسنان بشكل دقيق مع الحفاظ على مظهر أنيق وغير واضح أثناء ارتدائه.",
    },
    {
      Name: "تقويم داخلي",
      Image: "/Images/Services/braces/InBraces.jpg",
      Info: "التقويم الداخلي يكون مثبتًا على الجهة الداخلية للأسنان تجاه اللسان، فهو غير ظاهر من الخارج ويعالج جميع مشاكل الإطباق وزحمة الأسنان، لكنه يحتاج عناية خاصة للنظافة والنطق.",
    },
    {
      Name: "تقويم سيراميك",
      Image: "/Images/Services/braces/Ceramicteethbraces.jpg",
      Info: "التقويم السيراميكي يشبه المعدني لكن الأقواس بلون الأسنان أو شبه شفاف، يوازن بين الفعالية والمظهر الجمالي، مناسب لمن يريد تقويم أقل وضوحًا.",
    },
  ];

  return (
    <div>
      <AnimationPartCom />
      <Hero
        Title="الخدمات"
        Subtitle="نقدم لك كل خدمات الأسنان بأحدث التقنيات وعلى أعلى مستوى"
      />
      {/* Services */}
      <div className="mt-20 reveal">
        <h2 className="text-5xl font-bold text-right  w-6/7 m-auto">
          الخدمات الرئيسية
        </h2>
        <div className="w-6/7 m-auto  my-10  mt-6">
          <div className="w-20 h-1 bg-blue-500 mt-2 rounded-full ml-auto"></div>
        </div>

        <CardsCom CardsList={FirstCardsList} />
      </div>

      <div className="mt-30 reveal">
        <h2 className="text-5xl font-bold text-right  w-6/7 m-auto">
          انواع التقويم
        </h2>

        <div className="w-6/7 m-auto  my-10  mt-6">
          <div className="w-20 h-1 bg-blue-500 mt-2 rounded-full ml-auto"></div>
        </div>

        <CardsCom CardsList={CardsList} />
      </div>
    </div>
  );
};

export default page;
