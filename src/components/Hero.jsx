import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Fashion & Lifestyle",
    subtitle: "Curated collections from top premium brands.",
    bgColor: "from-rose-100 to-teal-100",
    primary: "text-rose-600",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Premium Electronics",
    subtitle: "Experience the future with state-of-the-art tech.",
    bgColor: "from-blue-100 to-indigo-100",
    primary: "text-indigo-600",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Apple Ecosystem",
    subtitle: "Seamless integration. Unmatched performance.",
    bgColor: "from-gray-100 to-gray-300",
    primary: "text-gray-900",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Pro Gaming Gear",
    subtitle: "Elevate your setup with high-refresh monitors & rigs.",
    bgColor: "from-purple-100 to-pink-100",
    primary: "text-purple-600",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Modern Living",
    subtitle: "Minimalist furniture for the contemporary home.",
    bgColor: "from-amber-100 to-orange-100",
    primary: "text-amber-700",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
  },
];

function Hero() {
  const navigate = useNavigate();

  // === State ===
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // forward/backward

  // === Auto Slide (Forward → Backward → Forward) ===
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (direction === 1 && prev === slides.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (direction === -1 && prev === 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [direction]);

  // === Manual Buttons ===
  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full md:h-[550px] relative overflow-hidden rounded-3xl shadow-2xl mt-24 mb-12">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-br ${slide.bgColor} ${index === current ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
        >
          {/* Subtle blurred orb background effect */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-white/40 blur-[100px] rounded-full mix-blend-overlay animate-float`}></div>
          <div className={`absolute bottom-0 left-20 w-80 h-80 bg-white/40 blur-[80px] rounded-full mix-blend-overlay animate-float`} style={{ animationDelay: "2s" }}></div>

          <div className="h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 relative z-10">

            {/* LEFT TEXT AREA */}
            <div className={`text-gray-900 max-w-xl transition-all duration-1000 delay-300 ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className={`text-sm font-bold uppercase tracking-widest ${slide.primary} mb-2 block`}>New Collection</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading leading-tight tracking-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                {slide.subtitle}
              </p>

              <button className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-full overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* RIGHT IMAGE IN GLASS CARD */}
            <div className={`hidden md:flex p-6 transition-all duration-1200 delay-500 ${index === current ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95"}`}>
              <div className="relative group perspective">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/60 to-white/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 w-[550px] h-[350px] rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-xl p-2 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/50 text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-white/70 hover:scale-110 transition-all z-20 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/50 text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-white/70 hover:scale-110 transition-all z-20 group"
      >
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-white/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/40 shadow-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full
              ${i === current ? "w-8 h-2.5 bg-gray-900 shadow-md" : "w-2.5 h-2.5 bg-gray-500/50 hover:bg-gray-700"}
            `}
          ></button>
        ))}
      </div>

    </div>
  );
}

export default Hero;
