import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CartProvider} from "./components/carrito/cartContext";
import UploadImage from "./UploadImage";
import Cart from "./components/carrito/cart";
import Checkout from "./components/carrito/checkout";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <h1>Sube tu Imagen</h1>
          <UploadImage /> {/* Componente para subir imágenes */}
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
