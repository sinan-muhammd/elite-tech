import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Search, X } from 'lucide-react';

const PhloxProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://backend-elite-1.onrender.com/products");
                const data = response.data.slice(-8);
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 🔍 SEARCH FUNCTION
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [query, products]);

    if (loading) return (
        <div className="py-20 flex justify-center bg-white">
            <div className="w-6 h-6 border-4 border-black border-t-gray-400 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <section className="bg-white py-20 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* 🔍 SEARCH BAR */}
                <div className="flex justify-center mb-12">
                    <div className={`
                        relative flex items-center w-full max-w-2xl h-14 px-5 rounded-2xl border transition-all duration-300
                        ${isSearchFocused 
                            ? 'bg-white border-black shadow-md' 
                            : 'bg- border-transparent'}
                    `}>
                        <Search 
                            size={20} 
                            className={`${isSearchFocused ? 'text-black' : 'text-gray-900'}`} 
                        />
                        
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full bg-transparent outline-none px-4 text-sm text-black placeholder-gray-400"
                        />

                        {query && (
                            <button 
                                onClick={() => setQuery("")}
                                className="p-1 hover:bg-gray-200 rounded-full"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        )}
                    </div>
                </div>

                {/* HEADER */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black">
                        New Arrivals
                    </h2>

                    <button
                        onClick={() => navigate("/products/all")}
                        className="flex items-center gap-2 text-sm font-medium text-black hover:underline"
                    >
                        Explore All
                        <ArrowRight size={16} />
                    </button>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group cursor-pointer"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >

                                {/* IMAGE */}
                                <div className="bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                                        onError={(e) => {
                                            e.target.src = 'https://placehold.co/400x500?text=No+Image';
                                        }}
                                    />
                                </div>

                                {/* DETAILS */}
                                <div className="mt-3 px-1">
                                    <p className="text-xs text-gray-500">
                                        {product.category || "General"}
                                    </p>

                                    <h3 className="text-sm text-black font-medium mt-1 line-clamp-1">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-sm text-black font-semibold">
                                            ₹{product.price}
                                        </span>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                            className="bg-black text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1 hover:opacity-80 transition"
                                        >
                                            <ShoppingBag size={14} />
                                            Add
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-400 text-sm">
                                No products found
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default PhloxProducts;