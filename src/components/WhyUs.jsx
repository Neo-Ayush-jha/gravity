import React from "react";
import InteriorImg from "../assets/Rectangle163561.png";

function WhyUs() {
  return (
    <section className="bg-[#f5efe6] h-screen pt-24">
      <div className="relative flex">

        <div className="w-full lg:w-[55%] px-12 md:px-20 flex flex-col justify-center pt-8">
          <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-4">
            Why Partnering <br /> With Us?
          </h2>

          <p className="text-[#555555] text-base md:text-lg leading-relaxed mb-4 font-light max-w-xl">
            We bring the passionate and motivated, skilled and talented business
            owners, leaders and entrepreneurs together for mutual benefits,
            win-win opportunities, creating a more ambitious and sustainable
            economy.
          </p>

          <div className="mb-4">
            <h4 className="text-[#1a1a1a] text-lg font-semibold mb-2">
              You should contact us if you are:
            </h4>

            <ul className="list-disc pl-6 space-y-3 text-[#555555] text-base max-w-xl">
              <li>
                Passionate about what you do and bringing the best outcomes to
                your clients
              </li>
              <li>Leaders in your industry</li>
              <li>Sharing the same target market with us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1a1a1a] text-lg font-semibold mb-4">
              How it works?
            </h4>

            <ul className="list-disc pl-6 space-y-3 text-[#555555] text-base max-w-xl">
              <li>Fill the vendor form below with all your details</li>
              <li>We will contact you back as soon as we can</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 h-full w-[45vw]">
          <img
            src={InteriorImg}
            alt="Interior Design"
            className="h-[700px] w-full object-cover pb-8"
          />
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
