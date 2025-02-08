'use client'
import OfferImages from "@/app/jsFiles/OfferImages";
import React, { useEffect, useState } from "react";

function OfferComponent() {
  // const [randomOne, setRandomNumberOne] = useState(0);
  // const [randomTwo, setRandomNumberTwo] = useState(0);
  // const [randomThree, setRandomNumberThree] = useState(0);
  // const [randomFour, setRandomNumberFour] = useState(0);
  // const [opacityOne,setOpacityOne]=useState(1)
  // const [opacityTwo,setOpacityTwo]=useState(1)
  // const [opacityThree,setOpacityThree]=useState(1)
  // const [opacityFour,setOpacityFour]=useState(1)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setOpacityOne(0)
  //     const random = Math.floor(Math.random() * 4);
  //     setRandomNumberOne(random);
  //     setOpacityOne(1)
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const random = Math.floor(Math.random() * 4);
  //     setRandomNumberTwo(random);
  //   }, 3000);

  //   const initialDelay = setTimeout(() => {
  //     setRandomNumberTwo(Math.floor(Math.random() * 4));
  //   }, 200);

  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(initialDelay);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const random = Math.floor(Math.random() * 4);
  //     setRandomNumberThree(random);
  //   }, 3000);

  //   const initialDelay = setTimeout(() => {
  //     setRandomNumberThree(Math.floor(Math.random() * 4));
  //   }, 500);

  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(initialDelay);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const random = Math.floor(Math.random() * 4);
  //     setRandomNumberFour(random);
  //   }, 3000);

  //   const initialDelay = setTimeout(() => {
  //     setRandomNumberFour(Math.floor(Math.random() * 4));
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(initialDelay);
  //   };
  // }, []);
//   "/CRC5.png",
//     '/CRC3.jpg',
//     '/CRC1.jpg',
//     '/CRC2.jpg'
// ]
//     , [
//     "/CRC4.png",
//     '/CRC3.jpg',
//     '/CRC6.png',
//     '/CRC7.png']
  return (
    <div className="flex justify-center bg-stone-50 shadow-inner items-center h-full pt-12  lg:pt-20">
      <div className="w-5/6 md:w-5/6">
        {/* First Row: Four Images */}
        <div className="md:flex py-3">
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mr-3 ">
            <div className="h-48 w-full overflow-hidden rounded-lg md:rounded-none">
              <img
                src='/CRC7.png'
                alt=""
                className="h-full w-full object-cover"
                // style={{opacity:opacityOne}}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden rounded-lg md:rounded-none ">
              <img
                src='/CRC2.jpg'
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden rounded-lg md:rounded-none">
              <img
                src='/CRC6.png'
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-3">
            <div className="h-48 w-full overflow-hidden rounded-lg md:rounded-none">
              <img
                src='/CRC5.png'
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Row: One Image */}
        <div className="w-full h-96 md:h-4/6 overflow-hidden rounded-lg md:rounded-none mt-4 bg-yellow-400">
          {/* <img
            src="https://www.coxmotorparts.co.uk/wp-content/uploads/2022/05/car-tyres.jpg"
            alt=""
            className="w-full h-full object-cover " // Ensure the image fills the container
          /> */}
          <video
            src="/SecondVideo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover filter contrast-125 brightness-110"
            loading="lazy"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default OfferComponent;
