import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    const totalQuantity = productInCart ? productInCart.quantity + 1 : 1;

    if (totalQuantity > product.stock) {
      alert("Fuera de stock");
      return;
    }

    if (productInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar producto del carrito (uno o todos)
  const removeFromCart = (id, quantityToRemove) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity - quantityToRemove }
              : item
          )
          .filter((item) => item.quantity > 0) // Elimina productos con cantidad 0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);