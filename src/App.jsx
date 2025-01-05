import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import AboutUs from "./components/us/AboutUs";
import HeroSection from "./components/Herosection/HeroSection";
import Review from "./components/Reviews/Review";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import ProductDataSyncDetails from "./components/ProductDetails/ProductDataSyncDetails";
import OrdersDataSyncDetails from "./components/ProductDetails/OrdersDataSyncDetails";
import InventoryDataSyncDetails from "./components/ProductDetails/InventoryDataSyncDetails";
import EnterpriseCustomSolutionDetails from "./components/ProductDetails/EnterpriseCustomSolutionDetails";
import PrivacyAndPolicy from "./components/Privacy/PrivacyAndPolicy";
import TermsAndConditions from "./components/Privacy/TermsAndConditions";
import CartAddedPop from "./components/ProductCart/CartAddedPop";
import ProductGrid from "./components/ProductCart/ProductGrid";
import CartPage from "./components/Checkout/CheckoutPage"; // Import the Cart Page

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div className="App flex flex-col min-h-screen bg-[#DBEAFE]">
      {!isCheckoutPage && <Header className="w-full" />} {/* Header */}
      <main className="flex-grow w-full">{children}</main>
      {!isCheckoutPage && <Footer className="w-full" />} {/* Footer */}
    </div>
  );
};

function App() {
  const [popup, setPopup] = useState(false);
  const [product, setProduct] = useState(null);

  const handleAddToCart = (selectedProduct) => {
    setProduct(selectedProduct);
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <main className="flex-1 p-4 bg-[#DBEAFE]">
                  <ProductGrid onAddToCart={handleAddToCart} />
                </main>
                <Review />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} /> {/* Cart Route */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product-data-sync-details" element={<ProductDataSyncDetails />} />
          <Route path="/order-data-sync-details" element={<OrdersDataSyncDetails />} />
          <Route path="/inventory-data-sync-details" element={<InventoryDataSyncDetails />} />
          <Route path="/enterprise-custom-solution-details" element={<EnterpriseCustomSolutionDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>

        {/* Render the CartAddedPop component */}
        {popup && <CartAddedPop product={product} onClose={closePopup} />}
      </Layout>
    </Router>
  );
}

export default App;
