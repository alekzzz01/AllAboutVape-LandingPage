import React, { useRef, useEffect } from 'react';
import SmokeVideo from '../images/smokevideo.mp4';
import Header from '../images/header.png';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust the playback rate here
    }
  }, []);

  return (
    <>
      <section
        className='w-full h-screen grid content-center bg-neutral-900'
        id='home'
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '1',
            opacity: '0.5'
          }}
        >
          <source src={SmokeVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='max-w-8xl mx-auto container flex items-center justify-center z-10'>
          <div className='text-center'>
              <img src={Header} alt="" />
              {/* <p className='text-white text-xs sm:text-sm lg:text-2xl font-thin mt-2' style={{ letterSpacing: '10px' }}>VAPE RESPONSIBLY.</p> */}
          </div>
      </div>

      </section>
      




    </>
  );
}

export default Home;
