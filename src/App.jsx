import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import Adding from "./components/Adding";
import Edit from "./components/Edit";
import Checkout from "./components/Checkout";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./components/CartContext";
import { SearchProvider } from "./components/SearchContext";
import Homemain from "./page/Homemain";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Homemain />} />
            <Route path="/products/:category" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<Adding />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
