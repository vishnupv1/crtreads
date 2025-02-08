import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import { TbBrandYoutubeFilled } from "react-icons/tb";

function Footer() {
  return (
    <footer
      className="p-4 pt-14  flex justify-center items-center"
      style={{
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
      aria-labelledby="footer-title"
    >
      <div className="w-11/12 md:w-9/12">
        <h2 id="footer-title" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-4/12 text-gray-600 md:font-semibold text-sm mb-8 md:mb-0">
            <img
              src="/compLogo.png"
              alt="Company logo: Your Brand Name"
              className="h-16 lg:h-20 mb-4"
            />
            <p>
              Since our inception in 2018, CR Treads has rapidly emerged as
              India&apos;s premier provider of procured tread rubber. Offering a
              comprehensive selection of high-quality rubber products designed
              for durability and performance, we cater to diverse industrial
              needs with unmatched expertise and attention to detail. With a
              growing network of partners and clients across the nation, we are
              committed to expanding our services and delivering exceptional
              value to every customer.{" "}
            </p>
          </div>
          {/* <div className="w-full md:w-3/12 mb-8 md:mb-0">
            <h3 className="text-gray-600 md:font-semibold text-2xl">LINKS</h3>
            <ul className="mt-4 text-gray-600 md:font-semibold">
              <li className="my-4">Shop For </li>
              <li className="my-4">Shop For </li>
              <li className="my-4">Shop For</li>
            </ul>
          </div> */}
          <div className="w-full md:w-3/12 ">
            <h3 className="mt-4 text-gray-600 md:font-semibold md:text-2xl">Contact Us</h3>
            <ul className="mb-4 text-gray-600 md:font-semibold">
              <li className="md:text-lg">Call Us at +91999999999</li>
              <li className="md:text-lg">crtreadstyre.com</li>
            </ul>
            <div className="flex  justify-center md:justify-normal space-x-4 text-gray-600 mt-12">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <RiInstagramFill className="w-7 h-7" />
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube">
                <TbBrandYoutubeFilled className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="w-7 h-7" />
              </a>
              {/* <a
                href="https://www.apple.com/app-store/"
                aria-label="Apple Store"
              >
                <IoLogoApple className="w-7 h-8" />
              </a>
              <a
                href="https://play.google.com/store"
                aria-label="Google Play Store"
              >
                <IoLogoGooglePlaystore className="w-7 h-7" />
              </a> */}
            </div>
          </div>
        </div>
        <p className="text-center mb-16 text-gray-600">
          © 2024 CR Treads Tyres
        </p>
      </div>
    </footer>
  );
}

export default Footer;
