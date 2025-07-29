import React from 'react';
import { Slide } from "react-awesome-reveal";
import './Expertise.css';

// Data array for your expertise items
const expertiseData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" fill="currentColor"/>
      </svg>
    ),
    title: "Science & Medical Copywriting",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5S14.76 2 12 2zm0 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-7-5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm14 0c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="currentColor"/>
      </svg>
    ),
    title: "Content Creation",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM7 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 18.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM7 18.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"/>
      </svg>
    ),
    title: "Social Media",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z" fill="currentColor"/>
      </svg>
    ),
    title: "Market Research",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.58l7-7c.37-.36.59-.86.59-1.41s-.22-1.05-.59-1.42zM13 20.01L4 11.01V4h7v.01l9 9-7 7z" fill="currentColor"/><circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "SEO Optimization",
  },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <Slide direction="up" triggerOnce>
        <h2>Expertise</h2>
      </Slide>
      
      <p className="subtitle">
        A passionate communicator. Specialized in scientific storytelling
      </p>
      
      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div key={index} className="expertise-item">
            <div className="icon-circle">
              {item.icon}
            </div>
            <p className="expertise-title">{item.title}</p>
          </div>
        ))}
      </div>

      <p className="expertise-description">
        My deep roots in science mean I hit the ground running. I have a knack for taking the most complex innovations and translating them into clear, compelling messages that resonate immediately. I understand the unique complexities of life science marketing, and I leverage my writing experience to craft content that genuinely connects with audiences and firmly establishes thought leadership. I can work with various teams, from subject matter experts to designers, to streamline workflows and accelerate projects from concept to impactful delivery.
      </p>
    </section>
  );
};

export default Expertise;