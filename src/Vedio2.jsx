import React, { useRef, useEffect } from 'react';
import './Video.css';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleLoadedMetadata = () => {
      video.currentTime = 4;
      video.play();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted loop className="video">
        <source src="src/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1 className="textt">PIXEL CONSTRUCT</h1>
      </div>
    </div>
  );
};

export default Video;
