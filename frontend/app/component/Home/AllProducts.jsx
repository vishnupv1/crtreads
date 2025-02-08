"use client";
import AllProductsCategory from "@/app/jsFiles/allProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function AllProductsHome() {
  return (
    <div className="py-8 md:py-12 flex justify-center items-center bg-stone-100">
      <div className="w-11/12 lg:w-9/12">
        <p  className="text-gray-800 text-xl md:text-2xl font-semibold mb-8 md:mb-12  ">
          ALL PRODUCTS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-6 ">
          {AllProductsCategory.map((product, index) => (
            <Link
              key={index}
              href={{
                pathname: "/products",
                query: { data: JSON.stringify(product.name) },
              }}
            >
              <div className="w-full bg-white h-64 md:h-80 flex-none mt-6 flex flex-col justify-between cursor-pointer shadow-xl overflow-hidden rounded-lg max-w-xs mx-auto">
                {" "}
                {/* <div style={{borderColor:"rgb(143, 143, 143,0.3)"}} className="w-full h-40 md:h-48 shadow border  bg-white rounded-b-lg flex items-center justify-center rounded-t-lg overflow-hidden ">
                  {" "} */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-3/5 object-cover"
                  />
                {/* </div> */}
                <p className="  text-center text-sm md:text-base mx-2">
                  {product.name}
                </p>
                <button
                  type="submit"
                  className="text-white  h-10 md:h-14 font-semibold  flex justify-center md:gap-3 w-full items-center mx-auto  text-sm md:text-lg bg-black backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-gray-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 md:py-2 overflow-hidden group"
                >
                  Enquire
                  {/* <IoIosArrowForward className="md:hidden w-5 h-5" /> */}
                  <svg
                    className="w-8 h-2 sm:h-8 hidden md:block justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-600"
                    ></path>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProductsHome;
