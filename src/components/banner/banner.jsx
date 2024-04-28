import React from 'react';
import './banner.css'; 
import photo from'../../assets/IMG20240428152424.jpg'

function Banner() {
  return (  
    <div className="banner-container">
      <div className="banner-content">
      <img src={photo} alt="Temporaire" className="round-image" />
        <p className="banner-text">Portfolio of</p>
        <h1 className="banner-title">Dylan Guyon</h1>
        <p className="banner-text">Développeur Front-end</p>
      </div>
    </div>
  );
}

export default Banner;