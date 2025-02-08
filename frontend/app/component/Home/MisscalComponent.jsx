"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function MisscalComponent() {
  return (
    <div className="md:hidden">
      <a
        href="tel:+1234567890"
        className="fixed bottom-4 right-4 w-16 h-16 p-0 bg-red-600 rounded-full shadow-lg overflow-hidden flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaPhoneAlt className="text-white h-7 w-7"/>
        {/* <img src="/image.png" alt="Missed Call" className="m-0 w-full h-full object-cover " /> */}
      </a>
    </div>
  );
}

export default MisscalComponent;
