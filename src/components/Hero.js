import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Hero.css';
import heroBackgroundImage from '../assets/background.avif';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBackgroundImage})`
  };

  return (
    <section id="hero" className="hero" style={heroStyle}>
      <div className="hero-content">
        <Fade cascade damping={0.2} triggerOnce>
          {/* Add a line break for precise text wrapping */}
          <h1>Connecting Ideas<br />to Audiences</h1>
          <p>Science Communicator & Marketing Strategist</p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;