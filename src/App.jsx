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
import ProductCard from "./components/ProductCart/ProductCard";
import EnterpriseCustomSolution from "./components/ProductCart/EnterpriseCustomSolution";
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
      {!isCheckoutPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isCheckoutPage && <Footer />}
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
                  <div className="container mx-auto">
                    <div className="sm:px-10 lg:px-20 px-[55px] py-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 4xl:grid-cols-4 gap-y-6 sm:gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14 4xl:gap-y-16 gap-x-4 sm:gap-x-10 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-24 4xl:gap-x-24 justify-items-center">
                        {/* Product cards */}
                        <ProductCard
                          productType="products"
                          onAddToCart={handleAddToCart}
                        />
                        <ProductCard
                          productType="orders"
                          onAddToCart={handleAddToCart}
                        />
                        <ProductCard
                          productType="inventory"
                          onAddToCart={handleAddToCart}
                        />
                        <EnterpriseCustomSolution onAddToCart={handleAddToCart} />
                      </div>
                    </div>
                  </div>
                </main>
                <Review />
              </>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/product-data-sync-details"
            element={<ProductDataSyncDetails />}
          />
          <Route
            path="/order-data-sync-details"
            element={<OrdersDataSyncDetails />}
          />
          <Route
            path="/inventory-data-sync-details"
            element={<InventoryDataSyncDetails />}
          />
          <Route
            path="/enterprise-custom-solution-details"
            element={<EnterpriseCustomSolutionDetails />}
          />
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
