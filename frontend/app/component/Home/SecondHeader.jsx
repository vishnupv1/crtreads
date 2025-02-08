"use client";
import firstProductList from "@/app/jsFiles/firstProductList";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function SecondHeader() {
  // const brandContainerRef = useRef(null);

  // useEffect(() => {
  //   const container = brandContainerRef.current;
  //   const scrollSpeed = 0.7;

  //   const keyframes = `
  //     @keyframes scroll {
  //       0% { transform: translateX(0); }
  //       100% { transform: translateX(-${container.scrollWidth / 2}px); }
  //     }
  //   `;

  //   // Add keyframes to the stylesheet
  //   const styleSheet = document.styleSheets[0];
  //   styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  //   // Set up animation on the product list container
  //   container.style.animation = `scroll ${container.scrollWidth / (scrollSpeed * 100)}s linear infinite`;

  //   return () => {
  //     container.style.animation = '';
  //   };
  // }, []);

  // Duplicate the product list for infinite scroll effect

  return (
    <section
      className="pl-2  lg:p-2 flex flex-col justify-center items-center  shadow-md text-gray-800 font-semibold text-center"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* <div className="w-full lg:w-5/6 xl:w-8/12 pt-4 md:py-2"> */}
      <div className="w-full  pt-4 md:py-2">
        <div className="flex w-full relative  md:py-4   overflow-x-auto no-scrollbar ">
          <article className="text-center md:w-1/12 mr-4 md:mr-4  flex flex-col flex-shrink-0 justify-start items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-red-400">
            <figure className=" rounded-full w-20 md:w-28 h-20 md:h-28 flex items-center justify-center transition-transform duration-300 ease-in-out transform p-2">
              <div className="rounded-full">
                <img
                  src="https://dms.mydukaan.io/original/webp/media/c74f22ef-eaa2-404b-832c-7d43fc0c8d86.gif"
                  alt="sale image"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </figure>
            <figcaption className="mt-5 text-xs md:text-sm text-center transition-colors duration-300 ease-in-out hover:text-red-400">
              Sale Zone
            </figcaption>
          </article>

          {/* Scrolling Products */}
          <div
            className="flex space-x-2 md:space-x-12 "
            //  ref={brandContainerRef}
          >
            {firstProductList.map((product, index) => (
              <article
                className="text-center flex flex-col w-28 justify-start items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-red-400"
                key={index}
              >
                <figure className="bg-gray-300 hover:bg-red-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden p-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform">
                  <div className="bg-gray-200 hover:bg-red-200 rounded-full overflow-hidden p-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div className="rounded-full overflow-hidden">
                      <Link
                        href={{
                          pathname: "/products",
                          query: { data: JSON.stringify(product.name) },
                        }}
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                      </Link>
                    </div>
                  </div>
                </figure>
                <div className="flex justify-center items-center w-full mt-3 text-xs md:text-sm text-center py-2 transition-colors duration-300 ease-in-out hover:text-red-400">
                  {product.name}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondHeader;
