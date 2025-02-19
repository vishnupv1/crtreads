"use client";
import React, { useEffect, useState } from "react";

const sampleReviews = [
  {
    id: 1,
    author_name: "Mrunali Traders, Thane",
    rating: 5,
    text: "Since switching to CRC Hitouch, I've witnessed a steady increase in sales. Despite being encouraged by their sales team to upgrade to premium grades like ELEGANT and POLYSTAR, I've remained loyal to Hitouch, their budget-friendly option for JCB tyres, due to its outstanding performance and value. In fact, I've stuck with Hitouch for 8 years, with no regrets.",
    relative_time_description: "1 week ago",
    profile_photo_url:"user.jpg",
  },
  {
    id: 2,
    author_name: "S Tyre Remoulding , Madurai",
    rating: 4,
    text: "I operate a tyre retreading business, utilizing both hot and cold processes. Previously, I was a franchisee for a premium tread rubber brand, which offered high mileage but began to exhibit increasing issues with chipping and cutting. A consumables trader introduced me to CRC, and I've since transitioned entirely to their products, from patches to OTR tread. I'm pleased with the consistent quality and pricing of their offerings. As a result, I terminated my franchise agreement and now rely solely on CRC for my business needs.",
    relative_time_description: "2 weeks ago",
    profile_photo_url:"user2.jpg"},
  // {
  //   id: 3,
  //   author_name: "Michael Johnson",
  //   rating: 5,
  //   text: "Best experience I've had with any service provider.",
  //   relative_time_description: "3 weeks ago",
  //   profile_photo_url:
  //     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  // },
];

function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // In real-world, you'd fetch reviews from your API that interacts with Google Places API
    // For now, we're using static sample data
    setReviews(sampleReviews);
  }, []);

  return (
    <div
      className="p-4  flex justify-center items-center testimonial"
      style={{ height: "auto", minHeight: "50vh" }}
      aria-labelledby="testimonial-title"
    >
      <div className="w-11/12 md:w-full">
        <h2 id="testimonial-title" className="sr-only">
          Customer Testimonials
        </h2>
        <p className="text-xl text-gray-800 md:text-3xl font-semibold my-12 text-center">
          Our customers love us!
        </p>
        <div className="flex justify-center ">
          <div className="w-full  max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"
              >
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.author_name}
                </h3>
                <div className="flex space-x-1 text-yellow-400">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.357 4.18a1 1 0 00.95.69h4.389a1 1 0 01.606 1.797l-3.556 2.585a1 1 0 00-.364 1.118l1.357 4.181a1 1 0 01-1.538 1.118L10 13.348l-3.556 2.586a1 1 0 01-1.538-1.118l1.357-4.18a1 1 0 00-.364-1.119L2.293 9.594a1 1 0 01.606-1.796h4.389a1 1 0 00.95-.69l1.357-4.181z" />
                      </svg>
                    ))}
                </div>
                <p className="text-gray-600 text-center">
                  &quot;{review.text}&quot;
                </p>
                <span className="text-gray-500 text-sm">
                  {review.relative_time_description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
