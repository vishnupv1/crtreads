"use client";
import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const branches = [
  {
    name: "Mumbai",
    details:
      "611, Near BP Petrol Pump, Kharbhav - Thane, Mumbai, Maharashtra - 421 302",
  },
  {
    name: "Aluva",
    details:
      "Industrial Development Area, Aluva - 683 112, Kerala, India\n+91 98460 60006 | +91 93881 07710",
  },
  {
    name: "United Arab Emirates",
    details:
      "P.O. Box 515000, Sharjah Media City, Sharjah, United Arab Emirates\n+971 509 01 10 24 | +971 566 88 42 11",
  },
];

function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer
      className="relative p-4 pt-14 flex justify-center items-center text-white overflow-hidden"
      aria-labelledby="footer-title"
    >
      {/* Background image layer */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/truck.jpg')] z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      {/* Content */}
      <div className="relative w-11/12 md:w-9/12 z-10">
        <h2 id="footer-title" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-4/12 text-gray-300 md:font-semibold text-sm mb-8 md:mb-0">
            <img
              src="/compLogo.png"
              alt="Company logo: Your Brand Name"
              className="h-16 lg:h-20 mb-4 filter invert"
            />
            <p>
              Since our inception in 1989, CRC Treads has rapidly emerged as
              India&apos;s premier provider of procured tread rubber. Offering a
              comprehensive selection of high-quality rubber products designed
              for durability and performance, we cater to diverse industrial
              needs with unmatched expertise and attention to detail.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-4/12">
            <h3 className="text-gray-300 md:font-semibold md:text-2xl mb-2">
              Our Locations
            </h3>
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-500 cursor-pointer transition-all duration-300"
                onClick={() => toggleCard(index)}
              >
                <div className="text-gray-200 font-semibold text-lg">
                  {branch.name}
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-sm md:text-base whitespace-pre-line text-gray-300">
                    {branch.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="w-full md:w-3/12">
            <h3 className="mt-4 text-gray-300 md:font-semibold md:text-2xl">
              Contact Us
            </h3>
            <ul className="mb-4 text-gray-300 md:font-semibold">
              <li className="md:text-lg">INDIA +917736031389</li>
              <li className="md:text-lg">UAE +971509011024</li>
              <li className="md:text-lg">crctreads.com</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-300 mt-12">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/crctreads"
                aria-label="Instagram"
              >
                <RiInstagramFill className="w-7 h-7" />
              </a>
              <a
                href="https://youtube.com/shorts/Vx2m-vapfek"
                aria-label="YouTube"
              >
                <TbBrandYoutubeFilled className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/crc-treads"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mb-16 text-gray-300">© 2024 CRC Treads</p>
      </div>
    </footer>
  );
}

export default Footer;
