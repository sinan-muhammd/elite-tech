// src/components/Cart.jsx
import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 text-center min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">🛒 Your Cart is Empty</h2>
        <Link to="/" className="bg-indigo-600 text-white px-6 py-2 rounded-full">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ Your Shopping Cart</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b py-4">

            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">₹{item.price}</p>
                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 sm:mt-0"
            >
              Remove
            </button>

          </div>
        ))}

        <div className="text-right mt-6">
          <p className="text-xl font-bold">Total: ₹{total}</p>

          <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
            <button onClick={clearCart} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              Clear Cart
            </button>

            <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded-md text-center">
              Buy Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
