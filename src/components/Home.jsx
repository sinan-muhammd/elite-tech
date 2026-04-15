import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";
import { useCart } from "./CartContext";
import { Filter, ChevronDown, ShoppingBag, Heart } from "lucide-react";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useSearch();
  const { category } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !category ||
      category.toLowerCase() === "all" ||
      (product.category &&
        product.category
          .trim()
          .toLowerCase()
          .replace(/s$/, "") === category.replace("-", " ").toLowerCase().replace(/s$/, ""));

    return matchesCategory && matchesSearch;
  });

  // Dynamically extract and normalize categories from products
  const availableCategories = React.useMemo(() => {
    const cats = new Set();
    products.forEach(p => {
        let cat = p.category?.trim();
        if (cat) {
            // Simple normalization (capitalize first letter, trim)
            cat = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
            cats.add(cat);
        }
    });
    return ["All", ...Array.from(cats).sort()];
  }, [products]);


  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-black border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* CATALOG HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-red-600"></div>
                <span className="text-red-600 font-extrabold uppercase text-xs tracking-[0.2em]">The Catalog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {category && category !== "all" ? category.replace("-", " ") : "The Collection"}
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{filteredProducts.length} Results</span>
              <button className="flex items-center gap-2 border border-black px-6 py-3 font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
                <Filter size={14} strokeWidth={3} />
                Filter & Sort
              </button>
          </div>
        </div>

        {/* CATEGORY QUICK LINKS */}
        <div className="flex flex-wrap items-center gap-4 mb-16 px-4">
            {availableCategories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => navigate(`/products/${cat.toLowerCase()}`)}
                    className={`px-8 py-3 font-black uppercase text-[10px] tracking-widest transition-all rounded-full border ${
                        (category === cat.toLowerCase() || (cat === "All" && (!category || category === "all")))
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-gray-400 border-gray-100 hover:border-black hover:text-black"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://placehold.co/800x1000?text=NO+IMAGE'; }}
                />
                
                {/* Actions Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-red-600 hover:text-white transition-all shadow-xl"
                        onClick={(e) => { e.stopPropagation(); }}
                    >
                        <Heart size={18} strokeWidth={2.5} />
                    </button>
                    <button 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-xl"
                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    >
                        <ShoppingBag size={18} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-black text-white px-8 py-3 font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-colors">
                        Quick Buy
                    </button>
                </div>
              </div>
              
              <div className="px-1 flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 truncate">
                    {product.category || "General"}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tighter leading-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-base font-black text-black tracking-tight">₹{product.price}</span>
                    <span className="text-xs font-bold text-gray-300 line-through tracking-tight">₹{Math.round(parseFloat(product.price || 0) * 1.3)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 flex flex-col items-center gap-6">
            <div className="w-[1px] h-24 bg-gray-100"></div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-300">NO PRODUCTS FOUND IN THE PROJECT</h2>
            <button onClick={() => navigate("/products/all")} className="border-b-2 border-black font-black uppercase text-xs tracking-widest pb-1 hover:text-red-600 hover:border-red-600 transition-all">
                VIEW ALL PROJECTS
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;
