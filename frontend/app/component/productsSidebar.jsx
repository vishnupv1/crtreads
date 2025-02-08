"use client";
import React from "react";
import AllProductsCategory from "../jsFiles/allProducts"; // Ensure this path is correct

function ProductsSidebar({ onProductSelect, selected, isVisible, toggleVisibility }) {
  return (
    <div className={`w-full lg:w-1/5 p-4 h-auto lg:h-screen ${isVisible ? 'block' : 'hidden lg:block'}`}>
      <h2 className="font-bold text-xl mb-4">CATEGORIES</h2>
      <ul className="space-y-2">
        {AllProductsCategory.map((product, index) => (
          <li
            key={index}
            className={`p-2 rounded cursor-pointer transition duration-200 
              ${selected.name === product.name ? 'text-red-400 hover:bg-red-400 hover:text-white' : 'hover:bg-red-200'}`}
            onClick={() => {
              onProductSelect(product); 
              toggleVisibility(); // Hide the sidebar when a product is selected
            }} // Pass the clicked product to the parent component
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsSidebar;
