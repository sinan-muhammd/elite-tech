// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import Adding from "./components/Adding";
import Edit from "./components/Edit";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import { SearchProvider } from "./components/SearchContext";
import Homemain from "./page/Homemain";
import ProductCards from "./components/ProductCards";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import UserProfile from "./components/UserProfile";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homemain />} />
            <Route path="/products/:category" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
              path="/admin"
              element={
                <ProtectedAdminRoute>
                  <AdminDashboard />
                </ProtectedAdminRoute>
              }
            />

            <Route
              path="/addproduct"
              element={
                <ProtectedAdminRoute>
                  <Adding />
                </ProtectedAdminRoute>
              }
            />

            <Route
              path="/edit/:id"
              element={
                <ProtectedAdminRoute>
                  <Edit />
                </ProtectedAdminRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            <Route path="/trending" element={<ProductCards />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
