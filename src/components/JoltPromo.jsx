import React from 'react';
import { useNavigate } from "react-router-dom";
import promoBg from '../assets/ff.jpg';

const JoltPromo = () => {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate("/fashion"); // 👈 redirect here
    };

    return (
        <section className="bg-gray-100 py-12 md:py-24 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Promo Image */}
                <div className="relative overflow-hidden group aspect-[16/9] md:aspect-square">
                    <img 
                      src={promoBg} 
                      alt="Store Sale" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Promo Content */}
                <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-[48px] h-[2px] bg-red-600"></div>
                        <span className="text-red-600 font-black uppercase text-xs tracking-widest">Promotion</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-tight">
                        Find Your Perfect Look at Jolt's Stylish Now on Tokyo
                    </h2>
                    
                    <p className="text-gray-500 text-lg max-w-lg">
                        Elevate your game with our exclusive limited-edition winter gear.
                        Designed for performance, built for style.
                    </p>

                    <div className="flex items-end gap-12">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Discount Rate</span>
                            <span className="text-5xl md:text-7xl font-black text-black">
                                50% <span className="text-2xl md:text-4xl">Off</span>
                            </span>
                        </div>

                        <button 
                          onClick={handleShopNow}
                          className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Shop Now
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default JoltPromo;