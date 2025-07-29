import React from 'react';
import { Slide } from "react-awesome-reveal";
import './About.css';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="about">
      <Slide direction="up" triggerOnce>
        <h2>My Professional Story</h2>
      </Slide>
      
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Melody Sayrany headshot" />
        </div>
        
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            As a scientist with an M.Sc. in Biology, my journey has always been fueled by a deep curiosity and a passion for discovery. While my roots are in the lab, I've always held a love for creative writing and storytelling. This blend of analytical rigor and imaginative expression led me to pursue science writing, where I found satisfaction in transforming intricate research into accessible, engaging narratives.
          </p>
          <p>
            My path naturally evolved into marketing because I believe in the power of showcasing scientific advancements and groundbreaking innovations. I'm driven to connect audiences with the amazing work happening in the world, translating complex ideas into compelling stories that drive awareness, engagement, and ultimately, impact. My expertise lies in bridging the gap between science and compelling communication, ensuring that groundbreaking ideas resonate with diverse audiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;