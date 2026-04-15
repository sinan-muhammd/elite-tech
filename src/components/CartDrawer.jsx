import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";

const CartDrawer = () => {
    const { cartItems, removeFromCart, clearCart, total, isCartOpen, setIsCartOpen } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isCartOpen]);

    const closeCart = () => setIsCartOpen(false);

    const handleCheckout = () => {
        closeCart();
        navigate("/checkout");
    };

    return (
        <>
            {/* BACKDROP */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={closeCart}
            />

            {/* DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[70] transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between p-8 border-b border-gray-50">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black">Cargo</h2>
                        <span className="bg-red-600 text-white px-3 py-1 text-[10px] font-black rounded-full">
                            {cartItems.length}
                        </span>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 text-gray-300 hover:text-black transition-colors"
                    >
                        <X size={24} strokeWidth={2.5} />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-8">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                            <ShoppingBag size={48} strokeWidth={1} className="text-gray-100" />
                            <h3 className="text-xl font-black uppercase tracking-tighter text-black">Cargo IS Empty</h3>
                            <p className="text-gray-400 text-xs font-black uppercase tracking-widest max-w-[180px]">Add Project Items to begin the mission.</p>
                            <button
                                onClick={closeCart}
                                className="px-10 py-4 bg-black text-white font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl active:scale-95"
                            >
                                START PROJECT
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6 group">
                                    <div className="w-24 h-24 bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="flex justify-between items-start gap-4">
                                            <h4 className="text-sm font-black uppercase tracking-tighter text-black leading-tight flex-1 line-clamp-2">
                                                {item.name}
                                            </h4>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-200 hover:text-red-600 transition-colors"
                                            >
                                                <Trash2 size={16} strokeWidth={2.5} />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] font-black tracking-widest uppercase text-gray-300 bg-gray-50 px-2.5 py-1">
                                                    QTY: {item.quantity}
                                                </span>
                                            </div>
                                            <span className="font-black text-base text-black tracking-tight italic">₹{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                {cartItems.length > 0 && (
                    <div className="p-8 border-t border-gray-50">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Cargo Value</span>
                            <span className="text-3xl font-black text-black tracking-tighter leading-none italic">₹{total}</span>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full flex items-center justify-center gap-4 bg-black text-white py-5 font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:bg-red-600 transition-all active:scale-95"
                        >
                            Complete Mission
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                        
                        <div className="mt-6 flex justify-center">
                            <button onClick={clearCart} className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-200 hover:text-red-600 transition-all">
                                Wipe Cargo Manifest
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
