import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/Checkout/CartContext";
import "./index.css";

// Unregister any service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
