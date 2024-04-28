import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Description from './components/description/description';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Description />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
