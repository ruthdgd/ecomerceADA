import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen de Compra</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;