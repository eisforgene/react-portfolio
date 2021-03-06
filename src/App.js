import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Navigation from './components/Navigation';
import Project from './components/Project';



function App() {
  return (
    <>
    <Router>
      <Masthead />
      <Project />
      <About />
      <Contact />
      <Copyright />
      <Footer />

      <Navigation />

    </Router>
    </>
  );
}

export default App;
