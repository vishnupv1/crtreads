import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

function Footer() {
  return (
    <footer
      className="relative p-4 pt-14 flex justify-center  items-center bg-cover bg-center bg-[url('/truck.jpg')] text-white"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      aria-labelledby="footer-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative w-11/12 md:w-9/12">
        <h2 id="footer-title" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-4/12 text-gray-300 md:font-semibold text-sm mb-8 md:mb-0">
            <img
              src="/compLogo.png"
              alt="Company logo: Your Brand Name"
              className="h-16 lg:h-20 mb-4"
            />
            <p>
              Since our inception in 1989, CRC Treads has rapidly emerged as
              India&apos;s premier provider of procured tread rubber. Offering a
              comprehensive selection of high-quality rubber products designed
              for durability and performance, we cater to diverse industrial
              needs with unmatched expertise and attention to detail.
            </p>
          </div>

          <div className="w-full md:w-3/12">
            <h3 className="mt-4 text-gray-300 md:font-semibold md:text-2xl">Contact Us</h3>
            <ul className="mb-4 text-gray-300 md:font-semibold">
              <li className="md:text-lg">INDIA +917736031389</li>
              <li className="md:text-lg">UAE +971509011024</li>
              <li className="md:text-lg">crctreads.com</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-300 mt-12">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/crctreads" aria-label="Instagram">
                <RiInstagramFill className="w-7 h-7" />
              </a>
              <a href="https://youtube.com/shorts/Vx2m-vapfek" aria-label="YouTube">
                <TbBrandYoutubeFilled className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/crc-treads" aria-label="LinkedIn">
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
