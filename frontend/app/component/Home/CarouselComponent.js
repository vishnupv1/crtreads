"use client";
import React, { useEffect, useRef } from 'react';
import Player from "@vimeo/player";
const BannerSlider = () => {
  const iframeRef1 = useRef(null);
  const iframeRef2 = useRef(null);

  useEffect(() => {
    const setPlaybackSpeed = (iframeRef) => {
      if (iframeRef.current) {
        const player = new Player(iframeRef.current);
        player.ready().then(() => {
          player.setPlaybackRate(1.5).catch((error) => {
            console.error("Playback rate change failed:", error);
          });
        });
      }
    };

    setPlaybackSpeed(iframeRef1);
    setPlaybackSpeed(iframeRef2);
  }, []);

  useEffect(() => {
    // Dynamically load the Vimeo player script
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      aria-label="Banner"
      className="relative shadow-md w-full"
    >
      <article className="h-full w-full">
        <figure className="h-full w-full overflow-hidden">
          {/* Overlay */}
          <div className="inset-0 bg-black bg-opacity-10 z-10"></div>

          {/* Vimeo Embed */}
          <div className="h-[500px] overflow-hidden md:hidden">
            <div style={{ padding: '180.27% 0 0 0', position: 'relative' }}>
              <iframe
               ref={iframeRef1}
                src="https://player.vimeo.com/video/1051170649?autoplay=1&loop=1&muted=1&controls=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="crc treads"
              ></iframe>
            </div>
          </div>

          <div className="h-[600px] lg:h-[1000px] overflow-hidden hidden md:block">
            <div style={{ padding: '86.27% 0 0 0', position: 'relative' }}>
              <iframe
            ref={iframeRef2}
                src="https://player.vimeo.com/video/1051568333?h=b7dea7afc6&autoplay=1&loop=1&muted=1&controls=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="crc treads"
              ></iframe>
            </div>
          </div>
        </figure>
      </article>
    </section>
  );
};

export default BannerSlider;
