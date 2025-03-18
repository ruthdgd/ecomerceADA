import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} - ${item.price}
              </span>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Ir a Pagar
      </button>
    </div>
  );
};

export default Cart;
