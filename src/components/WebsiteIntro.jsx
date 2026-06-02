import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, Sparkles, ArrowRight } from "lucide-react";

// Premium high-res imagery for the three showcase categories
const categoriesData = [
  {
    id: "fashion",
    index: "01",
    title: "Modern Apparel",
    description: "Curated collection of high-fashion and minimalist premium models.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "/products/fashion",
    tag: "FASHION & EDITORIAL"
  },
  {
    id: "furniture",
    index: "02",
    title: "Space & Home",
    description: "Minimalist mid-century modern furniture designed for organic living.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "/products/home&Furniture",
    tag: "ARCHITECTURAL INTERIORS"
  },
  {
    id: "electronics",
    index: "03",
    title: "Tech & Gear",
    description: "State-of-the-art consumer technology and hyper-clean studio acoustics.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "/products/Electronics",
    tag: "MINIMALIST DEVICES"
  }
];

const WebsiteIntro = () => {
  const navigate = useNavigate();
  
  // State for preloader
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderFadeOut, setPreloaderFadeOut] = useState(false);

  // State for interactive features
  const [activeCategory, setActiveCategory] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hoveredRow, setHoveredRow] = useState(null);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const leftCanvasRef = useRef(null);

  // 1. PRELOADER TICKER & ANIMATION SEQUENCE (Simplified logo-only for white theme)
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Trigger exit transition
        setTimeout(() => {
          setPreloaderFadeOut(true);
          setTimeout(() => {
            setPreloaderActive(false);
          }, 800); 
        }, 300);
      }
      setLoadingProgress(progress);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // 2. PARALLAX CORRECTION (TRACK MOUSE POSITION WITHIN THE LEFT SECTION)
  const handleLeftMouseMove = (e) => {
    if (!leftCanvasRef.current) return;
    const rect = leftCanvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // Normalized -1 to 1
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // Normalized -1 to 1
    setMousePos({ x, y });
  };

  const handleLeftMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // 3. TRACK SCREEN-WIDE CURSOR POSITION FOR ROW HOVER TOOLTIPS
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  // 4. MAGNETIC PROXIMITY LISTENER FOR THE ENTER EXPERIENCE BUTTON
  const handleContainerMouseMove = (e) => {
    if (!buttonRef.current) return;
    const btn = buttonRef.current.getBoundingClientRect();
    const btnCenterX = btn.left + btn.width / 2;
    const btnCenterY = btn.top + btn.height / 2;

    const distX = e.clientX - btnCenterX;
    const distY = e.clientY - btnCenterY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 140) {
      // Pull toward cursor slightly
      setBtnOffset({
        x: distX * 0.25,
        y: distY * 0.25
      });
      setIsHoveringBtn(true);
    } else {
      setBtnOffset({ x: 0, y: 0 });
      setIsHoveringBtn(false);
    }
  };

  const handleContainerMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
    setIsHoveringBtn(false);
  };

  // 5. SMOOTH SCROLL TRANSITION TO PRODUCTS SECTION
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.85,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      className="relative w-full min-h-[92vh] md:min-h-screen bg-[#faf9f6] text-[#0f0f0f] overflow-hidden flex flex-col justify-between pt-24"
    >
      {/* --- PREMIUM MINIMALIST WHITE PRELOADER OVERLAY --- */}
      {preloaderActive && (
        <div 
          className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-all duration-[800ms] cubic-bezier(0.85, 0, 0.15, 1) ${
            preloaderFadeOut ? "opacity-0 pointer-events-none scale-98" : "opacity-100"
          }`}
        >
          {/* Top Elegant Loading Bar */}
          <div className="absolute top-0 left-0 h-[2.5px] bg-[#0f0f0f] transition-all duration-300" style={{ width: `${loadingProgress}%` }}></div>
          
          <div className="flex flex-col items-center gap-4">
            {/* Clean Logo Only */}
            <h1 className="text-7xl md:text-9xl font-black tracking-[0.25em] text-[#0f0f0f] select-none animate-pulse">
              PHLOX
            </h1>
            
            {/* Minimalist Progress percentage indicator */}
            <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] font-semibold mt-2">
              L O A D I N G &nbsp; {loadingProgress}%
            </span>
          </div>
        </div>
      )}

      {/* --- BACKGROUND DECORATION --- */}
      {/* 1. Low Opacity Infinite Scrolling Text Marquee */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none select-none overflow-hidden h-32 flex items-center z-0 opacity-[0.02]">
        <div className="whitespace-nowrap flex gap-12 font-black uppercase text-[10rem] tracking-widest animate-[marquee_30s_linear_infinite] text-black">
          <span>PHLOX LUXURY CURATIONS &bull; REDEFINING STYLE &bull; EST 2026 &bull; PHLOX EXCLUSIVES &bull;</span>
          <span>PHLOX LUXURY CURATIONS &bull; REDEFINING STYLE &bull; EST 2026 &bull; PHLOX EXCLUSIVES &bull;</span>
        </div>
      </div>

      {/* 2. Soft Ambient Radial Cream Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#dfdcd6]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- MAIN GRID CONTAINER --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full flex-grow py-8">
        
        {/* --- LEFT CANVAS: PARALLAX PHOTO STACK --- */}
        <div 
          ref={leftCanvasRef}
          onMouseMove={handleLeftMouseMove}
          onMouseLeave={handleLeftMouseLeave}
          className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square flex items-center justify-center cursor-pointer select-none"
        >
          {categoriesData.map((cat, index) => {
            const isActive = activeCategory === index;
            
            // Mouse Parallax factor
            const pX = isActive ? mousePos.x * 18 : 0;
            const pY = isActive ? mousePos.y * 18 : 0;
            
            // Rotation shifts based on active state
            let rot = 0;
            let scale = 0.88;
            let opacity = 0.3;
            let zIndex = 10;
            let translateOffset = "0px, 0px";

            if (isActive) {
              rot = mousePos.x * 3.5; 
              scale = 1.0;
              opacity = 1.0;
              zIndex = 30;
            } else {
              if (index === (activeCategory + 1) % 3) {
                rot = 5;
                translateOffset = "25px, 15px";
                zIndex = 20;
                opacity = 0.6;
              } else {
                rot = -7;
                translateOffset = "-25px, -15px";
                zIndex = 10;
                opacity = 0.4;
              }
            }

            return (
              <div
                key={cat.id}
                onClick={() => navigate(cat.link)}
                style={{
                  transform: `translate(${translateOffset}) translate(${pX}px, ${pY}px) scale(${scale}) rotate(${rot}deg)`,
                  zIndex: zIndex,
                  opacity: opacity
                }}
                className="absolute w-[75%] sm:w-[65%] lg:w-[75%] aspect-[3/4] bg-white border border-black/[0.06] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out"
              >
                {/* Visual Label */}
                <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/[0.05] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
                  <span className="text-[9px] font-mono tracking-widest text-black font-bold uppercase">{cat.tag}</span>
                </div>

                {/* Main Visual Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 ${
                    isActive ? "scale-105 hover:scale-110" : "scale-100 filter grayscale-[20%]"
                  }`}
                />

                {/* Light Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-transparent"></div>

                {/* Details Footer */}
                <div className={`absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transition-all duration-500 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  <span className="text-gray-400 text-[10px] font-mono tracking-widest font-bold mb-1 uppercase">
                    Collection {cat.index}
                  </span>
                  <h3 className="text-xl font-black tracking-tight text-[#0f0f0f] mb-2 uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2 font-medium max-w-sm">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- RIGHT CANVAS: TYPOGRAPHY & CATEGORY ROW MENUS --- */}
        <div className="flex flex-col justify-center items-start lg:pl-10">
          
          {/* Subtle Label */}
          <div className="flex items-center gap-3 mb-4 animate-[fadeInUp_0.8s_ease-out]">
            <div className="w-8 h-[2px] bg-black"></div>
            <span className="text-black font-mono tracking-[0.25em] text-[10px] font-bold uppercase flex items-center gap-1.5">
              <Sparkles size={12} className="text-black animate-spin" style={{ animationDuration: '6s' }} />
              Luxury E-Commerce
            </span>
          </div>

          {/* High-End Cinematic Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8 text-[#0f0f0f]">
            THE NEW STANDARD <br />
            OF LUXURY <br />
            SHOPPING
          </h2>

          <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed max-w-md mb-10">
            Welcome to Phlox. Experience a curated approach to design. We collect limited-edition apparel, spaces, and elite gadgets tailored to your refined taste.
          </p>

          {/* Interactive Row Categories List */}
          <div className="w-full border-t border-black/10 flex flex-col mb-10">
            {categoriesData.map((cat, index) => {
              const isActive = activeCategory === index;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => {
                    setActiveCategory(index);
                    setHoveredRow(index);
                  }}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => navigate(cat.link)}
                  className="group relative w-full py-6 border-b border-black/10 flex items-center justify-between cursor-pointer select-none transition-all duration-300 hover:pl-4"
                >
                  {/* Row Hover Background Glow overlay */}
                  <div className="absolute inset-0 bg-black/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className="flex items-center gap-6 z-10">
                    <span className={`font-mono text-xs font-bold transition-colors duration-300 ${
                      isActive ? "text-black font-extrabold" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {cat.index}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                      isActive ? "text-black" : "text-gray-400 group-hover:text-black"
                    }`}>
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 z-10">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      Explore Collection
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-black border-black text-white scale-110" : "border-black/10 text-black/40 group-hover:border-black/40 group-hover:text-black"
                    }`}>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* --- BOTTOM HEADER FOOTER: MAGNETIC BUTTON & STATS --- */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 z-10 bg-[#faf9f6]">
        
        {/* Floating Stats */}
        <div className="flex items-center gap-12 text-left">
          <div>
            <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mb-1">Curation Rate</p>
            <div className="flex items-baseline gap-1 text-black">
              <span className="text-2xl font-black">50%</span>
              <span className="text-xs text-black font-bold uppercase">Off</span>
            </div>
          </div>
          <div className="w-[1px] h-8 bg-black/10"></div>
          <div>
            <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mb-1">Global Shipping</p>
            <div className="flex items-baseline gap-1 text-black">
              <span className="text-2xl font-black">Free</span>
              <span className="text-xs text-black font-bold uppercase">Delivery</span>
            </div>
          </div>
        </div>

        {/* Proximity Magnetic Discover Button */}
        <button
          ref={buttonRef}
          onClick={handleScrollToProducts}
          style={{
            transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
            transition: isHoveringBtn ? "transform 0.1s ease-out" : "transform 0.5s ease-out"
          }}
          className="relative group px-12 py-5 rounded-full overflow-hidden bg-black text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-105"
        >
          {/* Animated Background Slide Layer */}
          <div className="absolute inset-0 bg-[#333333] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10"></div>
          
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
            Explore Collections
            <ArrowDown size={14} className="animate-bounce" />
          </span>
        </button>

      </div>

      {/* Row Tooltip image previews floating behind active cursor */}
      {hoveredRow !== null && (
        <div
          style={{
            left: cursorPos.x + 15,
            top: cursorPos.y + 15,
            pointerEvents: "none"
          }}
          className="fixed z-40 w-32 aspect-[3/4] bg-white border border-black/10 rounded-lg overflow-hidden shadow-2xl animate-fade-in animate-float duration-300 hidden md:block"
        >
          <img
            src={categoriesData[hoveredRow].image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* --- ADD CUSTOM STYLES DIRECTLY IN COMPONENT --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default WebsiteIntro;
