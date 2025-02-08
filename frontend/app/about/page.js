"use client";
import { useState } from "react";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 space-y-16 bg-gray-50">
      {/* First Row - Short Description & Image */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-7xl space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to our company! We specialize in delivering high-quality products
            with a passion for excellence. Our mission is to exceed customer
            expectations by providing exceptional services and innovative solutions.
            Let us help you achieve your goals with our experienced and dedicated team.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://source.unsplash.com/800x600/?team,office"
            alt="Our Team"
            className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Row - Contact Details */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Phone:</strong> +1 234 567 890
            </li>
            <li>
              <strong>Email:</strong> contact@company.com
            </li>
            <li>
              <strong>Address:</strong> 123 Business Ave, Suite 456, City, Country
            </li>
            <li>
              <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Follow Us</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Facebook:</strong> @ourcompany
            </li>
            <li>
              <strong>Twitter:</strong> @ourcompany
            </li>
            <li>
              <strong>LinkedIn:</strong> OurCompany Ltd.
            </li>
            <li>
              <strong>Instagram:</strong> @ourcompany_insta
            </li>
          </ul>
        </div>
      </div>

      {/* Third Row - Map & Enquiry Form */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Map */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-64 lg:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.96315791531932!3d-37.816279379751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f558fbed7b!2sMelbourne!5e0!3m2!1sen!2sau!4v1634120675214!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>

        {/* Enquiry Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Enquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
