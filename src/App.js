import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./components/aboutUs/aboutUs.js";
import ProductList from "./components/product/productList";
import FeaturedProducts from "./components/product/FeaturedProducts";
import Cart from "./components/carrito/cart";
import Checkout from "./components/carrito/checkout";
import { CartProvider } from "./components/carrito/cartContext";
import LogIn from "./components/logIn/logIn";
import Header from "./components/header";
import Footer from "./components/footer";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import "./App.css";

const App = () => {
  const location = useLocation();
  const isLogIn = location.pathname === "/logIn";

  const [filterType, setFilterType] = useState("all");

  return (
    <AuthProvider>
      <CartProvider>
        {!isLogIn && <Header setFilterType={setFilterType} />}
        <div className="app">
          <Routes>
            <Route path="/" element={<ProductList filterType={filterType} />} />
            <Route
              path="/featured"
              element={<FeaturedProducts filterType={filterType} />}
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        {!isLogIn && <Footer />}
      </CartProvider>
    </AuthProvider>
  );
};

export default App;