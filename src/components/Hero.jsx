import React from "react";
import HeroImg from "../assets/Rectangle163632.png";
function Hero() {
  return (
    <section
      className="relative w-full h-[400px] md:h-[480px] lg:h-[560px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="absolute bg-black/20 inset-0 "></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <h1 className="text-white text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-light tracking-wide">
          Partner With Native Sutra
        </h1>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-[80px] z-10">
        <p className="text-[#c7a17a] text-xs md:text-sm tracking-[0.12em] md:tracking-[0.18em]">
          Home <span className="text-white">| Partner With Us</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
