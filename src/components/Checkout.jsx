import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Lock, 
  CreditCard, 
  Smartphone, 
  Truck,
  Check,
  ShoppingBag,
  ArrowRight
} from "lucide-react";

const EditorialCheckout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    // Generate a fake Order ID
    const newId = `JLT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderId(newId);

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !showSuccess) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white text-black">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Cart Empty</h2>
        <Link to="/" className="border-2 border-black px-10 py-4 font-bold uppercase hover:bg-black hover:text-white transition-all">
          Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black pt-20 relative">
      
      {/* SUCCESS OVERLAY */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center px-6 animate-in fade-in duration-700">
          <div className="max-w-md w-full text-center">
            {/* Minimalist Check Icon */}
            <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-10 animate-in zoom-in duration-1000">
              <Check size={48} strokeWidth={3} className="text-black" />
            </div>

            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Order <br /> Confirmed
            </h1>
            
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-12">
              Transaction ID: {orderId}
            </p>

            <div className="space-y-4 mb-16">
                <p className="text-sm font-bold uppercase tracking-tight leading-relaxed">
                    Thank you, {formData.firstName}. <br />
                    Your items are being prepared for dispatch. <br />
                    A confirmation email has been sent to <span className="underline">{formData.email}</span>
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <button 
                  onClick={() => navigate("/")}
                  className="w-full bg-black text-white py-6 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black border-2 border-black transition-all flex items-center justify-center gap-3"
                >
                  Continue Shopping <ShoppingBag size={16} />
                </button>
                <button 
                  className="w-full bg-white text-black py-6 font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white border-2 border-black transition-all flex items-center justify-center gap-3"
                >
                  Track Order Status <ArrowRight size={16} />
                </button>
            </div>
          </div>

          <div className="absolute bottom-12 text-[9px] font-black uppercase tracking-[0.5em] text-black/20">
            JOLT STORE © 2024
          </div>
        </div>
      )}

      {/* THE CHECKOUT PAGE GRID (HIDDEN ON SUCCESS IF PREFERRED, OR BLURRED) */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${showSuccess ? 'blur-sm pointer-events-none' : ''}`}>
        
        {/* LEFT SIDE: THE FORM */}
        <div className="px-6 md:px-16 py-12 border-r border-black/5">
          <div className="max-w-xl ml-auto">
            <Link to="/cart" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-12 hover:opacity-50 transition-opacity">
              <ArrowLeft size={14} /> Back to Cart
            </Link>

            <header className="mb-16">
              <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">Checkout</h1>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">Secure Transaction Protocol</p>
            </header>

            <form onSubmit={handlePlaceOrder} className="space-y-16">
              
              {/* SECTION 01: CONTACT */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black">01</span>
                  <h2 className="text-lg font-black uppercase tracking-tight text-black">Contact Information</h2>
                </div>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="EMAIL ADDRESS" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest focus:border-black transition-all bg-transparent"
                />
              </div>

              {/* SECTION 02: SHIPPING */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-black">
                  <span className="text-xs font-black">02</span>
                  <h2 className="text-lg font-black uppercase tracking-tight">Shipping Details</h2>
                </div>
                <div className="grid grid-cols-2 gap-8 text-black">
                  <input type="text" name="firstName" required placeholder="FIRST NAME" onChange={handleChange} className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest bg-transparent" />
                  <input type="text" name="lastName" required placeholder="LAST NAME" onChange={handleChange} className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest bg-transparent" />
                </div>
                <input type="text" name="address" required placeholder="STREET ADDRESS" onChange={handleChange} className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest bg-transparent" />
                <div className="grid grid-cols-2 gap-8 text-black">
                  <input type="text" name="city" required placeholder="CITY" onChange={handleChange} className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest bg-transparent" />
                  <input type="text" name="zipCode" required placeholder="POSTAL CODE" onChange={handleChange} className="w-full border-b-2 border-black py-4 outline-none font-bold placeholder:text-black/20 text-sm uppercase tracking-widest bg-transparent" />
                </div>
              </div>

              {/* SECTION 03: PAYMENT */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black">03</span>
                  <h2 className="text-lg font-black uppercase tracking-tight">Payment Method</h2>
                </div>
                
                <div className="space-y-4">
                   {[
                     { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
                     { id: 'upi', name: 'UPI / Digital Wallet', icon: Smartphone },
                     { id: 'cod', name: 'Cash on Delivery', icon: Truck }
                   ].map((item) => (
                     <label key={item.id} className={`flex items-center justify-between p-6 border-2 cursor-pointer transition-all ${formData.paymentMethod === item.id ? 'border-black bg-black text-white' : 'border-black/5 hover:border-black text-black'}`}>
                        <div className="flex items-center gap-4">
                          <input type="radio" name="paymentMethod" className="hidden" checked={formData.paymentMethod === item.id} onChange={() => setFormData({...formData, paymentMethod: item.id})} />
                          <item.icon size={20} />
                          <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                        </div>
                        {formData.paymentMethod === item.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                     </label>
                   ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-white py-8 text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black border-2 border-black transition-all duration-500 disabled:opacity-50"
              >
                {loading ? "Processing Transaction..." : "Confirm & Pay Order"}
              </button>

              <div className="flex items-center justify-center gap-2 opacity-30 py-4 text-black">
                <Lock size={12} />
                <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className="bg-[#fcfcfc] px-6 md:px-16 py-12 lg:min-h-screen">
          <div className="max-w-md">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-12 pb-4 border-b border-black/10 text-black">Summary</h2>
            
            <div className="space-y-10 mb-16">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="w-24 h-24 bg-white overflow-hidden border border-black/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-black">{item.name}</h3>
                      <p className="text-[10px] font-bold text-black/40 uppercase">QTY: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-black italic text-black">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-10 border-t-2 border-black text-black">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                <span>Shipping</span>
                <span className="text-black/40 italic">Complimentary</span>
              </div>
              
              <div className="pt-6 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Total Amount</p>
                  <p className="text-5xl font-black tracking-tighter italic">₹{total}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black uppercase bg-black text-white px-3 py-1">
                  INR
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditorialCheckout;