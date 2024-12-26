import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/Checkout/CartContext";
import "./index.css";

// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      console.log("Service Worker registered:", registration);

      // Listen for updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            // Notify the user about the new version
            if (confirm("A new version is available. Would you like to update?")) {
              window.location.reload(); // Force reload to update
            }
          }
        });
      });
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
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
