import React, { useEffect, useRef } from 'react';
import './description.css'; 
import Image from '../../assets/web-coding.jpg'

function Description() {
    const descriptionContentRef = useRef(null);

    useEffect(() => {
      const descriptionContent = descriptionContentRef.current;
      const handleMouseEnter = () => {
        descriptionContent.classList.add('show');
      };
      descriptionContent.addEventListener('mouseenter', handleMouseEnter);
      return () => {
        descriptionContent.removeEventListener('mouseenter', handleMouseEnter);
      };
    }, []);

    return (
        <div className="description-container">
        <div id="about" ref={descriptionContentRef} className="description-content">
            <div className="description-text">
            <h1>Qui suis-je ?</h1>
            <h2>Un étudiant passionné de développement</h2>
            <p>Je suis Dylan GUYON, un jeune développeur web spécialisé dans le front-end. J&apos;ai suivi une formation intensive de 9 mois chez OpenClassrooms en tant que développeur web, compétences équivalentes à un diplôme de niveau Bac+2.</p>
            <p>Depuis mon plus jeune âge, je suis passionné par l&apos;informatique, et je souhaite transformer cette passion en une carrière. Mon objectif est de continuer à développer mes compétences et mes connaissances dans ce vaste univers qu&apos;est l&apos;informatique. Je suis ouvert aux opportunités d&apos;emploi et aux projets futurs dans le domaine.</p>
            <p>En recherche active d&apos;une alternance pour commencer ma prochaine formation : Developpeur frontend JavaScript et React.</p>
            </div>
            <div className="description-image">
            <img src={Image} alt="web developpement" />
            </div>
        </div>
        </div>
    );
}

export default Description;