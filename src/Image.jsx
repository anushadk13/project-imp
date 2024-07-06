import React from 'react';
import './Image.css';

const Image= () => {
  const texts = [
    "This is the first text.",
    "Here comes the second text.",
    "And this is the third text.",
    "Finally, the fourth text."
  ];

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://via.placeholder.com/400x400?text=Image" alt="Constant" />
      </div>
      <div className="text-section">
        {texts.map((text, index) => (
          <div key={index} className="text-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
