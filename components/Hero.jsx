"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Hero = () => {
  const gsapRef = useRef();

  //   useGSAP(() => {
  //     gsap.from(gsapRef.current, {
  //       //   x: 500,
  //       //   y: 500,
  //       duration: 2,
  //       delay: 1,
  //       rotate: 360,
  //     });
  //   });
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <main className="h-full w-full bg-black flex justify-evenly items-center p-[20px]">
      <div
        ref={container}
        className="container1 p-[20px] border-2 border-white rounded-lg"
      >
        <div className="circle h-[300px] w-[300px] rounded-full bg-gradient-to-r from-white to-blue-700 m-[20px]"></div>
        <div
          ref={gsapRef}
          className="box h-[300px] w-[300px] rounded-lg bg-gradient-to-r from-red-400 to-red-600 m-[20px]"
        ></div>
      </div>
      <div className="container2 p-[20px] border-2 border-white rounded-lg">
        <div className="circle h-[300px] w-[300px] rounded-full bg-gradient-to-r from-white to-blue-700 m-[20px]"></div>
        <div
          //   ref={gsapRef}
          className="box h-[300px] w-[300px] rounded-lg bg-gradient-to-r from-red-400 to-red-600 m-[20px]"
        ></div>
      </div>
    </main>
  );
};

export default Hero;
