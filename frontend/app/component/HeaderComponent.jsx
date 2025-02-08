"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger Icon
import { IoClose } from "react-icons/io5"; // Close Icon
import { FaRegUser } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import AllProductsCategory from "../jsFiles/allProducts";
import ProductsDisplay from "./Home/ProductInSearch";
import ProductBaseonSearch from "./Home/ProductBaseonSearch";
import { useSearchContext } from "../context/Context";
import { TfiWorld } from "react-icons/tfi";

function HeaderComponent() {
  const { searchQuery, setSearchQuery, searchOpen, setSearchOpen } =
    useSearchContext();
  const [isOpen, setIsOpen] = useState(false); // Manage the state for mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomProduct, setRandomProduct] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const inputRef = useRef(null);
  const inputRefMobile = useRef(null);
  const filteredProductRef = useRef([]);
  // console.log(filteredProducts, "filtered products");
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleFocus = () => {
    setIsModalOpen(true);
  };

  const handleBlur = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  // var duplicate_google_translate_counter = 0;
  // const googleTranslateElementInit = () => {
  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       "google_translate_element"
  //     );
  //   };
  // };

  // useEffect(() => {
  //   if (!window.googleTranslateElementInit) {
  //     window.googleTranslateElementInit = googleTranslateElementInit;
  //     const addScript = document.createElement("script");
  //     addScript.src =
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     document.body.appendChild(addScript);
  //   }
  // }, []);
  useEffect(() => {
    console.log(window.googleTranslateElementInit, "window translate");
    if (!window.googleTranslateElementInit) {
      const addScript = document.createElement("script");
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);

      // Function to initialize Google Translate
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element2"
        );
      };

      return () => {
        // Cleanup the script on unmount
        document.body.removeChild(addScript);
      };
    }
  }, []);

  // const openTranslateDropdown = () => {
  //   const translateButton = document.querySelector(".goog-te-gadget");
  //   if (translateButton) {
  //     // Trigger the dropdown to open
  //     translateButton.click();
  //   } else {
  //     alert("Error: Could not find Google Translate button.");
  //   }
  // };
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      const allProductNames = AllProductsCategory.flatMap((category) =>
        category.products
          ? category.products.map((product) => product.name)
          : [category.name]
      );
      const randomIndex = Math.floor(Math.random() * allProductNames.length);
      setRandomProduct(allProductNames[randomIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchContent(value);
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");

      const allpro = AllProductsCategory.flatMap((category) =>
        category.products
          ? category.products.map((product) => ({
              ...product,
              categoryName: category.name,
            }))
          : category
      );
      allpro.push(
        {
          name: "Precured Tread Rubber",
          description:
            "High-quality tread rubber for cold retreading process. Suitable for a variety of tire types.",
          imageUrl:
            "https://5.imimg.com/data5/OX/KT/TR/SELLER-5475264/precured-tread-rubber-500x500-1000x1000.jpg",
        },
        {
          name: "Envelope",
          description:
            "Quality envelopes designed to provide a protective seal during the tire curing process.",
          imageUrl:
            "https://midas.ind.in//public/uploads/products/1588262546.jpg",
        }
      );
      console.log(allpro, "all pro");
      const filteredProducts = allpro.filter((product) =>
        regex.test(product.name)
      );
      console.log(filteredProducts, "filtered");
      filteredProductRef.current = filteredProducts;

      setNoResults(filteredProducts.length === 0);
    } else {
      filteredProductRef.current = [];
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      if (window.innerWidth < 768 && inputRefMobile.current) {
        inputRefMobile.current.focus(); // Focus mobile input
      } else if (inputRef.current) {
        inputRef.current.focus(); // Focus desktop input
      }
    }
  }, [isModalOpen]);

  const handleLinkClick = (category) => {
    console.log("Product clicked:", category);
    setIsModalOpen(false);
  };

  return (
    <header
      className={`flex justify-center bg-white  py-4   sm:pb-1 ${
        isModalOpen ? "pb-10 sm:pb-1" : ""
      }`}
    >
      <div className="flex flex-col w-full md:w-full lg:w-full xl:w-11/12 2xl:w-5/6 px-4 md:px-3">
        {/* Row 1: Toggle Button & Logo */}
        <div className="flex justify-between items-center w-full lg:flex-row ">
          <div className="flex items-center justify-between w-8/12 sm:w-7/12 lg:w-1/6 ">
            {/* Hamburger Icon for small screens */}
            <div className="lg:hidden w-2/6">
              <button
                className="text-3xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
            <img
              src="/compLogo.png"
              alt="Company logo: Your Brand Name"
              className="h-16 lg:h-20"
            />
          </div>
          <div className="hidden lg:block w-2/6 mt-4 lg:mt-0 lg:items-center bg-gray-100 ">
            {!isModalOpen && (
              <form
                className="flex w-full z-50 "
                role="search"
                aria-label="Search products"
                onBlur={handleBlur}
                tabIndex={0}
              >
                <label htmlFor="search-input" className="sr-only">
                  Search for {randomProduct}
                </label>
                <input
                  type="text"
                  id="search-input"
                  placeholder={`Search for "${randomProduct}"`}
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-red-400"
                  aria-label="Search input"
                  onFocus={handleFocus}
                />
                <button
                  type="submit"
                  className="p-2 bg-red-500 text-white rounded-r-md hover:bg-red-600"
                  aria-label="Submit search"
                >
                  <CiSearch className="w-6 h-6" />
                </button>
              </form>
            )}

            {/* Modal below search input */}
            {isModalOpen && (
              <>
                {/* Background Overlay */}

                {/* Modal */}

                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={() => setIsModalOpen(false)}
                ></div>
                <div className=" absolute top-[33px] w-[390px] lg:w-[440px]   2xl:w-[510px]  rounded-lg shadow-lg z-50 ">
                  <form
                    className="flex w-full z-50 "
                    role="search"
                    aria-label="Search products"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <label htmlFor="search-input" className="sr-only">
                      Search for products, brands, and more
                    </label>
                    <input
                      type="text"
                      id="search-input"
                      ref={inputRef}
                      // placeholder={`Search for ${randomProduct}`}
                      className="w-full p-2 border  rounded-l-md focus:outline-none focus:border-red-400"
                      aria-label="Search input"
                      onFocus={handleFocus}
                      value={searchContent}
                      onChange={handleSearchChange}
                    />
                    <button
                      type="submit"
                      className="p-2 bg-red-500 text-white rounded-r-md hover:bg-red-600"
                      aria-label="Submit search"
                    >
                      <CiSearch className="w-6 h-6" />
                    </button>
                  </form>
                </div>
                <br />
                <div
                  className="absolute mt-4 transform -translate-x-1/2 w-[600px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4"
                  onBlur={handleBlur}
                  style={{ left: "42vw" }}
                  tabIndex={0}
                >
                  <ul className="mt-2">
                    {filteredProductRef.current.length > 0 ? (
                      <ProductBaseonSearch
                        products={filteredProductRef.current}
                      /> // Show this if there are filtered products
                    ) : noResults ? (
                      <li className="text-center text-gray-500">
                        No matching products found.
                      </li>
                    ) : (
                      <ProductsDisplay onProductClick={handleLinkClick} /> // Fallback to the old component
                    )}{" "}
                  </ul>
                </div>
              </>
            )}
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:w-2/5 mt-4 lg:mt-0 lg:items-center  justify-end`}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center font-medium space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-7 2xl:space-x-10">
              {/* Home */}
              <li className="text-center lg:text-left">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`flex tex items-center justify-center lg:justify-start  hover:text-red-500`}
                >
                  {/* <RiHome5Line className="h-6 w-6 mr-1" /> */}
                  Home
                </Link>
              </li>

              {/* Products */}
              <li className="text-center lg:text-left">
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start  hover:text-red-500"
                >
                  {/* <LiaProductHunt  className="h-6 w-6 mr-1" /> */}
                  Products
                </Link>
              </li>

              {/* Testimonials */}
              <li className="text-center lg:text-left">
                <Link
                  href="/testimonials"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start  hover:text-red-500"
                >
                  {/* <IoNewspaperOutline className="h-6 w-6 mr-1" />  */}
                  Testimonials
                </Link>
              </li>

              {/* Contact Us */}
              <li className="text-center lg:text-left">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start  hover:text-red-500"
                >
                  {/* <FaRegUser className="h-5 w-6 mr-1" />  */}
                  Contact us
                </Link>
              </li>
            <div className="h-10 overflow-hidden  pt-1"><div id="google_translate_element" className=""></div></div>
            </ul>
            {/* <div className="h-10 overflow-hidden">
              <div className="ml-4" onClick={openTranslateDropdown}>
                <TfiWorld />
                <div id="google_translate_element"></div>
              </div>
            </div> */}
          </nav>

          {/* Fullscreen Menu for Mobile Screens */}
          <div
            className={`fixed inset-0 z-50 bg-white transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            {/* Close Icon */}
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-semibold">Menu</span>
              <button className="text-3xl" onClick={toggleMenu}>
                <IoClose />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 flex flex-col justify-between h-full  pt-8 pb-24 text-sm font-semibold">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center    hover:text-red-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    onClick={closeMenu}
                    className="flex items-center  hover:text-red-500"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    onClick={closeMenu}
                    className="flex items-center  hover:text-red-500"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center  hover:text-red-500"
                  >
                    Contact us
                  </Link>
                </li>
                <div className="h-10 overflow-hidden  pt-1 "><div id="google_translate_element2" className=""></div></div>
              </ul>

              {/* Social Media Icons */}
              <div className="flex justify-center mt-16 space-x-6 border-t pt-5">
                <Link href="/facebook">
                  <FaFacebook className="w-5 h-6 text-gray-400 " />
                </Link>
                <Link href="/instagram">
                  <AiFillInstagram className="w-5 h-6 text-gray-400" />
                </Link>
                <Link href="/youtube">
                  <FaYoutube className="w-5 h-6 text-gray-400" />
                </Link>
                <Link href="/linkedin">
                  <FaLinkedin className="w-5 h-6 text-gray-400" />
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Row 2: Search Box */}
        <div className="block lg:hidden w-full mt-4 lg:mt-0 lg:items-center">
          {!isModalOpen && (
            <form
              className="flex w-full"
              role="search"
              aria-label="Search products"
            >
              <label htmlFor="search-input" className="sr-only">
                Search for {randomProduct}
              </label>
              <div className="relative w-full h-12 ">
                <CiSearch className="absolute w-6 h-6 left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
                {/* Search icon */}
                <input
                  type="text"
                  id="search-input"
                  placeholder={`Search for "${randomProduct}"`}
                  className="pl-10 pr-2 w-full py-2 h-12 rounded-md focus:outline-none bg-neutral-100 focus:border-red-400"
                  aria-label="Search input"
                  onFocus={handleFocus}
                />
              </div>
            </form>
          )}
          {isModalOpen && (
            <>
              {/* Background Overlay */}
              <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={() => setIsModalOpen(false)}
              ></div>

              {/* Modal */}
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 xl:w-[430px] rounded-lg shadow-lg z-50">
                <form
                  className="flex w-full"
                  role="search"
                  aria-label="Search products"
                  onClick={(e) => e.stopPropagation()}
                >
                  <label htmlFor="search-input" className="sr-only">
                    Search for products, brands, and more
                  </label>
                  <div className="relative w-full h-12 ">
                    <CiSearch className="absolute left-3 w-6 h-6 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
                    {/* Search icon */}
                    <input
                      type="text"
                      id="search-input"
                      // placeholder={`Search for ${randomProduct}`}
                      ref={inputRefMobile}
                      className="pl-10 pr-2 w-full py-2 h-12 rounded-md focus:outline-none bg-neutral-100 focus:border-red-400"
                      aria-label="Search input"
                      onFocus={handleFocus}
                      value={searchContent}
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
              </div>

              <br />

              {/* Recent Searches */}
              <div
                className="absolute top-36  left-1/2 transform -translate-x-1/2 w-11/12 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4"
                onBlur={handleBlur}
                tabIndex={0}
              >
                <p className="font-semibold">Recent Searches</p>
                <ul className="mt-2">
                  {filteredProductRef.current.length > 0 ? (
                    <ProductBaseonSearch
                      products={filteredProductRef.current}
                    /> // Show this if there are filtered products
                  ) : noResults ? (
                    <li className="text-center text-gray-500">
                      No matching products found.
                    </li>
                  ) : (
                    <ProductsDisplay onProductClick={handleLinkClick} /> // Fallback to the old component
                  )}{" "}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
