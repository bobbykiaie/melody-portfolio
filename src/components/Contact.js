import React from 'react';
import { Slide } from "react-awesome-reveal";
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Slide direction="up" triggerOnce>
        <h2>Let's Connect and Collaborate</h2>
      </Slide>
      
      <form className="contact-form">
        <p className="form-intro">Send me a message</p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Melody" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="melody@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here..."></textarea>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;