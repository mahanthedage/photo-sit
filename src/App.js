// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Marquee from './components/Marquee';
import Services from './components/Services';  // Import Services component

function App() {
  return (
    <div>
      <Header />
      <Marquee />
      <Services /> 
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

