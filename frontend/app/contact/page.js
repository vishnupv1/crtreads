import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 lg:py-20">
      {/* First Row: Short Description and Image */}
      <section className="container mx-auto p-6 flex flex-col lg:flex-row items-center space-x-5 justify-between">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-base md:text-lg text-gray-700">
            We are a leading provider in the industry, offering top-quality products and services. Our mission is to deliver exceptional value and build long-term relationships with our customers.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center h-96">
          <img
            src="https://i.pinimg.com/originals/29/a8/e5/29a8e57b8b799151ffdf9bc7ceca9db2.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Second Row: Contact Us Details */}
      <section className="container mx-auto p-6 bg-white rounded-lg shadow-lg py-12 my-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center">
          <div className="mb-6 md:mb-0 text-center lg:w-1/6">
            <h3 className="text-xl font-bold">Address:</h3>
            <p className="text-gray-700">123 Main Street, City, Country</p>
          </div>
          <div className="mb-6 md:mb-0 text-center lg:w-1/6">
            <h3 className="text-xl font-bold">Phone:</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
          <div className="lg:w-1/6 text-center">
            <h3 className="text-xl font-bold ">Email:</h3>
            <p className="text-gray-700">info@example.com</p>
          </div>
        </div>
      </section>

      {/* Third Row: Map and Enquiry Form */}
      <section className="container mx-auto p-6 flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg">
        {/* <div className="lg:w-1/2 mb-6 lg:mb-0">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373631531567!3d-37.81627927975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776c6f0b8bd789!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1632844590078!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="lg:w-1/2 flex justify-center h-96">
          <img
            src="https://plus.unsplash.com/premium_photo-1675032314301-400d9898183d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="w-5/6 lg:w-1/2 flex flex-col items-center mt-14 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-4 text-center">Enquiry Form</h2>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              {/* <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button> */}
              <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-red-500 text-sm rounded mt-4 md:mt-0">
                <span className="font-bold text-white  relative z-10 group-hover:text-red-500 duration-500">
                  Send
                </span>
                <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 group-hover:-translate-x-full h-full"></span>
                <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 group-hover:translate-x-full h-full"></span>

                <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span className="absolute delay-300 top-0 left-0 w-full bg-red-500 duration-500 group-hover:translate-y-full h-full"></span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
