import React, { useEffect, useRef } from 'react';
import './skills.css'; // Assure-toi d'importer ton fichier CSS
import icon1 from '../../icons/html.png';
import icon2 from '../../icons/css.png';
import icon3 from '../../icons/js.png';
import icon4 from '../../icons/react.png';
import icon5 from '../../icons/nodejs.png';
import icon6 from '../../icons/mongodb.png';
import icon7 from '../../icons/sass.png';
import icon8 from '../../icons/git.png';
import icon9 from '../../icons/postman.png';

function Skills() {
    const skillsContentRef = useRef(null);
    const dividerRef = useRef(null);

    useEffect(() => {
        const skillsContent = skillsContentRef.current;
        const divider = dividerRef.current;
        const handleMouseEnter = () => {
            skillsContent.classList.add('show');
            divider.classList.add('expand'); // Ajoute la classe pour l'animation du divider
        };
        skillsContent.addEventListener('mouseenter', handleMouseEnter);
        return () => {
            skillsContent.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);
  return (
    <div className="skills-container" id="skills">
  <div className="skills-content" ref={skillsContentRef}>
    <div className="skills-title">
      <h2>Compétences</h2>
    </div>
    <div className="divider" ref={dividerRef}></div>
    <div className="skills-icons">
        <a href="https://developer.mozilla.org/fr/docs/Glossary/HTML5" target="_blank" rel="noopener noreferrer"><img src={icon1} alt="Icone 1" /></a>
        <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src={icon2} alt="Icone 2" /></a>
        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src={icon3} alt="Icone 3" /></a>
        <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={icon4} alt="Icone 4" /></a>
        <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener noreferrer"><img src={icon5} alt="Icone 5" /></a>
        <a href="https://www.mongodb.com/fr-fr" target="_blank" rel="noopener noreferrer"><img src={icon6} alt="Icone 6" /></a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src={icon7} alt="Icone 7" /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={icon8} alt="Icone 8" /></a>
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><img src={icon9} alt="Icone 9" /></a>
    </div>
  </div>
</div>

  );
}

export default Skills;