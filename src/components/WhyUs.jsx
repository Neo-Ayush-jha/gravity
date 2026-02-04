import React from "react";
import InteriorImg from "../assets/Rectangle163561.png";

function WhyUs() {
  return (
    <section className="bg-[#f5efe6] min-h-screen py-12 md:py-16 lg:py-24">
      <div className="relative flex flex-col lg:flex-row">

        <div className="w-full lg:w-[55%] px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight mb-6">
            Why Partnering <br /> With Us?
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-light max-w-xl">
            We bring the passionate and motivated, skilled and talented business
            owners, leaders and entrepreneurs together for mutual benefits,
            win-win opportunities, creating a more ambitious and sustainable
            economy.
          </p>

          <div className="mb-6">
            <h4 className="text-[#1a1a1a] text-base md:text-lg font-semibold mb-3">
              You should contact us if you are:
            </h4>

            <ul className="list-disc pl-6 space-y-2 md:space-y-3 text-[#555555] text-sm md:text-base max-w-xl">
              <li>
                Passionate about what you do and bringing the best outcomes to
                your clients
              </li>
              <li>Leaders in your industry</li>
              <li>Sharing the same target market with us</li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h4 className="text-[#1a1a1a] text-base md:text-lg font-semibold mb-3">
              How it works?
            </h4>

            <ul className="list-disc pl-6 space-y-2 md:space-y-3 text-[#555555] text-sm md:text-base max-w-xl">
              <li>Fill the vendor form below with all your details</li>
              <li>We will contact you back as soon as we can</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 h-full w-[45vw]">
          <img
            src={InteriorImg}
            alt="Interior Design"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
