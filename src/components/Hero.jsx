import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen gap-24">
      <div className="flex flex-row justify-center place-items-center gap-24 p-24  ">
        <div className="flex flex-row justify-center items-center w-1/2 ">
          <img
            className="rounded-full"
            src="https://github.com/rohan-kulkarni-25.png"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-16">
          <span className="text-4xl ">&mdash; Hello, I'm Rohan 👋</span>
          <div className="flex flex-col gap-4">
            <span className="text-8xl  font-bold">Software</span>
            <span className="font-bold text-8xl font-mono"> Developer</span>
            <span className="text-4xl italic relative">
              embarking on the DevOps Journey 🛳
            </span>
          </div>
          <div className="flex flex-row gap-12 ">
            <button className="border-blue-300 border hover:bg-blue-500 hover:text-white  p-4 rounded-2xl text-xl shadow-xl">
              📄 Download Resume
            </button>
            <button className="border-blue-300 border hover:bg-blue-500 hover:text-white  p-4 rounded-2xl text-xl shadow-xl">
              📩 Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 w-fit mx-auto p-8 rounded-2xl text-center text-2xl ">
        Fusing Passion with Community: Co-Creating Experiences at
        <span className="font-bold italic"> React India </span>
        and Sparking Innovation with
        <span className="font-bold italic"> Hack The League</span>.
      </div>
    </div>
  );
};

export default Hero;
