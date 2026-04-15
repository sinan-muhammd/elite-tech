import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-[85vh] bg-[#010101] flex flex-col justify-center items-center relative overflow-hidden text-center">
        {/* Subtle background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/5 shadow-2xl">
            <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 font-heading tracking-tight italic uppercase">Collection Empty</h2>
          <p className="text-white/40 mb-8 max-w-sm mx-auto text-lg italic">Your inventory is currently void. Discover and acquire premium assets.</p>

          <Link to="/" className="group relative px-12 py-4 bg-white text-black font-black uppercase italic tracking-[0.2em] text-xs rounded-full shadow-2xl hover:bg-gray-200 transition-all duration-500 inline-flex items-center gap-3">
            Begin Acquisition
            <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#010101] min-h-screen relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[2px] bg-white italic"></div>
            <p className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase italic">Procurement Manifest</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tighter italic uppercase">Your Collection</h1>
          <p className="text-white/40 mt-2 font-medium italic">{cartItems.length} {cartItems.length === 1 ? 'asset' : 'assets'} in your inventory</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT: Cart Items List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-white/[0.03] border border-white/5 rounded-3xl shadow-2xl group relative transition-all duration-500 hover:border-white/10">

                {/* Abstract background shape for image */}
                <div className="relative w-full sm:w-36 h-36 bg-black/40 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 border border-white/5">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/[0.03] rounded-full"></div>
                  <img src={item.image} alt={item.name} className="h-28 w-28 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1 italic cursor-pointer hover:text-white transition-colors" onClick={() => navigate(`/product/${item.id}`)}>{item.category || "Premium"}</p>
                    <h2 className="text-2xl font-black text-white italic tracking-tighter group-hover:text-white/80 transition-all cursor-pointer line-clamp-1" onClick={() => navigate(`/product/${item.id}`)}>{item.name}</h2>
                    <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mt-3 inline-block bg-white/5 px-4 py-1.5 rounded-full border border-white/5 italic">Quantity: {item.quantity}</p>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between mt-6 sm:mt-0">
                    <p className="font-black text-3xl text-white italic tracking-tighter">₹{item.price}</p>

                    {/* Stylish Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-red-500 hover:bg-red-500/5 px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 mt-4 italic"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Purge Asset
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/[0.03] border border-white/5 shadow-2xl rounded-[2.5rem] p-10 sticky top-32">
              <h3 className="text-xl font-black text-white mb-8 font-heading uppercase italic tracking-tighter">Acquisition Value</h3>

              <div className="flex flex-col gap-5 border-b border-white/5 pb-8 mb-8">
                <div className="flex justify-between text-white/40 text-[10px] font-black uppercase tracking-[0.2em] italic">
                  <span>Manifest Total</span>
                  <span className="text-white italic">₹{total}</span>
                </div>
                <div className="flex justify-between text-white/40 text-[10px] font-black uppercase tracking-[0.2em] italic">
                  <span>Global Logistics</span>
                  <span className="text-white italic">Complimentary</span>
                </div>
                <div className="flex justify-between text-white/20 text-[10px] font-black uppercase tracking-[0.2em] italic">
                  <span>Valuations</span>
                  <span className="italic">Provisional</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1 italic">Total Settlement</p>
                  <p className="text-sm text-white/20 uppercase tracking-[0.1em] font-bold italic">Inclusive of all logistics</p>
                </div>
                <span className="text-5xl font-black text-white italic tracking-tighter">₹{total}</span>
              </div>

              <Link to="/checkout" className="w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-[2rem] font-black text-xs uppercase italic tracking-[0.2em] shadow-2xl hover:bg-gray-200 transition-all duration-500 active:scale-95 mb-6">
                Proceed to Checkout
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <button
                onClick={clearCart}
                className="w-full py-2 text-center text-white/20 font-black text-[10px] uppercase tracking-widest italic hover:text-red-500 transition-colors"
              >
                Nullify Entire Manifest
              </button>

              {/* Trust Badges */}
              <div className="mt-12 flex items-center justify-center gap-6 text-white/10">
                <svg className="w-7 h-7 hover:text-white/30 transition-colors" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M22.9 8h-1.5v-1.6c0-2.8-2.3-5.1-5.1-5.1h-0.6c-2.8 0-5.1 2.3-5.1 5.1v1.6H9.1c-1.3 0-2.4 1.1-2.4 2.4v13.5c0 1.3 1.1 2.4 2.4 2.4h13.7c1.3 0 2.4-1.1 2.4-2.4v-13.5C25.3 9.1 24.2 8 22.9 8z M12.6 6.4c0-1.7 1.4-3.1 3.1-3.1h0.6c1.7 0 3.1 1.4 3.1 3.1V8h-6.8V6.4z M23.3 23.9c0 0.2-0.2 0.4-0.4 0.4H9.1c-0.2 0-0.4-0.2-0.4-0.4V10.4c0-0.2 0.2-0.4 0.4-0.4h1.5v2.8c0 0.6 0.4 1 1 1s1-0.4 1-1v-2.8h6.8v2.8c0 0.6 0.4 1 1 1s1-0.4 1-1v-2.8h1.5c0.2 0 0.4 0.2 0.4 0.4V23.9z"></path>
                </svg>
                <svg className="w-7 h-7 hover:text-white/30 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <svg className="w-7 h-7 hover:text-white/30 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
