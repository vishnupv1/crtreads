"use client";
import flags from "@/app/jsFiles/flagLinks";
import React, { useEffect, useRef } from "react";

function FlagComponent() {
  const countriesRef = useRef(null);

  useEffect(() => {
    const container = countriesRef.current;
    const scrollSpeed = 1.5; // Adjust the speed as needed

    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${container.scrollWidth / 2}px); }
      }
    `;

    // Add keyframes to the stylesheet
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    // Set up animation on the flag container
    container.style.animation = `scroll ${
      container.scrollWidth / (scrollSpeed * 50)
    }s linear infinite`;

    return () => {
      container.style.animation = "";
    };
  }, []);

  // Duplicate flags array to create an infinite loop
  const doubledFlags = [...flags, ...flags];

  return (
    <div className="bg-stone-100 py-10 mt-12">
      <p  className="text-gray-800 text-xl md:text-2xl font-semibold text-center   ml-2 md:ml-8 mb-8">
        Our Global Presence
      </p>
      <div className="flex w-full overflow-hidden">
        <div className="flex space-x-8 lg:space-x-12 w-full" ref={countriesRef}>
          {doubledFlags.map((item, index) => (
            <div
              key={index}
              className="w-20 min-w-20 md:w-48 md:min-w-48  h-14 md:h-32 overflow-hidden mx-2 "
            >
              <img
                src={item}
                alt={`Flag ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlagComponent;
