import React from "react";
import { Link } from "react-router-dom";

const BentoCategories = () => {
    return (
        <section className="bg-black py-24 pb-12">
            <div className="container mx-auto px-6">
                
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[2px] bg-white"></span>
                        <p className="text-white text-sm font-black uppercase tracking-[0.3em] opacity-60">
                            Curated Selection
                        </p>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white font-heading tracking-tighter">
                        World Class <span className="opacity-40">Categories</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

                    {/* CARD 1: EARPHONE (1x1, Dark Emerald) */}
                    <div className="group relative rounded-[2.5rem] overflow-hidden aspect-square flex flex-col justify-end p-8 transition-all duration-700 bg-gradient-to-tr from-white/[0.03] to-black border border-white/5 hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                        
                        <div className="relative z-20 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Premium Audio</p>
                            <h3 className="text-white text-3xl font-black font-heading tracking-tight leading-none mb-4">
                                Personal <br /> Immersive
                            </h3>
                            <Link to="/products/audio" className="inline-flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Shop Now <span className="text-white opacity-40">→</span>
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
                            alt="Earphone"
                            className="absolute top-0 right-0 w-[80%] object-contain transform translate-x-10 -translate-y-10 group-hover:scale-110 group-hover:-translate-x-0 transition-all duration-700 opacity-60 mix-blend-screen brightness-125"
                        />
                    </div>

                    {/* CARD 2: WEARABLES (1x1, Deep Emerald) */}
                    <div className="group relative rounded-[2.5rem] overflow-hidden aspect-square flex flex-col justify-end p-8 transition-all duration-700 bg-gradient-to-br from-white/[0.05] to-black border border-white/5 hover:border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                        
                        <div className="relative z-20 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Next-Gen</p>
                            <h3 className="text-white text-3xl font-black font-heading tracking-tight leading-none mb-4">
                                Intelligent <br /> Wear
                            </h3>
                            <Link to="/products/wearables" className="inline-flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Shop Now <span className="text-white opacity-40">→</span>
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop"
                            alt="Wearable"
                            className="absolute bottom-0 right-0 w-[90%] object-contain transform translate-x-8 translate-y-8 group-hover:scale-110 group-hover:translate-x-0 transition-all duration-700 opacity-70 mix-blend-screen"
                        />
                    </div>

                    {/* CARD 3: LAPTOP (2x1, Sophisticated Dark) */}
                    <div className="lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-white/[0.02] to-black p-10 flex items-center border border-white/5 hover:border-white/20 transition-all duration-700 min-h-[320px]">
                        <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="relative z-20 w-1/2 space-y-4">
                            <div className="bg-white/5 w-fit px-4 py-1 rounded-full border border-white/10">
                                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Workstation Elite</p>
                            </div>
                            <h3 className="text-white text-5xl font-black font-heading tracking-tighter leading-none">
                                Computing <br /> Power
                            </h3>
                            <Link to="/products/computers" className="bg-white text-black px-8 py-4 rounded-2xl font-black shadow-2xl hover:bg-gray-200 transition-all duration-300 transform opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                                Browse Gear
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop"
                            alt="Laptop"
                            className="absolute right-0 top-0 h-full w-[60%] object-cover transform scale-110 group-hover:scale-100 transition-all duration-1000 opacity-40 mix-blend-screen"
                        />
                    </div>

                    {/* CARD 4: CONSOLE (2x1, True Black) */}
                    <div className="lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden bg-black p-10 flex items-center border border-white/10 hover:border-white/20 transition-all duration-700 min-h-[320px]">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="relative z-20 w-1/2 space-y-4">
                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Virtual Realities</p>
                            <h3 className="text-white text-5xl font-black font-heading tracking-tighter leading-none">
                                Gaming <br /> Universe
                            </h3>
                            <Link to="/products/gaming" className="inline-flex items-center gap-3 text-white font-bold hover:gap-5 transition-all opacity-60 hover:opacity-100">
                                ENTRANCE HERE <span className="text-xl">→</span>
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=600&auto=format&fit=crop"
                            alt="Console"
                            className="absolute right-0 w-[55%] transform translate-x-12 group-hover:translate-x-0 transition-transform duration-1000 opacity-60 mix-blend-screen grayscale"
                        />
                    </div>

                    {/* CARD 5: OCULUS (1x1, Dark Amber) */}
                    <div className="group relative rounded-[2.5rem] overflow-hidden aspect-square flex flex-col justify-end p-8 transition-all duration-700 bg-gradient-to-tr from-[#451a03] to-black border border-white/5 hover:border-orange-500/30">
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                        
                        <div className="relative z-20 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-orange-400 text-xs font-black uppercase tracking-widest">Meta Quest</p>
                            <h3 className="text-white text-3xl font-black font-heading tracking-tight leading-none mb-4">
                                Infinite <br /> Horizon
                            </h3>
                            <Link to="/products/gaming" className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white text-xs font-bold border border-white/10 group-hover:bg-orange-600 transition-colors">
                                View VR
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1622979135240-caa6648190b6?q=80&w=600&auto=format&fit=crop"
                            alt="Oculus"
                            className="absolute top-0 right-0 w-[90%] object-contain transform translate-x-10 -translate-y-10 group-hover:scale-110 group-hover:translate-x-0 transition-all duration-1000 opacity-60 mix-blend-overlay"
                        />
                    </div>

                    {/* CARD 6: SPEAKER (1x1, Slate Glass) */}
                    <div className="group relative rounded-[2.5rem] overflow-hidden aspect-square flex flex-col justify-end p-8 transition-all duration-700 bg-gradient-to-bl from-[#0f172a] to-black border border-white/5 hover:border-blue-500/30">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                        
                        <div className="relative z-20 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-blue-400 text-xs font-black uppercase tracking-widest">Studio Sound</p>
                            <h3 className="text-white text-3xl font-black font-heading tracking-tight leading-none mb-4">
                                Acoustic <br /> Purity
                            </h3>
                            <Link to="/products/audio" className="text-white font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                Discover <span className="text-blue-500">→</span>
                            </Link>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop"
                            alt="Speaker"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] transform rotate-12 group-hover:rotate-0 transition-all duration-700 opacity-40 group-hover:opacity-80 mix-blend-screen"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoCategories;
