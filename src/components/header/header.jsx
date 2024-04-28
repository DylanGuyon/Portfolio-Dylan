import React, { useState } from 'react';
import './header.css'; 

function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

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
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`header-menu ${menuOpen ? 'hidden' : ''}`}>
          <li><a href="#" onClick={() => smoothScroll('#about')}>À propos</a></li>
          <li><a href="#" onClick={() => smoothScroll('#skills')}>Skills</a></li>
          <li><a href="#" onClick={() => smoothScroll('#projects')}>Projets</a></li>
          <li><a href="#" onClick={() => smoothScroll('#contact')}>Contact</a></li>
        </ul>
      </nav>
      {menuOpen && (
        <div className="modal">
          <ul className="modal-menu">
            <li><a href="#" onClick={() => { smoothScroll('#about'); toggleMenu(); }}>À propos</a></li>
            <li><a href="#" onClick={() => { smoothScroll('#skills'); toggleMenu(); }}>Skills</a></li>
            <li><a href="#" onClick={() => { smoothScroll('#projects'); toggleMenu(); }}>Projets</a></li>
            <li><a href="#" onClick={() => { smoothScroll('#contact'); toggleMenu(); }}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
