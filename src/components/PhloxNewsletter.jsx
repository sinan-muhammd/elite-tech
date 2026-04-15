import React from 'react';
import { Send } from 'lucide-react';

const PhloxNewsletter = () => {
    return (
        <section className="bg-black py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-red-600"></div>
                    <span className="text-red-600 font-extrabold uppercase text-xs tracking-[0.2em]"></span>
                    <div className="w-12 h-[2px] bg-red-600"></div>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                     Get 10% Off your
                </h2>
                
                <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-wide uppercase italic">
                  
first order
Join our community to receive early access to new arrivals, exclusive flash sales, and expert style guides across our entire store.
                </p>

                <form className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full max-w-2xl group border-b border-white/10 focus-within:border-red-600 transition-all duration-500">
                    <input 
                        type="email" 
                        placeholder="ENTITY.EMAIL@PROJECT.COM" 
                        className="w-full bg-transparent text-white px-8 py-6 focus:outline-none uppercase text-sm tracking-widest font-black placeholder:text-white/10"
                        required
                    />
                    <button className="w-full sm:w-auto bg-white text-black px-12 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-700 flex items-center justify-center gap-4 group/btn">
                       Subscribe
                        <Send size={18} strokeWidth={2.5} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                    </button>
                </form>

                <div className="mt-16 flex items-center gap-8 opacity-20">
                    {['256-BIT ENCRYPTION', 'SECURE DATA', 'GLOBAL NETWORK'].map((text) => (
                        <span key={text} className="text-[9px] font-black tracking-widest text-white whitespace-nowrap">{text}</span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PhloxNewsletter;
