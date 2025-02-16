import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <body className="font-sans leading-relaxed m-0 p-0" >

    <div className='app-container'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </body>
  );
};

export default App;
