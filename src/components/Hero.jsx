import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Fashion & Footwear",
    subtitle: "From ₹499 | Puma, Nike, Levis & more",
    bgColor: "#FF91A4",
    image: "https://media.istockphoto.com/id/487745566/photo/woman-sitting-on-sofa-with-colorful-shoes-and-bags-shopping.jpg?s=612x612&w=0&k=20&c=pPfwgUbKdFcyoSufzRjGptjPaDFMCPpyJ85hmR2NNXg=",
  },
  {
    id: 2,
    title: "Electronics Sale",
    subtitle: "Mobiles, Laptops, Smart TVs & more",
  bgColor: "#555555",
    image: "https://www.grabatoz.ae/our-vision.jpg",
  },
  {
    id: 3,
    title: "Iphone 17pro",
    subtitle: "From ₹199 | Best quality items",
    bgColor: "#AFC7D8",
    image: "https://www.deccanchronicle.com/h-upload/2025/01/10/1880313-17.webp",
  },
  {
    id: 4,
    title: "Gaming PC Monitors",
    subtitle: "From ₹199 | Best quality items",
    bgColor: "#BFEFFF",
    image: "https://images.samsung.com/is/image/samsung/assets/nz/members/article-assets/gaming-monitors/img-kv-2.jpg?$ORIGIN_JPG$",
  },
  {
    id: 5,
    title: "Home & Furniture",
    subtitle: "From ₹199 | Best quality items",
    bgColor: "#0A0A0A",
    image: "https://cdn.home-designing.com/wp-content/uploads/2022/12/black-couch-living-room.jpg",
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
    <div className="w-full  md:h-[450px] relative overflow-hidden rounded-xl shadow-xl">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transform duration-1000 ease-out 

            ${index === current ? "translate-x-0" : "-translate-x-full"}


          `}
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="h-full flex items-center justify-between px-10">

            {/* LEFT TEXT AREA */}  
            <div className="text-white font-serif  max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {slide.title}
              </h2>

              <p className="text-lg opacity-90 mb-5">{slide.subtitle}</p>

              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition">
                Shop Now
              </button>
            </div>

            {/* RIGHT IMAGE IN WHITE CARD */}
<div className="hidden md:flex p-[10px]">
  <div className="bg-white w-[500px] h-[270px] rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
    <img
      src={slide.image}
      alt={slide.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>


          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-grey text-black w-10 h-10 rounded-full shadow flex items-center justify-center hover:scale-110 transition"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-grey text-black  w-10 h-10 rounded-full shadow flex items-center justify-center hover:scale-110 transition"
      >
        ❯
      </button>

   {/* DOT INDICATORS */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrent(i)}
      className={`w-3 h-3 rounded-full mx-1 transition 
        ${i === current ? "bg-black scale-110" : "bg-gray-400"}
      `}
    ></button>
  ))}
</div>

      </div>
  );
}

export default Hero;
