import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { 
  ShoppingBag, 
  Heart, 
  ChevronRight, 
  Minus, 
  Plus, 
  Truck, 
  RefreshCcw, 
  ShieldCheck 
} from "lucide-react";

const ProductCompact = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://backend-elite-1.onrender.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const handleAdd = () => {
        addToCart({ ...product, quantity });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (!product) return <div className="p-20 text-center font-bold">PRODUCT NOT FOUND</div>;

    return (
        <div className="pt-20 pb-10 bg-white min-h-screen text-black">
            <div className="max-w-5xl mx-auto px-6">
                
                {/* COMPACT BREADCRUMB */}
                <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
                   <Link to="/" className="hover:text-black">Store</Link>
                   <ChevronRight size={10} />
                   <span>{product.category || 'General'}</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    
                    {/* LEFT: COMPACT IMAGE */}
                    <div className="bg-gray-50 border border-gray-100 overflow-hidden">
                       <img
                         src={product.image}
                         alt={product.name}
                         className="w-full aspect-[4/5] object-cover"
                         onError={(e) => { e.target.src = 'https://placehold.co/600x800?text=IMAGE+MISSING'; }}
                       />
                    </div>

                    {/* RIGHT: DENSE INFO */}
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Available Now</span>
                            <h1 className="text-3xl font-black uppercase tracking-tighter leading-tight mt-1">
                                {product.name}
                            </h1>
                        </div>

                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-2xl font-black">₹{product.price}</span>
                            <span className="text-sm text-gray-300 line-through">₹{product.price * 1.5}</span>
                        </div>

                        <p className="text-sm text-gray-600 font-medium leading-relaxed mb-8 border-l-2 border-black pl-4">
                            {product.description || "High-performance materials meet refined urban aesthetics. A essential addition to your daily rotation."}
                        </p>

                        {/* SELECTORS ROW */}
                        <div className="flex flex-col gap-6 mb-8">
                            {/* Size Selection (Mockup) */}
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest mb-3">Select Size</p>
                                <div className="flex gap-2">
                                    {['S', 'M', 'L', 'XL'].map(size => (
                                        <button key={size} className="w-10 h-10 border border-black/10 text-[10px] font-bold hover:bg-black hover:text-white transition-all uppercase">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & Add */}
                            <div className="flex gap-3">
                                <div className="flex items-center border border-black">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 hover:bg-gray-100"><Minus size={14}/></button>
                                    <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 hover:bg-gray-100"><Plus size={14}/></button>
                                </div>
                                <button
                                    onClick={handleAdd}
                                    className="flex-1 bg-black text-white px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag size={16} />
                                    {added ? "Item Added" : "Add to Bag"}
                                </button>
                            </div>
                        </div>

                        {/* INFO GRID */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                             <div className="text-center">
                                <Truck size={18} className="mx-auto mb-2 text-gray-400" />
                                <p className="text-[9px] font-black uppercase">Express</p>
                             </div>
                             <div className="text-center">
                                <RefreshCcw size={18} className="mx-auto mb-2 text-gray-400" />
                                <p className="text-[9px] font-black uppercase">Return</p>
                             </div>
                             <div className="text-center">
                                <ShieldCheck size={18} className="mx-auto mb-2 text-gray-400" />
                                <p className="text-[9px] font-black uppercase">Secure</p>
                             </div>
                        </div>

                    </div>
                </div>

                {/* OPTIONAL MINI FOOTER INSIDE SECTION */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-gray-300">
                    <p className="text-[9px] font-bold uppercase tracking-widest">SKU: JLT-00{id}</p>
                    <div className="flex gap-4">
                        <Heart size={16} className="cursor-pointer hover:text-black" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCompact;