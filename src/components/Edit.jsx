import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save, IndianRupee, Tag, FileText, Image as ImageIcon, CheckCircle2 } from "lucide-react";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
    inStock: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setMessage("FAILED TO RETRIEVE ASSET");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      await axios.put(`http://localhost:5000/products/${id}`, product);
      setMessage("ASSET MODIFICATION RESOLVED SUCCESSFULY");
      setTimeout(() => navigate("/admin"), 1500);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("ASSET MODIFICATION FAILED");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-black border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* BACK ACTION */}
        <button 
            onClick={() => navigate("/admin")}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-black transition-colors mb-12"
        >
            <ArrowLeft size={16} strokeWidth={2.5} className="group-hover:-translate-x-2 transition-transform" />
            Abort & Return to Console
        </button>

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-red-600"></div>
            <span className="text-[10px] font-black text-red-600 tracking-[0.2em] uppercase">Modify Entity: {id}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none mb-6">Modify Asset</h1>
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest italic">Refine the specifications for this project entity.</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-300 pl-1">Entity Title</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-200 group-focus-within:text-black">
                    <ImageIcon size={18} strokeWidth={2.5} />
                </div>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="NAME OF ASSET"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-gray-50 border-b-2 border-transparent focus:border-red-600 transition-all outline-none font-black text-xs uppercase tracking-widest text-black"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-300 pl-1">Project Valuation</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-200 group-focus-within:text-black">
                    <IndianRupee size={18} strokeWidth={2.5} />
                </div>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-gray-50 border-b-2 border-transparent focus:border-red-600 transition-all outline-none font-black text-xs uppercase tracking-widest text-black"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-gray-300 pl-1">Entity Visual Source</label>
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-200 group-focus-within:text-black">
                    <ImageIcon size={18} strokeWidth={2.5} />
                </div>
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="HTTPS://SOURCE-IMAGE.URL"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-gray-50 border-b-2 border-transparent focus:border-red-600 transition-all outline-none font-black text-xs uppercase tracking-widest text-black"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-300 pl-1">Classification</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-200 group-focus-within:text-black">
                    <Tag size={18} strokeWidth={2.5} />
                </div>
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="CATEGORY"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-gray-50 border-b-2 border-transparent focus:border-red-600 transition-all outline-none font-black text-xs uppercase tracking-widest text-black"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        name="inStock"
                        id="inStock"
                        checked={product.inStock}
                        onChange={handleChange}
                        className="peer h-6 w-6 cursor-pointer appearance-none border-2 border-gray-100 checked:bg-black checked:border-black transition-all"
                    />
                    <CheckCircle2 size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <label htmlFor="inStock" className="text-[10px] font-black uppercase tracking-widest text-gray-400 cursor-pointer select-none">
                    Asset available for immediate acquisition
                </label>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-widest text-gray-300 pl-1">Functional Description</label>
            <div className="relative group">
                <div className="absolute top-5 left-5 flex items-center pointer-events-none text-gray-200 group-focus-within:text-black">
                    <FileText size={18} strokeWidth={2.5} />
                </div>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="PROVIDE ENTITY SPECIFICATIONS..."
                    rows="4"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-gray-50 border-b-2 border-transparent focus:border-red-600 transition-all outline-none font-black text-xs uppercase tracking-widest text-black resize-none"
                ></textarea>
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={saving}
              className={`w-full bg-black text-white py-6 font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-red-600 transition-all active:scale-95 flex items-center justify-center gap-4 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {saving ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                    <Save size={20} strokeWidth={2.5} />
                    Commit Modifications
                </>
              )}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-12 p-6 text-center font-black uppercase tracking-widest text-[10px] border flex items-center justify-center gap-4 animate-fade-in-up ${message.includes('RESOLVED') ? 'bg-black text-white border-black' : 'bg-red-50 text-red-600 border-red-100'}`}>
             <div className={`w-2 h-2 rounded-full ${message.includes('RESOLVED') ? 'bg-white' : 'bg-red-600'} animate-pulse`}></div>
             {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Edit;
