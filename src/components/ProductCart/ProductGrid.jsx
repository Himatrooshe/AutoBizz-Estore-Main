import React from "react";
import ProductCard from "../ProductCart/ProductCard";
import EnterpriseCustomSolution from "../ProductCart/EnterpriseCustomSolution";

const ProductGrid = ({ onAddToCart }) => {
  return (
    <div className="container mx-auto">
      <div className="sm:px-10 lg:px-20 px-[55px] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 4xl:grid-cols-4 gap-y-6 sm:gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14 4xl:gap-y-16 gap-x-4 sm:gap-x-10 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-24 4xl:gap-x-24 justify-items-center">
          <ProductCard productType="products" onAddToCart={onAddToCart} />
          <ProductCard productType="orders" onAddToCart={onAddToCart} />
          <ProductCard productType="inventory" onAddToCart={onAddToCart} />
          <EnterpriseCustomSolution onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
