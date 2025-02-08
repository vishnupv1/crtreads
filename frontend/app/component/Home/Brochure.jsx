"use client";
import React from "react";

function BrochureDownload() {
  const brochureUrl = "/Crescent Brochure-1.pdf";

  return (
    <div
      className="p-4 flex justify-center items-center"
      aria-labelledby="brochure-title"
    >
      <div className="w-11/12 md:w-full text-center">
        <h2 id="brochure-title" className="sr-only">
          Download Our Brochure
        </h2>
        <p className="text-xl text-gray-800 md:text-3xl font-semibold my-8">
          Learn More About Us!
        </p>

        <a href={brochureUrl} download>
          <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-red-600 group px-8 py-2">
            <span class="relative z-10 text-red-600 group-hover:text-white text-xl duration-500">
            Download Brochure
            </span>
            <span class="absolute w-full h-full bg-red-600 -left-42 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-red-600 -right-42 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default BrochureDownload;
