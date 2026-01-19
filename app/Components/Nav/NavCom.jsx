"use server";
import Link from "next/link";
import Image from "next/image";
import NavHumPart from "./NavHumPart";

const NavCom = async () => {
  return (
    <div className="fixed w-full z-40">
      <nav className="w-full max-w-7xl mx-auto   bg-cyan-700 m-auto mt-10 rounded-2xl max-h-[100px] min-h-[80px] py-3 px-5 items-center">
        <div className="hidden justify-between lg:flex">
          <ul className="flex items-center w-2/3 justify-between gap-5 ">
            <li>
              <Image
                src="/Images/Logo.png"
                width={120}
                height={120}
                alt="123"
                className="rounded-md"
              />
            </li>
            <div className="flex gap-5">
              <li className="text-md xl:text-lg  font-bold text-white transition-all">
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li className="text-md xl:text-lg font-bold text-white hover:text-cyan-200 transition-all">
                <Link href="/Views/About">من هو الدكتور كمال؟</Link>
              </li>
              <li className="text-md xl:text-lg font-bold text-white hover:text-cyan-200 transition-all">
                <Link href="/Views/Services">خدمات</Link>
              </li>
              <li className="text-md xl:text-lg font-bold text-white hover:text-cyan-200 transition-all">
                <Link href="/Views/Booking">الحجز</Link>
              </li>
              <li className="text-md xl:text-lg font-bold text-white hover:text-cyan-200 transition-all">
                <Link href="/Views/Testimonials">الشهادات</Link>
              </li>
            </div>
          </ul>

          <ul className="flex items-center gap-5">
            <div className="flex items-center  group  ">
              <i className="fa-solid fa-phone text-lg text-white group-hover:text-cyan-100 "></i>
              <h3 className="font-semibold text-lg text-white group-hover:text-cyan-100">
                +20103 315 6066
              </h3>
            </div>

            <Link href="/Views/Booking">
              <button className="bg-cyan-100 cursor-pointer font-bold text-lg rounded-md px-5 py-3 hover:bg-cyan-200 hover:scale-110 hover:text-cyan-900  transition-all ">
               احجز مكانك
              </button>
            </Link>
          </ul>
        </div>
        <div className=" lg:hidden">
          <NavHumPart />
        </div>
      </nav>
    </div>
  );
};

export default NavCom;
