import React, { createContext, useState, useEffect } from "react";
import { db, collection, addDoc, getDocs } from "../../firebaseConfig";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartCollection = await getDocs(collection(db, "cart"));
      const cartItems = cartCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCart(cartItems);
    };

    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const docRef = await addDoc(collection(db, "cart"), product);
    setCart([...cart, { id: docRef.id, ...product }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;