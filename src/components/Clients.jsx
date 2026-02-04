import React from "react";

import Logo1 from "../assets/11.png";
import Logo2 from "../assets/22.png";
import Logo3 from "../assets/33.png";
import Logo4 from "../assets/44.png";
import Logo5 from "../assets/55.png";

function Clients() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

  return (
    <section className="bg-[#f5efe6] py-20 overflow-hidden">
      <div className="relative w-full">

        <div className="flex w-max animate-marquee gap-20">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="h-12 w-auto opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;
