import React from 'react'
import './body3.css';

const Body3 = () => {
  return (
    <div className="headingss">
      <span className="heass2">ARCHVIZ</span>
      <div className="fork">
      <video autoPlay muted loop className="video">
        <source src="src/Archviz.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

      <div className="containerss">
        <div className="column">
          <span className="number">1.</span>
          <p>WE TRANSFORM IDEAS INTO 3D ARCHITECTURAL VISUALIZATION EXPERIENCES.</p>
        </div>
        <div className="column">
          <span className="number">2.</span>
          <p>THE WORLD'S MOST OPEN AND ADVANCED REAL-TIME 3D CREATION TOOL</p>
        </div>
        <div className="column">
          <span className="number">3.</span>
          <p>THE WORLD'S MOST OPEN AND ADVANCED REAL-TIME 3D CREATION TOOL</p>
        </div>
      </div>
    </div>
  )
}

export default Body3
