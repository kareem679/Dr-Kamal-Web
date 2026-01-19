"use server";
import Hero from "@/app/Components/Hero";

const page = async () => {
  return (
    <div>
      <Hero
        Title="الحجز"
        Subtitle="حدد موعدك بسهولة وفي وقت يناسبك، واحنا نهتم بالباقي"
      />
    </div>
  );
};

export default page;
