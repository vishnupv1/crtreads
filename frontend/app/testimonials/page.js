"use client";

import { useEffect, useState } from "react";

// Sample Google reviews data (normally fetched from Google Places API)
const sampleReviews = [
  {
    id: 1,
    author_name: "Bright Rubbers,Hubli",
    rating: 5,
    text: "I  exclusively purchase bonding gum, pre-cured treads, and BVC from CRC, and I'm extremely satisfied with their competitive pricing and exceptional product quality.",
    relative_time_description: "3 weeks ago",
    profile_photo_url: "user2.jpg",
  },
  {
    id: 2,
    author_name: "GAYATRI TYRE RETREADING CHENNAI",
    rating: 5,
    text: `In  my opinion, CRC ELEGANT offers the best value for money among all tread options available in the market, surpassing its competitors. Previously, I would purchase from various traders and source bonding gum locally due to its shorter shelf life. However, I now procure even consumables from CRC, and I've been impressed by the exceptional shelf life of their bonding gum."relative_time_description: "3 weeks ago"`,
    profile_photo_url: "user3.jpg",
  },
  {
    id: 3,
    author_name: "ASK AGENCIES",
    rating: 5,
    text: "Our association with CRC began in 2010, two years after they established their depot in Hassan. Initially, customers from Tumkur, including ourselves, started purchasing CRC products from Hassan. Although we faced some technical issues with our machinery, the CRC technical team, including the owner, provided exceptional support to resolve our problems and ensure smooth operations. Impressed with their products' performance in my own factory, I began selling them, which led to a significant increase in my turnover, nearly doubling it.",
    profile_photo_url: "user4.jpg",
  },
  {
    id: 4,
    author_name: "SAPTHAGIRI TYRES",
    rating: 5,
    text: "Our partnership with CRC began in 2003, when we started purchasing from United Trading Company in Karimnagar, which was then managed by Mr. Subair. Even after the dealership transitioned to Sahasra Agencies following Mr. Subair's relocation to Saudi Arabia, we continued to do business with CRC. This enduring 22-year relationship is a testament to the trust and exceptional service provided by CRC.",
    profile_photo_url: "user5.jpg",
  },
  {
    id: 5,
    author_name: "Mrunali Traders, Thane",
    rating: 5,
    text: "Since switching to CRC Hitouch, I've witnessed a steady increase in sales. Despite being encouraged by their sales team to upgrade to premium grades like ELEGANT and POLYSTAR, I've remained loyal to Hitouch, their budget-friendly option for JCB tyres, due to its outstanding performance and value. In fact, I've stuck with Hitouch for 8 years, with no regrets.",
    relative_time_description: "1 week ago",
    profile_photo_url: "userDummy.jpg",
  },
  {
    id: 6,
    author_name: "S Tyre Remoulding , Madurai",
    rating: 4,
    text: "I operate a tyre retreading business, utilizing both hot and cold processes. Previously, I was a franchisee for a premium tread rubber brand, which offered high mileage but began to exhibit increasing issues with chipping and cutting. A consumables trader introduced me to CRC, and I've since transitioned entirely to their products, from patches to OTR tread. I'm pleased with the consistent quality and pricing of their offerings. As a result, I terminated my franchise agreement and now rely solely on CRC for my business needs.",
    relative_time_description: "2 weeks ago",
    profile_photo_url: "userDummy.jpg",
  },
];
function TestimonialPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // In real-world, you'd fetch reviews from your API that interacts with Google Places API
    // For now, we're using static sample data
    setReviews(sampleReviews);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6 lg:px-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
        What Our Clients Say
      </h1>
      <div className="w-full  max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
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
  );
}

export default TestimonialPage;
