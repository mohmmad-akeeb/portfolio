import React from 'react';

import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
