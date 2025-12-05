import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

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

  // ✅ Fetch product data
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://backend-elite-1.onrender.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to load product!");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  // ✅ Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Submit updated product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://backend-elite-1.onrender.com/products/${id}`, product);
      alert("✅ Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("❌ Failed to update product!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-white p-6 sm:p-8">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline mb-6 inline-block font-semibold"
        >
          &larr; Back to Products
        </Link>

        <h1 className="text-2xl font-bold mb-4 text-gray-800">✏️ Edit Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
              rows="4"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="inStock"
              checked={product.inStock}
              onChange={handleChange}
            />
            <label className="text-gray-700">In Stock</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            💾 Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
