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
  //   const container = useRef();

  //   useGSAP(
  //     () => {
  //       gsap.from(".box", {
  //         rotate: 360,
  //         scale: 0,
  //         duration: 1,
  //         opacity: 0,
  //         delay: 0.5,
  //       });
  //     },
  //     { scope: container }
  //   );

  return (
    <div className="flex justify-between items-center">
      <div className="border w-full p-6 m-5  border-black">Left Column</div>
      <div className="border w-full p-6 m-5 border-black">Right Column</div>
    </div>
  );
};

export default Hero;
