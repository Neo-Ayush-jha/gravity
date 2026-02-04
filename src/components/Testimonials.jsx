import React, { useEffect, useRef, useState } from "react";
import First from "../assets/Rectangle163561.png";
import Second from "../assets/Rectangle163562.png";
import Third from "../assets/Rectangle163632.png";
const testimonials = [
  {
    text: "NativeSutra completely transformed our home into a space that feels both elegant and comfortable. Their attention to detail and commitment to quality exceeded our expectations.",
    name: "Ritika Mehra",
    city: "New Delhi",
    img: First,
  },
  {
    text: "From concept to completion, the entire journey at NativeSutra was seamless. Their design ideas matched our lifestyle and vision beautifully.",
    name: "Arjun Khanna",
    city: "Gurgaon",
    img: Second,
  },
  {
    text: "The team truly understood our taste and delivered a home that feels warm, modern, and timeless.",
    name: "Neha Sharma",
    city: "Mumbai",
    img: Third,
  },
];

const slides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

function Testimonials() {
  const [index, setIndex] = useState(1);
  const sliderRef = useRef(null);
  const slideWidth = 360;

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (!sliderRef.current) return;

    if (index === slides.length - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    }
  }, [index]);

  return (
    <section className="bg-[#f5efe6] py-28 overflow-hidden">
      <div className="mx-auto px-14 flex gap-20">
        <div className="w-[35%] flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-light text-[#1a1a1a] mb-6">
              What Our <br /> Clients Say
            </h2>
            <p className="text-sm text-[#6a6a6a] max-w-xs leading-relaxed">
              Hear from those who’ve experienced our design journey and
              transformation firsthand.
            </p>
          </div>

          <div className="border-t border-[#e2d8c8] my-10" />

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#4f5b45] text-white text-lg"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-[#d8cfbf] text-lg"
            >
              →
            </button>
          </div>
        </div>

        <div className="w-[65%] overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
            }}
          >
            {slides.map((item, i) => (
              <div
                key={i}
                className="min-w-[340px] bg-[#fbf6ee] border border-[#e6ddcf] p-8"
              >
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-12">
                  {item.text}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-[#777]">{item.city}</p>
                    </div>
                  </div>

                  <span className="text-6xl text-[#d8d0c2]">”</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
