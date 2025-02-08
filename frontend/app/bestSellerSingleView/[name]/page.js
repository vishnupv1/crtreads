"use client";
import bestSeller from "@/app/jsFiles/BestSeller";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

const BestSellerProductView = () => {
  const { name } = useParams(); // Get the product name from the URL
  const router = useRouter(); 
  // Decode the URL parameters
  const decodedName = decodeURIComponent(name);

  const selectedProduct = bestSeller.find((product) => product.name === decodedName);

  console.log(selectedProduct, 'selected product');

  return (
    <div className="relative flex justify-center items-center lg:my-10">
      <div className="absolute top-0 left-4 lg:hidden">
        <div
          className="p-2 cursor-pointer text-gray-600 flex items-center border rounded-md hover:bg-gray-100"
          onClick={() => router.back()} // Handle navigation
        >
          <MdKeyboardBackspace className="w-5 h-5 font-light mr-2" />
          <span className="">Go Back</span>
        </div>
      </div>
      <div className="w-11/12 mt-14 md:w-4/6 flex flex-col md:flex-row">
        <div className="p-4 border-2 mr-0 md:mr-8 mb-4 md:mb-0">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto md:w-96 md:h-96 object-cover" />
        </div>
        <h1 className="text-3xl font-bold ml-0 md:ml-4">{selectedProduct.name}</h1>
      </div>
    </div>
  );
};

export default BestSellerProductView;
