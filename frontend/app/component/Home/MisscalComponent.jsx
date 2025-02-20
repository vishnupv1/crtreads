"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function MisscalComponent() {
  return (
    <div className="md:hidden">
      <a
        href="https://wa.me/919846060006"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 w-16 h-16 p-0 bg-green-600 rounded-full shadow-lg overflow-hidden flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp className="text-white h-7 w-7" />
      </a>
    </div>
  );
}

export default MisscalComponent;
