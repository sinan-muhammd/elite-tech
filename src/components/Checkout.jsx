import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  });

  // Fake scanner states
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order Placed Successfully!\n
Thank you, ${formData.fullName}!\nWe’ll contact you at ${formData.email}.`);
    clearCart();
    navigate("/"); // back to home after checkout
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 text-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          🛒 No items to checkout
        </h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  // Open scanner modal
  const openScanner = () => {
    setScanSuccess(false);
    setScannerOpen(true);
    setScanning(false);
  };

  const closeScanner = () => {
    setScannerOpen(false);
    setScanning(false);
    setScanSuccess(false);
  };

  // Simulate scanning process
  const startFakeScan = () => {
    if (scanning) return;
    setScanning(true);
    setScanSuccess(false);

    // fake scanning duration
    setTimeout(() => {
      setScanning(false);
      setScanSuccess(true);

      // set payment to UPI on successful fake scan
      setFormData((prev) => ({ ...prev, paymentMethod: "upi" }));

      // automatically close modal after short delay
      setTimeout(() => {
        setScannerOpen(false);
        setScanSuccess(false);
      }, 1200);
    }, 1800);
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        🧾 Checkout
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Left: Cart Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Your Order
          </h2>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-gray-800 font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <span className="font-semibold text-indigo-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-3 flex justify-between text-lg font-bold text-gray-700">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Right: Checkout Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Shipping & Payment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full Address"
              rows="3"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>

            <div>
              <label className="block text-gray-600 text-sm mb-1">
                Payment Method
              </label>
              <div className="flex gap-2">
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="card">💳 Credit/Debit Card</option>
                  <option value="cod">💵 Cash on Delivery</option>
                  <option value="upi">📱 UPI / Wallet</option>
                </select>

                {/* Fake Scanner trigger */}
                <button
                  type="button"
                  onClick={openScanner}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-50 flex items-center gap-2"
                  title="Open fake scanner"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h4M3 17h4M21 7h-4M21 17h-4M7 3v4M17 3v4M7 21v-4M17 21v-4"
                    />
                  </svg>
                  Scan
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Or choose payment method manually. Use the scanner to simulate a UPI scan.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>

      {/* Scanner Modal */}
      {scannerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeScanner}
            aria-hidden="true"
          />

          {/* modal content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-4 z-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Fake QR Scanner</h3>
              <button
                onClick={closeScanner}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close scanner"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center gap-3">
              {/* camera-like frame */}
              <div className="w-full max-w-sm bg-gray-900/5 rounded-md p-3">
                <div className="relative bg-black rounded-md h-48 overflow-hidden">
                  {/* scanning window frame */}
                  <div className="absolute inset-4 border-2 border-dashed border-white/25 rounded-md" />

                  {/* moving scan line */}
                  <div
                    className={`absolute left-0 right-0 h-0.5 bg-red-500/90 transform ${
                      scanning ? "animate-scan" : "opacity-0"
                    }`}
                    style={{ top: scanning ? "30%" : "-10%" }}
                  />

                  {/* success overlay */}
                  {scanSuccess && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-md shadow">
                        <div className="text-green-600 font-semibold">Scan success ✓</div>
                        <div className="text-xs text-gray-600">Payment method set to UPI</div>
                      </div>
                    </div>
                  )}

                  {/* placeholder camera icon */}
                  {!scanning && !scanSuccess && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
                      Camera view (fake)
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex gap-2">
                <button
                  onClick={startFakeScan}
                  disabled={scanning}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                    scanning
                      ? "bg-gray-300 text-gray-600"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {scanning ? "Scanning..." : "Simulate Scan"}
                </button>

                <button
                  onClick={() => {
                    // quick manual set to UPI without scanning
                    setFormData((prev) => ({ ...prev, paymentMethod: "upi" }));
                    setScanSuccess(true);
                    setTimeout(() => {
                      setScannerOpen(false);
                      setScanSuccess(false);
                    }, 900);
                  }}
                  className="px-3 py-2 rounded-md text-sm border border-gray-300"
                >
                  Quick UPI
                </button>
              </div>

              <div className="text-xs text-gray-500">
                Note: This is only a fake scanner for demo purposes.
              </div>
            </div>
          </div>

          {/* simple animation CSS injected in page scope */}
          <style>{`
            @keyframes scanMove {
              0% { top: -5%; opacity: 0 }
              10% { opacity: 1 }
              50% { top: 50% }
              90% { opacity: 1 }
              100% { top: 105%; opacity: 0 }
            }
            .animate-scan {
              animation: scanMove 1.8s linear forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Checkout;
