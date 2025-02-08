import React, { useState, useEffect, useRef } from "react";
import ReactModal from "react-modal";
import { IoClose } from "react-icons/io5";
// import { IoMdCheckmarkCircle } from "react-icons/io";

const VideoModal = ({ videoId, url, texts, isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [modalHeight, setModalHeight] = useState("35vh");
  const [scWidth, setScWidth] = useState(null);


  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]); // Update modal state based on isOpen prop

  // let modalHeight = videoId == null ? "35vh" : "63vh";
  const backgroundOpacity = videoId ? 0 : 0.05;
//   useEffect(() => {
//     const updateModalHeight = () => {
//       const screenWidth = window.innerWidth;
//       setScWidth(screenWidth);
//       const screenHeight = window.innerHeight;

//       if (screenWidth < 640) {
//         if (videoId === null) {
//           setModalHeight("69vh");
//         } else if (videoId === "imageModal") {
//           setModalHeight("58vh");
//         } else {
//           setModalHeight("75vh");
//         }
//       }else if(screenHeight<750&&screenWidth>1200){
//         if (videoId === null) {
//           setModalHeight("50vh");
//         } else if (videoId === "imageModal") {
//           setModalHeight("65vh");
//         } else {
//           setModalHeight("65vh");
//         }
//       } else if (
//         screenWidth < 640 &&
//         screenWidth > 450 &&
//         videoId == "imageModal"
//       ) {
//         setModalHeight("68vh");
//       } else if (screenHeight < 900 && screenWidth > 640) {
//         if (videoId === null) {
//           setModalHeight("47vh");
//         } else if (videoId === "imageModal") {
//           setModalHeight("58vh");
//         } else {
//           setModalHeight("65vh");
//         }
//       } else {
//         if (videoId === null) {
//           setModalHeight("40vh");
//         } else if (videoId === "imageModal") {
//           setModalHeight("58vh");
//         } else {
//           setModalHeight("58vh");
//         }
//       }
//     };

//     updateModalHeight();

//     window.addEventListener("resize", updateModalHeight);

//     return () => {
//       window.removeEventListener("resize", updateModalHeight);
//     };
//   }, [videoId]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#e2e8f0",
      border: "none",
      borderRadius: 15,
      padding: 6,
      //   width: "60%",
      height: modalHeight,
      width: "90%", // Set a base width for responsiveness
      maxWidth: "650px",
      maxHeight: "calc(150vh - 100px)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
      appElement={document.getElementById('root')} 
    >
      <div className="video-modal-content relative ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/IMG_2720.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: backgroundOpacity,
            zIndex: -1,
          }}
        ></div>
        <div className="w-full  flex justify-end md:pr-4">
          <button onClick={onClose} className="text-right my-2 font-semibold ">
            <IoClose className="h-6 w-6 hover:text-red-500" />
          </button>
        </div>
          <div className=" flex flex-col justify-center items-center px-4 lg:px-10 ">
            <h2 className="text-xl font-semibold mb-5">
              Get Instant Commissions with Our Affiliate Program!
            </h2>
            <p className="px-2">
              Want to make money promoting top-tier products? Get started now
              and earn, just like our top affiliates.
            </p>
            
            <a
              href={affiliateUrl}
              rel="noopener noreferrer"
              className="w-full flex justify-center"
            >
              <button className="bg-bgblue hover:bg-teal-600 text-white py-1 px-4 rounded-md ml-2 w-3/6 h-9 text-sm font-medium transition-colors duration-300">
                Learn more
              </button>
            </a>
          </div>
      </div>
    </ReactModal>
  );
};

export default VideoModal;
