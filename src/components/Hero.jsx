import React from "react";
import HeroImg from "../assets/Rectangle163632.png";
function Hero() {
  return (
    <section
      className="relative w-full h-[480px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <h1 className="text-white text-[54px] font-light tracking-wide">
          Partner With Native Sutra
        </h1>
      </div>

      <div className="absolute bottom-8 left-[80px] z-10">
        <p className="text-[#c7a17a] text-sm tracking-[0.18em]">
          Home <span className="text-white">| Partner With Us</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
