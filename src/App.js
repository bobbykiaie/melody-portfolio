import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWorks from './components/FeaturedWorks';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      <div className="content-wrapper">
        <FeaturedWorks />
      </div>

      <Expertise />

      <div className="content-wrapper">
        <About />
      </div>
      
      {/* New full-screen wrapper for the final section */}
      <section className="contact-footer-section">
        <Contact />
        <Footer />
      </section>

    </div>
  );
}

export default App;