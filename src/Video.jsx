import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div>
        <div className="video-container">
      <video autoPlay muted loop className="video">
        <source src="src/Background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1 class="textt"> PIXEL CONSTRUCT</h1>
    </div>
    
    
    
    </div>
    </div>
    
    
  );
};

export default Video;
