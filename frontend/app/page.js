// Home.jsx
import React from 'react';

import CarouselComponent from './component/Home/CarouselComponent';
import SecondHeader from './component/Home/SecondHeader';
import ShopFromTopBrands from './component/Home/TopBrands';
import BestSellers from './component/Home/BestSellers';
import TrendingProducts from './component/Home/TrendingProducts';
import OfferComponent from './component/Home/OfferComponent';
import NewArrivals from './component/Home/NewArrivals';
import Testimonial from './component/Home/Testimonial';
import AllProductsHome from './component/Home/AllProducts';
import FlagComponent from './component/Home/FlagComponent';
import MisscalComponent from './component/Home/MisscalComponent';
import BrochureDownload from './component/Home/Brochure';

export default function Home() {
  return (
    <div className="min-h-screen min-w-full ">
      {/* Fixed Navbar */}
      <SecondHeader />
      <CarouselComponent />
      <ShopFromTopBrands />
      <BestSellers />
      <AllProductsHome/>
      <OfferComponent/>
      <Testimonial/>
      <BrochureDownload/>
      <FlagComponent/>
      <MisscalComponent/>
    </div>
  );
}
