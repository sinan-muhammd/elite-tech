import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Trash2, Edit3, Package, Search, LayoutDashboard } from "lucide-react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(p.id).includes(searchTerm)
  );

  const handleDelete = async (id) => {
    if (window.confirm("ARE YOU SURE YOU WANT TO ELIMINATE THIS ASSET FROM THE PROJECT?")) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ADMIN HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-red-600"></div>
                <span className="text-red-600 font-extrabold uppercase text-xs tracking-[0.2em]">Internal Console</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Project Dashboard
            </h1>
          </div>
          
          <Link
            to="/addproduct"
            className="inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-red-600 transition-all active:scale-95"
          >
            <Plus size={20} strokeWidth={2.5} />
            Initialize Asset
          </Link>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
                { label: 'Total Assets', val: products.length, icon: Package },
                { label: 'Active Projects', val: products.filter(p => p.inStock).length, icon: LayoutDashboard },
            ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-8 flex items-center justify-between group">
                    <div>
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2">{stat.label}</p>
                        <h3 className="text-4xl font-black text-black tracking-tighter italic">{stat.val}</h3>
                    </div>
                    <stat.icon size={32} strokeWidth={1.5} className="text-gray-100 group-hover:text-black transition-colors" />
                </div>
            ))}
        </div>

        {/* INVENTORY TABLE */}
        <div className="bg-white border-t-2 border-black overflow-hidden shadow-sm">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-xl font-black uppercase tracking-tighter text-black">Master Manifest</h2>
            <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input 
                    type="text" 
                    placeholder="SCAN MANIFEST..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-50 border-none px-10 py-3 text-[10px] font-black uppercase tracking-widest focus:ring-1 focus:ring-black outline-none w-48 transition-all"
                />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-24 flex justify-center">
                <div className="w-10 h-10 border-4 border-black border-t-red-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    <th className="px-8 py-5">Entity Image</th>
                    <th className="px-8 py-5">Specification</th>
                    <th className="px-8 py-5">Classification</th>
                    <th className="px-8 py-5">Valuation</th>
                    <th className="px-8 py-5 text-right">Operation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredProducts.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="h-16 w-16 bg-gray-100 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover p-1"
                            onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=NO+IMAGE'; }}
                          />
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="font-black text-black uppercase tracking-tighter text-sm line-clamp-1 max-w-[250px]">{item.name}</div>
                        <div className="text-[9px] font-bold text-gray-300 tracking-widest uppercase mt-1">ID: PROJECT_{item.id}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black bg-white border border-black/5 px-3 py-1">
                          {item.category || 'GENERAL'}
                        </span>
                      </td>
                      <td className="px-8 py-6 font-black text-black tracking-tight italic text-lg">
                        ₹{item.price}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-4">
                          <button
                            onClick={() => navigate(`/edit/${item.id}`)}
                            className="text-gray-300 hover:text-black transition-colors"
                            title="Modify Asset"
                          >
                            <Edit3 size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-gray-200 hover:text-red-600 transition-colors"
                            title="Eliminate Asset"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
            {!loading && products.length === 0 && (
              <div className="p-24 flex flex-col items-center justify-center text-center">
                <Package size={64} className="text-gray-100 mb-6" strokeWidth={1} />
                <h3 className="text-xl font-black uppercase tracking-tighter text-black">Project Manifest is Empty</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-4">Initialize a new project asset to begin.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
