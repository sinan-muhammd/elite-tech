import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "https://i.pinimg.com/736x/04/fe/40/04fe409f15e9d741bc017075d8e4031c.jpg",
    title: "FASHION COLLECTION",
    subtitle: "Discover Trendy Styles",
    button: "Shop Fashion",
    link: "/products/fashion "
  },
 {
  image: "https://design-milk.com/images/2021/06/PENDA-Collection-Oiside-Featured-Image.jpg",
  title: "FURNITURE COLLECTION",
  subtitle: "Design Your Perfect Space",
  button: "Shop Furniture",
  link: "/products/home&Furniture "
},
  {
    image: "https://i.pinimg.com/1200x/e0/7f/2d/e07f2d5df03727883d854fa8846dcd89.jpg",
    title: "Laptops",
    subtitle: "Upgrade Your Tech",
    button: "Buy Now",
    link: "/products/Electronics"
  },
  {
    image: "https://i.pinimg.com/1200x/5e/f5/f0/5ef5f027c4513cc540bda7431b5ccede.jpg",
    title: "Nike shoes",
    subtitle: "Level Up Your",
    button: "BUY NOW",
    link: "/products/fashion "
  },
];

const PhloxHero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">

            {/* IMAGE */}
            <img
              src={slide.image}
              alt="banner"
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 font-serif bg-black/40"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center font-serif justify-center text-gray-200 text-center px-4">

              {/* TITLE */}
              <h1
                className={`text-3xl md:text-6xl font-serif font-black tracking-tight transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {slide.title}
              </h1>

              {/* SUBTITLE */}
              <p
                className={`mt-4 text-sm md:text-xl font-serif text-white/80 transition-all duration-700 delay-200 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {slide.subtitle}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate(slide.link)}
                className={`mt-6 px-8 py-3 rounded-full border border-white text-sm md:text-base font-semibold tracking-wide 
                hover:bg-white hover:text-black transition-all duration-300 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {slide.button}
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-white scale-110" : "bg-white/10"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default PhloxHero;