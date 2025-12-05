import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";



const Adding = () => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    inStock: true,
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-elite-1.onrender.com/products", {
        ...product,
        price: parseFloat(product.price),
      });
      setMessage("✅ Product added successfully!");
      setProduct({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        inStock: true,
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to add product.");
    }
  };

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
  <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
    <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
      Add Product
    </h2>

    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price (e.g. 129.99)"
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        rows="2"
        required
      ></textarea>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          name="inStock"
          checked={product.inStock}
          onChange={handleChange}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">In Stock</span>
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white text-sm font-semibold py-1.5 rounded-md hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>

    {message && (
      <p className="mt-3 text-center text-xs font-medium text-green-600">
        {message}
      </p>
    )}
  </div>
</div>

  );
};

export default Adding;
