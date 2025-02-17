'use client'

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const starElements = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 3 + 2;

      return (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationName: "twinkle",
            position: "absolute",
            willChange: "transform, opacity",
          }}
        />
      );
    });
    setStars(starElements);
  }, []);

  return (
    <div className="relative bg-animated-gradient py-36 text-center shadow-lg overflow-hidden h-[700px]">
      {stars}
      <div className="aurora" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4 space-x-3 animate-fade-in">
          <h1 className="text-sm font-semibold font-['sansation'] text-gray-400">
            POWERED BY PANAVERSITY
          </h1>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]" />
        </div>

        <h2 className="text-7xl font-extrabold font-['sansation'] bg-clip-text text-transparent animate-gradient inline-block mb-4 animate-scale-up">
          ENTERPRISE AI AGENT <span className="inline-block">For The Future</span>
        </h2>

        <div className="w-full max-w-lg flex flex-col gap-2 bg-gray-800 p-4 rounded-lg mx-auto text-center items-center justify-center animate-fade-in">
          <div className="text-lg font-['sansation'] text-white text-center w-full flex items-center justify-center">
            <span className="text-purple-400 mr-2">🤖</span>
            <div className="overflow-hidden">
              <Typewriter
                options={{
                  strings: [
                    "Discover how AI can elevate your business.",
                    "Unlock the power of AI for seamless automation.",
                    "Transform your workflow with AI-driven solutions.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: "<span class='text-white animate-pulse'>|</span>",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6 animate-scale-up">
          <Button text="Deploy Your AI Agent" />
          <Button text="Watch Demo" />
        </div>
      </div>
    </div>
  );
};

const Button = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold font-['sansation'] text-white 
                 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg overflow-hidden 
                 transition-all duration-300 hover:bg-white/20 hover:border-white/30 group transform hover:scale-105"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                       translate-x-[-100%] transition-transform duration-[800ms] ease-in-out 
                       group-hover:translate-x-[100%]"></span>
      <span className="absolute inset-0 w-full h-full bg-white/5 opacity-10 blur-lg"></span>
      <span className="absolute inset-0 border border-transparent group-hover:border-white/40 rounded-lg 
                       transition-all duration-300"></span>
    </a>
  );
};

export default Hero;
