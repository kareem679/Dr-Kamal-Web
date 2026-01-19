"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Slide = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slides flex w-full h-full transition-transform duration-700"
      style={{ transform: `translateX(-${current * 100}%)` }}>
      {images.map((src, index) => (
        <div key={index} className="slide h-full min-w-full relative">
          <Image src={src} alt={`Slide ${index}`} fill className="object-cover brightness-50"/>
        </div>
      ))}
    </div>
  );
};

export default Slide;
