import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Admin Check (Hardcoded)
    if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
      localStorage.setItem("userRole", "admin");
      alert("Welcome Admin! Redirecting to Dashboard...");
      navigate("/admin");
      return;
    }

    // 2. Database User Check
    try {
      const response = await axios.get(
        `https://backend-elite-1.onrender.com/users?email=${formData.email}&password=${formData.password}`
      );

      if (response.data.length > 0) {
        localStorage.setItem("userRole", "user");
        // Store user info if needed, e.g., name
        localStorage.setItem("userName", response.data[0].name);
        alert(`Welcome ${response.data[0].name}! Logged in successfully.`);
        navigate("/");
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="bg-gray-900 shadow-lg rounded-xl w-full max-w-sm p-6">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          🔐 Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
