"use server";
import Hero from "@/app/Components/Hero";
import Testimonials from "@/app/Components/TestimonialsCom";
import QASection from "@/app/Components/QASection";

const page = async () => {
  return (
    <div>
      <Hero
        Title="الشهادات"
        Subtitle="آراء حقيقية من عملائنا عن تجربتهم معانا"
      />
      <QASection />
      <Testimonials />
    </div>
  );
};

export default page;
