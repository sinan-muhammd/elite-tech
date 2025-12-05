import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://backend-elite-1.onrender.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage("✅ Added to cart!");
    setTimeout(() => setAddedMessage(""), 2000);
  };

  if (loading) return <p className="text-center mt-24">Loading...</p>;
  if (!product) return <p className="text-center mt-24">Product not found.</p>;

  return (
    <div className="pt-24 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg object-contain"
        />

        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mt-2">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {product.description}
          </p>

          <p
            className={`mt-2 text-sm font-medium ${
              product.inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`mt-6 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
              product.inStock
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            🛒 Add to Cart
          </button>

          {addedMessage && (
            <p className="mt-3 text-green-600 font-semibold text-sm">
              {addedMessage}
            </p>
          )}

          <Link to="/" className="block mt-4 text-indigo-600 hover:underline text-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
