import React, { useEffect, useRef } from 'react';
import './projects.css'; 
import project1 from '../../assets/Screenshot_112.png'
import project2 from '../../assets/Screenshot_1.png'
import project3 from '../../assets/Screenshot_2.png'

function Projects() {

    const projectCardsRef = useRef(null);

    useEffect(() => {
      const projectCards = projectCardsRef.current;
      const handleMouseEnter = () => {
        projectCards.classList.add('show');
      };
      projectCards.addEventListener('mouseenter', handleMouseEnter);
      return () => {
        projectCards.removeEventListener('mouseenter', handleMouseEnter);
      };
    }, []);

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Mes projets Open Classroom</h2>
      <div className="project-grid" ref={projectCardsRef}>

        <div className="project-card">
          <img src={project1} alt="Project Thumbnail" />
          <h3>Kasa</h3>
          <p>Le projet 6 du parcours Développeur Web d&apos;OpenClassrooms consiste à développer la nouvelle plateforme web de Kasa à partir d&apos;un JSON comme base de données en utilisant React.</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Javascript</span>
            <span className="tag">React</span>
            <span className="tag">React Router</span>
          </div>
          <a href="https://github.com/DylanGuyon/Kasa" target="_blank" rel="noopener noreferrer" className="source-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor" className="icon">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>            </svg>
            Source
          </a>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project Thumbnail" />
          <h3>Portfolio Architecte</h3>
          <p>Le projet 3 du parcours Développeur Web d&apos;OpenClassrooms nous emmène sur la conception des différents modules du front-end du portfolio d&apos;une architecte à l&apos;aide de Javascript en communiquant avec une API</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Figma</span>
            <span className="tag">Javascript</span>
            <span className="tag">Swagger</span>
          </div>
          <a href="https://github.com/DylanGuyon/Portfolio-Sophie-Buel" target="_blank" rel="noopener noreferrer" className="source-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor" className="icon">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>            </svg>
            Source
          </a>
        </div>

        <div className="project-card">
          <img src={project3} alt="Project Thumbnail" />
          <h3>Booki</h3>
          <p>Le projet 2 du parcours Développeur Web d&apos;OpenClassrooms nous demande de créer à partir d&apos;une maquette Figma un site de réservation d&apos;hôtels</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Figma</span>
          </div>
          <a href="https://github.com/DylanGuyon/Booki" target="_blank" rel="noopener noreferrer" className="source-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor" className="icon">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>            </svg>
            Source
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;