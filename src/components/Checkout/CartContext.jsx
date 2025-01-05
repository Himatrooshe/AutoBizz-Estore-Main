import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Updated Cart:", cart); // Log cart changes to the console
  }, [cart]);

  const addToCart = (product) => {
    const newProduct = {
      name: product.name || product.title || "Unnamed Item", // Set name based on available fields
      price: parseFloat(product.price) || 0, // Ensure price is a number
      ...product, // Spread other product properties
    };

    setCart((prev) => [...prev, newProduct]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((_, index) => index !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
