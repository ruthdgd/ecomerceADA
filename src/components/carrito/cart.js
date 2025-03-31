import React from "react";
import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calcular el total de la compra
  const totalCompra = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.price.toLocaleString()}</p>
                <p>Total: ${(item.price * item.quantity).toLocaleString()}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, 1)}
                >
                  Eliminar uno
                </button>
                <button
                  className="remove-all-btn"
                  onClick={() => removeFromCart(item.id, item.quantity)}
                >
                  Eliminar todos
                </button>
              </div>
            </div>
          ))}
          <h3>Total de la compra: ${totalCompra.toLocaleString()}</h3>
          <button className="pay-button" onClick={() => navigate("/checkout")}>
            Pagar
          </button>
        </div>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;