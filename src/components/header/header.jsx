import React from 'react';
import './header.css'; 

function Header() {

  function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth' 
    });
  }

  return (
    <header>
      <div className="header-logo">Dylan .G</div>
      <nav>
        <ul>
          <li><a href="#" onClick={() => smoothScroll('#about')}>À propos</a></li>
          <li><a href="#" onClick={() => smoothScroll('#skills')}>Skills</a></li>
          <li><a href="#" onClick={() => smoothScroll('#projects')}>Projets</a></li>
          <li><a href="#" onClick={() => smoothScroll('#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
