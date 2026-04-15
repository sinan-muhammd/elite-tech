import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, User, ArrowRight, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[400px]">
        
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <Link to="/" className="text-2xl font-black tracking-tighter inline-block mb-8">
            JOLT<span className="text-gray-400">.</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h1>
          <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 ml-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-black focus:ring-1 focus:ring-black transition-all outline-none text-sm text-gray-900"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Password
              </label>
              <Link to="#" className="text-xs font-medium text-gray-400 hover:text-black transition-colors">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-black focus:ring-1 focus:ring-black transition-all outline-none text-sm text-gray-900"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-black"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 px-1 py-2">
            <input type="checkbox" id="remember" className="w-4 h-4 accent-black rounded border-gray-300" />
            <label htmlFor="remember" className="text-xs text-gray-500 font-medium cursor-pointer">
              Remember for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group mt-4 shadow-lg shadow-black/5"
          >
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-black font-bold hover:underline transition-all">
                    Create account
                </Link>
            </p>
        </div>

        {/* SOCIAL LOGIN (Minimalist) */}
        <div className="mt-12">
            <div className="relative flex items-center justify-center mb-8">
                <div className="absolute w-full border-t border-gray-100"></div>
                <span className="relative bg-white px-4 text-[10px] font-bold uppercase tracking-widest text-gray-300">Or continue with</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="h-4 w-4" alt="google" />
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold">
                    <img src="https://www.svgrepo.com/show/448234/apple.svg" className="h-4 w-4" alt="apple" />
                    Apple
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Login;