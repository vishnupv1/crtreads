import AllProductsCategory from "@/app/jsFiles/allProducts";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProductsDisplay = ({ onProductClick }) => {
  const [displayCount, setDisplayCount] = useState(10); // Default to 10 products

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(8);
      } else {
        setDisplayCount(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  // const handleLinkClick = () => {
  //   // Set isModalOpen to false and remove focus from input
  //   setIsModalOpen(false);
  //   if (inputRef.current) {
  //     inputRef.current.blur(); // Remove focus from the input
  //   }
  // };
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 p-2">
      {AllProductsCategory.slice(0, displayCount).map((category, index) => (
        <ProductCard key={index} category={category} onClick={() => onProductClick(category)}/>
      ))}
    </div>
  );
};

const ProductCard = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let id; // Declare the variable id

    if (category.products && category.products.length > 0) {
      id = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === category.products.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Change image every 3 seconds
      setIntervalId(id);
    }

    // Clear interval on component unmount
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [category.products]);

  return (
    <div className="bg-white border border-gray-200  rounded-lg shadow-lg p-3" >
      <Link
        href={{
          pathname: "/products",
          query: { data: JSON.stringify(category.name) },
        }}
        
      >
        <img
          src={
            category.products && category.products.length > 0
              ? category.products[currentImageIndex].imageUrl
              : category.imageUrl
          }
          alt={category.name}
          className="h-14 w-full object-cover rounded-md mb-2"
        />
      </Link>
      <Link
        href={{
          pathname: "/products",
          query: { data: JSON.stringify(category.name) },
        }}
      >
        <h3 className="text-xs text-center">{category.name}</h3>
      </Link>
    </div>
  );
};

export default ProductsDisplay;
