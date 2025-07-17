"use client";
import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import bestSeller from "@/app/jsFiles/BestSeller";

function BestSellers() {
  const router = useRouter();

  const handleCardClick = (productName) => {
    router.push(`/bestSellerSingleView/${encodeURIComponent(productName)}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
          BEST SELLER
        </p>

        <Slider {...settings}>
          {bestSeller.map((product, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(product.name)}
              className="p-4"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 cursor-pointer flex flex-col items-center text-center h-80">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover mt-6"
                />
                <p className="text-base font-medium text-gray-700 mt-4">
                  {product.name}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(product.name);
                  }}
                  className="mt-auto mb-4 bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  Enquire
                  <IoIosArrowForward className="text-white text-xl" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BestSellers;
