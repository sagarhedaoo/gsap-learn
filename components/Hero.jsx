"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Hero = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 500,
      y: 500,
      duration: 2,
      delay: 1,
      rotate: 720,
    });
  });

  return (
    <main className="h-screen w-full bg-black p-3 ">
      <div
        ref={gsapRef}
        className="box h-[300px] w-[300px] bg-red-400 rounded-lg"
      ></div>
    </main>
  );
};

export default Hero;
