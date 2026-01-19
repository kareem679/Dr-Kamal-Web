"use server"
import Image from "next/image";
import Link from "next/link";
import AnimationPartCom from "../Parts/AnimationPartCom";
const Footer = async () => {
  return (
    <footer className="bg-cyan-100 mt-24 reveal">
      <AnimationPartCom/>
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Logo & About */}
          <div>
            <Image
              src="/Images/Logo.png"
              alt="Dr Kamal Logo"
              width={180}
              height={180}
              className="mb-6"
            />

            <p className="text-gray-600 leading-relaxed md:w-3/4">
              نقدم رعاية متخصصة في تقويم الأسنان باستخدام أحدث التقنيات
              لتحسين صحة الابتسامة والمظهر العام بأسلوب احترافي وآمن.
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col md:items-end gap-8">

            {/* Social Icons */}
            <div className="flex justify-center w-1/3 gap-5 text-cyan-700">
              <a target="_blank" href="https://wa.me/201033156066" className="text-4xl hover:text-cyan-900 transition"><i className="fa-brands fa-whatsapp " /></a>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3 text-gray-700 font-medium">
              <Link href="/" className="hover:text-cyan-700 transition">الصفحة الرئيسية
              </Link>
              <Link href="/Views/About" className="hover:text-cyan-700 transition">من هو الدكتور كمال؟
              </Link>
              <Link href="/Views/Services" className="hover:text-cyan-700 transition">خدمات
              </Link>
              <Link href="/Views/Booking" className="hover:text-cyan-700 transition">الحجز
              </Link>
              <Link href="/Views/Testimonials" className="hover:text-cyan-700 transition">الشهادات
              </Link>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-cyan-300" />

        {/* Bottom */}
        <p className="text-center text-gray-600 text-sm">
          جميع الحقوق محفوظة © 2025 | د. كمال خضر لتقويم الأسنان
        </p>

      </div>
    </footer>
  );
};

export default Footer;
