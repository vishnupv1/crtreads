import Link from "next/link";
import React from "react";

function ProductBaseonSearch({ products }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 p-2">
      {products.map((category, index) => (
        <ProductCard key={index} category={category} />
      ))}
    </div>
  );
}
const ProductCard = ({ category }) => {
  return (
    <div className="bg-white border border-gray-200  rounded-lg shadow-lg p-3">
      <Link
        href={{
          pathname: "/products",
          query: { data: JSON.stringify(category.name) },
        }}
      >
        <img
          src={category.imageUrl}
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

export default ProductBaseonSearch;
