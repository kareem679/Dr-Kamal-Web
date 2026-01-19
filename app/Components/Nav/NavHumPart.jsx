"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavHumPart = () => {
  const [isset, setisset] = useState(false);
  function handleisset() {
    if (isset) {
      setisset(false);
    } else {
      setisset(true);
    }
  }
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image
          src="/Images/Logo.png"
          width={120}
          height={120}
          alt="123"
          className="rounded-md"
        />
      </div>
      <button
        onClick={() => handleisset()}
        className="text-4xl cursor-pointer text-white"
      >
        ☰
      </button>

      <div
        className={`absolute top-0 h-screen -right-100 ${
          isset ? `right-0` : `-right-100`
        } w-1/3 transition-all  bg-cyan-600 z-40 flex flex-col items-center gap-10 py-8 `}
      >
        <li className="self-end mr-5 list-none ">
          <button
            onClick={handleisset}
            className="text-3xl text-white bg-red-600 hover:bg-red-700 transition px-4 py-1 cursor-pointer"
          >
            X
          </button>
        </li>
        <ul className="flex flex-col gap-5 items-center list-none">
          <li
            onClick={() => setisset(false)}
            className="md:text-2xl text-xl font-bold text-white hover:text-cyan-200 transition"
          >
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <hr className="w-full border-t border-gray-400" />
          <li
            onClick={() => setisset(false)}
            className="md:text-2xl text-xl font-bold text-white hover:text-cyan-200 transition"
          >
            <Link href="/Views/About">من هو الدكتور كمال؟</Link>
          </li>
          <hr className="w-full border-t border-gray-400" />
          <li
            onClick={() => setisset(false)}
            className="md:text-2xl text-xl font-bold text-white hover:text-cyan-200 transition"
          >
            <Link href="/Views/Services">خدمات</Link>
          </li>
          <hr className="w-full border-t border-gray-400" />
          <li
            onClick={() => setisset(false)}
            className="md:text-2xl text-xl font-bold text-white hover:text-cyan-200 transition"
          >
            <Link href="/Views/Booking">الحجز</Link>
          </li>
          <hr className="w-full border-t border-gray-400" />
          <li
            onClick={() => setisset(false)}
            className="md:text-2xl text-xl font-bold text-white hover:text-cyan-200 transition"
          >
            <Link href="/Views/Testimonials">الشهادات</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavHumPart;
