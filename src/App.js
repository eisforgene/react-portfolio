import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <>
    <Router>
      <Masthead />
      <Portfolio />
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
