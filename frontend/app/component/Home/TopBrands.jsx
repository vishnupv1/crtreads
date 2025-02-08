'use client'
import React, { useEffect, useRef } from "react";
import tyreBrands from "@/app/jsFiles/topBrands";
import patterns from "@/app/jsFiles/topPatterns";

function ShopFromTopBrands() {
  const brandContainerRef = useRef(null);

  useEffect(() => {
    const container = brandContainerRef.current;
    const scrollSpeed = 1.3; // Adjust the speed as needed

    // Set up keyframes for the scroll animation
    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${container.scrollWidth / 2}px); }
      }
    `;

    // Add keyframes to the stylesheet
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Set up animation on the brand logos container
    container.style.animation = `scroll ${container.scrollWidth / (scrollSpeed * 100)}s linear infinite`;

    return () => {
      container.style.animation = '';
    };
  }, []);

  const doubledPatterns = [...patterns, ...patterns];

  return (
    <section
      aria-label="Shop from Top Brands"
      className="lg:py-12 flex flex-col  bg-stone-100  text-left items-center shadow-inner py-8"
    >
      {/* Section heading */}
      <div className="  lg:w-9/12 w-11/12 ">
      <h2  className="text-gray-800 text-xl md:text-2xl font-semibold mb-8 lg:mb-12  ">TOP PATTERNS</h2>
      </div>
      {/* Scrolling brand logos */}
      <div className="overflow-x-auto no-scrollbar lg:w-9/12 w-11/12 text-gray-800">
        <div className="flex space-x-12 lg:space-x-7 " ref={brandContainerRef}>
          {/* {tyreBrands.concat(tyreBrands).map((product, index) => (
            <article className="text-center hover:text-red-400" key={index}>
              <figure className="bg-gray-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 hover:shadow-md hover:shadow-red-200">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  loading="lazy"
                />
              </figure>
              <figcaption className="mt-3 text-sm font-medium md:font-semibold text-center transition-colors duration-300 ease-in-out hover:text-red-400">
                {product.name}
              </figcaption>
            </article>
          ))} */}
          {doubledPatterns.map((product, index) => (
            <article className="text-center hover:text-red-400" key={index}>
              <figure className="bg-gray-300 rounded-lg w-20 md:w-28 h-20 md:h-28 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400  ">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  loading="lazy"
                  style={{filter: "brightness(0.9) contrast(1.2) saturate(0)" }}
                />
              </figure>
              <figcaption className="mt-3 text-sm font-medium md:font-semibold text-center transition-colors duration-300 ease-in-out hover:text-red-400">
                {product.name}
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopFromTopBrands;
